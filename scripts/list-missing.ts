import { works } from './src/data/works';
const missing = works.filter(w => !w.hasLocalMirror);
console.log(`Missing count: ${missing.length}`);
missing.forEach(w => {
  console.log(`[${w.slug}] ${w.title} - ${w.miaUrl}`);
});
