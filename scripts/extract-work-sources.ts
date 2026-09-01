import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { execSync } from 'child_process';
import * as cheerio from 'cheerio';
import { works } from '../src/data/works';

const PUBLIC_DIR = path.join(import.meta.dirname, '../public');
const CACHE_DIR = path.join(import.meta.dirname, '../generated/work-source-text');
const OUTPUT_FILE = path.join(import.meta.dirname, '../src/generated/workSourceEvidence.ts');

if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

export interface SourceEvidence {
  path: string;
  type: 'html' | 'pdf';
  role: 'primary' | 'context';
  readable: boolean;
  sha256: string;
  textLength: number;
  headings: string[];
}

export interface WorkEvidence {
  slug: string;
  sources: SourceEvidence[];
  totalTextLength: number;
  extractionStatus: 'complete' | 'partial' | 'unavailable';
  documentCoverage: 'full' | 'excerpt' | 'unknown';
}

function classifyRole(srcPath: string, workSlug: string): 'primary' | 'context' {
  // Use heuristic as fallback, but if it's explicitly the canonical primary, mark as primary.
  // Actually, we can use the same logic from the prompt.
  const lower = srcPath.toLowerCase();

  if (workSlug === 'kapital-i' || workSlug === 'kapital-jilid-1') {
    if (srcPath === '/mia/indonesia/archive/marx-engels/1867/capital01.html') return 'primary';
    return 'context';
  }

  const isContext = lower.includes('katapengantar') ||
                    lower.includes('150tahun') ||
                    lower.includes('pengantaredisi') ||
                    lower.includes('editor') ||
                    lower.includes('editorial') ||
                    lower.includes('penerjemah') ||
                    lower.includes('translator') ||
                    lower.includes('komentar') ||
                    lower.includes('anniversary') ||
                    lower.includes('preface');

  return isContext ? 'context' : 'primary';
}

function decodeBuffer(buffer: Buffer): string {
  // try to find charset in first 1024 bytes
  const head = buffer.subarray(0, 1024).toString('ascii').toLowerCase();
  let charset = 'utf-8';
  if (head.includes('charset=windows-1252') || head.includes('charset="windows-1252"')) {
    charset = 'windows-1252';
  } else if (head.includes('charset=iso-8859-1') || head.includes('charset="iso-8859-1"')) {
    charset = 'iso-8859-1';
  }

  try {
    const decoder = new TextDecoder(charset);
    return decoder.decode(buffer);
  } catch (e) {
    return buffer.toString('utf8');
  }
}

function extractHtml(buffer: Buffer): { text: string; headings: string[] } {
  const html = decodeBuffer(buffer);
  const $ = cheerio.load(html);

  // Remove unwanted elements
  $('script').remove();
  $('style').remove();
  $('.mia-modern-header').remove();
  $('#belajar-marxis-nav').remove(); // if any

  const headings: string[] = [];
  $('h1, h2, h3').each((_, el) => {
    const t = $(el).text().trim();
    if (t) headings.push(t);
  });

  // Extract readable text from paragraphs, lists, tables
  const textParts: string[] = [];

  const title = $('title').text().trim();
  if (title) textParts.push(title);

  $('h1, h2, h3, h4, h5, h6, p, li, blockquote, th, td').each((_, el) => {
    const text = $(el).text().trim();
    if (text) {
      textParts.push(text);
    }
  });

  return {
    text: textParts.join('\n\n'),
    headings
  };
}

function extractPdf(pdfPath: string): { text: string; headings: string[] } {
  try {
    const text = execSync(`pdftotext -q "${pdfPath}" -`).toString();
    return {
      text: text.trim(),
      headings: [] // pdftotext doesn't preserve semantic headings well
    };
  } catch (e) {
    return { text: '', headings: [] };
  }
}

