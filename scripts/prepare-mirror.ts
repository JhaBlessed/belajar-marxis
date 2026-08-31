import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import AdmZip from 'adm-zip';

const ZIP_PATH = path.join(process.cwd(), 'sumber.zip');
const EXTRACT_DIR = path.join(process.cwd(), '.import-cache', 'mia');
const PUBLIC_MIA_DIR = path.join(process.cwd(), 'public', 'mia');
const MANIFEST_FILE = path.join(process.cwd(), 'src', 'generated', 'miaLocalManifest.ts');

const ignorePatterns = [
  'hts-cache', 'hts-log.txt', '.whtt', 'backblue.gif', 'fade.gif', 'readme.txt', 
  'winprofile.ini', 'doit.log', 'new.lst', 'new.txt', 'new.zip'
];

function isIgnored(fileName: string) {
  for (const p of ignorePatterns) {
    if (fileName.includes(p)) return true;
  }
  return false;
}

const bannerHtml = `
<div class="mia-modern-header">
  <div class="mia-modern-header-title">
    ARSIP LOKAL MIA
    <div class="mia-modern-header-subtitle">Sumber: Marxists Internet Archive - Seksi Bahasa Indonesia</div>
  </div>
  <div class="mia-modern-header-actions">
    <a href="/" class="mia-modern-header-btn mia-modern-header-btn-primary">&larr; Kembali ke Belajar Marxis</a>
    <a id="mia-online-link" href="#" target="_blank" class="mia-modern-header-btn mia-modern-header-btn-secondary">Lihat Versi Online di MIA &#8599;</a>
  </div>
</div>
`;

function sanitizeHtml($: cheerio.Root) {
  $('script, iframe, object, embed').remove();
  $('*').each((_, el) => {
    const attribs = el.attribs;
    for (const attr in attribs) {
      if (attr.toLowerCase().startsWith('on')) {
        $(el).removeAttr(attr);
      }
    }
  });
}

