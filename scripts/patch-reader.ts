import * as fs from 'fs';

let code = fs.readFileSync('src/pages/Reader.tsx', 'utf8');

// Replace chapters logic
const chaptersReplacement = `
  const chapters = useMemo(() => {
    if (!work) return [];
    
    if (work.format === 'multi-pdf' && work.parts) {
      return work.parts.map((p, idx) => ({
        slug: \`bagian-\${p.number}\`,
        order: idx,
        title: p.title,
        isPdf: true,
        localPath: p.localPath
      }));
    }

    const metaPathKey = Object.keys(metaModules).find(path => path.endsWith(\`/\${work.slug}/metadata.ts\`));
    const meta = metaPathKey ? metaModules[metaPathKey] as any : null;
    
    if (meta && meta.chapters) {
      return meta.chapters.map((slug: string, idx: number) => ({
        slug,
        order: idx,
        title: slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
        isPdf: false
      }));
    }
    return [];
  }, [work]);
`;

code = code.replace(/const chapters = useMemo\(\(\) => \{[\s\S]*?\}, \[work\]\);/, chaptersReplacement);

// Replace load content logic
const loadReplacement = `
  useEffect(() => {
    if (!work || !currentChapter) return;
    
    if (currentChapter.isPdf) {
      setIsLoading(false);
      setContent('');
      return;
    }

    setIsLoading(true);
    const fileName = \`\${String(currentChapterIndex).padStart(2, '0')}-\${currentChapter.slug}.md\`;
    const mdPathKey = Object.keys(mdModules).find(path => path.endsWith(\`/\${work.slug}/chapters/\${fileName}\`));
`;

code = code.replace(/useEffect\(\(\) => \{[\s\S]*?const mdPathKey = Object.keys\(mdModules\).find\(path => path.endsWith\(`\/\$\{work.slug\}\/chapters\/\$\{fileName\}`\)\);/, loadReplacement);

fs.writeFileSync('src/pages/Reader.tsx', code);
console.log('Patched Reader.tsx chapters and load logic.');
