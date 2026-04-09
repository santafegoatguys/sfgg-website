/**
 * Auto-generates sitemap.xml from:
 *  - city-content.ts  → /services/:slug
 *  - content/pseo/    → /pseo/:slug
 *  - content/blog/    → /blog/:slug
 * Run: node scripts/generate-sitemap.cjs
 */
const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://santafegoatguys.com';
const TODAY = new Date().toISOString().split('T')[0];

// ── City service pages from city-content.ts ──────────────────────────────────
const cityContentPath = path.join(__dirname, '..', 'src', 'lib', 'city-content.ts');
const cityContent = fs.readFileSync(cityContentPath, 'utf8');
const slugRegex = /^\s{2}'?([a-z][a-z0-9-]*)'?\s*:\s*\{/gm;
const citySlugs = [];
let match;
while ((match = slugRegex.exec(cityContent)) !== null) {
  citySlugs.push(match[1]);
}
console.log(`Found ${citySlugs.length} city service pages`);

// ── pSEO pages from content/pseo/ ────────────────────────────────────────────
const pseoDir = path.join(__dirname, '..', 'content', 'pseo');
const pseoSlugs = fs.existsSync(pseoDir)
  ? fs.readdirSync(pseoDir).filter(f => f.endsWith('.md')).map(f => f.replace('.md', ''))
  : [];
console.log(`Found ${pseoSlugs.length} pSEO pages`);

// ── Blog posts from content/blog/ ────────────────────────────────────────────
const blogDir = path.join(__dirname, '..', 'content', 'blog');
const blogSlugs = fs.existsSync(blogDir)
  ? fs.readdirSync(blogDir).filter(f => f.endsWith('.md')).map(f => f.replace('.md', ''))
  : [];
console.log(`Found ${blogSlugs.length} blog posts`);

// ── Build URL list ────────────────────────────────────────────────────────────
const urls = [
  { loc: '/',     priority: '1.0', changefreq: 'weekly' },
  { loc: '/faq',  priority: '0.8', changefreq: 'monthly' },
  { loc: '/blog', priority: '0.7', changefreq: 'weekly' },
  ...citySlugs.map(slug => ({ loc: `/services/${slug}`, priority: '0.7', changefreq: 'monthly' })),
  ...pseoSlugs.map(slug => ({ loc: `/pseo/${slug}`,     priority: '0.6', changefreq: 'monthly' })),
  ...blogSlugs.map(slug => ({ loc: `/blog/${slug}`,     priority: '0.7', changefreq: 'never'   })),
];

// ── Write sitemap.xml ─────────────────────────────────────────────────────────
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${DOMAIN}${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml);
console.log(`Sitemap written → ${outPath} (${urls.length} URLs total)`);
