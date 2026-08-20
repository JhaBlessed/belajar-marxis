const fs = require('fs');
let text = fs.readFileSync('src/data/works.ts', 'utf8');
const slugs = ['madilog', 'manifesto-komunis', 'negara-dan-revolusi', 'tesis-tentang-feuerbach', 'upah-harga-dan-laba', 'tesis-april', 'reformasi-atau-revolusi', 'pemogokan-massa', 'komunisme-dan-pan-islamisme'];

for (const slug of slugs) {
    const re = new RegExp(`slug:\\s*'${slug}',[\\s\\S]*?contentStatus:\\s*["'][^"']+["']`);
    text = text.replace(re, (match) => {
        let updated = match.replace(/rightsStatus:\s*["'][^"']+["']/, 'rightsStatus: "public-domain"');
        updated = updated.replace(/fullTextEnabled:\s*false/, 'fullTextEnabled: true');
        updated = updated.replace(/contentStatus:\s*["'][^"']+["']/, 'contentStatus: "complete"');
        return updated;
    });
}
fs.writeFileSync('src/data/works.ts', text);
