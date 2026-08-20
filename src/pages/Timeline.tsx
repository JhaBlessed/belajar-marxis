import { useState } from 'react';
import { timelineEvents as globalTimeline } from '../data/timeline';
import { indonesiaTimeline } from '../generated/indonesiaTimeline';
import { SEO } from '../components/ui/SEO';

const allEvents = [...globalTimeline, ...indonesiaTimeline].sort((a, b) => (a.year || 0) - (b.year || 0));

const REGIONS = [
  { id: 'all', label: 'Global (Semua)' },
  { id: 'indonesia', label: 'Indonesia' },
  { id: 'eropa', label: 'Eropa' },
  { id: 'rusia', label: 'Rusia' },
  { id: 'tiongkok', label: 'Tiongkok' },
  { id: 'amerika-latin', label: 'Amerika Latin' }
];

const TYPES = [
  { id: 'all', label: 'Semua Jenis' },
  { id: 'publication', label: 'Karya' },
  { id: 'person', label: 'Tokoh' },
  { id: 'organization', label: 'Organisasi' },
  { id: 'party', label: 'Partai' },
  { id: 'movement', label: 'Gerakan' },
  { id: 'revolution', label: 'Revolusi' },
];

export function Timeline() {
  const [region, setRegion] = useState('all');
  const [type, setType] = useState('all');

  const filteredEvents = allEvents.filter(e => {
    let matchRegion = true;
    if (region !== 'all') {
      if (region === 'indonesia') matchRegion = ((e.country || "") || "").toLowerCase() === 'indonesia';
      else if (region === 'eropa') matchRegion = ['jerman', 'inggris', 'prancis', 'eropa'].includes(((e.country || "") || "").toLowerCase());
      else if (region === 'rusia') matchRegion = ['rusia', 'uni soviet'].includes(((e.country || "") || "").toLowerCase());
      else if (region === 'tiongkok') matchRegion = ((e.country || "") || "").toLowerCase() === 'tiongkok';
      else if (region === 'amerika-latin') matchRegion = ['kuba', 'chile', 'bolivia', 'amerika latin'].includes(((e.country || "") || "").toLowerCase());
      else matchRegion = ((e.country || "") || "").toLowerCase() === region;
    }
    
    const matchType = type === 'all' || e.type === type;
    return matchRegion && matchType;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title="Timeline Sejarah" description="Linimasa peristiwa historis dan publikasi karya penting dalam sejarah Marxisme." />
      
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Timeline Sejarah</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Jejak sejarah penulisan karya dan peristiwa penting yang membentuk gerakan kelas pekerja dan pemikiran Marxis di seluruh dunia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
          <select 
            value={region} 
            onChange={(e) => setRegion(e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500"
          >
            {REGIONS.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
          </select>
          
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500"
          >
            {TYPES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
        </div>
      </div>

      <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 md:ml-6 space-y-10">
        {filteredEvents.map((event) => (
          <div key={event.id} className="relative pl-8 md:pl-12">
            <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 
              ${event.type === 'publication' ? 'bg-blue-500' : 
                event.type === 'revolution' ? 'bg-red-600' :
                event.type === 'organization' || event.type === 'party' ? 'bg-green-500' :
                'bg-purple-500'}`}>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                <span className="text-sm font-bold text-red-600 dark:text-red-400">{event.date || event.year}</span>
                <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full uppercase tracking-wider">{event.type}</span>
                {event.country && <span className="text-xs font-medium px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">{event.country}</span>}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                {event.description}
              </p>
            </div>
          </div>
        ))}
        
        {filteredEvents.length === 0 && (
          <div className="pl-8 md:pl-12 text-center py-12 text-gray-500 dark:text-gray-400">
            Tidak ada peristiwa yang sesuai dengan filter.
          </div>
        )}
      </div>
    </div>
  );
}
