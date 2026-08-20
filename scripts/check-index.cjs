const cheerio = require('cheerio');
const fetchIndex = async (url) => {
    const r = await fetch(url + (url.endsWith('/') ? 'index.htm' : '/index.htm'));
    if(!r.ok) return;
    const $ = cheerio.load(await r.text());
    let links = [];
    $('a').each((i, el) => {
        let href = $(el).attr('href');
        if(href && !href.includes('/') && !href.includes('mailto') && href.match(/\.html?$/)) links.push(href);
    });
    console.log(url, '=>', links);
};
fetchIndex('https://www.marxists.org/indonesia/archive/malaka/Madilog/');
fetchIndex('https://www.marxists.org/indonesia/archive/marx-engels/18480221-manifestokomunis/');
fetchIndex('https://www.marxists.org/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/');
