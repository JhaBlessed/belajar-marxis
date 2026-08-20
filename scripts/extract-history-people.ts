import * as fs from 'fs';
import * as path from 'path';
import { indonesiaTimeline } from '../src/generated/indonesiaTimeline';
import { authors } from '../src/data/authors';
import { organizations } from '../src/data/organizations';
import type { HistoricalPerson, Organization } from '../src/types';

// Extraction Targets
const personCandidates: Record<string, string[]> = {
  'semaun': ['Semaun', 'Semaoen'],
  'henk-sneevliet': ['Henk Sneevliet', 'Sneevliet'],
  'darsono': ['Darsono'],
  'alimin': ['Alimin', 'Alimin Prawirodirdjo'],
  'musso': ['Musso', 'Moesso', 'Paul Mussotte'],
  'dn-aidit': ['D.N. Aidit', 'D. N. Aidit', 'Aidit', 'Dipa Nusantara Aidit'],
  'sukarno': ['Sukarno', 'Soekarno', 'Bung Karno'],
  'sudisman': ['Sudisman'],
  'njoto': ['Njoto'],
  'njono': ['Njono'],
  'supardjo': ['Supardjo', 'Brigadir Jenderal Supardjo'],
  'aliarcham': ['Aliarcham'],
  'hasan-raid': ['Hasan Raid'],
  'marco-kartodikromo': ['Marco Kartodikromo', 'Mas Marco'],
  'haji-misbach': ['Haji Misbach', 'Misbach']
};

const orgCandidates: Record<string, string[]> = {
  'sarekat-islam': ['Sarekat Islam', 'SI'],
  'sarekat-rakyat': ['Sarekat Rakyat', 'SR'],
  'isdv': ['ISDV', 'Indische Sociaal-Democratische Vereeniging'],
  'pki': ['PKI', 'Partai Komunis Indonesia'],
  'komintern': ['Komintern', 'Komunis Internasional', 'Communist International'],
  'pari': ['PARI', 'Partai Republik Indonesia'],
  'persatuan-perjuangan': ['Persatuan Perjuangan'],
  'budi-utomo': ['Budi Utomo', 'Boedi Oetomo'],
  'pni': ['PNI', 'Partai Nasional Indonesia'],
  'sobsci': ['SOBSI', 'Sentral Organisasi Buruh Seluruh Indonesia'],
  'gerwani': ['Gerwani', 'Gerakan Wanita Indonesia'],
  'lecra': ['Lekra', 'Lembaga Kebudayaan Rakyat'],
  'btti': ['BTI', 'Barisan Tani Indonesia']
};

const extractedPersons = new Map<string, HistoricalPerson>();
const newOrgs = new Map<string, Organization>();
const authorIds = new Set(authors.map(a => a.id));
const existingOrgIds = new Set(organizations.map(o => o.id));

const report = {
  historicalPersonsFound: 0,
  historicalPersonsConfirmed: 0,
  historicalPersonsNeedsReview: 0,
  canonicalAuthorsLinked: 0, // from earlier link process basically, but let's count overlaps
  organizationsTotal: existingOrgIds.size,
  organizationsNewlyConfirmed: 0,
  eventsWithHistoricalPersonLinks: new Set<string>(),
  eventsWithOrganizationLinks: new Set<string>(), // we will append to existing
  brokenRelations: 0
};

const orgReview = {
  confirmed: [] as any[],
  needsReview: [] as any[],
  duplicateCandidate: [] as any[]
};

