const fs = require('fs');
let text = fs.readFileSync('src/data/works.ts', 'utf8');

// Fix Lenin
text = text.replace(/"authorId": "lenin"/g, '"authorId": "v-i-lenin"');

// Fix Trotsky
text = text.replace(/"authorId": "trotsky"/g, '"authorId": "leon-trotsky"');

fs.writeFileSync('src/data/works.ts', text);
