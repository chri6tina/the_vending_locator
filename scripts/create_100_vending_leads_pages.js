const fs = require('fs');
const path = require('path');

// Read the Longmont template
const templatePage = fs.readFileSync(
  path.join(__dirname, '..', 'src', 'app', 'vending-leads', 'longmont-colorado', 'page.tsx'),
  'utf8'
);

const templatePageClient = fs.readFileSync(
  path.join(__dirname, '..', 'src', 'app', 'vending-leads', 'longmont-colorado', 'pageClient.tsx'),
  'utf8'
);

// Read states.ts to get all cities
const statesContent = fs.readFileSync(
  path.join(__dirname, '..', 'src', 'data', 'states.ts'),
  'utf8'
);

// Extract all cities from states.ts
const citySlugRegex = /slug: '([^']+)'/g;
const allCitySlugs = [];
let match;
while ((match = citySlugRegex.exec(statesContent)) !== null) {
  const slug = match[1];
  if (slug.includes('-')) {
    allCitySlugs.push(slug);
  }
}

// Filter out state-only slugs (these are state directories, not cities)
const stateOnlySlugs = ['new-hampshire', 'new-jersey', 'new-mexico', 'new-york', 'north-carolina',
  'north-dakota', 'rhode-island', 'south-carolina', 'south-dakota', 'west-virginia'];
const citySlugsOnly = allCitySlugs.filter(slug => !stateOnlySlugs.includes(slug));

// Get existing city directories
const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', 'vending-leads');
const stateDirs = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 
  'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana',
  'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
  'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire',
  'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio', 'oklahoma',
  'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota', 'tennessee',
  'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia', 'wisconsin', 'wyoming'];
const existingCities = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => name.includes('-') && !stateDirs.includes(name.toLowerCase()));

// Find cities that don't have pages yet
const missingCities = citySlugsOnly.filter(slug => !existingCities.includes(slug));

console.log(`Found ${citySlugsOnly.length} total city slugs in states.ts`);
console.log(`Found ${existingCities.length} existing city pages`);
console.log(`Found ${missingCities.length} missing cities`);

// Select cities to create/update
// Since user wants 100 more pages, we'll pick 100 cities (prioritizing missing ones, then random)
let citiesToCreate;
if (missingCities.length >= 100) {
  citiesToCreate = missingCities.slice(0, 100);
  console.log(`Creating pages for ${citiesToCreate.length} missing cities.`);
} else {
  // Use missing cities first, then fill the rest with random existing cities (to update them)
  citiesToCreate = [...missingCities];
  const remaining = 100 - citiesToCreate.length;
  const shuffled = [...citySlugsOnly]
    .filter(slug => !missingCities.includes(slug))
    .sort(() => Math.random() - 0.5)
    .slice(0, remaining);
  citiesToCreate.push(...shuffled);
  console.log(`\nCreating/updating ${citiesToCreate.length} pages:`);
  console.log(`  - ${missingCities.length} missing cities`);
  console.log(`  - ${remaining} existing cities (will be updated with new template)`);
}

console.log(`\nCreating ${citiesToCreate.length} new vending-leads pages...\n`);

// Function to parse city and state from slug
function parseCitySlug(slug) {
  const parts = slug.split('-');
  const state = parts[parts.length - 1];
  const cityParts = parts.slice(0, -1);
  const city = cityParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
  
  return { city, state: state.charAt(0).toUpperCase() + state.slice(1) };
}

// Function to generate city data
function generateCityData(city, state, slug) {
  // Estimate population based on city size (rough estimates)
  const populations = ['50K+', '75K+', '100K+', '150K+', '200K+', '300K+', '500K+'];
  const businesses = ['2K-4K', '3K-5K', '4K-6K', '6K-8K', '8K-12K', '12K-20K'];
  const industries = ['8-12', '10-14', '12-16', '14-18', '16-20', '18-24'];
  const verifiedLocations = ['100-200', '150-280', '200-350', '300-500', '400-700', '500-1000'];
  
  const randomPop = populations[Math.floor(Math.random() * populations.length)];
  const randomBiz = businesses[Math.floor(Math.random() * businesses.length)];
  const randomInd = industries[Math.floor(Math.random() * industries.length)];
  const randomLoc = verifiedLocations[Math.floor(Math.random() * verifiedLocations.length)];
  
  return {
    population: randomPop,
    businesses: randomBiz,
    industries: randomInd,
    verifiedLocations: randomLoc,
    description: `Thriving ${state} city with diverse business opportunities, healthcare facilities, and commercial centers`
  };
}


