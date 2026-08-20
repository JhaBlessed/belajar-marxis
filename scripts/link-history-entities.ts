import * as fs from 'fs';
import * as path from 'path';
import { indonesiaTimeline } from '../src/generated/indonesiaTimeline';
import { authors } from '../src/data/authors';
import { organizations } from '../src/data/organizations';
import { works } from '../src/data/works';
import { historicalPersons } from '../src/data/historicalPersons';

// 1. Alias Dictionaries
const authorAliases: Record<string, string[]> = {
  'karl-marx': ['Karl Marx', 'Marx'],
  'friedrich-engels': ['Friedrich Engels', 'Engels'],
  'v-i-lenin': ['V. I. Lenin', 'V.I. Lenin', 'Lenin', 'Vladimir Lenin', 'Vladimir Ilyich Lenin'],
  'tan-malaka': ['Tan Malaka', 'Ibrahim Datuk Tan Malaka'],
  'leon-trotsky': ['Leon Trotsky', 'Trotsky', 'Trotski'],
  'alexandra-kollontai': ['Alexandra Kollontai', 'Kollontai'],
  'chen-duxiu': ['Chen Duxiu', 'Chen Tu-hsiu']
};

const orgAliases: Record<string, string[]> = {
  'sarekat-islam': ['Sarekat Islam', 'SI'],
  'isdv': ['ISDV', 'Indische Sociaal-Democratische Vereeniging'],
  'pki': ['PKI', 'Partai Komunis Indonesia'],
  'komintern': ['Komintern', 'Komunis Internasional', 'Communist International'],
  'pari': ['PARI', 'Partai Republik Indonesia'],
  'persatuan-perjuangan': ['Persatuan Perjuangan']
};

const workAliases: Record<string, string[]> = {
  'manifesto-partai-komunis': ['Manifesto Komunis', 'Manifesto Partai Komunis'],
  'imperialisme': ['Imperialisme', 'Imperialisme sebagai Tahapan Khusus Kapitalisme', 'Imperialisme, Tahap Tertinggi Kapitalisme'],
  'aksi-massa': ['Aksi Massa'],
  'madilog': ['Madilog'],
  'gerpolek': ['GERPOLEK', 'Gerilya Politik Ekonomi'],
  'naar-de-republiek-indonesia': ['Naar de Republiek Indonesia', 'Menuju Republik Indonesia'],
  'komunisme-dan-pan-islamisme': ['Komunisme dan Pan-Islamisme'],
  'negara-dan-revolusi': ['Negara dan Revolusi']
};

works.forEach(w => {
  if (!workAliases[w.id]) {
    workAliases[w.id] = [w.title];
    if (w.originalTitle) workAliases[w.id].push(w.originalTitle);
  }
});

const reviewQueue = {
  highConfidenceLinks: [] as any[],
  mediumConfidenceLinks: [] as any[],
  lowConfidenceCandidates: [] as any[],
  unmatchedReferences: [] as any[]
};

const stats = {
  events: indonesiaTimeline.length,
  eventsWithAuthors: 0,
  eventsWithWorks: 0,
  eventsWithOrganizations: 0,
  eventsWithHistoricalPersons: 0,
  uniqueAuthorsLinked: new Set<string>(),
  uniqueWorksLinked: new Set<string>(),
  uniqueOrganizationsLinked: new Set<string>(),
  uniqueHistoricalPersonsLinked: new Set<string>(),
  highConfidenceLinks: 0,
  mediumConfidenceLinks: 0,
  lowConfidenceCandidates: 0
};

