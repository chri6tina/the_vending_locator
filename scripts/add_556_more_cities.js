const fs = require('fs');
const path = require('path');

// Additional cities to add (556 cities across all states)
const additionalCities = {
  'Alabama': [
    'Athens', 'Cullman', 'Enterprise', 'Florence', 'Guntersville', 'Madison', 'Oxford', 'Phenix City', 'Selma', 'Sheffield', 'Sylacauga', 'Talladega', 'Troy'
  ],
  'Alaska': [
    'Bethel', 'Dillingham', 'Nome', 'Unalaska', 'Valdez'
  ],
  'Arizona': [
    'Bullhead City', 'Douglas', 'Kingman', 'Nogales', 'Page', 'Sedona', 'Show Low', 'Sierra Vista', 'Winslow'
  ],
  'Arkansas': [
    'Batesville', 'Blytheville', 'Camden', 'El Dorado', 'Forrest City', 'Harrison', 'Helena', 'Hope', 'Magnolia', 'Malvern', 'Mountain Home', 'Newport', 'Osceola', 'Russellville', 'Searcy', 'Stuttgart', 'Van Buren', 'Warren', 'West Memphis'
  ],
  'California': [
    'Adelanto', 'Agoura Hills', 'Aliso Viejo', 'Altadena', 'Apple Valley', 'Artesia', 'Atascadero', 'Atherton', 'Atwater', 'Avalon', 'Avenal', 'Baldwin Park', 'Banning', 'Barstow', 'Beaumont', 'Bell', 'Bell Gardens', 'Bellflower', 'Benicia', 'Berkeley', 'Beverly Hills', 'Big Bear Lake', 'Bishop', 'Blythe', 'Brawley', 'Brea', 'Brentwood', 'Buena Park', 'Burbank', 'Burlingame', 'Calabasas', 'Calexico', 'Calimesa', 'Camarillo', 'Campbell', 'Canoga Park', 'Capitola', 'Carlsbad', 'Carmel', 'Carmel-by-the-Sea', 'Carpinteria', 'Castro Valley', 'Cathedral City', 'Ceres', 'Cerritos', 'Chico', 'Chino', 'Chino Hills', 'Chula Vista', 'Citrus Heights', 'Claremont', 'Clayton', 'Clearlake', 'Cloverdale', 'Coachella', 'Colton', 'Colusa', 'Commerce', 'Compton', 'Concord', 'Corcoran', 'Coronado', 'Corte Madera', 'Costa Mesa', 'Cotati', 'Covina', 'Crescent City', 'Cudahy', 'Culver City', 'Cupertino', 'Cypress', 'Daly City', 'Danville', 'Davis', 'Del Mar', 'Delano', 'Desert Hot Springs', 'Diamond Bar', 'Dinuba', 'Dixon', 'Downey', 'Duarte', 'Dublin', 'East Palo Alto', 'El Cajon', 'El Centro', 'El Cerrito', 'El Monte', 'El Segundo', 'Emeryville', 'Encinitas', 'Escalon', 'Escondido', 'Eureka', 'Exeter', 'Fairfax', 'Fairfield', 'Fallbrook', 'Folsom', 'Fontana', 'Fort Bragg', 'Fortuna', 'Foster City', 'Fountain Valley', 'Fowler', 'Fremont', 'Fresno', 'Fullerton', 'Galt', 'Garden Grove', 'Gardena', 'Gilroy', 'Glendale', 'Glendora', 'Goleta', 'Gonzales', 'Grand Terrace', 'Grass Valley', 'Greenfield', 'Grover Beach', 'Half Moon Bay', 'Hanford', 'Hawaiian Gardens', 'Hawthorne', 'Hayward', 'Healdsburg', 'Hemet', 'Hercules', 'Hermosa Beach', 'Hesperia', 'Highland', 'Hollister', 'Huntington Beach', 'Huntington Park', 'Imperial', 'Imperial Beach', 'Indio', 'Inglewood', 'Irvine', 'Jackson', 'La Canada Flintridge', 'La Habra', 'La Mesa', 'La Mirada', 'La Palma', 'La Puente', 'La Quinta', 'La Verne', 'Lafayette', 'Laguna Beach', 'Laguna Hills', 'Laguna Niguel', 'Laguna Woods', 'Lake Elsinore', 'Lake Forest', 'Lakeport', 'Lancaster', 'Larkspur', 'Lathrop', 'Lawndale', 'Lemon Grove', 'Lincoln', 'Livermore', 'Livingston', 'Lodi', 'Lomita', 'Lompoc', 'Long Beach', 'Los Alamitos', 'Los Altos', 'Los Angeles', 'Los Banos', 'Los Gatos', 'Lynwood', 'Madera', 'Malibu', 'Mammoth Lakes', 'Manhattan Beach', 'Manteca', 'Marina', 'Martinez', 'Marysville', 'Maywood', 'McFarland', 'Menlo Park', 'Merced', 'Mill Valley', 'Millbrae', 'Milpitas', 'Mission Viejo', 'Modesto', 'Monrovia', 'Montclair', 'Montebello', 'Monterey', 'Monterey Park', 'Moorpark', 'Moraga', 'Moreno Valley', 'Morgan Hill', 'Morro Bay', 'Mountain View', 'Murrieta', 'Napa', 'National City', 'Needles', 'Newark', 'Newport Beach', 'Norco', 'Norwalk', 'Novato', 'Oakdale', 'Oakland', 'Oakley', 'Oceanside', 'Ojai', 'Ontario', 'Orange', 'Orange Cove', 'Orinda', 'Orland', 'Oroville', 'Oxnard', 'Pacific Grove', 'Pacifica', 'Palm Desert', 'Palm Springs', 'Palmdale', 'Palo Alto', 'Palos Verdes Estates', 'Paradise', 'Paramount', 'Pasadena', 'Paso Robles', 'Patterson', 'Perris', 'Petaluma', 'Pico Rivera', 'Piedmont', 'Pinole', 'Pismo Beach', 'Pittsburg', 'Placentia', 'Placerville', 'Pleasant Hill', 'Pleasanton', 'Pomona', 'Port Hueneme', 'Porterville', 'Portola', 'Poway', 'Rancho Cordova', 'Rancho Cucamonga', 'Rancho Mirage', 'Rancho Palos Verdes', 'Rancho Santa Margarita', 'Red Bluff', 'Redding', 'Redlands', 'Redondo Beach', 'Redwood City', 'Reedley', 'Rialto', 'Richmond', 'Ridgecrest', 'Rio Vista', 'Ripon', 'Riverbank', 'Riverside', 'Rocklin', 'Rohnert Park', 'Rolling Hills', 'Rolling Hills Estates', 'Rosemead', 'Roseville', 'Ross', 'Sacramento', 'Salinas', 'San Anselmo', 'San Bernardino', 'San Bruno', 'San Carlos', 'San Clemente', 'San Diego', 'San Dimas', 'San Fernando', 'San Francisco', 'San Gabriel', 'San Jacinto', 'San Jose', 'San Juan Capistrano', 'San Leandro', 'San Luis Obispo', 'San Marcos', 'San Marino', 'San Mateo', 'San Pablo', 'San Rafael', 'San Ramon', 'Sanger', 'Santa Ana', 'Santa Barbara', 'Santa Clara', 'Santa Clarita', 'Santa Cruz', 'Santa Fe Springs', 'Santa Maria', 'Santa Monica', 'Santa Paula', 'Santa Rosa', 'Santee', 'Saratoga', 'Sausalito', 'Scotts Valley', 'Seal Beach', 'Seaside', 'Sebastopol', 'Selma', 'Shafter', 'Shasta Lake', 'Sierra Madre', 'Signal Hill', 'Simi Valley', 'Solana Beach', 'Soledad', 'Solvang', 'Sonoma', 'Sonora', 'South El Monte', 'South Gate', 'South Lake Tahoe', 'South Pasadena', 'South San Francisco', 'St. Helena', 'Stanton', 'Stockton', 'Suisun City', 'Sunnyvale', 'Susanville', 'Taft', 'Tehachapi', 'Temecula', 'Temple City', 'Thousand Oaks', 'Tiburon', 'Torrance', 'Tracy', 'Truckee', 'Tulare', 'Turlock', 'Tustin', 'Twentynine Palms', 'Ukiah', 'Union City', 'Upland', 'Vacaville', 'Vallejo', 'Ventura', 'Vernon', 'Victorville', 'Villa Park', 'Visalia', 'Vista', 'Walnut', 'Walnut Creek', 'Wasco', 'Waterford', 'Watsonville', 'Weed', 'West Covina', 'West Hollywood', 'West Sacramento', 'Westlake Village', 'Westminster', 'Wheatland', 'Whittier', 'Willows', 'Windsor', 'Winters', 'Woodlake', 'Woodland', 'Woodside', 'Yorba Linda', 'Yountville', 'Yreka', 'Yuba City', 'Yucaipa', 'Yucca Valley'
  ],
  'Colorado': [
    'Alamosa', 'Aspen', 'Boulder', 'Brighton', 'Broomfield', 'Canon City', 'Castle Rock', 'Colorado Springs', 'Commerce City', 'Cortez', 'Craig', 'Delta', 'Durango', 'Englewood', 'Estes Park', 'Fort Collins', 'Fort Morgan', 'Glenwood Springs', 'Golden', 'Grand Junction', 'Greeley', 'Gunnison', 'La Junta', 'Lafayette', 'Lakewood', 'Lamar', 'Leadville', 'Littleton', 'Longmont', 'Louisville', 'Montrose', 'Northglenn', 'Parker', 'Pueblo', 'Rifle', 'Salida', 'Steamboat Springs', 'Sterling', 'Thornton', 'Trinidad', 'Vail', 'Westminster', 'Wheat Ridge'
  ],
  'Connecticut': [
    'Ansonia', 'Berlin', 'Bloomfield', 'Branford', 'Bridgeport', 'Bristol', 'Danbury', 'Derby', 'East Hartford', 'East Haven', 'Enfield', 'Fairfield', 'Glastonbury', 'Groton', 'Guilford', 'Hamden', 'Hartford', 'Manchester', 'Meriden', 'Middletown', 'Milford', 'Naugatuck', 'New Britain', 'New Haven', 'New London', 'New Milford', 'Newington', 'North Haven', 'Norwalk', 'Norwich', 'Orange', 'Plainville', 'Shelton', 'Southington', 'Stamford', 'Stratford', 'Torrington', 'Trumbull', 'Vernon', 'Wallingford', 'Waterbury', 'West Hartford', 'West Haven', 'Westport', 'Wethersfield', 'Willimantic', 'Windsor', 'Windsor Locks', 'Winsted'
  ],
  'Delaware': [
    'Dover', 'Harrington', 'Laurel', 'Lewes', 'Middletown', 'Milton', 'Newark', 'Rehoboth Beach', 'Seaford', 'Smyrna', 'Wilmington'
  ],
  'Florida': [
    'Altamonte Springs', 'Apalachicola', 'Apopka', 'Arcadia', 'Atlantic Beach', 'Auburndale', 'Avon Park', 'Bartow', 'Belle Glade', 'Belleair', 'Belleview', 'Boca Raton', 'Bonita Springs', 'Boynton Beach', 'Bradenton', 'Brooksville', 'Bunnell', 'Bushnell', 'Callaway', 'Cape Canaveral', 'Cape Coral', 'Casselberry', 'Cedar Key', 'Celebration', 'Chipley', 'Clearwater', 'Clewiston', 'Cocoa', 'Cocoa Beach', 'Coconut Creek', 'Coral Gables', 'Coral Springs', 'Crestview', 'Crystal River', 'Cutler Bay', 'Dade City', 'Dania Beach', 'Davenport', 'Daytona Beach', 'DeBary', 'DeFuniak Springs', 'DeLand', 'Deerfield Beach', 'Delray Beach', 'Deltona', 'Destin', 'Doral', 'Dunedin', 'Eagle Lake', 'Edgewater', 'Englewood', 'Eustis', 'Everglades City', 'Fernandina Beach', 'Flagler Beach', 'Florida City', 'Fort Lauderdale', 'Fort Meade', 'Fort Myers', 'Fort Myers Beach', 'Fort Pierce', 'Fort Walton Beach', 'Frostproof', 'Gainesville', 'Glen Ridge', 'Graceville', 'Greenacres', 'Green Cove Springs', 'Gulf Breeze', 'Gulfport', 'Haines City', 'Hallandale Beach', 'Havana', 'Hialeah', 'Hialeah Gardens', 'High Springs', 'Holly Hill', 'Hollywood', 'Homestead', 'Hypoluxo', 'Indian Harbour Beach', 'Indian Rocks Beach', 'Indialantic', 'Inverness', 'Jacksonville', 'Jacksonville Beach', 'Jasper', 'Jupiter', 'Jupiter Inlet Colony', 'Key Biscayne', 'Key Largo', 'Key West', 'Kissimmee', 'La Belle', 'Lady Lake', 'Lake Alfred', 'Lake Buena Vista', 'Lake City', 'Lake Clarke Shores', 'Lake Helen', 'Lake Mary', 'Lake Park', 'Lake Placid', 'Lake Wales', 'Lake Worth', 'Lakeland', 'Lantana', 'Largo', 'Lauderdale Lakes', 'Lauderdale-by-the-Sea', 'Lauderhill', 'Leesburg', 'Lighthouse Point', 'Live Oak', 'Longboat Key', 'Longwood', 'Lutz', 'Lynn Haven', 'Macclenny', 'Madeira Beach', 'Maitland', 'Marathon', 'Marco Island', 'Margate', 'Mary Esther', 'Melbourne', 'Melbourne Beach', 'Mexico Beach', 'Miami', 'Miami Beach', 'Miami Gardens', 'Miami Lakes', 'Miami Shores', 'Miami Springs', 'Miccosukee', 'Middleburg', 'Milton', 'Minneola', 'Miramar', 'Monticello', 'Moore Haven', 'Mount Dora', 'Mulberry', 'Naples', 'Neptune Beach', 'New Port Richey', 'New Smyrna Beach', 'Niceville', 'North Bay Village', 'North Lauderdale', 'North Miami', 'North Miami Beach', 'North Palm Beach', 'North Port', 'Oak Hill', 'Oakland Park', 'Ocala', 'Ocean Ridge', 'Ocoee', 'Okeechobee', 'Oldsmar', 'Opa-locka', 'Orange City', 'Orange Park', 'Orlando', 'Ormond Beach', 'Oviedo', 'Pahokee', 'Palatka', 'Palm Bay', 'Palm Beach', 'Palm Beach Gardens', 'Palm Coast', 'Palm Harbor', 'Palm Shores', 'Palm Springs', 'Palmetto', 'Panama City', 'Panama City Beach', 'Parker', 'Parkland', 'Pembroke Pines', 'Pensacola', 'Perry', 'Pinellas Park', 'Plant City', 'Plantation', 'Pompano Beach', 'Ponce Inlet', 'Port Orange', 'Port Richey', 'Port St. Joe', 'Port St. Lucie', 'Punta Gorda', 'Quincy', 'Riviera Beach', 'Rockledge', 'Royal Palm Beach', 'Safety Harbor', 'San Antonio', 'Sanford', 'Sanibel', 'Sarasota', 'Satellite Beach', 'Sebastian', 'Sebring', 'Seminole', 'Shalimar', 'Sopchoppy', 'South Bay', 'South Daytona', 'South Miami', 'South Pasadena', 'Southwest Ranches', 'Springfield', 'St. Augustine', 'St. Augustine Beach', 'St. Cloud', 'St. Pete Beach', 'St. Petersburg', 'Starke', 'Stuart', 'Sunny Isles Beach', 'Sunrise', 'Surfside', 'Sweetwater', 'Tallahassee', 'Tamarac', 'Tampa', 'Tarpon Springs', 'Tavares', 'Temple Terrace', 'Tequesta', 'Titusville', 'Treasure Island', 'Trenton', 'Umatilla', 'Valparaiso', 'Venice', 'Vero Beach', 'Viera', 'Village of Golf', 'Wauchula', 'Wausau', 'Webster', 'Weeki Wachee', 'Welaka', 'West Melbourne', 'West Palm Beach', 'West Park', 'Weston', 'Wewahitchka', 'White Springs', 'Wildwood', 'Williston', 'Wilmington Island', 'Winter Garden', 'Winter Haven', 'Winter Park', 'Winter Springs', 'Yankeetown', 'Zephyrhills'
  ],
  'Georgia': [
    'Acworth', 'Adel', 'Albany', 'Alpharetta', 'Americus', 'Athens', 'Atlanta', 'Augusta', 'Austell', 'Bainbridge', 'Barnesville', 'Blairsville', 'Blakely', 'Brunswick', 'Buford', 'Byron', 'Calhoun', 'Canton', 'Carrollton', 'Cartersville', 'Cedartown', 'Centerville', 'Chamblee', 'Chatsworth', 'Clarkesville', 'Clarksville', 'Cleveland', 'Cochran', 'College Park', 'Columbus', 'Commerce', 'Conyers', 'Cordele', 'Cornelia', 'Covington', 'Cumming', 'Dahlonega', 'Dalton', 'Danielsville', 'Darien', 'Dawson', 'Dawsonville', 'Decatur', 'Douglas', 'Douglasville', 'Dublin', 'Duluth', 'East Point', 'Eatonton', 'Elberton', 'Ellijay', 'Evans', 'Fairburn', 'Fayetteville', 'Fitzgerald', 'Forsyth', 'Fort Oglethorpe', 'Fort Valley', 'Gainesville', 'Garden City', 'Georgetown', 'Griffin', 'Grovetown', 'Hahira', 'Hampton', 'Hartwell', 'Hawkinsville', 'Hazlehurst', 'Helen', 'Hinesville', 'Hogansville', 'Homerville', 'Jackson', 'Jasper', 'Jefferson', 'Jesup', 'Jonesboro', 'Kennesaw', 'Kingsland', 'LaGrange', 'Lawrenceville', 'Lilburn', 'Lithonia', 'Locust Grove', 'Loganville', 'Louisville', 'Mableton', 'Macon', 'Madison', 'Marietta', 'McDonough', 'McRae', 'Milledgeville', 'Monroe', 'Monticello', 'Morrow', 'Moultrie', 'Mount Vernon', 'Nashville', 'Newnan', 'Norcross', 'Oakwood', 'Ocilla', 'Oglethorpe', 'Peachtree City', 'Peachtree Corners', 'Perry', 'Pooler', 'Powder Springs', 'Quitman', 'Reidsville', 'Rincon', 'Riverdale', 'Rome', 'Roswell', 'Rutledge', 'Sandersville', 'Sandy Springs', 'Savannah', 'Smyrna', 'Snellville', 'Soperton', 'Statesboro', 'Statham', 'Stockbridge', 'Stone Mountain', 'Suwanee', 'Swainsboro', 'Sylvania', 'Sylvester', 'Talbotton', 'Thomasville', 'Thomson', 'Tifton', 'Toccoa', 'Trenton', 'Tucker', 'Tunnel Hill', 'Tyrone', 'Union City', 'Valdosta', 'Vidalia', 'Villa Rica', 'Wadley', 'Warner Robins', 'Washington', 'Watkinsville', 'Waycross', 'Waynesboro', 'West Point', 'Winder', 'Woodstock', 'Wrightsville'
  ],
  'Hawaii': [
    'Hilo', 'Honolulu', 'Kailua', 'Kailua-Kona', 'Kaneohe', 'Kapaa', 'Kihei', 'Lahaina', 'Pearl City', 'Wailuku'
  ],
  'Idaho': [
    'Blackfoot', 'Boise', 'Burley', 'Caldwell', 'Chubbuck', 'Coeur d\'Alene', 'Eagle', 'Garden City', 'Idaho Falls', 'Jerome', 'Lewiston', 'Meridian', 'Moscow', 'Nampa', 'Pocatello', 'Post Falls', 'Rexburg', 'Sandpoint', 'Twin Falls', 'Weiser'
  ],
  'Illinois': [
    'Addison', 'Algonquin', 'Arlington Heights', 'Aurora', 'Barrington', 'Bartlett', 'Batavia', 'Belleville', 'Belvidere', 'Berwyn', 'Bloomington', 'Bolingbrook', 'Buffalo Grove', 'Burbank', 'Canton', 'Carbondale', 'Carol Stream', 'Carpentersville', 'Champaign', 'Chicago', 'Chicago Heights', 'Cicero', 'Crystal Lake', 'Danville', 'Decatur', 'DeKalb', 'Des Plaines', 'Dixon', 'Downers Grove', 'East Moline', 'Elgin', 'Elk Grove Village', 'Elmhurst', 'Evanston', 'Freeport', 'Galesburg', 'Glen Ellyn', 'Glenview', 'Gurnee', 'Hanover Park', 'Harvey', 'Highland Park', 'Hoffman Estates', 'Joliet', 'Kankakee', 'LaGrange', 'Lake Forest', 'Lansing', 'Libertyville', 'Lombard', 'Macomb', 'Mattoon', 'McHenry', 'Melrose Park', 'Mokena', 'Moline', 'Mount Prospect', 'Mundelein', 'Naperville', 'Normal', 'Northbrook', 'Oak Forest', 'Oak Lawn', 'Oak Park', 'Orland Park', 'Oswego', 'Ottawa', 'Palatine', 'Park Ridge', 'Peoria', 'Plainfield', 'Quincy', 'Rockford', 'Rock Island', 'Rolling Meadows', 'Romeoville', 'Roselle', 'Round Lake Beach', 'Schaumburg', 'Skokie', 'South Elgin', 'Springfield', 'St. Charles', 'Streamwood', 'Sycamore', 'Tinley Park', 'Urbana', 'Vernon Hills', 'Waukegan', 'Wheaton', 'Wheeling', 'Wilmette', 'Woodridge', 'Woodstock', 'Zion'
  ],
  'Indiana': [
    'Anderson', 'Angola', 'Auburn', 'Bedford', 'Bloomington', 'Bluffton', 'Brazil', 'Carmel', 'Chesterton', 'Clarksville', 'Columbia City', 'Columbus', 'Crawfordsville', 'Crown Point', 'East Chicago', 'Elkhart', 'Evansville', 'Fishers', 'Fort Wayne', 'Frankfort', 'Franklin', 'Gary', 'Goshen', 'Greenfield', 'Greenwood', 'Griffith', 'Hammond', 'Hobart', 'Huntington', 'Indianapolis', 'Jasper', 'Jeffersonville', 'Kokomo', 'La Porte', 'Lafayette', 'Lawrence', 'Lebanon', 'Logansport', 'Madison', 'Marion', 'Martinsville', 'Merrillville', 'Michigan City', 'Mishawaka', 'Muncie', 'Munster', 'New Albany', 'New Castle', 'Noblesville', 'North Vernon', 'Peru', 'Plainfield', 'Portage', 'Richmond', 'Rushville', 'Schererville', 'Seymour', 'Shelbyville', 'South Bend', 'Terre Haute', 'Valparaiso', 'Vincennes', 'Wabash', 'Warsaw', 'Washington', 'Westfield', 'Zionsville'
  ],
  'Iowa': [
    'Ames', 'Ankeny', 'Bettendorf', 'Burlington', 'Cedar Falls', 'Cedar Rapids', 'Clinton', 'Council Bluffs', 'Davenport', 'Des Moines', 'Dubuque', 'Fort Dodge', 'Iowa City', 'Marion', 'Mason City', 'Muscatine', 'Newton', 'Ottumwa', 'Sioux City', 'Urbandale', 'Waterloo', 'West Des Moines'
  ],
  'Kansas': [
    'Arkansas City', 'Atchison', 'Chanute', 'Coffeyville', 'Dodge City', 'Emporia', 'Garden City', 'Great Bend', 'Hays', 'Hutchinson', 'Independence', 'Junction City', 'Kansas City', 'Lawrence', 'Leavenworth', 'Lenexa', 'Liberal', 'Manhattan', 'McPherson', 'Newton', 'Olathe', 'Ottawa', 'Overland Park', 'Pittsburg', 'Prairie Village', 'Salina', 'Shawnee', 'Topeka', 'Wichita'
  ],
  'Kentucky': [
    'Ashland', 'Bardstown', 'Bowling Green', 'Campbellsville', 'Corbin', 'Covington', 'Danville', 'Elizabethtown', 'Erlanger', 'Florence', 'Fort Thomas', 'Frankfort', 'Georgetown', 'Glasgow', 'Henderson', 'Hopkinsville', 'Lexington', 'London', 'Louisville', 'Madisonville', 'Mayfield', 'Middlesborough', 'Morehead', 'Mount Sterling', 'Murray', 'Newport', 'Nicholasville', 'Owensboro', 'Paducah', 'Paris', 'Pikeville', 'Radcliff', 'Richmond', 'Somerset', 'Versailles', 'Williamsburg', 'Winchester'
  ],
  'Louisiana': [
    'Abbeville', 'Alexandria', 'Bastrop', 'Baton Rouge', 'Bogalusa', 'Bossier City', 'Chalmette', 'Covington', 'Crowley', 'DeRidder', 'Eunice', 'Gretna', 'Hammond', 'Harahan', 'Houma', 'Jennings', 'Kenner', 'Lafayette', 'Lake Charles', 'Laplace', 'Leesville', 'Mandeville', 'Marrero', 'Metairie', 'Monroe', 'Morgan City', 'Natchitoches', 'New Iberia', 'New Orleans', 'Opelousas', 'Pineville', 'Ruston', 'Shreveport', 'Slidell', 'Sulphur', 'Thibodaux', 'West Monroe', 'Westwego', 'Zachary'
  ],
  'Maine': [
    'Auburn', 'Augusta', 'Bangor', 'Bath', 'Belfast', 'Biddeford', 'Brewer', 'Brunswick', 'Calais', 'Caribou', 'Ellsworth', 'Farmington', 'Gardiner', 'Houlton', 'Lewiston', 'Old Orchard Beach', 'Portland', 'Presque Isle', 'Rockland', 'Rumford', 'Saco', 'Sanford', 'South Portland', 'Waterville', 'Westbrook'
  ],
  'Maryland': [
    'Aberdeen', 'Annapolis', 'Baltimore', 'Bel Air', 'Bethesda', 'Bowie', 'Cambridge', 'Catonsville', 'College Park', 'Columbia', 'Cumberland', 'Easton', 'Elkton', 'Frederick', 'Gaithersburg', 'Germantown', 'Glen Burnie', 'Greenbelt', 'Hagerstown', 'Hyattsville', 'Laurel', 'Ocean City', 'Owings Mills', 'Rockville', 'Salisbury', 'Silver Spring', 'Takoma Park', 'Towson', 'Waldorf', 'Westminster'
  ],
  'Massachusetts': [
    'Adams', 'Agawam', 'Amesbury', 'Amherst', 'Andover', 'Arlington', 'Attleboro', 'Barnstable', 'Beverly', 'Boston', 'Braintree', 'Brockton', 'Brookline', 'Cambridge', 'Chicopee', 'Concord', 'Danvers', 'Dartmouth', 'Dedham', 'Easthampton', 'Everett', 'Fall River', 'Falmouth', 'Fitchburg', 'Framingham', 'Franklin', 'Gardner', 'Gloucester', 'Greenfield', 'Haverhill', 'Holyoke', 'Hyannis', 'Lawrence', 'Leominster', 'Lowell', 'Lynn', 'Malden', 'Marlborough', 'Medford', 'Melrose', 'Methuen', 'Milford', 'Milton', 'Nantucket', 'Natick', 'New Bedford', 'Newburyport', 'Newton', 'North Adams', 'Northampton', 'Norwood', 'Peabody', 'Pittsfield', 'Plymouth', 'Quincy', 'Randolph', 'Reading', 'Revere', 'Salem', 'Saugus', 'Somerville', 'Southbridge', 'Springfield', 'Taunton', 'Waltham', 'Watertown', 'Wellesley', 'Westfield', 'Westford', 'Weymouth', 'Wilmington', 'Winchester', 'Woburn', 'Worcester', 'Wrentham'
  ],
  'Michigan': [
    'Adrian', 'Albion', 'Allegan', 'Alpena', 'Ann Arbor', 'Battle Creek', 'Bay City', 'Benton Harbor', 'Big Rapids', 'Birmingham', 'Cadillac', 'Cheboygan', 'Coldwater', 'Dearborn', 'Detroit', 'East Lansing', 'Escanaba', 'Farmington', 'Farmington Hills', 'Fenton', 'Ferndale', 'Flint', 'Grand Haven', 'Grand Rapids', 'Holland', 'Houghton', 'Jackson', 'Kalamazoo', 'Lansing', 'Livonia', 'Marquette', 'Midland', 'Monroe', 'Mount Pleasant', 'Muskegon', 'Niles', 'Novi', 'Oak Park', 'Owosso', 'Petoskey', 'Pontiac', 'Port Huron', 'Rochester', 'Rochester Hills', 'Royal Oak', 'Saginaw', 'Saint Joseph', 'Saint Clair Shores', 'Sault Ste. Marie', 'Southfield', 'Sterling Heights', 'Sturgis', 'Taylor', 'Traverse City', 'Troy', 'Warren', 'Westland', 'Wyoming', 'Ypsilanti', 'Zeeland'
  ],
  'Minnesota': [
    'Albert Lea', 'Alexandria', 'Andover', 'Anoka', 'Apple Valley', 'Austin', 'Bemidji', 'Bloomington', 'Brainerd', 'Brooklyn Center', 'Brooklyn Park', 'Burnsville', 'Chaska', 'Coon Rapids', 'Cottage Grove', 'Crookston', 'Duluth', 'Eagan', 'East Grand Forks', 'Eden Prairie', 'Edina', 'Faribault', 'Fergus Falls', 'Fridley', 'Hastings', 'Hibbing', 'Hopkins', 'Inver Grove Heights', 'Lakeville', 'Mankato', 'Maple Grove', 'Maplewood', 'Marshall', 'Minneapolis', 'Minnetonka', 'Moorhead', 'Mounds View', 'New Ulm', 'Northfield', 'Owatonna', 'Plymouth', 'Prior Lake', 'Red Wing', 'Richfield', 'Rochester', 'Rosemount', 'Roseville', 'Saint Cloud', 'Saint Paul', 'Sartell', 'Savage', 'Shakopee', 'South Saint Paul', 'Stillwater', 'Thief River Falls', 'Virginia', 'Wadena', 'Willmar', 'Winona', 'Woodbury', 'Worthington'
  ],
  'Mississippi': [
    'Biloxi', 'Booneville', 'Brookhaven', 'Clarksdale', 'Cleveland', 'Columbus', 'Corinth', 'Gautier', 'Greenville', 'Greenwood', 'Gulfport', 'Hattiesburg', 'Hernando', 'Holly Springs', 'Horn Lake', 'Indianola', 'Jackson', 'Kosciusko', 'Laurel', 'Long Beach', 'Louisville', 'McComb', 'Meridian', 'Natchez', 'Ocean Springs', 'Oxford', 'Pascagoula', 'Picayune', 'Ridgeland', 'Southaven', 'Starkville', 'Tupelo', 'Vicksburg', 'West Point', 'Yazoo City'
  ],
  'Missouri': [
    'Arnold', 'Branson', 'Cape Girardeau', 'Carrollton', 'Chillicothe', 'Clayton', 'Columbia', 'Excelsior Springs', 'Ferguson', 'Florissant', 'Fort Leonard Wood', 'Fulton', 'Gladstone', 'Grandview', 'Hannibal', 'Independence', 'Jefferson City', 'Joplin', 'Kansas City', 'Kirksville', 'Lee\'s Summit', 'Liberty', 'Maryville', 'Mexico', 'Moberly', 'Nevada', 'North Kansas City', 'O\'Fallon', 'Poplar Bluff', 'Raytown', 'Rolla', 'Saint Charles', 'Saint Joseph', 'Saint Louis', 'Sedalia', 'Sikeston', 'Springfield', 'St. Joseph', 'St. Louis', 'St. Peters', 'Warrensburg', 'Washington', 'Webb City', 'West Plains'
  ],
  'Montana': [
    'Anaconda', 'Billings', 'Bozeman', 'Butte', 'Dillon', 'Glasgow', 'Glendive', 'Great Falls', 'Hamilton', 'Havre', 'Helena', 'Kalispell', 'Lewistown', 'Livingston', 'Miles City', 'Missoula', 'Polson', 'Sidney', 'Whitefish'
  ],
  'Nebraska': [
    'Alliance', 'Beatrice', 'Bellevue', 'Blair', 'Columbus', 'Fremont', 'Grand Island', 'Hastings', 'Kearney', 'La Vista', 'Lincoln', 'McCook', 'Norfolk', 'North Platte', 'Omaha', 'Papillion', 'Scottsbluff', 'South Sioux City', 'York'
  ],
  'Nevada': [
    'Boulder City', 'Carson City', 'Elko', 'Ely', 'Fallon', 'Fernley', 'Henderson', 'Las Vegas', 'Laughlin', 'Mesquite', 'North Las Vegas', 'Pahrump', 'Reno', 'Sparks', 'Winnemucca', 'Yerington'
  ],
  'New Hampshire': [
    'Berlin', 'Claremont', 'Concord', 'Conway', 'Derry', 'Dover', 'Durham', 'Exeter', 'Franklin', 'Hanover', 'Hollis', 'Keene', 'Laconia', 'Lebanon', 'Manchester', 'Merrimack', 'Nashua', 'Newport', 'Pelham', 'Portsmouth', 'Rochester', 'Salem', 'Somersworth', 'Windham'
  ],
  'New Jersey': [
    'Asbury Park', 'Atlantic City', 'Bayonne', 'Belleville', 'Bergenfield', 'Bloomfield', 'Bridgeton', 'Camden', 'Carteret', 'Cherry Hill', 'Clifton', 'Cranford', 'East Orange', 'Edison', 'Elizabeth', 'Englewood', 'Ewing', 'Fair Lawn', 'Fort Lee', 'Garfield', 'Glassboro', 'Hackensack', 'Hammonton', 'Hoboken', 'Irvington', 'Jersey City', 'Kearny', 'Lakewood', 'Long Branch', 'Madison', 'Maplewood', 'Millville', 'Montclair', 'Morristown', 'Newark', 'New Brunswick', 'North Bergen', 'Nutley', 'Ocean City', 'Orange', 'Paramus', 'Parsippany', 'Passaic', 'Paterson', 'Perth Amboy', 'Plainfield', 'Princeton', 'Rahway', 'Ramsey', 'Ridgewood', 'Roselle', 'Rutherford', 'Sayreville', 'Secaucus', 'Somerville', 'South Orange', 'Summit', 'Teaneck', 'Toms River', 'Trenton', 'Union', 'Union City', 'Vineland', 'Weehawken', 'West New York', 'West Orange', 'Westfield', 'Westwood', 'Woodbridge'
  ],
  'New Mexico': [
    'Alamogordo', 'Albuquerque', 'Artesia', 'Aztec', 'Belen', 'Carlsbad', 'Clovis', 'Deming', 'Española', 'Farmington', 'Gallup', 'Grants', 'Hobbs', 'Las Cruces', 'Las Vegas', 'Los Alamos', 'Portales', 'Rio Rancho', 'Roswell', 'Santa Fe', 'Silver City', 'Socorro', 'Sunland Park', 'Taos', 'Truth or Consequences'
  ],
  'New York': [
    'Albany', 'Amherst', 'Auburn', 'Batavia', 'Bath', 'Beacon', 'Binghamton', 'Buffalo', 'Canandaigua', 'Canton', 'Catskill', 'Cortland', 'Corning', 'Elmira', 'Fulton', 'Geneva', 'Glen Cove', 'Glens Falls', 'Gloversville', 'Hornell', 'Hudson', 'Ithaca', 'Jamestown', 'Johnstown', 'Kingston', 'Little Falls', 'Lockport', 'Long Beach', 'Middletown', 'Mount Vernon', 'New Rochelle', 'New York', 'Newburgh', 'Niagara Falls', 'North Tonawanda', 'Ogdensburg', 'Olean', 'Oneida', 'Oneonta', 'Oswego', 'Peekskill', 'Plattsburgh', 'Port Jervis', 'Poughkeepsie', 'Rensselaer', 'Rochester', 'Rome', 'Salamanca', 'Saratoga Springs', 'Schenectady', 'Syracuse', 'Tonawanda', 'Troy', 'Utica', 'Watertown', 'Watervliet', 'White Plains', 'Yonkers'
  ],
  'North Carolina': [
    'Albemarle', 'Asheboro', 'Asheville', 'Belmont', 'Boone', 'Burlington', 'Carrboro', 'Cary', 'Chapel Hill', 'Charlotte', 'Concord', 'Cornelius', 'Durham', 'Elizabeth City', 'Fayetteville', 'Forest City', 'Gastonia', 'Goldsboro', 'Greensboro', 'Greenville', 'Henderson', 'Hendersonville', 'Hickory', 'High Point', 'Jacksonville', 'Kannapolis', 'Kinston', 'Laurinburg', 'Lenoir', 'Lexington', 'Lumberton', 'Monroe', 'Morehead City', 'Morganton', 'Mount Airy', 'New Bern', 'Newton', 'Pineville', 'Raleigh', 'Reidsville', 'Rocky Mount', 'Roxboro', 'Salisbury', 'Sanford', 'Shelby', 'Statesville', 'Thomasville', 'Washington', 'Waynesville', 'Wilmington', 'Wilson', 'Winston-Salem'
  ],
  'North Dakota': [
    'Bismarck', 'Devils Lake', 'Dickinson', 'Fargo', 'Grand Forks', 'Jamestown', 'Mandan', 'Minot', 'Valley City', 'Wahpeton', 'West Fargo', 'Williston'
  ],
  'Ohio': [
    'Akron', 'Alliance', 'Ashtabula', 'Athens', 'Barberton', 'Beavercreek', 'Bellefontaine', 'Bowling Green', 'Canton', 'Celina', 'Chillicothe', 'Cincinnati', 'Cleveland', 'Cleveland Heights', 'Columbus', 'Cuyahoga Falls', 'Dayton', 'Defiance', 'Delaware', 'East Cleveland', 'Elyria', 'Euclid', 'Findlay', 'Fremont', 'Gahanna', 'Garfield Heights', 'Green', 'Hamilton', 'Hilliard', 'Hudson', 'Kent', 'Kettering', 'Lakewood', 'Lancaster', 'Lima', 'Lorain', 'Mansfield', 'Marion', 'Massillon', 'Medina', 'Mentor', 'Middletown', 'Mount Vernon', 'Newark', 'Niles', 'Norwood', 'Parma', 'Piqua', 'Portsmouth', 'Reynoldsburg', 'Sandusky', 'Shaker Heights', 'Springfield', 'Steubenville', 'Stow', 'Strongsville', 'Toledo', 'Troy', 'Upper Arlington', 'Warren', 'Westerville', 'Westlake', 'Wickliffe', 'Wooster', 'Youngstown', 'Zanesville'
  ],
  'Oklahoma': [
    'Ada', 'Altus', 'Ardmore', 'Bartlesville', 'Bethany', 'Bixby', 'Broken Arrow', 'Chickasha', 'Claremore', 'Duncan', 'Durant', 'Edmond', 'El Reno', 'Enid', 'Guthrie', 'Lawton', 'McAlester', 'Miami', 'Midwest City', 'Moore', 'Muskogee', 'Norman', 'Oklahoma City', 'Owasso', 'Ponca City', 'Sapulpa', 'Shawnee', 'Stillwater', 'Tahlequah', 'Tulsa', 'Weatherford', 'Woodward'
  ],
  'Oregon': [
    'Albany', 'Ashland', 'Astoria', 'Baker City', 'Beaverton', 'Bend', 'Canby', 'Coos Bay', 'Corvallis', 'Cottage Grove', 'Eugene', 'Forest Grove', 'Grants Pass', 'Gresham', 'Hermiston', 'Hillsboro', 'Hood River', 'Keizer', 'Klamath Falls', 'La Grande', 'Lake Oswego', 'Lebanon', 'McMinnville', 'Medford', 'Milwaukie', 'Newberg', 'Newport', 'Ontario', 'Oregon City', 'Pendleton', 'Portland', 'Prineville', 'Redmond', 'Roseburg', 'Salem', 'Seaside', 'Springfield', 'St. Helens', 'The Dalles', 'Tigard', 'Tillamook', 'Tualatin', 'West Linn', 'Wilsonville', 'Woodburn'
  ],
  'Pennsylvania': [
    'Allentown', 'Altoona', 'Beaver Falls', 'Bethlehem', 'Bloomsburg', 'Bradford', 'Butler', 'Carbondale', 'Carlisle', 'Chambersburg', 'Chester', 'Coatesville', 'DuBois', 'Easton', 'Erie', 'Franklin', 'Gettysburg', 'Greensburg', 'Hanover', 'Harrisburg', 'Hazleton', 'Hermitage', 'Indiana', 'Johnstown', 'Lancaster', 'Lebanon', 'Lewisburg', 'Lock Haven', 'McKeesport', 'Meadville', 'Monroeville', 'New Castle', 'Norristown', 'Oil City', 'Philadelphia', 'Pittsburgh', 'Pottsville', 'Reading', 'Scranton', 'Sharon', 'State College', 'Stroudsburg', 'Sunbury', 'Uniontown', 'Warren', 'Washington', 'Waynesburg', 'West Chester', 'Wilkes-Barre', 'Williamsport', 'York'
  ],
  'Rhode Island': [
    'Barrington', 'Bristol', 'Central Falls', 'Cranston', 'East Greenwich', 'East Providence', 'Johnston', 'Narragansett', 'Newport', 'North Kingstown', 'North Providence', 'Pawtucket', 'Portsmouth', 'Providence', 'Smithfield', 'South Kingstown', 'Tiverton', 'Warren', 'Warwick', 'Westerly', 'West Warwick', 'Woonsocket'
  ],
  'South Carolina': [
    'Aiken', 'Anderson', 'Beaufort', 'Camden', 'Cayce', 'Charleston', 'Cheraw', 'Clemson', 'Columbia', 'Conway', 'Darlington', 'Florence', 'Fort Mill', 'Gaffney', 'Georgetown', 'Goose Creek', 'Greenville', 'Greenwood', 'Greer', 'Hartsville', 'Hilton Head Island', 'Lancaster', 'Laurens', 'Lexington', 'Manning', 'Mauldin', 'Mount Pleasant', 'Myrtle Beach', 'Newberry', 'North Augusta', 'North Charleston', 'Orangeburg', 'Parker', 'Rock Hill', 'Seneca', 'Simpsonville', 'Spartanburg', 'Summerville', 'Sumter', 'Taylors', 'Union', 'Walterboro', 'West Columbia', 'York'
  ],
  'South Dakota': [
    'Aberdeen', 'Brookings', 'Huron', 'Mitchell', 'Pierre', 'Rapid City', 'Sioux Falls', 'Spearfish', 'Sturgis', 'Vermillion', 'Watertown', 'Yankton'
  ],
  'Tennessee': [
    'Alcoa', 'Athens', 'Bartlett', 'Brentwood', 'Bristol', 'Brownsville', 'Chattanooga', 'Clarksville', 'Cleveland', 'Collierville', 'Columbia', 'Cookeville', 'Crossville', 'Dickson', 'Dyersburg', 'Elizabethton', 'Fayetteville', 'Franklin', 'Gallatin', 'Germantown', 'Goodlettsville', 'Greeneville', 'Hendersonville', 'Jackson', 'Jefferson City', 'Johnson City', 'Kingsport', 'Knoxville', 'La Follette', 'Lawrenceburg', 'Lebanon', 'Lewisburg', 'McMinnville', 'Maryville', 'Memphis', 'Morristown', 'Mount Juliet', 'Murfreesboro', 'Nashville', 'Oak Ridge', 'Paris', 'Pulaski', 'Sevierville', 'Shelbyville', 'Smyrna', 'Springfield', 'Tullahoma', 'Union City'
  ],
  'Texas': [
    'Abilene', 'Alamo', 'Alvin', 'Amarillo', 'Angleton', 'Aransas Pass', 'Arlington', 'Athens', 'Austin', 'Bay City', 'Baytown', 'Beaumont', 'Beeville', 'Bellville', 'Big Spring', 'Boerne', 'Borger', 'Brenham', 'Brownsville', 'Brownwood', 'Bryan', 'Burkburnett', 'Canyon', 'Carrollton', 'Carthage', 'Cedar Park', 'Cleburne', 'College Station', 'Conroe', 'Coppell', 'Corpus Christi', 'Corsicana', 'Cuero', 'Dallas', 'Del Rio', 'Denison', 'Denton', 'DeSoto', 'Dumas', 'Duncanville', 'Eagle Pass', 'Edinburg', 'El Campo', 'El Paso', 'Ennis', 'Euless', 'Farmers Branch', 'Flower Mound', 'Fort Worth', 'Fredericksburg', 'Freeport', 'Friendswood', 'Frisco', 'Galveston', 'Garland', 'Gatesville', 'Georgetown', 'Giddings', 'Gonzales', 'Graham', 'Grand Prairie', 'Grapevine', 'Greenville', 'Groves', 'Harlingen', 'Henderson', 'Hereford', 'Hidalgo', 'Hondo', 'Houston', 'Huntsville', 'Hurst', 'Irving', 'Jacksonville', 'Jasper', 'Jersey Village', 'Katy', 'Kaufman', 'Keller', 'Kerrville', 'Killeen', 'Kingsville', 'La Grange', 'Laredo', 'League City', 'Lewisville', 'Liberty', 'Littlefield', 'Livingston', 'Longview', 'Lubbock', 'Lufkin', 'McAllen', 'McKinney', 'Marshall', 'Mesquite', 'Midland', 'Mineral Wells', 'Mission', 'Missouri City', 'Mount Pleasant', 'Nacogdoches', 'New Braunfels', 'Odessa', 'Orange', 'Palestine', 'Paris', 'Pasadena', 'Pearland', 'Pecos', 'Pharr', 'Plainview', 'Plano', 'Port Arthur', 'Port Lavaca', 'Portland', 'Richardson', 'Rockwall', 'Rosenberg', 'Round Rock', 'Rowlett', 'San Angelo', 'San Antonio', 'San Marcos', 'Seguin', 'Sherman', 'Snyder', 'Southlake', 'Stephenville', 'Sugar Land', 'Sulphur Springs', 'Sweetwater', 'Temple', 'Texarkana', 'Texas City', 'The Colony', 'Tomball', 'Tyler', 'Universal City', 'Uvalde', 'Victoria', 'Waco', 'Waxahachie', 'Weatherford', 'Weslaco', 'Wharton', 'White Settlement', 'Wichita Falls', 'Woodway'
  ],
  'Utah': [
    'American Fork', 'Bountiful', 'Brigham City', 'Cedar City', 'Clearfield', 'Draper', 'Ephraim', 'Heber City', 'Kaysville', 'Layton', 'Lehi', 'Logan', 'Midvale', 'Moab', 'Murray', 'Ogden', 'Orem', 'Park City', 'Payson', 'Price', 'Provo', 'Richfield', 'Roosevelt', 'Salt Lake City', 'Sandy', 'South Jordan', 'Spanish Fork', 'Springville', 'St. George', 'Tooele', 'Tremonton', 'Vernal', 'West Jordan', 'West Valley City'
  ],
  'Vermont': [
    'Barre', 'Bennington', 'Brattleboro', 'Burlington', 'Essex Junction', 'Middlebury', 'Montpelier', 'Newport', 'Rutland', 'Saint Albans', 'South Burlington', 'Springfield', 'St. Johnsbury', 'White River Junction', 'Winooski'
  ],
  'Virginia': [
    'Abingdon', 'Alexandria', 'Arlington', 'Bedford', 'Blacksburg', 'Bristol', 'Charlottesville', 'Chesapeake', 'Christiansburg', 'Colonial Heights', 'Covington', 'Danville', 'Emporia', 'Fairfax', 'Falls Church', 'Farmville', 'Fredericksburg', 'Front Royal', 'Hampton', 'Harrisonburg', 'Herndon', 'Hopewell', 'Leesburg', 'Lexington', 'Lynchburg', 'Manassas', 'Martinsville', 'Newport News', 'Norfolk', 'Norton', 'Petersburg', 'Portsmouth', 'Pulaski', 'Radford', 'Richmond', 'Roanoke', 'Salem', 'Staunton', 'Suffolk', 'Virginia Beach', 'Waynesboro', 'Williamsburg', 'Winchester', 'Wytheville'
  ],
  'Washington': [
    'Aberdeen', 'Anacortes', 'Auburn', 'Bainbridge Island', 'Bellevue', 'Bellingham', 'Bothell', 'Bremerton', 'Burien', 'Centralia', 'Cheney', 'Colville', 'Des Moines', 'Edmonds', 'Ellensburg', 'Enumclaw', 'Everett', 'Federal Way', 'Ferndale', 'Gig Harbor', 'Issaquah', 'Kennewick', 'Kent', 'Kirkland', 'Lacey', 'Lake Stevens', 'Lakewood', 'Longview', 'Lynden', 'Lynnwood', 'Marysville', 'Moses Lake', 'Mount Vernon', 'Mukilteo', 'Oak Harbor', 'Olympia', 'Omak', 'Pasco', 'Port Angeles', 'Port Orchard', 'Pullman', 'Puyallup', 'Redmond', 'Renton', 'Richland', 'Seattle', 'Sequim', 'Shelton', 'Shoreline', 'Spokane', 'Spokane Valley', 'Sumner', 'Tacoma', 'Tukwila', 'Tumwater', 'University Place', 'Vancouver', 'Walla Walla', 'Wenatchee', 'Yakima'
  ],
  'Washington DC': [
    'Adams Morgan', 'Capitol Hill', 'Downtown DC', 'Dupont Circle', 'Georgetown', 'Logan Circle', 'Navy Yard', 'Shaw', 'Washington'
  ],
  'West Virginia': [
    'Beckley', 'Bluefield', 'Bridgeport', 'Buckhannon', 'Charles Town', 'Charleston', 'Clarksburg', 'Elkins', 'Fairmont', 'Grafton', 'Huntington', 'Keyser', 'Lewisburg', 'Logan', 'Martinsburg', 'Morgantown', 'Moundsville', 'New Martinsville', 'Nitro', 'Oak Hill', 'Parkersburg', 'Philippi', 'Point Pleasant', 'Princeton', 'Ripley', 'Romney', 'Shepherdstown', 'South Charleston', 'Spencer', 'St. Albans', 'Summersville', 'Weirton', 'Welch', 'Wellsburg', 'Weston', 'Wheeling', 'White Sulphur Springs', 'Williamson'
  ],
  'Wisconsin': [
    'Appleton', 'Ashland', 'Baraboo', 'Beaver Dam', 'Beloit', 'Brookfield', 'Cedarburg', 'Chippewa Falls', 'Cudahy', 'De Pere', 'Eau Claire', 'Fond du Lac', 'Fort Atkinson', 'Green Bay', 'Greenfield', 'Janesville', 'Jefferson', 'Kenosha', 'La Crosse', 'Lake Geneva', 'Madison', 'Manitowoc', 'Marinette', 'Marshfield', 'Menasha', 'Menomonee Falls', 'Middleton', 'Milwaukee', 'Monroe', 'Neenah', 'New Berlin', 'Oconomowoc', 'Oshkosh', 'Pewaukee', 'Platteville', 'Port Washington', 'Prairie du Chien', 'Racine', 'Rhinelander', 'Ripon', 'Sheboygan', 'Stevens Point', 'Sturgeon Bay', 'Sun Prairie', 'Superior', 'Two Rivers', 'Waukesha', 'Waupaca', 'Wausau', 'West Allis', 'West Bend', 'Whitewater', 'Wisconsin Rapids'
  ],
  'Wyoming': [
    'Buffalo', 'Casper', 'Cheyenne', 'Cody', 'Douglas', 'Evanston', 'Gillette', 'Green River', 'Jackson', 'Lander', 'Laramie', 'Powell', 'Rawlins', 'Riverton', 'Rock Springs', 'Sheridan', 'Torrington', 'Wheatland', 'Worland'
  ]
};

