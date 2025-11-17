const fs = require('fs');

// Expanded list of major and mid-size US cities (50K+ population) to check
const expandedCities = [
  // California - mid-size cities
  { name: 'San Mateo', slug: 'san-mateo-california', state: 'California' },
  { name: 'Santa Barbara', slug: 'santa-barbara-california', state: 'California' },
  { name: 'Santa Rosa', slug: 'santa-rosa-california', state: 'California' },
  { name: 'Redding', slug: 'redding-california', state: 'California' },
  { name: 'Chico', slug: 'chico-california', state: 'California' },
  { name: 'San Mateo', slug: 'san-mateo-california', state: 'California' },
  
  // Texas - additional cities
  { name: 'Plano', slug: 'plano-texas', state: 'Texas' },
  { name: 'Lubbock', slug: 'lubbock-texas', state: 'Texas' },
  { name: 'Laredo', slug: 'laredo-texas', state: 'Texas' },
  { name: 'Waco', slug: 'waco-texas', state: 'Texas' },
  { name: 'Beaumont', slug: 'beaumont-texas', state: 'Texas' },
  { name: 'Abilene', slug: 'abilene-texas', state: 'Texas' },
  { name: 'Round Rock', slug: 'round-rock-texas', state: 'Texas' },
  { name: 'Tyler', slug: 'tyler-texas', state: 'Texas' },
  { name: 'College Station', slug: 'college-station-texas', state: 'Texas' },
  { name: 'Killeen', slug: 'killeen-texas', state: 'Texas' },
  { name: 'McAllen', slug: 'mcallen-texas', state: 'Texas' },
  { name: 'Mesquite', slug: 'mesquite-texas', state: 'Texas' },
  { name: 'Carrollton', slug: 'carrollton-texas', state: 'Texas' },
  { name: 'Garland', slug: 'garland-texas', state: 'Texas' },
  { name: 'Frisco', slug: 'frisco-texas', state: 'Texas' },
  { name: 'McKinney', slug: 'mckinney-texas', state: 'Texas' },
  { name: 'Denton', slug: 'denton-texas', state: 'Texas' },
  { name: 'Richardson', slug: 'richardson-texas', state: 'Texas' },
  { name: 'Lewisville', slug: 'lewisville-texas', state: 'Texas' },
  { name: 'League City', slug: 'league-city-texas', state: 'Texas' },
  { name: 'Sugar Land', slug: 'sugar-land-texas', state: 'Texas' },
  { name: 'Temple', slug: 'temple-texas', state: 'Texas' },
  { name: 'Pearland', slug: 'pearland-texas', state: 'Texas' },
  { name: 'Irving', slug: 'irving-texas', state: 'Texas' },
  
  // Florida - additional cities
  { name: 'Boca Raton', slug: 'boca-raton-florida', state: 'Florida' },
  { name: 'Cape Coral', slug: 'cape-coral-florida', state: 'Florida' },
  { name: 'Clearwater', slug: 'clearwater-florida', state: 'Florida' },
  { name: 'Coral Springs', slug: 'coral-springs-florida', state: 'Florida' },
  { name: 'Daytona Beach', slug: 'daytona-beach-florida', state: 'Florida' },
  { name: 'Deltona', slug: 'deltona-florida', state: 'Florida' },
  { name: 'Fort Lauderdale', slug: 'fort-lauderdale-florida', state: 'Florida' },
  { name: 'Fort Myers', slug: 'fort-myers-florida', state: 'Florida' },
  { name: 'Gainesville', slug: 'gainesville-florida', state: 'Florida' },
  { name: 'Hialeah', slug: 'hialeah-florida', state: 'Florida' },
  { name: 'Hollywood', slug: 'hollywood-florida', state: 'Florida' },
  { name: 'Jacksonville', slug: 'jacksonville-florida', state: 'Florida' },
  { name: 'Kissimmee', slug: 'kissimmee-florida', state: 'Florida' },
  { name: 'Lakeland', slug: 'lakeland-florida', state: 'Florida' },
  { name: 'Miami', slug: 'miami-florida', state: 'Florida' },
  { name: 'Miramar', slug: 'miramar-florida', state: 'Florida' },
  { name: 'Naples', slug: 'naples-florida', state: 'Florida' },
  { name: 'Orlando', slug: 'orlando-florida', state: 'Florida' },
  { name: 'Palm Bay', slug: 'palm-bay-florida', state: 'Florida' },
  { name: 'Pembroke Pines', slug: 'pembroke-pines-florida', state: 'Florida' },
  { name: 'Pensacola', slug: 'pensacola-florida', state: 'Florida' },
  { name: 'Pompano Beach', slug: 'pompano-beach-florida', state: 'Florida' },
  { name: 'Port St. Lucie', slug: 'port-st-lucie-florida', state: 'Florida' },
  { name: 'Sarasota', slug: 'sarasota-florida', state: 'Florida' },
  { name: 'St. Petersburg', slug: 'st-petersburg-florida', state: 'Florida' },
  { name: 'Tallahassee', slug: 'tallahassee-florida', state: 'Florida' },
  { name: 'Tampa', slug: 'tampa-florida', state: 'Florida' },
  { name: 'West Palm Beach', slug: 'west-palm-beach-florida', state: 'Florida' },
  
  // Ohio - major cities
  { name: 'Akron', slug: 'akron-ohio', state: 'Ohio' },
  { name: 'Dayton', slug: 'dayton-ohio', state: 'Ohio' },
  { name: 'Youngstown', slug: 'youngstown-ohio', state: 'Ohio' },
  { name: 'Canton', slug: 'canton-ohio', state: 'Ohio' },
  { name: 'Parma', slug: 'parma-ohio', state: 'Ohio' },
  { name: 'Lorain', slug: 'lorain-ohio', state: 'Ohio' },
  { name: 'Mansfield', slug: 'mansfield-ohio', state: 'Ohio' },
  
  // Colorado - major cities
  { name: 'Arvada', slug: 'arvada-colorado', state: 'Colorado' },
  { name: 'Aurora', slug: 'aurora-colorado', state: 'Colorado' },
  { name: 'Fort Collins', slug: 'fort-collins-colorado', state: 'Colorado' },
  { name: 'Lakewood', slug: 'lakewood-colorado', state: 'Colorado' },
  { name: 'Boulder', slug: 'boulder-colorado', state: 'Colorado' },
  { name: 'Centennial', slug: 'centennial-colorado', state: 'Colorado' },
  { name: 'Greeley', slug: 'greeley-colorado', state: 'Colorado' },
  { name: 'Pueblo', slug: 'pueblo-colorado', state: 'Colorado' },
  { name: 'Thornton', slug: 'thornton-colorado', state: 'Colorado' },
  { name: 'Westminster', slug: 'westminster-colorado', state: 'Colorado' },
  { name: 'Grand Junction', slug: 'grand-junction-colorado', state: 'Colorado' },
  
  // Iowa - major cities
  { name: 'Cedar Rapids', slug: 'cedar-rapids-iowa', state: 'Iowa' },
  { name: 'Davenport', slug: 'davenport-iowa', state: 'Iowa' },
  { name: 'Sioux City', slug: 'sioux-city-iowa', state: 'Iowa' },
  { name: 'Waterloo', slug: 'waterloo-iowa', state: 'Iowa' },
  { name: 'Ames', slug: 'ames-iowa', state: 'Iowa' },
  { name: 'Iowa City', slug: 'iowa-city-iowa', state: 'Iowa' },
  { name: 'Des Moines', slug: 'des-moines-iowa', state: 'Iowa' },
  { name: 'Dubuque', slug: 'dubuque-iowa', state: 'Iowa' },
  
  // Idaho - major cities
  { name: 'Meridian', slug: 'meridian-idaho', state: 'Idaho' },
  { name: 'Nampa', slug: 'nampa-idaho', state: 'Idaho' },
  { name: 'Idaho Falls', slug: 'idaho-falls-idaho', state: 'Idaho' },
  { name: 'Pocatello', slug: 'pocatello-idaho', state: 'Idaho' },
  { name: "Coeur d'Alene", slug: 'coeur-dalene-idaho', state: 'Idaho' },
  { name: 'Twin Falls', slug: 'twin-falls-idaho', state: 'Idaho' },
  { name: 'Caldwell', slug: 'caldwell-idaho', state: 'Idaho' },
  { name: 'Rexburg', slug: 'rexburg-idaho', state: 'Idaho' },
  
  // Alabama - major cities
  { name: 'Mobile', slug: 'mobile-alabama', state: 'Alabama' },
  { name: 'Tuscaloosa', slug: 'tuscaloosa-alabama', state: 'Alabama' },
  { name: 'Auburn', slug: 'auburn-alabama', state: 'Alabama' },
  { name: 'Dothan', slug: 'dothan-alabama', state: 'Alabama' },
  
  // North Carolina - additional cities
  { name: 'Cary', slug: 'cary-north-carolina', state: 'North Carolina' },
  { name: 'Durham', slug: 'durham-north-carolina', state: 'North Carolina' },
  { name: 'Fayetteville', slug: 'fayetteville-north-carolina', state: 'North Carolina' },
  { name: 'Winston-Salem', slug: 'winston-salem-north-carolina', state: 'North Carolina' },
  { name: 'Hickory', slug: 'hickory-north-carolina', state: 'North Carolina' },
  { name: 'High Point', slug: 'high-point-north-carolina', state: 'North Carolina' },
  { name: 'Wilmington', slug: 'wilmington-north-carolina', state: 'North Carolina' },
  
  // Massachusetts - additional cities
  { name: 'Cambridge', slug: 'cambridge-massachusetts', state: 'Massachusetts' },
  { name: 'Fall River', slug: 'fall-river-massachusetts', state: 'Massachusetts' },
  
  // Maryland - major cities
  { name: 'Gaithersburg', slug: 'gaithersburg-maryland', state: 'Maryland' },
  { name: 'Columbia', slug: 'columbia-maryland', state: 'Maryland' },
  { name: 'Silver Spring', slug: 'silver-spring-maryland', state: 'Maryland' },
  { name: 'Annapolis', slug: 'annapolis-maryland', state: 'Maryland' },
  { name: 'Baltimore', slug: 'baltimore-maryland', state: 'Maryland' },
  { name: 'Frederick', slug: 'frederick-maryland', state: 'Maryland' },
  { name: 'Hagerstown', slug: 'hagerstown-maryland', state: 'Maryland' },
  { name: 'Rockville', slug: 'rockville-maryland', state: 'Maryland' },
  
  // Michigan - additional cities
  { name: 'Lansing', slug: 'lansing-michigan', state: 'Michigan' },
  { name: 'Flint', slug: 'flint-michigan', state: 'Michigan' },
  { name: 'Kalamazoo', slug: 'kalamazoo-michigan', state: 'Michigan' },
  { name: 'Saginaw', slug: 'saginaw-michigan', state: 'Michigan' },
  
  // Additional mid-size cities by state
  // Virginia
  { name: 'Alexandria', slug: 'alexandria-virginia', state: 'Virginia' },
  { name: 'Portsmouth', slug: 'portsmouth-virginia', state: 'Virginia' },
  { name: 'Hampton', slug: 'hampton-virginia', state: 'Virginia' },
  { name: 'Newport News', slug: 'newport-news-virginia', state: 'Virginia' },
  { name: 'Chesapeake', slug: 'chesapeake-virginia', state: 'Virginia' },
  { name: 'Norfolk', slug: 'norfolk-virginia', state: 'Virginia' },
  { name: 'Richmond', slug: 'richmond-virginia', state: 'Virginia' },
  
  // New Jersey
  { name: 'Jersey City', slug: 'jersey-city-new-jersey', state: 'New Jersey' },
  { name: 'Newark', slug: 'newark-new-jersey', state: 'New Jersey' },
  { name: 'Paterson', slug: 'paterson-new-jersey', state: 'New Jersey' },
  { name: 'Elizabeth', slug: 'elizabeth-new-jersey', state: 'New Jersey' },
  { name: 'Woodbridge', slug: 'woodbridge-new-jersey', state: 'New Jersey' },
  
  // Oregon
  { name: 'Gresham', slug: 'gresham-oregon', state: 'Oregon' },
  { name: 'Hillsboro', slug: 'hillsboro-oregon', state: 'Oregon' },
  { name: 'Bend', slug: 'bend-oregon', state: 'Oregon' },
  { name: 'Beaverton', slug: 'beaverton-oregon', state: 'Oregon' },
  { name: 'Medford', slug: 'medford-oregon', state: 'Oregon' },
  { name: 'Albany', slug: 'albany-oregon', state: 'Oregon' },
  
  // Nevada
  { name: 'Henderson', slug: 'henderson-nevada', state: 'Nevada' },
  { name: 'Reno', slug: 'reno-nevada', state: 'Nevada' },
  { name: 'North Las Vegas', slug: 'north-las-vegas-nevada', state: 'Nevada' },
  { name: 'Sparks', slug: 'sparks-nevada', state: 'Nevada' },
  { name: 'Carson City', slug: 'carson-city-nevada', state: 'Nevada' },
  
  // Minnesota
  { name: 'St. Paul', slug: 'saint-paul-minnesota', state: 'Minnesota' },
  { name: 'Rochester', slug: 'rochester-minnesota', state: 'Minnesota' },
  { name: 'Duluth', slug: 'duluth-minnesota', state: 'Minnesota' },
  { name: 'Bloomington', slug: 'bloomington-minnesota', state: 'Minnesota' },
  { name: 'Brooklyn Park', slug: 'brooklyn-park-minnesota', state: 'Minnesota' },
  { name: 'Plymouth', slug: 'plymouth-minnesota', state: 'Minnesota' },
  { name: 'St. Cloud', slug: 'st-cloud-minnesota', state: 'Minnesota' },
  { name: 'Eagan', slug: 'eagan-minnesota', state: 'Minnesota' },
  { name: 'Woodbury', slug: 'woodbury-minnesota', state: 'Minnesota' },
  { name: 'Maple Grove', slug: 'maple-grove-minnesota', state: 'Minnesota' },
  { name: 'Lakeville', slug: 'lakeville-minnesota', state: 'Minnesota' },
  { name: 'Mankato', slug: 'mankato-minnesota', state: 'Minnesota' },
  
  // Wisconsin
  { name: 'Madison', slug: 'madison-wisconsin', state: 'Wisconsin' },
  { name: 'Green Bay', slug: 'green-bay-wisconsin', state: 'Wisconsin' },
  { name: 'Kenosha', slug: 'kenosha-wisconsin', state: 'Wisconsin' },
  { name: 'Racine', slug: 'racine-wisconsin', state: 'Wisconsin' },
  { name: 'Appleton', slug: 'appleton-wisconsin', state: 'Wisconsin' },
  { name: 'Waukesha', slug: 'waukesha-wisconsin', state: 'Wisconsin' },
  
  // Missouri
  { name: 'Kansas City', slug: 'kansas-city-missouri', state: 'Missouri' },
  { name: 'St. Louis', slug: 'st-louis-missouri', state: 'Missouri' },
  { name: 'Springfield', slug: 'springfield-missouri', state: 'Missouri' },
  { name: 'Columbia', slug: 'columbia-missouri', state: 'Missouri' },
  { name: 'Independence', slug: 'independence-missouri', state: 'Missouri' },
  { name: "Lee's Summit", slug: 'lees-summit-missouri', state: 'Missouri' },
  { name: "O'Fallon", slug: 'ofallon-missouri', state: 'Missouri' },
  { name: 'Joplin', slug: 'joplin-missouri', state: 'Missouri' },
  
  // Tennessee
  { name: 'Nashville', slug: 'nashville-tennessee', state: 'Tennessee' },
  { name: 'Memphis', slug: 'memphis-tennessee', state: 'Tennessee' },
  { name: 'Knoxville', slug: 'knoxville-tennessee', state: 'Tennessee' },
  { name: 'Chattanooga', slug: 'chattanooga-tennessee', state: 'Tennessee' },
  { name: 'Clarksville', slug: 'clarksville-tennessee', state: 'Tennessee' },
  { name: 'Murfreesboro', slug: 'murfreesboro-tennessee', state: 'Tennessee' },
  { name: 'Franklin', slug: 'franklin-tennessee', state: 'Tennessee' },
  { name: 'Jackson', slug: 'jackson-tennessee', state: 'Tennessee' },
  { name: 'Johnson City', slug: 'johnson-city-tennessee', state: 'Tennessee' },
  { name: 'Kingsport', slug: 'kingsport-tennessee', state: 'Tennessee' },
  
  // Indiana
  { name: 'Indianapolis', slug: 'indianapolis-indiana', state: 'Indiana' },
  { name: 'Fort Wayne', slug: 'fort-wayne-indiana', state: 'Indiana' },
  { name: 'Evansville', slug: 'evansville-indiana', state: 'Indiana' },
  { name: 'South Bend', slug: 'south-bend-indiana', state: 'Indiana' },
  { name: 'Carmel', slug: 'carmel-indiana', state: 'Indiana' },
  { name: 'Bloomington', slug: 'bloomington-indiana', state: 'Indiana' },
  { name: 'Hammond', slug: 'hammond-indiana', state: 'Indiana' },
  { name: 'Gary', slug: 'gary-indiana', state: 'Indiana' },
  { name: 'Kokomo', slug: 'kokomo-indiana', state: 'Indiana' },
  
  // Arizona
  { name: 'Mesa', slug: 'mesa-arizona', state: 'Arizona' },
  
  // Washington DC
  { name: 'Washington', slug: 'washington-dc', state: 'District of Columbia' }
];

