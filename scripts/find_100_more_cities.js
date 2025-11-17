const fs = require('fs');

// Comprehensive list of 100+ additional cities (30K-200K population)
const targetCities = [
  // California - more cities
  { name: 'Torrance', slug: 'torrance-california', state: 'California', pop: '140K+' },
  { name: 'Pasadena', slug: 'pasadena-california', state: 'California', pop: '140K+' },
  { name: 'Hayward', slug: 'hayward-california', state: 'California', pop: '165K+' },
  { name: 'Fullerton', slug: 'fullerton-california', state: 'California', pop: '140K+' },
  { name: 'Concord', slug: 'concord-california', state: 'California', pop: '130K+' },
  { name: 'Corona', slug: 'corona-california', state: 'California', pop: '160K+' },
  { name: 'Elk Grove', slug: 'elk-grove-california', state: 'California', pop: '180K+' },
  { name: 'Fairfield', slug: 'fairfield-california', state: 'California', pop: '120K+' },
  { name: 'Inglewood', slug: 'inglewood-california', state: 'California', pop: '110K+' },
  { name: 'Pomona', slug: 'pomona-california', state: 'California', pop: '150K+' },
  { name: 'Roseville', slug: 'roseville-california', state: 'California', pop: '150K+' },
  { name: 'Salinas', slug: 'salinas-california', state: 'California', pop: '165K+' },
  { name: 'Simi Valley', slug: 'simi-valley-california', state: 'California', pop: '125K+' },
  { name: 'Thousand Oaks', slug: 'thousand-oaks-california', state: 'California', pop: '125K+' },
  { name: 'Vallejo', slug: 'vallejo-california', state: 'California', pop: '125K+' },
  { name: 'Ventura', slug: 'ventura-california', state: 'California', pop: '110K+' },
  { name: 'Visalia', slug: 'visalia-california', state: 'California', pop: '145K+' },
  { name: 'West Covina', slug: 'west-covina-california', state: 'California', pop: '110K+' },
  { name: 'San Mateo', slug: 'san-mateo-california', state: 'California', pop: '100K+' },
  { name: 'Santa Barbara', slug: 'santa-barbara-california', state: 'California', pop: '90K+' },
  { name: 'Santa Rosa', slug: 'santa-rosa-california', state: 'California', pop: '180K+' },
  { name: 'Redding', slug: 'redding-california', state: 'California', pop: '95K+' },
  { name: 'Chico', slug: 'chico-california', state: 'California', pop: '100K+' },
  
  // Texas - more cities
  { name: 'Irving', slug: 'irving-texas', state: 'Texas', pop: '250K+' },
  { name: 'Sugar Land', slug: 'sugar-land-texas', state: 'Texas', pop: '120K+' },
  { name: 'Temple', slug: 'temple-texas', state: 'Texas', pop: '85K+' },
  { name: 'Pearland', slug: 'pearland-texas', state: 'Texas', pop: '130K+' },
  { name: 'League City', slug: 'league-city-texas', state: 'Texas', pop: '110K+' },
  { name: 'Mesquite', slug: 'mesquite-texas', state: 'Texas', pop: '145K+' },
  { name: 'Carrollton', slug: 'carrollton-texas', state: 'Texas', pop: '140K+' },
  { name: 'Garland', slug: 'garland-texas', state: 'Texas', pop: '245K+' },
  { name: 'Frisco', slug: 'frisco-texas', state: 'Texas', pop: '210K+' },
  { name: 'McKinney', slug: 'mckinney-texas', state: 'Texas', pop: '210K+' },
  { name: 'Denton', slug: 'denton-texas', state: 'Texas', pop: '150K+' },
  { name: 'Richardson', slug: 'richardson-texas', state: 'Texas', pop: '120K+' },
  { name: 'Lewisville', slug: 'lewisville-texas', state: 'Texas', pop: '110K+' },
  { name: 'Beaumont', slug: 'beaumont-texas', state: 'Texas', pop: '115K+' },
  { name: 'Brownsville', slug: 'brownsville-texas', state: 'Texas', pop: '185K+' },
  { name: 'College Station', slug: 'college-station-texas', state: 'Texas', pop: '120K+' },
  { name: 'Killeen', slug: 'killeen-texas', state: 'Texas', pop: '155K+' },
  { name: 'McAllen', slug: 'mcallen-texas', state: 'Texas', pop: '145K+' },
  { name: 'Midland', slug: 'midland-texas', state: 'Texas', pop: '135K+' },
  { name: 'Odessa', slug: 'odessa-texas', state: 'Texas', pop: '115K+' },
  { name: 'Pasadena', slug: 'pasadena-texas', state: 'Texas', pop: '150K+' },
  { name: 'Round Rock', slug: 'round-rock-texas', state: 'Texas', pop: '130K+' },
  { name: 'Tyler', slug: 'tyler-texas', state: 'Texas', pop: '110K+' },
  { name: 'Lubbock', slug: 'lubbock-texas', state: 'Texas', pop: '260K+' },
  { name: 'Laredo', slug: 'laredo-texas', state: 'Texas', pop: '260K+' },
  { name: 'Waco', slug: 'waco-texas', state: 'Texas', pop: '140K+' },
  { name: 'Abilene', slug: 'abilene-texas', state: 'Texas', pop: '125K+' },
  
  // Florida - more cities
  { name: 'Altamonte Springs', slug: 'altamonte-springs-florida', state: 'Florida', pop: '45K+' },
  { name: 'Apopka', slug: 'apopka-florida', state: 'Florida', pop: '55K+' },
  { name: 'Bradenton', slug: 'bradenton-florida', state: 'Florida', pop: '60K+' },
  { name: 'Coconut Creek', slug: 'coconut-creek-florida', state: 'Florida', pop: '60K+' },
  { name: 'Cutler Bay', slug: 'cutler-bay-florida', state: 'Florida', pop: '45K+' },
  { name: 'Doral', slug: 'doral-florida', state: 'Florida', pop: '75K+' },
  { name: 'Greenacres', slug: 'greenacres-florida', state: 'Florida', pop: '45K+' },
  { name: 'Jupiter', slug: 'jupiter-florida', state: 'Florida', pop: '65K+' },
  { name: 'Margate', slug: 'margate-florida', state: 'Florida', pop: '60K+' },
  { name: 'North Miami', slug: 'north-miami-florida', state: 'Florida', pop: '60K+' },
  { name: 'Palm Beach Gardens', slug: 'palm-beach-gardens-florida', state: 'Florida', pop: '60K+' },
  { name: 'Plant City', slug: 'plant-city-florida', state: 'Florida', pop: '40K+' },
  { name: 'Royal Palm Beach', slug: 'royal-palm-beach-florida', state: 'Florida', pop: '40K+' },
  { name: 'Stuart', slug: 'stuart-florida', state: 'Florida', pop: '18K+' },
  { name: 'Wellington', slug: 'wellington-florida', state: 'Florida', pop: '60K+' },
  
  // Illinois - more suburbs
  { name: 'Arlington Heights', slug: 'arlington-heights-illinois', state: 'Illinois', pop: '77K+' },
  { name: 'Bolingbrook', slug: 'bolingbrook-illinois', state: 'Illinois', pop: '73K+' },
  { name: 'Palatine', slug: 'palatine-illinois', state: 'Illinois', pop: '67K+' },
  { name: 'Skokie', slug: 'skokie-illinois', state: 'Illinois', pop: '67K+' },
  { name: 'Des Plaines', slug: 'des-plaines-illinois', state: 'Illinois', pop: '60K+' },
  { name: 'Orland Park', slug: 'orland-park-illinois', state: 'Illinois', pop: '58K+' },
  { name: 'Oak Lawn', slug: 'oak-lawn-illinois', state: 'Illinois', pop: '58K+' },
  { name: 'Berwyn', slug: 'berwyn-illinois', state: 'Illinois', pop: '57K+' },
  { name: 'Mount Prospect', slug: 'mount-prospect-illinois', state: 'Illinois', pop: '56K+' },
  { name: 'Tinley Park', slug: 'tinley-park-illinois', state: 'Illinois', pop: '55K+' },
  { name: 'Oak Park', slug: 'oak-park-illinois', state: 'Illinois', pop: '54K+' },
  { name: 'Wheaton', slug: 'wheaton-illinois', state: 'Illinois', pop: '53K+' },
  { name: 'Downers Grove', slug: 'downers-grove-illinois', state: 'Illinois', pop: '50K+' },
  
  // New York - major cities
  { name: 'Albany', slug: 'albany-new-york', state: 'New York', pop: '100K+' },
  { name: 'Binghamton', slug: 'binghamton-new-york', state: 'New York', pop: '47K+' },
  { name: 'Buffalo', slug: 'buffalo-new-york', state: 'New York', pop: '275K+' },
  { name: 'Ithaca', slug: 'ithaca-new-york', state: 'New York', pop: '32K+' },
  { name: 'Mount Vernon', slug: 'mount-vernon-new-york', state: 'New York', pop: '73K+' },
  { name: 'New Rochelle', slug: 'new-rochelle-new-york', state: 'New York', pop: '79K+' },
  { name: 'Rochester', slug: 'rochester-new-york', state: 'New York', pop: '210K+' },
  { name: 'Schenectady', slug: 'schenectady-new-york', state: 'New York', pop: '67K+' },
  { name: 'Syracuse', slug: 'syracuse-new-york', state: 'New York', pop: '148K+' },
  { name: 'Troy', slug: 'troy-new-york', state: 'New York', pop: '51K+' },
  { name: 'Utica', slug: 'utica-new-york', state: 'New York', pop: '60K+' },
  { name: 'White Plains', slug: 'white-plains-new-york', state: 'New York', pop: '59K+' },
  { name: 'Yonkers', slug: 'yonkers-new-york', state: 'New York', pop: '210K+' },
  
  // Pennsylvania - major cities
  { name: 'Allentown', slug: 'allentown-pennsylvania', state: 'Pennsylvania', pop: '125K+' },
  { name: 'Bethlehem', slug: 'bethlehem-pennsylvania', state: 'Pennsylvania', pop: '75K+' },
  { name: 'Erie', slug: 'erie-pennsylvania', state: 'Pennsylvania', pop: '94K+' },
  { name: 'Lancaster', slug: 'lancaster-pennsylvania', state: 'Pennsylvania', pop: '59K+' },
  { name: 'Philadelphia', slug: 'philadelphia-pennsylvania', state: 'Pennsylvania', pop: '1.6M+' },
  { name: 'Pittsburgh', slug: 'pittsburgh-pennsylvania', state: 'Pennsylvania', pop: '300K+' },
  { name: 'Reading', slug: 'reading-pennsylvania', state: 'Pennsylvania', pop: '95K+' },
  { name: 'Scranton', slug: 'scranton-pennsylvania', state: 'Pennsylvania', pop: '76K+' },
  { name: 'York', slug: 'york-pennsylvania', state: 'Pennsylvania', pop: '45K+' },
  
  // Georgia - more cities
  { name: 'Albany', slug: 'albany-georgia', state: 'Georgia', pop: '70K+' },
  { name: 'Athens', slug: 'athens-georgia', state: 'Georgia', pop: '130K+' },
  { name: 'Augusta', slug: 'augusta-georgia', state: 'Georgia', pop: '202K+' },
  { name: 'Columbus', slug: 'columbus-georgia', state: 'Georgia', pop: '207K+' },
  { name: 'Macon', slug: 'macon-georgia', state: 'Georgia', pop: '155K+' },
  { name: 'Marietta', slug: 'marietta-georgia', state: 'Georgia', pop: '61K+' },
  { name: 'Roswell', slug: 'roswell-georgia', state: 'Georgia', pop: '92K+' },
  { name: 'Sandy Springs', slug: 'sandy-springs-georgia', state: 'Georgia', pop: '110K+' },
  { name: 'Savannah', slug: 'savannah-georgia', state: 'Georgia', pop: '148K+' },
  { name: 'Valdosta', slug: 'valdosta-georgia', state: 'Georgia', pop: '55K+' },
  { name: 'Warner Robins', slug: 'warner-robins-georgia', state: 'Georgia', pop: '80K+' },
  
  // North Carolina - more cities
  { name: 'Cary', slug: 'cary-north-carolina', state: 'North Carolina', pop: '180K+' },
  { name: 'Durham', slug: 'durham-north-carolina', state: 'North Carolina', pop: '285K+' },
  { name: 'Fayetteville', slug: 'fayetteville-north-carolina', state: 'North Carolina', pop: '210K+' },
  { name: 'Winston-Salem', slug: 'winston-salem-north-carolina', state: 'North Carolina', pop: '250K+' },
  { name: 'Hickory', slug: 'hickory-north-carolina', state: 'North Carolina', pop: '45K+' },
  { name: 'High Point', slug: 'high-point-north-carolina', state: 'North Carolina', pop: '115K+' },
  { name: 'Wilmington', slug: 'wilmington-north-carolina', state: 'North Carolina', pop: '120K+' },
  
  // Virginia - more cities
  { name: 'Alexandria', slug: 'alexandria-virginia', state: 'Virginia', pop: '160K+' },
  { name: 'Portsmouth', slug: 'portsmouth-virginia', state: 'Virginia', pop: '95K+' },
  { name: 'Hampton', slug: 'hampton-virginia', state: 'Virginia', pop: '135K+' },
  { name: 'Newport News', slug: 'newport-news-virginia', state: 'Virginia', pop: '185K+' },
  { name: 'Chesapeake', slug: 'chesapeake-virginia', state: 'Virginia', pop: '250K+' },
  { name: 'Norfolk', slug: 'norfolk-virginia', state: 'Virginia', pop: '235K+' },
  { name: 'Richmond', slug: 'richmond-virginia', state: 'Virginia', pop: '230K+' },
  { name: 'Lynchburg', slug: 'lynchburg-virginia', state: 'Virginia', pop: '80K+' },
  { name: 'Roanoke', slug: 'roanoke-virginia', state: 'Virginia', pop: '100K+' },
  { name: 'Suffolk', slug: 'suffolk-virginia', state: 'Virginia', pop: '95K+' },
  { name: 'Charlottesville', slug: 'charlottesville-virginia', state: 'Virginia', pop: '50K+' },
  { name: 'Arlington', slug: 'arlington-virginia', state: 'Virginia', pop: '240K+' },
  
  // New Jersey - more cities
  { name: 'Jersey City', slug: 'jersey-city-new-jersey', state: 'New Jersey', pop: '290K+' },
  { name: 'Newark', slug: 'newark-new-jersey', state: 'New Jersey', pop: '310K+' },
  { name: 'Paterson', slug: 'paterson-new-jersey', state: 'New Jersey', pop: '160K+' },
  { name: 'Elizabeth', slug: 'elizabeth-new-jersey', state: 'New Jersey', pop: '135K+' },
  { name: 'Woodbridge', slug: 'woodbridge-new-jersey', state: 'New Jersey', pop: '105K+' },
  { name: 'Edison', slug: 'edison-new-jersey', state: 'New Jersey', pop: '105K+' },
  
  // Oregon - more cities
  { name: 'Gresham', slug: 'gresham-oregon', state: 'Oregon', pop: '115K+' },
  { name: 'Hillsboro', slug: 'hillsboro-oregon', state: 'Oregon', pop: '110K+' },
  { name: 'Bend', slug: 'bend-oregon', state: 'Oregon', pop: '105K+' },
  { name: 'Beaverton', slug: 'beaverton-oregon', state: 'Oregon', pop: '100K+' },
  { name: 'Medford', slug: 'medford-oregon', state: 'Oregon', pop: '90K+' },
  { name: 'Albany', slug: 'albany-oregon', state: 'Oregon', pop: '60K+' },
  { name: 'Eugene', slug: 'eugene-oregon', state: 'Oregon', pop: '175K+' },
  { name: 'Salem', slug: 'salem-oregon', state: 'Oregon', pop: '175K+' },
  { name: 'Corvallis', slug: 'corvallis-oregon', state: 'Oregon', pop: '60K+' },
  { name: 'Springfield', slug: 'springfield-oregon', state: 'Oregon', pop: '62K+' },
  { name: 'Tigard', slug: 'tigard-oregon', state: 'Oregon', pop: '55K+' },
  
  // Minnesota - more cities
  { name: 'St. Paul', slug: 'saint-paul-minnesota', state: 'Minnesota', pop: '310K+' },
  { name: 'Rochester', slug: 'rochester-minnesota', state: 'Minnesota', pop: '120K+' },
  { name: 'Duluth', slug: 'duluth-minnesota', state: 'Minnesota', pop: '90K+' },
  { name: 'Bloomington', slug: 'bloomington-minnesota', state: 'Minnesota', pop: '90K+' },
  { name: 'Brooklyn Park', slug: 'brooklyn-park-minnesota', state: 'Minnesota', pop: '85K+' },
  { name: 'Plymouth', slug: 'plymouth-minnesota', state: 'Minnesota', pop: '80K+' },
  { name: 'St. Cloud', slug: 'st-cloud-minnesota', state: 'Minnesota', pop: '70K+' },
  { name: 'Eagan', slug: 'eagan-minnesota', state: 'Minnesota', pop: '70K+' },
  { name: 'Woodbury', slug: 'woodbury-minnesota', state: 'Minnesota', pop: '80K+' },
  { name: 'Maple Grove', slug: 'maple-grove-minnesota', state: 'Minnesota', pop: '75K+' },
  { name: 'Lakeville', slug: 'lakeville-minnesota', state: 'Minnesota', pop: '75K+' },
  { name: 'Mankato', slug: 'mankato-minnesota', state: 'Minnesota', pop: '45K+' },
  
  // Wisconsin - more cities
  { name: 'Madison', slug: 'madison-wisconsin', state: 'Wisconsin', pop: '270K+' },
  { name: 'Green Bay', slug: 'green-bay-wisconsin', state: 'Wisconsin', pop: '110K+' },
  { name: 'Kenosha', slug: 'kenosha-wisconsin', state: 'Wisconsin', pop: '100K+' },
  { name: 'Racine', slug: 'racine-wisconsin', state: 'Wisconsin', pop: '80K+' },
  { name: 'Appleton', slug: 'appleton-wisconsin', state: 'Wisconsin', pop: '75K+' },
  { name: 'Waukesha', slug: 'waukesha-wisconsin', state: 'Wisconsin', pop: '75K+' },
  { name: 'Eau Claire', slug: 'eau-claire-wisconsin', state: 'Wisconsin', pop: '70K+' },
  { name: 'Oshkosh', slug: 'oshkosh-wisconsin', state: 'Wisconsin', pop: '70K+' },
  { name: 'Janesville', slug: 'janesville-wisconsin', state: 'Wisconsin', pop: '65K+' },
  { name: 'La Crosse', slug: 'la-crosse-wisconsin', state: 'Wisconsin', pop: '55K+' },
  { name: 'Sheboygan', slug: 'sheboygan-wisconsin', state: 'Wisconsin', pop: '50K+' },
  
  // Missouri - more cities
  { name: 'Kansas City', slug: 'kansas-city-missouri', state: 'Missouri', pop: '510K+' },
  { name: 'St. Louis', slug: 'st-louis-missouri', state: 'Missouri', pop: '300K+' },
  { name: 'Springfield', slug: 'springfield-missouri', state: 'Missouri', pop: '170K+' },
  { name: 'Columbia', slug: 'columbia-missouri', state: 'Missouri', pop: '130K+' },
  { name: 'Independence', slug: 'independence-missouri', state: 'Missouri', pop: '120K+' },
  { name: "Lee's Summit", slug: 'lees-summit-missouri', state: 'Missouri', pop: '105K+' },
  { name: "O'Fallon", slug: 'ofallon-missouri', state: 'Missouri', pop: '95K+' },
  { name: 'Joplin', slug: 'joplin-missouri', state: 'Missouri', pop: '55K+' },
  
  // Tennessee - more cities
  { name: 'Nashville', slug: 'nashville-tennessee', state: 'Tennessee', pop: '715K+' },
  { name: 'Memphis', slug: 'memphis-tennessee', state: 'Tennessee', pop: '630K+' },
  { name: 'Knoxville', slug: 'knoxville-tennessee', state: 'Tennessee', pop: '195K+' },
  { name: 'Chattanooga', slug: 'chattanooga-tennessee', state: 'Tennessee', pop: '185K+' },
  { name: 'Clarksville', slug: 'clarksville-tennessee', state: 'Tennessee', pop: '170K+' },
  { name: 'Murfreesboro', slug: 'murfreesboro-tennessee', state: 'Tennessee', pop: '160K+' },
  { name: 'Franklin', slug: 'franklin-tennessee', state: 'Tennessee', pop: '85K+' },
  { name: 'Jackson', slug: 'jackson-tennessee', state: 'Tennessee', pop: '70K+' },
  { name: 'Johnson City', slug: 'johnson-city-tennessee', state: 'Tennessee', pop: '75K+' },
  { name: 'Kingsport', slug: 'kingsport-tennessee', state: 'Tennessee', pop: '55K+' },
  
  // Indiana - more cities
  { name: 'Indianapolis', slug: 'indianapolis-indiana', state: 'Indiana', pop: '890K+' },
  { name: 'Fort Wayne', slug: 'fort-wayne-indiana', state: 'Indiana', pop: '270K+' },
  { name: 'Evansville', slug: 'evansville-indiana', state: 'Indiana', pop: '120K+' },
  { name: 'South Bend', slug: 'south-bend-indiana', state: 'Indiana', pop: '105K+' },
  { name: 'Carmel', slug: 'carmel-indiana', state: 'Indiana', pop: '100K+' },
  { name: 'Bloomington', slug: 'bloomington-indiana', state: 'Indiana', pop: '85K+' },
  { name: 'Hammond', slug: 'hammond-indiana', state: 'Indiana', pop: '80K+' },
  { name: 'Gary', slug: 'gary-indiana', state: 'Indiana', pop: '75K+' },
  { name: 'Kokomo', slug: 'kokomo-indiana', state: 'Indiana', pop: '60K+' },
  
  // South Carolina
  { name: 'Aiken', slug: 'aiken-south-carolina', state: 'South Carolina', pop: '32K+' },
  { name: 'Anderson', slug: 'anderson-south-carolina', state: 'South Carolina', pop: '28K+' },
  { name: 'Charleston', slug: 'charleston-south-carolina', state: 'South Carolina', pop: '155K+' },
  { name: 'Columbia', slug: 'columbia-south-carolina', state: 'South Carolina', pop: '140K+' },
  { name: 'Conway', slug: 'conway-south-carolina', state: 'South Carolina', pop: '28K+' },
  { name: 'Florence', slug: 'florence-south-carolina', state: 'South Carolina', pop: '40K+' },
  { name: 'Goose Creek', slug: 'goose-creek-south-carolina', state: 'South Carolina', pop: '45K+' },
  { name: 'Greenville', slug: 'greenville-south-carolina', state: 'South Carolina', pop: '75K+' },
  { name: 'Hilton Head Island', slug: 'hilton-head-island-south-carolina', state: 'South Carolina', pop: '40K+' },
  { name: 'Mount Pleasant', slug: 'mount-pleasant-south-carolina', state: 'South Carolina', pop: '95K+' },
  { name: 'Myrtle Beach', slug: 'myrtle-beach-south-carolina', state: 'South Carolina', pop: '38K+' },
  { name: 'North Charleston', slug: 'north-charleston-south-carolina', state: 'South Carolina', pop: '120K+' },
  { name: 'Rock Hill', slug: 'rock-hill-south-carolina', state: 'South Carolina', pop: '75K+' },
  { name: 'Spartanburg', slug: 'spartanburg-south-carolina', state: 'South Carolina', pop: '40K+' },
  { name: 'Summerville', slug: 'summerville-south-carolina', state: 'South Carolina', pop: '55K+' },
  
  // Kentucky
  { name: 'Bowling Green', slug: 'bowling-green-kentucky', state: 'Kentucky', pop: '75K+' },
  { name: 'Covington', slug: 'covington-kentucky', state: 'Kentucky', pop: '42K+' },
  { name: 'Florence', slug: 'florence-kentucky', state: 'Kentucky', pop: '33K+' },
  { name: 'Frankfort', slug: 'frankfort-kentucky', state: 'Kentucky', pop: '28K+' },
  { name: 'Georgetown', slug: 'georgetown-kentucky', state: 'Kentucky', pop: '37K+' },
  { name: 'Hopkinsville', slug: 'hopkinsville-kentucky', state: 'Kentucky', pop: '32K+' },
  { name: 'Lexington', slug: 'lexington-kentucky', state: 'Kentucky', pop: '325K+' },
  { name: 'Louisville', slug: 'louisville-kentucky', state: 'Kentucky', pop: '630K+' },
  { name: 'Owensboro', slug: 'owensboro-kentucky', state: 'Kentucky', pop: '60K+' },
  { name: 'Paducah', slug: 'paducah-kentucky', state: 'Kentucky', pop: '26K+' },
  { name: 'Richmond', slug: 'richmond-kentucky', state: 'Kentucky', pop: '36K+' },
  
  // Louisiana
  { name: 'Alexandria', slug: 'alexandria-louisiana', state: 'Louisiana', pop: '45K+' },
  { name: 'Baton Rouge', slug: 'baton-rouge-louisiana', state: 'Louisiana', pop: '225K+' },
  { name: 'Bossier City', slug: 'bossier-city-louisiana', state: 'Louisiana', pop: '65K+' },
  { name: 'Houma', slug: 'houma-louisiana', state: 'Louisiana', pop: '33K+' },
  { name: 'Kenner', slug: 'kenner-louisiana', state: 'Louisiana', pop: '66K+' },
  { name: 'Lafayette', slug: 'lafayette-louisiana', state: 'Louisiana', pop: '125K+' },
  { name: 'Lake Charles', slug: 'lake-charles-louisiana', state: 'Louisiana', pop: '85K+' },
  { name: 'Metairie', slug: 'metairie-louisiana', state: 'Louisiana', pop: '140K+' },
  { name: 'Monroe', slug: 'monroe-louisiana', state: 'Louisiana', pop: '47K+' },
  { name: 'New Orleans', slug: 'new-orleans-louisiana', state: 'Louisiana', pop: '380K+' },
  { name: 'Shreveport', slug: 'shreveport-louisiana', state: 'Louisiana', pop: '185K+' },
  { name: 'Slidell', slug: 'slidell-louisiana', state: 'Louisiana', pop: '28K+' },
  
  // Mississippi
  { name: 'Biloxi', slug: 'biloxi-mississippi', state: 'Mississippi', pop: '50K+' },
  { name: 'Gulfport', slug: 'gulfport-mississippi', state: 'Mississippi', pop: '72K+' },
  { name: 'Hattiesburg', slug: 'hattiesburg-mississippi', state: 'Mississippi', pop: '48K+' },
  { name: 'Jackson', slug: 'jackson-mississippi', state: 'Mississippi', pop: '150K+' },
  { name: 'Southaven', slug: 'southaven-mississippi', state: 'Mississippi', pop: '60K+' },
  { name: 'Tupelo', slug: 'tupelo-mississippi', state: 'Mississippi', pop: '38K+' },
  
  // Oklahoma
  { name: 'Broken Arrow', slug: 'broken-arrow-oklahoma', state: 'Oklahoma', pop: '115K+' },
  { name: 'Lawton', slug: 'lawton-oklahoma', state: 'Oklahoma', pop: '95K+' },
  { name: 'Norman', slug: 'norman-oklahoma', state: 'Oklahoma', pop: '130K+' },
  { name: 'Oklahoma City', slug: 'oklahoma-city-oklahoma', state: 'Oklahoma', pop: '700K+' },
  { name: 'Tulsa', slug: 'tulsa-oklahoma', state: 'Oklahoma', pop: '410K+' },
  
  // Utah - more cities
  { name: 'Salt Lake City', slug: 'salt-lake-city-utah', state: 'Utah', pop: '205K+' },
  { name: 'West Valley City', slug: 'west-valley-city-utah', state: 'Utah', pop: '140K+' },
  { name: 'Provo', slug: 'provo-utah', state: 'Utah', pop: '120K+' },
  { name: 'West Jordan', slug: 'west-jordan-utah', state: 'Utah', pop: '120K+' },
  { name: 'Ogden', slug: 'ogden-utah', state: 'Utah', pop: '90K+' },
  { name: 'St. George', slug: 'st-george-utah', state: 'Utah', pop: '100K+' },
  { name: 'Orem', slug: 'orem-utah', state: 'Utah', pop: '100K+' },
  { name: 'Sandy', slug: 'sandy-utah', state: 'Utah', pop: '95K+' },
  
  // Colorado - more cities
  { name: 'Boulder', slug: 'boulder-colorado', state: 'Colorado', pop: '110K+' },
  { name: 'Centennial', slug: 'centennial-colorado', state: 'Colorado', pop: '110K+' },
  { name: 'Greeley', slug: 'greeley-colorado', state: 'Colorado', pop: '110K+' },
  { name: 'Pueblo', slug: 'pueblo-colorado', state: 'Colorado', pop: '110K+' },
  { name: 'Thornton', slug: 'thornton-colorado', state: 'Colorado', pop: '140K+' },
  { name: 'Westminster', slug: 'westminster-colorado', state: 'Colorado', pop: '115K+' },
  { name: 'Grand Junction', slug: 'grand-junction-colorado', state: 'Colorado', pop: '65K+' },
  
  // Iowa - all major cities
  { name: 'Cedar Rapids', slug: 'cedar-rapids-iowa', state: 'Iowa', pop: '135K+' },
  { name: 'Davenport', slug: 'davenport-iowa', state: 'Iowa', pop: '100K+' },
  { name: 'Sioux City', slug: 'sioux-city-iowa', state: 'Iowa', pop: '85K+' },
  { name: 'Waterloo', slug: 'waterloo-iowa', state: 'Iowa', pop: '65K+' },
  { name: 'Ames', slug: 'ames-iowa', state: 'Iowa', pop: '70K+' },
  { name: 'Iowa City', slug: 'iowa-city-iowa', state: 'Iowa', pop: '75K+' },
  { name: 'Des Moines', slug: 'des-moines-iowa', state: 'Iowa', pop: '215K+' },
  { name: 'Dubuque', slug: 'dubuque-iowa', state: 'Iowa', pop: '60K+' },
  
  // Idaho - all major cities
  { name: 'Meridian', slug: 'meridian-idaho', state: 'Idaho', pop: '120K+' },
  { name: 'Nampa', slug: 'nampa-idaho', state: 'Idaho', pop: '110K+' },
  { name: 'Idaho Falls', slug: 'idaho-falls-idaho', state: 'Idaho', pop: '70K+' },
  { name: 'Pocatello', slug: 'pocatello-idaho', state: 'Idaho', pop: '60K+' },
  { name: "Coeur d'Alene", slug: 'coeur-dalene-idaho', state: 'Idaho', pop: '55K+' },
  { name: 'Twin Falls', slug: 'twin-falls-idaho', state: 'Idaho', pop: '55K+' },
  { name: 'Caldwell', slug: 'caldwell-idaho', state: 'Idaho', pop: '65K+' },
  { name: 'Rexburg', slug: 'rexburg-idaho', state: 'Idaho', pop: '35K+' },
  
  // Maryland - more cities
  { name: 'Gaithersburg', slug: 'gaithersburg-maryland', state: 'Maryland', pop: '70K+' },
  { name: 'Columbia', slug: 'columbia-maryland', state: 'Maryland', pop: '105K+' },
  { name: 'Silver Spring', slug: 'silver-spring-maryland', state: 'Maryland', pop: '82K+' },
  { name: 'Annapolis', slug: 'annapolis-maryland', state: 'Maryland', pop: '40K+' },
  { name: 'Frederick', slug: 'frederick-maryland', state: 'Maryland', pop: '80K+' },
  { name: 'Hagerstown', slug: 'hagerstown-maryland', state: 'Maryland', pop: '45K+' },
  { name: 'Rockville', slug: 'rockville-maryland', state: 'Maryland', pop: '70K+' },
  
  // Massachusetts - more cities
  { name: 'Cambridge', slug: 'cambridge-massachusetts', state: 'Massachusetts', pop: '120K+' },
  { name: 'Fall River', slug: 'fall-river-massachusetts', state: 'Massachusetts', pop: '95K+' },
  
  // Washington - more cities
  { name: 'Auburn', slug: 'auburn-washington', state: 'Washington', pop: '90K+' },
  { name: 'Bellingham', slug: 'bellingham-washington', state: 'Washington', pop: '95K+' },
  { name: 'Bothell', slug: 'bothell-washington', state: 'Washington', pop: '48K+' },
  { name: 'Burien', slug: 'burien-washington', state: 'Washington', pop: '52K+' },
  { name: 'Edmonds', slug: 'edmonds-washington', state: 'Washington', pop: '42K+' },
  { name: 'Federal Way', slug: 'federal-way-washington', state: 'Washington', pop: '100K+' },
  { name: 'Kennewick', slug: 'kennewick-washington', state: 'Washington', pop: '85K+' },
  { name: 'Lakewood', slug: 'lakewood-washington', state: 'Washington', pop: '63K+' },
  { name: 'Lynnwood', slug: 'lynnwood-washington', state: 'Washington', pop: '40K+' },
  { name: 'Marysville', slug: 'marysville-washington', state: 'Washington', pop: '72K+' },
  { name: 'Mount Vernon', slug: 'mount-vernon-washington', state: 'Washington', pop: '36K+' },
  { name: 'Olympia', slug: 'olympia-washington', state: 'Washington', pop: '55K+' },
  { name: 'Pasco', slug: 'pasco-washington', state: 'Washington', pop: '75K+' },
  { name: 'Pullman', slug: 'pullman-washington', state: 'Washington', pop: '33K+' },
  { name: 'Redmond', slug: 'redmond-washington', state: 'Washington', pop: '75K+' },
  { name: 'Renton', slug: 'renton-washington', state: 'Washington', pop: '105K+' },
  { name: 'Richland', slug: 'richland-washington', state: 'Washington', pop: '60K+' },
  { name: 'Shoreline', slug: 'shoreline-washington', state: 'Washington', pop: '58K+' },
  { name: 'Spokane Valley', slug: 'spokane-valley-washington', state: 'Washington', pop: '105K+' },
  { name: 'Tacoma', slug: 'tacoma-washington', state: 'Washington', pop: '220K+' },
  { name: 'Vancouver', slug: 'vancouver-washington', state: 'Washington', pop: '190K+' },
  { name: 'Wenatchee', slug: 'wenatchee-washington', state: 'Washington', pop: '35K+' },
  { name: 'Yakima', slug: 'yakima-washington', state: 'Washington', pop: '100K+' },
  
  // Kansas
  { name: 'Kansas City', slug: 'kansas-city-kansas', state: 'Kansas', pop: '160K+' },
  { name: 'Lawrence', slug: 'lawrence-kansas', state: 'Kansas', pop: '100K+' },
  { name: 'Manhattan', slug: 'manhattan-kansas', state: 'Kansas', pop: '55K+' },
  { name: 'Olathe', slug: 'olathe-kansas', state: 'Kansas', pop: '145K+' },
  { name: 'Overland Park', slug: 'overland-park-kansas', state: 'Kansas', pop: '200K+' },
  { name: 'Topeka', slug: 'topeka-kansas', state: 'Kansas', pop: '125K+' },
  { name: 'Wichita', slug: 'wichita-kansas', state: 'Kansas', pop: '400K+' },
  
  // Nebraska
  { name: 'Bellevue', slug: 'bellevue-nebraska', state: 'Nebraska', pop: '65K+' },
  { name: 'Grand Island', slug: 'grand-island-nebraska', state: 'Nebraska', pop: '53K+' },
  { name: 'Lincoln', slug: 'lincoln-nebraska', state: 'Nebraska', pop: '295K+' },
  { name: 'Omaha', slug: 'omaha-nebraska', state: 'Nebraska', pop: '490K+' },
  
  // New Mexico
  { name: 'Albuquerque', slug: 'albuquerque-new-mexico', state: 'New Mexico', pop: '565K+' },
  { name: 'Farmington', slug: 'farmington-new-mexico', state: 'New Mexico', pop: '46K+' },
  { name: 'Las Cruces', slug: 'las-cruces-new-mexico', state: 'New Mexico', pop: '115K+' },
  { name: 'Rio Rancho', slug: 'rio-rancho-new-mexico', state: 'New Mexico', pop: '105K+' },
  { name: 'Santa Fe', slug: 'santa-fe-new-mexico', state: 'New Mexico', pop: '88K+' },
  
  // Alabama - more cities
  { name: 'Decatur', slug: 'decatur-alabama', state: 'Alabama', pop: '57K+' },
  { name: 'Gadsden', slug: 'gadsden-alabama', state: 'Alabama', pop: '33K+' },
  { name: 'Hoover', slug: 'hoover-alabama', state: 'Alabama', pop: '92K+' },
  
  // Arkansas - more cities
  { name: 'Bentonville', slug: 'bentonville-arkansas', state: 'Arkansas', pop: '54K+' },
  { name: 'Conway', slug: 'conway-arkansas', state: 'Arkansas', pop: '67K+' },
  { name: 'Fayetteville', slug: 'fayetteville-arkansas', state: 'Arkansas', pop: '95K+' },
  { name: 'Fort Smith', slug: 'fort-smith-arkansas', state: 'Arkansas', pop: '89K+' },
  { name: 'Jonesboro', slug: 'jonesboro-arkansas', state: 'Arkansas', pop: '78K+' },
  { name: 'Little Rock', slug: 'little-rock-arkansas', state: 'Arkansas', pop: '202K+' },
  { name: 'North Little Rock', slug: 'north-little-rock-arkansas', state: 'Arkansas', pop: '65K+' },
  { name: 'Pine Bluff', slug: 'pine-bluff-arkansas', state: 'Arkansas', pop: '41K+' },
  { name: 'Rogers', slug: 'rogers-arkansas', state: 'Arkansas', pop: '69K+' },
  { name: 'Springdale', slug: 'springdale-arkansas', state: 'Arkansas', pop: '84K+' },
  
  // Connecticut - more cities
  { name: 'Bridgeport', slug: 'bridgeport-connecticut', state: 'Connecticut', pop: '150K+' },
  { name: 'Danbury', slug: 'danbury-connecticut', state: 'Connecticut', pop: '87K+' },
  { name: 'Hartford', slug: 'hartford-connecticut', state: 'Connecticut', pop: '120K+' },
  { name: 'New Britain', slug: 'new-britain-connecticut', state: 'Connecticut', pop: '74K+' },
  { name: 'New Haven', slug: 'new-haven-connecticut', state: 'Connecticut', pop: '135K+' },
  { name: 'Norwalk', slug: 'norwalk-connecticut', state: 'Connecticut', pop: '91K+' },
  { name: 'Stamford', slug: 'stamford-connecticut', state: 'Connecticut', pop: '135K+' },
  { name: 'Waterbury', slug: 'waterbury-connecticut', state: 'Connecticut', pop: '115K+' },
  
  // Maine
  { name: 'Augusta', slug: 'augusta-maine', state: 'Maine', pop: '19K+' },
  { name: 'Bangor', slug: 'bangor-maine', state: 'Maine', pop: '32K+' },
  { name: 'Lewiston', slug: 'lewiston-maine', state: 'Maine', pop: '38K+' },
  { name: 'Portland', slug: 'portland-maine', state: 'Maine', pop: '68K+' },
  
  // Rhode Island
  { name: 'Cranston', slug: 'cranston-rhode-island', state: 'Rhode Island', pop: '82K+' },
  { name: 'Pawtucket', slug: 'pawtucket-rhode-island', state: 'Rhode Island', pop: '75K+' },
  { name: 'Providence', slug: 'providence-rhode-island', state: 'Rhode Island', pop: '190K+' },
  { name: 'Warwick', slug: 'warwick-rhode-island', state: 'Rhode Island', pop: '85K+' },
  { name: 'Woonsocket', slug: 'woonsocket-rhode-island', state: 'Rhode Island', pop: '43K+' },
  
  // Vermont
  { name: 'Burlington', slug: 'burlington-vermont', state: 'Vermont', pop: '45K+' },
  { name: 'South Burlington', slug: 'south-burlington-vermont', state: 'Vermont', pop: '20K+' },
  
  // Hawaii
  { name: 'Hilo', slug: 'hilo-hawaii', state: 'Hawaii', pop: '45K+' },
  { name: 'Honolulu', slug: 'honolulu-hawaii', state: 'Hawaii', pop: '350K+' },
  { name: 'Kailua', slug: 'kailua-hawaii', state: 'Hawaii', pop: '40K+' },
  { name: 'Pearl City', slug: 'pearl-city-hawaii', state: 'Hawaii', pop: '48K+' },
  
  // North Dakota
  { name: 'Bismarck', slug: 'bismarck-north-dakota', state: 'North Dakota', pop: '75K+' },
  { name: 'Fargo', slug: 'fargo-north-dakota', state: 'North Dakota', pop: '130K+' },
  { name: 'Grand Forks', slug: 'grand-forks-north-dakota', state: 'North Dakota', pop: '60K+' },
  { name: 'Minot', slug: 'minot-north-dakota', state: 'North Dakota', pop: '50K+' },
  
  // South Dakota
  { name: 'Aberdeen', slug: 'aberdeen-south-dakota', state: 'South Dakota', pop: '28K+' },
  { name: 'Rapid City', slug: 'rapid-city-south-dakota', state: 'South Dakota', pop: '75K+' },
  { name: 'Sioux Falls', slug: 'sioux-falls-south-dakota', state: 'South Dakota', pop: '200K+' },
  
  // Montana
  { name: 'Billings', slug: 'billings-montana', state: 'Montana', pop: '120K+' },
  { name: 'Bozeman', slug: 'bozeman-montana', state: 'Montana', pop: '55K+' },
  { name: 'Butte', slug: 'butte-montana', state: 'Montana', pop: '35K+' },
  { name: 'Great Falls', slug: 'great-falls-montana', state: 'Montana', pop: '60K+' },
  { name: 'Helena', slug: 'helena-montana', state: 'Montana', pop: '35K+' },
  { name: 'Kalispell', slug: 'kalispell-montana', state: 'Montana', pop: '28K+' },
  { name: 'Missoula', slug: 'missoula-montana', state: 'Montana', pop: '80K+' },
  
  // Wyoming
  { name: 'Casper', slug: 'casper-wyoming', state: 'Wyoming', pop: '60K+' },
  { name: 'Cheyenne', slug: 'cheyenne-wyoming', state: 'Wyoming', pop: '65K+' },
  { name: 'Gillette', slug: 'gillette-wyoming', state: 'Wyoming', pop: '33K+' },
  { name: 'Laramie', slug: 'laramie-wyoming', state: 'Wyoming', pop: '32K+' },
  { name: 'Rock Springs', slug: 'rock-springs-wyoming', state: 'Wyoming', pop: '23K+' },
  { name: 'Sheridan', slug: 'sheridan-wyoming', state: 'Wyoming', pop: '19K+' },
  
  // West Virginia
  { name: 'Charleston', slug: 'charleston-west-virginia', state: 'West Virginia', pop: '48K+' },
  { name: 'Huntington', slug: 'huntington-west-virginia', state: 'West Virginia', pop: '46K+' },
  
  // Nevada - more cities
  { name: 'Boulder City', slug: 'boulder-city-nevada', state: 'Nevada', pop: '15K+' },
  { name: 'Elko', slug: 'elko-nevada', state: 'Nevada', pop: '20K+' },
  { name: 'Fallon', slug: 'fallon-nevada', state: 'Nevada', pop: '9K+' },
  { name: 'Fernley', slug: 'fernley-nevada', state: 'Nevada', pop: '25K+' },
  { name: 'Mesquite', slug: 'mesquite-nevada', state: 'Nevada', pop: '20K+' },
  { name: 'Pahrump', slug: 'pahrump-nevada', state: 'Nevada', pop: '38K+' },
  
  // Arizona - more cities
  { name: 'Prescott Valley', slug: 'prescott-valley-arizona', state: 'Arizona', pop: '48K+' },
  { name: 'Sierra Vista', slug: 'sierra-vista-arizona', state: 'Arizona', pop: '45K+' },
  
  // Additional smaller cities
  { name: 'Ames', slug: 'ames-iowa', state: 'Iowa', pop: '70K+' },
  { name: 'Iowa City', slug: 'iowa-city-iowa', state: 'Iowa', pop: '75K+' },
  { name: 'Des Moines', slug: 'des-moines-iowa', state: 'Iowa', pop: '215K+' },
  { name: 'Dubuque', slug: 'dubuque-iowa', state: 'Iowa', pop: '60K+' }
];

