const fs = require('fs');
const path = require('path');

const ROOT = path.join(process.cwd(), 'src', 'app', 'vending-leads');

function listPageFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      const pageTsx = path.join(full, 'page.tsx');
      if (fs.existsSync(pageTsx)) files.push(pageTsx);
    }
  }
  return files;
}

function updateFile(filePath) {
  let src = fs.readFileSync(filePath, 'utf8');

  let pricingIdx = src.indexOf('<PricingTable');
  if (pricingIdx === -1) return { filePath, changed: false, reason: 'no pricing table' };

  let changed = false;

  // 1) Ensure the <section> wrapping the PricingTable has id="pricing"
  const sectionOpenIdx = src.lastIndexOf('<section', pricingIdx);
  if (sectionOpenIdx !== -1) {
    const tagEndIdx = src.indexOf('>', sectionOpenIdx);
    if (tagEndIdx !== -1) {
      const tag = src.slice(sectionOpenIdx, tagEndIdx + 1);
      if (!/\sid=\"pricing\"/.test(tag)) {
        const newTag = tag.replace('<section', '<section id="pricing"');
        src = src.slice(0, sectionOpenIdx) + newTag + src.slice(tagEndIdx + 1);
        changed = true;
      }
    }
  }

  // 2) Change hero CTA link(s) before pricing to use #pricing instead of /pricing
  let idx = src.indexOf('href="/pricing"');
  while (idx !== -1 && idx < pricingIdx) {
    // Basic guard: ensure nearby text mentions Pricing Plans
    const window = src.slice(Math.max(0, idx - 200), Math.min(src.length, idx + 300));
    if (/Pricing\s*Plans|View\s*Pricing/i.test(window)) {
      src = src.slice(0, idx) + 'href="#pricing"' + src.slice(idx + 'href="/pricing"'.length);
      changed = true;
      // adjust pricingIdx due to potential length difference (same length here)
      pricingIdx = src.indexOf('<PricingTable');
    }
    idx = src.indexOf('href="/pricing"', idx + 1);
  }

  // 3) Remove hero Hot Leads link (<Link href="/hot-leads">...</Link>) that appears before pricing section
  function removeHotLeadsOnce() {
    const hrefIdx = src.indexOf('href="/hot-leads"');
    if (hrefIdx === -1 || hrefIdx > pricingIdx) return false;
    const openStart = src.lastIndexOf('<', hrefIdx);
    if (openStart === -1) return false;
    // Determine tag name
    const tagStartSnippet = src.slice(openStart, openStart + 10);
    let closeTag = null;
    if (tagStartSnippet.startsWith('<Link')) closeTag = '</Link>';
    else if (tagStartSnippet.startsWith('<a')) closeTag = '</a>';
    else return false;
    const closeIdx = src.indexOf(closeTag, hrefIdx);
    if (closeIdx === -1) return false;
    const closeEnd = closeIdx + closeTag.length;
    src = src.slice(0, openStart) + src.slice(closeEnd);
    changed = true;
    return true;
  }
  // Attempt multiple times in case there are two buttons
  while (removeHotLeadsOnce()) {
    // keep removing until none remain before pricing
  }

  if (changed) {
    fs.writeFileSync(filePath, src, 'utf8');
  }
  return { filePath, changed };
}

function main() {
  const files = listPageFiles(ROOT);
  let changedCount = 0;
  for (const f of files) {
    const { changed } = updateFile(f);
    if (changed) changedCount++;
  }
  console.log(`Updated files: ${changedCount}/${files.length}`);
}

if (require.main === module) main();


