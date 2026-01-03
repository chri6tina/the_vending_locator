const fs = require('fs');
const path = require('path');

// Comprehensive list of US cities by state - focusing on cities with 20K+ population
const cityLists = {
  'Alabama': ['Athens', 'Bessemer', 'Enterprise', 'Homewood', 'Hoover', 'Madison', 'Opelika', 'Prattville', 'Prichard', 'Selma', 'Trussville', 'Vestavia Hills'],
  'Alaska': ['Anchorage', 'Fairbanks', 'Juneau', 'Wasilla'],
  'Arizona': ['Apache Junction', 'Avondale', 'Buckeye', 'Bullhead City', 'Casa Grande', 'Chandler', 'Flagstaff', 'Glendale', 'Goodyear', 'Kingman', 'Lake Havasu City', 'Maricopa', 'Mesa', 'Oro Valley', 'Peoria', 'Phoenix', 'Prescott', 'Prescott Valley', 'Queen Creek', 'Scottsdale', 'Sierra Vista', 'Surprise', 'Tempe', 'Tucson', 'Yuma'],
  'Arkansas': ['Bentonville', 'Conway', 'Fayetteville', 'Fort Smith', 'Hot Springs', 'Jonesboro', 'Little Rock', 'North Little Rock', 'Pine Bluff', 'Rogers', 'Springdale', 'Texarkana'],
  'California': ['Adelanto', 'Agoura Hills', 'Alameda', 'Albany', 'Alhambra', 'Aliso Viejo', 'Altadena', 'Anaheim', 'Antioch', 'Apple Valley', 'Arcadia', 'Arvin', 'Atascadero', 'Azusa', 'Bakersfield', 'Banning', 'Barstow', 'Beaumont', 'Bell Gardens', 'Bellflower', 'Belmont', 'Benicia', 'Berkeley', 'Beverly Hills', 'Brawley', 'Brea', 'Buena Park', 'Burbank', 'Calexico', 'Calimesa', 'Camarillo', 'Campbell', 'Capitola', 'Carlsbad', 'Carmel', 'Carson', 'Castro Valley', 'Cathedral City', 'Ceres', 'Cerritos', 'Chico', 'Chino', 'Chino Hills', 'Chula Vista', 'Citrus Heights', 'Claremont', 'Clayton', 'Clovis', 'Coachella', 'Colton', 'Compton', 'Concord', 'Corona', 'Coronado', 'Corte Madera', 'Costa Mesa', 'Covina', 'Cudahy', 'Culver City', 'Cupertino', 'Cypress', 'Daly City', 'Danville', 'Davis', 'Delano', 'Diamond Bar', 'Dinuba', 'Dixon', 'Downey', 'Dublin', 'East Palo Alto', 'El Cajon', 'El Centro', 'El Cerrito', 'El Monte', 'El Segundo', 'Elk Grove', 'Emeryville', 'Encinitas', 'Escondido', 'Fairfield', 'Folsom', 'Fontana', 'Foster City', 'Fremont', 'Fresno', 'Fullerton', 'Garden Grove', 'Gardena', 'Gilroy', 'Glendora', 'Goleta', 'Greenfield', 'Half Moon Bay', 'Hanford', 'Hawthorne', 'Hayward', 'Hemet', 'Hercules', 'Hesperia', 'Huntington Beach', 'Huntington Park', 'Imperial Beach', 'Indio', 'Inglewood', 'Irvine', 'La Canada Flintridge', 'La Habra', 'La Mesa', 'La Mirada', 'La Puente', 'La Quinta', 'Laguna Beach', 'Laguna Hills', 'Laguna Niguel', 'Lake Elsinore', 'Lake Forest', 'Lakewood', 'Larkspur', 'Lemon Grove', 'Livermore', 'Lodi', 'Lomita', 'Long Beach', 'Los Altos', 'Los Angeles', 'Los Gatos', 'Lynwood', 'Madera', 'Manhattan Beach', 'Menifee', 'Mill Valley', 'Millbrae', 'Modesto', 'Monrovia', 'Montclair', 'Monterey', 'Monterey Park', 'Morgan Hill', 'Mountain View', 'Napa', 'National City', 'Newark', 'Newport Beach', 'Norwalk', 'Novato', 'Oakland', 'Oceanside', 'Ontario', 'Orange', 'Oxnard', 'Pacifica', 'Palm Springs', 'Palmdale', 'Palo Alto', 'Palos Verdes Estates', 'Paramount', 'Pasadena', 'Petaluma', 'Pico Rivera', 'Pittsburg', 'Placentia', 'Pleasanton', 'Pomona', 'Port Hueneme', 'Poway', 'Rancho Cordova', 'Rancho Cucamonga', 'Rancho Palos Verdes', 'Redding', 'Redondo Beach', 'Redwood City', 'Reedley', 'Ridgecrest', 'Rio Vista', 'Riverside', 'Rohnert Park', 'Rosemead', 'Roseville', 'Sacramento', 'Salinas', 'San Bernardino', 'San Bruno', 'San Carlos', 'San Diego', 'San Fernando', 'San Francisco', 'San Gabriel', 'San Jacinto', 'San Jose', 'San Leandro', 'San Luis Obispo', 'San Mateo', 'San Pablo', 'San Rafael', 'San Ramon', 'Santa Ana', 'Santa Barbara', 'Santa Clara', 'Santa Clarita', 'Santa Cruz', 'Santa Maria', 'Santa Monica', 'Santa Rosa', 'Santee', 'Saratoga', 'Seal Beach', 'Simi Valley', 'Solana Beach', 'Sonoma', 'South Gate', 'South San Francisco', 'Stockton', 'Sunnyvale', 'Temecula', 'Thousand Oaks', 'Torrance', 'Tracy', 'Tulare', 'Turlock', 'Tustin', 'Union City', 'Upland', 'Vacaville', 'Vallejo', 'Ventura', 'Victorville', 'Visalia', 'Vista', 'Walnut Creek', 'Watsonville', 'West Covina', 'West Hollywood', 'West Sacramento', 'Westminster', 'Whittier', 'Woodland', 'Yorba Linda', 'Yuba City', 'Yucaipa'],
  'Colorado': ['Arvada', 'Aspen', 'Aurora', 'Boulder', 'Broomfield', 'Castle Rock', 'Colorado Springs', 'Commerce City', 'Denver', 'Durango', 'Englewood', 'Fort Collins', 'Glenwood Springs', 'Grand Junction', 'Greeley', 'Lakewood', 'Littleton', 'Longmont', 'Loveland', 'Montrose', 'Parker', 'Pueblo', 'Thornton', 'Westminster'],
  'Connecticut': ['Bridgeport', 'Bristol', 'Danbury', 'Hartford', 'Manchester', 'Middletown', 'Milford', 'New Britain', 'New Haven', 'Norwalk', 'Norwich', 'Stamford', 'Waterbury', 'West Haven'],
  'Delaware': ['Dover', 'Newark', 'Wilmington'],
  'Florida': ['Altamonte Springs', 'Apopka', 'Boca Raton', 'Bradenton', 'Cape Coral', 'Casselberry', 'Clearwater', 'Clermont', 'Cocoa', 'Coral Gables', 'Coral Springs', 'Crestview', 'Cutler Bay', 'Dania Beach', 'Davie', 'Daytona Beach', 'Deerfield Beach', 'Deland', 'Delray Beach', 'Deltona', 'Doral', 'Dunedin', 'Edgewater', 'Englewood', 'Eustis', 'Fernandina Beach', 'Fort Lauderdale', 'Fort Myers', 'Fort Pierce', 'Fort Walton Beach', 'Gainesville', 'Greenacres', 'Gulf Breeze', 'Haines City', 'Hallandale Beach', 'Hialeah', 'Hollywood', 'Homestead', 'Hudson', 'Immokalee', 'Jacksonville', 'Jacksonville Beach', 'Jupiter', 'Key West', 'Kissimmee', 'Lady Lake', 'Lake City', 'Lake Mary', 'Lake Worth', 'Lakeland', 'Largo', 'Lauderhill', 'Leesburg', 'Lighthouse Point', 'Live Oak', 'Longwood', 'Lutz', 'Lynn Haven', 'Macclenny', 'Madeira Beach', 'Maitland', 'Marco Island', 'Melbourne', 'Merritt Island', 'Miami', 'Miami Beach', 'Miami Gardens', 'Milton', 'Minneola', 'Miramar', 'Mount Dora', 'Naples', 'New Port Richey', 'New Smyrna Beach', 'Niceville', 'North Miami', 'North Port', 'Ocala', 'Ocoee', 'Orange Park', 'Orlando', 'Ormond Beach', 'Oviedo', 'Palm Bay', 'Palm Beach Gardens', 'Palm Coast', 'Palmetto Bay', 'Panama City', 'Panama City Beach', 'Pembroke Pines', 'Pensacola', 'Plant City', 'Pompano Beach', 'Port Charlotte', 'Port Orange', 'Port St. Lucie', 'Punta Gorda', 'Riviera Beach', 'Rockledge', 'Royal Palm Beach', 'Sanford', 'Sarasota', 'Satellite Beach', 'Sebastian', 'Sebring', 'Seminole', 'St. Augustine', 'St. Cloud', 'St. Petersburg', 'Stuart', 'Sunrise', 'Tallahassee', 'Tampa', 'Tarpon Springs', 'Tavares', 'Titusville', 'Venice', 'Vero Beach', 'Wellington', 'West Palm Beach', 'Winter Garden', 'Winter Haven', 'Winter Park', 'Winter Springs', 'Zephyrhills'],
  'Georgia': ['Albany', 'Alpharetta', 'Americus', 'Athens', 'Atlanta', 'Augusta', 'Brunswick', 'Carrollton', 'Columbus', 'Dalton', 'Decatur', 'Douglas', 'Dublin', 'Gainesville', 'Griffin', 'LaGrange', 'Macon', 'Marietta', 'Milledgeville', 'Newnan', 'Rome', 'Roswell', 'Savannah', 'Smyrna', 'Statesboro', 'Thomasville', 'Valdosta', 'Warner Robins', 'Waycross'],
  'Idaho': ['Boise', 'Caldwell', 'Coeur d\'Alene', 'Idaho Falls', 'Lewiston', 'Meridian', 'Nampa', 'Pocatello', 'Twin Falls'],
  'Illinois': ['Aurora', 'Belleville', 'Berwyn', 'Bloomington', 'Bolingbrook', 'Buffalo Grove', 'Canton', 'Carbondale', 'Carol Stream', 'Carpentersville', 'Champaign', 'Chicago', 'Crystal Lake', 'Danville', 'Decatur', 'DeKalb', 'Des Plaines', 'Elgin', 'Elmhurst', 'Evanston', 'Freeport', 'Galesburg', 'Glenview', 'Gurnee', 'Hanover Park', 'Harvey', 'Highland Park', 'Hoffman Estates', 'Joliet', 'Kankakee', 'Mount Prospect', 'Naperville', 'Normal', 'Oak Lawn', 'Oak Park', 'Orland Park', 'Palatine', 'Peoria', 'Rockford', 'Schaumburg', 'Skokie', 'Springfield', 'Tinley Park', 'Waukegan', 'Wheaton'],
  'Indiana': ['Anderson', 'Bloomington', 'Carmel', 'Elkhart', 'Evansville', 'Fort Wayne', 'Gary', 'Hammond', 'Indianapolis', 'Kokomo', 'Lafayette', 'Muncie', 'South Bend', 'Terre Haute'],
  'Iowa': ['Ames', 'Cedar Falls', 'Cedar Rapids', 'Council Bluffs', 'Davenport', 'Des Moines', 'Dubuque', 'Iowa City', 'Sioux City', 'Waterloo', 'West Des Moines'],
  'Kansas': ['Hutchinson', 'Kansas City', 'Lawrence', 'Lenexa', 'Manhattan', 'Olathe', 'Overland Park', 'Salina', 'Shawnee', 'Topeka', 'Wichita'],
  'Kentucky': ['Bowling Green', 'Covington', 'Frankfort', 'Hopkinsville', 'Lexington', 'Louisville', 'Owensboro', 'Paducah', 'Richmond'],
  'Louisiana': ['Alexandria', 'Baton Rouge', 'Bossier City', 'Gretna', 'Houma', 'Kenner', 'Lafayette', 'Lake Charles', 'Laplace', 'Marrero', 'Metairie', 'Monroe', 'New Orleans', 'Shreveport', 'Slidell'],
  'Maine': ['Auburn', 'Bangor', 'Biddeford', 'Lewiston', 'Portland', 'South Portland'],
  'Maryland': ['Annapolis', 'Baltimore', 'Bethesda', 'Bowie', 'College Park', 'Columbia', 'Frederick', 'Gaithersburg', 'Germantown', 'Hagerstown', 'Laurel', 'Rockville', 'Salisbury', 'Silver Spring', 'Towson', 'Westminster'],
  'Massachusetts': ['Boston', 'Brockton', 'Cambridge', 'Fall River', 'Framingham', 'Lowell', 'Lynn', 'New Bedford', 'Newton', 'Peabody', 'Pittsfield', 'Quincy', 'Somerville', 'Springfield', 'Worcester'],
  'Michigan': ['Ann Arbor', 'Battle Creek', 'Bay City', 'Benton Harbor', 'Bloomfield Hills', 'Canton', 'Dearborn', 'Detroit', 'East Lansing', 'Farmington Hills', 'Flint', 'Grand Rapids', 'Kalamazoo', 'Lansing', 'Livonia', 'Macomb', 'Madison Heights', 'Marquette', 'Midland', 'Muskegon', 'Novi', 'Oak Park', 'Portage', 'Rochester Hills', 'Royal Oak', 'Saginaw', 'Southfield', 'St. Clair Shores', 'Sterling Heights', 'Taylor', 'Troy', 'Warren', 'Westland', 'Wyoming'],
  'Minnesota': ['Bloomington', 'Brooklyn Park', 'Burnsville', 'Duluth', 'Eagan', 'Edina', 'Maple Grove', 'Minneapolis', 'Minnetonka', 'Moorhead', 'Plymouth', 'Rochester', 'St. Cloud', 'St. Paul', 'Woodbury'],
  'Mississippi': ['Biloxi', 'Gulfport', 'Hattiesburg', 'Jackson', 'Meridian', 'Southaven', 'Tupelo'],
  'Missouri': ['Blue Springs', 'Columbia', 'Independence', 'Jefferson City', 'Joplin', 'Kansas City', 'Lee\'s Summit', 'O\'Fallon', 'Springfield', 'St. Charles', 'St. Joseph', 'St. Louis', 'St. Peters', 'Warrensburg'],
  'Montana': ['Billings', 'Bozeman', 'Great Falls', 'Helena', 'Kalispell', 'Missoula'],
  'Nebraska': ['Bellevue', 'Grand Island', 'Lincoln', 'Norfolk', 'Omaha'],
  'Nevada': ['Boulder City', 'Carson City', 'Elko', 'Henderson', 'Las Vegas', 'Mesquite', 'North Las Vegas', 'Reno', 'Sparks', 'Winnemucca'],
  'New Hampshire': ['Concord', 'Derry', 'Dover', 'Keene', 'Manchester', 'Nashua', 'Portsmouth', 'Rochester'],
  'New Jersey': ['Bayonne', 'Camden', 'Cherry Hill', 'Clifton', 'East Orange', 'Edison', 'Elizabeth', 'Hackensack', 'Hoboken', 'Jersey City', 'Newark', 'New Brunswick', 'Paramus', 'Paterson', 'Perth Amboy', 'Plainfield', 'Trenton', 'Union City', 'Vineland', 'West New York'],
  'New Mexico': ['Albuquerque', 'Carlsbad', 'Clovis', 'Farmington', 'Hobbs', 'Las Cruces', 'Rio Rancho', 'Roswell', 'Santa Fe'],
  'New York': ['Albany', 'Amherst', 'Auburn', 'Batavia', 'Binghamton', 'Buffalo', 'Canandaigua', 'Cortland', 'Elmira', 'Geneva', 'Glens Falls', 'Gloversville', 'Hornell', 'Ithaca', 'Jamestown', 'Kingston', 'Lockport', 'Mount Vernon', 'New Rochelle', 'Newburgh', 'Niagara Falls', 'Ogdensburg', 'Olean', 'Oneonta', 'Oswego', 'Peekskill', 'Plattsburgh', 'Poughkeepsie', 'Rochester', 'Rome', 'Saratoga Springs', 'Schenectady', 'Syracuse', 'Tonawanda', 'Troy', 'Utica', 'Watertown', 'White Plains', 'Yonkers'],
  'North Carolina': ['Asheville', 'Burlington', 'Cary', 'Chapel Hill', 'Charlotte', 'Concord', 'Durham', 'Fayetteville', 'Gastonia', 'Goldsboro', 'Greensboro', 'Greenville', 'Hickory', 'High Point', 'Jacksonville', 'Kannapolis', 'Lumberton', 'Monroe', 'Raleigh', 'Rocky Mount', 'Salisbury', 'Shelby', 'Statesville', 'Thomasville', 'Wilmington', 'Wilson', 'Winston-Salem'],
  'North Dakota': ['Bismarck', 'Fargo', 'Grand Forks', 'Minot'],
  'Ohio': ['Akron', 'Alliance', 'Ashtabula', 'Athens', 'Barberton', 'Beavercreek', 'Bellefontaine', 'Bowling Green', 'Canton', 'Centerville', 'Chillicothe', 'Cincinnati', 'Cleveland', 'Columbus', 'Cuyahoga Falls', 'Dayton', 'Delaware', 'Elyria', 'Fairborn', 'Findlay', 'Gahanna', 'Grove City', 'Hamilton', 'Hilliard', 'Huber Heights', 'Kettering', 'Lancaster', 'Lima', 'Lorain', 'Mansfield', 'Marion', 'Massillon', 'Mentor', 'Middletown', 'Newark', 'Niles', 'Norwood', 'Parma', 'Piqua', 'Reynoldsburg', 'Sandusky', 'Springfield', 'Steubenville', 'Stow', 'Strongsville', 'Toledo', 'Troy', 'Upper Arlington', 'Wadsworth', 'Warren', 'Westerville', 'Westlake', 'Worthington', 'Youngstown', 'Zanesville'],
  'Oklahoma': ['Broken Arrow', 'Edmond', 'Lawton', 'Midwest City', 'Moore', 'Norman', 'Oklahoma City', 'Stillwater', 'Tulsa'],
  'Oregon': ['Albany', 'Ashland', 'Beaverton', 'Bend', 'Corvallis', 'Eugene', 'Gresham', 'Hillsboro', 'Klamath Falls', 'Medford', 'Oregon City', 'Portland', 'Roseburg', 'Salem', 'Springfield', 'The Dalles', 'Tigard'],
  'Pennsylvania': ['Allentown', 'Altoona', 'Bethlehem', 'Butler', 'Chambersburg', 'Chester', 'Coatesville', 'Columbia', 'Corry', 'DuBois', 'Easton', 'Erie', 'Gettysburg', 'Greensburg', 'Harrisburg', 'Hazleton', 'Johnstown', 'Lancaster', 'Lebanon', 'Lewisburg', 'McKeesport', 'Monroeville', 'New Castle', 'Norristown', 'Oil City', 'Philadelphia', 'Pittsburgh', 'Pottstown', 'Reading', 'Scranton', 'State College', 'West Chester', 'Williamsport', 'Wilkes-Barre', 'York'],
  'Rhode Island': ['Cranston', 'East Providence', 'Newport', 'Pawtucket', 'Providence', 'Warwick', 'Woonsocket'],
  'South Carolina': ['Anderson', 'Charleston', 'Columbia', 'Florence', 'Greenville', 'Hilton Head Island', 'Mount Pleasant', 'Myrtle Beach', 'North Charleston', 'Rock Hill', 'Spartanburg', 'Summerville', 'Sumter'],
  'South Dakota': ['Aberdeen', 'Pierre', 'Rapid City', 'Sioux Falls', 'Watertown'],
  'Tennessee': ['Bartlett', 'Brentwood', 'Chattanooga', 'Clarksville', 'Collierville', 'Franklin', 'Germantown', 'Jackson', 'Johnson City', 'Kingsport', 'Knoxville', 'Memphis', 'Murfreesboro', 'Nashville', 'Smyrna'],
  'Texas': ['Abilene', 'Allen', 'Amarillo', 'Arlington', 'Austin', 'Baytown', 'Beaumont', 'Bedford', 'Brownsville', 'Bryan', 'Burleson', 'Carrollton', 'Cedar Park', 'Cleburne', 'College Station', 'Conroe', 'Coppell', 'Corpus Christi', 'Corsicana', 'Dallas', 'Denton', 'DeSoto', 'Duncanville', 'Edinburg', 'El Paso', 'Euless', 'Farmers Branch', 'Flower Mound', 'Fort Worth', 'Friendswood', 'Frisco', 'Galveston', 'Garland', 'Georgetown', 'Grand Prairie', 'Grapevine', 'Greenville', 'Groves', 'Haltom City', 'Harlingen', 'Henderson', 'Hewitt', 'Hidalgo', 'Highland Village', 'Hillsboro', 'Houston', 'Humble', 'Huntsville', 'Hurst', 'Irving', 'Jacksonville', 'Katy', 'Keller', 'Killeen', 'Kingsville', 'Kyle', 'Lake Jackson', 'Laredo', 'League City', 'Lewisville', 'Little Elm', 'Longview', 'Lubbock', 'Lufkin', 'Mansfield', 'McAllen', 'McKinney', 'Mesquite', 'Midland', 'Mission', 'Missouri City', 'Mount Pleasant', 'Nacogdoches', 'New Braunfels', 'North Richland Hills', 'Odessa', 'Orange', 'Palestine', 'Pasadena', 'Pearland', 'Pflugerville', 'Pharr', 'Plainview', 'Plano', 'Port Arthur', 'Port Lavaca', 'Richardson', 'Rockwall', 'Rosenberg', 'Round Rock', 'Rowlett', 'San Angelo', 'San Antonio', 'San Marcos', 'Schertz', 'Seagoville', 'Seguin', 'Sherman', 'Snyder', 'Southlake', 'Sugar Land', 'Temple', 'Terrell', 'Texarkana', 'Texas City', 'The Colony', 'Tomball', 'Tyler', 'Universal City', 'Victoria', 'Waco', 'Waxahachie', 'Weatherford', 'Weslaco', 'Wichita Falls', 'Willis', 'Woodway'],
  'Utah': ['Layton', 'Ogden', 'Orem', 'Provo', 'Salt Lake City', 'Sandy', 'St. George', 'West Valley City'],
  'Vermont': ['Burlington', 'Essex', 'Montpelier', 'Rutland', 'South Burlington'],
  'Virginia': ['Alexandria', 'Arlington', 'Chesapeake', 'Hampton', 'Lynchburg', 'Newport News', 'Norfolk', 'Portsmouth', 'Richmond', 'Roanoke', 'Suffolk', 'Virginia Beach', 'Williamsburg'],
  'Washington': ['Aberdeen', 'Anacortes', 'Auburn', 'Bellingham', 'Bothell', 'Bremerton', 'Burien', 'Centralia', 'Cheney', 'Des Moines', 'Edmonds', 'Ellensburg', 'Enumclaw', 'Everett', 'Federal Way', 'Issaquah', 'Kennewick', 'Kent', 'Kirkland', 'Lacey', 'Lakewood', 'Longview', 'Marysville', 'Mount Vernon', 'Mukilteo', 'Oak Harbor', 'Olympia', 'Pasco', 'Pullman', 'Puyallup', 'Redmond', 'Renton', 'Richland', 'Sammamish', 'Seattle', 'Shoreline', 'Spokane', 'Spokane Valley', 'Tacoma', 'Tukwila', 'Tumwater', 'University Place', 'Vancouver', 'Walla Walla', 'Wenatchee', 'Yakima'],
  'West Virginia': ['Charleston', 'Huntington', 'Martinsburg', 'Morgantown', 'Parkersburg', 'Weirton', 'Wheeling'],
  'Wisconsin': ['Appleton', 'Eau Claire', 'Fond du Lac', 'Green Bay', 'Janesville', 'Kenosha', 'La Crosse', 'Madison', 'Milwaukee', 'Oshkosh', 'Racine', 'Sheboygan', 'Waukesha', 'Wausau'],
  'Wyoming': ['Casper', 'Cheyenne', 'Gillette', 'Laramie', 'Rock Springs']
};

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

// Generate all possible city slugs
const allCities = [];
for (const [state, cities] of Object.entries(cityLists)) {
  for (const city of cities) {
    const slug = `${city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${state.toLowerCase().replace(/\s+/g, '-')}`;
    allCities.push({
      name: city,
      state: state,
      slug: slug
    });
  }
}

// Filter to only cities that don't exist
const citiesToCreate = allCities.filter(city => !existingPages.has(city.slug));
console.log(`Found ${citiesToCreate.length} cities to create from ${allCities.length} total`);

// Take first 500
const finalCities = citiesToCreate.slice(0, 500);
console.log(`\nSelected ${finalCities.length} cities to create`);

// Display first 20
console.log('\nFirst 20 cities:');
finalCities.slice(0, 20).forEach((city, idx) => {
  console.log(`${idx + 1}. ${city.name}, ${city.state} (${city.slug})`);
});

// Save list
fs.writeFileSync('next_500_cities.json', JSON.stringify(finalCities, null, 2));
console.log(`\nSaved ${finalCities.length} cities to next_500_cities.json`);