// Read states.ts to get existing cities
const statesFile = fs.readFileSync('./src/data/states.ts', 'utf8');
const existingCitySlugs = new Set();

// Extract all existing city slugs
const citySlugMatches = statesFile.matchAll(/slug:\s*'([^']+)'/g);
for (const match of citySlugMatches) {
  const slug = match[1];
  if (slug.includes('-') && slug.split('-').length >= 2) {
    existingCitySlugs.add(slug);
  }
}

console.log(`Found ${existingCitySlugs.size} existing cities in states.ts\n`);

// Find missing cities
const missingCities = targetCities.filter(city => !existingCitySlugs.has(city.slug));

console.log(`Missing Cities from Target List (${missingCities.length}):\n`);

// Group by state
const missingByState = {};
missingCities.forEach(city => {
  if (!missingByState[city.state]) {
    missingByState[city.state] = [];
  }
  missingByState[city.state].push(city);
});

// Display results - limit to first 100
const displayCities = missingCities.slice(0, 100);
const displayByState = {};
displayCities.forEach(city => {
  if (!displayByState[city.state]) {
    displayByState[city.state] = [];
  }
  displayByState[city.state].push(city);
});

Object.keys(displayByState).sort().forEach(state => {
  console.log(`${state} (${displayByState[state].length} missing):`);
  displayByState[state].forEach(city => {
    console.log(`  - ${city.name} (${city.slug}) - ${city.pop}`);
  });
  console.log('');
});

