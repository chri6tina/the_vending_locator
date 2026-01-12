const fs = require('fs');
const path = require('path');

// Read missing cities
const missingCities = JSON.parse(fs.readFileSync('cities_needing_pages.json', 'utf8'));
const citiesToCreate = missingCities.slice(0, 500); // Take first 500

console.log(`Creating ${citiesToCreate.length} vending-leads pages...`);

// Read Manchester template
const manchesterTemplate = fs.readFileSync(
  path.join(__dirname, '..', 'src', 'app', '_city-pages', 'vending-leads', 'manchester-new-hampshire', 'pageClient.tsx'),
  'utf8'
);

const manchesterPageTemplate = fs.readFileSync(
  path.join(__dirname, '..', 'src', 'app', '_city-pages', 'vending-leads', 'manchester-new-hampshire', 'page.tsx'),
  'utf8'
);

// Helper function to extract state name from slug
function getStateFromSlug(slug) {
  const parts = slug.split('-');
  // Last 1-2 parts are usually the state
  // Try to match common state patterns
  const stateSlug = parts.slice(-2).join('-');
  
  // Map common state slugs to display names
  const stateMap = {
    'new-hampshire': 'New Hampshire',
    'new-jersey': 'New Jersey',
    'new-mexico': 'New Mexico',
    'new-york': 'New York',
    'north-carolina': 'North Carolina',
    'north-dakota': 'North Dakota',
    'rhode-island': 'Rhode Island',
    'south-carolina': 'South Carolina',
    'south-dakota': 'South Dakota',
    'west-virginia': 'West Virginia',
    'washington-dc': 'Washington DC'
  };
  
  if (stateMap[stateSlug]) {
    return stateMap[stateSlug];
  }
  
  // Capitalize single-word states
  const singleWordState = parts[parts.length - 1];
  return singleWordState.charAt(0).toUpperCase() + singleWordState.slice(1);
}

// Helper function to generate city display name from slug
function getCityDisplayName(slug) {
  const parts = slug.split('-');
  // Remove state parts (last 1-2 parts)
  const cityParts = parts.slice(0, -1);
  return cityParts.map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join(' ');
}

// Helper function to generate function name
function getFunctionName(cityName, stateName) {
  const cityClean = cityName.replace(/\s+/g, '').replace(/-/g, '');
  const stateClean = stateName.replace(/\s+/g, '').replace(/-/g, '');
  return cityClean + stateClean + 'VendingLeadsPage';
}

// Helper function to generate city data
function generateCityData(cityName, stateName) {
  // Estimate population, businesses, etc. based on city name length and common patterns
  // These are placeholders - you may want to enhance with real data
  return {
    name: cityName,
    state: stateName,
    population: '50K+',
    businesses: '1K-3K',
    industries: '6-10',
    verifiedLocations: '50-150',
    rating: '4.7/5',
    description: `${cityName} offers diverse business opportunities for vending machine placement`
  };
}