async function main() {
  const evidenceManifest: Record<string, WorkEvidence> = {};

  for (const work of works) {
    const rawSources: string[] = [];
    if (work.localSourcePath) rawSources.push(work.localSourcePath);
    if (work.localSourceParts) {
      for (const part of work.localSourceParts) {
        if (part.path) rawSources.push(part.path);
      }
    }

    // Filter valid sources
    const validSources = new Set<string>();
    for (let src of rawSources) {
      if (src.includes('http://') || src.includes('https://') || src.includes('/https:')) continue;
      if (src.includes('mailto:')) continue;

      const cleanSrc = src.split('?')[0].split('#')[0];
      if (!cleanSrc.startsWith('/mia/')) continue;

      const fullPath = path.join(PUBLIC_DIR, cleanSrc);
      if (fs.existsSync(fullPath)) {
        validSources.add(cleanSrc);
      }
    }

    const sources = Array.from(validSources);

    const sourceEvidences: SourceEvidence[] = [];
    let combinedText = '';
    let totalTextLength = 0;

    for (const src of sources) {
      const fullPath = path.join(PUBLIC_DIR, src);
      const buffer = fs.readFileSync(fullPath);
      const sha256 = crypto.createHash('sha256').update(buffer).digest('hex');

      let text = '';
      let headings: string[] = [];
      const type = src.toLowerCase().endsWith('.pdf') ? 'pdf' : 'html';

      if (type === 'html') {
        const extracted = extractHtml(buffer);
        text = extracted.text;
        headings = extracted.headings;
      } else {
        const extracted = extractPdf(fullPath);
        text = extracted.text;
        headings = extracted.headings;
      }

      const readable = text.trim().length > 100;
      if (readable) {
        combinedText += `\n\n--- SOURCE: ${src} ---\n\n` + text;
      }

      const role = classifyRole(src, work.slug);

      sourceEvidences.push({
        path: src,
        type,
        role,
        readable,
        sha256,
        textLength: text.length,
        headings
      });

      totalTextLength += text.length;
    }

    // Save to cache
    if (combinedText.trim().length > 0) {
      fs.writeFileSync(path.join(CACHE_DIR, `${work.slug}.txt`), combinedText);
    }

    // Determine extraction status
    const primarySources = sourceEvidences.filter(s => s.role === 'primary');
    let extractionStatus: 'complete' | 'partial' | 'unavailable' = 'unavailable';

    if (primarySources.length > 0) {
      const allPrimaryReadable = primarySources.every(s => s.readable);
      const somePrimaryReadable = primarySources.some(s => s.readable);
      if (allPrimaryReadable) extractionStatus = 'complete';
      else if (somePrimaryReadable) extractionStatus = 'partial';
    }

    let documentCoverage: 'full' | 'excerpt' | 'unknown' = 'full';
    if (work.slug === 'pendahuluan-sumbangan-untuk-kritik-terhadap-filsafat-hak-hegel' || work.slug === 'pendahuluan-sumbangan-untuk-kritik-terhadap-filsaf') {
      documentCoverage = 'excerpt';
    }

    evidenceManifest[work.slug] = {
      slug: work.slug,
      sources: sourceEvidences,
      totalTextLength,
      extractionStatus,
      documentCoverage
    };
  }

  const outputContent = `/* eslint-disable */
// THIS FILE IS AUTO-GENERATED BY extract-work-sources.ts

export interface SourceEvidence {
  path: string;
  type: 'html' | 'pdf';
  role: 'primary' | 'context';
  readable: boolean;
  sha256: string;
  textLength: number;
  headings: string[];
}

export interface WorkEvidence {
  slug: string;
  sources: SourceEvidence[];
  totalTextLength: number;
  extractionStatus: 'complete' | 'partial' | 'unavailable';
  documentCoverage: 'full' | 'excerpt' | 'unknown';
}

export const workSourceEvidence: Record<string, WorkEvidence> = ${JSON.stringify(evidenceManifest, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, outputContent);
  console.log(`Generated evidence manifest for ${works.length} works.`);
}

main().catch(console.error);
