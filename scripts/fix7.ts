import * as fs from 'fs';

let text = fs.readFileSync('src/data/works.ts', 'utf8');

text = text.replace(/"slug": "aksi-massa",[\s\S]*?"fullTextEnabled": false/g, match => match.replace('false', 'true'));
text = text.replace(/"slug": "manifesto-komunis",[\s\S]*?"fullTextEnabled": false/g, match => match.replace('false', 'true'));

fs.writeFileSync('src/data/works.ts', text);
