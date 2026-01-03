const fs = require('fs');
const path = require('path');

// Read the Longmont template (new format)
const newTemplate = fs.readFileSync('src/app/vending-leads/longmont-colorado/pageClient.tsx', 'utf8');

// Hero description variations
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

// Find all pageClient files
const pageFiles = [];
function findPageFiles(dir) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findPageFiles(fullPath);
      } else if (file === 'pageClient.tsx' && !fullPath.includes('longmont-colorado')) {
        pageFiles.push(fullPath);
      }
    }
  } catch (error) {}
}

findPageFiles('src/app/vending-leads');
console.log(`Found ${pageFiles.length} pages to potentially update`);

let updated = 0;
let skipped = 0;

for (const filePath of pageFiles.slice(0, 50)) { // Process first 50 as test
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract city and state
    const cityMatch = content.match(/const cityDisplayName = ['"]([^'"]+)['"]/);
    const stateMatch = content.match(/const stateDisplayName = ['"]([^'"]+)['"]/);
    
    if (!cityMatch || !stateMatch) {
      skipped++;
      continue;
    }
    
    const city = cityMatch[1];
    const state = stateMatch[1];
    const hash = hashString(city + state);
    
    // Check if it needs updating (has old duplicate patterns)
    const hasOldHero = content.includes("Get comprehensive vending leads for") || 
                       content.includes("Discover pre-qualified vending opportunities in") ||
                       content.includes("Explore vending machine opportunities throughout") ||
                       content.includes("Access verified vending machine locations across");
    
    const hasOldWhy = content.includes("offers reliable vending opportunities through its thriving business community");
    
    if (!hasOldHero && !hasOldWhy) {
      skipped++;
      continue;
    }
    
    // Update hero description
    if (hasOldHero) {
      const newHero = heroVariations[hash % heroVariations.length](city, state);
      const patterns = [
        /Get comprehensive vending leads for [^'"]+'s thriving [^,]+ market[^<]+/gs,
        /Discover pre-qualified vending opportunities in [^'"]+'s growing economy[^<]+/gs,
        /Explore vending machine opportunities throughout [^'"]+'s business network[^<]+/gs,
        /Access verified vending machine locations across [^'"]+'s diverse business community[^<]+/gs,
      ];
      
      for (const pattern of patterns) {
        if (content.match(pattern)) {
          content = content.replace(pattern, newHero);
          break;
        }
      }
    }
    
    // Update Why Choose
    if (hasOldWhy) {
      const newWhyChoose = whyChooseVariations[hash % whyChooseVariations.length](city, state);
      const whyPattern = new RegExp(`${city.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} offers reliable vending opportunities through its thriving business community[^<]+`, 'gs');
      if (content.match(whyPattern)) {
        content = content.replace(whyPattern, newWhyChoose);
      }
    }
    
    // Update business landscape descriptions
    const healthcarePattern = new RegExp(`(<h3[^>]*>Healthcare<\\/h3>[^<]*<p className="text-stone leading-relaxed">)([^<]+)(<\\/p>)`, 's');
    if (content.match(healthcarePattern)) {
      const newDesc = businessLandscapeVariations.Healthcare[(hash + 1) % businessLandscapeVariations.Healthcare.length](city);
      content = content.replace(healthcarePattern, `$1${newDesc}$3`);
    }
    
    const manufacturingPattern = new RegExp(`(<h3[^>]*>Manufacturing<\\/h3>[^<]*<p className="text-stone leading-relaxed">)([^<]+)(<\\/p>)`, 's');
    if (content.match(manufacturingPattern)) {
      const newDesc = businessLandscapeVariations.Manufacturing[(hash + 3) % businessLandscapeVariations.Manufacturing.length](city);
      content = content.replace(manufacturingPattern, `$1${newDesc}$3`);
    }
    
    const officePattern = new RegExp(`(<h3[^>]*>Office Buildings<\\/h3>[^<]*<p className="text-stone leading-relaxed">)([^<]+)(<\\/p>)`, 's');
    if (content.match(officePattern)) {
      const newDesc = businessLandscapeVariations['Office Buildings'][(hash + 5) % businessLandscapeVariations['Office Buildings'].length](city);
      content = content.replace(officePattern, `$1${newDesc}$3`);
    }
    
    const transportationPattern = new RegExp(`(<h3[^>]*>Transportation<\\/h3>[^<]*<p className="text-stone leading-relaxed">)([^<]+)(<\\/p>)`, 's');
    if (content.match(transportationPattern)) {
      const newDesc = businessLandscapeVariations.Transportation[(hash + 6) % businessLandscapeVariations.Transportation.length](city);
      content = content.replace(transportationPattern, `$1${newDesc}$3`);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    updated++;
    
    if (updated % 10 === 0) {
      console.log(`Updated ${updated} pages...`);
    }
  } catch (error) {
    console.error(`Error updating ${filePath}: ${error.message}`);
  }
}

console.log(`\n=== SUMMARY ===`);
console.log(`Updated: ${updated} pages`);
console.log(`Skipped: ${skipped} pages (already in new format or couldn't parse)`);

