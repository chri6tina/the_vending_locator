const fs = require('fs');

// Major US cities (100K+ population) that should be checked
const majorCities = [
  // California - additional major cities
  { name: 'San Mateo', slug: 'san-mateo-california', state: 'California' },
  { name: 'Santa Barbara', slug: 'santa-barbara-california', state: 'California' },
  { name: 'Santa Rosa', slug: 'santa-rosa-california', state: 'California' },
  { name: 'Redding', slug: 'redding-california', state: 'California' },
  { name: 'Chico', slug: 'chico-california', state: 'California' },
  
  // Texas - additional major cities
  { name: 'Plano', slug: 'plano-texas', state: 'Texas' },
  { name: 'Lubbock', slug: 'lubbock-texas', state: 'Texas' },
  { name: 'Laredo', slug: 'laredo-texas', state: 'Texas' },
  { name: 'Brownsville', slug: 'brownsville-texas', state: 'Texas' },
  { name: 'Pasadena', slug: 'pasadena-texas', state: 'Texas' },
  { name: 'Killeen', slug: 'killeen-texas', state: 'Texas' },
  { name: 'McAllen', slug: 'mcallen-texas', state: 'Texas' },
  { name: 'Waco', slug: 'waco-texas', state: 'Texas' },
  { name: 'Beaumont', slug: 'beaumont-texas', state: 'Texas' },
  { name: 'Abilene', slug: 'abilene-texas', state: 'Texas' },
  { name: 'Round Rock', slug: 'round-rock-texas', state: 'Texas' },
  { name: 'Odessa', slug: 'odessa-texas', state: 'Texas' },
  { name: 'Midland', slug: 'midland-texas', state: 'Texas' },
  { name: 'Tyler', slug: 'tyler-texas', state: 'Texas' },
  { name: 'College Station', slug: 'college-station-texas', state: 'Texas' },
  
  // Florida - additional major cities
  { name: 'Palm Coast', slug: 'palm-coast-florida', state: 'Florida' },
  { name: 'Largo', slug: 'largo-florida', state: 'Florida' },
  { name: 'Boynton Beach', slug: 'boynton-beach-florida', state: 'Florida' },
  { name: 'Plantation', slug: 'plantation-florida', state: 'Florida' },
  { name: 'Davie', slug: 'davie-florida', state: 'Florida' },
  { name: 'Sunrise', slug: 'sunrise-florida', state: 'Florida' },
  { name: 'Boca Raton', slug: 'boca-raton-florida', state: 'Florida' },
  
  // Arizona - additional major cities
  { name: 'Yuma', slug: 'yuma-arizona', state: 'Arizona' },
  { name: 'Flagstaff', slug: 'flagstaff-arizona', state: 'Arizona' },
  
  // North Carolina - additional major cities
  { name: 'Concord', slug: 'concord-north-carolina', state: 'North Carolina' },
  { name: 'Gastonia', slug: 'gastonia-north-carolina', state: 'North Carolina' },
  { name: 'Asheville', slug: 'asheville-north-carolina', state: 'North Carolina' },
  
  // Washington - additional major cities
  { name: 'Bellevue', slug: 'bellevue-washington', state: 'Washington' },
  { name: 'Everett', slug: 'everett-washington', state: 'Washington' },
  { name: 'Kent', slug: 'kent-washington', state: 'Washington' },
  { name: 'Renton', slug: 'renton-washington', state: 'Washington' },
  { name: 'Yakima', slug: 'yakima-washington', state: 'Washington' },
  { name: 'Bellingham', slug: 'bellingham-washington', state: 'Washington' },
  
  // Massachusetts - additional major cities
  { name: 'Quincy', slug: 'quincy-massachusetts', state: 'Massachusetts' },
  { name: 'Lynn', slug: 'lynn-massachusetts', state: 'Massachusetts' },
  { name: 'Newton', slug: 'newton-massachusetts', state: 'Massachusetts' },
  { name: 'Lawrence', slug: 'lawrence-massachusetts', state: 'Massachusetts' },
  
  // Virginia - additional major cities
  { name: 'Alexandria', slug: 'alexandria-virginia', state: 'Virginia' },
  { name: 'Portsmouth', slug: 'portsmouth-virginia', state: 'Virginia' },
  { name: 'Hampton', slug: 'hampton-virginia', state: 'Virginia' },
  { name: 'Newport News', slug: 'newport-news-virginia', state: 'Virginia' },
  { name: 'Chesapeake', slug: 'chesapeake-virginia', state: 'Virginia' },
  { name: 'Norfolk', slug: 'norfolk-virginia', state: 'Virginia' },
  { name: 'Richmond', slug: 'richmond-virginia', state: 'Virginia' },
  
  // New York - additional major cities
  { name: 'White Plains', slug: 'white-plains-new-york', state: 'New York' },
  { name: 'Mount Vernon', slug: 'mount-vernon-new-york', state: 'New York' },
  { name: 'New Rochelle', slug: 'new-rochelle-new-york', state: 'New York' },
  
  // Illinois - additional major cities
  { name: 'Aurora', slug: 'aurora-illinois', state: 'Illinois' },
  { name: 'Joliet', slug: 'joliet-illinois', state: 'Illinois' },
  { name: 'Naperville', slug: 'naperville-illinois', state: 'Illinois' },
  { name: 'Schaumburg', slug: 'schaumburg-illinois', state: 'Illinois' },
  { name: 'Elgin', slug: 'elgin-illinois', state: 'Illinois' },
  { name: 'Waukegan', slug: 'waukegan-illinois', state: 'Illinois' },
  { name: 'Cicero', slug: 'cicero-illinois', state: 'Illinois' },
  { name: 'Champaign-Urbana', slug: 'champaign-urbana-illinois', state: 'Illinois' },
  { name: 'Bloomington', slug: 'bloomington-illinois', state: 'Illinois' },
  { name: 'Decatur', slug: 'decatur-illinois', state: 'Illinois' },
  { name: 'Evanston', slug: 'evanston-illinois', state: 'Illinois' },
  { name: 'Moline', slug: 'moline-illinois', state: 'Illinois' },
  { name: 'Peoria', slug: 'peoria-illinois', state: 'Illinois' },
  { name: 'Quincy', slug: 'quincy-illinois', state: 'Illinois' },
  { name: 'Rockford', slug: 'rockford-illinois', state: 'Illinois' },
  { name: 'Springfield', slug: 'springfield-illinois', state: 'Illinois' },
  
  // Pennsylvania - additional major cities
  { name: 'Harrisburg', slug: 'harrisburg-pennsylvania', state: 'Pennsylvania' },
  { name: 'York', slug: 'york-pennsylvania', state: 'Pennsylvania' },
  
  // Ohio - additional major cities
  { name: 'Parma', slug: 'parma-ohio', state: 'Ohio' },
  { name: 'Canton', slug: 'canton-ohio', state: 'Ohio' },
  { name: 'Lorain', slug: 'lorain-ohio', state: 'Ohio' },
  { name: 'Mansfield', slug: 'mansfield-ohio', state: 'Ohio' },
  
  // Michigan - additional major cities
  { name: 'Ann Arbor', slug: 'ann-arbor-michigan', state: 'Michigan' },
  { name: 'Lansing', slug: 'lansing-michigan', state: 'Michigan' },
  { name: 'Flint', slug: 'flint-michigan', state: 'Michigan' },
  { name: 'Kalamazoo', slug: 'kalamazoo-michigan', state: 'Michigan' },
  { name: 'Saginaw', slug: 'saginaw-michigan', state: 'Michigan' },
  
  // Georgia - additional major cities
  { name: 'Sandy Springs', slug: 'sandy-springs-georgia', state: 'Georgia' },
  { name: 'Roswell', slug: 'roswell-georgia', state: 'Georgia' },
  { name: 'Marietta', slug: 'marietta-georgia', state: 'Georgia' },
  
  // New Jersey - additional major cities
  { name: 'Jersey City', slug: 'jersey-city-new-jersey', state: 'New Jersey' },
  { name: 'Newark', slug: 'newark-new-jersey', state: 'New Jersey' },
  { name: 'Paterson', slug: 'paterson-new-jersey', state: 'New Jersey' },
  { name: 'Elizabeth', slug: 'elizabeth-new-jersey', state: 'New Jersey' },
  { name: 'Woodbridge', slug: 'woodbridge-new-jersey', state: 'New Jersey' },
  
  // Colorado - additional major cities
  { name: 'Arvada', slug: 'arvada-colorado', state: 'Colorado' },
  { name: 'Aurora', slug: 'aurora-colorado', state: 'Colorado' },
  { name: 'Fort Collins', slug: 'fort-collins-colorado', state: 'Colorado' },
  { name: 'Lakewood', slug: 'lakewood-colorado', state: 'Colorado' },
  
  // North Carolina - additional major cities
  { name: 'Cary', slug: 'cary-north-carolina', state: 'North Carolina' },
  { name: 'Durham', slug: 'durham-north-carolina', state: 'North Carolina' },
  { name: 'Fayetteville', slug: 'fayetteville-north-carolina', state: 'North Carolina' },
  { name: 'Winston-Salem', slug: 'winston-salem-north-carolina', state: 'North Carolina' },
  
  // Oregon - additional major cities
  { name: 'Gresham', slug: 'gresham-oregon', state: 'Oregon' },
  { name: 'Hillsboro', slug: 'hillsboro-oregon', state: 'Oregon' },
  { name: 'Bend', slug: 'bend-oregon', state: 'Oregon' },
  { name: 'Beaverton', slug: 'beaverton-oregon', state: 'Oregon' },
  { name: 'Medford', slug: 'medford-oregon', state: 'Oregon' },
  { name: 'Albany', slug: 'albany-oregon', state: 'Oregon' },
  
  // Nevada - additional major cities
  { name: 'Henderson', slug: 'henderson-nevada', state: 'Nevada' },
  { name: 'Reno', slug: 'reno-nevada', state: 'Nevada' },
  { name: 'North Las Vegas', slug: 'north-las-vegas-nevada', state: 'Nevada' },
  { name: 'Sparks', slug: 'sparks-nevada', state: 'Nevada' },
  { name: 'Carson City', slug: 'carson-city-nevada', state: 'Nevada' },
  
  // Minnesota - additional major cities
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
  
  // Wisconsin - additional major cities
  { name: 'Madison', slug: 'madison-wisconsin', state: 'Wisconsin' },
  { name: 'Green Bay', slug: 'green-bay-wisconsin', state: 'Wisconsin' },
  { name: 'Kenosha', slug: 'kenosha-wisconsin', state: 'Wisconsin' },
  { name: 'Racine', slug: 'racine-wisconsin', state: 'Wisconsin' },
  { name: 'Appleton', slug: 'appleton-wisconsin', state: 'Wisconsin' },
  { name: 'Waukesha', slug: 'waukesha-wisconsin', state: 'Wisconsin' },
  
  // Missouri - additional major cities
  { name: 'Kansas City', slug: 'kansas-city-missouri', state: 'Missouri' },
  { name: 'St. Louis', slug: 'st-louis-missouri', state: 'Missouri' },
  { name: 'Springfield', slug: 'springfield-missouri', state: 'Missouri' },
  { name: 'Columbia', slug: 'columbia-missouri', state: 'Missouri' },
  { name: 'Independence', slug: 'independence-missouri', state: 'Missouri' },
  { name: "Lee's Summit", slug: 'lees-summit-missouri', state: 'Missouri' },
  { name: "O'Fallon", slug: 'ofallon-missouri', state: 'Missouri' },
  { name: 'Joplin', slug: 'joplin-missouri', state: 'Missouri' },
  
  // Tennessee - additional major cities
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
  
  // Indiana - additional major cities
  { name: 'Indianapolis', slug: 'indianapolis-indiana', state: 'Indiana' },
  { name: 'Fort Wayne', slug: 'fort-wayne-indiana', state: 'Indiana' },
  { name: 'Evansville', slug: 'evansville-indiana', state: 'Indiana' },
  { name: 'South Bend', slug: 'south-bend-indiana', state: 'Indiana' },
  { name: 'Carmel', slug: 'carmel-indiana', state: 'Indiana' },
  { name: 'Bloomington', slug: 'bloomington-indiana', state: 'Indiana' },
  { name: 'Hammond', slug: 'hammond-indiana', state: 'Indiana' },
  { name: 'Gary', slug: 'gary-indiana', state: 'Indiana' },
  { name: 'Kokomo', slug: 'kokomo-indiana', state: 'Indiana' },
  
  // Arizona - additional major cities
  { name: 'Mesa', slug: 'mesa-arizona', state: 'Arizona' },
  
  // Washington DC
  { name: 'Washington', slug: 'washington-dc', state: 'District of Columbia' },
  
  // Iowa - additional major cities
  { name: 'Des Moines', slug: 'des-moines-iowa', state: 'Iowa' },
  { name: 'Cedar Rapids', slug: 'cedar-rapids-iowa', state: 'Iowa' },
  { name: 'Davenport', slug: 'davenport-iowa', state: 'Iowa' },
  { name: 'Sioux City', slug: 'sioux-city-iowa', state: 'Iowa' },
  { name: 'Waterloo', slug: 'waterloo-iowa', state: 'Iowa' },
  { name: 'Iowa City', slug: 'iowa-city-iowa', state: 'Iowa' },
  { name: 'Ames', slug: 'ames-iowa', state: 'Iowa' },
  { name: 'Dubuque', slug: 'dubuque-iowa', state: 'Iowa' },
  
  // Idaho - additional major cities
  { name: 'Boise', slug: 'boise-idaho', state: 'Idaho' },
  { name: 'Nampa', slug: 'nampa-idaho', state: 'Idaho' },
  { name: 'Meridian', slug: 'meridian-idaho', state: 'Idaho' },
  { name: 'Idaho Falls', slug: 'idaho-falls-idaho', state: 'Idaho' },
  { name: 'Pocatello', slug: 'pocatello-idaho', state: 'Idaho' },
  { name: "Coeur d'Alene", slug: 'coeur-dalene-idaho', state: 'Idaho' },
  { name: 'Twin Falls', slug: 'twin-falls-idaho', state: 'Idaho' },
  { name: 'Caldwell', slug: 'caldwell-idaho', state: 'Idaho' },
  { name: 'Rexburg', slug: 'rexburg-idaho', state: 'Idaho' }
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
const missingCities = majorCities.filter(city => !existingCitySlugs.has(city.slug));

console.log(`Missing Major Cities (${missingCities.length}):\n`);

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
  totalChecked: majorCities.length,
  existing: majorCities.length - missingCities.length,
  missing: missingCities.length,
  missingCities: missingCities,
  missingByState: missingByState
};

fs.writeFileSync('missing_major_cities_report.json', JSON.stringify(report, null, 2));
console.log(`\n📄 Report saved to missing_major_cities_report.json`);

// Generate command to create missing cities
if (missingCities.length > 0) {
  const slugs = missingCities.map(c => c.slug).join(' ');
  console.log(`\n💡 To create all missing cities, run:`);
  console.log(`node scripts/create_specific_city_pages.js ${slugs.substring(0, 200)}...`);
  console.log(`\n   (Command truncated - see missing_major_cities_report.json for full list)`);
}