// 1. Scanning
indonesiaTimeline.forEach(event => {
  const text = (event.title + ' ' + event.description).toLowerCase();

  // Persons
  for (const [id, aliases] of Object.entries(personCandidates)) {
    if (authorIds.has(id)) {
      // It's a canonical author, skip creating HistoricalPerson
      if (aliases.some(a => new RegExp(`\\b${a.toLowerCase()}\\b`, 'i').test(text))) {
        report.canonicalAuthorsLinked++;
      }
      continue;
    }

    let matched = false;
    let matchText = '';
    for (const alias of aliases) {
      if (new RegExp(`\\b${alias.toLowerCase()}\\b`, 'i').test(text)) {
        matched = true;
        matchText = alias;
        break;
      }
    }

    if (matched) {
      if (!extractedPersons.has(id)) {
        extractedPersons.set(id, {
          id,
          slug: id,
          name: aliases[0],
          aliases: aliases,
          relatedEventIds: [],
          relatedOrganizationIds: [],
          relatedWorkIds: [],
          localSourcePaths: event.localSourcePath ? [event.localSourcePath] : [],
          originalSourceUrls: event.originalSourceUrl ? [event.originalSourceUrl] : [],
          metadataConfidence: 'medium'
        });
        report.historicalPersonsFound++;
        report.historicalPersonsConfirmed++; // Auto confirm based on seed list
      }
      
      const p = extractedPersons.get(id)!;
      if (!p.relatedEventIds.includes(event.id)) p.relatedEventIds.push(event.id);
      if (event.localSourcePath && !p.localSourcePaths.includes(event.localSourcePath)) p.localSourcePaths.push(event.localSourcePath);
      
      report.eventsWithHistoricalPersonLinks.add(event.id);
    }
  }

  // Orgs
  for (const [id, aliases] of Object.entries(orgCandidates)) {
    let matched = false;
    let matchText = '';
    for (const alias of aliases) {
      if (new RegExp(`\\b${alias.toLowerCase()}\\b`, 'i').test(text)) {
        matched = true;
        matchText = alias;
        break;
      }
    }

    if (matched) {
      if (existingOrgIds.has(id)) {
        // Skip duplicate org candidate, handled by link:history
      } else {
        if (!newOrgs.has(id)) {
          newOrgs.set(id, {
            id,
            slug: id,
            name: aliases[0],
            description: `Organisasi ${aliases[0]} (Diekstrak otomatis dari sejarah).`,
            abbreviation: aliases[1] || undefined,
            relatedEventIds: [],
            relatedAuthorIds: [],
            relatedWorkIds: [],
            localSourcePath: event.localSourcePath,
            originalSourceUrl: event.originalSourceUrl,
            sourceIds: [],
            metadataConfidence: 'medium'
          });
          report.organizationsNewlyConfirmed++;
          orgReview.confirmed.push({ id, name: aliases[0], evidence: event.id });
        }
        const o = newOrgs.get(id)!;
        if (!o.relatedEventIds.includes(event.id)) o.relatedEventIds.push(event.id);
      }
      
      report.eventsWithOrganizationLinks.add(event.id);
    }
  }
});

// Finalize output
const newPersonsArray = Array.from(extractedPersons.values());
const personsFileContent = `import type { HistoricalPerson } from '../types';\n\nexport const historicalPersons: HistoricalPerson[] = ${JSON.stringify(newPersonsArray, null, 2)};\n`;
fs.writeFileSync(path.join(process.cwd(), 'src/data/historicalPersons.ts'), personsFileContent);

// Append orgs
if (newOrgs.size > 0) {
  const allOrgs = [...organizations, ...Array.from(newOrgs.values())];
  const orgsFileContent = `import type { Organization } from '../types';\n\nexport const organizations: Organization[] = ${JSON.stringify(allOrgs, null, 2)};\n`;
  fs.writeFileSync(path.join(process.cwd(), 'src/data/organizations.ts'), orgsFileContent);
}

// Generate Review
fs.writeFileSync(path.join(process.cwd(), 'src/generated/organization-review.json'), JSON.stringify(orgReview, null, 2));

const reportFinal = {
  HistoricalPersonsFound: report.historicalPersonsFound,
  HistoricalPersonsConfirmed: report.historicalPersonsConfirmed,
  HistoricalPersonsNeedsReview: report.historicalPersonsNeedsReview,
  CanonicalAuthorsLinked: report.canonicalAuthorsLinked,
  Organizations: existingOrgIds.size + report.organizationsNewlyConfirmed,
  OrganizationsNewlyConfirmed: report.organizationsNewlyConfirmed,
  EventsWithHistoricalPersonLinks: report.eventsWithHistoricalPersonLinks.size,
  EventsWithOrganizationLinks: report.eventsWithOrganizationLinks.size,
  BrokenRelations: report.brokenRelations
};
fs.writeFileSync(path.join(process.cwd(), 'src/generated/history-entity-report.json'), JSON.stringify(reportFinal, null, 2));

console.log('Extraction complete');
