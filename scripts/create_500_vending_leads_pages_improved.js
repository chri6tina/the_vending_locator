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

// Read states.ts to get proper state names
const statesFile = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'states.ts'), 'utf8');

// Helper function to extract state name and slug from city slug
function getStateInfo(citySlug) {
  const parts = citySlug.split('-');
  
  // Try to match state slug patterns (last 1-2 parts)
  let stateSlug = parts.slice(-1).join('-');
  let stateName = parts[parts.length - 1].charAt(0).toUpperCase() + parts[parts.length - 1].slice(1);
  
  // Check for two-word states
  const twoWordStates = {
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
  
  const twoWordSlug = parts.slice(-2).join('-');
  if (twoWordStates[twoWordSlug]) {
    stateSlug = twoWordSlug;
    stateName = twoWordStates[twoWordSlug];
  }
  
  return { stateSlug, stateName };
}

// Helper function to generate city display name from slug
function getCityDisplayName(slug) {
  const parts = slug.split('-');
  // Remove state parts (last 1-2 parts)
  const stateParts = parts.slice(-2);
  const twoWordState = ['new', 'north', 'south', 'west', 'rhode', 'washington'].includes(stateParts[0]);
  const cityParts = twoWordState ? parts.slice(0, -2) : parts.slice(0, -1);
  
  return cityParts.map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join(' ');
}

// Helper function to generate function name
function getFunctionName(cityName, stateName) {
  const cityClean = cityName.replace(/\s+/g, '').replace(/-/g, '').replace(/'/g, '');
  const stateClean = stateName.replace(/\s+/g, '').replace(/-/g, '').replace(/'/g, '');
  return cityClean + stateClean + 'VendingLeadsPage';
}

// Helper function to generate city data
function generateCityData(cityName, stateName) {
  return {
    'name': cityName,
    'state': stateName,
    'population': '50K+',
    'businesses': '1K-3K',
    'industries': '6-10',
    'verifiedLocations': '50-150',
    'rating': '4.7/5',
    'description': `${cityName} offers diverse business opportunities for vending machine placement`
  };
}

// Helper function to generate FAQs with proper apostrophe escaping
function generateFAQs(cityName, stateName) {
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
      a: `${cityName} features a thriving business community with diverse industries and strong economic activity. The city's business density and diverse demographics create ideal conditions for vending machine success.`
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
      a: `Vending machines in ${cityName} typically show strong ROI due to the city's business density and diverse economy. Our research shows average payback periods of 12-18 months for well-placed machines.`
    }
  ];
}

// Process each city
let created = 0;
let errors = [];

citiesToCreate.forEach((city, index) => {
  try {
    const cityName = getCityDisplayName(city.slug);
    const { stateSlug, stateName } = getStateInfo(city.slug);
    const functionName = getFunctionName(cityName, stateName);
    const cityData = generateCityData(cityName, stateName);
    const faqs = generateFAQs(cityName, stateName);
    
    // Create directory
    const cityDir = path.join(__dirname, '..', 'src', 'app', '_city-pages', 'vending-leads', city.slug);
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }
    
    // Generate pageClient.tsx - use more precise replacements
    let pageClient = manchesterTemplate;
    
    // Replace function name
    pageClient = pageClient.replace(/ManchesterNewHampshireVendingLeadsPage/g, functionName);
    
    // Replace city and state display names
    pageClient = pageClient.replace(/const cityDisplayName = 'Manchester';/g, `const cityDisplayName = '${cityName}';`);
    pageClient = pageClient.replace(/const stateDisplayName = 'New Hampshire';/g, `const stateDisplayName = '${stateName}';`);
    
    // Replace cityData object - find the exact pattern
    const cityDataPattern = /const cityData = \{[\s\S]*?\};/;
    const cityDataReplacement = `const cityData = ${JSON.stringify(cityData, null, 2).replace(/"/g, "'")};`;
    pageClient = pageClient.replace(cityDataPattern, cityDataReplacement);
    
    // Replace user names array
    const userNamesPattern = /const \[userNames, setUserNames\] = useState\(\[[\s\S]*?\]\)/;
    const userNamesReplacement = `const [userNames, setUserNames] = useState([
    'Mike from ${cityName}', 'Sarah in ${cityName}', 'David in ${cityName}', 'Lisa in ${cityName}',
    'Tom in ${cityName}', 'Jennifer in ${cityName}', 'Robert in ${cityName}', 'Amanda in ${cityName}',
    'Chris in ${cityName}', 'Maria in ${cityName}', 'James in ${cityName}', 'Emily in ${cityName}'
  ])`;
    pageClient = pageClient.replace(userNamesPattern, userNamesReplacement);
    
    // Replace related cities section
    pageClient = pageClient.replace(/const newHampshire = states\.find\(s => s\.slug === 'new-hampshire'\);/g, `const ${stateSlug.replace(/-/g, '')} = states.find(s => s.slug === '${stateSlug}');`);
    pageClient = pageClient.replace(/const relatedCities = newHampshire \? newHampshire\.cities\.filter\(c => c\.slug !== 'manchester-new-hampshire'\)\.slice\(0, 8\) : \[\];/g, `const relatedCities = ${stateSlug.replace(/-/g, '')} ? ${stateSlug.replace(/-/g, '')}.cities.filter(c => c.slug !== '${city.slug}').slice(0, 8) : [];`);
    
    // Replace FAQ items
    const faqPattern = /const faqItems = \[[\s\S]*?\];/;
    const faqReplacement = `const faqItems = ${JSON.stringify(faqs, null, 2)
      .replace(/"/g, "'")
      .replace(/city's/g, "city\\'s")
      .replace(/What's/g, "What\\'s")
      .replace(/state's/g, "state\\'s")
      .replace(/town's/g, "town\\'s")
      .replace(/area's/g, "area\\'s")
      .replace(/neighborhood's/g, "neighborhood\\'s")
      .replace(/company's/g, "company\\'s")};`;
    pageClient = pageClient.replace(faqPattern, faqReplacement);
    
    // Replace all instances of Manchester with city name (but be careful not to replace in function names)
    pageClient = pageClient.replace(/\bManchester\b/g, cityName);
    pageClient = pageClient.replace(/\bNew Hampshire\b/g, stateName);
    
    // Replace slugs
    pageClient = pageClient.replace(/manchester-new-hampshire/g, city.slug);
    pageClient = pageClient.replace(/new-hampshire/g, stateSlug);
    
    // Replace value proposition paragraph
    const valuePropPattern = /Discover high-quality vending opportunities in Manchester, New Hampshire, with pre-qualified locations in office buildings, retail spaces, and transportation hubs\./;
    const valuePropReplacement = `Discover high-quality vending opportunities in ${cityName}, ${stateName}, with pre-qualified locations in office buildings, retail spaces, and transportation hubs.`;
    pageClient = pageClient.replace(valuePropPattern, valuePropReplacement);
    
    // Replace "Why Choose Manchester" section
    const whyChoosePattern = /Why Choose Manchester for Vending Machines\?/;
    pageClient = pageClient.replace(whyChoosePattern, `Why Choose ${cityName} for Vending Machines?`);
    
    const whyChooseDescPattern = /The Manchester market offers excellent vending opportunities through its combination of corporate headquarters, healthcare networks, and educational institutions\. High foot traffic areas and captive audiences create ideal conditions for vending success\./;
    const whyChooseDescReplacement = `The ${cityName} market offers excellent vending opportunities through its combination of corporate headquarters, healthcare networks, and educational institutions. High foot traffic areas and captive audiences create ideal conditions for vending success.`;
    pageClient = pageClient.replace(whyChooseDescPattern, whyChooseDescReplacement);
    
    // Replace business landscape descriptions
    const businessDescPatterns = [
      { pattern: /Healthcare institutions in Manchester offer/g, replacement: `Healthcare institutions in ${cityName} offer` },
      { pattern: /Manchester's schools, colleges, and universities create/g, replacement: `${cityName}'s schools, colleges, and universities create` },
      { pattern: /Industrial operations in Manchester feature/g, replacement: `Industrial operations in ${cityName} feature` },
      { pattern: /Retail locations throughout Manchester provide/g, replacement: `Retail locations throughout ${cityName} provide` },
      { pattern: /Corporate office buildings throughout Manchester feature/g, replacement: `Corporate office buildings throughout ${cityName} feature` },
      { pattern: /Airports, bus stations, and transit centers throughout Manchester generate/g, replacement: `Airports, bus stations, and transit centers throughout ${cityName} generate` }
    ];
    
    businessDescPatterns.forEach(({ pattern, replacement }) => {
      pageClient = pageClient.replace(pattern, replacement);
    });
    
    // Replace "More cities in New Hampshire" section
    pageClient = pageClient.replace(/More cities in New Hampshire/g, `More cities in ${stateName}`);
    
    // Replace JSON-LD breadcrumbs
    pageClient = pageClient.replace(/name: 'New Hampshire', item: 'https:\/\/www\.thevendinglocator\.com\/vending-leads\/new-hampshire'/g, `name: '${stateName}', item: 'https://www.thevendinglocator.com/vending-leads/${stateSlug}'`);
    pageClient = pageClient.replace(/name: 'Manchester', item: 'https:\/\/www\.thevendinglocator\.com\/vending-leads\/manchester-new-hampshire'/g, `name: '${cityName}', item: 'https://www.thevendinglocator.com/vending-leads/${city.slug}'`);
    
    // Generate page.tsx
    let pageContent = manchesterPageTemplate;
    pageContent = pageContent.replace(/Manchester, New Hampshire/g, `${cityName}, ${stateName}`);
    pageContent = pageContent.replace(/manchester-new-hampshire/g, city.slug);
    pageContent = pageContent.replace(/Manchester New Hampshire/g, `${cityName} ${stateName}`);
    
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
