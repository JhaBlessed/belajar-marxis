import { Link } from 'react-router-dom';
import { Book, Users, Calendar, Flag } from 'lucide-react';
import { works } from '../data/works';
import { getCanonicalWorks } from '../lib/canonicalWorks';
import { authors } from '../data/authors';
import { organizations } from '../data/organizations';
import { indonesiaTimeline } from '../generated/indonesiaTimeline';
import { SEO } from '../components/ui/SEO';
import { historicalPersons } from '../data/historicalPersons';


export function Indonesia() {
  const indonesiaAuthors = authors.filter(a => a.nationality.includes('Indonesia'));
  const indonesiaWorks = getCanonicalWorks().filter(w => indonesiaAuthors.some(a => a.id === w.authorId || w.authorIds?.includes(a.id)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title="Marxisme dan Indonesia" description="Jelajahi sejarah, tokoh, organisasi, dan karya Marxis di Indonesia." />
      
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Marxisme dan Indonesia</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Eksplorasi hubungan historis dan perkembangan pemikiran Marxis di Indonesia. 
          Dari masa Hindia Belanda, pergerakan kemerdekaan, hingga Revolusi Nasional.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-purple-600" /> Tokoh Sejarah
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {historicalPersons.slice(0, 6).map(hp => (
                <Link key={hp.id} to={`/tokoh-sejarah/${hp.slug}`} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 dark:text-white truncate">{hp.name}</h3>
                    <p className="text-sm text-gray-500 truncate">{hp.relatedEventIds.length} Peristiwa Terkait</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link to="/tokoh-sejarah" className="text-purple-600 hover:underline text-sm font-medium mt-4 inline-block">Lihat Semua Tokoh Sejarah →</Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Flag className="w-6 h-6 text-blue-600" /> Organisasi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {organizations.slice(0, 6).map(org => (
                <Link key={org.id} to={`/organisasi/${org.slug}`} className="flex flex-col p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{org.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{org.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Konteks Sejarah</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Perkembangan Marxisme di Indonesia terbagi dalam beberapa fase historis utama:</p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-4 font-medium text-gray-700 dark:text-gray-300">
                <li>1. Hindia Belanda</li>
                <li>2. Gerakan Buruh</li>
                <li>3. Sarekat Islam</li>
                <li>4. ISDV</li>
                <li>5. PKI</li>
                <li>6. Komintern</li>
                <li>7. Tan Malaka</li>
                <li>8. Pergerakan Nasional</li>
                <li>9. Pendudukan Jepang</li>
                <li>10. Revolusi Indonesia 1945-1949</li>
              </ol>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-red-600" /> Timeline Marxisme Indonesia
            </h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-gray-700 before:to-transparent">
              {indonesiaTimeline.map((event) => (
                <div key={event.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                    <Flag className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-red-600 dark:text-red-400">{event.year}</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{event.type}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{event.description}</p>
                    {((event.relatedAuthorIds && event.relatedAuthorIds.length > 0) || 
                      (event.relatedWorkIds && event.relatedWorkIds.length > 0) || 
                      (event.relatedOrganizationIds && event.relatedOrganizationIds.length > 0)) && (
                      <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                        {event.relatedAuthorIds?.map((id: string) => (
                          <Link key={id} to={`/tokoh/${id}`} className="text-xs inline-flex items-center gap-1 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-2 py-1 rounded-md hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors">
                            👤 {authors.find(a => a.id === id)?.name || id}
                          </Link>
                        ))}
                        {event.relatedOrganizationIds?.map((id: string) => (
                          <Link key={id} to={`/organisasi/${id}`} className="text-xs inline-flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                            🏢 {organizations.find(o => o.id === id)?.name || id}
                          </Link>
                        ))}
                        {event.relatedWorkIds?.map((id: string) => (
                          <Link key={id} to={`/karya/${id}`} className="text-xs inline-flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-md hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors">
                            📚 {works.find(w => w.id === id)?.title || id}
                          </Link>
                        ))}
                      </div>
                    )}

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-red-600" /> Organisasi
            </h2>
            <div className="space-y-4">
              {organizations.map(org => (
                <Link key={org.id} to={`/organisasi/${org.slug}`} className="block p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors border border-gray-100 dark:border-gray-700">
                  <h3 className="font-bold text-gray-900 dark:text-white">{org.abbreviation ? `${org.name} (${org.abbreviation})` : org.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{org.foundedYear} {org.dissolvedYear ? `- ${org.dissolvedYear}` : ' - sekarang'}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Book className="w-5 h-5 text-red-600" /> Karya Terkait
            </h2>
            <div className="space-y-3">
              {indonesiaWorks.slice(0, 5).map(work => (
                <Link key={work.id} to={`/karya/${work.slug}`} className="block group">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400 line-clamp-1">{work.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{work.year || 'Tahun tidak diketahui'}</p>
                </Link>
              ))}
              {indonesiaWorks.length > 5 && (
                <Link to="/karya" className="block text-sm font-medium text-red-600 dark:text-red-400 hover:underline mt-2">
                  Lihat semua karya Indonesia &rarr;
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
