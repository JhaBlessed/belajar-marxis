import * as fs from 'fs';
import * as path from 'path';
import { works as existingWorks } from '../src/data/works';

const MANIFEST_FILE = path.join(process.cwd(), 'generated', 'mia-work-manifest.json');
const WORKS_TS = path.join(process.cwd(), 'src', 'data', 'works.ts');

const manifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf8'));

const worksMap = new Map();
existingWorks.forEach(w => worksMap.set(w.slug, w));

const newWorks = manifest.map((m: any, i: number) => {
  const existing = worksMap.get(m.slug) || {};
  
  return {
    id: existing.id || `w-${i}-${m.slug.substring(0, 5)}`,
    title: m.title,
    originalTitle: existing.originalTitle || null,
    slug: m.slug,
    authorId: m.authorIds[0],
    authorIds: m.authorIds,
    year: m.year || existing.year || null,
    category: existing.category || 'Artikel',
    difficulty: existing.difficulty || 'Menengah',
    readingTime: existing.readingTime || 15,
    themes: existing.themes || [],
    concepts: existing.concepts || [],
    importance: existing.importance || '',
    debates: existing.debates || '',
    studyQuestions: existing.studyQuestions || [],
    relatedWorks: existing.relatedWorks || [],
    summary: {
      historicalContext: existing.summary?.historicalContext || 'Diimpor dari MIA lokal.',
      mainProblem: existing.summary?.mainProblem || '',
      mainThesis: existing.summary?.mainThesis || '',
      structure: existing.summary?.structure || '',
      contentSummary: existing.summary?.contentSummary || 'Teks primer sudah tersedia dan dapat dibaca.'
    },
    miaUrl: m.sourceUrl,
    rightsStatus: m.rightsStatus === 'unknown' && existing.rightsStatus ? existing.rightsStatus : m.rightsStatus,
    contentStatus: m.contentStatus,
    fullTextEnabled: m.contentStatus === 'complete' || m.contentStatus === 'partial'
  };
});

// Any existing works that weren't in the manifest?
existingWorks.forEach(w => {
  if (!manifest.find((m: any) => m.slug === w.slug)) {
    // Keep them? The instructions say "Jangan langsung menghapus existing works.ts. Tahapan: baru hapus stale data yang sudah tidak diperlukan"
    // Let's keep them but set fullTextEnabled to false and contentStatus to not-imported unless they actually exist.
    newWorks.push(w);
  }
});

const worksTsContent = `import type { Work } from '../types';

export const works: Work[] = ${JSON.stringify(newWorks, null, 2)};
`;

fs.writeFileSync(WORKS_TS, worksTsContent);
console.log('src/data/works.ts berhasil diperbarui!');
