/**
 * Prerender script for SFGG website.
 * Launches a local server from the dist/ folder, visits each route with Puppeteer,
 * and saves the fully rendered HTML (with meta tags, JSON-LD, OG tags) to dist/[route]/index.html.
 *
 * Run: npm run build && node scripts/prerender.cjs
 */
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const http = require('http');

const DIST = path.join(__dirname, '..', 'dist');
const PORT = 4173;

// Parse city slugs from source
const cityContentPath = path.join(__dirname, '..', 'src', 'lib', 'city-content.ts');
const content = fs.readFileSync(cityContentPath, 'utf8');
const slugRegex = /^\s{2}'?([a-z][a-z0-9-]*)'?\s*:\s*\{/gm;
const slugs = [];
let match;
while ((match = slugRegex.exec(content)) !== null) {
  slugs.push(match[1]);
}

// Routes to prerender
const routes = [
  '/',
  '/faq',
  ...slugs.map((s) => `/services/${s}`),
];

/**
 * Simple static file server for the dist directory.
 * Serves index.html for any route that doesn't match a file (SPA fallback).
 */
function createServer() {
  return http.createServer((req, res) => {
    let filePath = path.join(DIST, req.url === '/' ? 'index.html' : req.url);

    // If no extension, serve index.html (SPA routing)
    if (!path.extname(filePath)) {
      filePath = path.join(DIST, 'index.html');
    }

    if (!fs.existsSync(filePath)) {
      filePath = path.join(DIST, 'index.html');
    }

    const ext = path.extname(filePath);
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon',
      '.woff2': 'font/woff2',
      '.xml': 'application/xml',
      '.txt': 'text/plain',
    };

    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });
}

async function prerender() {
  console.log(`Prerendering ${routes.length} routes...`);

  // Start local server
  const server = createServer();
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Server running on http://localhost:${PORT}`);

  // Launch browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Prerender routes in batches
  const BATCH_SIZE = 5;
  let completed = 0;

  for (let i = 0; i < routes.length; i += BATCH_SIZE) {
    const batch = routes.slice(i, i + BATCH_SIZE);
    await Promise.all(
      batch.map(async (route) => {
        const p = await browser.newPage();
        try {
          await p.goto(`http://localhost:${PORT}${route}`, {
            waitUntil: 'networkidle2',
            timeout: 15000,
          });

          // Wait for React Helmet to inject meta tags
          await p.waitForSelector('title', { timeout: 5000 }).catch(() => {});

          const html = await p.content();

          // Determine output path
          const outDir =
            route === '/'
              ? DIST
              : path.join(DIST, ...route.split('/').filter(Boolean));

          fs.mkdirSync(outDir, { recursive: true });

          const outFile = path.join(outDir, 'index.html');
          fs.writeFileSync(outFile, html, 'utf8');

          completed++;
          if (completed % 10 === 0 || completed === routes.length) {
            console.log(`  ${completed}/${routes.length} pages prerendered`);
          }
        } catch (err) {
          console.error(`  ERROR prerendering ${route}: ${err.message}`);
        } finally {
          await p.close();
        }
      })
    );
  }

  await page.close();
  await browser.close();
  server.close();

  console.log(`\nDone! ${completed} pages prerendered to ${DIST}`);
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
