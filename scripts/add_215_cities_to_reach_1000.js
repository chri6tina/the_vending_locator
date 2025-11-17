const fs = require('fs');
const path = require('path');

// Additional cities to add (215 cities to reach 1000 total)
// These are cities with 50K+ population not yet in states.ts
const additionalCities = {
  'Alabama': ['Prattville', 'Opelika', 'Bessemer', 'Prichard', 'Gadsden'],
  'Arizona': ['Apache Junction', 'Bullhead City', 'Lake Havasu City', 'Nogales', 'Sahuarita'],
  'Arkansas': ['Texarkana', 'West Memphis', 'Paragould', 'Cabot', 'Searcy'],
  'California': ['Baldwin Park', 'Bellflower', 'Citrus Heights', 'Compton', 'Cypress', 'Diamond Bar', 'East Los Angeles', 'El Centro', 'Hanford', 'Hemet', 'Hesperia', 'Indio', 'La Habra', 'La Mesa', 'La Puente', 'Lodi', 'Madera', 'Menifee', 'Monterey Park', 'National City', 'Petaluma', 'Redwood City', 'San Leandro', 'San Rafael', 'Santa Monica', 'Tulare', 'Turlock', 'Union City', 'Watsonville', 'Westminster'],
  'Colorado': ['Broomfield', 'Castle Rock', 'Commerce City', 'Loveland', 'Parker'],
  'Connecticut': ['Bristol', 'Enfield', 'Hamden', 'Meriden', 'West Haven'],
  'Florida': ['Aventura', 'Casselberry', 'Coral Gables', 'Deerfield Beach', 'Dunedin', 'Edgewater', 'Fort Pierce', 'Greenacres', 'Hialeah Gardens', 'Hollywood', 'Key West', 'Kissimmee', 'Lake Worth', 'Lakeland', 'Largo', 'Lehigh Acres', 'Margate', 'Melbourne', 'Miami Beach', 'Miami Gardens', 'Naples', 'North Miami', 'Ocala', 'Orange Park', 'Orlando', 'Palm Beach Gardens', 'Palm Harbor', 'Panama City', 'Pensacola', 'Plant City', 'Port Orange', 'Port St. Lucie', 'Royal Palm Beach', 'Sanford', 'Sarasota', 'Sebastian', 'St. Petersburg', 'Stuart', 'Tallahassee', 'Tampa', 'Tarpon Springs', 'Titusville', 'Venice', 'Wellington', 'West Palm Beach', 'Winter Haven', 'Winter Park', 'Winter Springs'],
  'Georgia': ['Albany', 'Alpharetta', 'Americus', 'Athens', 'Augusta', 'Brunswick', 'Columbus', 'Dalton', 'Douglas', 'Douglasville', 'Dublin', 'Gainesville', 'Griffin', 'Kennesaw', 'LaGrange', 'Macon', 'Marietta', 'Milledgeville', 'Newnan', 'Rome', 'Roswell', 'Sandy Springs', 'Savannah', 'Smyrna', 'Statesboro', 'Thomasville', 'Valdosta', 'Warner Robins', 'Waycross'],
  'Idaho': ['Meridian', 'Nampa', 'Pocatello', 'Twin Falls'],
  'Illinois': ['Addison', 'Aurora', 'Bartlett', 'Berwyn', 'Bolingbrook', 'Buffalo Grove', 'Carpentersville', 'Crystal Lake', 'Des Plaines', 'Elgin', 'Elmhurst', 'Evanston', 'Hoffman Estates', 'Joliet', 'Mount Prospect', 'Naperville', 'Normal', 'Oak Lawn', 'Oak Park', 'Orland Park', 'Palatine', 'Park Ridge', 'Peoria', 'Rockford', 'Rolling Meadows', 'Schaumburg', 'Skokie', 'Tinley Park', 'Waukegan', 'Wheaton', 'Wheeling'],
  'Indiana': ['Anderson', 'Bloomington', 'Carmel', 'Elkhart', 'Evansville', 'Fort Wayne', 'Gary', 'Hammond', 'Indianapolis', 'Kokomo', 'Lafayette', 'Muncie', 'South Bend', 'Terre Haute'],
  'Iowa': ['Ames', 'Cedar Rapids', 'Council Bluffs', 'Davenport', 'Des Moines', 'Dubuque', 'Iowa City', 'Sioux City', 'Waterloo', 'West Des Moines'],
  'Kansas': ['Hutchinson', 'Lawrence', 'Lenexa', 'Manhattan', 'Olathe', 'Overland Park', 'Salina', 'Topeka', 'Wichita'],
  'Kentucky': ['Ashland', 'Bowling Green', 'Covington', 'Elizabethtown', 'Florence', 'Frankfort', 'Georgetown', 'Hopkinsville', 'Lexington', 'Louisville', 'Madisonville', 'Murray', 'Newport', 'Owensboro', 'Paducah', 'Richmond'],
  'Louisiana': ['Alexandria', 'Baton Rouge', 'Bossier City', 'Gretna', 'Hammond', 'Houma', 'Kenner', 'Lafayette', 'Lake Charles', 'Laplace', 'Marrero', 'Metairie', 'Monroe', 'New Orleans', 'Opelousas', 'Ruston', 'Shreveport', 'Slidell', 'Sulphur'],
  'Maine': ['Auburn', 'Biddeford', 'Lewiston', 'Portland', 'Saco', 'Sanford', 'Waterville'],
  'Maryland': ['Annapolis', 'Baltimore', 'Bethesda', 'Bowie', 'College Park', 'Columbia', 'Frederick', 'Gaithersburg', 'Germantown', 'Hagerstown', 'Laurel', 'Rockville', 'Salisbury', 'Silver Spring', 'Towson', 'Waldorf'],
  'Massachusetts': ['Brockton', 'Cambridge', 'Fall River', 'Framingham', 'Haverhill', 'Lowell', 'Lynn', 'Malden', 'Medford', 'New Bedford', 'Newton', 'Peabody', 'Pittsfield', 'Quincy', 'Revere', 'Somerville', 'Springfield', 'Taunton', 'Waltham', 'Worcester'],
  'Michigan': ['Ann Arbor', 'Battle Creek', 'Dearborn', 'Detroit', 'Farmington Hills', 'Flint', 'Grand Rapids', 'Jackson', 'Kalamazoo', 'Kentwood', 'Lansing', 'Livonia', 'Novi', 'Pontiac', 'Port Huron', 'Rochester Hills', 'Saginaw', 'Sterling Heights', 'Taylor', 'Troy', 'Warren', 'Westland', 'Wyoming'],
  'Minnesota': ['Bloomington', 'Brooklyn Park', 'Burnsville', 'Coon Rapids', 'Duluth', 'Eagan', 'Eden Prairie', 'Lakeville', 'Maple Grove', 'Minneapolis', 'Moorhead', 'Plymouth', 'Rochester', 'Saint Cloud', 'Saint Paul', 'Woodbury'],
  'Mississippi': ['Biloxi', 'Columbus', 'Gulfport', 'Hattiesburg', 'Jackson', 'Meridian', 'Natchez', 'Oxford', 'Southaven', 'Starkville', 'Tupelo', 'Vicksburg'],
  'Missouri': ['Blue Springs', 'Cape Girardeau', 'Columbia', 'Florissant', 'Independence', 'Joplin', 'Kansas City', 'Lee\'s Summit', 'O\'Fallon', 'Saint Charles', 'Saint Joseph', 'Saint Louis', 'Saint Peters', 'Springfield'],
  'Montana': ['Billings', 'Bozeman', 'Butte', 'Great Falls', 'Helena', 'Kalispell', 'Missoula'],
  'Nebraska': ['Bellevue', 'Fremont', 'Grand Island', 'Hastings', 'Kearney', 'Lincoln', 'Norfolk', 'North Platte', 'Omaha'],
  'Nevada': ['Boulder City', 'Carson City', 'Elko', 'Enterprise', 'Fallon', 'Fernley', 'Henderson', 'Las Vegas', 'Mesquite', 'North Las Vegas', 'Pahrump', 'Reno', 'Sparks'],
  'New Hampshire': ['Concord', 'Derry', 'Dover', 'Manchester', 'Merrimack', 'Nashua', 'Portsmouth', 'Rochester', 'Salem'],
  'New Jersey': ['Bayonne', 'Camden', 'Cherry Hill', 'Clifton', 'East Orange', 'Edison', 'Elizabeth', 'Hackensack', 'Hoboken', 'Jersey City', 'Kearny', 'New Brunswick', 'Newark', 'Passaic', 'Paterson', 'Perth Amboy', 'Plainfield', 'Sayreville', 'Trenton', 'Union City', 'Vineland', 'West New York', 'Woodbridge'],
  'New Mexico': ['Albuquerque', 'Carlsbad', 'Clovis', 'Farmington', 'Gallup', 'Hobbs', 'Las Cruces', 'Rio Rancho', 'Roswell', 'Santa Fe'],
  'New York': ['Albany', 'Amherst', 'Binghamton', 'Buffalo', 'Ithaca', 'Mount Vernon', 'New Rochelle', 'New York', 'Niagara Falls', 'Poughkeepsie', 'Rochester', 'Rome', 'Schenectady', 'Syracuse', 'Troy', 'Utica', 'Watertown', 'White Plains', 'Yonkers'],
  'North Carolina': ['Asheville', 'Burlington', 'Cary', 'Chapel Hill', 'Charlotte', 'Concord', 'Durham', 'Fayetteville', 'Gastonia', 'Greensboro', 'Greenville', 'Hickory', 'High Point', 'Jacksonville', 'Kannapolis', 'Raleigh', 'Rocky Mount', 'Salisbury', 'Wilmington', 'Wilson', 'Winston-Salem'],
  'North Dakota': ['Bismarck', 'Dickinson', 'Fargo', 'Grand Forks', 'Jamestown', 'Minot', 'Wahpeton', 'Williston'],
  'Ohio': ['Akron', 'Canton', 'Cincinnati', 'Cleveland', 'Columbus', 'Dayton', 'Elyria', 'Hamilton', 'Lima', 'Lorain', 'Mansfield', 'Middletown', 'Newark', 'Parma', 'Springfield', 'Toledo', 'Youngstown'],
  'Oklahoma': ['Broken Arrow', 'Edmond', 'Enid', 'Lawton', 'Midwest City', 'Moore', 'Norman', 'Oklahoma City', 'Stillwater', 'Tulsa'],
  'Oregon': ['Albany', 'Beaverton', 'Bend', 'Corvallis', 'Eugene', 'Gresham', 'Hillsboro', 'Keizer', 'Medford', 'Portland', 'Salem', 'Springfield', 'Tigard'],
  'Pennsylvania': ['Allentown', 'Bethlehem', 'Erie', 'Harrisburg', 'Lancaster', 'Philadelphia', 'Pittsburgh', 'Reading', 'Scranton', 'Wilkes-Barre', 'York'],
  'Rhode Island': ['Central Falls', 'Cranston', 'East Greenwich', 'East Providence', 'Newport', 'Pawtucket', 'Providence', 'Warwick', 'Woonsocket'],
  'South Carolina': ['Aiken', 'Anderson', 'Charleston', 'Columbia', 'Conway', 'Florence', 'Goose Creek', 'Greenville', 'Hilton Head Island', 'Myrtle Beach', 'North Charleston', 'Rock Hill', 'Spartanburg', 'Summerville'],
  'South Dakota': ['Aberdeen', 'Mitchell', 'Pierre', 'Rapid City', 'Sioux Falls', 'Watertown', 'Yankton'],
  'Tennessee': ['Bartlett', 'Brentwood', 'Chattanooga', 'Clarksville', 'Collierville', 'Franklin', 'Jackson', 'Johnson City', 'Kingsport', 'Knoxville', 'Memphis', 'Murfreesboro', 'Nashville'],
  'Texas': ['Abilene', 'Amarillo', 'Arlington', 'Austin', 'Beaumont', 'Brownsville', 'Carrollton', 'College Station', 'Conroe', 'Corpus Christi', 'Dallas', 'Denton', 'Edinburg', 'El Paso', 'Fort Worth', 'Frisco', 'Garland', 'Grand Prairie', 'Houston', 'Irving', 'Killeen', 'Laredo', 'League City', 'Lewisville', 'Longview', 'Lubbock', 'McAllen', 'McKinney', 'Mesquite', 'Midland', 'Odessa', 'Pasadena', 'Pearland', 'Plano', 'Richardson', 'Round Rock', 'San Antonio', 'San Angelo', 'Sugar Land', 'Temple', 'Tyler', 'Waco'],
  'Utah': ['Layton', 'Ogden', 'Orem', 'Provo', 'Salt Lake City', 'Sandy', 'St. George', 'Taylorsville', 'West Jordan', 'West Valley City'],
  'Vermont': ['Barre', 'Burlington', 'Essex Junction', 'Montpelier', 'Rutland', 'South Burlington', 'St. Albans'],
  'Virginia': ['Alexandria', 'Arlington', 'Chesapeake', 'Charlottesville', 'Hampton', 'Lynchburg', 'Newport News', 'Norfolk', 'Portsmouth', 'Richmond', 'Roanoke', 'Suffolk', 'Virginia Beach'],
  'Washington': ['Auburn', 'Bellevue', 'Bellingham', 'Bothell', 'Burien', 'Edmonds', 'Everett', 'Federal Way', 'Kennewick', 'Kent', 'Lakewood', 'Lynnwood', 'Marysville', 'Mount Vernon', 'Olympia', 'Pasco', 'Pullman', 'Redmond', 'Renton', 'Richland', 'Seattle', 'Shoreline', 'Spokane Valley', 'Tacoma', 'Vancouver', 'Wenatchee', 'Yakima'],
  'West Virginia': ['Charleston', 'Fairmont', 'Huntington', 'Martinsburg', 'Morgantown', 'Parkersburg', 'Wheeling'],
  'Wisconsin': ['Appleton', 'Eau Claire', 'Green Bay', 'Janesville', 'Kenosha', 'La Crosse', 'Madison', 'Milwaukee', 'Oshkosh', 'Racine', 'Sheboygan', 'Waukesha'],
  'Wyoming': ['Casper', 'Cheyenne', 'Evanston', 'Gillette', 'Laramie', 'Rock Springs', 'Sheridan'],
  // Additional cities to reach 1000
  'California': ['Alameda', 'Arcadia', 'Arvin', 'Atascadero', 'Azusa', 'Banning', 'Barstow', 'Beaumont', 'Bell Gardens', 'Brawley', 'Buena Park', 'Calexico', 'Calimesa', 'Camarillo', 'Ceres', 'Chino Hills', 'Coachella', 'Coronado', 'Cudahy', 'Culver City', 'Delano', 'Dinuba', 'El Cerrito', 'El Segundo', 'Emeryville', 'Encinitas', 'Folsom', 'Fountain Valley', 'Fremont', 'Glendora', 'Goleta', 'Hawaiian Gardens', 'Hawthorne', 'Hercules', 'Huntington Park', 'Imperial Beach', 'La Canada Flintridge', 'La Mirada', 'La Quinta', 'Laguna Beach', 'Laguna Hills', 'Laguna Niguel', 'Lake Elsinore', 'Larkspur', 'Lemon Grove', 'Lomita', 'Los Gatos', 'Lynwood', 'Manhattan Beach', 'Millbrae', 'Mill Valley', 'Monrovia', 'Montclair', 'Morgan Hill', 'Mountain View', 'Newark', 'Newport Beach', 'Oakdale', 'Oakland', 'Oceanside', 'Ontario', 'Orange', 'Pacifica', 'Palm Desert', 'Palm Springs', 'Palo Alto', 'Paramount', 'Pasadena', 'Petaluma', 'Pico Rivera', 'Pittsburg', 'Placentia', 'Pleasanton', 'Poway', 'Rancho Palos Verdes', 'Redondo Beach', 'Reedley', 'Rialto', 'Ridgecrest', 'Rio Vista', 'Rohnert Park', 'Rosemead', 'San Bruno', 'San Carlos', 'San Fernando', 'San Gabriel', 'San Jacinto', 'San Luis Obispo', 'San Pablo', 'San Ramon', 'Sanger', 'Santa Barbara', 'Santa Cruz', 'Santa Paula', 'Saratoga', 'Seal Beach', 'Selma', 'Signal Hill', 'Solana Beach', 'Soledad', 'Sonoma', 'South El Monte', 'South Pasadena', 'South San Francisco', 'Suisun City', 'Sunnyvale', 'Temecula', 'Temple City', 'Thousand Oaks', 'Tiburon', 'Torrance', 'Tracy', 'Turlock', 'Tustin', 'Ukiah', 'Union City', 'Upland', 'Ventura', 'Vista', 'Walnut', 'Walnut Creek', 'Wasco', 'Watsonville', 'West Covina', 'West Hollywood', 'Westminster', 'Wheatland', 'Willows', 'Windsor', 'Woodland', 'Yorba Linda', 'Yuba City', 'Yucaipa', 'Yucca Valley']
};

