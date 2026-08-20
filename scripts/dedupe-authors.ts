import * as fs from 'fs';
import { authors } from '../src/data/authors';

const uniqueAuthors = Array.from(
  new Map(authors.map(a => [a.id, a])).values()
);

let fileContent = `import type { Author } from '../types';\n\nexport const authors: Author[] = ${JSON.stringify(uniqueAuthors, null, 2)};\n`;
fs.writeFileSync('src/data/authors.ts', fileContent);
