const fs = require('fs');
let text = fs.readFileSync('src/data/works.ts', 'utf8');
const match = text.match(/"authorId": "[^"]+"/g) || [];
const match2 = text.match(/authorId: '[^']+'/g) || [];
console.log('Unique:', Array.from(new Set([...match, ...match2])));