// Function to add cities to states.ts
function addCitiesToStates() {
  const statesFile = path.join(__dirname, '..', 'src', 'data', 'states.ts');
  let content = fs.readFileSync(statesFile, 'utf8');
  
  // Find each state and add cities
  Object.keys(additionalCities).forEach(stateName => {
    const stateRegex = new RegExp(`(name: '${stateName}',\\s+slug: '[^']+',\\s+cities: \\[)([^\\]]+)(\\])`, 's');
    const match = content.match(stateRegex);
    
    if (match) {
      const existingCities = match[2];
      const newCities = additionalCities[stateName]
        .map(city => {
          const slug = city.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '') + '-' + stateName.toLowerCase().replace(/\s+/g, '-');
          return `      { name: '${city}', slug: '${slug}' }`;
        })
        .join(',\n');
      
      // Check which cities don't already exist
      const citiesToAdd = additionalCities[stateName].filter(city => {
        const slug = city.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '') + '-' + stateName.toLowerCase().replace(/\s+/g, '-');
        return !existingCities.includes(slug);
      });
      
      if (citiesToAdd.length > 0) {
        const newCitiesList = citiesToAdd
          .map(city => {
            const slug = city.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '') + '-' + stateName.toLowerCase().replace(/\s+/g, '-');
            return `      { name: '${city}', slug: '${slug}' }`;
          })
          .join(',\n');
        
        content = content.replace(stateRegex, `$1$2,\n${newCitiesList}$3`);
        console.log(`Added ${citiesToAdd.length} cities to ${stateName}`);
      }
    }
  });
  
  fs.writeFileSync(statesFile, content, 'utf8');
  console.log('\nUpdated states.ts');
}

// Main function
function main() {
  console.log('Adding 215 cities to states.ts...\n');
  addCitiesToStates();
  console.log('\nDone! Now run: node scripts/find_and_create_missing_cities.js');
}

if (require.main === module) {
  main();
}

module.exports = { addCitiesToStates, additionalCities };

