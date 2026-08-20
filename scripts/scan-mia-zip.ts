import * as fs from 'fs';
import * as path from 'path';
import AdmZip from 'adm-zip';
import * as cheerio from 'cheerio';

const ZIP_PATH = path.join(process.cwd(), 'sumber.zip');
const EXTRACT_DIR = path.join(process.cwd(), '.import-cache/mia');
const OUTPUT_FILE = path.join(process.cwd(), 'generated', 'source-audit.json');

const COLLECTION_MAPPING: Record<string, string[]> = {
  "Karya-Karya Karl Marx dan Friedrich Engels": ["karl-marx", "friedrich-engels"],
  "Karya Lenin": ["v-i-lenin"],
  "Leon Trotsky (1879 - 1940)": ["leon-trotsky"],
  "Rosa Luxemburg": ["rosa-luxemburg"],
  "Tan Malaka": ["tan-malaka"],
  "Alexandra Kollontai": ["alexandra-kollontai"],
  "Che Guevara 1928 - 1967": ["che-guevara"],
  "Chen Duxiu": ["chen-duxiu"],
  "DOKUMEN-DOKUMEN KOMUNIS INTERNASIONAL (1919-1943)": ["komintern"],
  "Duncan Hallas": ["duncan-hallas"],
  "Eleanor Marx": ["eleanor-marx"],
  "Ernest Mandel": ["ernest-mandel"],
  "George Novack": ["george-novack"],
  "Georgi Plekhanov": ["georgi-plekhanov"]
};

interface AuditReport {
  collections: string[];
  htmlFiles: number;
  pdfFiles: number;
  images: number;
  ignoredFiles: number;
  possibleWorks: any[];
  possibleChapters: any[];
}

const ignorePatterns = [
  'hts-cache', 'hts-log.txt', '.whtt', 'backblue.gif', 'fade.gif', 'readme.txt', 
  'winprofile.ini', 'doit.log', 'new.lst', 'new.txt', 'new.zip', 'css'
];

function isIgnored(fileName: string) {
  for (const p of ignorePatterns) {
    if (fileName.includes(p)) return true;
  }
  return false;
}

function countFiles(dir: string, report: AuditReport) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (isIgnored(entry.name)) {
      report.ignoredFiles++;
      continue;
    }
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      countFiles(fullPath, report);
    } else {
      if (entry.name.endsWith('.html') || entry.name.endsWith('.htm')) report.htmlFiles++;
      else if (entry.name.endsWith('.pdf')) report.pdfFiles++;
      else if (entry.name.match(/\.(jpg|jpeg|png|gif|webp)$/i)) report.images++;
    }
  }
}

