import * as fs from 'fs';
import * as path from 'path';
import { works } from '../src/data/works';
import type { Work } from '../src/types';

// Kapital Jilid 1
const jilid1Index = works.findIndex(w => w.slug === 'kapital-jilid-1');
if (jilid1Index !== -1) {
  works[jilid1Index].sourceFormat = 'html';
  works[jilid1Index].localSourcePath = '/mia/indonesia/archive/marx-engels/1867/capital01.html';
  works[jilid1Index].miaUrl = 'https://www.marxists.org/indonesia/archive/marx-engels/1867/capital01.html';
  works[jilid1Index].contentStatus = 'partial';
  works[jilid1Index].sourceAvailability = 'local-and-online';
  works[jilid1Index].hasLocalMirror = true;
}

// Kapital Jilid 2
const jilid2Index = works.findIndex(w => w.slug === 'kapital-jilid-2');
if (jilid2Index !== -1) {
  works[jilid2Index].sourceFormat = 'multi-pdf';
  works[jilid2Index].localSourceParts = [
    { title: "Bagian 1", path: "/mia/indonesia/archive/marx-engels/1885/kapital2-bag1.pdf" },
    { title: "Bagian 2", path: "/mia/indonesia/archive/marx-engels/1885/kapital2-bag2.pdf" },
    { title: "Bagian 3", path: "/mia/indonesia/archive/marx-engels/1885/kapital2-bag3.pdf" }
  ];
  works[jilid2Index].hasLocalMirror = true;
}

// Kapital Jilid 3
const jilid3Index = works.findIndex(w => w.slug === 'kapital-jilid-3');
const jilid3Data = {
  id: 'kapital-jilid-3',
  slug: 'kapital-jilid-3',
  title: 'Kapital, Jilid III',
  originalTitle: 'Das Kapital, Band III',
  authorId: 'karl-marx',
  authorIds: ['karl-marx'],
  editorIds: ['friedrich-engels'],
  year: 1894,
  category: 'Ekonomi Politik',
  difficulty: 'Mahir',
  readingTime: 2000,
  themes: [],
  concepts: [],
  importance: '',
  debates: '',
  studyQuestions: [],
  relatedWorks: [],
  summary: {
    historicalContext: 'Diedit/dipersiapkan untuk penerbitan oleh Friedrich Engels.',
    mainProblem: '',
    mainThesis: '',
    structure: '',
    contentSummary: 'Proses Produksi Kapitalis secara Keseluruhan'
  },
  miaUrl: null,
  rightsStatus: 'unknown',
  contentStatus: 'complete',
  fullTextEnabled: true,
  format: 'multi-pdf',
  sourceFormat: 'multi-pdf',
  sourceType: 'MIA_LOCAL_ARCHIVE',
  hasLocalMirror: true,
  sourceAvailability: 'local-only',
  localSourceParts: [
    { title: "Bab 1-20", path: "/mia/indonesia/archive/marx-engels/1894/kapital3-bab1-20.pdf" },
    { title: "Bab 21-36", path: "/mia/indonesia/archive/marx-engels/1894/kapital3-bab21-36.pdf" },
    { title: "Bab 37-43", path: "/mia/indonesia/archive/marx-engels/1894/kapital3-bab37-43.pdf" },
    { title: "Bab 44-52", path: "/mia/indonesia/archive/marx-engels/1894/kapital3-bab44-52.pdf" }
  ]
};

if (jilid3Index !== -1) {
  works[jilid3Index] = jilid3Data as any;
} else {
  works.splice(jilid2Index + 1, 0, jilid3Data as any);
}

const worksTsContent = `import type { Work } from '../types';\n\nexport const works: Work[] = ${JSON.stringify(works, null, 2)};\n`;
fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'works.ts'), worksTsContent);
console.log('Fixed works.ts for sourceFormats');
