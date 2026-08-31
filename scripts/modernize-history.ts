import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

const HISTORY_DIR = path.join(process.cwd(), 'public', 'mia-history');
const PRODUCTION_URL = 'https://belajar-marxisme.netlify.app/';

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');

const bannerHtml = `
<div class="mia-modern-header">
  <div class="mia-modern-header-title">
    ARSIP LOKAL MIA
    <div class="mia-modern-header-subtitle">Sumber: Marxists Internet Archive - Seksi Bahasa Indonesia</div>
  </div>
  <div class="mia-modern-header-actions">
    <a href="${PRODUCTION_URL}" class="mia-modern-header-btn mia-modern-header-btn-primary">&larr; Kembali ke Belajar Marxis</a>
    <a id="mia-online-link" href="{{ONLINE_LINK}}" target="_blank" class="mia-modern-header-btn mia-modern-header-btn-secondary">Lihat Versi Online di MIA &#8599;</a>
  </div>
</div>
`;

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

function copyAssets() {
  const sourceCssPath = path.join(process.cwd(), 'scripts', 'assets', 'archive-modern.css');
  const destDirHistory = path.join(HISTORY_DIR, '_assets');
  const destCssHistory = path.join(destDirHistory, 'archive-modern.css');
  
  if (!isDryRun) {
    if (!fs.existsSync(destDirHistory)) {
      fs.mkdirSync(destDirHistory, { recursive: true });
    }
    if (fs.existsSync(sourceCssPath)) {
      fs.copyFileSync(sourceCssPath, destCssHistory);
    }
  }

  // Also sync to /mia/ if needed
  const destDirMia = path.join(process.cwd(), 'public', 'mia', '_assets');
  if (fs.existsSync(destDirMia) && !isDryRun) {
    fs.copyFileSync(sourceCssPath, path.join(destDirMia, 'archive-modern.css'));
  }
}

let stats = {
  total: 0,
  standardDocs: 0,
  legacyFragments: 0,
  unsupportedUnsafe: 0,
  modernizedStandard: 0,
  migrated: 0,
  wrappedLegacy: 0,
  alreadyModern: 0,
  skippedUnsafe: 0,
  errors: 0
};

