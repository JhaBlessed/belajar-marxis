import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import { miaLocalManifest } from '../src/generated/miaLocalManifest';

const PUBLIC_MIA_DIR = path.join(process.cwd(), 'public', 'mia');

function validate() {
  let htmlFiles = 0;
  let assetFiles = 0;
  let brokenInternalLinks = 0;
  let missingAssets = 0;

  const allFiles = new Set<string>();

  function scan(dir: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const fullPath = path.join(dir, e.name);
      if (e.isDirectory()) {
        scan(fullPath);
      } else {
        const relPath = '/mia/' + path.relative(PUBLIC_MIA_DIR, fullPath).replace(/\\/g, '/');
        allFiles.add(relPath);
        if (e.name.endsWith('.html') || e.name.endsWith('.htm')) htmlFiles++;
        else assetFiles++;
      }
    }
  }

  scan(PUBLIC_MIA_DIR);

  // Check links inside HTML
  function checkLinks(dir: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const fullPath = path.join(dir, e.name);
      if (e.isDirectory()) {
        checkLinks(fullPath);
      } else if (e.name.endsWith('.html') || e.name.endsWith('.htm')) {
        const html = fs.readFileSync(fullPath, 'utf8');
        const $ = cheerio.load(html);
        
        const currentRelDir = '/mia/' + path.dirname(path.relative(PUBLIC_MIA_DIR, fullPath)).replace(/\\/g, '/');

        $('a').each((_, el) => {
          let href = $(el).attr('href');
          if (href && href.startsWith('/mia/')) {
            if (!allFiles.has(href)) {
              brokenInternalLinks++;
            }
          }
        });

        $('img, link[rel="stylesheet"]').each((_, el) => {
          let src = $(el).attr('src') || $(el).attr('href');
          if (src && src.startsWith('/mia/')) {
            if (!allFiles.has(src)) {
              missingAssets++;
            }
          }
        });
      }
    }
  }

  checkLinks(PUBLIC_MIA_DIR);

  console.log('--- VALIDATE MIRROR REPORT ---');
  console.log(`Local pages: ${htmlFiles}`);
  console.log(`Local assets: ${assetFiles}`);
  console.log(`Total local URLs mapped: ${Object.keys(miaLocalManifest).length}`);
  console.log(`Broken internal links: ${brokenInternalLinks}`);
  console.log(`Missing critical assets: ${missingAssets}`);
  
  // Exit with error if there are missing assets or broken links (or we can just warn)
  // For now just warn so it doesn't break build
}

validate();
