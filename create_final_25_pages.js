const fs = require('fs');
const path = require('path');

// Final 25 cities to create (ensuring they don't exist)
const final25Cities = [
  { name: 'Zephyrhills', state: 'Florida', slug: 'zephyrhills-florida' },
  { name: 'Zanesville', state: 'Ohio', slug: 'zanesville-ohio' },
  { name: 'Woodbridge', state: 'Virginia', slug: 'woodbridge-virginia' },
  { name: 'Williamsport', state: 'Pennsylvania', slug: 'williamsport-pennsylvania' },
  { name: 'Williamsburg', state: 'Virginia', slug: 'williamsburg-virginia' },
  { name: 'Wichita Falls', state: 'Texas', slug: 'wichita-falls-texas' },
  { name: 'Westminster', state: 'Maryland', slug: 'westminster-maryland' },
  { name: 'Westfield', state: 'Massachusetts', slug: 'westfield-massachusetts' },
  { name: 'West Chester', state: 'Pennsylvania', slug: 'west-chester-pennsylvania' },
  { name: 'Wesley Chapel', state: 'Florida', slug: 'wesley-chapel-florida' },
  { name: 'Wellington', state: 'Florida', slug: 'wellington-florida' },
  { name: 'Wellesley', state: 'Massachusetts', slug: 'wellesley-massachusetts' },
  { name: 'Weirton', state: 'West Virginia', slug: 'weirton-west-virginia' },
  { name: 'Waterville', state: 'Maine', slug: 'waterville-maine' },
  { name: 'Watertown', state: 'Massachusetts', slug: 'watertown-massachusetts' },
  { name: 'Warwick', state: 'Rhode Island', slug: 'warwick-rhode-island' },
  { name: 'Warrensburg', state: 'Missouri', slug: 'warrensburg-missouri' },
  { name: 'Warren', state: 'Ohio', slug: 'warren-ohio' },
  { name: 'Walla Walla', state: 'Washington', slug: 'walla-walla-washington' },
  { name: 'Waldorf', state: 'Maryland', slug: 'waldorf-maryland' },
  { name: 'Wakefield', state: 'Massachusetts', slug: 'wakefield-massachusetts' },
  { name: 'Waco', state: 'Texas', slug: 'waco-texas' },
  { name: 'Vero Beach', state: 'Florida', slug: 'vero-beach-florida' },
  { name: 'Ventura', state: 'California', slug: 'ventura-california' },
  { name: 'Venice', state: 'Florida', slug: 'venice-florida' },
];

// Check existing
const existingPages = new Set();
function findExistingPages(dir) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findExistingPages(fullPath);
      } else if (file === 'pageClient.tsx') {
        const match = fullPath.match(/vending-leads[\/\\]([^\/\\]+)/);
        if (match) {
          existingPages.add(match[1]);
        }
      }
    }
  } catch (error) {}
}

findExistingPages('src/app/vending-leads');

const citiesToCreate = final25Cities.filter(city => !existingPages.has(city.slug));
console.log(`Creating ${citiesToCreate.length} pages from final 25 list`);

// Use the same generation code from create_all_100_city_pages.js
const template = fs.readFileSync('src/app/vending-leads/longmont-colorado/pageClient.tsx', 'utf8');
const pageTemplate = fs.readFileSync('src/app/vending-leads/longmont-colorado/page.tsx', 'utf8');

const heroVariations = [
  (city, state) => `Access premium vending machine leads in ${city}, ${state}, featuring verified locations across healthcare facilities, educational institutions, and commercial centers.`,
  (city, state) => `Discover high-quality vending opportunities in ${city}, ${state}, with pre-qualified locations in office buildings, retail spaces, and transportation hubs.`,
  (city, state) => `Find verified vending machine locations in ${city}, ${state}, connecting you with businesses seeking reliable vending solutions.`,
  (city, state) => `Get access to curated vending leads in ${city}, ${state}, including manufacturing facilities, corporate offices, and community centers.`,
  (city, state) => `Explore vending machine placement opportunities in ${city}, ${state}, with locations verified for optimal foot traffic and revenue potential.`,
  (city, state) => `Connect with qualified vending locations in ${city}, ${state}, spanning technology companies, medical centers, and educational campuses.`,
  (city, state) => `Unlock vending opportunities in ${city}, ${state}, featuring businesses with high employee counts and consistent visitor traffic.`,
  (city, state) => `Access targeted vending leads in ${city}, ${state}, covering industrial parks, shopping centers, and professional office complexes.`,
];

