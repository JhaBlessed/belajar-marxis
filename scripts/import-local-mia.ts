import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import crypto from 'crypto';
import { works as existingWorks } from '../src/data/works';

const AUDIT_FILE = path.join(process.cwd(), 'generated', 'source-audit.json');
const MANIFEST_FILE = path.join(process.cwd(), 'generated', 'mia-work-manifest.json');
const MIGRATION_REPORT_FILE = path.join(process.cwd(), 'generated', 'migration-report.json');
const WORKS_DIR = path.join(process.cwd(), 'src', 'content', 'works');
const EXTRACT_DIR = path.join(process.cwd(), '.import-cache/mia');

if (!fs.existsSync(AUDIT_FILE)) {
  console.error('source-audit.json not found!');
  process.exit(1);
}

const audit = JSON.parse(fs.readFileSync(AUDIT_FILE, 'utf8'));
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

// MIA-specific cleaning rules
function cleanHtml($: cheerio.Root, htmlBody: cheerio.Cheerio<cheerio.Element>) {
  htmlBody.find('.navbar, .navigation, iframe, object, embed, script, style, center > a > img').remove();
  // Remove "Kembali ke..." or "Indeks Karya..." texts usually at bottom/top
  htmlBody.find('p').each((i, el) => {
    const text = $(el).text().toLowerCase();
    if (text.includes('kembali ke indeks') || text.includes('marxists internet archive')) {
      $(el).remove();
    }
  });
  return htmlBody.html() || '';
}

function generateSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function extractYear(href: string, title: string): number | null {
  const match = href.match(/\/(\d{4})\//);
  if (match) return parseInt(match[1]);
  const titleMatch = title.match(/\b(18|19|20)\d{2}\b/);
  if (titleMatch) return parseInt(titleMatch[0]);
  return null;
}

function determineRights(htmlContent: string) {
  const text = htmlContent.toLowerCase();
  const evidence = [];
  if (text.includes('public domain')) evidence.push('public domain');
  if (text.includes('creative commons') || text.includes('cc-by')) evidence.push('creative commons');
  if (text.includes('copyleft')) evidence.push('copyleft');
  if (text.includes('copyright') || text.includes('hak cipta')) evidence.push('copyright check');

  return {
    status: 'unknown',
    evidence
  };
}

function toMiaUrl(localPath: string) {
  const marker = path.join('www.marxists.org', 'indonesia', 'archive');
  const idx = localPath.indexOf(marker);
  if (idx !== -1) {
    const relative = localPath.slice(idx).replace(/\\/g, '/');
    return `https://${relative}`;
  }
  return '';
}

function createHash(content: string) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

async function runImport() {
  const manifest: any[] = [];
  
  const migrationReport = {
    matchedExistingWorks: 0,
    newWorks: 0,
    staleExistingWorks: 0,
    metadataConflicts: 0,
    duplicateWorks: 0,
    missingAuthors: 0,
    invalidYears: 0,
    missingRights: 0,
    readyForImport: 0
  };

  const existingSlugs = new Set(existingWorks.map(w => w.slug));

  for (const work of audit.possibleWorks) {
    let slug = generateSlug(work.title);
    
    // Some titles might just be "Bab 1", let's fix if we can, but mostly we rely on the index text.
    if (slug.length < 3) continue;

    const mainAuthorSlug = work.authorIds[0];
    const year = extractYear(work.originalHref, work.title);
    
    // Check if matched
    if (existingSlugs.has(slug)) {
      migrationReport.matchedExistingWorks++;
    } else {
      migrationReport.newWorks++;
    }

    const sourceUrl = toMiaUrl(work.indexPath);
    
    let chaptersData: any[] = [];
    let format = work.type;

    const workDir = path.join(WORKS_DIR, mainAuthorSlug, slug);
    const chaptersDir = path.join(workDir, 'chapters');
    
    if (!fs.existsSync(chaptersDir)) {
      fs.mkdirSync(chaptersDir, { recursive: true });
    }

    let rightsData = { status: 'unknown', evidence: [] as string[] };
    let contentHash = '';

    if (work.type === 'single-html') {
      const html = fs.readFileSync(work.indexPath, 'utf8');
      const $ = cheerio.load(html);
      const body = $('body');
      rightsData = determineRights(html);
      
      const cleaned = cleanHtml($, body);
      const markdown = turndownService.turndown(cleaned);
      contentHash = createHash(markdown);
      
      fs.writeFileSync(path.join(chaptersDir, '00-full-text.md'), markdown);
      chaptersData = [{ title: 'Teks Lengkap', file: '00-full-text.md' }];
      
    } else if (work.type === 'multi-html') {
      const indexHtml = fs.readFileSync(work.indexPath, 'utf8');
      const $ = cheerio.load(indexHtml);
      const dir = path.dirname(work.indexPath);
      
      let indexCount = 0;
      $('a').each((_, el) => {
        const href = $(el).attr('href');
        const text = $(el).text().trim();
        if (href && (href.endsWith('.htm') || href.endsWith('.html')) && !href.startsWith('http') && !href.includes('..') && href !== 'index.html' && href !== 'index.htm') {
          const chapPath = path.join(dir, href);
          if (fs.existsSync(chapPath)) {
            const chapHtml = fs.readFileSync(chapPath, 'utf8');
            const chap$ = cheerio.load(chapHtml);
            const chapCleaned = cleanHtml(chap$, chap$('body'));
            const chapMarkdown = turndownService.turndown(chapCleaned);
            
            const chapFileName = `${indexCount.toString().padStart(2, '0')}-${generateSlug(text || 'bab')}.md`;
            fs.writeFileSync(path.join(chaptersDir, chapFileName), chapMarkdown);
            chaptersData.push({ title: text || `Bab ${indexCount + 1}`, file: chapFileName });
            indexCount++;
          }
        }
      });
      // Hash of combined chapters
      contentHash = createHash(chaptersData.map(c => c.file).join(','));
    }

    const workManifest = {
      slug,
      title: work.title,
      authorIds: work.authorIds,
      year,
      sourceUrl,
      localSourcePath: work.indexPath,
      sourceType: "MIA_LOCAL_ARCHIVE",
      format,
      chapters: chaptersData,
      metadataConfidence: year ? "high" : "low",
      contentStatus: chaptersData.length > 0 ? "complete" : "not-imported",
      rightsStatus: rightsData.status,
      rightsEvidence: rightsData.evidence,
      contentHash,
      importedAt: new Date().toISOString()
    };
    
    manifest.push(workManifest);

    // Create metadata.ts for the frontend reader
    const metadataTs = `// Generated automatically from sumber.zip
export const metadata = {
  title: ${JSON.stringify(workManifest.title)},
  slug: ${JSON.stringify(slug)},
  authorIds: ${JSON.stringify(workManifest.authorIds)},
  year: ${year},
  sourceUrl: ${JSON.stringify(sourceUrl)},
  chapters: ${JSON.stringify(chaptersData, null, 2)}
};`;

    fs.writeFileSync(path.join(workDir, 'metadata.ts'), metadataTs);
    migrationReport.readyForImport++;
  }

  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2));
  fs.writeFileSync(MIGRATION_REPORT_FILE, JSON.stringify(migrationReport, null, 2));

  console.log(`Import selesai! Manifest disimpan di ${MANIFEST_FILE}`);
  console.log(`Laporan migrasi disimpan di ${MIGRATION_REPORT_FILE}`);
}

runImport().catch(console.error);
