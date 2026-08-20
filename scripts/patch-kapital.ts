import * as fs from 'fs';
import * as path from 'path';
import { works } from '../src/data/works';
import type { Work } from '../src/types';

const jilid1Index = works.findIndex(w => w.slug === 'kapital-jilid-1');
if (jilid1Index !== -1) {
  works[jilid1Index].miaUrl = null;
  works[jilid1Index].contentStatus = 'external-only';
  works[jilid1Index].hasLocalMirror = false;
  works[jilid1Index].sourceAvailability = 'missing'; // because there is no miaUrl and no local mirror
}

const jilid2Index = works.findIndex(w => w.slug === 'kapital-jilid-2');
const jilid2Data: Work = {
  id: 'kapital-jilid-2',
  slug: 'kapital-jilid-2',
  title: 'Kapital, Jilid II',
  originalTitle: 'Das Kapital, Band II',
  authorId: 'karl-marx',
  authorIds: ['karl-marx'],
  editorIds: ['friedrich-engels'],
  year: 1885,
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
    contentSummary: 'Proses Sirkulasi Kapital'
  },
  miaUrl: null, // Since the user said "Jangan membuat online MIA URL apabila URL tersebut tidak dapat diverifikasi."
  rightsStatus: 'unknown',
  contentStatus: 'complete',
  fullTextEnabled: true,
  format: 'multi-pdf',
  sourceType: 'MIA_LOCAL_ARCHIVE',
  hasLocalMirror: true,
  sourceAvailability: 'local-only',
  parts: [
    {
      number: 1,
      title: 'Kapital Jilid II - Bagian 1',
      type: 'pdf',
      localPath: '/mia/indonesia/archive/marx-engels/1885/kapital2-bag1.pdf'
    },
    {
      number: 2,
      title: 'Kapital Jilid II - Bagian 2',
      type: 'pdf',
      localPath: '/mia/indonesia/archive/marx-engels/1885/kapital2-bag2.pdf'
    },
    {
      number: 3,
      title: 'Kapital Jilid II - Bagian 3',
      type: 'pdf',
      localPath: '/mia/indonesia/archive/marx-engels/1885/kapital2-bag3.pdf'
    }
  ]
};

if (jilid2Index !== -1) {
  works[jilid2Index] = jilid2Data;
} else {
  // Put it right after jilid 1
  works.splice(jilid1Index + 1, 0, jilid2Data);
}

const worksTsContent = `import type { Work } from '../types';\n\nexport const works: Work[] = ${JSON.stringify(works, null, 2)};\n`;

fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'works.ts'), worksTsContent);
console.log('Fixed works.ts for Kapital Jilid 1 and 2.');
