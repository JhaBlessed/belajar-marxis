import { useParams, Link } from 'react-router-dom';
import { historicalPersons } from '../data/historicalPersons';
import { indonesiaTimeline } from '../generated/indonesiaTimeline';
import { SEO } from '../components/ui/SEO';

export function HistoricalPersonDetail() {
  const { slug } = useParams();
  const person = historicalPersons.find(p => p.slug === slug);

  if (!person) return <div>Not found</div>;

  const events = indonesiaTimeline.filter(e => e.relatedHistoricalPersonIds?.includes(person.id));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title={person.name} />
      <Link to="/tokoh-sejarah" className="text-purple-600 hover:underline mb-8 inline-block">← Kembali ke Tokoh Sejarah</Link>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{person.name}</h1>
      <h2 className="text-2xl font-bold mt-12 mb-6">Jejak Sejarah</h2>
      <div className="space-y-6">
        {events.map(e => (
          <div key={e.id} className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-2">{e.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
