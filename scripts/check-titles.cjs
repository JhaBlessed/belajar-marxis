const fs = require('fs');
let text = fs.readFileSync('src/data/works.ts', 'utf8');
const names = text.match(/"title": "[^"]+"/g);
console.log(names);
