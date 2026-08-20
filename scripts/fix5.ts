import * as fs from 'fs';

let text = fs.readFileSync('src/data/works.ts', 'utf8');

text = text.replace(/"fullTextEnabled": true/g, '"fullTextEnabled": false');

// Find aksi-massa block and set it
const idxAksi = text.indexOf('"slug": "aksi-massa"');
if (idxAksi !== -1) {
  const endAksi = text.indexOf('},', idxAksi);
  let chunk = text.substring(idxAksi, endAksi);
  chunk = chunk.replace('"fullTextEnabled": false', '"fullTextEnabled": true');
  text = text.substring(0, idxAksi) + chunk + text.substring(endAksi);
}

// Find manifesto-komunis block and set it
const idxMan = text.indexOf('"slug": "manifesto-komunis"');
if (idxMan !== -1) {
  const endMan = text.indexOf('},', idxMan);
  let chunk = text.substring(idxMan, endMan);
  chunk = chunk.replace('"fullTextEnabled": false', '"fullTextEnabled": true');
  text = text.substring(0, idxMan) + chunk + text.substring(endMan);
}

fs.writeFileSync('src/data/works.ts', text);