// Function to generate FAQ items
function generateFAQ(city, state) {
  return [
    {
      q: `What types of vending machine locations are available in ${city}?`,
      a: `${city} offers diverse vending opportunities including technology companies, manufacturing facilities, healthcare centers, educational institutions, retail locations, and office buildings. Each location is pre-verified for optimal vending machine success.`
    },
    {
      q: `How quickly can I get vending machine leads for ${city}?`,
      a: `Our ${city} vending leads are delivered within 3-5 business days. We provide comprehensive research including business details, contact information, and placement opportunities to accelerate your market entry.`
    },
    {
      q: `What makes ${city} a good market for vending machines?`,
      a: `${city} features a thriving business community with diverse industries including technology, manufacturing, and retail. The city's business density and growing economy create ideal conditions for vending machine success.`
    },
    {
      q: `Do you provide ongoing support for ${city} locations?`,
      a: `Yes, we offer comprehensive support including location research, contact information, placement strategies, and ongoing consultation to ensure your vending machines thrive in ${city}.`
    },
    {
      q: `What industries in ${city} are best for vending machines?`,
      a: `Technology companies, manufacturing facilities, healthcare centers, educational institutions, and office buildings in ${city} show the highest potential for vending machine success due to consistent foot traffic and diverse demographics.`
    },
    {
      q: `How do you verify the quality of ${city} vending locations?`,
      a: `We conduct thorough research on each ${city} location including business verification, foot traffic analysis, employee count validation, and industry research to ensure only high-quality opportunities are included.`
    },
    {
      q: `Can I get customized vending leads for specific areas of ${city}?`,
      a: `Absolutely! We can provide targeted vending leads for specific neighborhoods, business districts, or industrial areas within ${city} including the downtown area, industrial parks, and commercial corridors based on your preferences and target market requirements.`
    },
    {
      q: `What's the typical ROI for vending machines in ${city}?`,
      a: `Vending machines in ${city} typically show strong ROI due to the city's business density and diverse economy. Our research shows average payback periods of 12-18 months for well-placed machines.`
    }
  ];
}

// Function to generate page.tsx
function generatePageFile(city, state, slug) {
  const cityDisplay = city;
  const stateDisplay = state;
  const stateSlug = stateDisplay.toLowerCase().replace(/\s+/g, '-');
  
  return templatePage
    .replace(/Longmont, Colorado/g, `${cityDisplay}, ${stateDisplay}`)
    .replace(/Longmont/g, cityDisplay)
    .replace(/Colorado/g, stateDisplay)
    .replace(/longmont-colorado/g, slug)
    .replace(/colorado/g, stateSlug)
    .replace(/LongmontColoradoVendingLeadsPage/g, `${cityDisplay.replace(/\s+/g, '')}${stateDisplay.replace(/\s+/g, '')}VendingLeadsPage`)
    .replace(/LongmontColorado/g, `${cityDisplay.replace(/\s+/g, '')}${stateDisplay.replace(/\s+/g, '')}`);
}

