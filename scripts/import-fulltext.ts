import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { worksManifest } from './manifests/works';

const turndownService = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced'
});

// Configure Turndown to skip things we don't want
turndownService.remove(['script', 'style', 'iframe', 'object', 'embed', 'nav', 'header', 'footer', 'form']);

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function importFullText() {
  console.log('Starting full text import...');

  for (const manifest of worksManifest) {
    if (!manifest.approvedForImport || (manifest.rightsStatus !== 'public-domain' && manifest.rightsStatus !== 'cc-by-sa')) {
      console.log(`Skipping ${manifest.slug} - Not approved or restricted rights.`);
      continue;
    }

    console.log(`\nImporting ${manifest.slug}...`);
    const workDir = path.join(process.cwd(), 'src/content/works', manifest.authorFolder, manifest.workFolder);
    const chaptersDir = path.join(workDir, 'chapters');

    if (!fs.existsSync(chaptersDir)) {
      fs.mkdirSync(chaptersDir, { recursive: true });
    }

    // Write a simple metadata file
    const metaContent = `export const metadata = {
  chapters: ${JSON.stringify(manifest.chapters.map(c => c.slug))}
};\n`;
    fs.writeFileSync(path.join(workDir, 'metadata.ts'), metaContent);

    for (let i = 0; i < manifest.chapters.length; i++) {
      const chapter = manifest.chapters[i];
      const fileName = `${String(i).padStart(2, '0')}-${chapter.slug}.md`;
      const filePath = path.join(chaptersDir, fileName);

      if (fs.existsSync(filePath)) {
        console.log(`  Skipping ${fileName} (already exists)`);
        continue;
      }

      console.log(`  Fetching ${chapter.url}...`);
      try {
        const response = await fetch(chapter.url);
        const html = await response.text();
        const $ = cheerio.load(html);

        // Remove typical MIA layout elements, usually navigation tables
        $('table.MsoNormalTable').first().remove(); // typically MIA header
        $('p.MsoNormal[align="center"]').last().remove(); // typically MIA footer
        $('hr').remove();
        $('p > a[href*="index.htm"]').remove(); // "Kembali ke daftar isi"

        // The main content in MIA is usually inside the body directly.
        // We will just convert the body.
        let bodyHtml = $('body').html() || '';
        
        let markdown = turndownService.turndown(bodyHtml);
        
        // Add frontmatter
        const finalMd = `---
title: "${chapter.title}"
---

${markdown}
`;
        fs.writeFileSync(filePath, finalMd);
        
        // Rate limit
        await delay(500);
      } catch (err) {
        console.error(`  Failed to fetch ${chapter.url}:`, err);
      }
    }
  }
  
  console.log('\nImport complete.');
}

importFullText();
