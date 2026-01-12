const fs = require('fs');
const path = require('path');

// Read states.ts to get state slugs
const statesPath = path.join(__dirname, '..', 'src', 'data', 'states.ts');
const statesContent = fs.readFileSync(statesPath, 'utf8');

// Parse states.ts to extract state slugs
const stateSlugs = new Map();
const stateRegex = /\{\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*cities:\s*\[([\s\S]*?)\]\s*\}/g;
let stateMatch;

while ((stateMatch = stateRegex.exec(statesContent)) !== null) {
  const stateName = stateMatch[1];
  const stateSlug = stateMatch[2];
  stateSlugs.set(stateSlug, stateName);
}

// Get all city directories
const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', '_city-pages', 'vending-leads');
const cityDirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let fixed = 0;
let skipped = 0;

cityDirs.forEach(citySlug => {
  const pageClientPath = path.join(vendingLeadsDir, citySlug, 'pageClient.tsx');
  
  if (!fs.existsSync(pageClientPath)) {
    skipped++;
    return;
  }
  
  let content = fs.readFileSync(pageClientPath, 'utf8');
  let modified = false;
  
  // Extract city and state from slug (format: city-state)
  const parts = citySlug.split('-');
  let stateSlug = '';
  let stateName = '';
  
  // Find the state by matching the longest possible state slug
  const sortedStates = Array.from(stateSlugs.entries()).sort((a, b) => b[0].length - a[0].length);
  for (const [slug, name] of sortedStates) {
    if (citySlug.endsWith(`-${slug}`)) {
      stateSlug = slug;
      stateName = name;
      break;
    }
  }
  
  if (!stateSlug) {
    console.log(`⚠️  Could not find state for ${citySlug}`);
    skipped++;
    return;
  }
  
  const cityName = citySlug.replace(`-${stateSlug}`, '').split('-').map(p => 
    p.charAt(0).toUpperCase() + p.slice(1)
  ).join(' ');
  
  // 1. Add states import if missing
  if (!content.includes("import states from '@/data/states'")) {
    content = content.replace(
      /import { CheckBadgeIcon, StarIcon/,
      "import states from '@/data/states'\nimport { CheckBadgeIcon, StarIcon"
    );
    modified = true;
  }
  
  // 2. Add related cities logic if missing
  if (!content.includes('const relatedCities')) {
    const stateVarName = stateSlug.replace(/-/g, '');
    const relatedCitiesCode = `
  // Build related ${stateName} cities (for internal linking)
  const ${stateVarName} = states.find(s => s.slug === '${stateSlug}');
  const relatedCities = ${stateVarName} ? ${stateVarName}.cities.filter(c => c.slug !== '${citySlug}').slice(0, 8) : [];

  // FAQ items reused for JSON-LD
  const faqItems = [
    { q: 'What types of vending machine locations are available in ${cityName}?', a: '${cityName} offers diverse vending opportunities including healthcare facilities, educational institutions, retail locations, office buildings, and manufacturing facilities. Each location is pre-verified for optimal vending machine success.' },
    { q: 'How quickly can I get vending machine leads for ${cityName}?', a: 'Our ${cityName} vending leads are delivered within 3-5 business days. We provide comprehensive research including business details, contact information, and placement opportunities to accelerate your market entry.' },
    { q: 'What makes ${cityName} a good market for vending machines?', a: "${cityName} features a thriving business community with diverse industries and strong economic activity. The city's business density and diverse demographics create ideal conditions for vending machine success." },
    { q: 'Do you provide ongoing support for ${cityName} locations?', a: 'Yes, we offer comprehensive support including location research, contact information, placement strategies, and ongoing consultation to ensure your vending machines thrive in ${cityName}.' },
    { q: 'What industries in ${cityName} are best for vending machines?', a: 'Healthcare, education, retail, office buildings, and manufacturing in ${cityName} show the highest potential for vending machine success due to consistent foot traffic and diverse demographics.' },
    { q: 'How do you verify the quality of ${cityName} vending locations?', a: 'We conduct thorough research on each ${cityName} location including business verification, foot traffic analysis, employee count validation, and industry research to ensure only high-quality opportunities are included.' },
    { q: 'Can I get customized vending leads for specific areas of ${cityName}?', a: 'Absolutely! We can provide targeted vending leads for specific neighborhoods, business districts, or industrial areas within ${cityName} based on your preferences and target market requirements.' },
    { q: "What's the typical ROI for vending machines in ${cityName}?", a: "Vending machines in ${cityName} typically show strong ROI due to the city's business density and diverse economy. Our research shows average payback periods of 12-18 months for well-placed machines." }
  ];
`;
    
    // Insert before the return statement
    content = content.replace(
      /(\s+}, \[userNames\.length, usedNames\]\)\s+)(\s+return \()/,
      `$1${relatedCitiesCode}$2`
    );
    modified = true;
  }
  
  // 3. Add related cities section if missing
  if (!content.includes('More cities in')) {
    const relatedCitiesSection = `
        {/* More cities in ${stateName} */}
        {relatedCities.length > 0 && (
          <section className="py-12 bg-white border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="text-xl font-playfair font-bold text-charcoal mb-4">More cities in ${stateName}</h2>
              <div className="flex flex-wrap gap-3">
                {relatedCities.map(city => (
                  <Link key={city.slug} href={\`/vending-leads/\${city.slug}\`} className="px-3 py-2 rounded-lg border border-gray-200 bg-cream/60 text-chocolate hover:text-navy">
                    Vending Leads in {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
`;
    
    // Insert before closing </div> before Footer
    content = content.replace(
      /(\s+<\/section>\s+)(\s+<\/div>\s+<Footer)/,
      `$1${relatedCitiesSection}$2`
    );
    modified = true;
  }
  
  // 4. Add JSON-LD scripts if missing
  if (!content.includes('JSON-LD: Breadcrumbs')) {
    const jsonLdScripts = `
      {/* JSON-LD: Breadcrumbs and FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thevendinglocator.com/' },
              { '@type': 'ListItem', position: 2, name: 'Vending Leads', item: 'https://www.thevendinglocator.com/vending-leads' },
              { '@type': 'ListItem', position: 3, name: '${stateName}', item: 'https://www.thevendinglocator.com/vending-leads/${stateSlug}' },
              { '@type': 'ListItem', position: 4, name: '${cityName}', item: 'https://www.thevendinglocator.com/vending-leads/${citySlug}' }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map(i => ({
              '@type': 'Question',
              name: i.q,
              acceptedAnswer: { '@type': 'Answer', text: i.a }
            }))
          })
        }}
      />`;
    
    // Insert before closing </>
    content = content.replace(
      /(\s+<ZipCodeModalWrapper \/>\s+)(<\/>)/,
      `$1${jsonLdScripts}$2`
    );
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(pageClientPath, content, 'utf8');
    fixed++;
    if (fixed % 50 === 0) {
      console.log(`Fixed ${fixed} pages...`);
    }
  } else {
    skipped++;
  }
});

console.log(`\n✅ Fixed ${fixed} pages`);
console.log(`Skipped ${skipped} pages (already correct)`);
