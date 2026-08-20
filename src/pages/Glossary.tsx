import { useState } from 'react';
import { Link } from 'react-router-dom';
import { concepts } from '../data/concepts';

export function Glossary() {
  const [activeLetter, setActiveLetter] = useState('A');
  
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  const groupedConcepts = concepts.reduce((acc, concept) => {
    const letter = concept.name.charAt(0).toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(concept);
    return acc;
  }, {} as Record<string, typeof concepts>);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Glosarium Marxis</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Indeks alfabetis istilah-istilah dalam teori Marxis.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-12">
        {alphabet.map(letter => (
          <button
            key={letter}
            onClick={() => setActiveLetter(letter)}
            disabled={!groupedConcepts[letter]}
            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-colors ${
              activeLetter === letter 
                ? 'bg-red-600 text-white' 
                : groupedConcepts[letter] 
                  ? 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700' 
                  : 'bg-gray-50 dark:bg-gray-900 text-gray-300 dark:text-gray-600 cursor-not-allowed border border-gray-100 dark:border-gray-800'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-red-600 dark:text-red-500 border-b border-gray-200 dark:border-gray-700 pb-2">
          {activeLetter}
        </h2>
        
        {groupedConcepts[activeLetter] ? (
          <div className="grid md:grid-cols-2 gap-4">
            {groupedConcepts[activeLetter].sort((a,b) => a.name.localeCompare(b.name)).map(concept => (
              <Link key={concept.id} to={`/konsep/${concept.slug}`} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-500 transition-colors block group">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-red-600 transition-colors mb-1">{concept.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{concept.shortDefinition}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 italic py-8">Tidak ada istilah yang diawali dengan huruf {activeLetter}.</p>
        )}
      </div>
    </div>
  );
}
