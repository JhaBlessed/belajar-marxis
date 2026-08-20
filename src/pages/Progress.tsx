import { Link } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { works } from '../data/works';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';

export function Progress() {
  const { progress } = useProgress();

  const completedWorks = Object.keys(progress.works).filter(k => progress.works[k] === 'Selesai');
  const readingWorks = Object.keys(progress.works).filter(k => progress.works[k] === 'Sedang Dibaca');
  
  const totalWorksCount = works.length;
  const percentage = totalWorksCount === 0 ? 0 : Math.round((completedWorks.length / totalWorksCount) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Progres Belajar</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Lacak perjalanan Anda dalam membaca karya-karya ensiklopedia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
            <CheckCircle className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Karya Selesai</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{completedWorks.length}</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
            <Clock className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sedang Dibaca</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{readingWorks.length}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full">
            <BookOpen className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Progres</p>
            <div className="flex items-center justify-between mt-1">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-red-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2 dark:border-gray-700">Sedang Dibaca</h2>
          {readingWorks.length > 0 ? (
            <div className="space-y-4">
              {readingWorks.map(id => {
                const w = works.find(x => x.id === id);
                if (!w) return null;
                return (
                  <Link key={id} to={`/karya/${w.slug}`} className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
                    <h3 className="font-bold text-gray-900 dark:text-white">{w.title}</h3>
                    <p className="text-sm text-gray-500">{w.year}</p>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 italic">Belum ada karya yang sedang dibaca.</p>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2 dark:border-gray-700">Selesai Dibaca</h2>
          {completedWorks.length > 0 ? (
            <div className="space-y-4">
              {completedWorks.map(id => {
                const w = works.find(x => x.id === id);
                if (!w) return null;
                return (
                  <Link key={id} to={`/karya/${w.slug}`} className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors">
                    <h3 className="font-bold text-gray-900 dark:text-white">{w.title}</h3>
                    <p className="text-sm text-gray-500">{w.year}</p>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 italic">Belum ada karya yang selesai dibaca.</p>
          )}
        </section>
      </div>
    </div>
  );
}
