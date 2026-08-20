const cheerio = require('cheerio');
fetch('https://www.marxists.org/indonesia/archive/index.htm').then(r=>r.text()).then(html => {
  const $ = cheerio.load(html);
  $('a').each((i, el) => {
    const text = $(el).text().trim();
    const href = $(el).attr('href');
    if (text && href && !href.includes('mailto') && !text.includes('Seksi Bahasa')) {
        console.log(text, '=>', href);
    }
  });
});
