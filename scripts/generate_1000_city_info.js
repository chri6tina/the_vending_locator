// Generate cityInfo entries to reach 1000 total cities
// Currently have 156, need 844 more

const fs = require('fs');
const path = require('path');

// Read the states data
const statesPath = path.join(__dirname, '../src/data/states.ts');
const statesContent = fs.readFileSync(statesPath, 'utf8');

// Extract city slugs from states.ts
const citySlugMatches = statesContent.matchAll(/{ name: '[^']+', slug: '([^']+)' }/g);
const allCitySlugs = Array.from(citySlugMatches).map(m => m[1]);

// Read existing cityInfo entries
const pagePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
const pageContent = fs.readFileSync(pagePath, 'utf8');

// Extract existing city slugs from cityInfo
const existingMatches = pageContent.matchAll(/^  '([a-z-]+)': \{/gm);
const existingCitySlugs = new Set(Array.from(existingMatches).map(m => m[1]));

// Find cities that need entries
const missingCities = allCitySlugs.filter(slug => !existingCitySlugs.has(slug));

// Take the next 844 cities (to reach 1000 total: 156 + 844 = 1000)
const citiesToAdd = missingCities.slice(0, 844);

console.log(`Total cities in states.ts: ${allCitySlugs.length}`);
console.log(`Cities with cityInfo entries: ${existingCitySlugs.size}`);
console.log(`Cities to add: ${citiesToAdd.length}`);
console.log(`Will reach total of: ${existingCitySlugs.size + citiesToAdd.length}`);

// State-specific permit templates
const permitTemplates = {
  'alabama': 'Alabama requires a state sales/use tax account. Register your business, collect/remit tax where applicable, and confirm county/city rules for food/beverage vending.',
  'alaska': 'Alaska requires state business registration. Confirm any local option or site policies and follow borough health guidance for food vending.',
  'arizona': 'Arizona requires a transaction privilege tax (TPT) license through the Department of Revenue. Register your business and confirm city/county health requirements for food and beverage vending.',
  'arkansas': 'Arkansas generally requires a sales and use tax permit through the Department of Finance & Administration (DFA). Register your business, collect tax where applicable, and verify any county health requirements for food and beverage vending.',
  'california': 'California requires a seller\'s permit from the State Board of Equalization (now CDTFA). Register your business, collect sales tax, and confirm city/county health department requirements for food/beverage vending machines.',
  'colorado': 'Colorado requires a sales tax license through the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'connecticut': 'Connecticut requires sales/use tax registration (DRS). Register your business and confirm city/county health requirements for food/beverage vending.',
  'delaware': 'Delaware has no state sales tax. Register your business and confirm city/county health requirements for food/beverage vending.',
  'florida': 'Florida requires a sales tax certificate from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'georgia': 'Georgia requires a sales tax certificate from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'hawaii': 'Hawaii requires a general excise tax license. Register your business and confirm city/county health requirements for food/beverage vending.',
  'idaho': 'Idaho requires a sales tax permit from the State Tax Commission. Register your business and confirm city/county health requirements for food/beverage vending.',
  'illinois': 'Illinois requires a sales tax permit from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'indiana': 'Indiana requires a sales tax permit from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'iowa': 'Iowa requires a sales tax permit from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'kansas': 'Kansas requires a sales tax permit from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'kentucky': 'Kentucky requires a sales tax permit from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'louisiana': 'Louisiana requires a sales tax permit from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'maine': 'Maine requires a sales tax permit from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'maryland': 'Maryland requires a sales tax permit from the Comptroller. Register your business and confirm city/county health requirements for food/beverage vending.',
  'massachusetts': 'Massachusetts requires sales/use tax registration (DOR). Register your business and confirm city/county health requirements for food/beverage vending.',
  'michigan': 'Michigan requires a sales tax permit from the Department of Treasury. Register your business and confirm city/county health requirements for food/beverage vending.',
  'minnesota': 'Minnesota requires a sales tax permit from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'mississippi': 'Mississippi requires a sales tax permit from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'missouri': 'Missouri requires a sales tax permit from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'montana': 'Montana has no statewide sales tax. Verify any local resort/option taxes and follow county health guidance for vending machines that sell food or beverages.',
  'nebraska': 'Nebraska requires a sales tax permit from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'nevada': 'Nevada requires a sales tax permit from the Department of Taxation. Register your business and confirm city/county health requirements for food/beverage vending.',
  'new-hampshire': 'New Hampshire has no state sales tax. Register your business and confirm city/county health requirements for food/beverage vending.',
  'new-jersey': 'New Jersey requires sales/use tax registration from the Division of Taxation. Register your business and confirm city/county health requirements for food/beverage vending.',
  'new-mexico': 'New Mexico requires a gross receipts tax permit from the Taxation and Revenue Department. Register your business and confirm city/county health requirements for food/beverage vending.',
  'new-york': 'New York requires a sales tax certificate from the Department of Taxation and Finance. Register your business and confirm city/county health requirements for food/beverage vending.',
  'north-carolina': 'North Carolina requires a sales tax permit from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'north-dakota': 'North Dakota requires a sales tax permit from the Office of State Tax Commissioner. Register your business and confirm city/county health requirements for food/beverage vending.',
  'ohio': 'Ohio requires a vendor\'s license from the Department of Taxation. Register your business and confirm city/county health requirements for food/beverage vending.',
  'oklahoma': 'Oklahoma requires a sales tax permit from the Tax Commission. Register your business and confirm city/county health requirements for food/beverage vending.',
  'oregon': 'Oregon has no state sales tax. Register your business and confirm city/county health requirements for food/beverage vending.',
  'pennsylvania': 'Pennsylvania requires a sales tax license from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'rhode-island': 'Rhode Island requires a sales tax permit from the Division of Taxation. Register your business and confirm city/county health requirements for food/beverage vending.',
  'south-carolina': 'South Carolina requires a sales tax license from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'south-dakota': 'South Dakota requires a sales tax license from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'tennessee': 'Tennessee requires a sales tax certificate from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'texas': 'Texas requires a sales tax permit from the Comptroller. Register your business and confirm city/county health requirements for food/beverage vending.',
  'utah': 'Utah requires a sales tax permit from the State Tax Commission. Register your business and confirm city/county health requirements for food/beverage vending.',
  'vermont': 'Vermont requires a sales tax permit from the Department of Taxes. Register your business and confirm city/county health requirements for food/beverage vending.',
  'virginia': 'Virginia requires a sales tax certificate from the Department of Taxation. Register your business and confirm city/county health requirements for food/beverage vending.',
  'washington': 'Washington requires a business license and sales tax registration from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'washington-dc': 'Washington DC requires a sales tax permit from the Office of Tax and Revenue. Register your business and confirm health requirements for food/beverage vending.',
  'west-virginia': 'West Virginia requires a sales tax certificate from the State Tax Department. Register your business and confirm city/county health requirements for food/beverage vending.',
  'wisconsin': 'Wisconsin requires a seller\'s permit from the Department of Revenue. Register your business and confirm city/county health requirements for food/beverage vending.',
  'wyoming': 'Wyoming has no state sales tax. Register your business and confirm city/county health requirements for food/beverage vending.'
};

// Generate cityInfo entry
function generateCityInfo(citySlug) {
  const state = citySlug.split('-').pop();
  const cityDisplay = citySlug.split('-').slice(0, -1).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  
  const permitNote = permitTemplates[state] || 'Register your business and obtain necessary permits. Confirm state and local sales tax requirements, and verify city/county health department rules for food/beverage vending.';
  
  // Generate demand drivers
  const demandDrivers = [
    'Healthcare campuses and clinics',
    'Downtown offices and corporate buildings',
    'Industrial and logistics facilities',
    'Education institutions and student housing',
    'Retail corridors and shopping centers'
  ];
  
  // Generate neighborhoods
  const neighborhoods = [
    'Downtown',
    'Medical District',
    'Industrial corridors',
    'University area',
    'Retail corridors'
  ];
  
  const seasonalNote = 'Plan service cadence based on local traffic patterns. Keep card readers active and monitor top SKUs for optimal restocking frequency.';
  
  const extraFaqs = [
    {
      q: 'What are the best locations to start?',
      a: `Begin with offices (50+ employees), medical clinics, schools, gyms, and logistics facilities in ${cityDisplay}. Validate sales, then expand to additional sites.`
    },
    {
      q: 'Do I need special permits?',
      a: 'Most jurisdictions require a general business license and sales tax permit. Food vending may need additional health approvals—confirm with your local health department.'
    }
  ];
  
  return `  '${citySlug}': {
    permitNotes:
      '${permitNote}',
    demandDrivers: [
      '${demandDrivers[0]}',
      '${demandDrivers[1]}',
      '${demandDrivers[2]}',
      '${demandDrivers[3]}',
      '${demandDrivers[4]}'
    ],
    neighborhoods: [
      '${neighborhoods[0]}',
      '${neighborhoods[1]}',
      '${neighborhoods[2]}',
      '${neighborhoods[3]}',
      '${neighborhoods[4]}'
    ],
    seasonalNote:
      '${seasonalNote}',
    extraFaqs: [
      {
        q: '${extraFaqs[0].q}',
        a: '${extraFaqs[0].a}'
      },
      {
        q: '${extraFaqs[1].q}',
        a: '${extraFaqs[1].a}'
      }
    ]
  }`;
}

// Generate all entries
const entries = citiesToAdd.map(city => generateCityInfo(city));

// Write to file
const output = entries.join(',\n');
fs.writeFileSync('scripts/generated_844_city_info_entries.txt', output, 'utf8');

console.log(`\n✅ Generated ${entries.length} entries written to scripts/generated_844_city_info_entries.txt`);
console.log(`\nFirst 10 cities: ${citiesToAdd.slice(0, 10).join(', ')}`);
console.log(`Last 10 cities: ${citiesToAdd.slice(-10).join(', ')}`);

module.exports = { entries, citiesToAdd };

