const fs = require('fs');
const path = require('path');

// Read states.ts to get all existing cities
const statesContent = fs.readFileSync('src/data/states.ts', 'utf8');
const existingInStates = new Set();
const stateCityRegex = /\{ name: '([^']+)', slug: '([^']+)' \}/g;
let match;
while ((match = stateCityRegex.exec(statesContent)) !== null) {
  existingInStates.add(match[2]);
}

// Check existing pages
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
console.log(`Found ${existingPages.size} existing pages`);

// Expanded comprehensive list - focusing on smaller cities, suburbs, and towns
const expandedCities = [
  // More Alabama
  { name: 'Alexander City', state: 'Alabama', slug: 'alexander-city-alabama' },
  { name: 'Andalusia', state: 'Alabama', slug: 'andalusia-alabama' },
  { name: 'Anniston', state: 'Alabama', slug: 'anniston-alabama' },
  { name: 'Atmore', state: 'Alabama', slug: 'atmore-alabama' },
  { name: 'Bay Minette', state: 'Alabama', slug: 'bay-minette-alabama' },
  { name: 'Brewton', state: 'Alabama', slug: 'brewton-alabama' },
  { name: 'Cullman', state: 'Alabama', slug: 'cullman-alabama' },
  { name: 'Demopolis', state: 'Alabama', slug: 'demopolis-alabama' },
  { name: 'Eufaula', state: 'Alabama', slug: 'eufaula-alabama' },
  { name: 'Fairhope', state: 'Alabama', slug: 'fairhope-alabama' },
  { name: 'Florence', state: 'Alabama', slug: 'florence-alabama' },
  { name: 'Fort Payne', state: 'Alabama', slug: 'fort-payne-alabama' },
  { name: 'Greenville', state: 'Alabama', slug: 'greenville-alabama' },
  { name: 'Guntersville', state: 'Alabama', slug: 'guntersville-alabama' },
  { name: 'Jasper', state: 'Alabama', slug: 'jasper-alabama' },
  { name: 'Millbrook', state: 'Alabama', slug: 'millbrook-alabama' },
  { name: 'Muscle Shoals', state: 'Alabama', slug: 'muscle-shoals-alabama' },
  { name: 'Northport', state: 'Alabama', slug: 'northport-alabama' },
  { name: 'Oxford', state: 'Alabama', slug: 'oxford-alabama' },
  { name: 'Pell City', state: 'Alabama', slug: 'pell-city-alabama' },
  { name: 'Phenix City', state: 'Alabama', slug: 'phenix-city-alabama' },
  { name: 'Scottsboro', state: 'Alabama', slug: 'scottsboro-alabama' },
  { name: 'Sheffield', state: 'Alabama', slug: 'sheffield-alabama' },
  { name: 'Sylacauga', state: 'Alabama', slug: 'sylacauga-alabama' },
  { name: 'Talladega', state: 'Alabama', slug: 'talladega-alabama' },
  { name: 'Troy', state: 'Alabama', slug: 'troy-alabama' },
  { name: 'Tuscumbia', state: 'Alabama', slug: 'tuscumbia-alabama' },
  
  // More Arizona
  { name: 'Bisbee', state: 'Arizona', slug: 'bisbee-arizona' },
  { name: 'Camp Verde', state: 'Arizona', slug: 'camp-verde-arizona' },
  { name: 'Globe', state: 'Arizona', slug: 'globe-arizona' },
  { name: 'Page', state: 'Arizona', slug: 'page-arizona' },
  { name: 'Show Low', state: 'Arizona', slug: 'show-low-arizona' },
  { name: 'Somerton', state: 'Arizona', slug: 'somerton-arizona' },
  { name: 'Window Rock', state: 'Arizona', slug: 'window-rock-arizona' },
  { name: 'Winslow', state: 'Arizona', slug: 'winslow-arizona' },
  
  // More Arkansas
  { name: 'Batesville', state: 'Arkansas', slug: 'batesville-arkansas' },
  { name: 'Benton', state: 'Arkansas', slug: 'benton-arkansas' },
  { name: 'Blytheville', state: 'Arkansas', slug: 'blytheville-arkansas' },
  { name: 'Camden', state: 'Arkansas', slug: 'camden-arkansas' },
  { name: 'El Dorado', state: 'Arkansas', slug: 'el-dorado-arkansas' },
  { name: 'Forrest City', state: 'Arkansas', slug: 'forrest-city-arkansas' },
  { name: 'Harrison', state: 'Arkansas', slug: 'harrison-arkansas' },
  { name: 'Helena', state: 'Arkansas', slug: 'helena-arkansas' },
  { name: 'Hope', state: 'Arkansas', slug: 'hope-arkansas' },
  { name: 'Magnolia', state: 'Arkansas', slug: 'magnolia-arkansas' },
  { name: 'Monticello', state: 'Arkansas', slug: 'monticello-arkansas' },
  { name: 'Mountain Home', state: 'Arkansas', slug: 'mountain-home-arkansas' },
  { name: 'Russellville', state: 'Arkansas', slug: 'russellville-arkansas' },
  { name: 'Siloam Springs', state: 'Arkansas', slug: 'siloam-springs-arkansas' },
  { name: 'Van Buren', state: 'Arkansas', slug: 'van-buren-arkansas' },
  
  // More California - smaller cities
  { name: 'Arroyo Grande', state: 'California', slug: 'arroyo-grande-california' },
  { name: 'Atherton', state: 'California', slug: 'atherton-california' },
  { name: 'Atwater', state: 'California', slug: 'atwater-california' },
  { name: 'Bell', state: 'California', slug: 'bell-california' },
  { name: 'Bishop', state: 'California', slug: 'bishop-california' },
  { name: 'Burlingame', state: 'California', slug: 'burlingame-california' },
  { name: 'Carpinteria', state: 'California', slug: 'carpinteria-california' },
  { name: 'Clearlake', state: 'California', slug: 'clearlake-california' },
  { name: 'Cloverdale', state: 'California', slug: 'cloverdale-california' },
  { name: 'Colusa', state: 'California', slug: 'colusa-california' },
  { name: 'Corcoran', state: 'California', slug: 'corcoran-california' },
  { name: 'Desert Hot Springs', state: 'California', slug: 'desert-hot-springs-california' },
  { name: 'Duarte', state: 'California', slug: 'duarte-california' },
  { name: 'Eureka', state: 'California', slug: 'eureka-california' },
  { name: 'Exeter', state: 'California', slug: 'exeter-california' },
  { name: 'Farmersville', state: 'California', slug: 'farmersville-california' },
  { name: 'Fort Bragg', state: 'California', slug: 'fort-bragg-california' },
  { name: 'Galt', state: 'California', slug: 'galt-california' },
  { name: 'Gonzales', state: 'California', slug: 'gonzales-california' },
  { name: 'Grand Terrace', state: 'California', slug: 'grand-terrace-california' },
  { name: 'Grass Valley', state: 'California', slug: 'grass-valley-california' },
  { name: 'Grover Beach', state: 'California', slug: 'grover-beach-california' },
  { name: 'Healdsburg', state: 'California', slug: 'healdsburg-california' },
  { name: 'Hermosa Beach', state: 'California', slug: 'hermosa-beach-california' },
  { name: 'Highland', state: 'California', slug: 'highland-california' },
  { name: 'Hollister', state: 'California', slug: 'hollister-california' },
  { name: 'Isleton', state: 'California', slug: 'isleton-california' },
  { name: 'Jackson', state: 'California', slug: 'jackson-california' },
  { name: 'La Verne', state: 'California', slug: 'la-verne-california' },
  { name: 'Lafayette', state: 'California', slug: 'lafayette-california' },
  { name: 'Lakeport', state: 'California', slug: 'lakeport-california' },
  { name: 'Lathrop', state: 'California', slug: 'lathrop-california' },
  { name: 'Lawndale', state: 'California', slug: 'lawndale-california' },
  { name: 'Lemoore', state: 'California', slug: 'lemoore-california' },
  { name: 'Lincoln', state: 'California', slug: 'lincoln-california' },
  { name: 'Lindsay', state: 'California', slug: 'lindsay-california' },
  { name: 'Livingston', state: 'California', slug: 'livingston-california' },
  { name: 'Lompoc', state: 'California', slug: 'lompoc-california' },
  { name: 'Los Banos', state: 'California', slug: 'los-banos-california' },
  { name: 'Manteca', state: 'California', slug: 'manteca-california' },
  { name: 'Marina', state: 'California', slug: 'marina-california' },
  { name: 'Martinez', state: 'California', slug: 'martinez-california' },
  { name: 'Marysville', state: 'California', slug: 'marysville-california' },
  { name: 'McFarland', state: 'California', slug: 'mcfarland-california' },
  { name: 'Menlo Park', state: 'California', slug: 'menlo-park-california' },
  { name: 'Merced', state: 'California', slug: 'merced-california' },
  { name: 'Milpitas', state: 'California', slug: 'milpitas-california' },
  { name: 'Montebello', state: 'California', slug: 'montebello-california' },
  { name: 'Moorpark', state: 'California', slug: 'moorpark-california' },
  { name: 'Morro Bay', state: 'California', slug: 'morro-bay-california' },
  { name: 'Mount Shasta', state: 'California', slug: 'mount-shasta-california' },
  { name: 'Needles', state: 'California', slug: 'needles-california' },
  { name: 'Newman', state: 'California', slug: 'newman-california' },
  { name: 'Norco', state: 'California', slug: 'norco-california' },
  { name: 'Oakley', state: 'California', slug: 'oakley-california' },
  { name: 'Ojai', state: 'California', slug: 'ojai-california' },
  { name: 'Orange Cove', state: 'California', slug: 'orange-cove-california' },
  { name: 'Orinda', state: 'California', slug: 'orinda-california' },
  { name: 'Orland', state: 'California', slug: 'orland-california' },
  { name: 'Oroville', state: 'California', slug: 'oroville-california' },
  { name: 'Pacific Grove', state: 'California', slug: 'pacific-grove-california' },
  { name: 'Paradise', state: 'California', slug: 'paradise-california' },
  { name: 'Paso Robles', state: 'California', slug: 'paso-robles-california' },
  { name: 'Patterson', state: 'California', slug: 'patterson-california' },
  { name: 'Perris', state: 'California', slug: 'perris-california' },
  { name: 'Piedmont', state: 'California', slug: 'piedmont-california' },
  { name: 'Pinole', state: 'California', slug: 'pinole-california' },
  { name: 'Placerville', state: 'California', slug: 'placerville-california' },
  { name: 'Pleasant Hill', state: 'California', slug: 'pleasant-hill-california' },
  { name: 'Porterville', state: 'California', slug: 'porterville-california' },
  { name: 'Rancho Mirage', state: 'California', slug: 'rancho-mirage-california' },
  { name: 'Red Bluff', state: 'California', slug: 'red-bluff-california' },
  { name: 'Redlands', state: 'California', slug: 'redlands-california' },
  { name: 'Ripon', state: 'California', slug: 'ripon-california' },
  { name: 'Riverbank', state: 'California', slug: 'riverbank-california' },
  { name: 'Rocklin', state: 'California', slug: 'rocklin-california' },
  { name: 'San Anselmo', state: 'California', slug: 'san-anselmo-california' },
  { name: 'San Clemente', state: 'California', slug: 'san-clemente-california' },
  { name: 'San Dimas', state: 'California', slug: 'san-dimas-california' },
  { name: 'San Juan Capistrano', state: 'California', slug: 'san-juan-capistrano-california' },
  { name: 'San Marcos', state: 'California', slug: 'san-marcos-california' },
  { name: 'Sausalito', state: 'California', slug: 'sausalito-california' },
  { name: 'Scotts Valley', state: 'California', slug: 'scotts-valley-california' },
  { name: 'Sebastopol', state: 'California', slug: 'sebastopol-california' },
  { name: 'Shafter', state: 'California', slug: 'shafter-california' },
  { name: 'Solvang', state: 'California', slug: 'solvang-california' },
  { name: 'Sonora', state: 'California', slug: 'sonora-california' },
  { name: 'South Lake Tahoe', state: 'California', slug: 'south-lake-tahoe-california' },
  { name: 'St. Helena', state: 'California', slug: 'st-helena-california' },
  { name: 'Stanton', state: 'California', slug: 'stanton-california' },
  { name: 'Susanville', state: 'California', slug: 'susanville-california' },
  { name: 'Taft', state: 'California', slug: 'taft-california' },
  { name: 'Tehachapi', state: 'California', slug: 'tehachapi-california' },
  { name: 'Truckee', state: 'California', slug: 'truckee-california' },
  { name: 'Twentynine Palms', state: 'California', slug: 'twentynine-palms-california' },
  { name: 'Waterford', state: 'California', slug: 'waterford-california' },
  { name: 'Weed', state: 'California', slug: 'weed-california' },
  { name: 'Wildomar', state: 'California', slug: 'wildomar-california' },
  { name: 'Winters', state: 'California', slug: 'winters-california' },
  { name: 'Yreka', state: 'California', slug: 'yreka-california' },
  
  // More states - smaller cities
  { name: 'Ashland', state: 'Oregon', slug: 'ashland-oregon' },
  { name: 'Klamath Falls', state: 'Oregon', slug: 'klamath-falls-oregon' },
  { name: 'Oregon City', state: 'Oregon', slug: 'oregon-city-oregon' },
  { name: 'Roseburg', state: 'Oregon', slug: 'roseburg-oregon' },
  { name: 'The Dalles', state: 'Oregon', slug: 'the-dalles-oregon' },
  
  { name: 'Aberdeen', state: 'Washington', slug: 'aberdeen-washington' },
  { name: 'Anacortes', state: 'Washington', slug: 'anacortes-washington' },
  { name: 'Centralia', state: 'Washington', slug: 'centralia-washington' },
  { name: 'Cheney', state: 'Washington', slug: 'cheney-washington' },
  { name: 'Des Moines', state: 'Washington', slug: 'des-moines-washington' },
  { name: 'Ellensburg', state: 'Washington', slug: 'ellensburg-washington' },
  { name: 'Enumclaw', state: 'Washington', slug: 'enumclaw-washington' },
  { name: 'Issaquah', state: 'Washington', slug: 'issaquah-washington' },
  { name: 'Mukilteo', state: 'Washington', slug: 'mukilteo-washington' },
  { name: 'Oak Harbor', state: 'Washington', slug: 'oak-harbor-washington' },
  { name: 'Puyallup', state: 'Washington', slug: 'puyallup-washington' },
];

// Filter to only cities that don't exist
const citiesToCreate = expandedCities.filter(city => !existingPages.has(city.slug));
console.log(`Found ${citiesToCreate.length} cities to create from ${expandedCities.length} total`);

if (citiesToCreate.length === 0) {
  console.log('\nAll cities already have pages!');
  process.exit(0);
}

// Take first 500 (or all if less)
const finalCities = citiesToCreate.slice(0, 500);
console.log(`\nSelected ${finalCities.length} cities to create`);

// Display first 30
console.log('\nFirst 30 cities:');
finalCities.slice(0, 30).forEach((city, idx) => {
  console.log(`${idx + 1}. ${city.name}, ${city.state} (${city.slug})`);
});

// Save list
fs.writeFileSync('next_500_cities.json', JSON.stringify(finalCities, null, 2));
console.log(`\nSaved ${finalCities.length} cities to next_500_cities.json`);

