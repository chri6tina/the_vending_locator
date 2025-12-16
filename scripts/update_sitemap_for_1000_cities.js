// Update sitemap to include all 1000 how-to-start-a-vending-machine-business city pages
const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '../src/app/sitemap.ts');
const pagePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');

// Read the page file to extract city slugs from cityInfo
const pageContent = fs.readFileSync(pagePath, 'utf8');
const cityMatches = Array.from(pageContent.matchAll(/^  '([^']+)': \{/gm));
const citySlugs = cityMatches.map(m => m[1]);

console.log(`Found ${citySlugs.length} cities with cityInfo entries`);

// Read the sitemap
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Find the cityGuidePages section
const startMarker = '  // Dynamic city guides (how-to-start-a-vending-machine-business/[slug])';
const endMarker = '  )';

const startIndex = sitemapContent.indexOf(startMarker);
if (startIndex === -1) {
  console.error('Could not find cityGuidePages section');
  process.exit(1);
}

// Find the end of the cityGuidePages definition (the closing parenthesis and newline)
let endIndex = sitemapContent.indexOf('  )', startIndex);
if (endIndex === -1) {
  console.error('Could not find end of cityGuidePages section');
  process.exit(1);
}
endIndex += 3; // Include the ')'

// Generate new cityGuidePages code
const newCityGuidePages = `  // Dynamic city guides (how-to-start-a-vending-machine-business/[slug])
  // Include all cities that have cityInfo entries (${citySlugs.length} cities)
  const cityGuidePages: MetadataRoute.Sitemap = [
${citySlugs.map(slug => `    { url: \`https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/${slug}\`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },`).join('\n')}
  ]`;

// Replace the section
const newSitemapContent = 
  sitemapContent.slice(0, startIndex) +
  newCityGuidePages +
  sitemapContent.slice(endIndex);

fs.writeFileSync(sitemapPath, newSitemapContent, 'utf8');

console.log(`✅ Updated sitemap with ${citySlugs.length} city pages`);
console.log(`   First city: ${citySlugs[0]}`);
console.log(`   Last city: ${citySlugs[citySlugs.length - 1]}`);

