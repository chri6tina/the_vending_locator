const fs = require('fs');
const path = require('path');

// Read the vending-services Florida pageClient as template
const templatePath = path.join(__dirname, '../src/app/vending-services/florida/pageClient.tsx');
const template = fs.readFileSync(templatePath, 'utf8');

// City lists
const flCities = [
  { name: 'Altamonte Springs', slug: 'altamonte-springs-florida' },
  { name: 'Apopka', slug: 'apopka-florida' },
  { name: 'Boca Raton', slug: 'boca-raton-florida' },
  { name: 'Boynton Beach', slug: 'boynton-beach-florida' },
  { name: 'Bradenton', slug: 'bradenton-florida' },
  { name: 'Cape Coral', slug: 'cape-coral-florida' },
  { name: 'Clearwater', slug: 'clearwater-florida' },
  { name: 'Coconut Creek', slug: 'coconut-creek-florida' },
  { name: 'Coral Springs', slug: 'coral-springs-florida' },
  { name: 'Cutler Bay', slug: 'cutler-bay-florida' },
  { name: 'Daytona Beach', slug: 'daytona-beach-florida' },
  { name: 'Davie', slug: 'davie-florida' },
  { name: 'Deltona', slug: 'deltona-florida' },
  { name: 'Doral', slug: 'doral-florida' },
  { name: 'Fort Lauderdale', slug: 'fort-lauderdale-florida' },
  { name: 'Fort Myers', slug: 'fort-myers-florida' },
  { name: 'Gainesville', slug: 'gainesville-florida' },
  { name: 'Greenacres', slug: 'greenacres-florida' },
  { name: 'Hialeah', slug: 'hialeah-florida' },
  { name: 'Hollywood', slug: 'hollywood-florida' },
  { name: 'Jacksonville', slug: 'jacksonville-florida' },
  { name: 'Jupiter', slug: 'jupiter-florida' },
  { name: 'Kissimmee', slug: 'kissimmee-florida' },
  { name: 'Lakeland', slug: 'lakeland-florida' },
  { name: 'Largo', slug: 'largo-florida' },
  { name: 'Margate', slug: 'margate-florida' },
  { name: 'Miami', slug: 'miami-florida' },
  { name: 'Melbourne', slug: 'melbourne-florida' },
  { name: 'Miramar', slug: 'miramar-florida' },
  { name: 'Naples', slug: 'naples-florida' },
  { name: 'North Miami', slug: 'north-miami-florida' },
  { name: 'Orlando', slug: 'orlando-florida' },
  { name: 'Ocala', slug: 'ocala-florida' },
  { name: 'Palm Bay', slug: 'palm-bay-florida' },
  { name: 'Palm Coast', slug: 'palm-coast-florida' },
  { name: 'Palm Beach Gardens', slug: 'palm-beach-gardens-florida' },
  { name: 'Palm Harbor', slug: 'palm-harbor-florida' },
  { name: 'Pembroke Pines', slug: 'pembroke-pines-florida' },
  { name: 'Pensacola', slug: 'pensacola-florida' },
  { name: 'Plant City', slug: 'plant-city-florida' },
  { name: 'Plantation', slug: 'plantation-florida' },
  { name: 'Pompano Beach', slug: 'pompano-beach-florida' },
  { name: 'Port Orange', slug: 'port-orange-florida' },
  { name: 'Port St. Lucie', slug: 'port-st-lucie-florida' },
  { name: 'Royal Palm Beach', slug: 'royal-palm-beach-florida' },
  { name: 'Sanford', slug: 'sanford-florida' },
  { name: 'Sarasota', slug: 'sarasota-florida' },
  { name: 'St. Petersburg', slug: 'st-petersburg-florida' },
  { name: 'Stuart', slug: 'stuart-florida' },
  { name: 'Sunrise', slug: 'sunrise-florida' },
  { name: 'Tallahassee', slug: 'tallahassee-florida' },
  { name: 'Tampa', slug: 'tampa-florida' },
  { name: 'Wellington', slug: 'wellington-florida' },
  { name: 'West Palm Beach', slug: 'west-palm-beach-florida' },
  { name: 'Aventura', slug: 'aventura-florida' },
  { name: 'Casselberry', slug: 'casselberry-florida' },
  { name: 'Coral Gables', slug: 'coral-gables-florida' },
  { name: 'Deerfield Beach', slug: 'deerfield-beach-florida' },
  { name: 'Dunedin', slug: 'dunedin-florida' },
  { name: 'Edgewater', slug: 'edgewater-florida' },
  { name: 'Fort Pierce', slug: 'fort-pierce-florida' },
  { name: 'Hialeah Gardens', slug: 'hialeah-gardens-florida' },
  { name: 'Key West', slug: 'key-west-florida' },
  { name: 'Lake Worth', slug: 'lake-worth-florida' },
  { name: 'Lehigh Acres', slug: 'lehigh-acres-florida' },
  { name: 'Miami Beach', slug: 'miami-beach-florida' },
  { name: 'Miami Gardens', slug: 'miami-gardens-florida' },
  { name: 'Orange Park', slug: 'orange-park-florida' },
  { name: 'Panama City', slug: 'panama-city-florida' },
  { name: 'Sebastian', slug: 'sebastian-florida' },
  { name: 'Tarpon Springs', slug: 'tarpon-springs-florida' },
  { name: 'Titusville', slug: 'titusville-florida' },
  { name: 'Venice', slug: 'venice-florida' },
  { name: 'Winter Haven', slug: 'winter-haven-florida' },
  { name: 'Winter Park', slug: 'winter-park-florida' },
  { name: 'Winter Springs', slug: 'winter-springs-florida' }
];

