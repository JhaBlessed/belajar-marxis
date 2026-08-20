import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { search, type SearchResult } from '../../lib/search';

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setResults(search(query));
  }, [query]);

  if (!isOpen) return null;

  const handleResultClick = (result: SearchResult) => {
    onClose();
    navigate(result.url);
  };

  const groupedResults = results.reduce((acc, result) => {
    let groupName = 'Lain-lain';
    if (result.type === 'author') groupName = 'Tokoh';
    else if (result.type === 'concept') groupName = 'Konsep';
    else if (result.type === 'organization') groupName = 'Organisasi';
    else if (result.type === 'timeline') groupName = 'Peristiwa Sejarah';
    else if (result.type === 'historicalPerson') groupName = 'Tokoh Sejarah';
    else if (result.type === 'work') {
      const match = result.description.match(/Oleh (.*?) •/);
      groupName = match ? `Karya ${match[1]}` : 'Karya';
    }
    if (!acc[groupName]) acc[groupName] = [];
    acc[groupName].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24">
      <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden mx-4">
        <div className="flex items-center px-4 py-3 border-b border-gray-100 dark:border-gray-700">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 px-4 py-2 bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400"
            placeholder="Cari tokoh, karya, atau konsep..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        {query && (
          <div className="max-h-[60vh] overflow-y-auto p-4">
            {results.length > 0 ? (
              <div className="space-y-6">
                {Object.entries(groupedResults).map(([group, items]) => (
                  <div key={group} className="space-y-2">
                    <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700 pb-1 mb-2">
                      {group} <span className="font-normal text-xs ml-1 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">{items.length}</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {items.map((result) => (
                        <button
                          key={`${result.type}-${result.id}`}
                          onClick={() => handleResultClick(result)}
                          className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 flex flex-col border border-transparent hover:border-red-100 dark:hover:border-red-900/30 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">{result.title}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">{result.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                Tidak ditemukan hasil untuk "{query}"
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