function gatherFiles(dir: string, fileList: string[] = []) {
  if (!fs.existsSync(dir)) return fileList;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (isIgnored(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      gatherFiles(fullPath, fileList);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function prepare() {
  console.log('Extracting ZIP if needed...');
  if (!fs.existsSync(EXTRACT_DIR)) {
    fs.mkdirSync(EXTRACT_DIR, { recursive: true });
    const zip = new AdmZip(ZIP_PATH);
    zip.extractAllTo(EXTRACT_DIR, true);
  }

  const sumberDir = path.join(EXTRACT_DIR, 'sumber');
  if (!fs.existsSync(sumberDir)) {
    console.error('Folder "sumber" tidak ditemukan dalam ZIP!');
    return;
  }

  if (fs.existsSync(PUBLIC_MIA_DIR)) {
    fs.rmSync(PUBLIC_MIA_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(PUBLIC_MIA_DIR, { recursive: true });

  const generatedDir = path.dirname(MANIFEST_FILE);
  if (!fs.existsSync(generatedDir)) fs.mkdirSync(generatedDir, { recursive: true });

  const collections = fs.readdirSync(sumberDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && !isIgnored(d.name));

  const allSourceFiles: string[] = [];
  const localMap: Record<string, string> = {};

  console.log('Scanning collections for files to mirror...');
  for (const col of collections) {
    const archiveBase = path.join(sumberDir, col.name, 'www.marxists.org', 'indonesia', 'archive');
    if (!fs.existsSync(archiveBase)) continue;
    
    // We only want to mirror indonesia/archive for now, as that's where the works are.
    // Actually the user said "Gunakan file di bawah www.marxists.org/indonesia/archive/ sebagai sumber utama."
    const files = gatherFiles(archiveBase);
    allSourceFiles.push(...files);
  }

  // Deduplicate files (if different collections downloaded the same file)
  const uniqueFiles = new Map<string, string>();
  for (const file of allSourceFiles) {
    // Map it to its relative path in public/mia
    const marker = 'indonesia' + path.sep + 'archive';
    const markerIdx = file.indexOf(marker);
    if (markerIdx !== -1) {
      const relPath = file.substring(markerIdx); // indonesia/archive/...
      const publicPath = path.join(PUBLIC_MIA_DIR, relPath);
      // We will prefer the first encountered version if duplicates exist
      if (!uniqueFiles.has(publicPath)) {
        uniqueFiles.set(publicPath, file);
      }
    }
  }

  console.log(`Found ${uniqueFiles.size} unique files to mirror.`);

  // Create a manifest of what will exist in local mirror (using posix paths for URLs)
  const localPathsSet = new Set<string>();
  const manifestData: Record<string, any> = {};

  for (const [pubPath, srcPath] of uniqueFiles.entries()) {
    const relPath = path.relative(PUBLIC_MIA_DIR, pubPath).replace(/\\/g, '/');
    const localUrl = '/mia/' + relPath;
    localPathsSet.add(localUrl);
    
    const miaAbsoluteUrl = 'https://www.marxists.org/' + relPath;
    manifestData[miaAbsoluteUrl] = {
      localPath: localUrl,
      exists: true,
      sourceArchive: 'sumber.zip'
    };
  }

  // Now process and copy files
  let htmlCount = 0;
  let assetCount = 0;

  for (const [pubPath, srcPath] of uniqueFiles.entries()) {
    const dir = path.dirname(pubPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const ext = path.extname(srcPath).toLowerCase();
    
    if (ext === '.html' || ext === '.htm') {
      htmlCount++;
      let html = fs.readFileSync(srcPath, 'utf8');
      
      const relPath = path.relative(PUBLIC_MIA_DIR, pubPath).replace(/\\/g, '/');
      const miaAbsoluteUrl = 'https://www.marxists.org/' + relPath;

      const $ = cheerio.load(html);
      sanitizeHtml($);

      // Add modern viewport and stylesheet
      if ($('head').length === 0) {
        $('html').prepend('<head></head>');
      }
      $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
      $('head').append('<link rel="stylesheet" type="text/css" href="/mia/_assets/archive-modern.css">');

      // Prepend banner
      $('body').prepend(bannerHtml);
      $('#mia-online-link').attr('href', miaAbsoluteUrl);

      // Rewrite links
      $('a').each((_, el) => {
        const href = $(el).attr('href');
        if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('#') && href !== '/') {
          // Resolve relative href to absolute /mia/ path
          // The current file is at /mia/indonesia/archive/...
          const currentDir = '/mia/' + path.dirname(relPath);
          // Simple URL resolution
          try {
            const resolved = new URL(href, 'http://localhost' + currentDir + '/').pathname;
            // Check if resolved exists in our local mirror
            if (localPathsSet.has(resolved)) {
              $(el).attr('href', resolved);
            } else {
              // Target not mirrored, rewrite to absolute MIA URL
              const miaTarget = 'https://www.marxists.org' + resolved.substring(4); // remove /mia
              $(el).attr('href', miaTarget);
            }
          } catch(e) {
             // fallback
          }
        }
      });
      
      // We don't rewrite <img> src if it exists locally, just make sure it correctly points to it.
      // But actually, we should also rewrite <img> src if it's missing locally to point to MIA
      $('img, link[rel="stylesheet"]').each((_, el) => {
        const attr = el.tagName === 'img' ? 'src' : 'href';
        const val = $(el).attr(attr);
        if (val && !val.startsWith('http') && !val.startsWith('data:') && val !== '/mia/_assets/archive-modern.css') {
          const currentDir = '/mia/' + path.dirname(relPath);
          try {
            const resolved = new URL(val, 'http://localhost' + currentDir + '/').pathname;
            if (localPathsSet.has(resolved)) {
              $(el).attr(attr, resolved);
            } else {
              const miaTarget = 'https://www.marxists.org' + resolved.substring(4);
              $(el).attr(attr, miaTarget);
            }
          } catch(e) {}
        }
      });

      fs.writeFileSync(pubPath, $.html());
    } else {
      assetCount++;
      fs.copyFileSync(srcPath, pubPath);
    }
  }

  // Copy shared assets
  const sourceAssetsDir = path.join(process.cwd(), 'scripts', 'assets');
  const targetAssetsDir = path.join(PUBLIC_MIA_DIR, '_assets');
  
  if (fs.existsSync(sourceAssetsDir)) {
    if (!fs.existsSync(targetAssetsDir)) {
      fs.mkdirSync(targetAssetsDir, { recursive: true });
    }
    const cssFileName = 'archive-modern.css';
    if (fs.existsSync(path.join(sourceAssetsDir, cssFileName))) {
      fs.copyFileSync(path.join(sourceAssetsDir, cssFileName), path.join(targetAssetsDir, cssFileName));
    }
  }

  // Write manifest
  const manifestTs = `// Generated automatically from sumber.zip
export const miaLocalManifest: Record<string, { localPath: string, exists: boolean, sourceArchive: string }> = ${JSON.stringify(manifestData, null, 2)};
`;
  fs.writeFileSync(MANIFEST_FILE, manifestTs);

  console.log('--- PREPARE MIRROR REPORT ---');
  console.log(`Jumlah halaman HTML yang berhasil dimirror: ${htmlCount}`);
  console.log(`Jumlah asset (gambar, dll): ${assetCount}`);
  console.log(`Jumlah URL MIA yang mempunyai local mirror: ${Object.keys(manifestData).length}`);
  console.log('Mirror prepared successfully.');
}

prepare().catch(console.error);