// Save to file
const report = {
  totalChecked: targetCities.length,
  existing: targetCities.length - missingCities.length,
  missing: missingCities.length,
  missingCities: missingCities.slice(0, 100), // First 100
  missingByState: displayByState
};

fs.writeFileSync('100_more_cities_report.json', JSON.stringify(report, null, 2));
console.log(`\n📄 Report saved to 100_more_cities_report.json`);

// Generate command to create first 100 missing cities
if (displayCities.length > 0) {
  const slugs = displayCities.map(c => c.slug).join(' ');
  console.log(`\n💡 To create first 100 missing cities, run:`);
  console.log(`node scripts/create_specific_city_pages.js ${slugs.substring(0, 500)}...`);
  console.log(`\n   (Command truncated - see 100_more_cities_report.json for full list)`);
  
  // Also show by state
  console.log(`\n📋 Create by state (recommended for large batches):`);
  Object.keys(displayByState).sort().forEach(state => {
    const stateSlugs = displayByState[state].map(c => c.slug).join(' ');
    if (stateSlugs.length < 2000) {
      console.log(`\n# ${state} (${displayByState[state].length} cities)`);
      console.log(`node scripts/create_specific_city_pages.js ${stateSlugs}`);
    } else {
      console.log(`\n# ${state} (${displayByState[state].length} cities - split into batches)`);
    }
  });
} else {
  console.log(`\n✅ All cities in the target list already exist!`);
}
