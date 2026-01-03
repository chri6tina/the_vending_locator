const fs = require('fs');
const path = require('path');

// 100 additional cities to create pages for (suburbs, smaller cities, etc.)
const newCitiesList = [
  // California suburbs and smaller cities
  { name: 'Brea', state: 'California', slug: 'brea-california' },
  { name: 'Camarillo', state: 'California', slug: 'camarillo-california' },
  { name: 'Capitola', state: 'California', slug: 'capitola-california' },
  { name: 'Ceres', state: 'California', slug: 'ceres-california' },
  { name: 'Chino Hills', state: 'California', slug: 'chino-hills-california' },
  { name: 'Citrus Heights', state: 'California', slug: 'citrus-heights-california' },
  { name: 'Claremont', state: 'California', slug: 'claremont-california' },
  { name: 'Clayton', state: 'California', slug: 'clayton-california' },
  { name: 'Clovis', state: 'California', slug: 'clovis-california' },
  { name: 'Colton', state: 'California', slug: 'colton-california' },
  { name: 'Compton', state: 'California', slug: 'compton-california' },
  { name: 'Corona', state: 'California', slug: 'corona-california' },
  { name: 'Corte Madera', state: 'California', slug: 'corte-madera-california' },
  { name: 'Covina', state: 'California', slug: 'covina-california' },
  { name: 'Culver City', state: 'California', slug: 'culver-city-california' },
  { name: 'Cupertino', state: 'California', slug: 'cupertino-california' },
  { name: 'Cypress', state: 'California', slug: 'cypress-california' },
  { name: 'Daly City', state: 'California', slug: 'daly-city-california' },
  { name: 'Danville', state: 'California', slug: 'danville-california' },
  { name: 'Davis', state: 'California', slug: 'davis-california' },
  
  // Texas cities
  { name: 'Allen', state: 'Texas', slug: 'allen-texas' },
  { name: 'Baytown', state: 'Texas', slug: 'baytown-texas' },
  { name: 'Beaumont', state: 'Texas', slug: 'beaumont-texas' },
  { name: 'Bedford', state: 'Texas', slug: 'bedford-texas' },
  { name: 'Brownsville', state: 'Texas', slug: 'brownsville-texas' },
  { name: 'Bryan', state: 'Texas', slug: 'bryan-texas' },
  { name: 'Burleson', state: 'Texas', slug: 'burleson-texas' },
  { name: 'Carrollton', state: 'Texas', slug: 'carrollton-texas' },
  { name: 'Cedar Park', state: 'Texas', slug: 'cedar-park-texas' },
  { name: 'Cleburne', state: 'Texas', slug: 'cleburne-texas' },
  { name: 'College Station', state: 'Texas', slug: 'college-station-texas' },
  { name: 'Conroe', state: 'Texas', slug: 'conroe-texas' },
  { name: 'Coppell', state: 'Texas', slug: 'coppell-texas' },
  { name: 'Corpus Christi', state: 'Texas', slug: 'corpus-christi-texas' },
  { name: 'Corsicana', state: 'Texas', slug: 'corsicana-texas' },
  { name: 'Dallas', state: 'Texas', slug: 'dallas-texas' },
  { name: 'Denton', state: 'Texas', slug: 'denton-texas' },
  { name: 'DeSoto', state: 'Texas', slug: 'desoto-texas' },
  { name: 'Duncanville', state: 'Texas', slug: 'duncanville-texas' },
  { name: 'Edinburg', state: 'Texas', slug: 'edinburg-texas' },
  
  // Florida cities
  { name: 'Altamonte Springs', state: 'Florida', slug: 'altamonte-springs-florida' },
  { name: 'Apopka', state: 'Florida', slug: 'apopka-florida' },
  { name: 'Boca Raton', state: 'Florida', slug: 'boca-raton-florida' },
  { name: 'Bradenton', state: 'Florida', slug: 'bradenton-florida' },
  { name: 'Cape Coral', state: 'Florida', slug: 'cape-coral-florida' },
  { name: 'Casselberry', state: 'Florida', slug: 'casselberry-florida' },
  { name: 'Clearwater', state: 'Florida', slug: 'clearwater-florida' },
  { name: 'Clermont', state: 'Florida', slug: 'clermont-florida' },
  { name: 'Cocoa', state: 'Florida', slug: 'cocoa-florida' },
  { name: 'Coral Gables', state: 'Florida', slug: 'coral-gables-florida' },
  { name: 'Coral Springs', state: 'Florida', slug: 'coral-springs-florida' },
  { name: 'Crestview', state: 'Florida', slug: 'crestview-florida' },
  { name: 'Cutler Bay', state: 'Florida', slug: 'cutler-bay-florida' },
  { name: 'Dania Beach', state: 'Florida', slug: 'dania-beach-florida' },
  { name: 'Davie', state: 'Florida', slug: 'davie-florida' },
  { name: 'Daytona Beach', state: 'Florida', slug: 'daytona-beach-florida' },
  { name: 'Deerfield Beach', state: 'Florida', slug: 'deerfield-beach-florida' },
  { name: 'Deland', state: 'Florida', slug: 'deland-florida' },
  { name: 'Delray Beach', state: 'Florida', slug: 'delray-beach-florida' },
  { name: 'Deltona', state: 'Florida', slug: 'deltona-florida' },
  
  // New York cities
  { name: 'Albany', state: 'New York', slug: 'albany-new-york' },
  { name: 'Amherst', state: 'New York', slug: 'amherst-new-york' },
  { name: 'Auburn', state: 'New York', slug: 'auburn-new-york' },
  { name: 'Batavia', state: 'New York', slug: 'batavia-new-york' },
  { name: 'Binghamton', state: 'New York', slug: 'binghamton-new-york' },
  { name: 'Buffalo', state: 'New York', slug: 'buffalo-new-york' },
  { name: 'Canandaigua', state: 'New York', slug: 'canandaigua-new-york' },
  { name: 'Canton', state: 'New York', slug: 'canton-new-york' },
  { name: 'Cortland', state: 'New York', slug: 'cortland-new-york' },
  { name: 'Elmira', state: 'New York', slug: 'elmira-new-york' },
  
  // Illinois cities
  { name: 'Aurora', state: 'Illinois', slug: 'aurora-illinois' },
  { name: 'Belleville', state: 'Illinois', slug: 'belleville-illinois' },
  { name: 'Berwyn', state: 'Illinois', slug: 'berwyn-illinois' },
  { name: 'Bloomington', state: 'Illinois', slug: 'bloomington-illinois' },
  { name: 'Bolingbrook', state: 'Illinois', slug: 'bolingbrook-illinois' },
  { name: 'Buffalo Grove', state: 'Illinois', slug: 'buffalo-grove-illinois' },
  { name: 'Canton', state: 'Illinois', slug: 'canton-illinois' },
  { name: 'Carbondale', state: 'Illinois', slug: 'carbondale-illinois' },
  { name: 'Carol Stream', state: 'Illinois', slug: 'carol-stream-illinois' },
  { name: 'Carpentersville', state: 'Illinois', slug: 'carpentersville-illinois' },
  
  // Pennsylvania cities
  { name: 'Allentown', state: 'Pennsylvania', slug: 'allentown-pennsylvania' },
  { name: 'Altoona', state: 'Pennsylvania', slug: 'altoona-pennsylvania' },
  { name: 'Bethlehem', state: 'Pennsylvania', slug: 'bethlehem-pennsylvania' },
  { name: 'Butler', state: 'Pennsylvania', slug: 'butler-pennsylvania' },
  { name: 'Chambersburg', state: 'Pennsylvania', slug: 'chambersburg-pennsylvania' },
  { name: 'Chester', state: 'Pennsylvania', slug: 'chester-pennsylvania' },
  { name: 'Coatesville', state: 'Pennsylvania', slug: 'coatesville-pennsylvania' },
  { name: 'Columbia', state: 'Pennsylvania', slug: 'columbia-pennsylvania' },
  { name: 'Corry', state: 'Pennsylvania', slug: 'corry-pennsylvania' },
  { name: 'DuBois', state: 'Pennsylvania', slug: 'dubois-pennsylvania' },
  
  // Ohio cities
  { name: 'Akron', state: 'Ohio', slug: 'akron-ohio' },
  { name: 'Alliance', state: 'Ohio', slug: 'alliance-ohio' },
  { name: 'Ashtabula', state: 'Ohio', slug: 'ashtabula-ohio' },
  { name: 'Athens', state: 'Ohio', slug: 'athens-ohio' },
  { name: 'Barberton', state: 'Ohio', slug: 'barberton-ohio' },
  { name: 'Beavercreek', state: 'Ohio', slug: 'beavercreek-ohio' },
  { name: 'Bellefontaine', state: 'Ohio', slug: 'bellefontaine-ohio' },
  { name: 'Bowling Green', state: 'Ohio', slug: 'bowling-green-ohio' },
  { name: 'Canton', state: 'Ohio', slug: 'canton-ohio' },
  { name: 'Centerville', state: 'Ohio', slug: 'centerville-ohio' },
  
  // North Carolina cities
  { name: 'Asheville', state: 'North Carolina', slug: 'asheville-north-carolina' },
  { name: 'Burlington', state: 'North Carolina', slug: 'burlington-north-carolina' },
  { name: 'Cary', state: 'North Carolina', slug: 'cary-north-carolina' },
  { name: 'Chapel Hill', state: 'North Carolina', slug: 'chapel-hill-north-carolina' },
  { name: 'Charlotte', state: 'North Carolina', slug: 'charlotte-north-carolina' },
  { name: 'Concord', state: 'North Carolina', slug: 'concord-north-carolina' },
  { name: 'Durham', state: 'North Carolina', slug: 'durham-north-carolina' },
  { name: 'Fayetteville', state: 'North Carolina', slug: 'fayetteville-north-carolina' },
  { name: 'Gastonia', state: 'North Carolina', slug: 'gastonia-north-carolina' },
  { name: 'Greensboro', state: 'North Carolina', slug: 'greensboro-north-carolina' },
];

console.log(`Prepared ${newCitiesList.length} cities to create pages for`);

// Check which ones already exist
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
  } catch (error) {
    // Skip if directory doesn't exist
  }
}

findExistingPages('src/app/vending-leads');

// Filter out cities that already have pages
const citiesToCreate = newCitiesList.filter(city => !existingPages.has(city.slug));
console.log(`Found ${citiesToCreate.length} cities that need pages created`);

if (citiesToCreate.length < 100) {
  console.log(`\nNote: Only ${citiesToCreate.length} cities from the list don't have pages yet.`);
  console.log('You may need to add more cities to reach 100 new pages.');
}

// Save the list
fs.writeFileSync('100_new_cities_to_create.json', JSON.stringify(citiesToCreate, null, 2));
console.log(`\nSaved ${citiesToCreate.length} cities to 100_new_cities_to_create.json`);

// Display first 20
console.log('\nFirst 20 cities to create:');
citiesToCreate.slice(0, 20).forEach((city, idx) => {
  console.log(`${idx + 1}. ${city.name}, ${city.state} (${city.slug})`);
});

