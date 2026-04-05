/**
 * Auto-generates sitemap.xml from city-content.ts data.
 * Run: node scripts/generate-sitemap.js
 */
const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://santafegoatguys.com';
const TODAY = new Date().toISOString().split('T')[0];

// Read the built JS to extract city slugs
// Simpler approach: parse the TS source directly for slug values
const cityContentPath = path.join(__dirname, '..', 'src', 'lib', 'city-content.ts');
const content = fs.readFileSync(cityContentPath, 'utf8');

// Extract all slug values from the CITY_PAGES record keys
const slugRegex = /^\s{2}'?([a-z][a-z0-9-]*)'?\s*:\s*\{/gm;
const slugs = [];
let match;
while ((match = slugRegex.exec(content)) !== null) {
  slugs.push(match[1]);
}

console.log(`Found ${slugs.length} city pages`);

// Build sitemap XML
const urls = [
  // Static pages
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/faq', priority: '0.8', changefreq: 'monthly' },
  // City pages
  ...slugs.map((slug) => ({
    loc: `/services/${slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${DOMAIN}${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml);
console.log(`Sitemap written to ${outPath} with ${urls.length} URLs`);