function indexOfBufferCaseInsensitive(buffer: Buffer, searchString: string, start = 0): number {
  const searchLower = Buffer.from(searchString.toLowerCase());
  const searchUpper = Buffer.from(searchString.toUpperCase());
  const len = searchString.length;
  for (let i = start; i <= buffer.length - len; i++) {
    let match = true;
    for (let j = 0; j < len; j++) {
      const char = buffer[i + j];
      if (char !== searchLower[j] && char !== searchUpper[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}

function processFile(srcPath: string) {
  try {
    const buffer = fs.readFileSync(srcPath);
    const contentString = buffer.toString('utf8');
    
    const hasHeader = contentString.includes('mia-modern-header');
    const isLegacyWrapped = contentString.includes('MIA-LEGACY-ORIGINAL-BEGIN');
    
    if (hasHeader) {
      if (isLegacyWrapped) {
        stats.legacyFragments++;
      } else {
        stats.standardDocs++;
      }

      let needsMigration = false;
      let newBuffer = buffer;
      
      const legacyCssBytes = Buffer.from('/mia/_assets/archive-modern.css');
      const newCssBytes = Buffer.from('/_assets/archive-modern.css');
      
      let cssIdx = newBuffer.indexOf(legacyCssBytes);
      if (cssIdx !== -1) {
        needsMigration = true;
        const prefix = newBuffer.subarray(0, cssIdx);
        const suffix = newBuffer.subarray(cssIdx + legacyCssBytes.length);
        newBuffer = Buffer.concat([prefix, newCssBytes, suffix]);
      }
      
      const legacyBacklinkBytes = Buffer.from('href="/" class="mia-modern-header-btn mia-modern-header-btn-primary"');
      const newBacklinkBytes = Buffer.from(`href="${PRODUCTION_URL}" class="mia-modern-header-btn mia-modern-header-btn-primary"`);
      let linkIdx = newBuffer.indexOf(legacyBacklinkBytes);
      if (linkIdx !== -1) {
        needsMigration = true;
        const prefix = newBuffer.subarray(0, linkIdx);
        const suffix = newBuffer.subarray(linkIdx + legacyBacklinkBytes.length);
        newBuffer = Buffer.concat([prefix, newBacklinkBytes, suffix]);
      }

      const viewportStr = '\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
      const vpMatchCount = (contentString.match(/<meta\s+name=["']viewport["']/gi) || []).length;
      if (vpMatchCount > 1) {
        let vpIdx = newBuffer.indexOf(Buffer.from(viewportStr));
        if (vpIdx !== -1) {
          needsMigration = true;
          const prefix = newBuffer.subarray(0, vpIdx);
          const suffix = newBuffer.subarray(vpIdx + viewportStr.length - 1); 
          newBuffer = Buffer.concat([prefix, suffix]);
        }
      }

      if (needsMigration) {
        if (!isDryRun) {
          fs.writeFileSync(srcPath, newBuffer);
        }
        stats.migrated++;
      } else {
        stats.alreadyModern++;
      }
      return;
    }

    // Not modernized yet
    const hasHtml = /<html/i.test(contentString);
    const hasHead = /<head/i.test(contentString);
    const hasBody = /<body/i.test(contentString);

    if (hasHead && hasBody) {
      stats.standardDocs++;
      
      let headIdx = indexOfBufferCaseInsensitive(buffer, '<head');
      let headEndIdx = buffer.indexOf('>', headIdx);
      let bodyIdx = indexOfBufferCaseInsensitive(buffer, '<body');
      let bodyEndIdx = buffer.indexOf('>', bodyIdx);

      if (headEndIdx === -1 || bodyEndIdx === -1) {
        stats.unsupportedUnsafe++;
        stats.skippedUnsafe++;
        return;
      }

      const hasOriginalViewport = /<meta\s+name=["']viewport["']/i.test(contentString);
      const viewportStr = hasOriginalViewport ? '' : '\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
      const cssStr = '<link rel="stylesheet" type="text/css" href="/_assets/archive-modern.css">\n';
      
      const relPath = path.relative(HISTORY_DIR, srcPath).replace(/\\/g, '/');
      const miaAbsoluteUrl = 'https://www.marxists.org/' + relPath;
      const banner = bannerHtml.replace('{{ONLINE_LINK}}', miaAbsoluteUrl);

      const injectHeadBytes = Buffer.from(viewportStr + cssStr);
      const injectBodyBytes = Buffer.from(banner);

      const part1 = buffer.subarray(0, headEndIdx + 1);
      const part2 = buffer.subarray(headEndIdx + 1, bodyEndIdx + 1);
      const part3 = buffer.subarray(bodyEndIdx + 1);

      const finalBuffer = Buffer.concat([
        part1,
        injectHeadBytes,
        part2,
        injectBodyBytes,
        part3
      ]);

      if (!isDryRun) {
        fs.writeFileSync(srcPath, finalBuffer);
      }
      stats.modernizedStandard++;
      return;
    }

    if (hasHtml && (!hasHead || !hasBody)) {
      stats.unsupportedUnsafe++;
      stats.skippedUnsafe++;
      return;
    }

    const hasSubstantiveTags = /<h[1-6]|<p>|<div|<table|<a /i.test(contentString);
    
    if (!hasHtml && !hasHead && !hasBody && hasSubstantiveTags) {
      stats.legacyFragments++;
      
      const relPath = path.relative(HISTORY_DIR, srcPath).replace(/\\/g, '/');
      const miaAbsoluteUrl = 'https://www.marxists.org/' + relPath;
      const banner = bannerHtml.replace('{{ONLINE_LINK}}', miaAbsoluteUrl);

      const prefix = Buffer.from(`<!doctype html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="/_assets/archive-modern.css">
</head>
<body>
${banner}
<main class="mia-legacy-fragment">
<!-- MIA-LEGACY-ORIGINAL-BEGIN -->\n`);

      const suffix = Buffer.from(`\n<!-- MIA-LEGACY-ORIGINAL-END -->
</main>
</body>
</html>`);

      const finalBuffer = Buffer.concat([prefix, buffer, suffix]);
      
      if (!isDryRun) {
        fs.writeFileSync(srcPath, finalBuffer);
        
        // Verify Content Integrity
        const writtenBuffer = fs.readFileSync(srcPath);
        const beginMarker = Buffer.from('<!-- MIA-LEGACY-ORIGINAL-BEGIN -->\n');
        const endMarker = Buffer.from('\n<!-- MIA-LEGACY-ORIGINAL-END -->');
        
        const startIdx = writtenBuffer.indexOf(beginMarker) + beginMarker.length;
        const endIdx = writtenBuffer.indexOf(endMarker, startIdx);
        
        const extractedOriginal = writtenBuffer.subarray(startIdx, endIdx);
        
        const originalHash = crypto.createHash('sha256').update(buffer).digest('hex');
        const extractedHash = crypto.createHash('sha256').update(extractedOriginal).digest('hex');
        
        if (originalHash !== extractedHash) {
          console.error(`CONTENT INTEGRITY FAILURE in ${srcPath}`);
          process.exitCode = 1;
        }
      }
      
      stats.wrappedLegacy++;
      return;
    }

    stats.unsupportedUnsafe++;
    stats.skippedUnsafe++;

  } catch (err) {
    console.error(`Error processing ${srcPath}:`, err);
    stats.errors++;
  }
}

console.log('--- STARTING HISTORY MODERNIZATION ---');
if (isDryRun) console.log('MODE: DRY RUN');

copyAssets();

const files = gatherFiles(HISTORY_DIR);
stats.total = files.length;

for (const file of files) {
  processFile(file);
}

console.log('\n--- HISTORY MODERNIZATION REPORT ---');
console.log(`Total HTML/HTM: ${stats.total}`);
console.log(`Standard documents: ${stats.standardDocs}`);
console.log(`Legacy fragments: ${stats.legacyFragments}`);
console.log(`Unsupported/unsafe: ${stats.unsupportedUnsafe}`);
console.log(`Modernized standard: ${stats.modernizedStandard}`);
console.log(`Migrated: ${stats.migrated}`);
console.log(`Wrapped legacy: ${stats.wrappedLegacy}`);
console.log(`Already modern: ${stats.alreadyModern}`);
console.log(`Skipped unsafe: ${stats.skippedUnsafe}`);
console.log(`Errors: ${stats.errors}`);

if (stats.errors > 0 && !isDryRun) {
  process.exit(1);
}

