const cheerio = require('cheerio');
const fs = require('fs');

const authors = [
  { id: 'karl-marx', url: 'https://www.marxists.org/indonesia/archive/marx-engels/index.htm' },
  { id: 'lenin', url: 'https://www.marxists.org/indonesia/archive/lenin/index.htm' },
  { id: 'trotsky', url: 'https://www.marxists.org/indonesia/archive/trotsky/index.htm' },
  { id: 'che-guevara', url: 'https://www.marxists.org/indonesia/archive/guevara/index.htm' },
  { id: 'rosa-luxemburg', url: 'https://www.marxists.org/indonesia/archive/luxemburg/index.htm' },
  { id: 'tan-malaka', url: 'https://www.marxists.org/indonesia/archive/malaka/index.htm' },
  { id: 'georgi-plekhanov', url: 'https://www.marxists.org/indonesia/archive/plekhanov/index.htm' },
  { id: 'eleanor-marx', url: 'https://www.marxists.org/indonesia/archive/marx-eleanor/index.htm' },
  { id: 'alexandra-kollontai', url: 'https://www.marxists.org/indonesia/archive/kollontai/index.htm' },
  { id: 'chen-duxiu', url: 'https://www.marxists.org/indonesia/archive/chenduxiu/index.htm' },
  { id: 'ernest-mandel', url: 'https://www.marxists.org/indonesia/archive/mandel/index.htm' },
  { id: 'george-novack', url: 'https://www.marxists.org/indonesia/archive/novack/index.htm' },
  { id: 'duncan-hallas', url: 'https://www.marxists.org/indonesia/archive/hallas/index.htm' },
  { id: 'komintern', url: 'https://www.marxists.org/indonesia/archive/komintern/index.htm' }
];

function generateSlug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').substring(0, 50);
}

async function scrapeAll() {
  const newWorks = [];
  
  for (const author of authors) {
    try {
      console.log(`Fetching ${author.id}...`);
      const r = await fetch(author.url);
      if (!r.ok) continue;
      
      const baseUrl = author.url.substring(0, author.url.lastIndexOf('/') + 1);
      const html = await r.text();
      const $ = cheerio.load(html);
      
      $('a').each((i, el) => {
        let text = $(el).text().trim().replace(/[\n\r\t]+/g, ' ').replace(/\s{2,}/g, ' ');
        let href = $(el).attr('href');
        
        if (text && href && !href.includes('mailto') && href.match(/\.html?$/) && !href.toLowerCase().includes('index.htm')) {
          // Clean up text
          text = text.replace(/^[\d\-\.\s]+/, ''); // remove leading numbers like "1926 - " or "1. "
          
          if (text.length < 3 || text.toLowerCase().includes('marxists internet archive')) return;
          
          let fullUrl = href.startsWith('http') ? href : (new URL(href, baseUrl)).href;
          
          // Avoid duplicates
          if (newWorks.find(w => w.miaUrl === fullUrl)) return;
          
          let slug = generateSlug(text);
          if (!slug) return;
          
          // Try to extract year from text or href if possible
          let yearMatch = href.match(/18\d{2}|19\d{2}|20\d{2}/);
          if (!yearMatch) yearMatch = text.match(/18\d{2}|19\d{2}|20\d{2}/);
          let year = yearMatch ? parseInt(yearMatch[0]) : null;
          
          newWorks.push({
            id: slug + '-' + Math.random().toString(36).substring(2, 7),
            slug: slug,
            title: text.substring(0, 100),
            originalTitle: '',
            authorId: author.id,
            year: year || 1900,
            category: 'Karya Umum',
            difficulty: 'Menengah',
            readingTime: 30,
            themes: [],
            concepts: [],
            summary: {
              historicalContext: '',
              mainProblem: '',
              mainThesis: '',
              structure: '',
              contentSummary: ''
            },
            importance: '',
            studyQuestions: [],
            relatedWorks: [],
            miaUrl: fullUrl,
            rightsStatus: "unknown",
            fullTextEnabled: false,
            contentStatus: "external-only"
          });
        }
      });
    } catch (e) {
      console.error(e);
    }
  }
  
  console.log(`Found ${newWorks.length} works!`);
  
  // Read existing works.ts
  const worksFile = 'src/data/works.ts';
  let worksText = fs.readFileSync(worksFile, 'utf8');
  
  // Try to find the closing bracket of the works array
  const lastIndex = worksText.lastIndexOf('];');
  
  // Filter out works that are already in the database based on miaUrl
  const existingWorksText = worksText.substring(0, lastIndex);
  const filteredNewWorks = newWorks.filter(nw => !existingWorksText.includes(nw.miaUrl));
  
  console.log(`Adding ${filteredNewWorks.length} NEW works to database...`);
  
  if (filteredNewWorks.length > 0) {
    const stringified = JSON.stringify(filteredNewWorks, null, 2).slice(1, -1);
    const newWorksText = worksText.substring(0, lastIndex) + ',\n' + stringified + '\n];';
    fs.writeFileSync(worksFile, newWorksText);
  }
}

scrapeAll();
