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