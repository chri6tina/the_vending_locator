const fs = require('fs');
const path = require('path');

// Comprehensive list of additional cities across all states
// This includes smaller cities, suburbs, and towns that should have pages
const additionalCities = [
  // Alabama
  { name: 'Alexander City', state: 'Alabama', slug: 'alexander-city-alabama' },
  { name: 'Andalusia', state: 'Alabama', slug: 'andalusia-alabama' },
  { name: 'Anniston', state: 'Alabama', slug: 'anniston-alabama' },
  { name: 'Athens', state: 'Alabama', slug: 'athens-alabama' },
  { name: 'Atmore', state: 'Alabama', slug: 'atmore-alabama' },
  { name: 'Bay Minette', state: 'Alabama', slug: 'bay-minette-alabama' },
  { name: 'Bessemer', state: 'Alabama', slug: 'bessemer-alabama' },
  { name: 'Brewton', state: 'Alabama', slug: 'brewton-alabama' },
  { name: 'Cullman', state: 'Alabama', slug: 'cullman-alabama' },
  { name: 'Daphne', state: 'Alabama', slug: 'daphne-alabama' },
  { name: 'Demopolis', state: 'Alabama', slug: 'demopolis-alabama' },
  { name: 'Enterprise', state: 'Alabama', slug: 'enterprise-alabama' },
  { name: 'Eufaula', state: 'Alabama', slug: 'eufaula-alabama' },
  { name: 'Fairhope', state: 'Alabama', slug: 'fairhope-alabama' },
  { name: 'Florence', state: 'Alabama', slug: 'florence-alabama' },
  { name: 'Fort Payne', state: 'Alabama', slug: 'fort-payne-alabama' },
  { name: 'Gadsden', state: 'Alabama', slug: 'gadsden-alabama' },
  { name: 'Greenville', state: 'Alabama', slug: 'greenville-alabama' },
  { name: 'Guntersville', state: 'Alabama', slug: 'guntersville-alabama' },
  { name: 'Homewood', state: 'Alabama', slug: 'homewood-alabama' },
  { name: 'Jasper', state: 'Alabama', slug: 'jasper-alabama' },
  { name: 'Lanett', state: 'Alabama', slug: 'lanett-alabama' },
  { name: 'Madison', state: 'Alabama', slug: 'madison-alabama' },
  { name: 'Millbrook', state: 'Alabama', slug: 'millbrook-alabama' },
  { name: 'Muscle Shoals', state: 'Alabama', slug: 'muscle-shoals-alabama' },
  { name: 'Northport', state: 'Alabama', slug: 'northport-alabama' },
  { name: 'Opelika', state: 'Alabama', slug: 'opelika-alabama' },
  { name: 'Oxford', state: 'Alabama', slug: 'oxford-alabama' },
  { name: 'Pell City', state: 'Alabama', slug: 'pell-city-alabama' },
  { name: 'Phenix City', state: 'Alabama', slug: 'phenix-city-alabama' },
  { name: 'Prattville', state: 'Alabama', slug: 'prattville-alabama' },
  { name: 'Scottsboro', state: 'Alabama', slug: 'scottsboro-alabama' },
  { name: 'Selma', state: 'Alabama', slug: 'selma-alabama' },
  { name: 'Sheffield', state: 'Alabama', slug: 'sheffield-alabama' },
  { name: 'Sylacauga', state: 'Alabama', slug: 'sylacauga-alabama' },
  { name: 'Talladega', state: 'Alabama', slug: 'talladega-alabama' },
  { name: 'Troy', state: 'Alabama', slug: 'troy-alabama' },
  { name: 'Trussville', state: 'Alabama', slug: 'trussville-alabama' },
  { name: 'Tuskegee', state: 'Alabama', slug: 'tuskegee-alabama' },
  { name: 'Vestavia Hills', state: 'Alabama', slug: 'vestavia-hills-alabama' },
  
  // Alaska
  { name: 'Anchorage', state: 'Alaska', slug: 'anchorage-alaska' },
  { name: 'Fairbanks', state: 'Alaska', slug: 'fairbanks-alaska' },
  { name: 'Juneau', state: 'Alaska', slug: 'juneau-alaska' },
  { name: 'Ketchikan', state: 'Alaska', slug: 'ketchikan-alaska' },
  { name: 'Kodiak', state: 'Alaska', slug: 'kodiak-alaska' },
  { name: 'Palmer', state: 'Alaska', slug: 'palmer-alaska' },
  { name: 'Sitka', state: 'Alaska', slug: 'sitka-alaska' },
  { name: 'Wasilla', state: 'Alaska', slug: 'wasilla-alaska' },
  
  // Arkansas
  { name: 'Batesville', state: 'Arkansas', slug: 'batesville-arkansas' },
  { name: 'Benton', state: 'Arkansas', slug: 'benton-arkansas' },
  { name: 'Blytheville', state: 'Arkansas', slug: 'blytheville-arkansas' },
  { name: 'Camden', state: 'Arkansas', slug: 'camden-arkansas' },
  { name: 'Conway', state: 'Arkansas', slug: 'conway-arkansas' },
  { name: 'El Dorado', state: 'Arkansas', slug: 'el-dorado-arkansas' },
  { name: 'Forrest City', state: 'Arkansas', slug: 'forrest-city-arkansas' },
  { name: 'Fort Smith', state: 'Arkansas', slug: 'fort-smith-arkansas' },
  { name: 'Harrison', state: 'Arkansas', slug: 'harrison-arkansas' },
  { name: 'Helena', state: 'Arkansas', slug: 'helena-arkansas' },
  { name: 'Hope', state: 'Arkansas', slug: 'hope-arkansas' },
  { name: 'Hot Springs', state: 'Arkansas', slug: 'hot-springs-arkansas' },
  { name: 'Jonesboro', state: 'Arkansas', slug: 'jonesboro-arkansas' },
  { name: 'Magnolia', state: 'Arkansas', slug: 'magnolia-arkansas' },
  { name: 'Mountain Home', state: 'Arkansas', slug: 'mountain-home-arkansas' },
  { name: 'North Little Rock', state: 'Arkansas', slug: 'north-little-rock-arkansas' },
  { name: 'Paragould', state: 'Arkansas', slug: 'paragould-arkansas' },
  { name: 'Pine Bluff', state: 'Arkansas', slug: 'pine-bluff-arkansas' },
  { name: 'Rogers', state: 'Arkansas', slug: 'rogers-arkansas' },
  { name: 'Russellville', state: 'Arkansas', slug: 'russellville-arkansas' },
  { name: 'Searcy', state: 'Arkansas', slug: 'searcy-arkansas' },
  { name: 'Springdale', state: 'Arkansas', slug: 'springdale-arkansas' },
  { name: 'Texarkana', state: 'Arkansas', slug: 'texarkana-arkansas' },
  { name: 'Van Buren', state: 'Arkansas', slug: 'van-buren-arkansas' },
  { name: 'West Memphis', state: 'Arkansas', slug: 'west-memphis-arkansas' },
  
  // Continue with more states... I'll create a comprehensive list
];

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

// I'll need to expand this list significantly. Let me create a more comprehensive approach.
// For now, let me create a script that will generate cities systematically.