const txCities = [
  { name: 'Abilene', slug: 'abilene-texas' },
  { name: 'Allen', slug: 'allen-texas' },
  { name: 'Amarillo', slug: 'amarillo-texas' },
  { name: 'Arlington', slug: 'arlington-texas' },
  { name: 'Austin', slug: 'austin-texas' },
  { name: 'Beaumont', slug: 'beaumont-texas' },
  { name: 'Brownsville', slug: 'brownsville-texas' },
  { name: 'College Station', slug: 'college-station-texas' },
  { name: 'Conroe', slug: 'conroe-texas' },
  { name: 'Corpus Christi', slug: 'corpus-christi-texas' },
  { name: 'Dallas', slug: 'dallas-texas' },
  { name: 'Edinburg', slug: 'edinburg-texas' },
  { name: 'El Paso', slug: 'el-paso-texas' },
  { name: 'Fort Worth', slug: 'fort-worth-texas' },
  { name: 'Garland', slug: 'garland-texas' },
  { name: 'Grand Prairie', slug: 'grand-prairie-texas' },
  { name: 'Frisco', slug: 'frisco-texas' },
  { name: 'McKinney', slug: 'mckinney-texas' },
  { name: 'Denton', slug: 'denton-texas' },
  { name: 'Carrollton', slug: 'carrollton-texas' },
  { name: 'Richardson', slug: 'richardson-texas' },
  { name: 'Lewisville', slug: 'lewisville-texas' },
  { name: 'Round Rock', slug: 'round-rock-texas' },
  { name: 'League City', slug: 'league-city-texas' },
  { name: 'Sugar Land', slug: 'sugar-land-texas' },
  { name: 'Temple', slug: 'temple-texas' },
  { name: 'Tyler', slug: 'tyler-texas' },
  { name: 'Waco', slug: 'waco-texas' },
  { name: 'Pearland', slug: 'pearland-texas' },
  { name: 'Houston', slug: 'houston-texas' },
  { name: 'Irving', slug: 'irving-texas' },
  { name: 'Killeen', slug: 'killeen-texas' },
  { name: 'Laredo', slug: 'laredo-texas' },
  { name: 'Lubbock', slug: 'lubbock-texas' },
  { name: 'McAllen', slug: 'mcallen-texas' },
  { name: 'Mesquite', slug: 'mesquite-texas' },
  { name: 'Midland', slug: 'midland-texas' },
  { name: 'Odessa', slug: 'odessa-texas' },
  { name: 'Pasadena', slug: 'pasadena-texas' },
  { name: 'Plano', slug: 'plano-texas' },
  { name: 'San Antonio', slug: 'san-antonio-texas' },
  { name: 'San Angelo', slug: 'san-angelo-texas' },
  { name: 'Longview', slug: 'longview-texas' }
];

