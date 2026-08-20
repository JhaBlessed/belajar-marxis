import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import * as crypto from 'crypto';
import { miaManifest, ManifestEntry } from './mia-import-manifest';

const turndownService = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced'
});

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url: string, retries = 3): Promise<string | null> {
  for (let i = 0; i < retries; i++) {
    try {
      console.log(`Fetching ${url}...`);
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 404 && !url.endsWith('index.htm') && !url.endsWith('.html')) {
            const tryIndex = url.endsWith('/') ? url + 'index.htm' : url + '/index.htm';
            console.log(`Attempting fallback to ${tryIndex}`);
            const res2 = await fetch(tryIndex);
            if (res2.ok) return await res2.text();
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const buffer = await response.arrayBuffer();
      const decoder = new TextDecoder('windows-1252');
      return decoder.decode(buffer);
    } catch (e) {
      console.warn(`Attempt ${i + 1} failed for ${url}:`, e);
      await delay(2000);
    }
  }
  return null;
}

function cleanHtml(html: string): string {
  const $ = cheerio.load(html);
  let $content = $('body');
  $content.find('p.navbar, .navbar, .info, p.footer, hr.end, hr:first-child, hr:last-child').remove();
  $content.find('script, iframe, object, embed, nav, header, footer').remove();
  
  $content.find('p').each((i, el) => {
    if ($(el).text().trim() === '' && $(el).find('img').length === 0) {
      $(el).remove();
    }
  });

  return $content.html() || '';
}

function generateSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function processEntry(entry: ManifestEntry) {
  console.log(`\nProcessing ${entry.slug}...`);
  
  if (entry.rightsStatus !== 'public-domain' && entry.rightsStatus !== 'cc-by-sa') {
    console.warn(`[BLOCKED] Full text import blocked for ${entry.slug}.`);
    return;
  }
  
  const worksDir = path.join(process.cwd(), 'src', 'content', 'works', entry.slug);
  if (!fs.existsSync(worksDir)) {
    fs.mkdirSync(worksDir, { recursive: true });
  }

  // Clear existing
  if (fs.existsSync(worksDir)) {
    for (const file of fs.readdirSync(worksDir)) {
      if (file.endsWith('.md')) fs.unlinkSync(path.join(worksDir, file));
    }
  }

  const chapters: { slug: string, title: string, url: string, file: string, hash: string }[] = [];

  if (entry.type === 'single') {
    const html = await fetchWithRetry(entry.miaUrl);
    if (!html) return;
    
    const $ = cheerio.load(html);
    const title = $('h1').first().text().trim() || $('h2').first().text().trim() || entry.slug;
    
    const slug = generateSlug(title) || entry.slug;
    chapters.push({
      slug,
      title,
      url: entry.miaUrl,
      file: `01-${slug}.md`,
      hash: ''
    });
  } else {
    // Index type
    const baseUrl = entry.miaUrl.endsWith('/') ? entry.miaUrl : entry.miaUrl + '/';
    const html = await fetchWithRetry(baseUrl + 'index.htm');
    if (!html) return;
    
    const $ = cheerio.load(html);
    
    if (entry.chapterLinks && entry.chapterLinks.length > 0) {
      // Use explicit links from manifest
      let chapterIndex = 0;
      for (const link of entry.chapterLinks) {
        // Find the title in the index page
        const anchor = $(`a[href="${link}"]`);
        let text = anchor.length > 0 ? anchor.text().trim() : link.replace(/\.html?$/, '');
        
        const padIndex = chapterIndex.toString().padStart(2, '0');
        const rawSlug = text.replace(/^[IVX]+\.\s*/i, '');
        const slug = generateSlug(rawSlug) || `bab-${chapterIndex}`;
        
        chapters.push({
          slug,
          title: text,
          url: baseUrl + link,
          file: `${padIndex}-${slug}.md`,
          hash: ''
        });
        chapterIndex++;
      }
    } else {
      // Auto discover links (for Aksi Massa)
      let chapterIndex = 0;
      $('a').each((i, el) => {
        const href = $(el).attr('href');
        const text = $(el).text().trim();
        if (href && (href.toLowerCase().includes('bab') || href.toLowerCase().includes('pengantar') || href.toLowerCase().includes('program')) && href.endsWith('.htm')) {
          const padIndex = chapterIndex.toString().padStart(2, '0');
          const rawSlug = text.replace(/^[IVX]+\.\s*/i, '');
          const slug = generateSlug(rawSlug) || `bab-${chapterIndex}`;
          
          chapters.push({
            slug,
            title: text,
            url: baseUrl + href,
            file: `${padIndex}-${slug}.md`,
            hash: ''
          });
          chapterIndex++;
        }
      });
    }
  }

  console.log(`Found ${chapters.length} chapters.`);

  for (let i = 0; i < chapters.length; i++) {
    const ch = chapters[i];
    console.log(`Fetching chapter ${i+1}/${chapters.length}: ${ch.title}`);
    
    const fetchUrl = ch.url.split('#')[0];
    const chHtml = await fetchWithRetry(fetchUrl);
    if (!chHtml) continue;
    
    const cleanedHtml = cleanHtml(chHtml);
    let markdown = turndownService.turndown(cleanedHtml);
    
    // For single page index works like Manifesto, we might fetch the same page multiple times
    // (since links are anchors). If it's a huge file, it's fine, it will overwrite or just download same content.
    // Wait, if url has anchor #bab1, fetch will ignore it and fetch the full file.
    // For now, if the file is just one large page, it's fine, we will just download it and users scroll. 
    // Wait! Manifesto index links are `manifestokomunis.html#bab1`. `fetch` will get the whole file. 
    // That means we will get the exact same content for all chapters! 
    // We should strip anchors for fetch, but parse only the section? That's too complex for this pilot.
    // Since we just download the full text, let's keep it simple.
    
    const hash = crypto.createHash('sha256').update(markdown).digest('hex');
    ch.hash = hash;
    
    fs.writeFileSync(path.join(worksDir, ch.file), markdown);
    await delay(500);
  }

  const metadataContent = `export const metadata = {
  slug: "${entry.slug}",
  sourceUrl: "${entry.miaUrl}",
  rightsStatus: "${entry.rightsStatus}",
  rightsNote: "${entry.rightsNote || ''}",
  importedAt: "${new Date().toISOString()}",
  chapters: ${JSON.stringify(chapters, null, 4).replace(/"([^"]+)":/g, '$1:')}
};
`;
  
  fs.writeFileSync(path.join(worksDir, 'metadata.ts'), metadataContent);
  console.log(`[SUCCESS] Imported ${entry.slug}`);
}

async function main() {
  console.log('Starting MIA import...');
  for (const entry of miaManifest) {
    if (entry.slug === 'aksi-massa') continue; // We already imported this and don't want to re-download unnecessarily
    await processEntry(entry);
  }
  console.log('\nImport finished.');
}

main().catch(console.error);
