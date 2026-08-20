import * as fs from 'fs';
let code = fs.readFileSync('src/data/works.ts', 'utf8');

code = code.replace(
  /"slug": "manifesto-komunis",[\s\S]*?"authorId": "karl-marx",/,
  (match) => match.replace('"authorId": "karl-marx"', '"authorIds": ["karl-marx", "friedrich-engels"]')
);

fs.writeFileSync('src/data/works.ts', code);
