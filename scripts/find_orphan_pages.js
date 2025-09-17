const fs = require('fs');
const path = require('path');
const { LinkChecker } = require('linkinator');

// Settings
const BASE_URL = 'https://www.thevendinglocator.com';
const TARGET_PREFIX = `${BASE_URL}/vending-leads/`;

function getExistingCitySlugs() {
  const vendingLeadsDir = path.join(process.cwd(), 'src', 'app', 'vending-leads');
  const items = fs.readdirSync(vendingLeadsDir, { withFileTypes: true });
  return items
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((slug) => fs.existsSync(path.join(vendingLeadsDir, slug, 'page.tsx')))
    .sort();
}

async function crawlSite() {
  const checker = new LinkChecker();
  const seeds = [
    BASE_URL,
    `${BASE_URL}/vending-leads`,
  ];

  // Crawl from each seed, aggregate results
  const foundUrls = new Set();

  for (const seed of seeds) {
    // eslint-disable-next-line no-await-in-loop
    const result = await checker.check({
      path: seed,
      concurrency: 20,
      timeout: 10000,
      recursion: true,
      // Skip non-HTML and external trackers
      linksToSkip: [
        /\.(png|jpg|jpeg|webp|gif|svg|ico)(\?|$)/i,
        /\.(css|js)(\?|$)/i,
        /#.+$/,
        /mailto:/i,
        /tel:/i,
      ],
    });

    for (const link of result.links) {
      if (link.url && link.url.startsWith(TARGET_PREFIX)) {
        // Only consider direct city/state pages, not nested assets
        try {
          const url = new URL(link.url);
          const parts = url.pathname.split('/').filter(Boolean);
          // Expect: ['vending-leads', '<slug>']
          if (parts.length === 2 && parts[0] === 'vending-leads') {
            foundUrls.add(`${BASE_URL}${url.pathname}`);
          }
        } catch (e) {
          // ignore bad URLs
        }
      }
    }
  }

  return foundUrls;
}

function toSlugFromUrl(url) {
  try {
    const u = new URL(url);
    const parts = u.pathname.split('/').filter(Boolean);
    return parts[1] || null; // vending-leads/<slug>
  } catch (e) {
    return null;
  }
}

async function main() {
  console.log('🔎 Finding orphan vending-leads pages...');
  const existingSlugs = getExistingCitySlugs();
  console.log(`📂 Existing city pages: ${existingSlugs.length}`);

  const foundUrls = await crawlSite();
  const discoveredSlugs = new Set(
    [...foundUrls]
      .map(toSlugFromUrl)
      .filter((s) => !!s)
  );

  // Orphans = existing pages that were NOT discovered via internal links from seeds
  const orphans = existingSlugs.filter((slug) => !discoveredSlugs.has(slug));

  // Write report
  const reportLines = [];
  reportLines.push('ORPHAN VENDING-LEADS PAGES');
  reportLines.push('===========================');
  reportLines.push('');
  reportLines.push(`Total Existing City Pages: ${existingSlugs.length}`);
  reportLines.push(`Discovered via Internal Links: ${discoveredSlugs.size}`);
  reportLines.push(`Total Orphans: ${orphans.length}`);
  reportLines.push('');
  if (orphans.length > 0) {
    reportLines.push('Orphan Slugs:');
    for (const slug of orphans) {
      reportLines.push(`- ${slug}`);
    }
  } else {
    reportLines.push('No orphan pages found.');
  }
  reportLines.push('');
  reportLines.push('Notes: Orphans are pages not reachable from the homepage or /vending-leads via internal links.');

  const outPath = path.join(process.cwd(), 'orphans.txt');
  fs.writeFileSync(outPath, reportLines.join('\n'), 'utf8');
  console.log(`📝 Report written to ${outPath}`);
}

main().catch((err) => {
  console.error('Failed to find orphan pages:', err);
  process.exit(1);
});


