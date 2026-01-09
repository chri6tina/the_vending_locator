const fs = require('fs');
const path = require('path');

// Generate mapping of all city slugs to their city/state names
// This preserves all city data while allowing dynamic routing

function generateCityMapping(directory, routeType) {
  const mapping = {};
  const cityDirs = fs.readdirSync(directory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('_') && dirent.name !== 'layout.tsx')
    .map(dirent => dirent.name);

  // State name mappings for multi-word states
  const stateMappings = {
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

  cityDirs.forEach(slug => {
    // Skip state pages
    const states = ['california', 'texas', 'florida', 'alabama', 'alaska', 'arizona', 'arkansas', 'colorado', 'connecticut', 'delaware', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota', 'tennessee', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia', 'wisconsin', 'wyoming', 'washington-dc'];
    
    if (states.includes(slug.toLowerCase())) {
      return; // Skip state pages
    }

    // Extract city and state from slug (e.g., "jacksonville-florida" or "aberdeen-south-dakota")
    const parts = slug.split('-');
    if (parts.length < 2) return;

    // Try to match multi-word states first (e.g., "south-dakota", "new-york")
    let statePart = '';
    let cityParts = [];
    
    // Check for multi-word states (2-3 words)
    if (parts.length >= 3) {
      // Try last 2 words as state (e.g., "south-dakota", "west-virginia")
      const twoWordState = parts.slice(-2).join('-');
      if (stateMappings[twoWordState] || states.includes(twoWordState)) {
        statePart = twoWordState;
        cityParts = parts.slice(0, -2);
      } else {
        // Try last 3 words as state (e.g., "new-hampshire")
        const threeWordState = parts.slice(-3).join('-');
        if (stateMappings[threeWordState] || states.includes(threeWordState)) {
          statePart = threeWordState;
          cityParts = parts.slice(0, -3);
        } else {
          // Default: last word is state
          statePart = parts[parts.length - 1];
          cityParts = parts.slice(0, -1);
        }
      }
    } else {
      // Simple case: last word is state
      statePart = parts[parts.length - 1];
      cityParts = parts.slice(0, -1);
    }
    
    // Convert to display names
    const city = cityParts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    const state = stateMappings[statePart] || statePart.charAt(0).toUpperCase() + statePart.slice(1);
    
    mapping[slug] = { city, state, slug };
  });

  return mapping;
}

// Generate mappings for all route types
const taxServicesDir = path.join(__dirname, '..', 'src', 'app', 'tax-services');
const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', 'vending-leads');
const vendingServicesDir = path.join(__dirname, '..', 'src', 'app', 'vending-services');

const taxServicesMapping = generateCityMapping(taxServicesDir, 'tax-services');
const vendingLeadsMapping = generateCityMapping(vendingLeadsDir, 'vending-leads');
const vendingServicesMapping = generateCityMapping(vendingServicesDir, 'vending-services');

// Save mappings
const outputDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outputDir, 'tax-services-cities.ts'),
  `// Auto-generated city mapping for tax-services routes
export const taxServicesCities = ${JSON.stringify(taxServicesMapping, null, 2)} as const;

export function getCityInfo(slug: string) {
  return taxServicesCities[slug as keyof typeof taxServicesCities];
}

export function getAllTaxServicesSlugs() {
  return Object.keys(taxServicesCities);
}
`
);

fs.writeFileSync(
  path.join(outputDir, 'vending-leads-cities.ts'),
  `// Auto-generated city mapping for vending-leads routes
export const vendingLeadsCities = ${JSON.stringify(vendingLeadsMapping, null, 2)} as const;

export function getCityInfo(slug: string) {
  return vendingLeadsCities[slug as keyof typeof vendingLeadsCities];
}

export function getAllVendingLeadsSlugs() {
  return Object.keys(vendingLeadsCities);
}
`
);

fs.writeFileSync(
  path.join(outputDir, 'vending-services-cities.ts'),
  `// Auto-generated city mapping for vending-services routes
export const vendingServicesCities = ${JSON.stringify(vendingServicesMapping, null, 2)} as const;

export function getCityInfo(slug: string) {
  return vendingServicesCities[slug as keyof typeof vendingServicesCities];
}

export function getAllVendingServicesSlugs() {
  return Object.keys(vendingServicesCities);
}
`
);

console.log(`✅ Generated city mappings:`);
console.log(`   - Tax Services: ${Object.keys(taxServicesMapping).length} cities`);
console.log(`   - Vending Leads: ${Object.keys(vendingLeadsMapping).length} cities`);
console.log(`   - Vending Services: ${Object.keys(vendingServicesMapping).length} cities`);

