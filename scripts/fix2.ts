import * as fs from 'fs';
let text = fs.readFileSync('src/data/works.ts', 'utf8');

text = text.replace(/fullTextEnabled: true/g, 'fullTextEnabled: false');

text = text.replace(
  /(slug: 'aksi-massa',[^}]*)fullTextEnabled: false/g,
  "$1fullTextEnabled: true"
);

text = text.replace(
  /(slug: 'manifestokomunis',[^}]*)fullTextEnabled: false/g,
  "$1fullTextEnabled: true"
);

fs.writeFileSync('src/data/works.ts', text);
