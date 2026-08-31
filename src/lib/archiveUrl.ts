const HISTORY_ARCHIVE_BASE_URL = (
  import.meta.env.VITE_HISTORY_ARCHIVE_BASE_URL ||
  'https://arsip.dupi.my.id'
).replace(/\/+$/, '');

const HISTORY_LOCAL_PREFIX = '/mia-history';

export function resolveArchiveUrl(url: string): string {
  // URL eksternal tetap seperti semula.
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  // /mia-history/... diarahkan ke Cloudflare R2.
  if (url.startsWith(`${HISTORY_LOCAL_PREFIX}/`)) {
    return `${HISTORY_ARCHIVE_BASE_URL}${url.slice(
      HISTORY_LOCAL_PREFIX.length
    )}`;
  }

  // /mia/... dan path lokal lainnya tetap di website.
  return url;
}

export { HISTORY_ARCHIVE_BASE_URL };

import type { Work } from '../types';

export function getPrimarySourceUrl(work: Work): string | null {
  // PRIORITY 1: localSourcePath
  if (work.localSourcePath && !work.localSourcePath.includes('/https:') && !work.localSourcePath.includes('http://')) {
    return resolveArchiveUrl(work.localSourcePath);
  }

  const getValidParts = (parts?: {title?: string, path?: string, localPath?: string}[]) => {
    if (!parts) return [];
    return parts.filter(p => {
      const pth = p.path || p.localPath || '';
      return !pth.includes('/https:') && !pth.includes('http://');
    });
  };

  let validParts: {title: string, path: string}[] = [];
  if (work.localSourceParts && work.localSourceParts.length > 0) {
    validParts = getValidParts(work.localSourceParts).map(p => ({title: p.title || '', path: p.path!}));
  } else if (work.parts && work.parts.length > 0) {
    validParts = getValidParts(work.parts).map(p => ({title: p.title || '', path: p.localPath!}));
  }

  if (validParts.length === 0) return null;

  // PRIORITY 2: Exact basename index.html / index.htm
  const indexMatch = validParts.find(p => {
    const lowerPath = p.path.toLowerCase();
    return lowerPath.endsWith('/index.html') || lowerPath.endsWith('/index.htm');
  });
  if (indexMatch) return resolveArchiveUrl(indexMatch.path);

  // PRIORITY 3: Daftar isi / Landing
  const tocMatch = validParts.find(p => {
    const lowerPath = p.path.toLowerCase();
    const lowerTitle = p.title.toLowerCase();
    return lowerPath.includes('daftarisi') || lowerPath.includes('daftar-isi') || lowerPath.includes('toc') || lowerPath.includes('contents') ||
           lowerTitle.includes('daftar isi') || lowerTitle.includes('toc') || lowerTitle.includes('contents');
  });
  if (tocMatch) return resolveArchiveUrl(tocMatch.path);

  // PRIORITY 4: Substantive part
  const isWorkAboutPreface = work.title.toLowerCase().includes('pengantar') ||
                             work.title.toLowerCase().includes('prakata') ||
                             work.title.toLowerCase().includes('preface');

  const substantiveMatch = validParts.find(p => {
    if (isWorkAboutPreface) return true;

    const lowerPath = p.path.toLowerCase();
    const lowerTitle = p.title.toLowerCase();
    const excludeKeywords = [
      'katapengantar', 'kata-pengantar', 'kata pengantar', 'pengantar',
      'prakata', 'preface', 'sejarah', 'catatan', 'komentar', 'lampiran', 'appendix',
      'pendahuluan', 'tahun'
    ];

    return !excludeKeywords.some(kw => lowerPath.includes(kw) || lowerTitle.includes(kw));
  });

  if (substantiveMatch) return resolveArchiveUrl(substantiveMatch.path);

  // PRIORITY 5: First valid part
  return resolveArchiveUrl(validParts[0].path);
}