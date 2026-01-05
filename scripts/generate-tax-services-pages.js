const fs = require('fs');
const path = require('path');

// Read states data
const statesFile = path.join(__dirname, '../src/data/states.ts');
const statesContent = fs.readFileSync(statesFile, 'utf8');

// Extract cities for FL, TX, CA manually since we can't import TS directly
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

// Helper function to generate unique city-specific content
function generateCityContent(cityName, stateName, stateSlug) {
  const citySlug = cityName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') + '-' + stateSlug;
  const componentName = cityName.replace(/[^a-zA-Z0-9]/g, '') + stateName.replace(/[^a-zA-Z0-9]/g, '') + 'TaxServicesPage';
  
  // Generate unique county/region based on city name hash
  const cityHash = cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const counties = {
    florida: ['Duval County', 'Orange County', 'Miami-Dade County', 'Broward County', 'Hillsborough County', 'Pinellas County', 'Palm Beach County', 'Brevard County', 'Volusia County', 'Lee County', 'Sarasota County', 'Collier County', 'Polk County', 'Escambia County', 'Manatee County'],
    texas: ['Harris County', 'Dallas County', 'Tarrant County', 'Bexar County', 'Travis County', 'El Paso County', 'Collin County', 'Denton County', 'Fort Bend County', 'Hidalgo County', 'Montgomery County', 'Williamson County', 'Jefferson County', 'Cameron County', 'Bell County'],
    california: ['Los Angeles County', 'Orange County', 'San Diego County', 'Riverside County', 'San Bernardino County', 'Santa Clara County', 'Alameda County', 'Sacramento County', 'Contra Costa County', 'Fresno County', 'Ventura County', 'San Francisco County', 'Kern County', 'San Mateo County', 'San Joaquin County']
  };
  
  const regions = {
    florida: ['Northeast Florida', 'Central Florida', 'South Florida', 'Northwest Florida', 'Southeast Florida', 'Tampa Bay area', 'Space Coast'],
    texas: ['North Texas', 'South Texas', 'East Texas', 'West Texas', 'Gulf Coast', 'Central Texas', 'Panhandle', 'Hill Country'],
    california: ['Southern California', 'Northern California', 'Central Valley', 'Bay Area', 'Inland Empire', 'Central Coast', 'San Francisco Bay Area', 'Los Angeles Metro']
  };
  
  const county = counties[stateSlug][cityHash % counties[stateSlug].length];
  const region = regions[stateSlug][cityHash % regions[stateSlug].length];
  
  // Generate unique FAQ variations
  const faqTemplates = [
    {
      q: `Why do vending machine owners in ${cityName} need specialized tax help?`,
      a: `Vending machine businesses in ${cityName} have unique tax considerations including equipment depreciation, route expenses, location fees across ${county}, product inventory, multi-location operations, and ${stateName}-specific tax requirements. Specialized tax professionals understand these nuances and can help maximize deductions while ensuring compliance with state and federal regulations.`
    },
    {
      q: `What tax deductions are available for vending machine businesses in ${cityName}?`,
      a: `${cityName} vending businesses can deduct equipment depreciation, vehicle expenses for route operations, product inventory costs, location fees throughout the ${cityName} area, maintenance and repairs, insurance, business licenses, professional fees, home office expenses if applicable, and mileage for servicing machines across ${cityName}'s business districts and surrounding areas.`
    },
    {
      q: `How much do tax and bookkeeping services cost for vending businesses in ${cityName}?`,
      a: `Costs vary based on the size of your ${cityName} vending business, number of locations, machines operated, and services needed. Most professionals offer free consultations to discuss your needs. Monthly bookkeeping typically ranges from $200-$1,000+ depending on complexity, while tax preparation for vending businesses in ${cityName} generally costs $500-$3,000+ annually.`
    },
    {
      q: `What bookkeeping services do ${cityName} vending businesses need?`,
      a: `${cityName} vending businesses benefit from monthly bookkeeping that tracks revenue by location throughout the city, product costs, route expenses across ${county}, equipment maintenance, location fees, profitability analysis by machine or location, and preparation of financial statements. This helps owners make informed business decisions and simplifies tax preparation.`
    },
    {
      q: `When should ${cityName} vending business owners contact a tax professional?`,
      a: `It's best to connect with a tax professional year-round, not just during tax season. Early engagement allows for tax planning, quarterly estimate optimization, business structure review for ${stateName} requirements, and proactive financial management that can save money throughout the year. ${cityName} tax professionals can help plan for busy seasons and seasonal fluctuations in the ${region} market.`
    },
    {
      q: `Do ${cityName} tax professionals understand vending machine business operations?`,
      a: `Yes, qualified tax and bookkeeping professionals specializing in vending businesses understand route operations, cash handling, inventory management, equipment depreciation schedules, location agreements, seasonal revenue patterns, and the unique challenges of operating multiple machines across ${cityName}'s diverse neighborhoods and business districts.`
    },
    {
      q: `What business records should ${cityName} vending owners bring to tax consultations?`,
      a: `Bring previous tax returns, financial statements, bank statements, expense receipts for route operations and equipment, equipment purchase records, location agreements throughout ${cityName}, vehicle mileage logs, inventory records, and any questions about your business structure or operations. The more information you provide, the better the professional can assist you.`
    },
    {
      q: `Are there ${stateName}-specific tax considerations for ${cityName} vending businesses?`,
      a: `Yes, ${cityName} vending businesses must consider ${stateName === 'Florida' ? 'Florida sales tax on vending machine sales, no state income tax (but federal tax still applies), business tax receipts required' : stateName === 'Texas' ? 'Texas sales tax on vending machine sales, franchise tax requirements, no state income tax (but federal tax still applies), business permits' : 'California sales tax on vending machine sales, state income tax, franchise tax board requirements, business licenses'} in ${county}, and potential property tax on equipment. A qualified tax professional can ensure compliance with all ${stateName} and ${cityName}-specific tax requirements.`
    },
    {
      q: `How can bookkeeping help ${cityName} vending businesses grow?`,
      a: `Professional bookkeeping provides accurate financial insights that help ${cityName} vending owners identify most profitable locations, optimize route efficiency, manage cash flow during slow seasons, make informed equipment purchase decisions, negotiate better location agreements, and plan for expansion throughout the ${region} region.`
    },
    {
      q: `What's the typical turnaround time for tax preparation for ${cityName} vending businesses?`,
      a: `Turnaround time varies by complexity, but most tax professionals can complete returns for ${cityName} vending businesses within 2-4 weeks after receiving all necessary documents. Starting early in tax season and maintaining organized records throughout the year helps expedite the process and allows time for tax planning strategies specific to ${stateName} requirements.`
    }
  ];
  
  return {
    cityName,
    citySlug,
    componentName,
    county,
    region,
    stateName,
    stateSlug,
    faqTemplates
  };
}