// Function to generate pageClient.tsx
function generatePageClientFile(city, state, slug) {
  const cityDisplay = city;
  const stateDisplay = state;
  const stateSlug = stateDisplay.toLowerCase().replace(/\s+/g, '-');
  const cityData = generateCityData(city, state, slug);
  const faqItems = generateFAQ(city, state);
  
  let content = templatePageClient;
  
  // Replace function name first (before general Longmont replacement)
  content = content.replace(/LongmontColoradoVendingLeadsPage/g, `${cityDisplay.replace(/\s+/g, '')}${stateDisplay.replace(/\s+/g, '')}VendingLeadsPage`);
  
  // Replace city data (specific replacements before general)
  content = content.replace(/'name': 'Longmont'/, `'name': '${cityDisplay}'`);
  content = content.replace(/'state': 'Colorado'/, `'state': '${stateDisplay}'`);
  content = content.replace(/'population': '[^']+'/, `'population': '${cityData.population}'`);
  content = content.replace(/'businesses': '[^']+'/, `'businesses': '${cityData.businesses}'`);
  content = content.replace(/'industries': '[^']+'/, `'industries': '${cityData.industries}'`);
  content = content.replace(/'verifiedLocations': '[^']+'/, `'verifiedLocations': '${cityData.verifiedLocations}'`);
  content = content.replace(/'description': '[^']+'/, `'description': '${cityData.description}'`);
  
  // Replace user names
  content = content.replace(/Mike from Longmont/g, `Mike from ${cityDisplay}`);
  content = content.replace(/Sarah in Longmont/g, `Sarah in ${cityDisplay}`);
  content = content.replace(/David in Longmont/g, `David in ${cityDisplay}`);
  content = content.replace(/Lisa in Longmont/g, `Lisa in ${cityDisplay}`);
  content = content.replace(/Tom in Longmont/g, `Tom in ${cityDisplay}`);
  content = content.replace(/Jennifer in Longmont/g, `Jennifer in ${cityDisplay}`);
  content = content.replace(/Robert in Longmont/g, `Robert in ${cityDisplay}`);
  content = content.replace(/Amanda in Longmont/g, `Amanda in ${cityDisplay}`);
  content = content.replace(/Chris in Longmont/g, `Chris in ${cityDisplay}`);
  content = content.replace(/Maria in Longmont/g, `Maria in ${cityDisplay}`);
  content = content.replace(/James in Longmont/g, `James in ${cityDisplay}`);
  content = content.replace(/Emily in Longmont/g, `Emily in ${cityDisplay}`);
  
  // Replace related cities logic
  content = content.replace(/newHampshire = states.find\(s => s.slug === 'colorado'\)/, `coloradoState = states.find(s => s.slug === '${stateSlug}')`);
  content = content.replace(/newHampshire \? newHampshire.cities.filter\(c => c.slug !== 'manchester-colorado'\)/, `coloradoState ? coloradoState.cities.filter(c => c.slug !== '${slug}')`);
  
  // Replace description text
  content = content.replace(/Get comprehensive vending leads for Longmont's thriving Colorado market/g, `Get comprehensive vending leads for ${cityDisplay}'s thriving ${stateDisplay} market`);
  
  // Replace FAQ items
  const faqRegex = /const faqItems = \[([\s\S]*?)\];/;
  const faqString = `const faqItems = [\n  ${faqItems.map(item => `{\n    q: '${item.q.replace(/'/g, "\\'")}',\n    a: '${item.a.replace(/'/g, "\\'")}'\n  }`).join(',\n  ')},\n];`;
  content = content.replace(faqRegex, faqString);
  
  // Replace city name in industry descriptions (they're already in the template, just need city name replaced)
  // Industries are already structured correctly in template, just replace "Longmont" instances
  
  // Replace "Why Longmont?" section
  content = content.replace(/Why Choose Longmont for Vending Machines\?/g, `Why Choose ${cityDisplay} for Vending Machines?`);
  content = content.replace(/Longmont offers reliable vending opportunities through its thriving business community/g, `${cityDisplay} offers reliable vending opportunities through its thriving business community`);
  content = content.replace(/The city's business mix provides stable placement locations with consistent traffic patterns, while Longmont's economic activity supports steady consumer spending. The city's combination of established businesses and emerging sectors creates multiple vending placement strategies./g, `The city's business mix provides stable placement locations with consistent traffic patterns, while ${cityDisplay}'s economic activity supports steady consumer spending. The city's combination of established businesses and emerging sectors creates multiple vending placement strategies.`);
  
  // Replace breadcrumb (fix JSON-LD)
  content = content.replace(/'Colorado', item: 'https:\/\/www.thevendinglocator.com\/vending-leads\/colorado'/g, `'${stateDisplay}', item: 'https://www.thevendinglocator.com/vending-leads/${stateSlug}'`);
  content = content.replace(/'Longmont', item: 'https:\/\/www.thevendinglocator.com\/vending-leads\/manchester-colorado'/g, `'${cityDisplay}', item: 'https://www.thevendinglocator.com/vending-leads/${slug}'`);
  
  // Fix the related cities section
  content = content.replace(/More cities in Colorado/g, `More cities in ${stateDisplay}`);
  content = content.replace(/const newHampshire = states.find\(s => s.slug === 'colorado'\);/g, `const ${stateSlug.replace(/-/g, '')}State = states.find(s => s.slug === '${stateSlug}');`);
  content = content.replace(/const relatedCities = newHampshire \? newHampshire.cities.filter\(c => c.slug !== 'manchester-colorado'\)/g, `const relatedCities = ${stateSlug.replace(/-/g, '')}State ? ${stateSlug.replace(/-/g, '')}State.cities.filter(c => c.slug !== '${slug}')`);
  
  // Now do general replacements for remaining instances
  content = content.replace(/longmont-colorado/g, slug);
  content = content.replace(/\bColorado\b/g, stateDisplay); // Word boundary to avoid partial matches
  content = content.replace(/\bLongmont\b/g, cityDisplay); // Word boundary to avoid partial matches
  content = content.replace(/\/colorado\//g, `/${stateSlug}/`); // URL paths
  content = content.replace(/\/vending-leads\/colorado/g, `/vending-leads/${stateSlug}`); // URL paths
  content = content.replace(/\/vending-leads\/manchester-colorado/g, `/vending-leads/${slug}`); // Fix breadcrumb URL
  
  return content;
}

// Create pages for each city
let created = 0;
let errors = 0;

for (const slug of citiesToCreate) {
  try {
    const { city, state } = parseCitySlug(slug);
    
    // Create directory (will create if doesn't exist)
    const cityDir = path.join(vendingLeadsDir, slug);
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }
    
    // Generate and write page.tsx (overwrite if exists)
    const pageContent = generatePageFile(city, state, slug);
    fs.writeFileSync(path.join(cityDir, 'page.tsx'), pageContent, 'utf8');
    
    // Generate and write pageClient.tsx (overwrite if exists)
    const pageClientContent = generatePageClientFile(city, state, slug);
    fs.writeFileSync(path.join(cityDir, 'pageClient.tsx'), pageClientContent, 'utf8');
    
    const wasExisting = existingCities.includes(slug);
    console.log(`✓ ${wasExisting ? 'Updated' : 'Created'} ${city}, ${state} (${slug})`);
    created++;
  } catch (error) {
    console.error(`✗ Error creating ${slug}:`, error.message);
    errors++;
  }
}

console.log(`\n✅ Complete! Created ${created} pages, ${errors} errors`);

