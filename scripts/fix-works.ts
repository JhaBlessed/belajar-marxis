import * as fs from 'fs';
const code = fs.readFileSync('src/data/works.ts', 'utf8');
const fixed = code.replace(/"importance":\s*\[\]/g, '"importance": ""').replace(/"debates":\s*\[\]/g, '"debates": ""');
fs.writeFileSync('src/data/works.ts', fixed);
console.log('Fixed');