// 2. Linking Logic
indonesiaTimeline.forEach(event => {
  const text = (event.title + ' ' + event.description).replace(/\s+/g, ' ');

  // Reset arrays to rebuild them
  event.relatedAuthorIds = [];
  event.relatedWorkIds = [];
  event.relatedOrganizationIds = [];
  event.relatedHistoricalPersonIds = [];
  event.relationEvidence = [];

  const addEvidence = (type: 'author'|'work'|'organization'|'historical-person', id: string, confidence: 'high'|'medium'|'low', match: string) => {
    if (confidence === 'high' || confidence === 'medium') {
      if (type === 'author' && !event.relatedAuthorIds.includes(id)) { event.relatedAuthorIds.push(id); stats.uniqueAuthorsLinked.add(id); }
      if (type === 'work' && !event.relatedWorkIds.includes(id)) { event.relatedWorkIds.push(id); stats.uniqueWorksLinked.add(id); }
      if (type === 'organization' && !event.relatedOrganizationIds?.includes(id)) { 
        if (!event.relatedOrganizationIds) event.relatedOrganizationIds = [];
        event.relatedOrganizationIds.push(id); stats.uniqueOrganizationsLinked.add(id); 
      }
      if (type === 'historical-person' && !event.relatedHistoricalPersonIds?.includes(id)) {
        if (!event.relatedHistoricalPersonIds) event.relatedHistoricalPersonIds = [];
        event.relatedHistoricalPersonIds.push(id); stats.uniqueHistoricalPersonsLinked.add(id);
      }
    }
    
    event.relationEvidence = event.relationEvidence || [];
    event.relationEvidence.push({
      entityType: type,
      entityId: id,
      confidence,
      matchedText: match
    });

    const queueItem = { eventId: event.slug, entityType: type, entityId: id, matchedText: match };
    if (confidence === 'high') { stats.highConfidenceLinks++; reviewQueue.highConfidenceLinks.push(queueItem); }
    if (confidence === 'medium') { stats.mediumConfidenceLinks++; reviewQueue.mediumConfidenceLinks.push(queueItem); }
    if (confidence === 'low') { stats.lowConfidenceCandidates++; reviewQueue.lowConfidenceCandidates.push(queueItem); }
  };

  // Match Authors
  authors.forEach(author => {
    const aliases = authorAliases[author.id] || [author.name];
    let matched = false;
    for (const alias of aliases) {
      if (matched) break;
      const regex = new RegExp(`\\b${alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (regex.test(event.title)) { addEvidence('author', author.id, 'high', alias); matched = true; }
      else if (regex.test(text)) { addEvidence('author', author.id, 'medium', alias); matched = true; }
    }
  });

  // Match Historical Persons
  historicalPersons.forEach(person => {
    const aliases = person.aliases;
    let matched = false;
    for (const alias of aliases) {
      if (matched) break;
      const regex = new RegExp(`\\b${alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (regex.test(event.title)) { addEvidence('historical-person', person.id, 'high', alias); matched = true; }
      else if (regex.test(text)) { addEvidence('historical-person', person.id, 'medium', alias); matched = true; }
    }
  });

  // Match Orgs
  organizations.forEach(org => {
    const aliases = orgAliases[org.id] || [org.name];
    let matched = false;
    for (const alias of aliases) {
      if (matched) break;
      const regex = new RegExp(`\\b${alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (regex.test(event.title)) { addEvidence('organization', org.id, 'high', alias); matched = true; }
      else if (regex.test(text)) { addEvidence('organization', org.id, 'medium', alias); matched = true; }
    }
  });

  // Match Works
  works.forEach(w => {
    const aliases = workAliases[w.id] || [w.title];
    let matched = false;
    for (const alias of aliases) {
      if (matched) break;
      if (alias.length < 5) continue; 
      const regex = new RegExp(`\\b${alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (regex.test(event.title)) { addEvidence('work', w.id, 'high', alias); matched = true; }
      else if (regex.test(text)) { addEvidence('work', w.id, 'medium', alias); matched = true; }
    }
  });

  if (event.relatedAuthorIds.length > 0) stats.eventsWithAuthors++;
  if (event.relatedWorkIds.length > 0) stats.eventsWithWorks++;
  if (event.relatedOrganizationIds && event.relatedOrganizationIds.length > 0) stats.eventsWithOrganizations++;
  if (event.relatedHistoricalPersonIds && event.relatedHistoricalPersonIds.length > 0) stats.eventsWithHistoricalPersons++;
  
  if (event.relatedAuthorIds.length === 0 && event.relatedWorkIds.length === 0 && (!event.relatedOrganizationIds || event.relatedOrganizationIds.length === 0) && (!event.relatedHistoricalPersonIds || event.relatedHistoricalPersonIds.length === 0)) {
    reviewQueue.unmatchedReferences.push({ eventId: event.slug, title: event.title });
  }
});

fs.writeFileSync(path.join(process.cwd(), 'src/generated/indonesiaTimeline.ts'), 
  `import type { TimelineEvent } from '../types';\n\nexport const indonesiaTimeline: TimelineEvent[] = ${JSON.stringify(indonesiaTimeline, null, 2)};\n`
);

fs.writeFileSync(path.join(process.cwd(), 'src/generated/history-link-review.json'), JSON.stringify(reviewQueue, null, 2));

const finalReport = {
  events: stats.events,
  eventsWithAuthors: stats.eventsWithAuthors,
  eventsWithHistoricalPersons: stats.eventsWithHistoricalPersons,
  eventsWithWorks: stats.eventsWithWorks,
  eventsWithOrganizations: stats.eventsWithOrganizations,
  uniqueAuthorsLinked: stats.uniqueAuthorsLinked.size,
  uniqueHistoricalPersonsLinked: stats.uniqueHistoricalPersonsLinked.size,
  uniqueWorksLinked: stats.uniqueWorksLinked.size,
  uniqueOrganizationsLinked: stats.uniqueOrganizationsLinked.size,
  highConfidenceLinks: stats.highConfidenceLinks,
  mediumConfidenceLinks: stats.mediumConfidenceLinks,
  lowConfidenceCandidates: stats.lowConfidenceCandidates
};
fs.writeFileSync(path.join(process.cwd(), 'src/generated/history-link-report.json'), JSON.stringify(finalReport, null, 2));

console.log('Entity Linking Complete');
