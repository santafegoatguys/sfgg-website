/**
 * Edge function: /share?acres=5&location=Santa+Fe,+NM
 *
 * Returns a full HTML page with proper Open Graph meta tags so social media
 * scrapers (Twitter, Facebook, LinkedIn, iMessage) can render the share card
 * without needing client-side JavaScript.
 *
 * Both human visitors and bots get the same HTML.
 */

export const config = { runtime: 'edge' };

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function fmt(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US');
}

export default function handler(req: Request) {
  const url = new URL(req.url);
  const params = url.searchParams;

  const acres = Math.max(0.1, Math.min(10000, parseFloat(params.get('acres') || '5')));
  const location = (params.get('location') || 'Santa Fe, NM').slice(0, 60);

  const manualCost = acres * 1500;
  const goatCost = acres * 400;
  const savings = manualCost - goatCost;
  const savingsPct = Math.round((savings / manualCost) * 100);

  const origin = `${url.protocol}//${url.host}`;
  const ogImageUrl = `${origin}/api/og/card?acres=${acres}&location=${encodeURIComponent(location)}`;
  const pageUrl = `${origin}/share?acres=${acres}&location=${encodeURIComponent(location)}`;

  const title = `Save ${fmt(savings)} on ${acres} acres with goat grazing`;
  const description = `Targeted goat grazing clears ${acres} acres in ${location} for ${fmt(goatCost)} — ${savingsPct}% less than manual clearing. Get a free quote from Santa Fe Goat Guys.`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${escapeHtml(title)} | Santa Fe Goat Guys</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${escapeHtml(pageUrl)}" />

<meta property="og:type" content="website" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:url" content="${escapeHtml(pageUrl)}" />
<meta property="og:image" content="${escapeHtml(ogImageUrl)}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(title)}" />
<meta name="twitter:description" content="${escapeHtml(description)}" />
<meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />

<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:#F5F0E1;color:#2C3E0F;line-height:1.5}
  .nav{background:#fff;border-bottom:1px solid #E5DDC4;padding:16px 24px;display:flex;align-items:center;justify-content:space-between;max-width:1100px;margin:0 auto}
  .brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:#2C3E0F}
  .brand-mark{width:40px;height:40px;background:#3D5A2A;color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:14px}
  .brand-name{font-weight:800;font-size:18px}
  .cta-nav{background:#3D5A2A;color:#fff;text-decoration:none;padding:10px 18px;border-radius:6px;font-weight:600;font-size:14px}
  main{max-width:900px;margin:0 auto;padding:48px 24px}
  .eyebrow{font-size:13px;font-weight:700;color:#3D5A2A;letter-spacing:2px;text-align:center;margin-bottom:12px}
  h1{font-size:38px;font-weight:800;text-align:center;margin-bottom:8px;line-height:1.15}
  .sub{text-align:center;color:#6B7B4F;font-size:18px;margin-bottom:32px}
  .savings{background:#3D5A2A;color:#fff;border-radius:20px;padding:48px 24px;text-align:center;margin-bottom:32px;box-shadow:0 8px 32px rgba(0,0,0,.08)}
  .savings .label{font-size:14px;letter-spacing:2px;font-weight:700;opacity:.9}
  .savings .amount{font-size:84px;font-weight:900;line-height:1;margin:8px 0}
  .savings .pct{font-size:20px;font-weight:700}
  .compare{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:32px}
  .compare div{background:#fff;border-radius:12px;padding:20px;border-left:6px solid}
  .compare .manual{border-color:#C0392B}
  .compare .goats{border-color:#3D5A2A}
  .compare .lbl{font-size:13px;color:#6B7B4F;font-weight:600;text-transform:uppercase;letter-spacing:1px}
  .compare .val{font-size:28px;font-weight:900;color:#2C3E0F;margin-top:4px}
  .cta{background:#2C3E0F;color:#fff;border-radius:20px;padding:36px 24px;text-align:center}
  .cta h2{font-size:24px;margin-bottom:12px;color:#fff}
  .cta p{color:#E8F0D6;margin-bottom:20px}
  .cta a{display:inline-block;background:#3D5A2A;color:#fff;text-decoration:none;font-weight:700;padding:14px 28px;border-radius:8px}
  footer{text-align:center;padding:32px 24px;color:#6B7B4F;font-size:14px}
  @media (max-width:600px){h1{font-size:28px}.savings .amount{font-size:56px}.compare{grid-template-columns:1fr}}
</style>
</head>
<body>
<nav class="nav">
  <a class="brand" href="/">
    <span class="brand-mark">SFGG</span>
    <span class="brand-name">Santa Fe Goat Guys</span>
  </a>
  <a class="cta-nav" href="/#contact">Get a Quote</a>
</nav>

<main>
  <div class="eyebrow">GOAT GRAZING ESTIMATE</div>
  <h1>${escapeHtml(`${acres} acres in ${location}`)}</h1>
  <p class="sub">Targeted goat grazing for wildfire defense</p>

  <section class="savings">
    <div class="label">YOU SAVE</div>
    <div class="amount">${escapeHtml(fmt(savings))}</div>
    <div class="pct">${savingsPct}% less than manual clearing</div>
  </section>

  <section class="compare">
    <div class="manual">
      <div class="lbl">Manual clearing</div>
      <div class="val">${escapeHtml(fmt(manualCost))}</div>
    </div>
    <div class="goats">
      <div class="lbl">Goat grazing</div>
      <div class="val">${escapeHtml(fmt(goatCost))}</div>
    </div>
  </section>

  <section class="cta">
    <h2>Get a free quote for your property</h2>
    <p>Free, no-pressure estimate in 24 hours. Serving New Mexico.</p>
    <a href="/#contact">Get My Quote &rarr;</a>
  </section>
</main>

<footer>
  Santa Fe Goat Guys &middot; santafegoatguys.com &middot; Targeted goat grazing for fire-prone properties
</footer>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=3600',
    },
  });
}
