import * as fs from 'fs';
import * as path from 'path';
import { indonesiaTimeline } from '../src/generated/indonesiaTimeline';
import { organizations } from '../src/data/organizations';
import { authors } from '../src/data/authors';
import { works } from '../src/data/works';
import { sources } from '../src/data/sources';
import { historicalPersons } from '../src/data/historicalPersons';

let errors = 0;

function reportError(msg: string) {
  console.error('[ERROR]', msg);
  errors++;
}

const slugs = new Set<string>();
for (const evt of indonesiaTimeline) {
  if (slugs.has(evt.slug || '')) { reportError(`Duplicate event slug: ${evt.slug}`); }
  slugs.add(evt.slug || '');

  if (!evt.sourceIds || evt.sourceIds.length === 0) { reportError(`Event ${evt.slug} has no sourceIds.`); }

  if (evt.year && (evt.year < 1800 || evt.year > new Date().getFullYear())) {
    reportError(`Event ${evt.slug} has invalid year: ${evt.year}`);
  }

  for (const orgId of evt.relatedOrganizationIds || []) {
    if (!organizations.find(o => o.id === orgId || o.slug === orgId)) { reportError(`Event ${evt.slug} refers to unknown org: ${orgId}`); }
  }
  for (const authorId of evt.relatedAuthorIds || []) {
    if (!authors.find(a => a.id === authorId || a.slug === authorId)) { reportError(`Event ${evt.slug} refers to unknown author: ${authorId}`); }
  }
  for (const hpId of evt.relatedHistoricalPersonIds || []) {
    if (!historicalPersons.find(hp => hp.id === hpId || hp.slug === hpId)) { reportError(`Event ${evt.slug} refers to unknown historical person: ${hpId}`); }
  }
  for (const workId of evt.relatedWorkIds || []) {
    if (!works.find(w => w.id === workId || w.slug === workId)) { reportError(`Event ${evt.slug} refers to unknown work: ${workId}`); }
  }
  
  if (evt.localSourcePath && evt.originalSourceUrl) {
    const decodedPath = decodeURIComponent(evt.localSourcePath).replace(/\\/g, '/');
    if (!fs.existsSync(path.join(process.cwd(), 'public', decodedPath))) {
      reportError(`Event ${evt.slug} localSourcePath not found on disk: ${decodedPath}`);
    }
  }
}

const orgSlugs = new Set<string>();
for (const org of organizations) {
  if (orgSlugs.has(org.slug)) { reportError(`Duplicate org slug: ${org.slug}`); }
  orgSlugs.add(org.slug);
}

const hpSlugs = new Set<string>();
for (const hp of historicalPersons) {
  if (hpSlugs.has(hp.slug)) { reportError(`Duplicate hp slug: ${hp.slug}`); }
  hpSlugs.add(hp.slug);
  
  if (!hp.localSourcePaths.length && !hp.originalSourceUrls.length) {
    reportError(`Historical Person ${hp.slug} has no provenance.`);
  }
}

const manifest = JSON.parse(fs.readFileSync('src/generated/history-source-manifest.json', 'utf8'));

const audit = {
  TotalLocalFiles: manifest.pages.length + manifest.assets.length + manifest.pdfFiles.length,
  HTML: manifest.htmlFiles.length,
  PDF: manifest.pdfFiles.length,
  TimelineEvents: indonesiaTimeline.length,
  Organizations: organizations.length,
  HistoricalPersons: historicalPersons.length,
  PeopleReferences: indonesiaTimeline.reduce((acc, curr) => acc + (curr.relatedAuthorIds?.length || 0) + (curr.relatedHistoricalPersonIds?.length || 0), 0),
  WorkReferences: indonesiaTimeline.reduce((acc, curr) => acc + (curr.relatedWorkIds?.length || 0), 0),
  DuplicateEvents: 0,
  BrokenLinks: errors,
  Conflicts: 0,
  Unresolved: 0
};

fs.writeFileSync('src/generated/history-audit.json', JSON.stringify(audit, null, 2));

if (errors > 0) {
  console.error(`Validation failed with ${errors} errors.`);
  process.exit(1);
} else {
  console.log('History Validation Passed!');
  process.exit(0);
}
