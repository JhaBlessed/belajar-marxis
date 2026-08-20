import * as fs from 'fs';

const text = fs.readFileSync('src/data/works.ts', 'utf8');
const worksData = JSON.parse(text.replace(/export const works: Work\[\] = /, '').replace(/;$/, ''));

for (const w of worksData) {
  w.fullTextEnabled = false;
  
  if (w.slug === 'aksi-massa' || w.slug === 'manifesto-komunis') {
    w.fullTextEnabled = true;
  }
}

fs.writeFileSync('src/data/works.ts', 'import { Work } from "../types";\n\nexport const works: Work[] = ' + JSON.stringify(worksData, null, 2) + ';\n');
