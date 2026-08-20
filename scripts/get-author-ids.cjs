const fs = require('fs');
let works = require('./src/data/works.ts'); // Wait, works.ts is typescript, can't require directly.

let text = fs.readFileSync('src/data/works.ts', 'utf8');
const match = text.match(/"authorId": "[^"]+"/g);
if (match) {
    const unique = new Set(match);
    console.log("JSON Quotes:", Array.from(unique));
}

const match2 = text.match(/authorId: '[^']+'/g);
if (match2) {
    const unique2 = new Set(match2);
    console.log("Single Quotes:", Array.from(unique2));
}
