// Shared list of all states and their cities for directories
export type City = { name: string; slug: string }
export type State = { name: string; slug: string; cities: City[] }

const states: State[] = [
  {
    name: 'Alabama',
    slug: 'alabama',
    cities: [
      { name: 'Auburn', slug: 'auburn-alabama' },
      { name: 'Birmingham', slug: 'birmingham-alabama' },
      { name: 'Decatur', slug: 'decatur-alabama' },
      { name: 'Dothan', slug: 'dothan-alabama' },
      { name: 'Gadsden', slug: 'gadsden-alabama' },
      { name: 'Hoover', slug: 'hoover-alabama' },
      { name: 'Huntsville', slug: 'huntsville-alabama' },
      { name: 'Mobile', slug: 'mobile-alabama' },
      { name: 'Montgomery', slug: 'montgomery-alabama' },
      { name: 'Tuscaloosa', slug: 'tuscaloosa-alabama' }
    ]
  },
  {
    name: 'Alaska',
    slug: 'alaska',
    cities: [
      { name: 'Anchorage', slug: 'anchorage-alaska' },
      { name: 'Fairbanks', slug: 'fairbanks-alaska' },
      { name: 'Juneau', slug: 'juneau-alaska' },
      { name: 'Wasilla', slug: 'wasilla-alaska' },
      { name: 'Sitka', slug: 'sitka-alaska' },
      { name: 'Kenai', slug: 'kenai-alaska' },
      { name: 'Ketchikan', slug: 'ketchikan-alaska' },
      { name: 'Kodiak', slug: 'kodiak-alaska' },
      { name: 'Palmer', slug: 'palmer-alaska' },
      { name: 'Homer', slug: 'homer-alaska' },
      { name: 'Soldotna', slug: 'soldotna-alaska' }
    ]
  },
  {
    name: 'Arizona',
    slug: 'arizona',
    cities: [
      { name: 'Chandler', slug: 'chandler-arizona' },
      { name: 'Gilbert', slug: 'gilbert-arizona' },
      { name: 'Glendale', slug: 'glendale-arizona' },
      { name: 'Mesa', slug: 'mesa-arizona' },
      { name: 'Peoria', slug: 'peoria-arizona' },
      { name: 'Phoenix', slug: 'phoenix-arizona' },
      { name: 'Scottsdale', slug: 'scottsdale-arizona' },
      { name: 'Surprise', slug: 'surprise-arizona' },
      { name: 'Tempe', slug: 'tempe-arizona' },
      { name: 'Tucson', slug: 'tucson-arizona' },
      { name: 'Flagstaff', slug: 'flagstaff-arizona' },
      { name: 'Yuma', slug: 'yuma-arizona' }
    ]
  },
  {
    name: 'Arkansas',
    slug: 'arkansas',
    cities: [
      { name: 'Bentonville', slug: 'bentonville-arkansas' },
      { name: 'Conway', slug: 'conway-arkansas' },
      { name: 'Fayetteville', slug: 'fayetteville-arkansas' },
      { name: 'Fort Smith', slug: 'fort-smith-arkansas' },
      { name: 'Hot Springs', slug: 'hot-springs-arkansas' },
      { name: 'Jonesboro', slug: 'jonesboro-arkansas' },
      { name: 'Little Rock', slug: 'little-rock-arkansas' },
      { name: 'North Little Rock', slug: 'north-little-rock-arkansas' },
      { name: 'Pine Bluff', slug: 'pine-bluff-arkansas' },
      { name: 'Rogers', slug: 'rogers-arkansas' },
      { name: 'Springdale', slug: 'springdale-arkansas' }
    ]
  },
  {
    name: 'California',
    slug: 'california',
    cities: [
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
      { name: 'Jurupa Valley', slug: 'jurupa-valley-california' },
      { name: 'Lakewood', slug: 'lakewood-california' },
      { name: 'Long Beach', slug: 'long-beach-california' },
      { name: 'Los Angeles', slug: 'los-angeles-california' },
      { name: 'Modesto', slug: 'modesto-california' },
      { name: 'Moreno Valley', slug: 'moreno-valley-california' },
      { name: 'Murrieta', slug: 'murrieta-california' },
      { name: 'Norwalk', slug: 'norwalk-california' },
      { name: 'Oakland', slug: 'oakland-california' },
      { name: 'Oceanside', slug: 'oceanside-california' },
      { name: 'Ontario', slug: 'ontario-california' },
      { name: 'Orange', slug: 'orange-california' },
      { name: 'Oxnard', slug: 'oxnard-california' },
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
      { name: 'Whittier', slug: 'whittier-california' }
    ]
  },
  {
    name: 'Colorado',
    slug: 'colorado',
    cities: [
      { name: 'Arvada', slug: 'arvada-colorado' },
      { name: 'Aurora', slug: 'aurora-colorado' },
      { name: 'Boulder', slug: 'boulder-colorado' },
      { name: 'Centennial', slug: 'centennial-colorado' },
      { name: 'Colorado Springs', slug: 'colorado-springs-colorado' },
      { name: 'Denver', slug: 'denver-colorado' },
      { name: 'Fort Collins', slug: 'fort-collins-colorado' },
      { name: 'Grand Junction', slug: 'grand-junction-colorado' },
      { name: 'Greeley', slug: 'greeley-colorado' },
      { name: 'Lakewood', slug: 'lakewood-colorado' },
      { name: 'Pueblo', slug: 'pueblo-colorado' },
      { name: 'Thornton', slug: 'thornton-colorado' },
      { name: 'Westminster', slug: 'westminster-colorado' }
    ]
  },
  {
    name: 'Connecticut',
    slug: 'connecticut',
    cities: [
      { name: 'Bridgeport', slug: 'bridgeport-connecticut' },
      { name: 'Danbury', slug: 'danbury-connecticut' },
      { name: 'Hartford', slug: 'hartford-connecticut' },
      { name: 'New Britain', slug: 'new-britain-connecticut' },
      { name: 'New Haven', slug: 'new-haven-connecticut' },
      { name: 'Norwalk', slug: 'norwalk-connecticut' },
      { name: 'Stamford', slug: 'stamford-connecticut' },
      { name: 'Waterbury', slug: 'waterbury-connecticut' }
    ]
  },
  {
    name: 'Delaware',
    slug: 'delaware',
    cities: [
      { name: 'Bear', slug: 'bear-delaware' },
      { name: 'Dover', slug: 'dover-delaware' },
      { name: 'Elsmere', slug: 'elsmere-delaware' },
      { name: 'Georgetown', slug: 'georgetown-delaware' },
      { name: 'Middletown', slug: 'middletown-delaware' },
      { name: 'Milford', slug: 'milford-delaware' },
      { name: 'Newark', slug: 'newark-delaware' },
      { name: 'New Castle', slug: 'new-castle-delaware' },
      { name: 'Seaford', slug: 'seaford-delaware' },
      { name: 'Smyrna', slug: 'smyrna-delaware' },
      { name: 'Wilmington', slug: 'wilmington-delaware' }
    ]
  },
  {
    name: 'Florida',
    slug: 'florida',
    cities: [
      { name: 'Boca Raton', slug: 'boca-raton-florida' },
      { name: 'Boynton Beach', slug: 'boynton-beach-florida' },
      { name: 'Cape Coral', slug: 'cape-coral-florida' },
      { name: 'Clearwater', slug: 'clearwater-florida' },
      { name: 'Coral Springs', slug: 'coral-springs-florida' },
      { name: 'Daytona Beach', slug: 'daytona-beach-florida' },
      { name: 'Davie', slug: 'davie-florida' },
      { name: 'Deltona', slug: 'deltona-florida' },
      { name: 'Fort Lauderdale', slug: 'fort-lauderdale-florida' },
      { name: 'Fort Myers', slug: 'fort-myers-florida' },
      { name: 'Gainesville', slug: 'gainesville-florida' },
      { name: 'Hialeah', slug: 'hialeah-florida' },
      { name: 'Hollywood', slug: 'hollywood-florida' },
      { name: 'Jacksonville', slug: 'jacksonville-florida' },
      { name: 'Kissimmee', slug: 'kissimmee-florida' },
      { name: 'Lakeland', slug: 'lakeland-florida' },
      { name: 'Largo', slug: 'largo-florida' },
      { name: 'Miami', slug: 'miami-florida' },
      { name: 'Miramar', slug: 'miramar-florida' },
      { name: 'Naples', slug: 'naples-florida' },
      { name: 'Orlando', slug: 'orlando-florida' },
      { name: 'Palm Bay', slug: 'palm-bay-florida' },
      { name: 'Palm Coast', slug: 'palm-coast-florida' },
      { name: 'Pembroke Pines', slug: 'pembroke-pines-florida' },
      { name: 'Pensacola', slug: 'pensacola-florida' },
      { name: 'Plantation', slug: 'plantation-florida' },
      { name: 'Pompano Beach', slug: 'pompano-beach-florida' },
      { name: 'Port St. Lucie', slug: 'port-st-lucie-florida' },
      { name: 'Sarasota', slug: 'sarasota-florida' },
      { name: 'St. Petersburg', slug: 'st-petersburg-florida' },
      { name: 'Sunrise', slug: 'sunrise-florida' },
      { name: 'Tallahassee', slug: 'tallahassee-florida' },
      { name: 'Tampa', slug: 'tampa-florida' },
      { name: 'West Palm Beach', slug: 'west-palm-beach-florida' }
    ]
  },
  {
    name: 'Georgia',
    slug: 'georgia',
    cities: [
      { name: 'Albany', slug: 'albany-georgia' },
      { name: 'Athens', slug: 'athens-georgia' },
      { name: 'Atlanta', slug: 'atlanta-georgia' },
      { name: 'Augusta', slug: 'augusta-georgia' },
      { name: 'Columbus', slug: 'columbus-georgia' },
      { name: 'Macon', slug: 'macon-georgia' },
      { name: 'Marietta', slug: 'marietta-georgia' },
      { name: 'Roswell', slug: 'roswell-georgia' },
      { name: 'Sandy Springs', slug: 'sandy-springs-georgia' },
      { name: 'Savannah', slug: 'savannah-georgia' },
      { name: 'Valdosta', slug: 'valdosta-georgia' },
      { name: 'Warner Robins', slug: 'warner-robins-georgia' }
    ]
  },
  {
    name: 'Hawaii',
    slug: 'hawaii',
    cities: [
      { name: 'Hilo', slug: 'hilo-hawaii' },
      { name: 'Honolulu', slug: 'honolulu-hawaii' },
      { name: 'Kailua', slug: 'kailua-hawaii' },
      { name: 'Pearl City', slug: 'pearl-city-hawaii' }
    ]
  },
  {
    name: 'Idaho',
    slug: 'idaho',
    cities: [
      { name: 'Boise', slug: 'boise-idaho' },
      { name: 'Caldwell', slug: 'caldwell-idaho' },
      { name: "Coeur d'Alene", slug: 'coeur-dalene-idaho' },
      { name: 'Idaho Falls', slug: 'idaho-falls-idaho' },
      { name: 'Meridian', slug: 'meridian-idaho' },
      { name: 'Nampa', slug: 'nampa-idaho' },
      { name: 'Pocatello', slug: 'pocatello-idaho' },
      { name: 'Rexburg', slug: 'rexburg-idaho' },
      { name: 'Twin Falls', slug: 'twin-falls-idaho' }
    ]
  },
  {
    name: 'Illinois',
    slug: 'illinois',
    cities: [
      { name: 'Aurora', slug: 'aurora-illinois' },
      { name: 'Bloomington', slug: 'bloomington-illinois' },
      { name: 'Champaign-Urbana', slug: 'champaign-urbana-illinois' },
      { name: 'Chicago', slug: 'chicago-illinois' },
      { name: 'Cicero', slug: 'cicero-illinois' },
      { name: 'Decatur', slug: 'decatur-illinois' },
      { name: 'Elgin', slug: 'elgin-illinois' },
      { name: 'Evanston', slug: 'evanston-illinois' },
      { name: 'Joliet', slug: 'joliet-illinois' },
      { name: 'Moline', slug: 'moline-illinois' },
      { name: 'Naperville', slug: 'naperville-illinois' },
      { name: 'Peoria', slug: 'peoria-illinois' },
      { name: 'Quincy', slug: 'quincy-illinois' },
      { name: 'Rockford', slug: 'rockford-illinois' },
      { name: 'Schaumburg', slug: 'schaumburg-illinois' },
      { name: 'Springfield', slug: 'springfield-illinois' },
      { name: 'Waukegan', slug: 'waukegan-illinois' }
    ]
  },
  {
    name: 'Indiana',
    slug: 'indiana',
    cities: [
      { name: 'Bloomington', slug: 'bloomington-indiana' },
      { name: 'Carmel', slug: 'carmel-indiana' },
      { name: 'Evansville', slug: 'evansville-indiana' },
      { name: 'Fort Wayne', slug: 'fort-wayne-indiana' },
      { name: 'Gary', slug: 'gary-indiana' },
      { name: 'Hammond', slug: 'hammond-indiana' },
      { name: 'Indianapolis', slug: 'indianapolis-indiana' },
      { name: 'Kokomo', slug: 'kokomo-indiana' },
      { name: 'South Bend', slug: 'south-bend-indiana' }
    ]
  },
  {
    name: 'Iowa',
    slug: 'iowa',
    cities: [
      { name: 'Ames', slug: 'ames-iowa' },
      { name: 'Cedar Rapids', slug: 'cedar-rapids-iowa' },
      { name: 'Davenport', slug: 'davenport-iowa' },
      { name: 'Des Moines', slug: 'des-moines-iowa' },
      { name: 'Dubuque', slug: 'dubuque-iowa' },
      { name: 'Iowa City', slug: 'iowa-city-iowa' },
      { name: 'Sioux City', slug: 'sioux-city-iowa' },
      { name: 'Waterloo', slug: 'waterloo-iowa' }
    ]
  },
  {
    name: 'Kansas',
    slug: 'kansas',
    cities: [
      { name: 'Kansas City', slug: 'kansas-city-kansas' },
      { name: 'Lawrence', slug: 'lawrence-kansas' },
      { name: 'Manhattan', slug: 'manhattan-kansas' },
      { name: 'Olathe', slug: 'olathe-kansas' },
      { name: 'Overland Park', slug: 'overland-park-kansas' },
      { name: 'Topeka', slug: 'topeka-kansas' },
      { name: 'Wichita', slug: 'wichita-kansas' }
    ]
  },
  {
    name: 'Kentucky',
    slug: 'kentucky',
    cities: [
      { name: 'Bowling Green', slug: 'bowling-green-kentucky' },
      { name: 'Covington', slug: 'covington-kentucky' },
      { name: 'Florence', slug: 'florence-kentucky' },
      { name: 'Frankfort', slug: 'frankfort-kentucky' },
      { name: 'Georgetown', slug: 'georgetown-kentucky' },
      { name: 'Hopkinsville', slug: 'hopkinsville-kentucky' },
      { name: 'Lexington', slug: 'lexington-kentucky' },
      { name: 'Louisville', slug: 'louisville-kentucky' },
      { name: 'Owensboro', slug: 'owensboro-kentucky' },
      { name: 'Paducah', slug: 'paducah-kentucky' },
      { name: 'Richmond', slug: 'richmond-kentucky' }
    ]
  },
  {
    name: 'Louisiana',
    slug: 'louisiana',
    cities: [
      { name: 'Alexandria', slug: 'alexandria-louisiana' },
      { name: 'Baton Rouge', slug: 'baton-rouge-louisiana' },
      { name: 'Bossier City', slug: 'bossier-city-louisiana' },
      { name: 'Houma', slug: 'houma-louisiana' },
      { name: 'Kenner', slug: 'kenner-louisiana' },
      { name: 'Lafayette', slug: 'lafayette-louisiana' },
      { name: 'Lake Charles', slug: 'lake-charles-louisiana' },
      { name: 'Metairie', slug: 'metairie-louisiana' },
      { name: 'Monroe', slug: 'monroe-louisiana' },
      { name: 'New Orleans', slug: 'new-orleans-louisiana' },
      { name: 'Shreveport', slug: 'shreveport-louisiana' },
      { name: 'Slidell', slug: 'slidell-louisiana' }
    ]
  },
  {
    name: 'Maine',
    slug: 'maine',
    cities: [
      { name: 'Augusta', slug: 'augusta-maine' },
      { name: 'Bangor', slug: 'bangor-maine' },
      { name: 'Lewiston', slug: 'lewiston-maine' },
      { name: 'Portland', slug: 'portland-maine' }
    ]
  },
  {
    name: 'Maryland',
    slug: 'maryland',
    cities: [
      { name: 'Annapolis', slug: 'annapolis-maryland' },
      { name: 'Baltimore', slug: 'baltimore-maryland' },
      { name: 'Columbia', slug: 'columbia-maryland' },
      { name: 'Frederick', slug: 'frederick-maryland' },
      { name: 'Gaithersburg', slug: 'gaithersburg-maryland' },
      { name: 'Hagerstown', slug: 'hagerstown-maryland' },
      { name: 'Rockville', slug: 'rockville-maryland' },
      { name: 'Silver Spring', slug: 'silver-spring-maryland' }
    ]
  },
  {
    name: 'Massachusetts',
    slug: 'massachusetts',
    cities: [
      { name: 'Boston', slug: 'boston-massachusetts' },
      { name: 'Cambridge', slug: 'cambridge-massachusetts' },
      { name: 'Fall River', slug: 'fall-river-massachusetts' },
      { name: 'Lawrence', slug: 'lawrence-massachusetts' },
      { name: 'Lowell', slug: 'lowell-massachusetts' },
      { name: 'Lynn', slug: 'lynn-massachusetts' },
      { name: 'New Bedford', slug: 'new-bedford-massachusetts' },
      { name: 'Newton', slug: 'newton-massachusetts' },
      { name: 'Quincy', slug: 'quincy-massachusetts' },
      { name: 'Springfield', slug: 'springfield-massachusetts' },
      { name: 'Worcester', slug: 'worcester-massachusetts' }
    ]
  },
  {
    name: 'Michigan',
    slug: 'michigan',
    cities: [
      { name: 'Ann Arbor', slug: 'ann-arbor-michigan' },
      { name: 'Dearborn', slug: 'dearborn-michigan' },
      { name: 'Detroit', slug: 'detroit-michigan' },
      { name: 'Farmington Hills', slug: 'farmington-hills-michigan' },
      { name: 'Flint', slug: 'flint-michigan' },
      { name: 'Grand Rapids', slug: 'grand-rapids-michigan' },
      { name: 'Jackson', slug: 'jackson-michigan' },
      { name: 'Kalamazoo', slug: 'kalamazoo-michigan' },
      { name: 'Lansing', slug: 'lansing-michigan' },
      { name: 'Livonia', slug: 'livonia-michigan' },
      { name: 'Rochester Hills', slug: 'rochester-hills-michigan' },
      { name: 'Saginaw', slug: 'saginaw-michigan' },
      { name: 'Sterling Heights', slug: 'sterling-heights-michigan' },
      { name: 'Troy', slug: 'troy-michigan' },
      { name: 'Warren', slug: 'warren-michigan' },
      { name: 'Westland', slug: 'westland-michigan' },
      { name: 'Birmingham', slug: 'birmingham-michigan' },
      { name: 'Kentwood', slug: 'kentwood-michigan' },
      { name: 'Novi', slug: 'novi-michigan' },
      { name: 'Pontiac', slug: 'pontiac-michigan' },
      { name: 'Taylor', slug: 'taylor-michigan' },
      { name: 'Wyoming', slug: 'wyoming-michigan' }
    ]
  },
  {
    name: 'Minnesota',
    slug: 'minnesota',
    cities: [
      { name: 'Bloomington', slug: 'bloomington-minnesota' },
      { name: 'Brooklyn Park', slug: 'brooklyn-park-minnesota' },
      { name: 'Duluth', slug: 'duluth-minnesota' },
      { name: 'Eagan', slug: 'eagan-minnesota' },
      { name: 'Lakeville', slug: 'lakeville-minnesota' },
      { name: 'Mankato', slug: 'mankato-minnesota' },
      { name: 'Maple Grove', slug: 'maple-grove-minnesota' },
      { name: 'Minneapolis', slug: 'minneapolis-minnesota' },
      { name: 'Plymouth', slug: 'plymouth-minnesota' },
      { name: 'Rochester', slug: 'rochester-minnesota' },
      { name: 'Saint Paul', slug: 'saint-paul-minnesota' },
      { name: 'St. Cloud', slug: 'st-cloud-minnesota' },
      { name: 'Woodbury', slug: 'woodbury-minnesota' }
    ]
  },
  {
    name: 'Mississippi',
    slug: 'mississippi',
    cities: [
      { name: 'Biloxi', slug: 'biloxi-mississippi' },
      { name: 'Gulfport', slug: 'gulfport-mississippi' },
      { name: 'Hattiesburg', slug: 'hattiesburg-mississippi' },
      { name: 'Jackson', slug: 'jackson-mississippi' },
      { name: 'Southaven', slug: 'southaven-mississippi' },
      { name: 'Tupelo', slug: 'tupelo-mississippi' }
    ]
  },
  {
    name: 'Missouri',
    slug: 'missouri',
    cities: [
      { name: 'Columbia', slug: 'columbia-missouri' },
      { name: 'Independence', slug: 'independence-missouri' },
      { name: 'Joplin', slug: 'joplin-missouri' },
      { name: 'Kansas City', slug: 'kansas-city-missouri' },
      { name: "Lee's Summit", slug: 'lees-summit-missouri' },
      { name: "O'Fallon", slug: 'ofallon-missouri' },
      { name: 'Springfield', slug: 'springfield-missouri' },
      { name: 'St. Louis', slug: 'st-louis-missouri' }
    ]
  },
  {
    name: 'Montana',
    slug: 'montana',
    cities: [
      { name: 'Billings', slug: 'billings-montana' },
      { name: 'Bozeman', slug: 'bozeman-montana' },
      { name: 'Butte', slug: 'butte-montana' },
      { name: 'Great Falls', slug: 'great-falls-montana' },
      { name: 'Helena', slug: 'helena-montana' },
      { name: 'Kalispell', slug: 'kalispell-montana' },
      { name: 'Missoula', slug: 'missoula-montana' }
    ]
  },
  {
    name: 'Nebraska',
    slug: 'nebraska',
    cities: [
      { name: 'Bellevue', slug: 'bellevue-nebraska' },
      { name: 'Grand Island', slug: 'grand-island-nebraska' },
      { name: 'Lincoln', slug: 'lincoln-nebraska' },
      { name: 'Omaha', slug: 'omaha-nebraska' }
    ]
  },
  {
    name: 'Nevada',
    slug: 'nevada',
    cities: [
      { name: 'Carson City', slug: 'carson-city-nevada' },
      { name: 'Enterprise', slug: 'enterprise-nevada' },
      { name: 'Henderson', slug: 'henderson-nevada' },
      { name: 'Las Vegas', slug: 'las-vegas-nevada' },
      { name: 'North Las Vegas', slug: 'north-las-vegas-nevada' },
      { name: 'Pahrump', slug: 'pahrump-nevada' },
      { name: 'Reno', slug: 'reno-nevada' },
      { name: 'Sparks', slug: 'sparks-nevada' }
    ]
  },
  {
    name: 'New Hampshire',
    slug: 'new-hampshire',
    cities: [
      { name: 'Concord', slug: 'concord-new-hampshire' },
      { name: 'Derry', slug: 'derry-new-hampshire' },
      { name: 'Dover', slug: 'dover-new-hampshire' },
      { name: 'Manchester', slug: 'manchester-new-hampshire' },
      { name: 'Merrimack', slug: 'merrimack-new-hampshire' },
      { name: 'Nashua', slug: 'nashua-new-hampshire' },
      { name: 'Portsmouth', slug: 'portsmouth-new-hampshire' },
      { name: 'Rochester', slug: 'rochester-new-hampshire' },
      { name: 'Salem', slug: 'salem-new-hampshire' }
    ]
  },
  {
    name: 'New Jersey',
    slug: 'new-jersey',
    cities: [
      { name: 'Edison', slug: 'edison-new-jersey' },
      { name: 'Elizabeth', slug: 'elizabeth-new-jersey' },
      { name: 'Jersey City', slug: 'jersey-city-new-jersey' },
      { name: 'Newark', slug: 'newark-new-jersey' },
      { name: 'Paterson', slug: 'paterson-new-jersey' },
      { name: 'Trenton', slug: 'trenton-new-jersey' },
      { name: 'Woodbridge', slug: 'woodbridge-new-jersey' }
    ]
  },
  {
    name: 'New Mexico',
    slug: 'new-mexico',
    cities: [
      { name: 'Albuquerque', slug: 'albuquerque-new-mexico' },
      { name: 'Farmington', slug: 'farmington-new-mexico' },
      { name: 'Las Cruces', slug: 'las-cruces-new-mexico' },
      { name: 'Rio Rancho', slug: 'rio-rancho-new-mexico' },
      { name: 'Santa Fe', slug: 'santa-fe-new-mexico' }
    ]
  },
  {
    name: 'New York',
    slug: 'new-york',
    cities: [
      { name: 'Albany', slug: 'albany-new-york' },
      { name: 'Binghamton', slug: 'binghamton-new-york' },
      { name: 'Buffalo', slug: 'buffalo-new-york' },
      { name: 'Ithaca', slug: 'ithaca-new-york' },
      { name: 'Mount Vernon', slug: 'mount-vernon-new-york' },
      { name: 'New Rochelle', slug: 'new-rochelle-new-york' },
      { name: 'New York', slug: 'new-york-new-york' },
      { name: 'Rochester', slug: 'rochester-new-york' },
      { name: 'Schenectady', slug: 'schenectady-new-york' },
      { name: 'Syracuse', slug: 'syracuse-new-york' },
      { name: 'Troy', slug: 'troy-new-york' },
      { name: 'Utica', slug: 'utica-new-york' },
      { name: 'White Plains', slug: 'white-plains-new-york' },
      { name: 'Yonkers', slug: 'yonkers-new-york' }
    ]
  },
  {
    name: 'North Carolina',
    slug: 'north-carolina',
    cities: [
      { name: 'Asheville', slug: 'asheville-north-carolina' },
      { name: 'Cary', slug: 'cary-north-carolina' },
      { name: 'Charlotte', slug: 'charlotte-north-carolina' },
      { name: 'Concord', slug: 'concord-north-carolina' },
      { name: 'Durham', slug: 'durham-north-carolina' },
      { name: 'Fayetteville', slug: 'fayetteville-north-carolina' },
      { name: 'Gastonia', slug: 'gastonia-north-carolina' },
      { name: 'Greensboro', slug: 'greensboro-north-carolina' },
      { name: 'Hickory', slug: 'hickory-north-carolina' },
      { name: 'High Point', slug: 'high-point-north-carolina' },
      { name: 'Raleigh', slug: 'raleigh-north-carolina' },
      { name: 'Wilmington', slug: 'wilmington-north-carolina' },
      { name: 'Winston-Salem', slug: 'winston-salem-north-carolina' }
    ]
  },
  {
    name: 'North Dakota',
    slug: 'north-dakota',
    cities: [
      { name: 'Bismarck', slug: 'bismarck-north-dakota' },
      { name: 'Fargo', slug: 'fargo-north-dakota' },
      { name: 'Grand Forks', slug: 'grand-forks-north-dakota' },
      { name: 'Minot', slug: 'minot-north-dakota' }
    ]
  },
  {
    name: 'Ohio',
    slug: 'ohio',
    cities: [
      { name: 'Akron', slug: 'akron-ohio' },
      { name: 'Canton', slug: 'canton-ohio' },
      { name: 'Cincinnati', slug: 'cincinnati-ohio' },
      { name: 'Cleveland', slug: 'cleveland-ohio' },
      { name: 'Columbus', slug: 'columbus-ohio' },
      { name: 'Dayton', slug: 'dayton-ohio' },
      { name: 'Lorain', slug: 'lorain-ohio' },
      { name: 'Mansfield', slug: 'mansfield-ohio' },
      { name: 'Parma', slug: 'parma-ohio' },
      { name: 'Springfield', slug: 'springfield-ohio' },
      { name: 'Toledo', slug: 'toledo-ohio' },
      { name: 'Youngstown', slug: 'youngstown-ohio' }
    ]
  },
  {
    name: 'Oklahoma',
    slug: 'oklahoma',
    cities: [
      { name: 'Broken Arrow', slug: 'broken-arrow-oklahoma' },
      { name: 'Lawton', slug: 'lawton-oklahoma' },
      { name: 'Norman', slug: 'norman-oklahoma' },
      { name: 'Oklahoma City', slug: 'oklahoma-city-oklahoma' },
      { name: 'Tulsa', slug: 'tulsa-oklahoma' }
    ]
  },
  {
    name: 'Oregon',
    slug: 'oregon',
    cities: [
      { name: 'Albany', slug: 'albany-oregon' },
      { name: 'Beaverton', slug: 'beaverton-oregon' },
      { name: 'Bend', slug: 'bend-oregon' },
      { name: 'Eugene', slug: 'eugene-oregon' },
      { name: 'Gresham', slug: 'gresham-oregon' },
      { name: 'Hillsboro', slug: 'hillsboro-oregon' },
      { name: 'Medford', slug: 'medford-oregon' },
      { name: 'Portland', slug: 'portland-oregon' },
      { name: 'Salem', slug: 'salem-oregon' }
    ]
  },
  {
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    cities: [
      { name: 'Allentown', slug: 'allentown-pennsylvania' },
      { name: 'Bethlehem', slug: 'bethlehem-pennsylvania' },
      { name: 'Erie', slug: 'erie-pennsylvania' },
      { name: 'Harrisburg', slug: 'harrisburg-pennsylvania' },
      { name: 'Lancaster', slug: 'lancaster-pennsylvania' },
      { name: 'Philadelphia', slug: 'philadelphia-pennsylvania' },
      { name: 'Pittsburgh', slug: 'pittsburgh-pennsylvania' },
      { name: 'Reading', slug: 'reading-pennsylvania' },
      { name: 'Scranton', slug: 'scranton-pennsylvania' },
      { name: 'York', slug: 'york-pennsylvania' }
    ]
  },
  {
    name: 'Rhode Island',
    slug: 'rhode-island',
    cities: [
      { name: 'Cranston', slug: 'cranston-rhode-island' },
      { name: 'Pawtucket', slug: 'pawtucket-rhode-island' },
      { name: 'Providence', slug: 'providence-rhode-island' },
      { name: 'Warwick', slug: 'warwick-rhode-island' },
      { name: 'Woonsocket', slug: 'woonsocket-rhode-island' }
    ]
  },
  {
    name: 'South Carolina',
    slug: 'south-carolina',
    cities: [
      { name: 'Aiken', slug: 'aiken-south-carolina' },
      { name: 'Anderson', slug: 'anderson-south-carolina' },
      { name: 'Charleston', slug: 'charleston-south-carolina' },
      { name: 'Columbia', slug: 'columbia-south-carolina' },
      { name: 'Conway', slug: 'conway-south-carolina' },
      { name: 'Florence', slug: 'florence-south-carolina' },
      { name: 'Goose Creek', slug: 'goose-creek-south-carolina' },
      { name: 'Greenville', slug: 'greenville-south-carolina' },
      { name: 'Hilton Head Island', slug: 'hilton-head-island-south-carolina' },
      { name: 'Mount Pleasant', slug: 'mount-pleasant-south-carolina' },
      { name: 'Myrtle Beach', slug: 'myrtle-beach-south-carolina' },
      { name: 'North Charleston', slug: 'north-charleston-south-carolina' },
      { name: 'Rock Hill', slug: 'rock-hill-south-carolina' },
      { name: 'Spartanburg', slug: 'spartanburg-south-carolina' },
      { name: 'Summerville', slug: 'summerville-south-carolina' }
    ]
  },
  {
    name: 'South Dakota',
    slug: 'south-dakota',
    cities: [
      { name: 'Aberdeen', slug: 'aberdeen-south-dakota' },
      { name: 'Rapid City', slug: 'rapid-city-south-dakota' },
      { name: 'Sioux Falls', slug: 'sioux-falls-south-dakota' }
    ]
  },
  {
    name: 'Tennessee',
    slug: 'tennessee',
    cities: [
      { name: 'Chattanooga', slug: 'chattanooga-tennessee' },
      { name: 'Clarksville', slug: 'clarksville-tennessee' },
      { name: 'Franklin', slug: 'franklin-tennessee' },
      { name: 'Jackson', slug: 'jackson-tennessee' },
      { name: 'Johnson City', slug: 'johnson-city-tennessee' },
      { name: 'Kingsport', slug: 'kingsport-tennessee' },
      { name: 'Knoxville', slug: 'knoxville-tennessee' },
      { name: 'Memphis', slug: 'memphis-tennessee' },
      { name: 'Murfreesboro', slug: 'murfreesboro-tennessee' },
      { name: 'Nashville', slug: 'nashville-tennessee' }
    ]
  },
  {
    name: 'Texas',
    slug: 'texas',
    cities: [
      { name: 'Abilene', slug: 'abilene-texas' },
      { name: 'Amarillo', slug: 'amarillo-texas' },
      { name: 'Arlington', slug: 'arlington-texas' },
      { name: 'Austin', slug: 'austin-texas' },
      { name: 'Beaumont', slug: 'beaumont-texas' },
      { name: 'Brownsville', slug: 'brownsville-texas' },
      { name: 'College Station', slug: 'college-station-texas' },
      { name: 'Corpus Christi', slug: 'corpus-christi-texas' },
      { name: 'Dallas', slug: 'dallas-texas' },
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
      { name: 'San Antonio', slug: 'san-antonio-texas' }
    ]
  },
  {
    name: 'Utah',
    slug: 'utah',
    cities: [
      { name: 'Ogden', slug: 'ogden-utah' },
      { name: 'Orem', slug: 'orem-utah' },
      { name: 'Provo', slug: 'provo-utah' },
      { name: 'Salt Lake City', slug: 'salt-lake-city-utah' },
      { name: 'Sandy', slug: 'sandy-utah' },
      { name: 'St. George', slug: 'st-george-utah' },
      { name: 'West Jordan', slug: 'west-jordan-utah' },
      { name: 'West Valley City', slug: 'west-valley-city-utah' }
    ]
  },
  {
    name: 'Vermont',
    slug: 'vermont',
    cities: [
      { name: 'Burlington', slug: 'burlington-vermont' },
      { name: 'Essex Junction', slug: 'essex-junction-vermont' },
      { name: 'South Burlington', slug: 'south-burlington-vermont' }
    ]
  },
  {
    name: 'Virginia',
    slug: 'virginia',
    cities: [
      { name: 'Alexandria', slug: 'alexandria-virginia' },
      { name: 'Arlington', slug: 'arlington-virginia' },
      { name: 'Charlottesville', slug: 'charlottesville-virginia' },
      { name: 'Chesapeake', slug: 'chesapeake-virginia' },
      { name: 'Hampton', slug: 'hampton-virginia' },
      { name: 'Lynchburg', slug: 'lynchburg-virginia' },
      { name: 'Newport News', slug: 'newport-news-virginia' },
      { name: 'Norfolk', slug: 'norfolk-virginia' },
      { name: 'Portsmouth', slug: 'portsmouth-virginia' },
      { name: 'Richmond', slug: 'richmond-virginia' },
      { name: 'Roanoke', slug: 'roanoke-virginia' },
      { name: 'Suffolk', slug: 'suffolk-virginia' },
      { name: 'Virginia Beach', slug: 'virginia-beach-virginia' }
    ]
  },
  {
    name: 'Washington',
    slug: 'washington',
    cities: [
      { name: 'Bellevue', slug: 'bellevue-washington' },
      { name: 'Bellingham', slug: 'bellingham-washington' },
      { name: 'Everett', slug: 'everett-washington' },
      { name: 'Kent', slug: 'kent-washington' },
      { name: 'Olympia', slug: 'olympia-washington' },
      { name: 'Renton', slug: 'renton-washington' },
      { name: 'Seattle', slug: 'seattle-washington' },
      { name: 'Spokane', slug: 'spokane-washington' },
      { name: 'Tacoma', slug: 'tacoma-washington' },
      { name: 'Vancouver', slug: 'vancouver-washington' },
      { name: 'Yakima', slug: 'yakima-washington' }
    ]
  },
  {
    name: 'Washington DC',
    slug: 'washington-dc',
    cities: [
      { name: 'Adams Morgan', slug: 'adams-morgan-washington-dc' },
      { name: 'Capitol Hill', slug: 'capitol-hill-washington-dc' },
      { name: 'Downtown DC', slug: 'downtown-washington-dc' },
      { name: 'Dupont Circle', slug: 'dupont-circle-washington-dc' },
      { name: 'Georgetown', slug: 'georgetown-washington-dc' },
      { name: 'Logan Circle', slug: 'logan-circle-washington-dc' },
      { name: 'Navy Yard', slug: 'navy-yard-washington-dc' },
      { name: 'Shaw', slug: 'shaw-washington-dc' },
      { name: 'Washington', slug: 'washington-washington-dc' }
    ]
  },
  {
    name: 'West Virginia',
    slug: 'west-virginia',
    cities: [
      { name: 'Charleston', slug: 'charleston-west-virginia' },
      { name: 'Huntington', slug: 'huntington-west-virginia' }
    ]
  },
  {
    name: 'Wisconsin',
    slug: 'wisconsin',
    cities: [
      { name: 'Appleton', slug: 'appleton-wisconsin' },
      { name: 'Eau Claire', slug: 'eau-claire-wisconsin' },
      { name: 'Green Bay', slug: 'green-bay-wisconsin' },
      { name: 'Janesville', slug: 'janesville-wisconsin' },
      { name: 'Kenosha', slug: 'kenosha-wisconsin' },
      { name: 'La Crosse', slug: 'la-crosse-wisconsin' },
      { name: 'Madison', slug: 'madison-wisconsin' },
      { name: 'Milwaukee', slug: 'milwaukee-wisconsin' },
      { name: 'Oshkosh', slug: 'oshkosh-wisconsin' },
      { name: 'Racine', slug: 'racine-wisconsin' },
      { name: 'Sheboygan', slug: 'sheboygan-wisconsin' },
      { name: 'Waukesha', slug: 'waukesha-wisconsin' }
    ]
  },
  {
    name: 'Wyoming',
    slug: 'wyoming',
    cities: [
      { name: 'Casper', slug: 'casper-wyoming' },
      { name: 'Cheyenne', slug: 'cheyenne-wyoming' },
      { name: 'Gillette', slug: 'gillette-wyoming' },
      { name: 'Laramie', slug: 'laramie-wyoming' },
      { name: 'Rock Springs', slug: 'rock-springs-wyoming' },
      { name: 'Sheridan', slug: 'sheridan-wyoming' }
    ]
  }
]

export default states


