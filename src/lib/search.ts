import Fuse from 'fuse.js';
import { authors } from '../data/authors';
import { getCanonicalWorks } from './canonicalWorks';
import { concepts } from '../data/concepts';
import { organizations } from '../data/organizations';
import { timelineEvents } from '../data/timeline';
import { indonesiaTimeline } from '../generated/indonesiaTimeline';
import { historicalPersons } from '../data/historicalPersons';

export type SearchResult = {
  type: 'author' | 'work' | 'concept' | 'organization' | 'timeline' | 'historicalPerson';
  id: string;
  slug: string;
  title: string;
  description: string;
  url: string;
};

const authorDocs = authors.map(a => ({
  type: 'author' as const,
  id: a.id,
  slug: a.slug || '',
  title: a.name,
  description: a.shortBio,
  searchableText: `${a.name} ${a.fullName} ${a.shortBio} ${a.themes.join(' ')} ${a.nationality}`,
  url: `/tokoh/${a.slug}`
}));

const workDocs = getCanonicalWorks().map(w => {
  const author = authors.find(a => a.id === w.authorId);
  return {
    type: 'work' as const,
    id: w.id,
    slug: w.slug,
    title: w.title,
    description: `Oleh ${author?.name || 'Unknown'} • Tahun: ${w.year || 'Tidak diketahui'}`,
    searchableText: `${w.title} ${w.originalTitle} ${w.summary?.contentSummary || ''} ${w.themes?.join(' ') || ''} ${w.year}`,
    url: `/karya/${w.slug}`
  }
});

const conceptDocs = concepts.map(c => ({
  type: 'concept' as const,
  id: c.id,
  slug: c.slug || '',
  title: c.name,
  description: c.shortDefinition,
  searchableText: `${c.name} ${c.shortDefinition} ${c.definition}`,
  url: `/konsep/${c.slug}`
}));

const orgDocs = organizations.map(o => ({
  type: 'organization' as const,
  id: o.id,
  slug: o.slug || '',
  title: `${o.name} ${o.abbreviation ? `(${o.abbreviation})` : ''}`,
  description: o.description,
  searchableText: `${o.name} ${o.abbreviation} ${o.description}`,
  url: `/organisasi/${o.slug}`
}));

const timelineDocs = [...timelineEvents, ...indonesiaTimeline].map(t => ({
  type: 'timeline' as const,
  id: t.id,
  slug: t.id,
  title: t.title,
  description: `${t.year} - ${t.description.substring(0, 100)}...`,
  searchableText: `${t.title} ${t.description} ${t.year} ${t.country}`,
  url: (t.country || "").toLowerCase() === 'indonesia' ? '/indonesia' : '/timeline'
}));

const hpDocs = historicalPersons.map(hp => ({
  type: 'historicalPerson' as const,
  id: hp.id,
  slug: hp.slug || '',
  title: hp.name,
  description: hp.aliases.length > 1 ? `Alias: ${hp.aliases.slice(1).join(', ')}` : 'Tokoh Sejarah Marxisme Indonesia',
  searchableText: `${hp.name} ${hp.aliases.join(' ')}`,
  url: `/tokoh-sejarah/${hp.slug}`
}));

const allDocs = [...authorDocs, ...workDocs, ...conceptDocs, ...orgDocs, ...timelineDocs, ...hpDocs];

const fuse = new Fuse(allDocs, {
  keys: ['title', 'searchableText'],
  threshold: 0.3,
  includeMatches: true
});

export function search(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const results = fuse.search(query);
  return results.map(res => res.item).slice(0, 20); // max 20 results
}
