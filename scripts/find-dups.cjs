const fs = require('fs');
let text = fs.readFileSync('src/data/authors.ts', 'utf8');
const match = text.match(/id: ['"][^'"]+['"]/g);
console.log(match);
