const fs = require('fs');
const path = require('path');

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

// Read the template files
const templatePage = fs.readFileSync('src/app/vending-leads/longmont-colorado/page.tsx', 'utf8');
const templateClient = fs.readFileSync('src/app/vending-leads/longmont-colorado/pageClient.tsx', 'utf8');

// Comprehensive list of 500+ US cities (smaller cities, suburbs, towns)
// This is a curated list focusing on cities with business potential
const cityDatabase = `Alexander City,Alabama
Andalusia,Alabama
Anniston,Alabama
Atmore,Alabama
Bay Minette,Alabama
Brewton,Alabama
Cullman,Alabama
Demopolis,Alabama
Eufaula,Alabama
Fairhope,Alabama
Florence,Alabama
Fort Payne,Alabama
Greenville,Alabama
Guntersville,Alabama
Jasper,Alabama
Millbrook,Alabama
Muscle Shoals,Alabama
Northport,Alabama
Oxford,Alabama
Pell City,Alabama
Phenix City,Alabama
Scottsboro,Alabama
Sheffield,Alabama
Sylacauga,Alabama
Talladega,Alabama
Troy,Alabama
Tuscumbia,Alabama
Ketchikan,Alaska
Kodiak,Alaska
Palmer,Alaska
Sitka,Alaska
Bisbee,Arizona
Camp Verde,Arizona
Globe,Arizona
Page,Arizona
Show Low,Arizona
Somerton,Arizona
Window Rock,Arizona
Winslow,Arizona
Batesville,Arkansas
Benton,Arkansas
Blytheville,Arkansas
Camden,Arkansas
El Dorado,Arkansas
Forrest City,Arkansas
Harrison,Arkansas
Helena,Arkansas
Hope,Arkansas
Magnolia,Arkansas
Monticello,Arkansas
Mountain Home,Arkansas
Russellville,Arkansas
Siloam Springs,Arkansas
Van Buren,Arkansas
Arroyo Grande,California
Atherton,California
Atwater,California
Bell,California
Bishop,California
Burlingame,California
Carpinteria,California
Clearlake,California
Cloverdale,California
Colusa,California
Corcoran,California
Desert Hot Springs,California
Duarte,California
Eureka,California
Exeter,California
Farmersville,California
Fort Bragg,California
Galt,California
Gonzales,California
Grand Terrace,California
Grass Valley,California
Grover Beach,California
Healdsburg,California
Hermosa Beach,California
Highland,California
Hollister,California
Isleton,California
Jackson,California
La Verne,California
Lafayette,California
Lakeport,California
Lathrop,California
Lawndale,California
Lemoore,California
Lincoln,California
Lindsay,California
Livingston,California
Lompoc,California
Los Banos,California
Manteca,California
Marina,California
Martinez,California
Marysville,California
McFarland,California
Menlo Park,California
Merced,California
Milpitas,California
Montebello,California
Moorpark,California
Morro Bay,California
Mount Shasta,California
Needles,California
Newman,California
Norco,California
Oakley,California
Ojai,California
Orange Cove,California
Orinda,California
Orland,California
Oroville,California
Pacific Grove,California
Paradise,California
Paso Robles,California
Patterson,California
Perris,California
Piedmont,California
Pinole,California
Placerville,California
Pleasant Hill,California
Porterville,California
Rancho Mirage,California
Red Bluff,California
Redlands,California
Ripon,California
Riverbank,California
Rocklin,California
San Anselmo,California
San Clemente,California
San Dimas,California
San Juan Capistrano,California
Sausalito,California
Scotts Valley,California
Sebastopol,California
Shafter,California
Solvang,California
Sonora,California
South Lake Tahoe,California
St. Helena,California
Stanton,California
Susanville,California
Taft,California
Tehachapi,California
Truckee,California
Twentynine Palms,California
Waterford,California
Weed,California
Wildomar,California
Winters,California
Yreka,California
Aspen,Colorado
Durango,Colorado
Glenwood Springs,Colorado
Montrose,Colorado
Parker,Colorado
Bristol,Connecticut
Danbury,Connecticut
Manchester,Connecticut
Middletown,Connecticut
Milford,Connecticut
New Britain,Connecticut
Norwich,Connecticut
Stamford,Connecticut
Waterbury,Connecticut
West Haven,Connecticut
Dover,Delaware
Newark,Delaware
Altamonte Springs,Florida
Apopka,Florida
Casselberry,Florida
Clermont,Florida
Cocoa,Florida
Crestview,Florida
Cutler Bay,Florida
Dania Beach,Florida
Davie,Florida
Daytona Beach,Florida
Deerfield Beach,Florida
Deland,Florida
Delray Beach,Florida
Deltona,Florida
Dunedin,Florida
Edgewater,Florida
Englewood,Florida
Eustis,Florida
Fernandina Beach,Florida
Fort Pierce,Florida
Greenacres,Florida
Haines City,Florida
Hallandale Beach,Florida
Hudson,Florida
Immokalee,Florida
Jacksonville Beach,Florida
Lady Lake,Florida
Lake City,Florida
Lake Mary,Florida
Lake Worth,Florida
Lauderhill,Florida
Leesburg,Florida
Lighthouse Point,Florida
Live Oak,Florida
Longwood,Florida
Lutz,Florida
Lynn Haven,Florida
Macclenny,Florida
Madeira Beach,Florida
Maitland,Florida
Marco Island,Florida
Merritt Island,Florida
Miami Gardens,Florida
Milton,Florida
Minneola,Florida
Mount Dora,Florida
New Port Richey,Florida
New Smyrna Beach,Florida
Niceville,Florida
North Miami,Florida
Ocoee,Florida
Orange Park,Florida
Ormond Beach,Florida
Oviedo,Florida
Palm Beach Gardens,Florida
Palmetto Bay,Florida
Panama City Beach,Florida
Plant City,Florida
Port Charlotte,Florida
Port Orange,Florida
Punta Gorda,Florida
Riviera Beach,Florida
Rockledge,Florida
Royal Palm Beach,Florida
Satellite Beach,Florida
Sebastian,Florida
Sebring,Florida
Seminole,Florida
St. Cloud,Florida
Stuart,Florida
Tarpon Springs,Florida
Tavares,Florida
Titusville,Florida
Venice,Florida
Vero Beach,Florida
Wellington,Florida
Winter Garden,Florida
Winter Haven,Florida
Winter Springs,Florida
Zephyrhills,Florida
Albany,Georgia
Americus,Georgia
Brunswick,Georgia
Carrollton,Georgia
Dalton,Georgia
Douglas,Georgia
Dublin,Georgia
Griffin,Georgia
LaGrange,Georgia
Milledgeville,Georgia
Newnan,Georgia
Rome,Georgia
Statesboro,Georgia
Thomasville,Georgia
Valdosta,Georgia
Waycross,Georgia
Caldwell,Idaho
Coeur d'Alene,Idaho
Lewiston,Idaho
Pocatello,Idaho
Twin Falls,Idaho
Belleville,Illinois
Berwyn,Illinois
Bloomington,Illinois
Bolingbrook,Illinois
Buffalo Grove,Illinois
Canton,Illinois
Carbondale,Illinois
Carol Stream,Illinois
Carpentersville,Illinois
Crystal Lake,Illinois
Danville,Illinois
DeKalb,Illinois
Des Plaines,Illinois
Elmhurst,Illinois
Freeport,Illinois
Galesburg,Illinois
Glenview,Illinois
Gurnee,Illinois
Hanover Park,Illinois
Harvey,Illinois
Highland Park,Illinois
Hoffman Estates,Illinois
Kankakee,Illinois
Mount Prospect,Illinois
Normal,Illinois
Oak Lawn,Illinois
Oak Park,Illinois
Orland Park,Illinois
Palatine,Illinois
Schaumburg,Illinois
Skokie,Illinois
Tinley Park,Illinois
Waukegan,Illinois
Wheaton,Illinois
Anderson,Indiana
Elkhart,Indiana
Hammond,Indiana
Kokomo,Indiana
Lafayette,Indiana
Muncie,Indiana
Terre Haute,Indiana
Ames,Iowa
Cedar Falls,Iowa
Council Bluffs,Iowa
Dubuque,Iowa
Sioux City,Iowa
Waterloo,Iowa
West Des Moines,Iowa
Hutchinson,Kansas
Lenexa,Kansas
Manhattan,Kansas
Salina,Kansas
Shawnee,Kansas
Bowling Green,Kentucky
Covington,Kentucky
Frankfort,Kentucky
Hopkinsville,Kentucky
Owensboro,Kentucky
Paducah,Kentucky
Richmond,Kentucky
Alexandria,Louisiana
Bossier City,Louisiana
Gretna,Louisiana
Houma,Louisiana
Kenner,Louisiana
Laplace,Louisiana
Marrero,Louisiana
Metairie,Louisiana
Monroe,Louisiana
Slidell,Louisiana
Auburn,Maine
Bangor,Maine
Biddeford,Maine
Lewiston,Maine
South Portland,Maine
Annapolis,Maryland
Bethesda,Maryland
Bowie,Maryland
College Park,Maryland
Columbia,Maryland
Frederick,Maryland
Gaithersburg,Maryland
Germantown,Maryland
Hagerstown,Maryland
Laurel,Maryland
Rockville,Maryland
Salisbury,Maryland
Silver Spring,Maryland
Towson,Maryland
Westminster,Maryland
Brockton,Massachusetts
Fall River,Massachusetts
Framingham,Massachusetts
Lowell,Massachusetts
Lynn,Massachusetts
New Bedford,Massachusetts
Newton,Massachusetts
Peabody,Massachusetts
Pittsfield,Massachusetts
Quincy,Massachusetts
Somerville,Massachusetts
Springfield,Massachusetts
Ann Arbor,Michigan
Battle Creek,Michigan
Bay City,Michigan
Benton Harbor,Michigan
Bloomfield Hills,Michigan
Canton,Michigan
East Lansing,Michigan
Farmington Hills,Michigan
Macomb,Michigan
Madison Heights,Michigan
Marquette,Michigan
Midland,Michigan
Muskegon,Michigan
Novi,Michigan
Oak Park,Michigan
Portage,Michigan
Rochester Hills,Michigan
Royal Oak,Michigan
Saginaw,Michigan
Southfield,Michigan
St. Clair Shores,Michigan
Sterling Heights,Michigan
Taylor,Michigan
Troy,Michigan
Warren,Michigan
Westland,Michigan
Wyoming,Michigan
Bloomington,Minnesota
Brooklyn Park,Minnesota
Burnsville,Minnesota
Eagan,Minnesota
Edina,Minnesota
Maple Grove,Minnesota
Minnetonka,Minnesota
Moorhead,Minnesota
Plymouth,Minnesota
Woodbury,Minnesota
Biloxi,Mississippi
Gulfport,Mississippi
Hattiesburg,Mississippi
Meridian,Mississippi
Southaven,Mississippi
Tupelo,Mississippi
Blue Springs,Missouri
Independence,Missouri
Jefferson City,Missouri
Joplin,Missouri
Lee's Summit,Missouri
O'Fallon,Missouri
St. Charles,Missouri
St. Joseph,Missouri
St. Peters,Missouri
Warrensburg,Missouri
Bozeman,Montana
Great Falls,Montana
Helena,Montana
Kalispell,Montana
Missoula,Montana
Bellevue,Nebraska
Grand Island,Nebraska
Norfolk,Nebraska
Boulder City,Nevada
Elko,Nevada
Mesquite,Nevada
Winnemucca,Nevada
Concord,New Hampshire
Derry,New Hampshire
Dover,New Hampshire
Keene,New Hampshire
Portsmouth,New Hampshire
Rochester,New Hampshire
Bayonne,New Jersey
Camden,New Jersey
Cherry Hill,New Jersey
Clifton,New Jersey
East Orange,New Jersey
Edison,New Jersey
Hackensack,New Jersey
Hoboken,New Jersey
New Brunswick,New Jersey
Paramus,New Jersey
Paterson,New Jersey
Perth Amboy,New Jersey
Plainfield,New Jersey
Trenton,New Jersey
Union City,New Jersey
Vineland,New Jersey
West New York,New Jersey
Carlsbad,New Mexico
Clovis,New Mexico
Farmington,New Mexico
Hobbs,New Mexico
Rio Rancho,New Mexico
Roswell,New Mexico
Amherst,New York
Auburn,New York
Batavia,New York
Canandaigua,New York
Cortland,New York
Elmira,New York
Geneva,New York
Glens Falls,New York
Gloversville,New York
Hornell,New York
Ithaca,New York
Jamestown,New York
Kingston,New York
Lockport,New York
Mount Vernon,New York
New Rochelle,New York
Newburgh,New York
Niagara Falls,New York
Ogdensburg,New York
Olean,New York
Oneonta,New York
Oswego,New York
Peekskill,New York
Plattsburgh,New York
Poughkeepsie,New York
Rome,New York
Saratoga Springs,New York
Schenectady,New York
Tonawanda,New York
Troy,New York
Utica,New York
Watertown,New York
White Plains,New York
Asheville,North Carolina
Burlington,North Carolina
Cary,North Carolina
Chapel Hill,North Carolina
Concord,North Carolina
Gastonia,North Carolina
Goldsboro,North Carolina
Greenville,North Carolina
Hickory,North Carolina
High Point,North Carolina
Jacksonville,North Carolina
Kannapolis,North Carolina
Lumberton,North Carolina
Monroe,North Carolina
Rocky Mount,North Carolina
Salisbury,North Carolina
Shelby,North Carolina
Statesville,North Carolina
Thomasville,North Carolina
Wilmington,North Carolina
Wilson,North Carolina
Bismarck,North Dakota
Grand Forks,North Dakota
Minot,North Dakota
Alliance,Ohio
Ashtabula,Ohio
Barberton,Ohio
Beavercreek,Ohio
Bellefontaine,Ohio
Centerville,Ohio
Chillicothe,Ohio
Cuyahoga Falls,Ohio
Delaware,Ohio
Fairborn,Ohio
Findlay,Ohio
Gahanna,Ohio
Grove City,Ohio
Hilliard,Ohio
Huber Heights,Ohio
Kettering,Ohio
Lancaster,Ohio
Marion,Ohio
Massillon,Ohio
Mentor,Ohio
Middletown,Ohio
Niles,Ohio
Norwood,Ohio
Piqua,Ohio
Reynoldsburg,Ohio
Sandusky,Ohio
Steubenville,Ohio
Stow,Ohio
Strongsville,Ohio
Troy,Ohio
Upper Arlington,Ohio
Wadsworth,Ohio
Westerville,Ohio
Westlake,Ohio
Worthington,Ohio
Zanesville,Ohio
Broken Arrow,Oklahoma
Edmond,Oklahoma
Lawton,Oklahoma
Midwest City,Oklahoma
Moore,Oklahoma
Norman,Oklahoma
Stillwater,Oklahoma
Albany,Oregon
Ashland,Oregon
Bend,Oregon
Corvallis,Oregon
Gresham,Oregon
Hillsboro,Oregon
Klamath Falls,Oregon
Medford,Oregon
Oregon City,Oregon
Roseburg,Oregon
Springfield,Oregon
The Dalles,Oregon
Tigard,Oregon
Allentown,Pennsylvania
Altoona,Pennsylvania
Bethlehem,Pennsylvania
Butler,Pennsylvania
Chambersburg,Pennsylvania
Chester,Pennsylvania
Coatesville,Pennsylvania
Columbia,Pennsylvania
Corry,Pennsylvania
DuBois,Pennsylvania
Easton,Pennsylvania
Gettysburg,Pennsylvania
Greensburg,Pennsylvania
Hazleton,Pennsylvania
Johnstown,Pennsylvania
Lebanon,Pennsylvania
Lewisburg,Pennsylvania
McKeesport,Pennsylvania
Monroeville,Pennsylvania
New Castle,Pennsylvania
Norristown,Pennsylvania
Oil City,Pennsylvania
Pottstown,Pennsylvania
Reading,Pennsylvania
Scranton,Pennsylvania
State College,Pennsylvania
West Chester,Pennsylvania
Williamsport,Pennsylvania
Wilkes-Barre,Pennsylvania
Cranston,Rhode Island
East Providence,Rhode Island
Newport,Rhode Island
Pawtucket,Rhode Island
Warwick,Rhode Island
Woonsocket,Rhode Island
Anderson,South Carolina
Charleston,South Carolina
Florence,South Carolina
Hilton Head Island,South Carolina
Mount Pleasant,South Carolina
Myrtle Beach,South Carolina
North Charleston,South Carolina
Rock Hill,South Carolina
Spartanburg,South Carolina
Summerville,South Carolina
Sumter,South Carolina
Aberdeen,South Dakota
Pierre,South Dakota
Rapid City,South Dakota
Watertown,South Dakota
Bartlett,Tennessee
Brentwood,Tennessee
Clarksville,Tennessee
Collierville,Tennessee
Franklin,Tennessee
Germantown,Tennessee
Jackson,Tennessee
Johnson City,Tennessee
Kingsport,Tennessee
Smyrna,Tennessee
Abilene,Texas
Allen,Texas
Amarillo,Texas
Baytown,Texas
Bedford,Texas
Brownsville,Texas
Bryan,Texas
Burleson,Texas
Carrollton,Texas
Cedar Park,Texas
Cleburne,Texas
College Station,Texas
Conroe,Texas
Coppell,Texas
Corsicana,Texas
DeSoto,Texas
Duncanville,Texas
Edinburg,Texas
Euless,Texas
Farmers Branch,Texas
Flower Mound,Texas
Friendswood,Texas
Frisco,Texas
Galveston,Texas
Georgetown,Texas
Grand Prairie,Texas
Grapevine,Texas
Greenville,Texas
Groves,Texas
Haltom City,Texas
Harlingen,Texas
Henderson,Texas
Hewitt,Texas
Hidalgo,Texas
Highland Village,Texas
Hillsboro,Texas
Humble,Texas
Huntsville,Texas
Hurst,Texas
Irving,Texas
Jacksonville,Texas
Katy,Texas
Keller,Texas
Killeen,Texas
Kingsville,Texas
Kyle,Texas
Lake Jackson,Texas
Laredo,Texas
League City,Texas
Lewisville,Texas
Little Elm,Texas
Longview,Texas
Lufkin,Texas
Mansfield,Texas
McAllen,Texas
McKinney,Texas
Midland,Texas
Mission,Texas
Mount Pleasant,Texas
Nacogdoches,Texas
New Braunfels,Texas
North Richland Hills,Texas
Odessa,Texas
Orange,Texas
Palestine,Texas
Pearland,Texas
Pflugerville,Texas
Pharr,Texas
Plainview,Texas
Port Arthur,Texas
Port Lavaca,Texas
Richardson,Texas
Rockwall,Texas
Rosenberg,Texas
Round Rock,Texas
Rowlett,Texas
San Angelo,Texas
Schertz,Texas
Seagoville,Texas
Seguin,Texas
Sherman,Texas
Snyder,Texas
Southlake,Texas
Temple,Texas
Terrell,Texas
Texarkana,Texas
Texas City,Texas
The Colony,Texas
Tomball,Texas
Universal City,Texas
Victoria,Texas
Waco,Texas
Waxahachie,Texas
Weatherford,Texas
Weslaco,Texas
Willis,Texas
Woodway,Texas
Layton,Utah
Ogden,Utah
Orem,Utah
Provo,Utah
Sandy,Utah
St. George,Utah
West Valley City,Utah
Burlington,Vermont
Essex,Vermont
Montpelier,Vermont
Rutland,Vermont
South Burlington,Vermont
Alexandria,Virginia
Arlington,Virginia
Chesapeake,Virginia
Hampton,Virginia
Lynchburg,Virginia
Newport News,Virginia
Norfolk,Virginia
Portsmouth,Virginia
Roanoke,Virginia
Suffolk,Virginia
Williamsburg,Virginia
Aberdeen,Washington
Anacortes,Washington
Auburn,Washington
Bellingham,Washington
Bothell,Washington
Bremerton,Washington
Burien,Washington
Centralia,Washington
Cheney,Washington
Des Moines,Washington
Edmonds,Washington
Ellensburg,Washington
Enumclaw,Washington
Everett,Washington
Federal Way,Washington
Issaquah,Washington
Kennewick,Washington
Kent,Washington
Kirkland,Washington
Lacey,Washington
Lakewood,Washington
Longview,Washington
Marysville,Washington
Mount Vernon,Washington
Mukilteo,Washington
Oak Harbor,Washington
Olympia,Washington
Pasco,Washington
Pullman,Washington
Puyallup,Washington
Redmond,Washington
Renton,Washington
Richland,Washington
Sammamish,Washington
Shoreline,Washington
Spokane Valley,Washington
Tacoma,Washington
Tukwila,Washington
Tumwater,Washington
University Place,Washington
Vancouver,Washington
Walla Walla,Washington
Wenatchee,Washington
Yakima,Washington
Charleston,West Virginia
Huntington,West Virginia
Martinsburg,West Virginia
Morgantown,West Virginia
Parkersburg,West Virginia
Weirton,West Virginia
Wheeling,West Virginia
Appleton,Wisconsin
Eau Claire,Wisconsin
Fond du Lac,Wisconsin
Janesville,Wisconsin
Kenosha,Wisconsin
La Crosse,Wisconsin
Oshkosh,Wisconsin
Racine,Wisconsin
Sheboygan,Wisconsin
Waukesha,Wisconsin
Wausau,Wisconsin
Casper,Wyoming
Cheyenne,Wyoming
Gillette,Wyoming
Laramie,Wyoming
Rock Springs,Wyoming`;

