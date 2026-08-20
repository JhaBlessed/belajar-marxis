import { Link } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { works } from '../data/works';
import { authors } from '../data/authors';
import { concepts } from '../data/concepts';
import { Bookmark } from 'lucide-react';

export function Saved() {
  const { progress } = useProgress();

  const savedWorks = works.filter(w => progress.bookmarkedWorks.includes(w.id));
  const savedAuthors = authors.filter(a => progress.bookmarkedAuthors.includes(a.id));
  const savedConcepts = concepts.filter(c => progress.bookmarkedConcepts.includes(c.id));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 flex items-center gap-4">
        <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full">
          <Bookmark className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Tersimpan</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Koleksi karya, tokoh, dan konsep yang Anda simpan.</p>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2 dark:border-gray-700">Karya Tersimpan ({savedWorks.length})</h2>
          {savedWorks.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {savedWorks.map(w => (
                <Link key={w.id} to={`/karya/${w.slug}`} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-500 transition-colors">
                  <h3 className="font-bold text-gray-900 dark:text-white">{w.title}</h3>
                  <p className="text-sm text-gray-500">{w.year}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 italic">Belum ada karya yang disimpan.</p>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2 dark:border-gray-700">Tokoh Tersimpan ({savedAuthors.length})</h2>
          {savedAuthors.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-4">
              {savedAuthors.map(a => (
                <Link key={a.id} to={`/tokoh/${a.slug}`} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-500 transition-colors flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    {a.image ? <img src={a.image} alt={a.name} className="w-full h-full object-cover grayscale" /> : <div className="w-full h-full flex items-center justify-center font-bold text-gray-400">{a.name.charAt(0)}</div>}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{a.name}</h3>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 italic">Belum ada tokoh yang disimpan.</p>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2 dark:border-gray-700">Konsep Tersimpan ({savedConcepts.length})</h2>
          {savedConcepts.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {savedConcepts.map(c => (
                <Link key={c.id} to={`/konsep/${c.slug}`} className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-500 text-gray-900 dark:text-white transition-colors">
                  {c.name}
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 italic">Belum ada konsep yang disimpan.</p>
          )}
        </section>
      </div>
    </div>
  );
}