const whyChooseVariations = [
  (city, state) => `${city} presents strong vending potential with its mix of established businesses, growing commercial sectors, and steady employment base. The city's diverse economy supports consistent consumer spending, while strategic location placement maximizes machine visibility and usage.`,
  (city, state) => `The ${city} market offers excellent vending opportunities through its combination of corporate headquarters, healthcare networks, and educational institutions. High foot traffic areas and captive audiences create ideal conditions for vending success.`,
  (city, state) => `${city} features a robust business environment with multiple industries supporting vending machine placement. The city's economic stability and business density provide numerous high-traffic locations for reliable revenue generation.`,
  (city, state) => `With its thriving commercial districts and diverse business landscape, ${city} offers multiple vending placement strategies. The city's combination of office complexes, retail centers, and community facilities ensures steady customer traffic.`,
  (city, state) => `${city}'s business community creates ideal vending conditions through consistent employee populations, visitor traffic, and strategic commercial locations. The city's economic growth supports long-term vending machine profitability.`,
  (city, state) => `The ${city} market combines business density with strategic placement opportunities, featuring corporate campuses, medical facilities, and educational institutions that generate reliable vending revenue.`,
  (city, state) => `${city} offers vending operators access to high-traffic locations across multiple industries. The city's commercial activity and business concentration create optimal conditions for vending machine success.`,
  (city, state) => `Through ${city}'s diverse business ecosystem, vending machines find placement in healthcare systems, educational facilities, and corporate offices. The city's economic activity supports consistent consumer demand.`,
];

const businessLandscapeVariations = {
  Healthcare: [
    (city) => `Medical facilities throughout ${city} serve large patient populations and employ substantial staff, providing steady foot traffic and consistent demand for vending services in waiting areas and break rooms.`,
    (city) => `${city}'s healthcare sector includes major medical centers, specialty clinics, and outpatient facilities that generate consistent patient and visitor traffic, creating ideal vending placement opportunities.`,
    (city) => `Healthcare institutions in ${city} offer prime vending locations with high visitor counts, extended operating hours, and captive audiences seeking convenient snack and beverage options.`,
  ],
  Education: [
    (city) => `Educational facilities throughout ${city} serve large student populations and employ substantial staff, providing steady foot traffic and consistent demand for vending services.`,
    (city) => `${city}'s schools, colleges, and universities create excellent vending opportunities with high student traffic, campus events, and extended hours that maximize machine usage.`,
    (city) => `Academic institutions in ${city} feature student centers, libraries, and common areas with consistent foot traffic, making them ideal locations for vending machine placement.`,
  ],
  Manufacturing: [
    (city) => `Manufacturing facilities in ${city} provide excellent vending locations with large employee bases, multiple shifts, and break areas that generate consistent sales throughout the day.`,
    (city) => `Industrial and manufacturing operations throughout ${city} employ substantial workforces with shift-based schedules, offering stable vending placement opportunities with steady traffic.`,
    (city) => `Industrial operations in ${city} feature large workforces and shift schedules that create reliable vending revenue through employee break times and shift changes.`,
  ],
  Retail: [
    (city) => `Shopping centers and retail districts in ${city} offer prime vending locations, with high-traffic areas including food courts, entrances, and common spaces frequented by shoppers.`,
    (city) => `Retail locations throughout ${city} provide excellent vending opportunities in malls, shopping centers, and high-traffic commercial areas with consistent customer flow.`,
    (city) => `${city}'s retail sector features shopping centers, strip malls, and commercial districts that offer strategic vending placement in areas with maximum shopper visibility.`,
  ],
  'Office Buildings': [
    (city) => `Office complexes in ${city} provide ideal vending locations with multiple tenants, high employee counts, and break areas that ensure steady machine usage during business hours.`,
    (city) => `Commercial office spaces in ${city} offer excellent vending opportunities, with professional tenants and business operations generating consistent foot traffic throughout the workday.`,
    (city) => `Corporate office buildings throughout ${city} feature professional workforces and business operations that create reliable vending revenue through employee break times and meetings.`,
  ],
  Transportation: [
    (city) => `Transit facilities throughout ${city} provide excellent vending opportunities in terminals, waiting areas, and high-traffic zones with consistent traveler foot traffic.`,
    (city) => `Airports, bus stations, and transit centers throughout ${city} generate steady passenger traffic, providing excellent vending placement options in high-traffic areas frequented by travelers.`,
    (city) => `Transportation hubs in ${city} offer prime vending locations with high passenger volumes, extended operating hours, and captive audiences waiting for departures.`,
  ],
};

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function generateFunctionName(city, state) {
  const cityPart = city.replace(/[^a-zA-Z0-9]/g, '').replace(/\s+/g, '');
  const statePart = state.replace(/[^a-zA-Z0-9]/g, '').replace(/\s+/g, '');
  return `${cityPart}${statePart}VendingLeadsPage`;
}