// Read states.ts to get existing cities
const statesFile = fs.readFileSync('./src/data/states.ts', 'utf8');
const existingCitySlugs = new Set();

// Extract all existing city slugs
const citySlugMatches = statesFile.matchAll(/slug:\s*'([^']+)'/g);
for (const match of citySlugMatches) {
  const slug = match[1];
  if (slug.includes('-') && slug.split('-').length >= 2) {
    existingCitySlugs.add(slug);
  }
}

console.log(`Found ${existingCitySlugs.size} existing cities in states.ts\n`);

// Find missing cities
const missingCities = expandedCities.filter(city => !existingCitySlugs.has(city.slug));

console.log(`Missing Cities from Expanded List (${missingCities.length}):\n`);

// Group by state
const missingByState = {};
missingCities.forEach(city => {
  if (!missingByState[city.state]) {
    missingByState[city.state] = [];
  }
  missingByState[city.state].push(city);
});

// Display results
Object.keys(missingByState).sort().forEach(state => {
  console.log(`${state} (${missingByState[state].length} missing):`);
  missingByState[state].forEach(city => {
    console.log(`  - ${city.name} (${city.slug})`);
  });
  console.log('');
});

// Save to file
const report = {
  totalChecked: expandedCities.length,
  existing: expandedCities.length - missingCities.length,
  missing: missingCities.length,
  missingCities: missingCities,
  missingByState: missingByState
};

fs.writeFileSync('more_missing_cities_report.json', JSON.stringify(report, null, 2));
console.log(`\n📄 Report saved to more_missing_cities_report.json`);

// Generate command to create missing cities
if (missingCities.length > 0) {
  const slugs = missingCities.map(c => c.slug).join(' ');
  console.log(`\n💡 To create all missing cities, run:`);
  console.log(`node scripts/create_specific_city_pages.js ${slugs.substring(0, 300)}...`);
  console.log(`\n   (Command truncated - see more_missing_cities_report.json for full list)`);
  
  // Also show by state
  console.log(`\n📋 Create by state:`);
  Object.keys(missingByState).sort().forEach(state => {
    const stateSlugs = missingByState[state].map(c => c.slug).join(' ');
    console.log(`\n# ${state}`);
    console.log(`node scripts/create_specific_city_pages.js ${stateSlugs}`);
  });
}

