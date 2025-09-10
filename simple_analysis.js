const fs = require('fs');

// Get existing city directories
const existingDirs = fs.readdirSync('./src/app/vending-leads', { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .sort();

console.log(`Found ${existingDirs.length} existing city directories`);

// Manually list all cities from states.ts that should exist
const expectedCities = [
  // Alabama
  'auburn-alabama', 'birmingham-alabama', 'dothan-alabama', 'huntsville-alabama', 'mobile-alabama', 'montgomery-alabama', 'tuscaloosa-alabama',
  // Alaska  
  'anchorage-alaska', 'fairbanks-alaska', 'juneau-alaska', 'wasilla-alaska', 'sitka-alaska', 'kenai-alaska', 'ketchikan-alaska', 'kodiak-alaska', 'palmer-alaska', 'homer-alaska', 'soldotna-alaska',
  // Arizona
  'chandler-arizona', 'gilbert-arizona', 'glendale-arizona', 'mesa-arizona', 'peoria-arizona', 'phoenix-arizona', 'scottsdale-arizona', 'surprise-arizona', 'tempe-arizona', 'tucson-arizona',
  // Arkansas
  'little-rock-arkansas', 'fort-smith-arkansas', 'fayetteville-arkansas', 'springdale-arkansas', 'jonesboro-arkansas', 'north-little-rock-arkansas', 'conway-arkansas', 'rogers-arkansas', 'bentonville-arkansas', 'pine-bluff-arkansas',
  // California
  'anaheim-california', 'bakersfield-california', 'fremont-california', 'fresno-california', 'glendale-california', 'huntington-beach-california', 'irvine-california', 'long-beach-california', 'los-angeles-california', 'modesto-california', 'oakland-california', 'oxnard-california', 'riverside-california', 'sacramento-california', 'san-diego-california', 'san-bernardino-california', 'san-francisco-california', 'san-jose-california', 'santa-ana-california', 'stockton-california',
  // Colorado
  'arvada-colorado', 'aurora-colorado', 'boulder-colorado', 'colorado-springs-colorado', 'denver-colorado', 'fort-collins-colorado', 'lakewood-colorado', 'pueblo-colorado', 'thornton-colorado', 'westminster-colorado',
  // Connecticut
  'bridgeport-connecticut', 'new-haven-connecticut', 'hartford-connecticut', 'stamford-connecticut', 'waterbury-connecticut', 'norwalk-connecticut',
  // Delaware
  'wilmington-delaware', 'dover-delaware', 'newark-delaware',
  // Florida
  'cape-coral-florida', 'clearwater-florida', 'fort-lauderdale-florida', 'fort-myers-florida', 'gainesville-florida', 'hialeah-florida', 'jacksonville-florida', 'miami-florida', 'orlando-florida', 'sarasota-florida', 'st-petersburg-florida', 'tallahassee-florida', 'tampa-florida',
  // Georgia
  'albany-georgia', 'athens-georgia', 'atlanta-georgia', 'augusta-georgia', 'columbus-georgia', 'macon-georgia', 'marietta-georgia', 'roswell-georgia', 'sandy-springs-georgia', 'savannah-georgia', 'warner-robins-georgia',
  // Hawaii
  'honolulu-hawaii', 'hilo-hawaii', 'kailua-hawaii',
  // Idaho
  'boise-idaho', 'coeur-dalene-idaho', 'idaho-falls-idaho', 'meridian-idaho', 'nampa-idaho', 'pocatello-idaho', 'twin-falls-idaho',
  // Illinois
  'aurora-illinois', 'bloomington-illinois', 'champaign-urbana-illinois', 'chicago-illinois', 'cicero-illinois', 'decatur-illinois', 'elgin-illinois', 'evanston-illinois', 'joliet-illinois', 'moline-illinois', 'naperville-illinois', 'peoria-illinois', 'rockford-illinois', 'schaumburg-illinois', 'springfield-illinois', 'waukegan-illinois',
  // Indiana
  'bloomington-indiana', 'carmel-indiana', 'evansville-indiana', 'fort-wayne-indiana', 'gary-indiana', 'hammond-indiana', 'indianapolis-indiana', 'south-bend-indiana',
  // Iowa
  'ames-iowa', 'cedar-rapids-iowa', 'davenport-iowa', 'des-moines-iowa', 'iowa-city-iowa', 'sioux-city-iowa', 'waterloo-iowa',
  // Kansas
  'wichita-kansas', 'overland-park-kansas', 'kansas-city-kansas', 'topeka-kansas', 'olathe-kansas',
  // Kentucky
  'lexington-kentucky', 'louisville-kentucky',
  // Louisiana
  'new-orleans-louisiana',
  // Maine
  'portland-maine', 'bangor-maine', 'augusta-maine',
  // Maryland
  'annapolis-maryland', 'baltimore-maryland', 'columbia-maryland', 'frederick-maryland', 'gaithersburg-maryland', 'rockville-maryland', 'silver-spring-maryland',
  // Massachusetts
  'boston-massachusetts', 'cambridge-massachusetts', 'fall-river-massachusetts', 'springfield-massachusetts', 'worcester-massachusetts',
  // Michigan
  'detroit-michigan', 'flint-michigan', 'grand-rapids-michigan', 'kalamazoo-michigan', 'lansing-michigan', 'saginaw-michigan',
  // Minnesota
  'minneapolis-minnesota', 'rochester-minnesota', 'saint-paul-minnesota',
  // Mississippi
  'jackson-mississippi', 'gulfport-mississippi', 'hattiesburg-mississippi', 'biloxi-mississippi',
  // Missouri
  'columbia-missouri', 'independence-missouri', 'kansas-city-missouri', 'lees-summit-missouri', 'ofallon-missouri', 'springfield-missouri', 'st-louis-missouri',
  // Montana
  'billings-montana', 'missoula-montana', 'great-falls-montana', 'bozeman-montana', 'butte-montana', 'helena-montana',
  // Nebraska
  'omaha-nebraska', 'lincoln-nebraska', 'bellevue-nebraska',
  // Nevada
  'las-vegas-nevada', 'henderson-nevada', 'reno-nevada', 'north-las-vegas-nevada', 'sparks-nevada', 'carson-city-nevada',
  // New Hampshire
  'manchester-new-hampshire',
  // New Jersey
  'elizabeth-new-jersey', 'edison-new-jersey', 'jersey-city-new-jersey', 'newark-new-jersey', 'paterson-new-jersey', 'woodbridge-new-jersey',
  // New Mexico
  'albuquerque-new-mexico', 'santa-fe-new-mexico', 'las-cruces-new-mexico',
  // New York
  'albany-new-york', 'binghamton-new-york', 'buffalo-new-york', 'new-york-new-york', 'rochester-new-york', 'schenectady-new-york', 'syracuse-new-york', 'troy-new-york', 'utica-new-york', 'yonkers-new-york',
  // North Carolina
  'cary-north-carolina', 'charlotte-north-carolina', 'durham-north-carolina', 'fayetteville-north-carolina', 'greensboro-north-carolina', 'raleigh-north-carolina', 'winston-salem-north-carolina',
  // North Dakota
  'fargo-north-dakota', 'bismarck-north-dakota',
  // Ohio
  'akron-ohio', 'cincinnati-ohio', 'cleveland-ohio', 'columbus-ohio', 'dayton-ohio', 'toledo-ohio', 'youngstown-ohio',
  // Oklahoma
  'oklahoma-city-oklahoma', 'tulsa-oklahoma',
  // Oregon
  'portland-oregon', 'salem-oregon', 'eugene-oregon',
  // Pennsylvania
  'allentown-pennsylvania', 'bethlehem-pennsylvania', 'erie-pennsylvania', 'philadelphia-pennsylvania', 'pittsburgh-pennsylvania', 'reading-pennsylvania', 'scranton-pennsylvania', 'york-pennsylvania',
  // Rhode Island
  'providence-rhode-island', 'warwick-rhode-island', 'cranston-rhode-island',
  // South Carolina
  'charleston-south-carolina', 'columbia-south-carolina', 'greenville-south-carolina', 'mount-pleasant-south-carolina', 'north-charleston-south-carolina', 'rock-hill-south-carolina',
  // South Dakota
  'sioux-falls-south-dakota', 'rapid-city-south-dakota',
  // Tennessee
  'chattanooga-tennessee', 'clarksville-tennessee', 'franklin-tennessee', 'jackson-tennessee', 'johnson-city-tennessee', 'knoxville-tennessee', 'memphis-tennessee', 'murfreesboro-tennessee', 'nashville-tennessee',
  // Texas
  'amarillo-texas', 'arlington-texas', 'austin-texas', 'beaumont-texas', 'corpus-christi-texas', 'dallas-texas', 'el-paso-texas', 'fort-worth-texas', 'garland-texas', 'grand-prairie-texas', 'houston-texas', 'irving-texas', 'killeen-texas', 'laredo-texas', 'lubbock-texas', 'mcallen-texas', 'mesquite-texas', 'plano-texas', 'san-antonio-texas', 'tyler-texas', 'waco-texas',
  // Utah
  'salt-lake-city-utah', 'provo-utah', 'ogden-utah',
  // Vermont
  'burlington-vermont', 'south-burlington-vermont',
  // Virginia
  'chesapeake-virginia', 'norfolk-virginia', 'richmond-virginia', 'virginia-beach-virginia',
  // Washington
  'bellevue-washington', 'everett-washington', 'kent-washington', 'seattle-washington', 'spokane-washington', 'tacoma-washington', 'vancouver-washington',
  // Washington DC
  'washington-washington-dc',
  // West Virginia
  'charleston-west-virginia', 'huntington-west-virginia',
  // Wisconsin
  'madison-wisconsin', 'milwaukee-wisconsin',
  // Wyoming
  'casper-wyoming', 'cheyenne-wyoming', 'gillette-wyoming', 'laramie-wyoming', 'rock-springs-wyoming'
];

console.log(`Expected ${expectedCities.length} cities from states data`);

// Find missing cities
const missingCities = expectedCities.filter(citySlug => !existingDirs.includes(citySlug));

console.log(`\nMissing cities (${missingCities.length}):`);
missingCities.forEach(city => console.log(`- ${city}`));

// High priority missing cities (major metropolitan areas)
const highPriorityMissing = [
  'anchorage-alaska',
  'hartford-connecticut',
  'stamford-connecticut',
  'waterbury-connecticut',
  'norwalk-connecticut',
  'dover-delaware',
  'fort-smith-arkansas',
  'fayetteville-arkansas',
  'springdale-arkansas',
  'jonesboro-arkansas',
  'north-little-rock-arkansas',
  'conway-arkansas',
  'rogers-arkansas',
  'bentonville-arkansas',
  'pine-bluff-arkansas',
  'santa-fe-new-mexico',
  'las-cruces-new-mexico',
  'salem-oregon',
  'eugene-oregon',
  'warwick-rhode-island',
  'cranston-rhode-island',
  'billings-montana',
  'missoula-montana',
  'great-falls-montana',
  'bozeman-montana',
  'butte-montana',
  'helena-montana',
  'lincoln-nebraska',
  'bellevue-nebraska',
  'reno-nevada',
  'north-las-vegas-nevada',
  'sparks-nevada',
  'carson-city-nevada',
  'bangor-maine',
  'augusta-maine',
  'gulfport-mississippi',
  'hattiesburg-mississippi',
  'biloxi-mississippi',
  'overland-park-kansas',
  'kansas-city-kansas',
  'topeka-kansas',
  'olathe-kansas',
  'portland-maine',
  'jackson-mississippi'
].filter(city => missingCities.includes(city));

console.log(`\nHigh Priority Missing Cities (${highPriorityMissing.length}):`);
highPriorityMissing.forEach(city => console.log(`- ${city}`));

// Group by state
const missingByState = {};
missingCities.forEach(citySlug => {
  const stateSlug = citySlug.split('-').slice(-1)[0];
  if (!missingByState[stateSlug]) {
    missingByState[stateSlug] = [];
  }
  missingByState[stateSlug].push(citySlug);
});

console.log('\nMissing cities by state:');
Object.keys(missingByState).sort().forEach(state => {
  console.log(`\n${state.toUpperCase()}:`);
  missingByState[state].forEach(city => console.log(`  - ${city}`));
});
