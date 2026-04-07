#!/usr/bin/env node
/**
 * IndexNow ping — notifies Bing, Yandex, and other IndexNow-compatible
 * search engines that URLs have been added or updated.
 *
 * Usage: node scripts/indexnow-ping.cjs
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const HOST = 'santafegoatguys.com';
const KEY = 'fa51c15b6dbf7a8efd03c504f2771e76';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Parse sitemap for URLs
const sitemap = fs.readFileSync(SITEMAP_PATH, 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

console.log(`Submitting ${urls.length} URLs to IndexNow for ${HOST}...`);

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
});

const req = https.request(
  {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload),
    },
  },
  (res) => {
    console.log(`IndexNow status: ${res.statusCode}`);
    let body = '';
    res.on('data', (chunk) => (body += chunk));
    res.on('end', () => {
      if (body) console.log('Response:', body);
      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log('Success — URLs submitted to Bing and Yandex.');
      } else {
        console.log('Non-success status. Common causes: key file not yet deployed, or URL host mismatch.');
      }
    });
  }
);

req.on('error', (err) => {
  console.error('Error submitting to IndexNow:', err);
  process.exit(1);
});

req.write(payload);
req.end();
