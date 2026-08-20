import * as fs from 'fs';

let code = fs.readFileSync('src/pages/Reader.tsx', 'utf8');

const replacement = `{isLoading ? (
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
                className={\`prose dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-red-600 prose-blockquote:border-l-red-600 prose-hr:border-gray-300 dark:prose-hr:border-gray-700 \${fontClass} \${lineClass}\`}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}`;

const regex = /\{isLoading \? \([\s\S]*?dangerouslySetInnerHTML=\{\{ __html: content \}\}\s*\/>\s*\)\}/;
code = code.replace(regex, replacement);
fs.writeFileSync('src/pages/Reader.tsx', code);
console.log('Patched reader PDF render logic!');
