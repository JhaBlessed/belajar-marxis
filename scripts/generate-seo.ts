import * as fs from 'fs';
import * as path from 'path';

import { authors } from '../src/data/authors';
import { works } from '../src/data/works';
import { concepts } from '../src/data/concepts';
import { organizations } from '../src/data/organizations';
import { historicalPersons } from '../src/data/historicalPersons';

const baseUrl = 'https://belajarmarxis.org'; 
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');

const staticRoutes = [
  '',
  '/belajar',
  '/tokoh',
  '/karya',
  '/perpustakaan',
  '/konsep',
  '/timeline',
  '/organisasi',
  '/peta-gagasan',
  '/indonesia',
  '/glosarium',
  '/sumber',
  '/tentang',
  '/tokoh-sejarah'
];

let urls = '';

// Static
staticRoutes.forEach(route => {
  urls += `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <changefreq>weekly</changefreq>\n  </url>\n`;
});

// Dynamic
authors.forEach(a => {
  urls += `  <url>\n    <loc>${baseUrl}/tokoh/${a.slug}</loc>\n  </url>\n`;
});
works.forEach(w => {
  urls += `  <url>\n    <loc>${baseUrl}/karya/${w.slug}</loc>\n  </url>\n`;
});
concepts.forEach(c => {
  urls += `  <url>\n    <loc>${baseUrl}/konsep/${c.slug}</loc>\n  </url>\n`;
});
organizations.forEach(o => {
  urls += `  <url>\n    <loc>${baseUrl}/organisasi/${o.slug}</loc>\n  </url>\n`;
});
historicalPersons.forEach(h => {
  urls += `  <url>\n    <loc>${baseUrl}/tokoh-sejarah/${h.slug}</loc>\n  </url>\n`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}</urlset>`;

fs.writeFileSync(sitemapPath, sitemap);

const robots = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml`;

fs.writeFileSync(robotsPath, robots);
console.log('SEO generated');
