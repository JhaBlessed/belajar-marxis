const fs = require('fs');
let content = fs.readFileSync('src/data/works.ts', 'utf8');

content = content.replace(/status:\s*'verified',?\s*(verifiedAt:\s*'[^']+')?/g, (match, p1) => {
  return 'rightsStatus: "public-domain",\n    fullTextEnabled: true,\n    contentStatus: "complete",\n    ' + (p1 ? p1 : '');
});

content = content.replace(/status:\s*'partial'/g, 'rightsStatus: "public-domain",\n    fullTextEnabled: true,\n    contentStatus: "partial"');

content = content.replace(/status:\s*'needs-review'/g, 'rightsStatus: "unknown",\n    fullTextEnabled: false,\n    contentStatus: "external-only"');

let works = content.split('  {');
for(let i=1; i<works.length; i++) {
  if (works[i].includes('miaUrl: null')) {
    works[i] = works[i].replace(/rightsStatus: \"[^\"]+\"/, 'rightsStatus: "unknown"');
    works[i] = works[i].replace(/fullTextEnabled: true/, 'fullTextEnabled: false');
    works[i] = works[i].replace(/contentStatus: \"[^\"]+\"/, 'contentStatus: "external-only"');
  }
}
content = works.join('  {');

fs.writeFileSync('src/data/works.ts', content);
console.log('Works updated');
