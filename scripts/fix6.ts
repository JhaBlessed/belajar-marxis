import * as fs from 'fs';

let text = fs.readFileSync('src/data/works.ts', 'utf8');

// Aksi Massa
const idxAksi = text.indexOf('"slug": "aksi-massa"');
let endAksi = text.indexOf('},', idxAksi);
let chunk = text.substring(idxAksi, endAksi);
chunk = chunk.replace(/"fullTextEnabled": false/, '"fullTextEnabled": true');
text = text.substring(0, idxAksi) + chunk + text.substring(endAksi);

// Manifesto Komunis
const idxMan = text.indexOf('"slug": "manifesto-komunis"');
let endMan = text.indexOf('},', idxMan);
chunk = text.substring(idxMan, endMan);
chunk = chunk.replace(/"fullTextEnabled": false/, '"fullTextEnabled": true');
text = text.substring(0, idxMan) + chunk + text.substring(endMan);

fs.writeFileSync('src/data/works.ts', text);
