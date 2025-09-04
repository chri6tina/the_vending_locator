const fs = require('fs');
const path = require('path');

// Root directory for vending leads pages
const VENDING_LEADS_DIR = path.join(__dirname, '..', 'src', 'app', 'vending-leads');

// Known state slugs (derived from src/data/states.ts)
const STATE_SLUGS = new Set([
  'alabama','alaska','arizona','arkansas','california','colorado','connecticut','delaware','florida','georgia','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new-hampshire','new-jersey','new-mexico','new-york','north-carolina','north-dakota','ohio','oklahoma','oregon','pennsylvania','rhode-island','south-carolina','south-dakota','tennessee','texas','utah','vermont','virginia','washington','washington-dc','west-virginia','wisconsin','wyoming'
]);

function toTitleCase(slug) {
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function getLocationFromSlug(dirName) {
  // State page if dirName is a state slug exactly
  if (STATE_SLUGS.has(dirName)) {
    return { type: 'state', stateSlug: dirName, stateName: toTitleCase(dirName) };
  }

  // City page if ends with a known state slug
  for (const stateSlug of STATE_SLUGS) {
    if (dirName === stateSlug) continue;
    if (dirName.endsWith(`-${stateSlug}`)) {
      const citySlug = dirName.slice(0, -1 * (`-${stateSlug}`).length);
      return {
        type: 'city',
        citySlug,
        stateSlug,
        cityName: toTitleCase(citySlug),
        stateName: toTitleCase(stateSlug)
      };
    }
  }

  // Unknown
  return { type: 'unknown' };
}

function replaceMetadata(content, location) {
  // Only operate if placeholder "Vending Leads" appears anywhere in metadata
  if (!/Vending Leads/.test(content)) return { content, changed: false };

  let newContent = content;

  if (location.type === 'state') {
    const title = `Vending Machine Leads in ${location.stateName} - The Vending Locator`;
    const description = `Get verified vending machine leads and locations in ${location.stateName}. Find qualified businesses for vending machine placement.`;
    const keywords = `vending machines ${location.stateName}, vending leads ${location.stateName}, vending locations ${location.stateName}, vending opportunities ${location.stateName}`;

    // Replace top-level metadata fields
    newContent = newContent
      .replace(/("title"\s*:\s*")[^"]*("\s*,)/, `$1${title}$2`)
      .replace(/("description"\s*:\s*")[^"]*("\s*,)/, `$1${description}$2`)
      .replace(/("keywords"\s*:\s*")[^"]*("\s*,)/, `$1${keywords}$2`)
      // Replace openGraph
      .replace(/("openGraph"\s*:\s*\{[\s\S]*?"title"\s*:\s*")[^"]*"/, m => m.replace(/"title"\s*:\s*"[^"]*"/, `"title": "${title}"`))
      .replace(/("openGraph"\s*:\s*\{[\s\S]*?"description"\s*:\s*")[^"]*"/, m => m.replace(/"description"\s*:\s*"[^"]*"/, `"description": "${description}"`))
      // Replace twitter
      .replace(/("twitter"\s*:\s*\{[\s\S]*?"title"\s*:\s*")[^"]*"/, m => m.replace(/"title"\s*:\s*"[^"]*"/, `"title": "${title}"`))
      .replace(/("twitter"\s*:\s*\{[\s\S]*?"description"\s*:\s*")[^"]*"/, m => m.replace(/"description"\s*:\s*"[^"]*"/, `"description": "${description}"`));
  } else if (location.type === 'city') {
    const title = `Vending Machine Leads in ${location.cityName}, ${location.stateName} - The Vending Locator`;
    const description = `Get verified vending machine leads and locations in ${location.cityName}, ${location.stateName}. Find qualified businesses for vending machine placement.`;
    const keywords = `vending machines ${location.cityName} ${location.stateName}, vending leads ${location.cityName} ${location.stateName}, vending locations ${location.cityName} ${location.stateName}, vending opportunities ${location.cityName} ${location.stateName}`;

    newContent = newContent
      .replace(/("title"\s*:\s*")[^"]*("\s*,)/, `$1${title}$2`)
      .replace(/("description"\s*:\s*")[^"]*("\s*,)/, `$1${description}$2`)
      .replace(/("keywords"\s*:\s*")[^"]*("\s*,)/, `$1${keywords}$2`)
      .replace(/("openGraph"\s*:\s*\{[\s\S]*?"title"\s*:\s*")[^"]*"/, m => m.replace(/"title"\s*:\s*"[^"]*"/, `"title": "${title}"`))
      .replace(/("openGraph"\s*:\s*\{[\s\S]*?"description"\s*:\s*")[^"]*"/, m => m.replace(/"description"\s*:\s*"[^"]*"/, `"description": "${description}"`))
      .replace(/("twitter"\s*:\s*\{[\s\S]*?"title"\s*:\s*")[^"]*"/, m => m.replace(/"title"\s*:\s*"[^"]*"/, `"title": "${title}"`))
      .replace(/("twitter"\s*:\s*\{[\s\S]*?"description"\s*:\s*")[^"]*"/, m => m.replace(/"description"\s*:\s*"[^"]*"/, `"description": "${description}"`));
  } else {
    return { content, changed: false };
  }

  if (newContent !== content) {
    return { content: newContent, changed: true };
  }
  return { content, changed: false };
}

function processAll() {
  if (!fs.existsSync(VENDING_LEADS_DIR)) {
    console.error('vending-leads dir not found');
    process.exit(1);
  }

  const dirs = fs.readdirSync(VENDING_LEADS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  let updated = 0;
  let skipped = 0;

  dirs.forEach(dirName => {
    const pagePath = path.join(VENDING_LEADS_DIR, dirName, 'page.tsx');
    if (!fs.existsSync(pagePath)) { skipped++; return; }
    const orig = fs.readFileSync(pagePath, 'utf8');
    const location = getLocationFromSlug(dirName);
    const { content: fixed, changed } = replaceMetadata(orig, location);
    if (changed) {
      fs.writeFileSync(pagePath, fixed, 'utf8');
      console.log(`✅ Fixed metadata: ${dirName}`);
      updated++;
    }
  });

  console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`);
}

if (require.main === module) {
  processAll();
}

module.exports = { processAll };


