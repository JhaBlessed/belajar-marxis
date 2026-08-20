import * as fs from 'fs';

let detailCode = fs.readFileSync('src/pages/WorkDetail.tsx', 'utf8');

detailCode = detailCode.replace(/import { works } from '\.\.\/data\/works';/, `import { works } from '../data/works';
import { resolveMiaSource } from '../lib/sourceResolver';`);

// Find the start of the return statement where we can inject source resolution
detailCode = detailCode.replace(/const availability = getReadingAvailability\(work\);/, `const availability = getReadingAvailability(work);
  const source = resolveMiaSource(work.miaUrl);`);

// For the buttons, I will replace all instances of:
// {work.miaUrl && ( <a href={work.miaUrl} ...> BACA DI MIA ... </a> )}
// with a generic component or inline block.

const buttonReplacer = `{source.type === 'local' && (
                  <a 
                    href={source.url!} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    BACA ARSIP LOKAL <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {source.type === 'external' && (
                  <a 
                    href={source.url!} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    LIHAT SUMBER MIA <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {source.type === 'missing' && (
                  <button disabled className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 font-bold py-3 px-6 rounded-lg cursor-not-allowed">
                    SUMBER BELUM TERSEDIA
                  </button>
                )}`;

// We have 4 blocks of {work.miaUrl && ...} in the action buttons area.
const regexBlock = /\{work\.miaUrl && \([\s\S]*?BACA DI MIA <ExternalLink className="w-[45] h-[45]" \/>\s*<\/a>\s*\)\}/g;
detailCode = detailCode.replace(regexBlock, buttonReplacer);

fs.writeFileSync('src/pages/WorkDetail.tsx', detailCode);

let libCode = fs.readFileSync('src/pages/Library.tsx', 'utf8');
// Do the same for Library.tsx if there are MIA links, or just add the badge.
libCode = libCode.replace(/import { works } from '\.\.\/data\/works';/, `import { works } from '../data/works';
import { resolveMiaSource } from '../lib/sourceResolver';`);

// In Library, we need to add "ARSIP LOKAL" badge.
// Find: {availability === 'not-imported' && <span ...>Belum Diimpor</span>}
libCode = libCode.replace(/\{availability === 'not-imported' && <span className="bg-gray-100[\s\S]*?Belum Diimpor<\/span>\}/, 
`$&
                      {resolveMiaSource(work.miaUrl).type === 'local' && (
                        <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs px-2 py-1 rounded-md font-medium border border-blue-200 dark:border-blue-800 flex items-center gap-1">
                          <Archive className="w-3 h-3" /> Arsip Lokal
                        </span>
                      )}`);

fs.writeFileSync('src/pages/Library.tsx', libCode);
console.log('WorkDetail and Library updated');