// Read the current states.ts file
const statesFile = fs.readFileSync('./src/data/states.ts', 'utf8');

// Function to convert city name to slug
function cityToSlug(cityName, stateName) {
  return cityName.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/'/g, '')
    + '-' + stateName.toLowerCase().replace(/\s+/g, '-');
}

// Parse and update states
let updatedStatesFile = statesFile;

for (const [stateName, cities] of Object.entries(additionalCities)) {
  // Find the state block
  const statePattern = new RegExp(`(\\{\\s*name:\\s*'${stateName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',\\s*slug:\\s*'[^']+',\\s*cities:\\s*\\[)([\\s\\S]*?)(\\]\\s*[,}])`, 'g');
  
  updatedStatesFile = updatedStatesFile.replace(statePattern, (match, prefix, citiesContent, suffix) => {
    // Check if cities already exist
    const existingCitySlugs = new Set();
    const cityMatches = citiesContent.matchAll(/\{\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)'\s*\}/g);
    for (const cityMatch of cityMatches) {
      existingCitySlugs.add(cityMatch[2]);
    }
    
    // Add new cities
    const newCities = [];
    for (const cityName of cities) {
      const slug = cityToSlug(cityName, stateName);
      if (!existingCitySlugs.has(slug)) {
        newCities.push(`      { name: '${cityName}', slug: '${slug}' }`);
      }
    }
    
    if (newCities.length > 0) {
      // Add new cities before the closing bracket
      const lastComma = citiesContent.lastIndexOf(',');
      const insertPoint = lastComma > -1 ? lastComma + 1 : citiesContent.length;
      const before = citiesContent.substring(0, insertPoint);
      const after = citiesContent.substring(insertPoint);
      
      return prefix + before + (before.trim() ? ',\n' : '') + newCities.join(',\n') + after + suffix;
    }
    
    return match;
  });
}

// Write the updated file
fs.writeFileSync('./src/data/states.ts', updatedStatesFile, 'utf8');

console.log('✅ Added additional cities to states.ts');
console.log('Now running the page creation script...\n');

// Run the page creation script
const { execSync } = require('child_process');
try {
  execSync('node scripts/create_1000_how_to_start_pages.js', { stdio: 'inherit' });
} catch (error) {
  console.error('Error running page creation script:', error.message);
}


