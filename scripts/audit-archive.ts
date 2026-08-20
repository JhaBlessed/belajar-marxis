import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import { works } from '../src/data/works';
import { miaLocalManifest } from '../src/generated/miaLocalManifest';

const PUBLIC_MIA_DIR = path.join(process.cwd(), 'public');

let singleHtml = 0;
let multiHtml = 0;
let singlePdf = 0;
let multiPdf = 0;
let localFound = 0;
let localNotFound = 0;
let brokenSource = 0;
let duplicateWorks = 0;

const slugMap = new Set<string>();

for (const work of works) {
  if (slugMap.has(work.slug)) {
    duplicateWorks++;
  }
  slugMap.add(work.slug);

  if (!work.miaUrl) {
    if (work.hasLocalMirror) {
      localFound++;
      if (work.sourceFormat === 'pdf') singlePdf++;
      else if (work.sourceFormat === 'multi-pdf') multiPdf++;
      else if (work.sourceFormat === 'html') singleHtml++;
      else if (work.sourceFormat === 'multi-html') multiHtml++;
    } else {
      localNotFound++;
    }
    continue; 
  }

  let normalizedUrl = work.miaUrl.replace('https://', 'http://').split('#')[0];
  if (!miaLocalManifest[normalizedUrl]) {
    normalizedUrl = work.miaUrl.replace('http://', 'https://').split('#')[0];
  }

  const manifestEntry = miaLocalManifest[normalizedUrl];
  if (!manifestEntry || !manifestEntry.exists) {
    localNotFound++;
    work.hasLocalMirror = false;
    work.sourceAvailability = 'missing';
    continue;
  }

  localFound++;
  work.hasLocalMirror = true;
  work.sourceType = 'MIA_LOCAL_ARCHIVE';
  
  const localAbsPath = path.join(PUBLIC_MIA_DIR, manifestEntry.localPath);
  
  if (!fs.existsSync(localAbsPath)) {
    brokenSource++;
    work.hasLocalMirror = false;
    work.sourceAvailability = 'missing';
    continue;
  }

  const isIndex = localAbsPath.endsWith('index.htm') || localAbsPath.endsWith('index.html');
  const isPdf = localAbsPath.endsWith('.pdf');

  if (isPdf) {
    singlePdf++;
    work.sourceFormat = 'pdf';
    work.localSourcePath = manifestEntry.localPath;
    work.sourceAvailability = 'local-only';
  } else if (!isIndex) {
    singleHtml++;
    work.sourceFormat = 'html';
    work.localSourcePath = manifestEntry.localPath;
    work.sourceAvailability = 'local-only';
  } else {
    const html = fs.readFileSync(localAbsPath, 'utf8');
    const $ = cheerio.load(html);
    const pdfLinks: Array<{title: string, path: string}> = [];
    const htmlLinks: Array<{title: string, path: string}> = [];

    const currentDir = path.dirname(manifestEntry.localPath);

    $('a').each((_, el) => {
      const href = $(el).attr('href');
      if (!href) return;
      
      let targetPath = href;
      if (!targetPath.startsWith('/')) {
        targetPath = path.join(currentDir, href).replace(/\\/g, '/');
      }

      if (!targetPath.startsWith(currentDir)) return;
      if (targetPath === manifestEntry.localPath) return; 

      const title = $(el).text().trim().replace(/\\s+/g, ' ') || 'Bagian';
      
      if (targetPath.toLowerCase().endsWith('.pdf')) {
        pdfLinks.push({ title, path: targetPath });
      } else if (targetPath.toLowerCase().endsWith('.htm') || targetPath.toLowerCase().endsWith('.html')) {
        htmlLinks.push({ title, path: targetPath });
      }
    });

    if (pdfLinks.length > 0) {
      multiPdf++;
      work.sourceFormat = 'multi-pdf';
      work.localSourceParts = pdfLinks;
      work.sourceAvailability = 'local-only';
    } else if (htmlLinks.length > 0) {
      multiHtml++;
      work.sourceFormat = 'multi-html';
      work.localSourceParts = htmlLinks;
      work.sourceAvailability = 'local-only';
    } else {
      singleHtml++;
      work.sourceFormat = 'html';
      work.localSourcePath = manifestEntry.localPath;
      work.sourceAvailability = 'local-only';
    }
  }
}

const k1 = works.find(w => w.slug === 'kapital-jilid-1');
if (k1 && k1.sourceFormat !== 'html') k1.sourceFormat = 'html';

const worksTsContent = `import type { Work } from '../types';\n\nexport const works: Work[] = ${JSON.stringify(works, null, 2)};\n`;
fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'works.ts'), worksTsContent);

console.log('--- ARCHIVE AUDIT REPORT ---');
console.log(`Single HTML Works: ${singleHtml}`);
console.log(`Multi HTML Works: ${multiHtml}`);
console.log(`Single PDF Works: ${singlePdf}`);
console.log(`Multi PDF Works: ${multiPdf}`);
console.log(`Works with Local Source: ${localFound}`);
console.log(`Works without Local Source: ${localNotFound}`);
console.log(`Broken Sources: ${brokenSource}`);
console.log(`Duplicate Works: ${duplicateWorks}`);
