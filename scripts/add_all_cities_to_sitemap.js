const fs = require('fs');
const path = require('path');

// Read sitemap
const sitemapPath = path.join(__dirname, '..', 'src', 'app', 'sitemap.ts');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

// Get all city directories (excluding state pages)
const vendingServicesDir = path.join(__dirname, '..', 'src', 'app', 'vending-services');
const allDirs = fs.readFileSync(vendingServicesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .sort();

// Organize cities by state
const citiesByState = {
  'alabama': [],
  'alaska': [],
  'arizona': [],
  'arkansas': [],
  'colorado': [],
  'connecticut': [],
  'delaware': [],
  'georgia': [],
  'hawaii': [],
  'idaho': [],
  'illinois': [],
  'indiana': [],
  'iowa': [],
  'kansas': [],
  'kentucky': [],
  'louisiana': [],
  'maine': [],
  'maryland': [],
  'massachusetts': [],
  'michigan': [],
  'minnesota': [],
  'mississippi': [],
  'missouri': [],
  'montana': [],
  'nebraska': [],
  'nevada': [],
  'new-hampshire': [],
  'new-jersey': [],
  'new-mexico': [],
  'new-york': [],
  'north-carolina': [],
  'north-dakota': [],
  'ohio': [],
  'oklahoma': [],
  'oregon': [],
  'pennsylvania': [],
  'rhode-island': [],
  'south-carolina': [],
  'south-dakota': [],
  'tennessee': [],
  'utah': [],
  'vermont': [],
  'virginia': [],
  'washington': [],
  'washington-dc': [],
  'west-virginia': [],
  'wisconsin': [],
  'wyoming': []
};

allDirs.forEach(slug => {
  // Check if this ends with a state name
  Object.keys(citiesByState).forEach(state => {
    if (slug.endsWith(`-${state}`) || slug.endsWith(`-${state.replace('-', ' ')}`)) {
      citiesByState[state].push(slug);
    }
  });
});

// States already in sitemap
const skipStates = ['florida', 'california', 'texas'];

// For each state that needs cities added
Object.keys(citiesByState).forEach(stateSlug => {
  if (skipStates.includes(stateSlug)) return;
  if (citiesByState[stateSlug].length === 0) return;
  
  const cities = citiesByState[stateSlug].sort();
  const stateName = stateSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  // Find the state URL in sitemap
  const statePattern = new RegExp(`{ url: 'https://www\\.thevendinglocator\\.com/vending-services/${stateSlug}'[^}]+},`, 'g');
  
  // Build city URLs
  const cityUrls = cities.map(citySlug => 
    `  { url: 'https://www.thevendinglocator.com/vending-services/${citySlug}', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },`
  ).join('\n');
  
  const replacement = `{ url: 'https://www.thevendinglocator.com/vending-services/${stateSlug}', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },\n  \n  // ${stateName} Vending Services Cities\n${cityUrls}\n  `;
  
  sitemap = sitemap.replace(statePattern, replacement);
  
  console.log(`✓ Added ${cities.length} cities for ${stateName}`);
});

fs.writeFileSync(sitemapPath, sitemap);
console.log('\n✅ Sitemap updated with all city pages!');