const caCities = [
  { name: 'Anaheim', slug: 'anaheim-california' },
  { name: 'Antioch', slug: 'antioch-california' },
  { name: 'Bakersfield', slug: 'bakersfield-california' },
  { name: 'Berkeley', slug: 'berkeley-california' },
  { name: 'Burbank', slug: 'burbank-california' },
  { name: 'Carlsbad', slug: 'carlsbad-california' },
  { name: 'Chula Vista', slug: 'chula-vista-california' },
  { name: 'Clovis', slug: 'clovis-california' },
  { name: 'Compton', slug: 'compton-california' },
  { name: 'Concord', slug: 'concord-california' },
  { name: 'Corona', slug: 'corona-california' },
  { name: 'Costa Mesa', slug: 'costa-mesa-california' },
  { name: 'Daly City', slug: 'daly-city-california' },
  { name: 'Downey', slug: 'downey-california' },
  { name: 'El Monte', slug: 'el-monte-california' },
  { name: 'Elk Grove', slug: 'elk-grove-california' },
  { name: 'Escondido', slug: 'escondido-california' },
  { name: 'Fairfield', slug: 'fairfield-california' },
  { name: 'Fontana', slug: 'fontana-california' },
  { name: 'Fremont', slug: 'fremont-california' },
  { name: 'Fresno', slug: 'fresno-california' },
  { name: 'Fullerton', slug: 'fullerton-california' },
  { name: 'Garden Grove', slug: 'garden-grove-california' },
  { name: 'Glendale', slug: 'glendale-california' },
  { name: 'Hayward', slug: 'hayward-california' },
  { name: 'Huntington Beach', slug: 'huntington-beach-california' },
  { name: 'Inglewood', slug: 'inglewood-california' },
  { name: 'Irvine', slug: 'irvine-california' },
  { name: 'Lancaster', slug: 'lancaster-california' },
  { name: 'Jurupa Valley', slug: 'jurupa-valley-california' },
  { name: 'Lakewood', slug: 'lakewood-california' },
  { name: 'Long Beach', slug: 'long-beach-california' },
  { name: 'Los Angeles', slug: 'los-angeles-california' },
  { name: 'Modesto', slug: 'modesto-california' },
  { name: 'Moreno Valley', slug: 'moreno-valley-california' },
  { name: 'Mountain View', slug: 'mountain-view-california' },
  { name: 'Murrieta', slug: 'murrieta-california' },
  { name: 'Napa', slug: 'napa-california' },
  { name: 'Newport Beach', slug: 'newport-beach-california' },
  { name: 'Norwalk', slug: 'norwalk-california' },
  { name: 'Oakland', slug: 'oakland-california' },
  { name: 'Oceanside', slug: 'oceanside-california' },
  { name: 'Ontario', slug: 'ontario-california' },
  { name: 'Orange', slug: 'orange-california' },
  { name: 'Oxnard', slug: 'oxnard-california' },
  { name: 'Palm Desert', slug: 'palm-desert-california' },
  { name: 'Palm Springs', slug: 'palm-springs-california' },
  { name: 'Palmdale', slug: 'palmdale-california' },
  { name: 'Pasadena', slug: 'pasadena-california' },
  { name: 'Pomona', slug: 'pomona-california' },
  { name: 'Rancho Cucamonga', slug: 'rancho-cucamonga-california' },
  { name: 'Rialto', slug: 'rialto-california' },
  { name: 'Richmond', slug: 'richmond-california' },
  { name: 'Riverside', slug: 'riverside-california' },
  { name: 'Roseville', slug: 'roseville-california' },
  { name: 'Sacramento', slug: 'sacramento-california' },
  { name: 'Salinas', slug: 'salinas-california' },
  { name: 'San Bernardino', slug: 'san-bernardino-california' },
  { name: 'San Diego', slug: 'san-diego-california' },
  { name: 'Santa Clara', slug: 'santa-clara-california' },
  { name: 'San Francisco', slug: 'san-francisco-california' },
  { name: 'San Jose', slug: 'san-jose-california' },
  { name: 'Santa Ana', slug: 'santa-ana-california' },
  { name: 'Santa Clarita', slug: 'santa-clarita-california' },
  { name: 'Santa Maria', slug: 'santa-maria-california' },
  { name: 'Simi Valley', slug: 'simi-valley-california' },
  { name: 'Stockton', slug: 'stockton-california' },
  { name: 'Sunnyvale', slug: 'sunnyvale-california' },
  { name: 'Temecula', slug: 'temecula-california' },
  { name: 'Thousand Oaks', slug: 'thousand-oaks-california' },
  { name: 'Torrance', slug: 'torrance-california' },
  { name: 'Vallejo', slug: 'vallejo-california' },
  { name: 'Ventura', slug: 'ventura-california' },
  { name: 'Victorville', slug: 'victorville-california' },
  { name: 'Visalia', slug: 'visalia-california' },
  { name: 'West Covina', slug: 'west-covina-california' },
  { name: 'Alhambra', slug: 'alhambra-california' },
  { name: 'Carson', slug: 'carson-california' },
  { name: 'Chico', slug: 'chico-california' },
  { name: 'Hawthorne', slug: 'hawthorne-california' },
  { name: 'Redding', slug: 'redding-california' },
  { name: 'San Mateo', slug: 'san-mateo-california' },
  { name: 'Santa Barbara', slug: 'santa-barbara-california' },
  { name: 'Santa Rosa', slug: 'santa-rosa-california' },
  { name: 'Vacaville', slug: 'vacaville-california' },
  { name: 'Whittier', slug: 'whittier-california' },
  { name: 'El Cajon', slug: 'el-cajon-california' },
  { name: 'Mission Viejo', slug: 'mission-viejo-california' },
  { name: 'San Angelo', slug: 'san-angelo-california' },
  { name: 'South Gate', slug: 'south-gate-california' },
  { name: 'Vista', slug: 'vista-california' },
  { name: 'Baldwin Park', slug: 'baldwin-park-california' },
  { name: 'Bellflower', slug: 'bellflower-california' },
  { name: 'Citrus Heights', slug: 'citrus-heights-california' },
  { name: 'Cypress', slug: 'cypress-california' },
  { name: 'Diamond Bar', slug: 'diamond-bar-california' },
  { name: 'East Los Angeles', slug: 'east-los-angeles-california' },
  { name: 'El Centro', slug: 'el-centro-california' },
  { name: 'Hanford', slug: 'hanford-california' },
  { name: 'Hemet', slug: 'hemet-california' },
  { name: 'Hesperia', slug: 'hesperia-california' },
  { name: 'Indio', slug: 'indio-california' },
  { name: 'La Habra', slug: 'la-habra-california' },
  { name: 'La Mesa', slug: 'la-mesa-california' },
  { name: 'La Puente', slug: 'la-puente-california' },
  { name: 'Lodi', slug: 'lodi-california' },
  { name: 'Madera', slug: 'madera-california' },
  { name: 'Menifee', slug: 'menifee-california' },
  { name: 'Monterey Park', slug: 'monterey-park-california' },
  { name: 'National City', slug: 'national-city-california' },
  { name: 'Petaluma', slug: 'petaluma-california' },
  { name: 'Redwood City', slug: 'redwood-city-california' },
  { name: 'San Leandro', slug: 'san-leandro-california' },
  { name: 'San Rafael', slug: 'san-rafael-california' },
  { name: 'Santa Monica', slug: 'santa-monica-california' },
  { name: 'Tulare', slug: 'tulare-california' },
  { name: 'Turlock', slug: 'turlock-california' },
  { name: 'Union City', slug: 'union-city-california' },
  { name: 'Watsonville', slug: 'watsonville-california' },
  { name: 'Westminster', slug: 'westminster-california' },
  { name: 'Alameda', slug: 'alameda-california' },
  { name: 'Arcadia', slug: 'arcadia-california' },
  { name: 'Arvin', slug: 'arvin-california' },
  { name: 'Atascadero', slug: 'atascadero-california' },
  { name: 'Azusa', slug: 'azusa-california' },
  { name: 'Banning', slug: 'banning-california' },
  { name: 'Barstow', slug: 'barstow-california' },
  { name: 'Beaumont', slug: 'beaumont-california' },
  { name: 'Bell Gardens', slug: 'bell-gardens-california' },
  { name: 'Brawley', slug: 'brawley-california' },
  { name: 'Buena Park', slug: 'buena-park-california' },
  { name: 'Calexico', slug: 'calexico-california' },
  { name: 'Calimesa', slug: 'calimesa-california' },
  { name: 'Camarillo', slug: 'camarillo-california' },
  { name: 'Ceres', slug: 'ceres-california' },
  { name: 'Chino Hills', slug: 'chino-hills-california' },
  { name: 'Coachella', slug: 'coachella-california' },
  { name: 'Coronado', slug: 'coronado-california' },
  { name: 'Cudahy', slug: 'cudahy-california' },
  { name: 'Culver City', slug: 'culver-city-california' },
  { name: 'Delano', slug: 'delano-california' },
  { name: 'Dinuba', slug: 'dinuba-california' },
  { name: 'El Cerrito', slug: 'el-cerrito-california' },
  { name: 'El Segundo', slug: 'el-segundo-california' },
  { name: 'Emeryville', slug: 'emeryville-california' },
  { name: 'Encinitas', slug: 'encinitas-california' },
  { name: 'Folsom', slug: 'folsom-california' },
  { name: 'Fountain Valley', slug: 'fountain-valley-california' },
  { name: 'Glendora', slug: 'glendora-california' },
  { name: 'Goleta', slug: 'goleta-california' },
  { name: 'Hawaiian Gardens', slug: 'hawaiian-gardens-california' },
  { name: 'Hercules', slug: 'hercules-california' },
  { name: 'Huntington Park', slug: 'huntington-park-california' },
  { name: 'Imperial Beach', slug: 'imperial-beach-california' },
  { name: 'La Canada Flintridge', slug: 'la-canada-flintridge-california' },
  { name: 'La Mirada', slug: 'la-mirada-california' },
  { name: 'La Quinta', slug: 'la-quinta-california' },
  { name: 'Laguna Beach', slug: 'laguna-beach-california' },
  { name: 'Laguna Hills', slug: 'laguna-hills-california' },
  { name: 'Laguna Niguel', slug: 'laguna-niguel-california' },
  { name: 'Lake Elsinore', slug: 'lake-elsinore-california' },
  { name: 'Larkspur', slug: 'larkspur-california' },
  { name: 'Lemon Grove', slug: 'lemon-grove-california' },
  { name: 'Lomita', slug: 'lomita-california' },
  { name: 'Los Gatos', slug: 'los-gatos-california' },
  { name: 'Lynwood', slug: 'lynwood-california' },
  { name: 'Manhattan Beach', slug: 'manhattan-beach-california' },
  { name: 'Millbrae', slug: 'millbrae-california' },
  { name: 'Mill Valley', slug: 'mill-valley-california' },
  { name: 'Monrovia', slug: 'monrovia-california' },
  { name: 'Montclair', slug: 'montclair-california' },
  { name: 'Morgan Hill', slug: 'morgan-hill-california' },
  { name: 'Newark', slug: 'newark-california' },
  { name: 'Oakdale', slug: 'oakdale-california' },
  { name: 'Pacifica', slug: 'pacifica-california' },
  { name: 'Palo Alto', slug: 'palo-alto-california' },
  { name: 'Paramount', slug: 'paramount-california' },
  { name: 'Pico Rivera', slug: 'pico-rivera-california' },
  { name: 'Pittsburg', slug: 'pittsburg-california' },
  { name: 'Placentia', slug: 'placentia-california' },
  { name: 'Pleasanton', slug: 'pleasanton-california' },
  { name: 'Poway', slug: 'poway-california' },
  { name: 'Rancho Palos Verdes', slug: 'rancho-palos-verdes-california' },
  { name: 'Redondo Beach', slug: 'redondo-beach-california' },
  { name: 'Reedley', slug: 'reedley-california' },
  { name: 'Ridgecrest', slug: 'ridgecrest-california' },
  { name: 'Rio Vista', slug: 'rio-vista-california' },
  { name: 'Rohnert Park', slug: 'rohnert-park-california' },
  { name: 'Rosemead', slug: 'rosemead-california' },
  { name: 'San Bruno', slug: 'san-bruno-california' },
  { name: 'San Carlos', slug: 'san-carlos-california' },
  { name: 'San Fernando', slug: 'san-fernando-california' },
  { name: 'San Gabriel', slug: 'san-gabriel-california' },
  { name: 'San Jacinto', slug: 'san-jacinto-california' },
  { name: 'San Luis Obispo', slug: 'san-luis-obispo-california' },
  { name: 'San Pablo', slug: 'san-pablo-california' },
  { name: 'San Ramon', slug: 'san-ramon-california' },
  { name: 'Sanger', slug: 'sanger-california' },
  { name: 'Santa Cruz', slug: 'santa-cruz-california' },
  { name: 'Santa Paula', slug: 'santa-paula-california' },
  { name: 'Saratoga', slug: 'saratoga-california' },
  { name: 'Seal Beach', slug: 'seal-beach-california' },
  { name: 'Selma', slug: 'selma-california' },
  { name: 'Signal Hill', slug: 'signal-hill-california' },
  { name: 'Solana Beach', slug: 'solana-beach-california' },
  { name: 'Soledad', slug: 'soledad-california' },
  { name: 'Sonoma', slug: 'sonoma-california' },
  { name: 'South El Monte', slug: 'south-el-monte-california' },
  { name: 'South Pasadena', slug: 'south-pasadena-california' },
  { name: 'South San Francisco', slug: 'south-san-francisco-california' },
  { name: 'Suisun City', slug: 'suisun-city-california' },
  { name: 'Temple City', slug: 'temple-city-california' },
  { name: 'Tiburon', slug: 'tiburon-california' },
  { name: 'Tracy', slug: 'tracy-california' },
  { name: 'Tustin', slug: 'tustin-california' },
  { name: 'Ukiah', slug: 'ukiah-california' },
  { name: 'Upland', slug: 'upland-california' },
  { name: 'Walnut', slug: 'walnut-california' },
  { name: 'Walnut Creek', slug: 'walnut-creek-california' },
  { name: 'Wasco', slug: 'wasco-california' },
  { name: 'West Hollywood', slug: 'west-hollywood-california' },
  { name: 'Wheatland', slug: 'wheatland-california' },
  { name: 'Willows', slug: 'willows-california' },
  { name: 'Windsor', slug: 'windsor-california' },
  { name: 'Woodland', slug: 'woodland-california' },
  { name: 'Yorba Linda', slug: 'yorba-linda-california' },
  { name: 'Yuba City', slug: 'yuba-city-california' },
  { name: 'Yucaipa', slug: 'yucaipa-california' },
  { name: 'Yucca Valley', slug: 'yucca-valley-california' }
];