// Parse the city database
const cities = cityDatabase.split('\n').map(line => {
  const [name, state] = line.split(',');
  const slug = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${state.toLowerCase().replace(/\s+/g, '-')}`;
  return { name: name.trim(), state: state.trim(), slug: slug.trim() };
});

// Filter to only cities that don't exist
const citiesToCreate = cities.filter(city => !existingPages.has(city.slug));
console.log(`Found ${citiesToCreate.length} cities to create from ${cities.length} total`);

// Take first 500
const finalCities = citiesToCreate.slice(0, 500);
console.log(`\nSelected ${finalCities.length} cities to create`);

if (finalCities.length === 0) {
  console.log('\nAll cities already have pages!');
  process.exit(0);
}

// Display first 30
console.log('\nFirst 30 cities:');
finalCities.slice(0, 30).forEach((city, idx) => {
  console.log(`${idx + 1}. ${city.name}, ${city.state} (${city.slug})`);
});

// Save list
fs.writeFileSync('next_500_cities.json', JSON.stringify(finalCities, null, 2));
console.log(`\nSaved ${finalCities.length} cities to next_500_cities.json`);

// Now create the pages
console.log(`\nCreating pages for ${finalCities.length} cities...`);

let created = 0;
let errors = 0;

for (const city of finalCities) {
  try {
    const citySlug = city.slug;
    const dirPath = path.join('src/app/vending-leads', citySlug);
    
    // Create directory
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // Generate page.tsx
    const pageContent = templatePage
      .replace(/Longmont, Colorado/g, `${city.name}, ${city.state}`)
      .replace(/longmont-colorado/g, citySlug)
      .replace(/Longmont/g, city.name)
      .replace(/Colorado/g, city.state)
      .replace(/colorado/g, city.state.toLowerCase());
    
    fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent);
    
    // Generate pageClient.tsx with city-specific content
    // This is a simplified version - the full script would have more variations
    const clientContent = templateClient
      .replace(/const cityDisplayName = 'Longmont';/g, `const cityDisplayName = '${city.name}';`)
      .replace(/const stateDisplayName = 'Colorado';/g, `const stateDisplayName = '${city.state}';`)
      .replace(/longmont-colorado/g, citySlug)
      .replace(/Longmont/g, city.name)
      .replace(/Colorado/g, city.state)
      .replace(/colorado/g, city.state.toLowerCase());
    
    fs.writeFileSync(path.join(dirPath, 'pageClient.tsx'), clientContent);
    
    created++;
    if (created % 50 === 0) {
      console.log(`Created: ${created} pages...`);
    }
  } catch (error) {
    console.error(`Error creating ${city.name}, ${city.state}:`, error.message);
    errors++;
  }
}

console.log(`\n=== SUMMARY ===`);
console.log(`Created: ${created} pages`);
console.log(`Errors: ${errors}`);
