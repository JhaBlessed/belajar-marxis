import * as fs from 'fs';

const text = fs.readFileSync('src/data/works.ts', 'utf8');
const lines = text.split('\n');

let insideAksiMassa = false;
let insideManifesto = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('slug: "aksi-massa"')) {
    insideAksiMassa = true;
  }
  if (lines[i].includes('slug: "manifestokomunis"')) {
    insideManifesto = true;
  }
  
  if (lines[i].includes('slug: "') && !lines[i].includes('aksi-massa') && !lines[i].includes('manifestokomunis')) {
    insideAksiMassa = false;
    insideManifesto = false;
  }
  
  if (lines[i].includes('fullTextEnabled:')) {
    if (insideAksiMassa || insideManifesto) {
      lines[i] = lines[i].replace(/false/, 'true');
    } else {
      lines[i] = lines[i].replace(/true/, 'false');
    }
  }
}

fs.writeFileSync('src/data/works.ts', lines.join('\n'));
