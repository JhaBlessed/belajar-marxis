const fs = require('fs');
let text = fs.readFileSync('src/data/authors.ts', 'utf8');
const names = text.match(/name: ['"][^'"]+['"]/g);
console.log(names);
