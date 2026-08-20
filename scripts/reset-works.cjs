const fs = require('fs');
let content = fs.readFileSync('src/data/works.ts', 'utf8');
content = content.replace(/rightsStatus:\s*['"]public-domain['"]/g, 'rightsStatus: "unknown"');
content = content.replace(/fullTextEnabled:\s*true/g, 'fullTextEnabled: false');
content = content.replace(/contentStatus:\s*['"]complete['"]/g, 'contentStatus: "external-only"');
content = content.replace(/contentStatus:\s*['"]partial['"]/g, 'contentStatus: "external-only"');

// Manually enable Aksi Massa
content = content.replace(
  /slug:\s*'aksi-massa',[\s\S]*?rightsStatus:\s*'unknown'/m,
  "slug: 'aksi-massa',\n    title: 'Aksi Massa',\n    authorId: 'tan-malaka',\n    originalTitle: '',\n    year: 1926,\n    difficulty: 'Menengah',\n    readingTime: 240,\n    themes: ['Kemerdekaan', 'Imperialisme', 'Revolusi Indonesia'],\n    concepts: ['massa-aksi', 'imperialisme'],\n    summary: { historicalContext: '', mainProblem: '', mainThesis: '', structure: '', contentSummary: '' },\n    importance: '',\n    studyQuestions: [],\n    relatedWorks: [],\n    miaUrl: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/',\n    rightsStatus: 'public-domain'"
);

fs.writeFileSync('src/data/works.ts', content);