// Read the template file
const templatePath = path.join(__dirname, '../src/app/tax-services/jacksonville-florida/pageClient.tsx');
const templateContent = fs.readFileSync(templatePath, 'utf8');

// Function to create page files
function createCityPage(city, stateName, stateSlug) {
  const content = generateCityContent(city.name, stateName, stateSlug);
  const cityDir = path.join(__dirname, `../src/app/tax-services/${content.citySlug}`);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(cityDir)) {
    fs.mkdirSync(cityDir, { recursive: true });
  }
  
  // Generate page.tsx
  const pageTsx = `import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in ${content.cityName}, ${stateName} - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in ${content.cityName}, ${stateName}. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes ${content.cityName} ${stateName}, vending business bookkeeping ${content.cityName}, tax services vending machines ${content.cityName} ${stateName}, vending machine accounting ${content.cityName}, tax preparation vending business ${content.cityName}",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/${content.citySlug}"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in ${content.cityName}, ${stateName} - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in ${content.cityName}, ${stateName}. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/${content.citySlug}",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in ${content.cityName}, ${stateName} - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in ${content.cityName}, ${stateName}. Get professional help with taxes, accounting, and financial management."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: 'large',
      maxSnippet: -1
    }
  }
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CityPage() {
  return <PageClient />
}
`;

  // Generate pageClient.tsx - replace Jacksonville-specific content
  let pageClientContent = templateContent
    .replace(/Jacksonville/g, content.cityName)
    .replace(/jacksonville-florida/g, content.citySlug)
    .replace(/JacksonvilleFloridaTaxServicesPage/g, content.componentName)
    .replace(/Duval County/g, content.county)
    .replace(/Northeast Florida/g, content.region)
    .replace(/Jacksonville\'s/g, `${content.cityName}'s`);
  
  // Replace FAQ items
  const faqStart = pageClientContent.indexOf('const faqItems = [');
  const faqEnd = pageClientContent.indexOf('];', faqStart) + 2;
  const faqString = `  const faqItems = [
    ${content.faqTemplates.map((faq, idx) => `{
      q: ${JSON.stringify(faq.q)},
      a: ${JSON.stringify(faq.a)}
    }${idx < content.faqTemplates.length - 1 ? ',' : ''}`).join('\n    ')}
  ]`;
  
  pageClientContent = pageClientContent.substring(0, faqStart) + faqString + pageClientContent.substring(faqEnd);
  
  // Update breadcrumb JSON-LD
  pageClientContent = pageClientContent.replace(
    /'Jacksonville', item: 'https:\/\/www\.thevendinglocator\.com\/tax-services\/jacksonville-florida'/g,
    `'${content.cityName}', item: 'https://www.thevendinglocator.com/tax-services/${content.citySlug}'`
  );
  
  // Write files
  fs.writeFileSync(path.join(cityDir, 'page.tsx'), pageTsx);
  fs.writeFileSync(path.join(cityDir, 'pageClient.tsx'), pageClientContent);
  
  console.log(`Created ${content.cityName}, ${stateName}`);
}

// Skip Jacksonville since it already exists
const citiesToCreate = [
  ...flCities.filter(c => c.slug !== 'jacksonville-florida').map(c => ({...c, state: 'Florida', stateSlug: 'florida'})),
  ...txCities.map(c => ({...c, state: 'Texas', stateSlug: 'texas'})),
  ...caCities.map(c => ({...c, state: 'California', stateSlug: 'california'}))
];

console.log(`Creating ${citiesToCreate.length} tax services city pages...`);

citiesToCreate.forEach((city, index) => {
  try {
    createCityPage(city, city.state, city.stateSlug);
    if ((index + 1) % 10 === 0) {
      console.log(`Progress: ${index + 1}/${citiesToCreate.length} pages created`);
    }
  } catch (error) {
    console.error(`Error creating page for ${city.name}:`, error.message);
  }
});

console.log(`\nCompleted! Created ${citiesToCreate.length} tax services city pages.`);

