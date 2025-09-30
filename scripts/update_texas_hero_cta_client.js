const fs = require('fs');
const path = require('path');

const ROOT = path.join(process.cwd(), 'src', 'app', 'vending-leads');

function listTexasClientFiles() {
  const entries = fs.readdirSync(ROOT, { withFileTypes: true });
  const files = [];
  for (const ent of entries) {
    if (!ent.isDirectory()) continue;
    const name = ent.name;
    if (!name.endsWith('-texas') && name !== 'texas') continue;
    const client = path.join(ROOT, name, 'pageClient.tsx');
    if (fs.existsSync(client)) files.push(client);
  }
  return files;
}

function updateClient(filePath) {
  let src = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1) Ensure Pricing section has id="pricing"
  let pricingIdx = src.indexOf('<PricingTable');
  if (pricingIdx !== -1) {
    const sectionOpenIdx = src.lastIndexOf('<section', pricingIdx);
    if (sectionOpenIdx !== -1) {
      const tagEndIdx = src.indexOf('>', sectionOpenIdx);
      if (tagEndIdx !== -1) {
        const tag = src.slice(sectionOpenIdx, tagEndIdx + 1);
        if (!/\sid=\"pricing\"/.test(tag)) {
          const newTag = tag.replace('<section', '<section id="pricing"');
          src = src.slice(0, sectionOpenIdx) + newTag + src.slice(tagEndIdx + 1);
          changed = true;
          pricingIdx = src.indexOf('<PricingTable');
        }
      }
    }
  }

  // 2) In hero CTA region (assumed before pricing), change href="/pricing" to href="#pricing"
  let idx = src.indexOf('href="/pricing"');
  while (idx !== -1 && (pricingIdx === -1 || idx < pricingIdx)) {
    src = src.slice(0, idx) + 'href="#pricing"' + src.slice(idx + 'href="/pricing"'.length);
    changed = true;
    idx = src.indexOf('href="/pricing"', idx + 1);
  }

  // 3) Remove hero Hot Leads Link (<Link href="/hot-leads">...</Link>) before pricing
  function removeHotLeadsOnce() {
    const hrefIdx = src.indexOf('href="/hot-leads"');
    if (hrefIdx === -1) return false;
    if (pricingIdx !== -1 && hrefIdx > pricingIdx) return false; // Only hero area
    const openStart = src.lastIndexOf('<', hrefIdx);
    if (openStart === -1) return false;
    const startSnippet = src.slice(openStart, openStart + 6);
    const closeTag = startSnippet.startsWith('<Link') ? '</Link>' : startSnippet.startsWith('<a') ? '</a>' : null;
    if (!closeTag) return false;
    const closeIdx = src.indexOf(closeTag, hrefIdx);
    if (closeIdx === -1) return false;
    const closeEnd = closeIdx + closeTag.length;
    src = src.slice(0, openStart) + src.slice(closeEnd);
    changed = true;
    return true;
  }
  while (removeHotLeadsOnce()) {}

  if (changed) fs.writeFileSync(filePath, src, 'utf8');
  return { filePath, changed };
}

function main() {
  const files = listTexasClientFiles();
  let changedCount = 0;
  for (const f of files) {
    const { changed } = updateClient(f);
    if (changed) changedCount++;
  }
  console.log(`Texas client files updated: ${changedCount}/${files.length}`);
}

if (require.main === module) main();


