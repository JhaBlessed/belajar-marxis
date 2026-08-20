const fs = require('fs');
let text = fs.readFileSync('src/data/authors.ts', 'utf8');
const ids = text.match(/id: ['"][^'"]+['"]/g);
const names = text.match(/name: ['"][^'"]+['"]/g);
console.log("IDs:", ids);
console.log("Names:", names);
