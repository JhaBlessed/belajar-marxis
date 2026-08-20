const cheerio = require('cheerio');
fetch('https://www.marxists.org/indonesia/').then(r=>r.text()).then(html => {
  const $ = cheerio.load(html);
  $('a').each((i, el) => {
    const text = $(el).text().trim();
    const href = $(el).attr('href');
    if (text && href) {
        if (/manifesto|feuerbach|upah|april|negara|reformasi|pemogokan|madilog|pan-islamisme/i.test(text) || /marx|lenin|malaka|luxemburg/i.test(href)) {
            console.log(text, '=>', href);
        }
    }
  });
});
