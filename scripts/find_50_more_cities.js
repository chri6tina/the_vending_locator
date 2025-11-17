const fs = require('fs');

// 50 additional valuable cities (30K-150K population) to add
const targetCities = [
  // California - mid-size cities
  { name: 'San Mateo', slug: 'san-mateo-california', state: 'California', pop: '100K+' },
  { name: 'Santa Barbara', slug: 'santa-barbara-california', state: 'California', pop: '90K+' },
  { name: 'Santa Rosa', slug: 'santa-rosa-california', state: 'California', pop: '180K+' },
  { name: 'Redding', slug: 'redding-california', state: 'California', pop: '95K+' },
  { name: 'Chico', slug: 'chico-california', state: 'California', pop: '100K+' },
  { name: 'Napa', slug: 'napa-california', state: 'California', pop: '80K+' },
  { name: 'Mountain View', slug: 'mountain-view-california', state: 'California', pop: '85K+' },
  { name: 'Murrieta', slug: 'murrieta-california', state: 'California', pop: '115K+' },
  { name: 'Moreno Valley', slug: 'moreno-valley-california', state: 'California', pop: '210K+' },
  { name: 'Oceanside', slug: 'oceanside-california', state: 'California', pop: '175K+' },
  { name: 'Ontario', slug: 'ontario-california', state: 'California', pop: '180K+' },
  { name: 'Orange', slug: 'orange-california', state: 'California', pop: '140K+' },
  { name: 'Palmdale', slug: 'palmdale-california', state: 'California', pop: '170K+' },
  { name: 'Palm Desert', slug: 'palm-desert-california', state: 'California', pop: '52K+' },
  { name: 'Newport Beach', slug: 'newport-beach-california', state: 'California', pop: '85K+' },
  
  // Texas - additional cities
  { name: 'Irving', slug: 'irving-texas', state: 'Texas', pop: '250K+' },
  { name: 'Sugar Land', slug: 'sugar-land-texas', state: 'Texas', pop: '120K+' },
  { name: 'Temple', slug: 'temple-texas', state: 'Texas', pop: '85K+' },
  { name: 'Pearland', slug: 'pearland-texas', state: 'Texas', pop: '130K+' },
  { name: 'League City', slug: 'league-city-texas', state: 'Texas', pop: '110K+' },
  { name: 'Mesquite', slug: 'mesquite-texas', state: 'Texas', pop: '145K+' },
  { name: 'Carrollton', slug: 'carrollton-texas', state: 'Texas', pop: '140K+' },
  { name: 'Garland', slug: 'garland-texas', state: 'Texas', pop: '245K+' },
  { name: 'Frisco', slug: 'frisco-texas', state: 'Texas', pop: '210K+' },
  { name: 'McKinney', slug: 'mckinney-texas', state: 'Texas', pop: '210K+' },
  { name: 'Denton', slug: 'denton-texas', state: 'Texas', pop: '150K+' },
  { name: 'Richardson', slug: 'richardson-texas', state: 'Texas', pop: '120K+' },
  { name: 'Lewisville', slug: 'lewisville-texas', state: 'Texas', pop: '110K+' },
  
  // Illinois - Chicago suburbs and mid-size cities
  { name: 'Schaumburg', slug: 'schaumburg-illinois', state: 'Illinois', pop: '78K+' },
  { name: 'Evanston', slug: 'evanston-illinois', state: 'Illinois', pop: '78K+' },
  { name: 'Cicero', slug: 'cicero-illinois', state: 'Illinois', pop: '85K+' },
  { name: 'Arlington Heights', slug: 'arlington-heights-illinois', state: 'Illinois', pop: '77K+' },
  { name: 'Bolingbrook', slug: 'bolingbrook-illinois', state: 'Illinois', pop: '73K+' },
  { name: 'Palatine', slug: 'palatine-illinois', state: 'Illinois', pop: '67K+' },
  { name: 'Skokie', slug: 'skokie-illinois', state: 'Illinois', pop: '67K+' },
  { name: 'Des Plaines', slug: 'des-plaines-illinois', state: 'Illinois', pop: '60K+' },
  { name: 'Orland Park', slug: 'orland-park-illinois', state: 'Illinois', pop: '58K+' },
  { name: 'Oak Lawn', slug: 'oak-lawn-illinois', state: 'Illinois', pop: '58K+' },
  { name: 'Berwyn', slug: 'berwyn-illinois', state: 'Illinois', pop: '57K+' },
  { name: 'Mount Prospect', slug: 'mount-prospect-illinois', state: 'Illinois', pop: '56K+' },
  { name: 'Tinley Park', slug: 'tinley-park-illinois', state: 'Illinois', pop: '55K+' },
  { name: 'Oak Park', slug: 'oak-park-illinois', state: 'Illinois', pop: '54K+' },
  { name: 'Wheaton', slug: 'wheaton-illinois', state: 'Illinois', pop: '53K+' },
  { name: 'Downers Grove', slug: 'downers-grove-illinois', state: 'Illinois', pop: '50K+' },
  
  // Wisconsin - additional cities
  { name: 'Kenosha', slug: 'kenosha-wisconsin', state: 'Wisconsin', pop: '100K+' },
  { name: 'La Crosse', slug: 'la-crosse-wisconsin', state: 'Wisconsin', pop: '55K+' },
  
  // Kansas
  { name: 'Lawrence', slug: 'lawrence-kansas', state: 'Kansas', pop: '100K+' },
  
  // Missouri - additional
  { name: "Lee's Summit", slug: 'lees-summit-missouri', state: 'Missouri', pop: '105K+' },
  { name: 'Joplin', slug: 'joplin-missouri', state: 'Missouri', pop: '55K+' },
  
  // Indiana - additional
  { name: 'Muncie', slug: 'muncie-indiana', state: 'Indiana', pop: '65K+' },
  { name: 'Terre Haute', slug: 'terre-haute-indiana', state: 'Indiana', pop: '60K+' },
  { name: 'Anderson', slug: 'anderson-indiana', state: 'Indiana', pop: '54K+' },
  
  // Michigan - additional
  { name: 'Jackson', slug: 'jackson-michigan', state: 'Michigan', pop: '31K+' },
  { name: 'Port Huron', slug: 'port-huron-michigan', state: 'Michigan', pop: '28K+' },
  
  // Ohio - additional
  { name: 'Middletown', slug: 'middletown-ohio', state: 'Ohio', pop: '50K+' },
  { name: 'Newark', slug: 'newark-ohio', state: 'Ohio', pop: '50K+' },
  
  // South Dakota
  { name: 'Rapid City', slug: 'rapid-city-south-dakota', state: 'South Dakota', pop: '75K+' },
  
  // North Dakota
  { name: 'Bismarck', slug: 'bismarck-north-dakota', state: 'North Dakota', pop: '75K+' },
  
  // Colorado - additional
  { name: 'Boulder', slug: 'boulder-colorado', state: 'Colorado', pop: '110K+' },
  { name: 'Centennial', slug: 'centennial-colorado', state: 'Colorado', pop: '110K+' },
  { name: 'Greeley', slug: 'greeley-colorado', state: 'Colorado', pop: '110K+' },
  { name: 'Pueblo', slug: 'pueblo-colorado', state: 'Colorado', pop: '110K+' },
  { name: 'Thornton', slug: 'thornton-colorado', state: 'Colorado', pop: '140K+' },
  { name: 'Westminster', slug: 'westminster-colorado', state: 'Colorado', pop: '115K+' },
  { name: 'Grand Junction', slug: 'grand-junction-colorado', state: 'Colorado', pop: '65K+' },
  
  // Iowa - all major cities
  { name: 'Cedar Rapids', slug: 'cedar-rapids-iowa', state: 'Iowa', pop: '135K+' },
  { name: 'Davenport', slug: 'davenport-iowa', state: 'Iowa', pop: '100K+' },
  { name: 'Sioux City', slug: 'sioux-city-iowa', state: 'Iowa', pop: '85K+' },
  { name: 'Waterloo', slug: 'waterloo-iowa', state: 'Iowa', pop: '65K+' },
  { name: 'Ames', slug: 'ames-iowa', state: 'Iowa', pop: '70K+' },
  { name: 'Iowa City', slug: 'iowa-city-iowa', state: 'Iowa', pop: '75K+' },
  { name: 'Des Moines', slug: 'des-moines-iowa', state: 'Iowa', pop: '215K+' },
  { name: 'Dubuque', slug: 'dubuque-iowa', state: 'Iowa', pop: '60K+' },
  
  // Idaho - all major cities
  { name: 'Meridian', slug: 'meridian-idaho', state: 'Idaho', pop: '120K+' },
  { name: 'Nampa', slug: 'nampa-idaho', state: 'Idaho', pop: '110K+' },
  { name: 'Idaho Falls', slug: 'idaho-falls-idaho', state: 'Idaho', pop: '70K+' },
  { name: 'Pocatello', slug: 'pocatello-idaho', state: 'Idaho', pop: '60K+' },
  { name: "Coeur d'Alene", slug: 'coeur-dalene-idaho', state: 'Idaho', pop: '55K+' },
  { name: 'Twin Falls', slug: 'twin-falls-idaho', state: 'Idaho', pop: '55K+' },
  { name: 'Caldwell', slug: 'caldwell-idaho', state: 'Idaho', pop: '65K+' },
  { name: 'Rexburg', slug: 'rexburg-idaho', state: 'Idaho', pop: '35K+' },
  
  // Maryland - additional
  { name: 'Gaithersburg', slug: 'gaithersburg-maryland', state: 'Maryland', pop: '70K+' },
  { name: 'Columbia', slug: 'columbia-maryland', state: 'Maryland', pop: '105K+' },
  { name: 'Silver Spring', slug: 'silver-spring-maryland', state: 'Maryland', pop: '82K+' },
  { name: 'Annapolis', slug: 'annapolis-maryland', state: 'Maryland', pop: '40K+' },
  { name: 'Frederick', slug: 'frederick-maryland', state: 'Maryland', pop: '80K+' },
  { name: 'Hagerstown', slug: 'hagerstown-maryland', state: 'Maryland', pop: '45K+' },
  { name: 'Rockville', slug: 'rockville-maryland', state: 'Maryland', pop: '70K+' },
  
  // Massachusetts - additional
  { name: 'Cambridge', slug: 'cambridge-massachusetts', state: 'Massachusetts', pop: '120K+' },
  { name: 'Fall River', slug: 'fall-river-massachusetts', state: 'Massachusetts', pop: '95K+' },
  
  // North Carolina - additional
  { name: 'Cary', slug: 'cary-north-carolina', state: 'North Carolina', pop: '180K+' },
  { name: 'Durham', slug: 'durham-north-carolina', state: 'North Carolina', pop: '285K+' },
  { name: 'Fayetteville', slug: 'fayetteville-north-carolina', state: 'North Carolina', pop: '210K+' },
  { name: 'Winston-Salem', slug: 'winston-salem-north-carolina', state: 'North Carolina', pop: '250K+' },
  { name: 'Hickory', slug: 'hickory-north-carolina', state: 'North Carolina', pop: '45K+' },
  { name: 'High Point', slug: 'high-point-north-carolina', state: 'North Carolina', pop: '115K+' },
  { name: 'Wilmington', slug: 'wilmington-north-carolina', state: 'North Carolina', pop: '120K+' },
  
  // Virginia - additional
  { name: 'Alexandria', slug: 'alexandria-virginia', state: 'Virginia', pop: '160K+' },
  { name: 'Portsmouth', slug: 'portsmouth-virginia', state: 'Virginia', pop: '95K+' },
  { name: 'Hampton', slug: 'hampton-virginia', state: 'Virginia', pop: '135K+' },
  { name: 'Newport News', slug: 'newport-news-virginia', state: 'Virginia', pop: '185K+' },
  { name: 'Chesapeake', slug: 'chesapeake-virginia', state: 'Virginia', pop: '250K+' },
  { name: 'Norfolk', slug: 'norfolk-virginia', state: 'Virginia', pop: '235K+' },
  { name: 'Richmond', slug: 'richmond-virginia', state: 'Virginia', pop: '230K+' },
  { name: 'Lynchburg', slug: 'lynchburg-virginia', state: 'Virginia', pop: '80K+' },
  { name: 'Roanoke', slug: 'roanoke-virginia', state: 'Virginia', pop: '100K+' },
  { name: 'Suffolk', slug: 'suffolk-virginia', state: 'Virginia', pop: '95K+' },
  { name: 'Charlottesville', slug: 'charlottesville-virginia', state: 'Virginia', pop: '50K+' },
  { name: 'Arlington', slug: 'arlington-virginia', state: 'Virginia', pop: '240K+' },
  
  // New Jersey - additional
  { name: 'Jersey City', slug: 'jersey-city-new-jersey', state: 'New Jersey', pop: '290K+' },
  { name: 'Newark', slug: 'newark-new-jersey', state: 'New Jersey', pop: '310K+' },
  { name: 'Paterson', slug: 'paterson-new-jersey', state: 'New Jersey', pop: '160K+' },
  { name: 'Elizabeth', slug: 'elizabeth-new-jersey', state: 'New Jersey', pop: '135K+' },
  { name: 'Woodbridge', slug: 'woodbridge-new-jersey', state: 'New Jersey', pop: '105K+' },
  { name: 'Edison', slug: 'edison-new-jersey', state: 'New Jersey', pop: '105K+' },
  
  // Oregon - additional
  { name: 'Gresham', slug: 'gresham-oregon', state: 'Oregon', pop: '115K+' },
  { name: 'Hillsboro', slug: 'hillsboro-oregon', state: 'Oregon', pop: '110K+' },
  { name: 'Bend', slug: 'bend-oregon', state: 'Oregon', pop: '105K+' },
  { name: 'Beaverton', slug: 'beaverton-oregon', state: 'Oregon', pop: '100K+' },
  { name: 'Medford', slug: 'medford-oregon', state: 'Oregon', pop: '90K+' },
  { name: 'Albany', slug: 'albany-oregon', state: 'Oregon', pop: '60K+' },
  
  // Minnesota - additional
  { name: 'St. Paul', slug: 'saint-paul-minnesota', state: 'Minnesota', pop: '310K+' },
  { name: 'Rochester', slug: 'rochester-minnesota', state: 'Minnesota', pop: '120K+' },
  { name: 'Duluth', slug: 'duluth-minnesota', state: 'Minnesota', pop: '90K+' },
  { name: 'Bloomington', slug: 'bloomington-minnesota', state: 'Minnesota', pop: '90K+' },
  { name: 'Brooklyn Park', slug: 'brooklyn-park-minnesota', state: 'Minnesota', pop: '85K+' },
  { name: 'Plymouth', slug: 'plymouth-minnesota', state: 'Minnesota', pop: '80K+' },
  { name: 'St. Cloud', slug: 'st-cloud-minnesota', state: 'Minnesota', pop: '70K+' },
  { name: 'Eagan', slug: 'eagan-minnesota', state: 'Minnesota', pop: '70K+' },
  { name: 'Woodbury', slug: 'woodbury-minnesota', state: 'Minnesota', pop: '80K+' },
  { name: 'Maple Grove', slug: 'maple-grove-minnesota', state: 'Minnesota', pop: '75K+' },
  { name: 'Lakeville', slug: 'lakeville-minnesota', state: 'Minnesota', pop: '75K+' },
  { name: 'Mankato', slug: 'mankato-minnesota', state: 'Minnesota', pop: '45K+' },
  
  // Wisconsin - additional
  { name: 'Madison', slug: 'madison-wisconsin', state: 'Wisconsin', pop: '270K+' },
  { name: 'Green Bay', slug: 'green-bay-wisconsin', state: 'Wisconsin', pop: '110K+' },
  { name: 'Racine', slug: 'racine-wisconsin', state: 'Wisconsin', pop: '80K+' },
  { name: 'Appleton', slug: 'appleton-wisconsin', state: 'Wisconsin', pop: '75K+' },
  { name: 'Waukesha', slug: 'waukesha-wisconsin', state: 'Wisconsin', pop: '75K+' },
  { name: 'Eau Claire', slug: 'eau-claire-wisconsin', state: 'Wisconsin', pop: '70K+' },
  { name: 'Oshkosh', slug: 'oshkosh-wisconsin', state: 'Wisconsin', pop: '70K+' },
  { name: 'Janesville', slug: 'janesville-wisconsin', state: 'Wisconsin', pop: '65K+' },
  { name: 'Sheboygan', slug: 'sheboygan-wisconsin', state: 'Wisconsin', pop: '50K+' },
  
  // Tennessee - additional
  { name: 'Nashville', slug: 'nashville-tennessee', state: 'Tennessee', pop: '715K+' },
  { name: 'Memphis', slug: 'memphis-tennessee', state: 'Tennessee', pop: '630K+' },
  { name: 'Knoxville', slug: 'knoxville-tennessee', state: 'Tennessee', pop: '195K+' },
  { name: 'Chattanooga', slug: 'chattanooga-tennessee', state: 'Tennessee', pop: '185K+' },
  { name: 'Clarksville', slug: 'clarksville-tennessee', state: 'Tennessee', pop: '170K+' },
  { name: 'Murfreesboro', slug: 'murfreesboro-tennessee', state: 'Tennessee', pop: '160K+' },
  { name: 'Franklin', slug: 'franklin-tennessee', state: 'Tennessee', pop: '85K+' },
  { name: 'Jackson', slug: 'jackson-tennessee', state: 'Tennessee', pop: '70K+' },
  { name: 'Johnson City', slug: 'johnson-city-tennessee', state: 'Tennessee', pop: '75K+' },
  { name: 'Kingsport', slug: 'kingsport-tennessee', state: 'Tennessee', pop: '55K+' },
  
  // Indiana - additional
  { name: 'Indianapolis', slug: 'indianapolis-indiana', state: 'Indiana', pop: '890K+' },
  { name: 'Fort Wayne', slug: 'fort-wayne-indiana', state: 'Indiana', pop: '270K+' },
  { name: 'Evansville', slug: 'evansville-indiana', state: 'Indiana', pop: '120K+' },
  { name: 'South Bend', slug: 'south-bend-indiana', state: 'Indiana', pop: '105K+' },
  { name: 'Carmel', slug: 'carmel-indiana', state: 'Indiana', pop: '100K+' },
  { name: 'Bloomington', slug: 'bloomington-indiana', state: 'Indiana', pop: '85K+' },
  { name: 'Hammond', slug: 'hammond-indiana', state: 'Indiana', pop: '80K+' },
  { name: 'Gary', slug: 'gary-indiana', state: 'Indiana', pop: '75K+' },
  { name: 'Kokomo', slug: 'kokomo-indiana', state: 'Indiana', pop: '60K+' },
  
  // Additional high-value cities
  // South Carolina
  { name: 'Aiken', slug: 'aiken-south-carolina', state: 'South Carolina', pop: '32K+' },
  { name: 'Anderson', slug: 'anderson-south-carolina', state: 'South Carolina', pop: '28K+' },
  { name: 'Charleston', slug: 'charleston-south-carolina', state: 'South Carolina', pop: '155K+' },
  { name: 'Columbia', slug: 'columbia-south-carolina', state: 'South Carolina', pop: '140K+' },
  { name: 'Conway', slug: 'conway-south-carolina', state: 'South Carolina', pop: '28K+' },
  { name: 'Florence', slug: 'florence-south-carolina', state: 'South Carolina', pop: '40K+' },
  { name: 'Goose Creek', slug: 'goose-creek-south-carolina', state: 'South Carolina', pop: '45K+' },
  { name: 'Greenville', slug: 'greenville-south-carolina', state: 'South Carolina', pop: '75K+' },
  { name: 'Hilton Head Island', slug: 'hilton-head-island-south-carolina', state: 'South Carolina', pop: '40K+' },
  { name: 'Mount Pleasant', slug: 'mount-pleasant-south-carolina', state: 'South Carolina', pop: '95K+' },
  { name: 'Myrtle Beach', slug: 'myrtle-beach-south-carolina', state: 'South Carolina', pop: '38K+' },
  { name: 'North Charleston', slug: 'north-charleston-south-carolina', state: 'South Carolina', pop: '120K+' },
  { name: 'Rock Hill', slug: 'rock-hill-south-carolina', state: 'South Carolina', pop: '75K+' },
  { name: 'Spartanburg', slug: 'spartanburg-south-carolina', state: 'South Carolina', pop: '40K+' },
  { name: 'Summerville', slug: 'summerville-south-carolina', state: 'South Carolina', pop: '55K+' },
  
  // Kentucky
  { name: 'Bowling Green', slug: 'bowling-green-kentucky', state: 'Kentucky', pop: '75K+' },
  { name: 'Covington', slug: 'covington-kentucky', state: 'Kentucky', pop: '42K+' },
  { name: 'Florence', slug: 'florence-kentucky', state: 'Kentucky', pop: '33K+' },
  { name: 'Frankfort', slug: 'frankfort-kentucky', state: 'Kentucky', pop: '28K+' },
  { name: 'Georgetown', slug: 'georgetown-kentucky', state: 'Kentucky', pop: '37K+' },
  { name: 'Hopkinsville', slug: 'hopkinsville-kentucky', state: 'Kentucky', pop: '32K+' },
  { name: 'Lexington', slug: 'lexington-kentucky', state: 'Kentucky', pop: '325K+' },
  { name: 'Louisville', slug: 'louisville-kentucky', state: 'Kentucky', pop: '630K+' },
  { name: 'Owensboro', slug: 'owensboro-kentucky', state: 'Kentucky', pop: '60K+' },
  { name: 'Paducah', slug: 'paducah-kentucky', state: 'Kentucky', pop: '26K+' },
  { name: 'Richmond', slug: 'richmond-kentucky', state: 'Kentucky', pop: '36K+' },
  
  // Louisiana
  { name: 'Alexandria', slug: 'alexandria-louisiana', state: 'Louisiana', pop: '45K+' },
  { name: 'Baton Rouge', slug: 'baton-rouge-louisiana', state: 'Louisiana', pop: '225K+' },
  { name: 'Bossier City', slug: 'bossier-city-louisiana', state: 'Louisiana', pop: '65K+' },
  { name: 'Houma', slug: 'houma-louisiana', state: 'Louisiana', pop: '33K+' },
  { name: 'Kenner', slug: 'kenner-louisiana', state: 'Louisiana', pop: '66K+' },
  { name: 'Lafayette', slug: 'lafayette-louisiana', state: 'Louisiana', pop: '125K+' },
  { name: 'Lake Charles', slug: 'lake-charles-louisiana', state: 'Louisiana', pop: '85K+' },
  { name: 'Metairie', slug: 'metairie-louisiana', state: 'Louisiana', pop: '140K+' },
  { name: 'Monroe', slug: 'monroe-louisiana', state: 'Louisiana', pop: '47K+' },
  { name: 'New Orleans', slug: 'new-orleans-louisiana', state: 'Louisiana', pop: '380K+' },
  { name: 'Shreveport', slug: 'shreveport-louisiana', state: 'Louisiana', pop: '185K+' },
  { name: 'Slidell', slug: 'slidell-louisiana', state: 'Louisiana', pop: '28K+' },
  
  // Mississippi
  { name: 'Biloxi', slug: 'biloxi-mississippi', state: 'Mississippi', pop: '50K+' },
  { name: 'Gulfport', slug: 'gulfport-mississippi', state: 'Mississippi', pop: '72K+' },
  { name: 'Hattiesburg', slug: 'hattiesburg-mississippi', state: 'Mississippi', pop: '48K+' },
  { name: 'Jackson', slug: 'jackson-mississippi', state: 'Mississippi', pop: '150K+' },
  { name: 'Southaven', slug: 'southaven-mississippi', state: 'Mississippi', pop: '60K+' },
  { name: 'Tupelo', slug: 'tupelo-mississippi', state: 'Mississippi', pop: '38K+' },
  
  // Oklahoma
  { name: 'Broken Arrow', slug: 'broken-arrow-oklahoma', state: 'Oklahoma', pop: '115K+' },
  { name: 'Lawton', slug: 'lawton-oklahoma', state: 'Oklahoma', pop: '95K+' },
  { name: 'Norman', slug: 'norman-oklahoma', state: 'Oklahoma', pop: '130K+' },
  { name: 'Oklahoma City', slug: 'oklahoma-city-oklahoma', state: 'Oklahoma', pop: '700K+' },
  { name: 'Tulsa', slug: 'tulsa-oklahoma', state: 'Oklahoma', pop: '410K+' },
  
  // Utah - additional
  { name: 'Salt Lake City', slug: 'salt-lake-city-utah', state: 'Utah', pop: '205K+' },
  { name: 'West Valley City', slug: 'west-valley-city-utah', state: 'Utah', pop: '140K+' },
  { name: 'Provo', slug: 'provo-utah', state: 'Utah', pop: '120K+' },
  { name: 'West Jordan', slug: 'west-jordan-utah', state: 'Utah', pop: '120K+' },
  { name: 'Ogden', slug: 'ogden-utah', state: 'Utah', pop: '90K+' },
  { name: 'St. George', slug: 'st-george-utah', state: 'Utah', pop: '100K+' },
  { name: 'Orem', slug: 'orem-utah', state: 'Utah', pop: '100K+' },
  { name: 'Sandy', slug: 'sandy-utah', state: 'Utah', pop: '95K+' }
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
const missingCities = targetCities.filter(city => !existingCitySlugs.has(city.slug));

console.log(`Missing Cities from Target List (${missingCities.length}):\n`);

// Group by state
const missingByState = {};
missingCities.forEach(city => {
  if (!missingByState[city.state]) {
    missingByState[city.state] = [];
  }
  missingByState[city.state].push(city);
});

// Display results - limit to first 50
const displayCities = missingCities.slice(0, 50);
const displayByState = {};
displayCities.forEach(city => {
  if (!displayByState[city.state]) {
    displayByState[city.state] = [];
  }
  displayByState[city.state].push(city);
});

Object.keys(displayByState).sort().forEach(state => {
  console.log(`${state} (${displayByState[state].length} missing):`);
  displayByState[state].forEach(city => {
    console.log(`  - ${city.name} (${city.slug}) - ${city.pop}`);
  });
  console.log('');
});

// Save to file
const report = {
  totalChecked: targetCities.length,
  existing: targetCities.length - missingCities.length,
  missing: missingCities.length,
  missingCities: missingCities.slice(0, 50), // First 50
  missingByState: displayByState
};

fs.writeFileSync('50_more_cities_report.json', JSON.stringify(report, null, 2));
console.log(`\n📄 Report saved to 50_more_cities_report.json`);

// Generate command to create first 50 missing cities
if (displayCities.length > 0) {
  const slugs = displayCities.map(c => c.slug).join(' ');
  console.log(`\n💡 To create first 50 missing cities, run:`);
  console.log(`node scripts/create_specific_city_pages.js ${slugs}`);
  
  // Also show by state
  console.log(`\n📋 Create by state:`);
  Object.keys(displayByState).sort().forEach(state => {
    const stateSlugs = displayByState[state].map(c => c.slug).join(' ');
    if (stateSlugs.length < 2000) {
      console.log(`\n# ${state} (${displayByState[state].length} cities)`);
      console.log(`node scripts/create_specific_city_pages.js ${stateSlugs}`);
    } else {
      console.log(`\n# ${state} (${displayByState[state].length} cities - split into batches)`);
    }
  });
} else {
  console.log(`\n✅ All cities in the target list already exist!`);
}

