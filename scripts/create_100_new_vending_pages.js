const fs = require('fs');
const path = require('path');

// Get all existing city directories
const baseDir = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business');
const existingDirs = fs.readdirSync(baseDir, { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name !== '[slug]')
  .map(d => d.name);

console.log(`Found ${existingDirs.length} existing city directories`);

// List of 100 new cities to create (cities that likely don't have pages yet)
const newCities = [
  // Alabama
  { name: 'Prattville', state: 'Alabama', slug: 'prattville-alabama' },
  { name: 'Opelika', state: 'Alabama', slug: 'opelika-alabama' },
  { name: 'Bessemer', state: 'Alabama', slug: 'bessemer-alabama' },
  { name: 'Gadsden', state: 'Alabama', slug: 'gadsden-alabama' },
  { name: 'Prichard', state: 'Alabama', slug: 'prichard-alabama' },
  
  // Arizona
  { name: 'Avondale', state: 'Arizona', slug: 'avondale-arizona' },
  { name: 'Buckeye', state: 'Arizona', slug: 'buckeye-arizona' },
  { name: 'Casa Grande', state: 'Arizona', slug: 'casa-grande-arizona' },
  { name: 'Goodyear', state: 'Arizona', slug: 'goodyear-arizona' },
  { name: 'Maricopa', state: 'Arizona', slug: 'maricopa-arizona' },
  { name: 'Mesa', state: 'Arizona', slug: 'mesa-arizona' },
  { name: 'Peoria', state: 'Arizona', slug: 'peoria-arizona' },
  { name: 'Prescott', state: 'Arizona', slug: 'prescott-arizona' },
  { name: 'Yuma', state: 'Arizona', slug: 'yuma-arizona' },
  
  // Arkansas
  { name: 'Hot Springs', state: 'Arkansas', slug: 'hot-springs-arkansas' },
  { name: 'Pine Bluff', state: 'Arkansas', slug: 'pine-bluff-arkansas' },
  { name: 'Texarkana', state: 'Arkansas', slug: 'texarkana-arkansas' },
  
  // California
  { name: 'Alameda', state: 'California', slug: 'alameda-california' },
  { name: 'Baldwin Park', state: 'California', slug: 'baldwin-park-california' },
  { name: 'Bellflower', state: 'California', slug: 'bellflower-california' },
  { name: 'Buena Park', state: 'California', slug: 'buena-park-california' },
  { name: 'Camarillo', state: 'California', slug: 'camarillo-california' },
  { name: 'Castro Valley', state: 'California', slug: 'castro-valley-california' },
  { name: 'Cerritos', state: 'California', slug: 'cerritos-california' },
  { name: 'Citrus Heights', state: 'California', slug: 'citrus-heights-california' },
  { name: 'Cupertino', state: 'California', slug: 'cupertino-california' },
  { name: 'Dublin', state: 'California', slug: 'dublin-california' },
  { name: 'Folsom', state: 'California', slug: 'folsom-california' },
  { name: 'Fountain Valley', state: 'California', slug: 'fountain-valley-california' },
  { name: 'Hawthorne', state: 'California', slug: 'hawthorne-california' },
  { name: 'Hemet', state: 'California', slug: 'hemet-california' },
  { name: 'Hesperia', state: 'California', slug: 'hesperia-california' },
  { name: 'Huntington Park', state: 'California', slug: 'huntington-park-california' },
  { name: 'Indio', state: 'California', slug: 'indio-california' },
  { name: 'La Habra', state: 'California', slug: 'la-habra-california' },
  { name: 'La Mesa', state: 'California', slug: 'la-mesa-california' },
  { name: 'La Mirada', state: 'California', slug: 'la-mirada-california' },
  { name: 'Laguna Niguel', state: 'California', slug: 'laguna-niguel-california' },
  { name: 'Lancaster', state: 'California', slug: 'lancaster-california' },
  { name: 'Lodi', state: 'California', slug: 'lodi-california' },
  { name: 'Lompoc', state: 'California', slug: 'lompoc-california' },
  { name: 'Lynwood', state: 'California', slug: 'lynwood-california' },
  { name: 'Menifee', state: 'California', slug: 'menifee-california' },
  { name: 'Mission Viejo', state: 'California', slug: 'mission-viejo-california' },
  { name: 'Monterey Park', state: 'California', slug: 'monterey-park-california' },
  { name: 'Mountain View', state: 'California', slug: 'mountain-view-california' },
  { name: 'Napa', state: 'California', slug: 'napa-california' },
  { name: 'Newport Beach', state: 'California', slug: 'newport-beach-california' },
  { name: 'Palo Alto', state: 'California', slug: 'palo-alto-california' },
  { name: 'Petaluma', state: 'California', slug: 'petaluma-california' },
  { name: 'Pico Rivera', state: 'California', slug: 'pico-rivera-california' },
  { name: 'Pittsburg', state: 'California', slug: 'pittsburg-california' },
  { name: 'Redondo Beach', state: 'California', slug: 'redondo-beach-california' },
  { name: 'Rialto', state: 'California', slug: 'rialto-california' },
  { name: 'San Leandro', state: 'California', slug: 'san-leandro-california' },
  { name: 'San Rafael', state: 'California', slug: 'san-rafael-california' },
  { name: 'San Ramon', state: 'California', slug: 'san-ramon-california' },
  { name: 'South Gate', state: 'California', slug: 'south-gate-california' },
  { name: 'Tracy', state: 'California', slug: 'tracy-california' },
  { name: 'Tulare', state: 'California', slug: 'tulare-california' },
  { name: 'Turlock', state: 'California', slug: 'turlock-california' },
  { name: 'Tustin', state: 'California', slug: 'tustin-california' },
  { name: 'Union City', state: 'California', slug: 'union-city-california' },
  { name: 'Upland', state: 'California', slug: 'upland-california' },
  { name: 'Vacaville', state: 'California', slug: 'vacaville-california' },
  { name: 'Watsonville', state: 'California', slug: 'watsonville-california' },
  { name: 'Westminster', state: 'California', slug: 'westminster-california' },
  
  // Colorado
  { name: 'Broomfield', state: 'Colorado', slug: 'broomfield-colorado' },
  { name: 'Loveland', state: 'Colorado', slug: 'loveland-colorado' },
  { name: 'Pueblo', state: 'Colorado', slug: 'pueblo-colorado' },
  
  // Connecticut
  { name: 'Bristol', state: 'Connecticut', slug: 'bristol-connecticut' },
  { name: 'Enfield', state: 'Connecticut', slug: 'enfield-connecticut' },
  { name: 'Meriden', state: 'Connecticut', slug: 'meriden-connecticut' },
  { name: 'Middletown', state: 'Connecticut', slug: 'middletown-connecticut' },
  { name: 'Milford', state: 'Connecticut', slug: 'milford-connecticut' },
  { name: 'New Britain', state: 'Connecticut', slug: 'new-britain-connecticut' },
  { name: 'West Hartford', state: 'Connecticut', slug: 'west-hartford-connecticut' },
  
  // Florida
  { name: 'Boynton Beach', state: 'Florida', slug: 'boynton-beach-florida' },
  { name: 'Bradenton', state: 'Florida', slug: 'bradenton-florida' },
  { name: 'Davie', state: 'Florida', slug: 'davie-florida' },
  { name: 'Deerfield Beach', state: 'Florida', slug: 'deerfield-beach-florida' },
  { name: 'Delray Beach', state: 'Florida', slug: 'delray-beach-florida' },
  { name: 'Fort Pierce', state: 'Florida', slug: 'fort-pierce-florida' },
  { name: 'Greenacres', state: 'Florida', slug: 'greenacres-florida' },
  { name: 'Homestead', state: 'Florida', slug: 'homestead-florida' },
  { name: 'Jupiter', state: 'Florida', slug: 'jupiter-florida' },
  { name: 'Largo', state: 'Florida', slug: 'largo-florida' },
  { name: 'Margate', state: 'Florida', slug: 'margate-florida' },
  { name: 'Melbourne', state: 'Florida', slug: 'melbourne-florida' },
  { name: 'North Miami', state: 'Florida', slug: 'north-miami-florida' },
  { name: 'Ocala', state: 'Florida', slug: 'ocala-florida' },
  { name: 'Plantation', state: 'Florida', slug: 'plantation-florida' },
  { name: 'Pompano Beach', state: 'Florida', slug: 'pompano-beach-florida' },
  { name: 'Port Charlotte', state: 'Florida', slug: 'port-charlotte-florida' },
  { name: 'Sanford', state: 'Florida', slug: 'sanford-florida' },
  { name: 'Sarasota', state: 'Florida', slug: 'sarasota-florida' },
  { name: 'Sebastian', state: 'Florida', slug: 'sebastian-florida' },
  { name: 'Stuart', state: 'Florida', slug: 'stuart-florida' },
  { name: 'Sunrise', state: 'Florida', slug: 'sunrise-florida' },
  { name: 'Tamarac', state: 'Florida', slug: 'tamarac-florida' },
  { name: 'Titusville', state: 'Florida', slug: 'titusville-florida' },
  { name: 'Wellington', state: 'Florida', slug: 'wellington-florida' },
  { name: 'Weston', state: 'Florida', slug: 'weston-florida' },
  
  // Georgia
  { name: 'Alpharetta', state: 'Georgia', slug: 'alpharetta-georgia' },
  { name: 'Carrollton', state: 'Georgia', slug: 'carrollton-georgia' },
  { name: 'Columbus', state: 'Georgia', slug: 'columbus-georgia' },
  { name: 'Dalton', state: 'Georgia', slug: 'dalton-georgia' },
  { name: 'Douglasville', state: 'Georgia', slug: 'douglasville-georgia' },
  { name: 'Gainesville', state: 'Georgia', slug: 'gainesville-georgia' },
  { name: 'Johns Creek', state: 'Georgia', slug: 'johns-creek-georgia' },
  { name: 'Kennesaw', state: 'Georgia', slug: 'kennesaw-georgia' },
  { name: 'Lawrenceville', state: 'Georgia', slug: 'lawrenceville-georgia' },
  { name: 'Marietta', state: 'Georgia', slug: 'marietta-georgia' },
  { name: 'Newnan', state: 'Georgia', slug: 'newnan-georgia' },
  { name: 'Peachtree Corners', state: 'Georgia', slug: 'peachtree-corners-georgia' },
  { name: 'Rome', state: 'Georgia', slug: 'rome-georgia' },
  { name: 'Roswell', state: 'Georgia', slug: 'roswell-georgia' },
  { name: 'Smyrna', state: 'Georgia', slug: 'smyrna-georgia' },
  { name: 'Valdosta', state: 'Georgia', slug: 'valdosta-georgia' },
  { name: 'Warner Robins', state: 'Georgia', slug: 'warner-robins-georgia' },
  { name: 'Woodstock', state: 'Georgia', slug: 'woodstock-georgia' },
  
  // Illinois
  { name: 'Addison', state: 'Illinois', slug: 'addison-illinois' },
  { name: 'Arlington Heights', state: 'Illinois', slug: 'arlington-heights-illinois' },
  { name: 'Bartlett', state: 'Illinois', slug: 'bartlett-illinois' },
  { name: 'Berwyn', state: 'Illinois', slug: 'berwyn-illinois' },
  { name: 'Bolingbrook', state: 'Illinois', slug: 'bolingbrook-illinois' },
  { name: 'Buffalo Grove', state: 'Illinois', slug: 'buffalo-grove-illinois' },
  { name: 'Carol Stream', state: 'Illinois', slug: 'carol-stream-illinois' },
  { name: 'Carpentersville', state: 'Illinois', slug: 'carpentersville-illinois' },
  { name: 'Crystal Lake', state: 'Illinois', slug: 'crystal-lake-illinois' },
  { name: 'Des Plaines', state: 'Illinois', slug: 'des-plaines-illinois' },
  { name: 'Elk Grove Village', state: 'Illinois', slug: 'elk-grove-village-illinois' },
  { name: 'Hanover Park', state: 'Illinois', slug: 'hanover-park-illinois' },
  { name: 'Hoffman Estates', state: 'Illinois', slug: 'hoffman-estates-illinois' },
  { name: 'Mount Prospect', state: 'Illinois', slug: 'mount-prospect-illinois' },
  { name: 'Normal', state: 'Illinois', slug: 'normal-illinois' },
  { name: 'Oak Lawn', state: 'Illinois', slug: 'oak-lawn-illinois' },
  { name: 'Orland Park', state: 'Illinois', slug: 'orland-park-illinois' },
  { name: 'Palatine', state: 'Illinois', slug: 'palatine-illinois' },
  { name: 'Park Ridge', state: 'Illinois', slug: 'park-ridge-illinois' },
  { name: 'Rolling Meadows', state: 'Illinois', slug: 'rolling-meadows-illinois' },
  { name: 'Romeoville', state: 'Illinois', slug: 'romeoville-illinois' },
  { name: 'Schaumburg', state: 'Illinois', slug: 'schaumburg-illinois' },
  { name: 'Streamwood', state: 'Illinois', slug: 'streamwood-illinois' },
  { name: 'Tinley Park', state: 'Illinois', slug: 'tinley-park-illinois' },
  { name: 'Wheaton', state: 'Illinois', slug: 'wheaton-illinois' },
  { name: 'Wheeling', state: 'Illinois', slug: 'wheeling-illinois' },
  
  // Indiana
  { name: 'Anderson', state: 'Indiana', slug: 'anderson-indiana' },
  { name: 'Bloomington', state: 'Indiana', slug: 'bloomington-indiana' },
  { name: 'Carmel', state: 'Indiana', slug: 'carmel-indiana' },
  { name: 'Columbus', state: 'Indiana', slug: 'columbus-indiana' },
  { name: 'Elkhart', state: 'Indiana', slug: 'elkhart-indiana' },
  { name: 'Fishers', state: 'Indiana', slug: 'fishers-indiana' },
  { name: 'Kokomo', state: 'Indiana', slug: 'kokomo-indiana' },
  { name: 'Lafayette', state: 'Indiana', slug: 'lafayette-indiana' },
  { name: 'Muncie', state: 'Indiana', slug: 'muncie-indiana' },
  { name: 'Noblesville', state: 'Indiana', slug: 'noblesville-indiana' },
  { name: 'Terre Haute', state: 'Indiana', slug: 'terre-haute-indiana' },
  
  // Iowa
  { name: 'Ames', state: 'Iowa', slug: 'ames-iowa' },
  { name: 'Cedar Rapids', state: 'Iowa', slug: 'cedar-rapids-iowa' },
  { name: 'Council Bluffs', state: 'Iowa', slug: 'council-bluffs-iowa' },
  { name: 'Davenport', state: 'Iowa', slug: 'davenport-iowa' },
  { name: 'Des Moines', state: 'Iowa', slug: 'des-moines-iowa' },
  { name: 'Iowa City', state: 'Iowa', slug: 'iowa-city-iowa' },
  { name: 'Sioux City', state: 'Iowa', slug: 'sioux-city-iowa' },
  { name: 'Waterloo', state: 'Iowa', slug: 'waterloo-iowa' },
  
  // Kansas
  { name: 'Lenexa', state: 'Kansas', slug: 'lenexa-kansas' },
  { name: 'Manhattan', state: 'Kansas', slug: 'manhattan-kansas' },
  { name: 'Olathe', state: 'Kansas', slug: 'olathe-kansas' },
  { name: 'Overland Park', state: 'Kansas', slug: 'overland-park-kansas' },
  { name: 'Topeka', state: 'Kansas', slug: 'topeka-kansas' },
  { name: 'Wichita', state: 'Kansas', slug: 'wichita-kansas' },
  
  // Kentucky
  { name: 'Bowling Green', state: 'Kentucky', slug: 'bowling-green-kentucky' },
  { name: 'Covington', state: 'Kentucky', slug: 'covington-kentucky' },
  { name: 'Florence', state: 'Kentucky', slug: 'florence-kentucky' },
  { name: 'Georgetown', state: 'Kentucky', slug: 'georgetown-kentucky' },
  { name: 'Hopkinsville', state: 'Kentucky', slug: 'hopkinsville-kentucky' },
  { name: 'Lexington', state: 'Kentucky', slug: 'lexington-kentucky' },
  { name: 'Louisville', state: 'Kentucky', slug: 'louisville-kentucky' },
  { name: 'Owensboro', state: 'Kentucky', slug: 'owensboro-kentucky' },
  { name: 'Richmond', state: 'Kentucky', slug: 'richmond-kentucky' },
  
  // Louisiana
  { name: 'Alexandria', state: 'Louisiana', slug: 'alexandria-louisiana' },
  { name: 'Baton Rouge', state: 'Louisiana', slug: 'baton-rouge-louisiana' },
  { name: 'Bossier City', state: 'Louisiana', slug: 'bossier-city-louisiana' },
  { name: 'Houma', state: 'Louisiana', slug: 'houma-louisiana' },
  { name: 'Kenner', state: 'Louisiana', slug: 'kenner-louisiana' },
  { name: 'Lafayette', state: 'Louisiana', slug: 'lafayette-louisiana' },
  { name: 'Lake Charles', state: 'Louisiana', slug: 'lake-charles-louisiana' },
  { name: 'Monroe', state: 'Louisiana', slug: 'monroe-louisiana' },
  { name: 'New Orleans', state: 'Louisiana', slug: 'new-orleans-louisiana' },
  { name: 'Shreveport', state: 'Louisiana', slug: 'shreveport-louisiana' },
  
  // Maine
  { name: 'Auburn', state: 'Maine', slug: 'auburn-maine' },
  { name: 'Augusta', state: 'Maine', slug: 'augusta-maine' },
  { name: 'Bangor', state: 'Maine', slug: 'bangor-maine' },
  { name: 'Biddeford', state: 'Maine', slug: 'biddeford-maine' },
  { name: 'Lewiston', state: 'Maine', slug: 'lewiston-maine' },
  { name: 'Portland', state: 'Maine', slug: 'portland-maine' },
  { name: 'Saco', state: 'Maine', slug: 'saco-maine' },
  { name: 'South Portland', state: 'Maine', slug: 'south-portland-maine' },
  
  // Maryland
  { name: 'Annapolis', state: 'Maryland', slug: 'annapolis-maryland' },
  { name: 'Baltimore', state: 'Maryland', slug: 'baltimore-maryland' },
  { name: 'Bethesda', state: 'Maryland', slug: 'bethesda-maryland' },
  { name: 'Bowie', state: 'Maryland', slug: 'bowie-maryland' },
  { name: 'Columbia', state: 'Maryland', slug: 'columbia-maryland' },
  { name: 'Frederick', state: 'Maryland', slug: 'frederick-maryland' },
  { name: 'Gaithersburg', state: 'Maryland', slug: 'gaithersburg-maryland' },
  { name: 'Germantown', state: 'Maryland', slug: 'germantown-maryland' },
  { name: 'Rockville', state: 'Maryland', slug: 'rockville-maryland' },
  { name: 'Silver Spring', state: 'Maryland', slug: 'silver-spring-maryland' },
  { name: 'Towson', state: 'Maryland', slug: 'towson-maryland' },
  { name: 'Waldorf', state: 'Maryland', slug: 'waldorf-maryland' },
  
  // Massachusetts
  { name: 'Boston', state: 'Massachusetts', slug: 'boston-massachusetts' },
  { name: 'Cambridge', state: 'Massachusetts', slug: 'cambridge-massachusetts' },
  { name: 'Fall River', state: 'Massachusetts', slug: 'fall-river-massachusetts' },
  { name: 'Lowell', state: 'Massachusetts', slug: 'lowell-massachusetts' },
  { name: 'Lynn', state: 'Massachusetts', slug: 'lynn-massachusetts' },
  { name: 'New Bedford', state: 'Massachusetts', slug: 'new-bedford-massachusetts' },
  { name: 'Quincy', state: 'Massachusetts', slug: 'quincy-massachusetts' },
  { name: 'Springfield', state: 'Massachusetts', slug: 'springfield-massachusetts' },
  { name: 'Worcester', state: 'Massachusetts', slug: 'worcester-massachusetts' },
  
  // Michigan
  { name: 'Ann Arbor', state: 'Michigan', slug: 'ann-arbor-michigan' },
  { name: 'Battle Creek', state: 'Michigan', slug: 'battle-creek-michigan' },
  { name: 'Dearborn', state: 'Michigan', slug: 'dearborn-michigan' },
  { name: 'Detroit', state: 'Michigan', slug: 'detroit-michigan' },
  { name: 'Farmington Hills', state: 'Michigan', slug: 'farmington-hills-michigan' },
  { name: 'Flint', state: 'Michigan', slug: 'flint-michigan' },
  { name: 'Grand Rapids', state: 'Michigan', slug: 'grand-rapids-michigan' },
  { name: 'Kalamazoo', state: 'Michigan', slug: 'kalamazoo-michigan' },
  { name: 'Lansing', state: 'Michigan', slug: 'lansing-michigan' },
  { name: 'Livonia', state: 'Michigan', slug: 'livonia-michigan' },
  { name: 'Novi', state: 'Michigan', slug: 'novi-michigan' },
  { name: 'Rochester Hills', state: 'Michigan', slug: 'rochester-hills-michigan' },
  { name: 'Sterling Heights', state: 'Michigan', slug: 'sterling-heights-michigan' },
  { name: 'Troy', state: 'Michigan', slug: 'troy-michigan' },
  { name: 'Warren', state: 'Michigan', slug: 'warren-michigan' },
  { name: 'Westland', state: 'Michigan', slug: 'westland-michigan' },
  { name: 'Wyoming', state: 'Michigan', slug: 'wyoming-michigan' },
  
  // Minnesota
  { name: 'Bloomington', state: 'Minnesota', slug: 'bloomington-minnesota' },
  { name: 'Brooklyn Park', state: 'Minnesota', slug: 'brooklyn-park-minnesota' },
  { name: 'Duluth', state: 'Minnesota', slug: 'duluth-minnesota' },
  { name: 'Eagan', state: 'Minnesota', slug: 'eagan-minnesota' },
  { name: 'Lakeville', state: 'Minnesota', slug: 'lakeville-minnesota' },
  { name: 'Maple Grove', state: 'Minnesota', slug: 'maple-grove-minnesota' },
  { name: 'Minneapolis', state: 'Minnesota', slug: 'minneapolis-minnesota' },
  { name: 'Plymouth', state: 'Minnesota', slug: 'plymouth-minnesota' },
  { name: 'Rochester', state: 'Minnesota', slug: 'rochester-minnesota' },
  { name: 'Saint Paul', state: 'Minnesota', slug: 'saint-paul-minnesota' },
  { name: 'St. Cloud', state: 'Minnesota', slug: 'st-cloud-minnesota' },
  { name: 'Woodbury', state: 'Minnesota', slug: 'woodbury-minnesota' },
  
  // Mississippi
  { name: 'Biloxi', state: 'Mississippi', slug: 'biloxi-mississippi' },
  { name: 'Gulfport', state: 'Mississippi', slug: 'gulfport-mississippi' },
  { name: 'Hattiesburg', state: 'Mississippi', slug: 'hattiesburg-mississippi' },
  { name: 'Jackson', state: 'Mississippi', slug: 'jackson-mississippi' },
  { name: 'Meridian', state: 'Mississippi', slug: 'meridian-mississippi' },
  { name: 'Southaven', state: 'Mississippi', slug: 'southaven-mississippi' },
  { name: 'Tupelo', state: 'Mississippi', slug: 'tupelo-mississippi' },
  
  // Missouri
  { name: 'Columbia', state: 'Missouri', slug: 'columbia-missouri' },
  { name: 'Independence', state: 'Missouri', slug: 'independence-missouri' },
  { name: 'Kansas City', state: 'Missouri', slug: 'kansas-city-missouri' },
  { name: 'Springfield', state: 'Missouri', slug: 'springfield-missouri' },
  { name: 'St. Louis', state: 'Missouri', slug: 'st-louis-missouri' },
  
  // Montana
  { name: 'Billings', state: 'Montana', slug: 'billings-montana' },
  { name: 'Bozeman', state: 'Montana', slug: 'bozeman-montana' },
  { name: 'Butte', state: 'Montana', slug: 'butte-montana' },
  { name: 'Great Falls', state: 'Montana', slug: 'great-falls-montana' },
  { name: 'Helena', state: 'Montana', slug: 'helena-montana' },
  { name: 'Missoula', state: 'Montana', slug: 'missoula-montana' },
  
  // Nebraska
  { name: 'Bellevue', state: 'Nebraska', slug: 'bellevue-nebraska' },
  { name: 'Grand Island', state: 'Nebraska', slug: 'grand-island-nebraska' },
  { name: 'Lincoln', state: 'Nebraska', slug: 'lincoln-nebraska' },
  { name: 'Omaha', state: 'Nebraska', slug: 'omaha-nebraska' },
  
  // Nevada
  { name: 'Carson City', state: 'Nevada', slug: 'carson-city-nevada' },
  { name: 'Enterprise', state: 'Nevada', slug: 'enterprise-nevada' },
  { name: 'Henderson', state: 'Nevada', slug: 'henderson-nevada' },
  { name: 'Las Vegas', state: 'Nevada', slug: 'las-vegas-nevada' },
  { name: 'North Las Vegas', state: 'Nevada', slug: 'north-las-vegas-nevada' },
  { name: 'Pahrump', state: 'Nevada', slug: 'pahrump-nevada' },
  { name: 'Reno', state: 'Nevada', slug: 'reno-nevada' },
  { name: 'Sparks', state: 'Nevada', slug: 'sparks-nevada' },
  
  // New Hampshire
  { name: 'Concord', state: 'New Hampshire', slug: 'concord-new-hampshire' },
  { name: 'Derry', state: 'New Hampshire', slug: 'derry-new-hampshire' },
  { name: 'Dover', state: 'New Hampshire', slug: 'dover-new-hampshire' },
  { name: 'Manchester', state: 'New Hampshire', slug: 'manchester-new-hampshire' },
  { name: 'Nashua', state: 'New Hampshire', slug: 'nashua-new-hampshire' },
  { name: 'Portsmouth', state: 'New Hampshire', slug: 'portsmouth-new-hampshire' },
  { name: 'Rochester', state: 'New Hampshire', slug: 'rochester-new-hampshire' },
  { name: 'Salem', state: 'New Hampshire', slug: 'salem-new-hampshire' },
  
  // New Jersey
  { name: 'Bayonne', state: 'New Jersey', slug: 'bayonne-new-jersey' },
  { name: 'Camden', state: 'New Jersey', slug: 'camden-new-jersey' },
  { name: 'Clifton', state: 'New Jersey', slug: 'clifton-new-jersey' },
  { name: 'East Orange', state: 'New Jersey', slug: 'east-orange-new-jersey' },
  { name: 'Edison', state: 'New Jersey', slug: 'edison-new-jersey' },
  { name: 'Elizabeth', state: 'New Jersey', slug: 'elizabeth-new-jersey' },
  { name: 'Hoboken', state: 'New Jersey', slug: 'hoboken-new-jersey' },
  { name: 'Jersey City', state: 'New Jersey', slug: 'jersey-city-new-jersey' },
  { name: 'Newark', state: 'New Jersey', slug: 'newark-new-jersey' },
  { name: 'Paterson', state: 'New Jersey', slug: 'paterson-new-jersey' },
  { name: 'Trenton', state: 'New Jersey', slug: 'trenton-new-jersey' },
  { name: 'Union City', state: 'New Jersey', slug: 'union-city-new-jersey' },
  { name: 'West New York', state: 'New Jersey', slug: 'west-new-york-new-jersey' },
  { name: 'Woodbridge', state: 'New Jersey', slug: 'woodbridge-new-jersey' },
  
  // New Mexico
  { name: 'Albuquerque', state: 'New Mexico', slug: 'albuquerque-new-mexico' },
  { name: 'Farmington', state: 'New Mexico', slug: 'farmington-new-mexico' },
  { name: 'Las Cruces', state: 'New Mexico', slug: 'las-cruces-new-mexico' },
  { name: 'Rio Rancho', state: 'New Mexico', slug: 'rio-rancho-new-mexico' },
  { name: 'Santa Fe', state: 'New Mexico', slug: 'santa-fe-new-mexico' },
  
  // New York
  { name: 'Albany', state: 'New York', slug: 'albany-new-york' },
  { name: 'Binghamton', state: 'New York', slug: 'binghamton-new-york' },
  { name: 'Buffalo', state: 'New York', slug: 'buffalo-new-york' },
  { name: 'New York', state: 'New York', slug: 'new-york-new-york' },
  { name: 'Rochester', state: 'New York', slug: 'rochester-new-york' },
  { name: 'Schenectady', state: 'New York', slug: 'schenectady-new-york' },
  { name: 'Syracuse', state: 'New York', slug: 'syracuse-new-york' },
  { name: 'Troy', state: 'New York', slug: 'troy-new-york' },
  { name: 'Utica', state: 'New York', slug: 'utica-new-york' },
  { name: 'Yonkers', state: 'New York', slug: 'yonkers-new-york' },
  
  // North Carolina
  { name: 'Asheville', state: 'North Carolina', slug: 'asheville-north-carolina' },
  { name: 'Cary', state: 'North Carolina', slug: 'cary-north-carolina' },
  { name: 'Charlotte', state: 'North Carolina', slug: 'charlotte-north-carolina' },
  { name: 'Concord', state: 'North Carolina', slug: 'concord-north-carolina' },
  { name: 'Durham', state: 'North Carolina', slug: 'durham-north-carolina' },
  { name: 'Fayetteville', state: 'North Carolina', slug: 'fayetteville-north-carolina' },
  { name: 'Gastonia', state: 'North Carolina', slug: 'gastonia-north-carolina' },
  { name: 'Greensboro', state: 'North Carolina', slug: 'greensboro-north-carolina' },
  { name: 'High Point', state: 'North Carolina', slug: 'high-point-north-carolina' },
  { name: 'Raleigh', state: 'North Carolina', slug: 'raleigh-north-carolina' },
  { name: 'Wilmington', state: 'North Carolina', slug: 'wilmington-north-carolina' },
  { name: 'Winston-Salem', state: 'North Carolina', slug: 'winston-salem-north-carolina' },
  
  // North Dakota
  { name: 'Bismarck', state: 'North Dakota', slug: 'bismarck-north-dakota' },
  { name: 'Fargo', state: 'North Dakota', slug: 'fargo-north-dakota' },
  { name: 'Grand Forks', state: 'North Dakota', slug: 'grand-forks-north-dakota' },
  { name: 'Minot', state: 'North Dakota', slug: 'minot-north-dakota' },
  
  // Ohio
  { name: 'Akron', state: 'Ohio', slug: 'akron-ohio' },
  { name: 'Canton', state: 'Ohio', slug: 'canton-ohio' },
  { name: 'Cincinnati', state: 'Ohio', slug: 'cincinnati-ohio' },
  { name: 'Cleveland', state: 'Ohio', slug: 'cleveland-ohio' },
  { name: 'Columbus', state: 'Ohio', slug: 'columbus-ohio' },
  { name: 'Dayton', state: 'Ohio', slug: 'dayton-ohio' },
  { name: 'Lorain', state: 'Ohio', slug: 'lorain-ohio' },
  { name: 'Parma', state: 'Ohio', slug: 'parma-ohio' },
  { name: 'Springfield', state: 'Ohio', slug: 'springfield-ohio' },
  { name: 'Toledo', state: 'Ohio', slug: 'toledo-ohio' },
  { name: 'Youngstown', state: 'Ohio', slug: 'youngstown-ohio' },
  
  // Oklahoma
  { name: 'Broken Arrow', state: 'Oklahoma', slug: 'broken-arrow-oklahoma' },
  { name: 'Norman', state: 'Oklahoma', slug: 'norman-oklahoma' },
  { name: 'Oklahoma City', state: 'Oklahoma', slug: 'oklahoma-city-oklahoma' },
  { name: 'Tulsa', state: 'Oklahoma', slug: 'tulsa-oklahoma' },
  
  // Oregon
  { name: 'Beaverton', state: 'Oregon', slug: 'beaverton-oregon' },
  { name: 'Bend', state: 'Oregon', slug: 'bend-oregon' },
  { name: 'Eugene', state: 'Oregon', slug: 'eugene-oregon' },
  { name: 'Gresham', state: 'Oregon', slug: 'gresham-oregon' },
  { name: 'Hillsboro', state: 'Oregon', slug: 'hillsboro-oregon' },
  { name: 'Medford', state: 'Oregon', slug: 'medford-oregon' },
  { name: 'Portland', state: 'Oregon', slug: 'portland-oregon' },
  { name: 'Salem', state: 'Oregon', slug: 'salem-oregon' },
  
  // Pennsylvania
  { name: 'Allentown', state: 'Pennsylvania', slug: 'allentown-pennsylvania' },
  { name: 'Bethlehem', state: 'Pennsylvania', slug: 'bethlehem-pennsylvania' },
  { name: 'Erie', state: 'Pennsylvania', slug: 'erie-pennsylvania' },
  { name: 'Harrisburg', state: 'Pennsylvania', slug: 'harrisburg-pennsylvania' },
  { name: 'Lancaster', state: 'Pennsylvania', slug: 'lancaster-pennsylvania' },
  { name: 'Philadelphia', state: 'Pennsylvania', slug: 'philadelphia-pennsylvania' },
  { name: 'Pittsburgh', state: 'Pennsylvania', slug: 'pittsburgh-pennsylvania' },
  { name: 'Reading', state: 'Pennsylvania', slug: 'reading-pennsylvania' },
  { name: 'Scranton', state: 'Pennsylvania', slug: 'scranton-pennsylvania' },
  { name: 'York', state: 'Pennsylvania', slug: 'york-pennsylvania' },
  
  // Rhode Island
  { name: 'Cranston', state: 'Rhode Island', slug: 'cranston-rhode-island' },
  { name: 'Pawtucket', state: 'Rhode Island', slug: 'pawtucket-rhode-island' },
  { name: 'Providence', state: 'Rhode Island', slug: 'providence-rhode-island' },
  { name: 'Warwick', state: 'Rhode Island', slug: 'warwick-rhode-island' },
  { name: 'Woonsocket', state: 'Rhode Island', slug: 'woonsocket-rhode-island' },
  
  // South Carolina
  { name: 'Aiken', state: 'South Carolina', slug: 'aiken-south-carolina' },
  { name: 'Anderson', state: 'South Carolina', slug: 'anderson-south-carolina' },
  { name: 'Charleston', state: 'South Carolina', slug: 'charleston-south-carolina' },
  { name: 'Columbia', state: 'South Carolina', slug: 'columbia-south-carolina' },
  { name: 'Florence', state: 'South Carolina', slug: 'florence-south-carolina' },
  { name: 'Goose Creek', state: 'South Carolina', slug: 'goose-creek-south-carolina' },
  { name: 'Greenville', state: 'South Carolina', slug: 'greenville-south-carolina' },
  { name: 'Hilton Head Island', state: 'South Carolina', slug: 'hilton-head-island-south-carolina' },
  { name: 'Mount Pleasant', state: 'South Carolina', slug: 'mount-pleasant-south-carolina' },
  { name: 'Myrtle Beach', state: 'South Carolina', slug: 'myrtle-beach-south-carolina' },
  { name: 'North Charleston', state: 'South Carolina', slug: 'north-charleston-south-carolina' },
  { name: 'Rock Hill', state: 'South Carolina', slug: 'rock-hill-south-carolina' },
  { name: 'Spartanburg', state: 'South Carolina', slug: 'spartanburg-south-carolina' },
  { name: 'Summerville', state: 'South Carolina', slug: 'summerville-south-carolina' },
  
  // South Dakota
  { name: 'Aberdeen', state: 'South Dakota', slug: 'aberdeen-south-dakota' },
  { name: 'Rapid City', state: 'South Dakota', slug: 'rapid-city-south-dakota' },
  { name: 'Sioux Falls', state: 'South Dakota', slug: 'sioux-falls-south-dakota' },
  
  // Tennessee
  { name: 'Chattanooga', state: 'Tennessee', slug: 'chattanooga-tennessee' },
  { name: 'Clarksville', state: 'Tennessee', slug: 'clarksville-tennessee' },
  { name: 'Franklin', state: 'Tennessee', slug: 'franklin-tennessee' },
  { name: 'Jackson', state: 'Tennessee', slug: 'jackson-tennessee' },
  { name: 'Johnson City', state: 'Tennessee', slug: 'johnson-city-tennessee' },
  { name: 'Knoxville', state: 'Tennessee', slug: 'knoxville-tennessee' },
  { name: 'Memphis', state: 'Tennessee', slug: 'memphis-tennessee' },
  { name: 'Murfreesboro', state: 'Tennessee', slug: 'murfreesboro-tennessee' },
  { name: 'Nashville', state: 'Tennessee', slug: 'nashville-tennessee' },
  
  // Texas
  { name: 'Abilene', state: 'Texas', slug: 'abilene-texas' },
  { name: 'Amarillo', state: 'Texas', slug: 'amarillo-texas' },
  { name: 'Arlington', state: 'Texas', slug: 'arlington-texas' },
  { name: 'Austin', state: 'Texas', slug: 'austin-texas' },
  { name: 'Beaumont', state: 'Texas', slug: 'beaumont-texas' },
  { name: 'Carrollton', state: 'Texas', slug: 'carrollton-texas' },
  { name: 'College Station', state: 'Texas', slug: 'college-station-texas' },
  { name: 'Corpus Christi', state: 'Texas', slug: 'corpus-christi-texas' },
  { name: 'Dallas', state: 'Texas', slug: 'dallas-texas' },
  { name: 'Denton', state: 'Texas', slug: 'denton-texas' },
  { name: 'El Paso', state: 'Texas', slug: 'el-paso-texas' },
  { name: 'Fort Worth', state: 'Texas', slug: 'fort-worth-texas' },
  { name: 'Frisco', state: 'Texas', slug: 'frisco-texas' },
  { name: 'Garland', state: 'Texas', slug: 'garland-texas' },
  { name: 'Grand Prairie', state: 'Texas', slug: 'grand-prairie-texas' },
  { name: 'Houston', state: 'Texas', slug: 'houston-texas' },
  { name: 'Irving', state: 'Texas', slug: 'irving-texas' },
  { name: 'Killeen', state: 'Texas', slug: 'killeen-texas' },
  { name: 'Laredo', state: 'Texas', slug: 'laredo-texas' },
  { name: 'League City', state: 'Texas', slug: 'league-city-texas' },
  { name: 'Lewisville', state: 'Texas', slug: 'lewisville-texas' },
  { name: 'Lubbock', state: 'Texas', slug: 'lubbock-texas' },
  { name: 'McAllen', state: 'Texas', slug: 'mcallen-texas' },
  { name: 'McKinney', state: 'Texas', slug: 'mckinney-texas' },
  { name: 'Mesquite', state: 'Texas', slug: 'mesquite-texas' },
  { name: 'Midland', state: 'Texas', slug: 'midland-texas' },
  { name: 'Odessa', state: 'Texas', slug: 'odessa-texas' },
  { name: 'Pearland', state: 'Texas', slug: 'pearland-texas' },
  { name: 'Plano', state: 'Texas', slug: 'plano-texas' },
  { name: 'Richardson', state: 'Texas', slug: 'richardson-texas' },
  { name: 'Round Rock', state: 'Texas', slug: 'round-rock-texas' },
  { name: 'San Antonio', state: 'Texas', slug: 'san-antonio-texas' },
  { name: 'Sugar Land', state: 'Texas', slug: 'sugar-land-texas' },
  { name: 'Tyler', state: 'Texas', slug: 'tyler-texas' },
  { name: 'Waco', state: 'Texas', slug: 'waco-texas' },
  
  // Utah
  { name: 'Ogden', state: 'Utah', slug: 'ogden-utah' },
  { name: 'Orem', state: 'Utah', slug: 'orem-utah' },
  { name: 'Provo', state: 'Utah', slug: 'provo-utah' },
  { name: 'Salt Lake City', state: 'Utah', slug: 'salt-lake-city-utah' },
  { name: 'Sandy', state: 'Utah', slug: 'sandy-utah' },
  { name: 'West Jordan', state: 'Utah', slug: 'west-jordan-utah' },
  { name: 'West Valley City', state: 'Utah', slug: 'west-valley-city-utah' },
  
  // Vermont
  { name: 'Burlington', state: 'Vermont', slug: 'burlington-vermont' },
  { name: 'Essex Junction', state: 'Vermont', slug: 'essex-junction-vermont' },
  { name: 'South Burlington', state: 'Vermont', slug: 'south-burlington-vermont' },
  
  // Virginia
  { name: 'Alexandria', state: 'Virginia', slug: 'alexandria-virginia' },
  { name: 'Arlington', state: 'Virginia', slug: 'arlington-virginia' },
  { name: 'Chesapeake', state: 'Virginia', slug: 'chesapeake-virginia' },
  { name: 'Hampton', state: 'Virginia', slug: 'hampton-virginia' },
  { name: 'Lynchburg', state: 'Virginia', slug: 'lynchburg-virginia' },
  { name: 'Newport News', state: 'Virginia', slug: 'newport-news-virginia' },
  { name: 'Norfolk', state: 'Virginia', slug: 'norfolk-virginia' },
  { name: 'Portsmouth', state: 'Virginia', slug: 'portsmouth-virginia' },
  { name: 'Richmond', state: 'Virginia', slug: 'richmond-virginia' },
  { name: 'Roanoke', state: 'Virginia', slug: 'roanoke-virginia' },
  { name: 'Suffolk', state: 'Virginia', slug: 'suffolk-virginia' },
  { name: 'Virginia Beach', state: 'Virginia', slug: 'virginia-beach-virginia' },
  
  // Washington
  { name: 'Bellevue', state: 'Washington', slug: 'bellevue-washington' },
  { name: 'Everett', state: 'Washington', slug: 'everett-washington' },
  { name: 'Kent', state: 'Washington', slug: 'kent-washington' },
  { name: 'Renton', state: 'Washington', slug: 'renton-washington' },
  { name: 'Seattle', state: 'Washington', slug: 'seattle-washington' },
  { name: 'Spokane', state: 'Washington', slug: 'spokane-washington' },
  { name: 'Tacoma', state: 'Washington', slug: 'tacoma-washington' },
  { name: 'Vancouver', state: 'Washington', slug: 'vancouver-washington' },
  
  // West Virginia
  { name: 'Charleston', state: 'West Virginia', slug: 'charleston-west-virginia' },
  { name: 'Huntington', state: 'West Virginia', slug: 'huntington-west-virginia' },
  
  // Wisconsin
  { name: 'Appleton', state: 'Wisconsin', slug: 'appleton-wisconsin' },
  { name: 'Eau Claire', state: 'Wisconsin', slug: 'eau-claire-wisconsin' },
  { name: 'Green Bay', state: 'Wisconsin', slug: 'green-bay-wisconsin' },
  { name: 'Janesville', state: 'Wisconsin', slug: 'janesville-wisconsin' },
  { name: 'Kenosha', state: 'Wisconsin', slug: 'kenosha-wisconsin' },
  { name: 'La Crosse', state: 'Wisconsin', slug: 'la-crosse-wisconsin' },
  { name: 'Madison', state: 'Wisconsin', slug: 'madison-wisconsin' },
  { name: 'Milwaukee', state: 'Wisconsin', slug: 'milwaukee-wisconsin' },
  { name: 'Oshkosh', state: 'Wisconsin', slug: 'oshkosh-wisconsin' },
  { name: 'Racine', state: 'Wisconsin', slug: 'racine-wisconsin' },
  { name: 'Sheboygan', state: 'Wisconsin', slug: 'sheboygan-wisconsin' },
  { name: 'Waukesha', state: 'Wisconsin', slug: 'waukesha-wisconsin' },
  
  // Wyoming
  { name: 'Casper', state: 'Wyoming', slug: 'casper-wyoming' },
  { name: 'Cheyenne', state: 'Wyoming', slug: 'cheyenne-wyoming' },
  { name: 'Gillette', state: 'Wyoming', slug: 'gillette-wyoming' },
  { name: 'Laramie', state: 'Wyoming', slug: 'laramie-wyoming' },
  { name: 'Rock Springs', state: 'Wyoming', slug: 'rock-springs-wyoming' }
];

// Filter out cities that already exist
const citiesToCreate = newCities.filter(city => !existingDirs.includes(city.slug)).slice(0, 100);

console.log(`Creating ${citiesToCreate.length} new city pages...`);

// Read the template files
const pageTemplate = fs.readFileSync(path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/jacksonville-florida/page.tsx'), 'utf8');
const pageClientTemplate = fs.readFileSync(path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/jacksonville-florida/pageClient.tsx'), 'utf8');

let createdCount = 0;

citiesToCreate.forEach(city => {
  const cityDir = path.join(baseDir, city.slug);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(cityDir)) {
    fs.mkdirSync(cityDir, { recursive: true });
  }
  
  // Generate page.tsx
  const pageContent = pageTemplate
    .replace(/JacksonvilleFloridaHowToStartPage/g, `${city.name.replace(/\s+/g, '')}${city.state.replace(/\s+/g, '')}HowToStartPage`)
    .replace(/Jacksonville, Florida/g, `${city.name}, ${city.state}`)
    .replace(/Jacksonville, FL/g, `${city.name}, ${city.state.split(' ').map(s => s[0]).join('')}`)
    .replace(/jacksonville-florida/g, city.slug)
    .replace(/Jacksonville/g, city.name)
    .replace(/Florida/g, city.state)
    .replace(/FL/g, city.state.split(' ').map(s => s[0]).join(''));
  
  // Generate pageClient.tsx
  const pageClientContent = pageClientTemplate
    .replace(/JacksonvilleFloridaHowToStartPage/g, `${city.name.replace(/\s+/g, '')}${city.state.replace(/\s+/g, '')}HowToStartPage`)
    .replace(/Jacksonville/g, city.name)
    .replace(/Florida/g, city.state)
    .replace(/Duval County/g, 'local county')
    .replace(/Port of Jacksonville/g, 'local port facilities')
    .replace(/Naval Air Station Jacksonville/g, 'local military facilities')
    .replace(/Mayo Clinic, Baptist Health, UF Health/g, 'local healthcare systems')
    .replace(/University of North Florida/g, 'local universities')
    .replace(/Jacksonville Beach/g, 'local beach areas')
    .replace(/Southside and Town Center/g, 'local business districts')
    .replace(/Jax Beach, Atlantic Beach/g, 'local beach communities')
    .replace(/Riverside \/ San Marco/g, 'local neighborhoods');
  
  // Write files
  fs.writeFileSync(path.join(cityDir, 'page.tsx'), pageContent);
  fs.writeFileSync(path.join(cityDir, 'pageClient.tsx'), pageClientContent);
  
  createdCount++;
  console.log(`Created: ${city.slug}`);
});

console.log(`\nTotal pages created: ${createdCount}`);

