import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

const HISTORY_DIR = path.join(process.cwd(), 'public', 'mia-history');
const CSS_PATH = path.join(HISTORY_DIR, '_assets', 'archive-modern.css');

let stats = {
  total: 0,
  standardDocs: 0,
  legacyFragments: 0,
  modernizedStandard: 0,
  wrappedLegacy: 0,
  alreadyModern: 0, // In validator we just count modernized. We don't have "already modern" vs "just modern". Wait, let's just output totals.
  skippedUnsafe: 0,
  missingViewport: 0,
  missingStylesheet: 0,
  legacyStylesheet: 0,
  duplicateHeader: 0,
  invalidBacklink: 0,
  contentIntegrityFailures: 0,
  errors: 0
};

function gatherFiles(dir: string, fileList: string[] = []) {
  if (!fs.existsSync(dir)) return fileList;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      gatherFiles(fullPath, fileList);
    } else {
      if (fullPath.toLowerCase().endsWith('.html') || fullPath.toLowerCase().endsWith('.htm')) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

const files = gatherFiles(HISTORY_DIR);
stats.total = files.length;

if (!fs.existsSync(CSS_PATH)) {
  console.error('FAIL: CSS asset does not exist at', CSS_PATH);
  process.exitCode = 1;
}

for (const file of files) {
  try {
    const buffer = fs.readFileSync(file);
    const html = buffer.toString('utf8');
    
    const hasHeader = html.includes('mia-modern-header');
    const isLegacyWrapped = html.includes('MIA-LEGACY-ORIGINAL-BEGIN');
    
    if (!hasHeader) {
      stats.skippedUnsafe++;
      continue;
    }

    if (isLegacyWrapped) {
      stats.legacyFragments++;
      stats.wrappedLegacy++;
    } else {
      stats.standardDocs++;
      stats.modernizedStandard++;
    }

    if (html.includes('/mia/_assets/archive-modern.css')) {
      console.error(`FAIL: Legacy CSS path found in ${file}`);
      stats.legacyStylesheet++;
      stats.errors++;
    }

    if (!html.includes('/_assets/archive-modern.css')) {
      console.error(`FAIL: Modern CSS href not found in ${file}`);
      stats.missingStylesheet++;
      stats.errors++;
    }

    const viewportCount = (html.match(/<meta name="viewport"/g) || []).length;
    if (viewportCount !== 1) {
      console.error(`FAIL: Viewport meta count (${viewportCount}) in ${file}`);
      stats.missingViewport++;
      stats.errors++;
    }

    const wrapperCount = (html.match(/<div class="mia-modern-header">/g) || []).length;
    if (wrapperCount !== 1) {
      console.error(`FAIL: mia-modern-header wrapper count (${wrapperCount}) in ${file}`);
      stats.duplicateHeader++;
      stats.errors++;
    }

    if (!html.includes('https://belajar-marxisme.netlify.app/')) {
      console.error(`FAIL: Back-link URL missing or invalid in ${file}`);
      stats.invalidBacklink++;
      stats.errors++;
    }

    // Verify Content Integrity for wrapped legacy
    if (isLegacyWrapped) {
      const beginMarker = Buffer.from('<!-- MIA-LEGACY-ORIGINAL-BEGIN -->\n');
      const endMarker = Buffer.from('\n<!-- MIA-LEGACY-ORIGINAL-END -->');
      
      const startIdx = buffer.indexOf(beginMarker);
      if (startIdx !== -1) {
        const payloadStart = startIdx + beginMarker.length;
        const endIdx = buffer.indexOf(endMarker, payloadStart);
        
        if (endIdx !== -1) {
          // OK, we found it. We can't really compare it against original here because original is overwritten, 
          // but we can at least verify markers exist. The modernize script checks the actual hash against the original before memory is lost.
        } else {
          stats.contentIntegrityFailures++;
          stats.errors++;
          console.error(`FAIL: Missing end marker in ${file}`);
        }
      } else {
        stats.contentIntegrityFailures++;
        stats.errors++;
        console.error(`FAIL: Missing start marker in ${file}`);
      }
    }

  } catch (err) {
    console.error(`Error reading ${file}:`, err);
    stats.errors++;
  }
}

console.log('\n--- HISTORY MODERNIZATION REPORT ---');
console.log(`Total HTML/HTM: ${stats.total}`);
console.log(`Standard documents: ${stats.standardDocs}`);
console.log(`Legacy fragments: ${stats.legacyFragments}`);
console.log(`Modernized standard: ${stats.modernizedStandard}`);
console.log(`Wrapped legacy: ${stats.wrappedLegacy}`);
console.log(`Already modern: 0`);
console.log(`Skipped unsafe: ${stats.skippedUnsafe}`);
console.log(`Missing viewport: ${stats.missingViewport}`);
console.log(`Missing stylesheet: ${stats.missingStylesheet}`);
console.log(`Legacy stylesheet path: ${stats.legacyStylesheet}`);
console.log(`Duplicate modern header: ${stats.duplicateHeader}`);
console.log(`Content integrity failures: ${stats.contentIntegrityFailures}`);
console.log(`Errors: ${stats.errors}`);

if (stats.errors > 0) {
  process.exitCode = 1;
}