let created = 0;

for (const city of citiesToCreate) {
  try {
    const hash = hashString(city.name + city.state);
    const heroDesc = heroVariations[hash % heroVariations.length](city.name, city.state);
    const whyChoose = whyChooseVariations[hash % whyChooseVariations.length](city.name, city.state);
    
    const healthcareDesc = businessLandscapeVariations.Healthcare[(hash + 1) % businessLandscapeVariations.Healthcare.length](city.name);
    const educationDesc = businessLandscapeVariations.Education[(hash + 2) % businessLandscapeVariations.Education.length](city.name);
    const manufacturingDesc = businessLandscapeVariations.Manufacturing[(hash + 3) % businessLandscapeVariations.Manufacturing.length](city.name);
    const retailDesc = businessLandscapeVariations.Retail[(hash + 4) % businessLandscapeVariations.Retail.length](city.name);
    const officeDesc = businessLandscapeVariations['Office Buildings'][(hash + 5) % businessLandscapeVariations['Office Buildings'].length](city.name);
    const transportationDesc = businessLandscapeVariations.Transportation[(hash + 6) % businessLandscapeVariations.Transportation.length](city.name);
    
    const populationRanges = ['50K-100K', '75K-150K', '100K+', '25K-50K', '150K+'];
    const businessRanges = ['2K-4K', '4K-6K', '6K-10K', '1K-2K', '10K+'];
    const industryRanges = ['8-12', '10-14', '12-16', '6-10', '14+'];
    const locationRanges = ['100-200', '150-280', '200-350', '50-100', '300+'];
    const ratingRanges = ['4.7/5', '4.8/5', '4.6/5', '4.9/5'];
    
    const cityData = {
      population: populationRanges[hash % populationRanges.length],
      businesses: businessRanges[hash % businessRanges.length],
      industries: industryRanges[hash % industryRanges.length],
      verifiedLocations: locationRanges[hash % locationRanges.length],
      rating: ratingRanges[hash % ratingRanges.length],
    };
    
    const dirPath = path.join('src/app/vending-leads', city.slug);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    let content = template
      .replace(/LongmontColoradoVendingLeadsPage/g, generateFunctionName(city.name, city.state))
      .replace(/const cityDisplayName = 'Longmont';/g, `const cityDisplayName = '${city.name}';`)
      .replace(/const stateDisplayName = 'Colorado';/g, `const stateDisplayName = '${city.state}';`)
      .replace(/'name': 'Longmont',/g, `'name': '${city.name}',`)
      .replace(/'state': 'Colorado',/g, `'state': '${city.state}',`)
      .replace(/'population': '100K\+',/g, `'population': '${cityData.population}',`)
      .replace(/'businesses': '4K-6K',/g, `'businesses': '${cityData.businesses}',`)
      .replace(/'industries': '10-14',/g, `'industries': '${cityData.industries}',`)
      .replace(/'verifiedLocations': '150-280',/g, `'verifiedLocations': '${cityData.verifiedLocations}',`)
      .replace(/'rating': '4\.7\/5',/g, `'rating': '${cityData.rating}',`)
      .replace(/Get access to curated vending leads in Longmont, Colorado[^<]+/g, heroDesc)
      .replace(/Medical facilities throughout Longmont serve large patient populations[^<]+/g, healthcareDesc)
      .replace(/Manufacturing facilities in Longmont provide excellent vending locations[^<]+/g, manufacturingDesc)
      .replace(/Office complexes in Longmont provide ideal vending locations[^<]+/g, officeDesc)
      .replace(/Transit facilities throughout Longmont provide excellent vending opportunities[^<]+/g, transportationDesc)
      .replace(/With its thriving commercial districts and diverse business landscape, Longmont offers multiple vending placement strategies[^<]+/g, whyChoose)
      .replace(/Longmont/g, city.name)
      .replace(/Colorado/g, city.state)
      .replace(/colorado/g, city.state.toLowerCase().replace(/\s+/g, '-'))
      .replace(/longmont-colorado/g, city.slug);
    
    const stateSlug = city.state.toLowerCase().replace(/\s+/g, '-');
    const stateVar = stateSlug.replace(/-/g, '');
    content = content.replace(/const newHampshire = states\.find\(s => s\.slug === 'colorado'\);/g, `const ${stateVar}State = states.find(s => s.slug === '${stateSlug}');`);
    content = content.replace(/const relatedCities = newHampshire \? newHampshire\.cities\.filter\(c => c\.slug !== 'manchester-colorado'\)\.slice\(0, 8\) : \[\];/g, `const relatedCities = ${stateVar}State ? ${stateVar}State.cities.filter(c => c.slug !== '${city.slug}').slice(0, 8) : [];`);
    content = content.replace(/More cities in Colorado/g, `More cities in ${city.state}`);
    content = content.replace(/name: 'Colorado', item: 'https:\/\/www\.thevendinglocator\.com\/vending-leads\/colorado'/g, `name: '${city.state}', item: 'https://www.thevendinglocator.com/vending-leads/${stateSlug}'`);
    content = content.replace(/name: 'Longmont', item: 'https:\/\/www\.thevendinglocator\.com\/vending-leads\/manchester-colorado'/g, `name: '${city.name}', item: 'https://www.thevendinglocator.com/vending-leads/${city.slug}'`);
    
    ['Mike', 'Sarah', 'David', 'Lisa', 'Tom', 'Jennifer', 'Robert', 'Amanda', 'Chris', 'Maria', 'James', 'Emily'].forEach(name => {
      content = content.replace(new RegExp(`${name} from Longmont`, 'g'), `${name} from ${city.name}`);
      content = content.replace(new RegExp(`${name} in Longmont`, 'g'), `${name} in ${city.name}`);
    });
    
    content = content.replace(/Longmont\?/g, `${city.name}?`);
    content = content.replace(/Longmont's/g, `${city.name}'s`);
    content = content.replace(/Longmont vending/g, `${city.name} vending`);
    content = content.replace(/Longmont location/g, `${city.name} location`);
    content = content.replace(/Longmont locations/g, `${city.name} locations`);
    content = content.replace(/in Longmont/g, `in ${city.name}`);
    content = content.replace(/for Longmont/g, `for ${city.name}`);
    
    fs.writeFileSync(path.join(dirPath, 'pageClient.tsx'), content, 'utf8');
    
    let pageContent = pageTemplate
      .replace(/Longmont, Colorado/g, `${city.name}, ${city.state}`)
      .replace(/longmont-colorado/g, city.slug)
      .replace(/Longmont Colorado/g, `${city.name} ${city.state}`);
    
    fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent, 'utf8');
    
    created++;
    console.log(`Created: ${city.name}, ${city.state}`);
  } catch (error) {
    console.error(`Error creating ${city.name}, ${city.state}: ${error.message}`);
  }
}

console.log(`\n=== SUMMARY ===`);
console.log(`Created: ${created} pages`);

