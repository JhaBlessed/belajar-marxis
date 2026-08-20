const cheerio = require('cheerio');
fetch('https://www.marxists.org/indonesia/archive/malaka/').then(r=>r.text()).then(html => {
  const $ = cheerio.load(html);
  $('a').each((i, el) => {
    const text = $(el).text().trim();
    const href = $(el).attr('href');
    if (text && href) {
        console.log(text, '=>', href);
    }
  });
});
