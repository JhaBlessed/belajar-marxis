import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';

const ROOT_DIR = path.join(process.cwd(), 'sumberSejarahMarxismeIndonesia/Sejarah Marxisme Indonesia/www.marxists.org/indonesia/indones');
const PUBLIC_DIR = path.join(process.cwd(), 'public/mia-history/indonesia/indones');

const manifest: any = {
  pages: [],
  htmlFiles: [],
  pdfFiles: [],
  assets: [],
  links: [],
  possibleEvents: [],
  possibleOrganizations: [],
  possiblePeople: [],
  possiblePublications: []
};

function copyDir(src: string, dest: string) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    // Ignore HTTrack junk
    if (['hts-cache', 'hts-log.txt', 'backblue.gif', 'fade.gif'].includes(entry.name) || entry.name.endsWith('.whtt') || entry.name.endsWith('.tmp')) {
      continue;
    }

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      const relativePath = '/mia-history/indonesia/indones/' + path.relative(ROOT_DIR, srcPath).replace(/\\/g, '/');
      if (entry.name.endsWith('.html') || entry.name.endsWith('.htm')) {
        manifest.htmlFiles.push(relativePath);
        manifest.pages.push(relativePath);
      } else if (entry.name.endsWith('.pdf')) {
        manifest.pdfFiles.push(relativePath);
      } else {
        manifest.assets.push(relativePath);
      }
    }
  }
}

// 1. Copy files
console.log('Copying files to public/mia-history...');
if (!fs.existsSync(ROOT_DIR)) {
  console.error('ROOT_DIR not found:', ROOT_DIR);
  process.exit(1);
}
copyDir(ROOT_DIR, PUBLIC_DIR);

// 2. Parse Timeline from index.html
console.log('Parsing timeline from index.html...');
const indexPath = path.join(ROOT_DIR, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf-8');
const $ = cheerio.load(indexHtml);

const events: any[] = [];
let currentYear: number | null = null;
let eventIdCounter = 1;

// Known orgs
const ORGS = ['ISDV', 'Sarekat Islam', 'PKI', 'Komintern', 'PARI', 'Persatuan Perjuangan', 'Budi Utomo', 'Indische Partij', 'Gerindo', 'Gapi', 'Partai Rakjat', 'FDR', 'Partai Sosialis'];

$('table tr').each((i, el) => {
  const tds = $(el).find('td');
  if (tds.length === 0) return;

  let tdYear = '';
  let tdDate = '';
  let contentHtml = '';

  if (tds.length === 3) {
    tdYear = $(tds[0]).text().trim();
    tdDate = $(tds[1]).text().trim();
    contentHtml = $(tds[2]).html() || '';
  } else if (tds.length === 2) {
    tdDate = $(tds[0]).text().trim();
    contentHtml = $(tds[1]).html() || '';
  } else if (tds.length === 1) {
    contentHtml = $(tds[0]).html() || '';
  }

  if (tdYear && tdYear.match(/^\d{4}$/)) {
    currentYear = parseInt(tdYear, 10);
  }

  if (!contentHtml) return;
  const col3 = cheerio.load(contentHtml);
  
  let title = '';
  let localPath = '';
  
  const a = col3('a').first();
  if (a.length > 0) {
    title = a.text().trim().replace(/\s+/g, ' ');
    const href = a.attr('href');
    if (href && !href.startsWith('http') && !href.startsWith('mailto')) {
      localPath = '/mia-history/indonesia/indones/' + decodeURIComponent(href).replace(/\\/g, '/');
      manifest.links.push(localPath);
    }
  }

  const fullText = col3.text().trim().replace(/\s+/g, ' ');
  if (!title) {
    title = fullText;
  }
  
  // Categorize roughly
  let category = 'event';
  const textLower = fullText.toLowerCase();
  
  if (textLower.includes('partai') || textLower.includes('pki') || textLower.includes('isdv') || textLower.includes('sarekat islam')) category = 'party';
  else if (textLower.includes('revolusi') || textLower.includes('pemberontakan') || textLower.includes('proklamasi')) category = 'revolution';
  else if (textLower.includes('buku') || textLower.includes('brosur') || textLower.includes('tulisan') || textLower.includes('suara rakyat')) category = 'publication';
  else if (textLower.includes('buruh') || textLower.includes('mogok') || textLower.includes('vstpd')) category = 'labor';

  // Find related ORGS
  const relatedOrganizationIds: string[] = [];
  ORGS.forEach(org => {
    if (fullText.includes(org) || title.includes(org)) {
      relatedOrganizationIds.push(org.toLowerCase().replace(/\s+/g, '-'));
      if (!manifest.possibleOrganizations.includes(org)) manifest.possibleOrganizations.push(org);
    }
  });

  const evt = {
    id: `evt-${currentYear || '0000'}-${eventIdCounter++}`,
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').substring(0, 50) || `event-${eventIdCounter}`,
    date: tdDate || undefined,
    year: currentYear,
    title: title,
    description: fullText,
    category: category,
    relatedAuthorIds: [],
    relatedWorkIds: [],
    relatedOrganizationIds,
    sourceIds: ['mia-sejarah-marxisme-indonesia-local'],
    localSourcePath: localPath || undefined,
    originalSourceUrl: localPath ? localPath.replace('/mia-history', 'https://www.marxists.org') : undefined,
    sourceCheckedAt: new Date().toISOString(),
    metadataConfidence: 'high'
  };

  while(events.find((e: any)=>e.slug===evt.slug)){ evt.slug+='-' + Math.floor(Math.random()*1000); } events.push(evt);
  manifest.possibleEvents.push(title);
});

if (!fs.existsSync(path.join(process.cwd(), 'src/generated'))) {
  fs.mkdirSync(path.join(process.cwd(), 'src/generated'), { recursive: true });
}

fs.writeFileSync(path.join(process.cwd(), 'src/generated/indonesiaTimeline.ts'), 
  `import type { TimelineEvent } from '../types';\n\nexport const indonesiaTimeline: TimelineEvent[] = ${JSON.stringify(events, null, 2)};\n`
);

fs.writeFileSync(path.join(process.cwd(), 'src/generated/history-source-manifest.json'), JSON.stringify(manifest, null, 2));

console.log(`Successfully generated ${events.length} events.`);
