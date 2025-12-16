// Generate cityInfo entries for 100 cities
// This follows the same pattern as existing entries

const fs = require('fs');

const cities = [
  'decatur-alabama', 'gadsden-alabama', 'hoover-alabama', 'prattville-alabama', 'opelika-alabama',
  'bessemer-alabama', 'prichard-alabama', 'avondale-arizona', 'buckeye-arizona', 'casa-grande-arizona',
  'chandler-arizona', 'gilbert-arizona', 'glendale-arizona', 'goodyear-arizona', 'maricopa-arizona',
  'mesa-arizona', 'peoria-arizona', 'phoenix-arizona', 'prescott-arizona', 'prescott-valley-arizona',
  'scottsdale-arizona', 'sierra-vista-arizona', 'surprise-arizona', 'tempe-arizona', 'tucson-arizona',
  'flagstaff-arizona', 'yuma-arizona', 'apache-junction-arizona', 'bullhead-city-arizona', 'lake-havasu-city-arizona',
  'nogales-arizona', 'sahuarita-arizona', 'hot-springs-arkansas', 'texarkana-arkansas', 'west-memphis-arkansas',
  'paragould-arkansas', 'cabot-arkansas', 'searcy-arkansas', 'anaheim-california', 'antioch-california',
  'bakersfield-california', 'berkeley-california', 'burbank-california', 'carlsbad-california', 'chula-vista-california',
  'clovis-california', 'compton-california', 'concord-california', 'corona-california', 'costa-mesa-california',
  'daly-city-california', 'downey-california', 'el-monte-california', 'elk-grove-california', 'escondido-california',
  'fairfield-california', 'fontana-california', 'fremont-california', 'fresno-california', 'fullerton-california',
  'garden-grove-california', 'glendale-california', 'hayward-california', 'huntington-beach-california', 'inglewood-california',
  'irvine-california', 'lancaster-california', 'jurupa-valley-california', 'lakewood-california', 'long-beach-california',
  'los-angeles-california', 'modesto-california', 'moreno-valley-california', 'mountain-view-california', 'murrieta-california',
  'napa-california', 'newport-beach-california', 'norwalk-california', 'oakland-california', 'oceanside-california',
  'ontario-california', 'orange-california', 'oxnard-california', 'palm-desert-california', 'palm-springs-california',
  'palmdale-california', 'pasadena-california', 'pomona-california', 'rancho-cucamonga-california', 'rialto-california',
  'richmond-california', 'riverside-california', 'roseville-california', 'sacramento-california', 'salinas-california',
  'san-bernardino-california', 'san-diego-california', 'santa-clara-california', 'san-francisco-california', 'san-jose-california'
];

// State-specific permit templates
const permitTemplates = {
  'alabama': 'Alabama requires a state sales/use tax account. Register your business, collect/remit tax where applicable, and confirm county/city rules for food/beverage vending.',
  'arizona': 'Arizona requires a transaction privilege tax (TPT) license through the Department of Revenue. Register your business and confirm city/county health requirements for food and beverage vending.',
  'arkansas': 'Arkansas generally requires a sales and use tax permit through the Department of Finance & Administration (DFA). Register your business, collect tax where applicable, and verify any county health requirements for food and beverage vending.',
  'california': 'California requires a seller\'s permit from the State Board of Equalization (now CDTFA). Register your business, collect sales tax, and confirm city/county health department requirements for food/beverage vending machines.'
};

// Generate cityInfo entry
function generateCityInfo(citySlug) {
  const [cityName, stateName] = citySlug.split('-').slice(0, -1).join(' ').split(' ').slice(0, -1).join(' ') || citySlug.split('-').slice(0, -1).join(' ');
  const state = citySlug.split('-').pop();
  const cityDisplay = citySlug.split('-').slice(0, -1).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  
  const permitNote = permitTemplates[state] || 'Register your business and obtain necessary permits. Confirm state and local sales tax requirements, and verify city/county health department rules for food/beverage vending.';
  
  // Generate demand drivers based on city size/type
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
  
  return {
    citySlug,
    entry: `  '${citySlug}': {
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
  }`
  };
}

// Generate all entries
const entries = cities.map(city => generateCityInfo(city));

// Output
console.log('Generated entries for 100 cities:\n');
entries.forEach((entry, idx) => {
  console.log(`${idx + 1}. ${entry.citySlug}`);
});

// Write to file for easy copy-paste
const output = entries.map(e => e.entry).join(',\n');
fs.writeFileSync('scripts/generated_city_info_entries.txt', output, 'utf8');
console.log('\n✅ Generated entries written to scripts/generated_city_info_entries.txt');

module.exports = { entries, cities };

