const cheerio = require('cheerio');
const urls = [
  'https://www.marxists.org/indonesia/archive/marx-engels/',
  'https://www.marxists.org/indonesia/archive/luxemburg/',
  'https://www.marxists.org/indonesia/archive/lenin/'
];
async function find() {
  for (const url of urls) {
    try {
        const r = await fetch(url);
        if (r.ok) {
            const html = await r.text();
            const $ = cheerio.load(html);
            $('a').each((i, el) => {
                const text = $(el).text().trim();
                const href = $(el).attr('href');
                if (text && href && /tesis|upah|laba|reformasi|pemogokan/i.test(text)) {
                    console.log(text, '=>', new URL(href, url).href);
                }
            });
        }
    } catch(e) {}
  }
}
find();