function createStatePage(stateName, stateSlug, cities, componentName) {
  const stateDir = path.join(__dirname, `../src/app/tax-services/${stateSlug}`);
  if (!fs.existsSync(stateDir)) {
    fs.mkdirSync(stateDir, { recursive: true });
  }

  // Read Jacksonville template for structure
  const cityTemplatePath = path.join(__dirname, '../src/app/tax-services/jacksonville-florida/pageClient.tsx');
  const cityTemplate = fs.readFileSync(cityTemplatePath, 'utf8');
  
  // Transform template to state page
  let stateContent = cityTemplate
    .replace(/JacksonvilleFloridaTaxServicesPage/g, componentName)
    .replace(/jacksonville-florida/g, stateSlug)
    .replace(/Jacksonville/g, stateName)
    .replace(/cityDisplayName = 'Jacksonville'/g, `stateDisplayName = '${stateName}'`)
    .replace(/stateDisplayName = 'Florida'/g, `stateDisplayName = '${stateName}'`)
    .replace(/Tax & Bookkeeping Services for Vending Machine Owners in\{' '\}<span className="text-navy">\{cityDisplayName\}, Florida<\/span>/g, `Tax & Bookkeeping Services for Vending Machine Owners in{' '}<span className="text-navy">${stateName}</span>`)
    .replace(/Expert tax preparation and bookkeeping services designed specifically for vending machine business owners in Jacksonville\. Get professional help with taxes, accounting, and financial management from professionals who understand your business\./g, `Expert tax preparation and bookkeeping services designed specifically for vending machine business owners throughout ${stateName}. Get professional help with taxes, accounting, and financial management from professionals who understand your business.`)
    .replace(/Jacksonville Experts/g, `${stateName} Experts`)
    .replace(/Florida and Jacksonville-specific tax expertise/g, `${stateName}-specific tax expertise`)
    .replace(/Get Tax & Bookkeeping Help in \{cityDisplayName\}, FL/g, `Get Tax & Bookkeeping Help in ${stateName}`)
    .replace(/We'll connect you with local \{cityDisplayName\} tax and bookkeeping professionals/g, `We'll connect you with ${stateName} tax and bookkeeping professionals`)
    .replace(/By submitting, you agree to be contacted by tax and bookkeeping professionals in \{cityDisplayName\}\./g, `By submitting, you agree to be contacted by tax and bookkeeping professionals in ${stateName}.`)
    .replace(/subCities: \{ name: string; slug: string \}\[\] = \[\]/g, `cities = ${JSON.stringify(cities)}`)
    .replace(/const subCities/g, 'const cities');

  // Update breadcrumb
  stateContent = stateContent.replace(
    /\/tax-services\/florida\" \}/g,
    `/tax-services/${stateSlug}" }`
  );
  stateContent = stateContent.replace(
    /Florida\<\/span>/g,
    `${stateName}</span>`
  );
  stateContent = stateContent.replace(
    /\{cityDisplayName\}/g,
    stateName
  );

  // Update all FAQ to be state-level
  const stateFAQStart = stateContent.indexOf('const faqItems = [');
  const stateFAQEnd = stateContent.indexOf(']', stateFAQStart + 17) + 1;
  
  const stateFAQs = [
    {
      q: `Why do vending machine owners in ${stateName} need specialized tax help?`,
      a: `Vending machine businesses in ${stateName} have unique tax considerations including equipment depreciation, route expenses, location fees across multiple counties, product inventory, multi-location operations, and ${stateName}-specific tax requirements. Specialized tax professionals understand these nuances and can help maximize deductions while ensuring compliance with state and federal regulations.`
    },
    {
      q: `What tax deductions are available for vending machine businesses in ${stateName}?`,
      a: `${stateName} vending businesses can deduct equipment depreciation, vehicle expenses for route operations, product inventory costs, location fees throughout the state, maintenance and repairs, insurance, business licenses, professional fees, home office expenses if applicable, and mileage for servicing machines across various ${stateName} cities and regions.`
    },
    {
      q: `How much do tax and bookkeeping services cost for vending businesses in ${stateName}?`,
      a: `Costs vary based on the size of your ${stateName} vending business, number of locations, machines operated, and services needed. Most professionals offer free consultations to discuss your needs. Monthly bookkeeping typically ranges from $200-$1,000+ depending on complexity, while tax preparation for vending businesses in ${stateName} generally costs $500-$3,000+ annually.`
    },
    {
      q: `What bookkeeping services do ${stateName} vending businesses need?`,
      a: `${stateName} vending businesses benefit from monthly bookkeeping that tracks revenue by location throughout the state, product costs, route expenses, equipment maintenance, location fees, profitability analysis by machine or location, and preparation of financial statements. This helps owners make informed business decisions and simplifies tax preparation.`
    },
    {
      q: `When should ${stateName} vending business owners contact a tax professional?`,
      a: `It's best to connect with a tax professional year-round, not just during tax season. Early engagement allows for tax planning, quarterly estimate optimization, business structure review for ${stateName} requirements, and proactive financial management that can save money throughout the year. ${stateName} tax professionals can help plan for busy seasons and seasonal fluctuations.`
    },
    {
      q: `Do ${stateName} tax professionals understand vending machine business operations?`,
      a: `Yes, qualified tax and bookkeeping professionals specializing in vending businesses understand route operations, cash handling, inventory management, equipment depreciation schedules, location agreements, seasonal revenue patterns, and the unique challenges of operating multiple machines across ${stateName}'s diverse cities and business districts.`
    },
    {
      q: `What business records should ${stateName} vending owners bring to tax consultations?`,
      a: `Bring previous tax returns, financial statements, bank statements, expense receipts for route operations and equipment, equipment purchase records, location agreements throughout ${stateName}, vehicle mileage logs, inventory records, and any questions about your business structure or operations. The more information you provide, the better the professional can assist you.`
    },
    {
      q: `Are there ${stateName}-specific tax considerations for vending businesses?`,
      a: `Yes, ${stateName} vending businesses must consider ${stateName === 'Florida' ? 'Florida sales tax on vending machine sales, no state income tax (but federal tax still applies), business tax receipts required in various counties' : stateName === 'Texas' ? 'Texas sales tax on vending machine sales, franchise tax requirements, no state income tax (but federal tax still applies), business permits in various cities' : 'California sales tax on vending machine sales, state income tax, franchise tax board requirements, business licenses'} throughout the state, and potential property tax on equipment. A qualified tax professional can ensure compliance with all ${stateName}-specific tax requirements.`
    },
    {
      q: `How can bookkeeping help ${stateName} vending businesses grow?`,
      a: `Professional bookkeeping provides accurate financial insights that help ${stateName} vending owners identify most profitable locations, optimize route efficiency, manage cash flow during slow seasons, make informed equipment purchase decisions, negotiate better location agreements, and plan for expansion throughout ${stateName}.`
    },
    {
      q: `What's the typical turnaround time for tax preparation for ${stateName} vending businesses?`,
      a: `Turnaround time varies by complexity, but most tax professionals can complete returns for ${stateName} vending businesses within 2-4 weeks after receiving all necessary documents. Starting early in tax season and maintaining organized records throughout the year helps expedite the process and allows time for tax planning strategies specific to ${stateName} requirements.`
    }
  ];
  
  const stateFAQString = `  const faqItems = [
    ${stateFAQs.map((faq, idx) => `{
      q: ${JSON.stringify(faq.q)},
      a: ${JSON.stringify(faq.a)}
    }${idx < stateFAQs.length - 1 ? ',' : ''}`).join('\n    ')}
  ]`;
  
  stateContent = stateContent.substring(0, stateFAQStart) + stateFAQString + stateContent.substring(stateFAQEnd);
  
  // Replace "How We Help" section
  stateContent = stateContent.replace(
    /How We Help Jacksonville Vending Business Owners Find Tax & Bookkeeping Professionals/g,
    `How We Help ${stateName} Vending Business Owners Find Tax & Bookkeeping Professionals`
  );
  stateContent = stateContent.replace(
    /Tell us about your Jacksonville vending business/g,
    `Tell us about your ${stateName} vending business`
  );
  stateContent = stateContent.replace(
    /We connect you with 2-3 pre-screened tax and bookkeeping professionals who serve Jacksonville/g,
    `We connect you with 2-3 pre-screened tax and bookkeeping professionals who serve ${stateName}`
  );
  
  // Update "What to Expect" section title
  stateContent = stateContent.replace(
    /What to Expect from Tax & Bookkeeping Services in \{cityDisplayName\}/g,
    `What to Expect from Tax & Bookkeeping Services in ${stateName}`
  );
  stateContent = stateContent.replace(
    /Understanding the complete tax and bookkeeping process for Jacksonville vending machine businesses/g,
    `Understanding the complete tax and bookkeeping process for ${stateName} vending machine businesses`
  );
  
  // Update "Why Choose" section
  stateContent = stateContent.replace(
    /Why Jacksonville Vending Business Owners Choose Our Tax & Bookkeeping Partners/g,
    `Why ${stateName} Vending Business Owners Choose Our Tax & Bookkeeping Partners`
  );
  stateContent = stateContent.replace(
    /Local professionals familiar with Jacksonville and Florida tax requirements/g,
    `Local professionals familiar with ${stateName} tax requirements and business regulations`
  );
  
  // Update FAQ section title
  stateContent = stateContent.replace(
    /Tax & Bookkeeping Services in \{cityDisplayName\} - FAQ/g,
    `Tax & Bookkeeping Services in ${stateName} - FAQ`
  );
  
  // Update CTA
  stateContent = stateContent.replace(
    /Join Jacksonville vending business owners/g,
    `Join ${stateName} vending business owners`
  );
  
  // Update JSON-LD breadcrumb
  stateContent = stateContent.replace(
    /\{ '@type': 'ListItem', position: 3, name: 'Florida', item: 'https:\/\/www\.thevendinglocator\.com\/tax-services\/florida' \}/g,
    `{ '@type': 'ListItem', position: 3, name: '${stateName}', item: 'https://www.thevendinglocator.com/tax-services/${stateSlug}' }`
  );
  stateContent = stateContent.replace(
    /\{ '@type': 'ListItem', position: 4, name: 'Jacksonville', item: 'https:\/\/www\.thevendinglocator\.com\/tax-services\/jacksonville-florida' \}/g,
    ''
  );
  
  // Update cities section to show all cities
  stateContent = stateContent.replace(
    /Vending Services by City in \{cityDisplayName\}/g,
    `Tax & Bookkeeping Services by City in ${stateName}`
  );
  stateContent = stateContent.replace(
    /Browse professional vending service providers by city in \{cityDisplayName\}/g,
    `Browse tax and bookkeeping professionals by city across ${stateName}`
  );
  
  // Replace city links to use tax-services instead of vending-services
  stateContent = stateContent.replace(
    /href={`\/vending-services\/\$\{city\.slug\}`}/g,
    'href={`/tax-services/${city.slug}`}'
  );
  stateContent = stateContent.replace(
    /Find vending service providers in/g,
    'Find tax and bookkeeping services in'
  );
  stateContent = stateContent.replace(
    /View Services/g,
    'View Tax Services'
  );
  
  // Update cities display condition
  stateContent = stateContent.replace(
    /\{cities\.length > 0 &&/g,
    '{cities && cities.length > 0 &&'
  );
  
  // Remove city-specific descriptions in "What to Expect" and make state-level
  stateContent = stateContent.replace(
    /Your \{stateDisplayName\} location/g,
    `Your ${stateName} location`
  );
  stateContent = stateContent.replace(
    /across Duval County/g,
    `throughout ${stateName}`
  );
  stateContent = stateContent.replace(
    /Jacksonville vending/g,
    `${stateName} vending`
  );
  stateContent = stateContent.replace(
    /Jacksonville's/g,
    `${stateName}'s`
  );
  
  // Write pageClient.tsx
  fs.writeFileSync(path.join(stateDir, 'pageClient.tsx'), stateContent);
  
  console.log(`Created ${stateName} state page with ${cities.length} cities`);
}

// Create state pages
createStatePage('Florida', 'florida', flCities, 'FloridaTaxServicesPage');
createStatePage('Texas', 'texas', txCities, 'TexasTaxServicesPage');
createStatePage('California', 'california', caCities, 'CaliforniaTaxServicesPage');

console.log('\nAll state pages created successfully!');

