import * as fs from 'fs';
import { works } from '../src/data/works';

// 1. Deduplicate
const uniqueMap = new Map();

works.forEach(work => {
  if (work.year === 1900) {
    work.year = null;
  }
  
  // Create a unique key by combining slug and author (to be safe) or just slug.
  // We prefer works that are complete or have fullTextEnabled true
  const key = work.slug;
  const comboKey = `${work.title.toLowerCase().trim()}|${work.authorId}|${work.year}`;

  const existing = uniqueMap.get(key) || uniqueMap.get(comboKey);
  
  if (existing) {
    // If the existing one is just a scraped one, and the new one is the pilot, swap.
    if (work.fullTextEnabled && !existing.fullTextEnabled) {
      uniqueMap.set(key, work);
      uniqueMap.set(comboKey, work);
    }
    // Else keep the existing
  } else {
    uniqueMap.set(key, work);
    uniqueMap.set(comboKey, work);
  }
});

const deduplicatedWorks = Array.from(new Set(uniqueMap.values()));

let fileContent = `import type { Work } from '../types';\n\nexport const works: Work[] = ${JSON.stringify(deduplicatedWorks, null, 2)};\n`;
fs.writeFileSync('src/data/works.ts', fileContent);
