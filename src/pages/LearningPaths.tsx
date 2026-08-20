import { Link } from 'react-router-dom';
import { Compass, Shield, Zap } from 'lucide-react';
import { learningPaths } from '../data/learningPaths';
import { works } from '../data/works';
import { useProgress } from '../hooks/useProgress';

export function LearningPaths() {
  const { progress } = useProgress();

  const getPathProgress = (pathId: string) => {
    const path = learningPaths.find(p => p.id === pathId);
    if (!path) return 0;
    
    let totalWorks = 0;
    let completedWorks = 0;
    
    path.weeks.forEach(week => {
      week.workIds.forEach(id => {
        totalWorks++;
        if (progress.works[id] === 'Selesai') {
          completedWorks++;
        }
      });
    });
    
    return totalWorks === 0 ? 0 : Math.round((completedWorks / totalWorks) * 100);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Jalur Belajar</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Peta kurikulum yang dirancang terstruktur untuk memandu Anda memahami karya-karya Marxis dari tingkat pemula hingga mahir.
        </p>
      </div>

      <div className="space-y-20">
        {learningPaths.map((path, index) => (
          <div key={path.id} id={path.slug} className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8 border-b pb-4 dark:border-gray-700">
              <div className={`p-3 rounded-lg text-white ${index === 0 ? 'bg-green-500' : index === 1 ? 'bg-yellow-500' : 'bg-red-600'}`}>
                {index === 0 ? <Compass className="w-8 h-8" /> : index === 1 ? <Shield className="w-8 h-8" /> : <Zap className="w-8 h-8" />}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{path.title}</h2>
                <p className="text-gray-500 dark:text-gray-400 font-medium">Tingkat {path.level} • {path.durationWeeks} Minggu</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm sticky top-24">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{path.description}</p>
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2 text-gray-900 dark:text-white">
                      <span>Progres Anda</span>
                      <span>{getPathProgress(path.id)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${index === 0 ? 'bg-green-500' : index === 1 ? 'bg-yellow-500' : 'bg-red-600'}`} 
                        style={{ width: `${getPathProgress(path.id)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 space-y-6">
                {path.weeks.map(week => (
                  <div key={week.weekNumber} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Minggu {week.weekNumber}: {week.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{week.description}</p>
                    
                    <div className="space-y-3">
                      {week.workIds.map(wId => {
                        const work = works.find(w => w.id === wId);
                        if (!work) return null;
                        const isCompleted = progress.works[wId] === 'Selesai';
                        
                        return (
                          <Link key={wId} to={`/karya/${work.slug}`} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-400 group transition-all">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors">{work.title}</h4>
                              <p className="text-sm text-gray-500">{work.readingTime} menit baca</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {isCompleted && <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded dark:bg-green-900/30 dark:text-green-400">Selesai</span>}
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
