const fs = require('fs');
let text = fs.readFileSync('src/data/works.ts', 'utf8');
text = text.replace(/"importance": "",/g, '"importance": "",\n    "debates": "",');
fs.writeFileSync('src/data/works.ts', text);