async function scan() {
  console.log('Extracting ZIP...');
  if (!fs.existsSync(EXTRACT_DIR)) {
    fs.mkdirSync(EXTRACT_DIR, { recursive: true });
    const zip = new AdmZip(ZIP_PATH);
    zip.extractAllTo(EXTRACT_DIR, true);
  } else {
    console.log('ZIP already extracted. Skipping extraction.');
  }

  const generatedDir = path.join(process.cwd(), 'generated');
  if (!fs.existsSync(generatedDir)) fs.mkdirSync(generatedDir);

  const report: AuditReport = {
    collections: [],
    htmlFiles: 0,
    pdfFiles: 0,
    images: 0,
    ignoredFiles: 0,
    possibleWorks: [],
    possibleChapters: []
  };

  const sumberDir = path.join(EXTRACT_DIR, 'sumber');
  if (!fs.existsSync(sumberDir)) {
    console.error('Folder "sumber" tidak ditemukan dalam ZIP!');
    return;
  }

  const collections = fs.readdirSync(sumberDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && !isIgnored(d.name));

  console.log(`Menemukan ${collections.length} koleksi.`);
  
  for (const col of collections) {
    report.collections.push(col.name);
    countFiles(path.join(sumberDir, col.name), report);

    const authorIds = COLLECTION_MAPPING[col.name];
    if (!authorIds) {
      console.warn(`WARNING: Koleksi "${col.name}" tidak ada di mapping!`);
      continue;
    }

    // Cari folder archive
    const archiveBase = path.join(sumberDir, col.name, 'www.marxists.org', 'indonesia', 'archive');
    if (!fs.existsSync(archiveBase)) {
      console.log(`Archive base not found for ${col.name}`);
      continue;
    }

    const subDirs = fs.readdirSync(archiveBase, { withFileTypes: true }).filter(d => d.isDirectory() && !isIgnored(d.name));
    for (const authorFolder of subDirs) {
      const authorPath = path.join(archiveBase, authorFolder.name);
      const indexHtmlPath = path.join(authorPath, 'index.htm');
      const alternateIndex = path.join(authorPath, 'index.html');
      
      let finalIndex = '';
      if (fs.existsSync(indexHtmlPath)) finalIndex = indexHtmlPath;
      else if (fs.existsSync(alternateIndex)) finalIndex = alternateIndex;
      else {
        // Coba cari di dalam subdir (contoh: marx-engels)
        const subSub = fs.readdirSync(authorPath, { withFileTypes: true }).filter(d => d.isDirectory());
        for (const ss of subSub) {
          const ssIndex = path.join(authorPath, ss.name, 'index.htm');
          if (fs.existsSync(ssIndex)) {
            finalIndex = ssIndex;
            // Let's just process whatever we find. We need a flexible scanner.
            // Wait, usually the main index.htm contains links to all works.
          }
        }
      }

      if (finalIndex) {
        // Parse index.htm to find works
        const html = fs.readFileSync(finalIndex, 'utf8');
        const $ = cheerio.load(html);
        
        $('a').each((_, el) => {
          const href = $(el).attr('href');
          let text = $(el).text().trim();
          
          if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.includes('..') && text.length > 2) {
            
            // Clean text
            text = text.replace(/\s+/g, ' ').trim();
            
            // Resolve target path
            const targetPath = path.join(path.dirname(finalIndex), href);
            
            if (fs.existsSync(targetPath)) {
              const stat = fs.statSync(targetPath);
              let isMulti = false;
              let subIndex = null;
              
              if (stat.isDirectory()) {
                const subIndex1 = path.join(targetPath, 'index.htm');
                const subIndex2 = path.join(targetPath, 'index.html');
                subIndex = fs.existsSync(subIndex1) ? subIndex1 : fs.existsSync(subIndex2) ? subIndex2 : null;
                if (subIndex) isMulti = true;
              } else if (href.endsWith('index.htm') || href.endsWith('index.html')) {
                // Often works link directly to the index.html of a subdirectory
                isMulti = true;
                subIndex = targetPath;
              }

              if (isMulti && subIndex) {
                // Verify it's actually multi-chapter by checking if it contains links to other HTMLs in the same dir
                const dir = path.dirname(subIndex);
                const filesInDir = fs.readdirSync(dir).filter(f => f.endsWith('.htm') || f.endsWith('.html'));
                // If there's only index.html, it's not really multi-chapter
                if (filesInDir.length > 1) {
                   report.possibleWorks.push({
                    title: text,
                    type: 'multi-html',
                    authorIds,
                    indexPath: subIndex,
                    originalHref: href,
                    collection: col.name
                  });
                } else {
                   report.possibleWorks.push({
                    title: text,
                    type: 'single-html',
                    authorIds,
                    indexPath: subIndex,
                    originalHref: href,
                    collection: col.name
                  });
                }
              } else if (href.endsWith('.htm') || href.endsWith('.html') || href.endsWith('.pdf')) {
                report.possibleWorks.push({
                  title: text,
                  type: href.endsWith('.pdf') ? 'pdf' : 'single-html',
                  authorIds,
                  indexPath: targetPath,
                  originalHref: href,
                  collection: col.name
                });
              }
            }
          }
        });
      } else {
        // If no index.htm found, just list html files in the directory
        // This is a fallback
        const files = fs.readdirSync(authorPath).filter(f => f.endsWith('.htm') || f.endsWith('.html'));
        for (const f of files) {
          if (!isIgnored(f)) {
            report.possibleWorks.push({
              title: f.replace(/\.html?$/, ''),
              type: 'single-html',
              authorIds,
              indexPath: path.join(authorPath, f),
              originalHref: f,
              collection: col.name
            });
          }
        }
      }
    }
  }

  // Dedup works by indexPath
  const uniqueWorks = new Map();
  for (const w of report.possibleWorks) {
    uniqueWorks.set(w.indexPath, w);
  }
  report.possibleWorks = Array.from(uniqueWorks.values());

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2));
  console.log(`Scan selesai! Output disimpan di ${OUTPUT_FILE}`);
}

scan().catch(console.error);
