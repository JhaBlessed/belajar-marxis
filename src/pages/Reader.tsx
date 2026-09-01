import { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Settings, ChevronLeft, ChevronRight, Menu, ExternalLink, Bookmark, BookmarkCheck, Search as X, Info } from 'lucide-react';
import { works } from '../data/works';
import { authors } from '../data/authors';
import { useReaderSettings } from '../hooks/useReaderSettings';
import { marked } from 'marked';
import { SEO } from '../components/ui/SEO';

// Load markdown and metadata
const mdModules = import.meta.glob('../content/works/**/*.md', { query: '?raw', import: 'default' });
const metaModules = import.meta.glob('../content/works/**/metadata.ts', { import: 'metadata', eager: true });

import { resolveWorkSlug } from '../lib/canonicalWorks';

export function Reader() {
  const { workSlug, chapterSlug } = useParams();

  if (workSlug) {
    const canonicalSlug = resolveWorkSlug(workSlug);
    if (canonicalSlug !== workSlug) {
      const target = chapterSlug ? `/baca/${canonicalSlug}/${chapterSlug}` : `/baca/${canonicalSlug}`;
      return <Navigate to={target} replace />;
    }
  }

  const { fontSize, width, theme, lineHeight, setFontSize, setWidth, setTheme, setLineHeight } = useReaderSettings();

  const [showSettings, setShowSettings] = useState(false);
  const [showMobileToC, setShowMobileToC] = useState(false);
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const work = useMemo(() => works.find(w => w.slug === workSlug), [workSlug]);
  const author = useMemo(() => authors.find(a => a.id === work?.authorId), [work]);

  // Extract chapters from metadata

  const chapters = useMemo(() => {
    if (!work) return [];

    if (work.format === 'multi-pdf' && work.parts) {
      return work.parts.map((p, idx) => ({
        slug: `bagian-${p.number}`,
        order: idx,
        title: p.title,
        isPdf: true,
        localPath: p.localPath
      }));
    }

    const metaPathKey = Object.keys(metaModules).find(path => path.endsWith(`/${work.slug}/metadata.ts`));
    const meta = metaPathKey ? metaModules[metaPathKey] as any : null;

    if (meta && meta.chapters) {
      return meta.chapters.map((slug: string, idx: number) => ({
        slug,
        order: idx,
        title: slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
        isPdf: false
      }));
    }
    return [];
  }, [work]);


  // Determine current chapter
  const currentChapterIndex = useMemo(() => {
    if (!chapterSlug && chapters.length > 0) return 0;
    return chapters.findIndex((c: any) => c.slug === chapterSlug) || 0;
  }, [chapterSlug, chapters]);

  const currentChapter = chapters[currentChapterIndex];
  const prevChapter = chapters[currentChapterIndex - 1];
  const nextChapter = chapters[currentChapterIndex + 1];

  // Load content

  useEffect(() => {
    if (!work || !currentChapter) return;

    if (currentChapter.isPdf) {
      setIsLoading(false);
      setContent('');
      return;
    }

    setIsLoading(true);
    const fileName = `${String(currentChapterIndex).padStart(2, '0')}-${currentChapter.slug}.md`;
    const mdPathKey = Object.keys(mdModules).find(path => path.endsWith(`/${work.slug}/chapters/${fileName}`));


    const loadContent = async () => {
      try {
        const module = mdPathKey ? mdModules[mdPathKey] : null;
        if (module) {
          const rawMd = await module() as string;
          // strip frontmatter
          const contentMd = rawMd.replace(/---[\s\S]*?---/, '').trim();
          setContent(marked.parse(contentMd) as string);
        } else {
          setContent('<p>Konten tidak ditemukan untuk bab ini.</p>');
        }
      } catch (err) {
        setContent('<p>Gagal memuat konten.</p>');
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
    setShowMobileToC(false); // hide on chapter change
    window.scrollTo(0, 0);
  }, [work, currentChapterIndex, currentChapter]);

  // Bookmarks logic (simplified for Reader)
  useEffect(() => {
    if (!work) return;
    const bm = JSON.parse(localStorage.getItem('reader_bookmarks') || '[]');
    setBookmarked(bm.includes(work.id));
  }, [work]);

  const toggleBookmark = () => {
    if (!work) return;
    let bm = JSON.parse(localStorage.getItem('reader_bookmarks') || '[]');
    if (bm.includes(work.id)) {
      bm = bm.filter((id: string) => id !== work.id);
      setBookmarked(false);
    } else {
      bm.push(work.id);
      setBookmarked(true);
    }
    localStorage.setItem('reader_bookmarks', JSON.stringify(bm));
  };

  // Progress tracking
  useEffect(() => {
    if (!work || !currentChapter || isLoading) return;
    const key = `reader_progress_${work.id}`;

    const saveProgress = () => {
      const scrollPos = window.scrollY;
      localStorage.setItem(key, JSON.stringify({
        chapterSlug: currentChapter.slug,
        scrollPos,
        timestamp: Date.now()
      }));
    };

    window.addEventListener('scroll', saveProgress);
    return () => window.removeEventListener('scroll', saveProgress);
  }, [work, currentChapter, isLoading]);

  if (!work || !work.fullTextEnabled || chapters.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-lg">
          <Info className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Teks primer belum tersedia di Belajar Marxis.</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Teks asli untuk karya ini belum diimport ke dalam sistem atau tidak memiliki bab yang valid.</p>
          <div className="flex gap-4 justify-center">
            <Link to={`/karya/${work?.slug || ''}`} className="px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200">
              Kembali
            </Link>
            {work?.miaUrl && (
              <a href={work.miaUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700">
                Baca di MIA
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  const bgTheme = theme === 'dark' ? 'bg-gray-900 text-gray-200' : theme === 'sepia' ? 'bg-[#f4ecd8] text-amber-900' : 'bg-white text-gray-900';
  const sidebarBg = theme === 'dark' ? 'bg-gray-800 border-gray-700' : theme === 'sepia' ? 'bg-[#e8dec5] border-[#d4c8ab]' : 'bg-gray-50 border-gray-200';
  const widthClass = width === 'narrow' ? 'max-w-2xl' : width === 'wide' ? 'max-w-5xl' : 'max-w-3xl';
  const fontClass = fontSize === 'sm' ? 'text-sm md:text-base' : fontSize === 'lg' ? 'text-lg md:text-xl' : 'text-base md:text-lg';
  const lineClass = lineHeight === 'normal' ? 'leading-normal' : lineHeight === 'loose' ? 'leading-loose' : 'leading-relaxed';

  return (
    <div className={`min-h-screen flex flex-col ${bgTheme}`}>
      <SEO title={`${currentChapter?.title || work.title} | ${author?.name}`} />

      {/* HEADER NAVBAR (Hidden on print) */}
      <nav className={`sticky top-0 z-40 border-b print:hidden ${sidebarBg} shadow-sm backdrop-blur-sm bg-opacity-90`}>
        <div className="max-w-[1400px] mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <Link to={`/karya/${work.slug}`} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="hidden sm:block">
              <div className="text-xs font-bold text-red-600 dark:text-red-500 uppercase tracking-wider">{author?.name}</div>
              <div className="text-sm font-bold truncate max-w-[200px] md:max-w-[300px]">{work.title}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggleBookmark} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors" title="Bookmark">
              {bookmarked ? <BookmarkCheck className="w-5 h-5 text-red-600" /> : <Bookmark className="w-5 h-5" />}
            </button>
            <button onClick={() => setShowSettings(!showSettings)} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors" title="Pengaturan Teks">
              <Settings className="w-5 h-5" />
            </button>
            <button onClick={() => setShowMobileToC(true)} className="lg:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors" title="Daftar Isi">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* SETTINGS PANEL */}
      {showSettings && (
        <div className={`fixed top-14 right-4 sm:right-8 z-50 p-4 rounded-xl shadow-xl border ${sidebarBg} w-72 print:hidden`}>
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
            <h3 className="font-bold">Pengaturan Membaca</h3>
            <button onClick={() => setShowSettings(false)}><X className="w-4 h-4" /></button>
          </div>
          <div className="space-y-4 text-sm">
            <div>
              <span className="block mb-1 font-medium opacity-70">Ukuran Teks</span>
              <div className="flex bg-black/5 dark:bg-white/5 rounded-lg p-1">
                <button onClick={() => setFontSize('sm')} className={`flex-1 py-1 rounded ${fontSize==='sm' ? 'bg-white dark:bg-gray-700 shadow' : ''}`}>A-</button>
                <button onClick={() => setFontSize('base')} className={`flex-1 py-1 rounded ${fontSize==='base' ? 'bg-white dark:bg-gray-700 shadow' : ''}`}>A</button>
                <button onClick={() => setFontSize('lg')} className={`flex-1 py-1 rounded ${fontSize==='lg' ? 'bg-white dark:bg-gray-700 shadow' : ''}`}>A+</button>
              </div>
            </div>
            <div>
              <span className="block mb-1 font-medium opacity-70">Tema Warna</span>
              <div className="flex bg-black/5 dark:bg-white/5 rounded-lg p-1">
                <button onClick={() => setTheme('light')} className={`flex-1 py-1 rounded ${theme==='light' ? 'bg-white shadow text-black' : ''}`}>Terang</button>
                <button onClick={() => setTheme('sepia')} className={`flex-1 py-1 rounded ${theme==='sepia' ? 'bg-[#f4ecd8] shadow text-amber-900' : ''}`}>Sepia</button>
                <button onClick={() => setTheme('dark')} className={`flex-1 py-1 rounded ${theme==='dark' ? 'bg-gray-800 shadow text-white' : ''}`}>Gelap</button>
              </div>
            </div>
            <div>
              <span className="block mb-1 font-medium opacity-70">Spasi Baris</span>
              <div className="flex bg-black/5 dark:bg-white/5 rounded-lg p-1">
                <button onClick={() => setLineHeight('normal')} className={`flex-1 py-1 rounded ${lineHeight==='normal' ? 'bg-white dark:bg-gray-700 shadow' : ''}`}>Normal</button>
                <button onClick={() => setLineHeight('comfortable')} className={`flex-1 py-1 rounded ${lineHeight==='comfortable' ? 'bg-white dark:bg-gray-700 shadow' : ''}`}>Nyaman</button>
                <button onClick={() => setLineHeight('loose')} className={`flex-1 py-1 rounded ${lineHeight==='loose' ? 'bg-white dark:bg-gray-700 shadow' : ''}`}>Luas</button>
              </div>
            </div>
            <div className="hidden lg:block">
              <span className="block mb-1 font-medium opacity-70">Lebar Teks</span>
              <div className="flex bg-black/5 dark:bg-white/5 rounded-lg p-1">
                <button onClick={() => setWidth('narrow')} className={`flex-1 py-1 rounded ${width==='narrow' ? 'bg-white dark:bg-gray-700 shadow' : ''}`}>Sempit</button>
                <button onClick={() => setWidth('normal')} className={`flex-1 py-1 rounded ${width==='normal' ? 'bg-white dark:bg-gray-700 shadow' : ''}`}>Normal</button>
                <button onClick={() => setWidth('wide')} className={`flex-1 py-1 rounded ${width==='wide' ? 'bg-white dark:bg-gray-700 shadow' : ''}`}>Lebar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE TOC DRAWER */}
      {showMobileToC && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowMobileToC(false)} />
          <div className={`relative w-80 max-w-full h-full shadow-2xl ${sidebarBg} overflow-y-auto flex flex-col`}>
            <div className="p-4 border-b border-black/10 dark:border-white/10 flex justify-between items-center">
              <h2 className="font-bold">Daftar Isi</h2>
              <button onClick={() => setShowMobileToC(false)}><X className="w-5 h-5" /></button>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              <div className="space-y-1">
                {chapters.map((ch: any) => (
                  <Link
                    key={ch.slug}
                    to={`/baca/${work.slug}/${ch.slug}`}
                    className={`block px-3 py-2 rounded-md text-sm transition-colors ${ch.slug === chapterSlug ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-bold border-l-2 border-red-600' : 'opacity-80 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5'}`}
                  >
                    {ch.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MAIN READER LAYOUT */}
      <div className="flex-1 max-w-[1400px] mx-auto w-full flex relative">

        {/* LEFT SIDEBAR (Desktop ToC) */}
        <aside className={`hidden lg:block w-64 shrink-0 border-r print:hidden overflow-y-auto sticky top-14 h-[calc(100vh-3.5rem)] ${sidebarBg}`}>
          <div className="p-6">
            <h2 className="font-bold uppercase tracking-wider text-sm opacity-60 mb-4">Daftar Isi</h2>
            <div className="space-y-1">
              {chapters.map((ch: any) => (
                <Link
                  key={ch.slug}
                  to={`/baca/${work.slug}/${ch.slug}`}
                  className={`block px-3 py-2 rounded-md text-sm transition-colors ${ch.slug === chapterSlug ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-bold border-l-2 border-red-600' : 'opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5'}`}
                >
                  {ch.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 px-4 sm:px-8 py-10 w-full overflow-x-hidden relative">
          <div className={`mx-auto ${widthClass} transition-all duration-300`}>

            {/* PRINT HEADER */}
            <div className="hidden print:block mb-8 border-b pb-4 border-gray-300">
              <h1 className="text-3xl font-bold mb-2">{work.title}</h1>
              <div className="text-lg">Oleh {author?.name} ({work.year})</div>
            </div>

            {isLoading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-black/10 dark:bg-white/10 rounded w-3/4 mb-8"></div>
                <div className="h-4 bg-black/10 dark:bg-white/10 rounded w-full"></div>
                <div className="h-4 bg-black/10 dark:bg-white/10 rounded w-full"></div>
                <div className="h-4 bg-black/10 dark:bg-white/10 rounded w-5/6"></div>
              </div>
            ) : currentChapter.isPdf ? (
              <div className="flex flex-col gap-6">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl font-bold">{currentChapter.title}</h2>
                      <p className="opacity-70 mt-1">Format: PDF (Lokal)</p>
                    </div>
                    <div className="flex gap-2">
                      <a href={currentChapter.localPath} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold flex items-center gap-2 transition-colors">
                        <ExternalLink className="w-4 h-4"/> Buka PDF Penuh
                      </a>
                      <a href={currentChapter.localPath} download className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg font-bold transition-colors">
                        Download
                      </a>
                    </div>
                  </div>
                  <div className="w-full h-[70vh] bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                    <object data={currentChapter.localPath} type="application/pdf" width="100%" height="100%">
                      <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                        <p className="mb-4">Browser Anda tidak mendukung preview PDF langsung.</p>
                        <a href={currentChapter.localPath} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-red-600 text-white rounded-lg font-bold">Buka PDF</a>
                      </div>
                    </object>
                  </div>
                </div>
              </div>
            ) : (
              <div
                ref={contentRef}
                className={`prose dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-red-600 prose-blockquote:border-l-red-600 prose-hr:border-gray-300 dark:prose-hr:border-gray-700 ${fontClass} ${lineClass}`}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}

            {/* ATTRIBUTION AT BOTTOM */}
            <div className="mt-16 pt-8 border-t border-black/10 dark:border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-wider opacity-60 mb-4">SUMBER TEKS</h3>
              <div className="bg-black/5 dark:bg-white/5 rounded-xl p-4 text-sm opacity-80 space-y-1">
                <p><strong>Sumber digital:</strong> <a href={work.miaUrl || '#'} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Marxists Internet Archive (Seksi Bahasa Indonesia)</a></p>
                <p><strong>Judul:</strong> {work.title}</p>
                <p><strong>Penulis:</strong> {author?.name}</p>
                <p><strong>Tahun:</strong> {work.year}</p>
                {work.sourceEdition && <p><strong>Sumber edisi:</strong> {work.sourceEdition}</p>}
                {work.translator && <p><strong>Penerjemah:</strong> {work.translator}</p>}
                <p><strong>Status hak:</strong> {work.rightsStatus.toUpperCase()}</p>
              </div>
            </div>

            {/* NAVIGATION FOOTER */}
            <div className="mt-12 flex items-center justify-between gap-4 print:hidden">
              {prevChapter ? (
                <Link to={`/baca/${work.slug}/${prevChapter.slug}`} className="flex items-center gap-2 px-4 py-2 border border-black/10 dark:border-white/10 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Sebelumnya</span>
                </Link>
              ) : <div></div>}

              <span className="text-sm font-medium opacity-60">Bab {currentChapterIndex + 1} dari {chapters.length}</span>

              {nextChapter ? (
                <Link to={`/baca/${work.slug}/${nextChapter.slug}`} className="flex items-center gap-2 px-4 py-2 border border-black/10 dark:border-white/10 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <span className="hidden sm:inline">Berikutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : <div></div>}
            </div>

          </div>
        </main>

        {/* RIGHT SIDEBAR (Desktop Info) */}
        <aside className={`hidden xl:block w-72 shrink-0 border-l print:hidden overflow-y-auto sticky top-14 h-[calc(100vh-3.5rem)] ${sidebarBg}`}>
          <div className="p-6">
            <h2 className="font-bold uppercase tracking-wider text-sm opacity-60 mb-6">Informasi Karya</h2>

            <div className="space-y-6 text-sm">
              <div>
                <span className="block opacity-60 mb-1">Penulis</span>
                <span className="font-bold">{author?.name}</span>
              </div>
              <div>
                <span className="block opacity-60 mb-1">Tahun Publikasi</span>
                <span className="font-bold">{work.year || 'Tidak diketahui'}</span>
              </div>
              <div>
                <span className="block opacity-60 mb-1">Status Lisensi</span>
                <span className="inline-block px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 font-bold rounded text-xs uppercase">
                  {work.rightsStatus}
                </span>
              </div>
              {work.translator && (
                <div>
                  <span className="block opacity-60 mb-1">Penerjemah</span>
                  <span className="font-medium">{work.translator}</span>
                </div>
              )}
              {work.miaUrl && (
                <div className="pt-4 border-t border-black/10 dark:border-white/10">
                  <a href={work.miaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium">
                    Lihat Sumber MIA <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