// Helper function to generate FAQs with proper apostrophe escaping
function generateFAQs(cityName, stateName) {
  const cityEscaped = cityName.replace(/'/g, "\\'");
  const stateEscaped = stateName.replace(/'/g, "\\'");
  
  return [
    {
      q: `What types of vending machine locations are available in ${cityName}?`,
      a: `${cityName} offers diverse vending opportunities including healthcare facilities, educational institutions, retail locations, office buildings, and manufacturing facilities. Each location is pre-verified for optimal vending machine success.`
    },
    {
      q: `How quickly can I get vending machine leads for ${cityName}?`,
      a: `Our ${cityName} vending leads are delivered within 3-5 business days. We provide comprehensive research including business details, contact information, and placement opportunities to accelerate your market entry.`
    },
    {
      q: `What makes ${cityName} a good market for vending machines?`,
      a: `${cityName} features a thriving business community with diverse industries and strong economic activity. The city's business density and diverse demographics create ideal conditions for vending machine success.`.replace(/city's/g, "city\\'s")
    },
    {
      q: `Do you provide ongoing support for ${cityName} locations?`,
      a: `Yes, we offer comprehensive support including location research, contact information, placement strategies, and ongoing consultation to ensure your vending machines thrive in ${cityName}.`
    },
    {
      q: `What industries in ${cityName} are best for vending machines?`,
      a: `Healthcare, education, retail, office buildings, and manufacturing in ${cityName} show the highest potential for vending machine success due to consistent foot traffic and diverse demographics.`
    },
    {
      q: `How do you verify the quality of ${cityName} vending locations?`,
      a: `We conduct thorough research on each ${cityName} location including business verification, foot traffic analysis, employee count validation, and industry research to ensure only high-quality opportunities are included.`
    },
    {
      q: `Can I get customized vending leads for specific areas of ${cityName}?`,
      a: `Absolutely! We can provide targeted vending leads for specific neighborhoods, business districts, or industrial areas within ${cityName} based on your preferences and target market requirements.`
    },
    {
      q: `What's the typical ROI for vending machines in ${cityName}?`,
      a: `Vending machines in ${cityName} typically show strong ROI due to the city's business density and diverse economy. Our research shows average payback periods of 12-18 months for well-placed machines.`.replace(/city's/g, "city\\'s").replace(/What's/g, "What\\'s")
    }
  ];
}

// Helper function to escape apostrophes in strings
function escapeApostrophes(str) {
  return str.replace(/'/g, "\\'");
}

// Process each city
let created = 0;
let errors = [];

citiesToCreate.forEach((city, index) => {
  try {
    const cityName = getCityDisplayName(city.slug);
    const stateName = getStateFromSlug(city.slug);
    const functionName = getFunctionName(cityName, stateName);
    const cityData = generateCityData(cityName, stateName);
    const faqs = generateFAQs(cityName, stateName);
    
    // Get state slug for related cities
    const stateSlug = city.slug.split('-').slice(-2).join('-');
    
    // Create directory
    const cityDir = path.join(__dirname, '..', 'src', 'app', '_city-pages', 'vending-leads', city.slug);
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }
    
    // Generate pageClient.tsx
    let pageClient = manchesterTemplate
      .replace(/ManchesterNewHampshireVendingLeadsPage/g, functionName)
      .replace(/const cityDisplayName = 'Manchester';/g, `const cityDisplayName = '${cityName}';`)
      .replace(/const stateDisplayName = 'New Hampshire';/g, `const stateDisplayName = '${stateName}';`)
      .replace(/const cityData = \{[\s\S]*?\};/g, `const cityData = ${JSON.stringify(cityData, null, 2).replace(/"/g, "'")};`)
      .replace(/const faqItems = \[[\s\S]*?\];/g, `const faqItems = ${JSON.stringify(faqs, null, 2).replace(/"/g, "'")};`)
      .replace(/manchester-new-hampshire/g, city.slug)
      .replace(/new-hampshire/g, stateSlug)
      .replace(/Manchester/g, cityName)
      .replace(/New Hampshire/g, stateName)
      .replace(/Mike from Manchester/g, `Mike from ${cityName}`)
      .replace(/Sarah in Downtown/g, `Sarah in ${cityName}`)
      .replace(/David in Manchester/g, `David in ${cityName}`)
      .replace(/Lisa in Manchester/g, `Lisa in ${cityName}`)
      .replace(/Tom in Manchester/g, `Tom in ${cityName}`)
      .replace(/Jennifer in Manchester/g, `Jennifer in ${cityName}`)
      .replace(/Robert in Manchester/g, `Robert in ${cityName}`)
      .replace(/Amanda in Manchester/g, `Amanda in ${cityName}`)
      .replace(/Chris in Manchester/g, `Chris in ${cityName}`)
      .replace(/Maria in Manchester/g, `Maria in ${cityName}`)
      .replace(/James in Manchester/g, `James in ${cityName}`)
      .replace(/Emily in Manchester/g, `Emily in ${cityName}`);
    
    // Fix apostrophes in FAQs
    faqs.forEach(faq => {
      const qEscaped = escapeApostrophes(faq.q);
      const aEscaped = escapeApostrophes(faq.a);
      pageClient = pageClient.replace(
        new RegExp(escapeRegex(faq.q), 'g'),
        qEscaped
      );
      pageClient = pageClient.replace(
        new RegExp(escapeRegex(faq.a), 'g'),
        aEscaped
      );
    });
    
    // Generate page.tsx
    const pageContent = manchesterPageTemplate
      .replace(/Manchester, New Hampshire/g, `${cityName}, ${stateName}`)
      .replace(/manchester-new-hampshire/g, city.slug)
      .replace(/Manchester New Hampshire/g, `${cityName} ${stateName}`)
      .replace(/Manchester/g, cityName)
      .replace(/New Hampshire/g, stateName);
    
    // Write files
    fs.writeFileSync(path.join(cityDir, 'pageClient.tsx'), pageClient);
    fs.writeFileSync(path.join(cityDir, 'page.tsx'), pageContent);
    
    created++;
    
    if ((index + 1) % 50 === 0) {
      console.log(`  Created ${index + 1}/${citiesToCreate.length} pages...`);
    }
  } catch (error) {
    errors.push({ city: city.slug, error: error.message });
    console.error(`Error creating ${city.slug}:`, error.message);
  }
});

console.log(`\n✅ Created ${created} pages successfully!`);
if (errors.length > 0) {
  console.log(`\n⚠️  ${errors.length} errors occurred:`);
  errors.forEach(e => console.log(`  - ${e.city}: ${e.error}`));
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
