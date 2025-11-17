const fs = require('fs');

// Expanded list to get 50 cities - including smaller cities and more states
const expandedTargetCities = [
  // Already identified (23 cities)
  // California (4)
  { name: 'Napa', slug: 'napa-california', state: 'California', pop: '80K+' },
  { name: 'Mountain View', slug: 'mountain-view-california', state: 'California', pop: '85K+' },
  { name: 'Palm Desert', slug: 'palm-desert-california', state: 'California', pop: '52K+' },
  { name: 'Newport Beach', slug: 'newport-beach-california', state: 'California', pop: '85K+' },
  
  // Illinois (13)
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
  
  // Indiana (3)
  { name: 'Muncie', slug: 'muncie-indiana', state: 'Indiana', pop: '65K+' },
  { name: 'Terre Haute', slug: 'terre-haute-indiana', state: 'Indiana', pop: '60K+' },
  { name: 'Anderson', slug: 'anderson-indiana', state: 'Indiana', pop: '54K+' },
  
  // Michigan (1)
  { name: 'Port Huron', slug: 'port-huron-michigan', state: 'Michigan', pop: '28K+' },
  
  // Ohio (2)
  { name: 'Middletown', slug: 'middletown-ohio', state: 'Ohio', pop: '50K+' },
  { name: 'Newark', slug: 'newark-ohio', state: 'Ohio', pop: '50K+' },
  
  // Additional cities to reach 50 (27 more needed)
  // California - more cities
  { name: 'Torrance', slug: 'torrance-california', state: 'California', pop: '140K+' },
  { name: 'Pasadena', slug: 'pasadena-california', state: 'California', pop: '140K+' },
  { name: 'Hayward', slug: 'hayward-california', state: 'California', pop: '165K+' },
  { name: 'Fullerton', slug: 'fullerton-california', state: 'California', pop: '140K+' },
  { name: 'Concord', slug: 'concord-california', state: 'California', pop: '130K+' },
  { name: 'Corona', slug: 'corona-california', state: 'California', pop: '160K+' },
  { name: 'Elk Grove', slug: 'elk-grove-california', state: 'California', pop: '180K+' },
  { name: 'Fairfield', slug: 'fairfield-california', state: 'California', pop: '120K+' },
  { name: 'Fremont', slug: 'fremont-california', state: 'California', pop: '230K+' },
  { name: 'Inglewood', slug: 'inglewood-california', state: 'California', pop: '110K+' },
  { name: 'Lancaster', slug: 'lancaster-california', state: 'California', pop: '160K+' },
  { name: 'Palm Springs', slug: 'palm-springs-california', state: 'California', pop: '48K+' },
  { name: 'Pomona', slug: 'pomona-california', state: 'California', pop: '150K+' },
  { name: 'Roseville', slug: 'roseville-california', state: 'California', pop: '150K+' },
  { name: 'Salinas', slug: 'salinas-california', state: 'California', pop: '165K+' },
  { name: 'Santa Clara', slug: 'santa-clara-california', state: 'California', pop: '130K+' },
  { name: 'Simi Valley', slug: 'simi-valley-california', state: 'California', pop: '125K+' },
  { name: 'Thousand Oaks', slug: 'thousand-oaks-california', state: 'California', pop: '125K+' },
  { name: 'Vallejo', slug: 'vallejo-california', state: 'California', pop: '125K+' },
  { name: 'Ventura', slug: 'ventura-california', state: 'California', pop: '110K+' },
  { name: 'Visalia', slug: 'visalia-california', state: 'California', pop: '145K+' },
  { name: 'West Covina', slug: 'west-covina-california', state: 'California', pop: '110K+' },
  
  // Texas - more cities
  { name: 'Mesquite', slug: 'mesquite-texas', state: 'Texas', pop: '145K+' },
  { name: 'Carrollton', slug: 'carrollton-texas', state: 'Texas', pop: '140K+' },
  { name: 'Garland', slug: 'garland-texas', state: 'Texas', pop: '245K+' },
  { name: 'Frisco', slug: 'frisco-texas', state: 'Texas', pop: '210K+' },
  { name: 'McKinney', slug: 'mckinney-texas', state: 'Texas', pop: '210K+' },
  { name: 'Denton', slug: 'denton-texas', state: 'Texas', pop: '150K+' },
  { name: 'Richardson', slug: 'richardson-texas', state: 'Texas', pop: '120K+' },
  { name: 'Lewisville', slug: 'lewisville-texas', state: 'Texas', pop: '110K+' },
  { name: 'Allen', slug: 'allen-texas', state: 'Texas', pop: '110K+' },
  { name: 'Beaumont', slug: 'beaumont-texas', state: 'Texas', pop: '115K+' },
  { name: 'Brownsville', slug: 'brownsville-texas', state: 'Texas', pop: '185K+' },
  { name: 'Carrollton', slug: 'carrollton-texas', state: 'Texas', pop: '140K+' },
  { name: 'College Station', slug: 'college-station-texas', state: 'Texas', pop: '120K+' },
  { name: 'Conroe', slug: 'conroe-texas', state: 'Texas', pop: '90K+' },
  { name: 'Edinburg', slug: 'edinburg-texas', state: 'Texas', pop: '100K+' },
  { name: 'Killeen', slug: 'killeen-texas', state: 'Texas', pop: '155K+' },
  { name: 'McAllen', slug: 'mcallen-texas', state: 'Texas', pop: '145K+' },
  { name: 'Midland', slug: 'midland-texas', state: 'Texas', pop: '135K+' },
  { name: 'Odessa', slug: 'odessa-texas', state: 'Texas', pop: '115K+' },
  { name: 'Pasadena', slug: 'pasadena-texas', state: 'Texas', pop: '150K+' },
  { name: 'Round Rock', slug: 'round-rock-texas', state: 'Texas', pop: '130K+' },
  { name: 'Tyler', slug: 'tyler-texas', state: 'Texas', pop: '110K+' },
  
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
  
  // Arizona - more cities
  { name: 'Avondale', slug: 'avondale-arizona', state: 'Arizona', pop: '90K+' },
  { name: 'Buckeye', slug: 'buckeye-arizona', state: 'Arizona', pop: '95K+' },
  { name: 'Casa Grande', slug: 'casa-grande-arizona', state: 'Arizona', pop: '60K+' },
  { name: 'Goodyear', slug: 'goodyear-arizona', state: 'Arizona', pop: '95K+' },
  { name: 'Maricopa', slug: 'maricopa-arizona', state: 'Arizona', pop: '65K+' },
  { name: 'Prescott', slug: 'prescott-arizona', state: 'Arizona', pop: '45K+' },
  { name: 'Prescott Valley', slug: 'prescott-valley-arizona', state: 'Arizona', pop: '48K+' },
  { name: 'Sierra Vista', slug: 'sierra-vista-arizona', state: 'Arizona', pop: '45K+' },
  
  // Nevada - more cities
  { name: 'Boulder City', slug: 'boulder-city-nevada', state: 'Nevada', pop: '15K+' },
  { name: 'Carson City', slug: 'carson-city-nevada', state: 'Nevada', pop: '60K+' },
  { name: 'Elko', slug: 'elko-nevada', state: 'Nevada', pop: '20K+' },
  { name: 'Fallon', slug: 'fallon-nevada', state: 'Nevada', pop: '9K+' },
  { name: 'Fernley', slug: 'fernley-nevada', state: 'Nevada', pop: '25K+' },
  { name: 'Mesquite', slug: 'mesquite-nevada', state: 'Nevada', pop: '20K+' },
  { name: 'North Las Vegas', slug: 'north-las-vegas-nevada', state: 'Nevada', pop: '270K+' },
  { name: 'Sparks', slug: 'sparks-nevada', state: 'Nevada', pop: '110K+' },
  
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
  
  // Oregon - more cities
  { name: 'Albany', slug: 'albany-oregon', state: 'Oregon', pop: '60K+' },
  { name: 'Beaverton', slug: 'beaverton-oregon', state: 'Oregon', pop: '100K+' },
  { name: 'Bend', slug: 'bend-oregon', state: 'Oregon', pop: '105K+' },
  { name: 'Corvallis', slug: 'corvallis-oregon', state: 'Oregon', pop: '60K+' },
  { name: 'Eugene', slug: 'eugene-oregon', state: 'Oregon', pop: '175K+' },
  { name: 'Gresham', slug: 'gresham-oregon', state: 'Oregon', pop: '115K+' },
  { name: 'Hillsboro', slug: 'hillsboro-oregon', state: 'Oregon', pop: '110K+' },
  { name: 'Keizer', slug: 'keizer-oregon', state: 'Oregon', pop: '40K+' },
  { name: 'Medford', slug: 'medford-oregon', state: 'Oregon', pop: '90K+' },
  { name: 'Salem', slug: 'salem-oregon', state: 'Oregon', pop: '175K+' },
  { name: 'Springfield', slug: 'springfield-oregon', state: 'Oregon', pop: '62K+' },
  { name: 'Tigard', slug: 'tigard-oregon', state: 'Oregon', pop: '55K+' },
  
  // New York - more cities
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
  
  // Pennsylvania - more cities
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
  
  // New Hampshire
  { name: 'Concord', slug: 'concord-new-hampshire', state: 'New Hampshire', pop: '45K+' },
  { name: 'Derry', slug: 'derry-new-hampshire', state: 'New Hampshire', pop: '35K+' },
  { name: 'Dover', slug: 'dover-new-hampshire', state: 'New Hampshire', pop: '33K+' },
  { name: 'Manchester', slug: 'manchester-new-hampshire', state: 'New Hampshire', pop: '115K+' },
  { name: 'Merrimack', slug: 'merrimack-new-hampshire', state: 'New Hampshire', pop: '27K+' },
  { name: 'Nashua', slug: 'nashua-new-hampshire', state: 'New Hampshire', pop: '90K+' },
  { name: 'Portsmouth', slug: 'portsmouth-new-hampshire', state: 'New Hampshire', pop: '22K+' },
  { name: 'Rochester', slug: 'rochester-new-hampshire', state: 'New Hampshire', pop: '33K+' },
  { name: 'Salem', slug: 'salem-new-hampshire', state: 'New Hampshire', pop: '30K+' },
  
  // Delaware
  { name: 'Bear', slug: 'bear-delaware', state: 'Delaware', pop: '21K+' },
  { name: 'Dover', slug: 'dover-delaware', state: 'Delaware', pop: '39K+' },
  { name: 'Elsmere', slug: 'elsmere-delaware', state: 'Delaware', pop: '6K+' },
  { name: 'Georgetown', slug: 'georgetown-delaware', state: 'Delaware', pop: '7K+' },
  { name: 'Middletown', slug: 'middletown-delaware', state: 'Delaware', pop: '25K+' },
  { name: 'Milford', slug: 'milford-delaware', state: 'Delaware', pop: '12K+' },
  { name: 'Newark', slug: 'newark-delaware', state: 'Delaware', pop: '32K+' },
  { name: 'New Castle', slug: 'new-castle-delaware', state: 'Delaware', pop: '5K+' },
  { name: 'Seaford', slug: 'seaford-delaware', state: 'Delaware', pop: '8K+' },
  { name: 'Smyrna', slug: 'smyrna-delaware', state: 'Delaware', pop: '13K+' },
  { name: 'Wilmington', slug: 'wilmington-delaware', state: 'Delaware', pop: '71K+' },
  
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
  { name: 'Santa Fe', slug: 'santa-fe-new-mexico', state: 'New Mexico', pop: '88K+' }
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
const missingCities = expandedTargetCities.filter(city => !existingCitySlugs.has(city.slug));

console.log(`Missing Cities from Expanded List (${missingCities.length}):\n`);

// Group by state
const missingByState = {};
missingCities.forEach(city => {
  if (!missingByState[city.state]) {
    missingByState[city.state] = [];
  }
  missingByState[city.state].push(city);
});

// Display results - limit to first 50
const displayCities = missingCities.slice(0, 50);
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
  totalChecked: expandedTargetCities.length,
  existing: expandedTargetCities.length - missingCities.length,
  missing: missingCities.length,
  missingCities: missingCities.slice(0, 50), // First 50
  missingByState: displayByState
};

fs.writeFileSync('50_more_cities_expanded_report.json', JSON.stringify(report, null, 2));
console.log(`\n📄 Report saved to 50_more_cities_expanded_report.json`);

// Generate command to create first 50 missing cities
if (displayCities.length > 0) {
  const slugs = displayCities.map(c => c.slug).join(' ');
  console.log(`\n💡 To create first 50 missing cities, run:`);
  console.log(`node scripts/create_specific_city_pages.js ${slugs}`);
  
  // Also show by state
  console.log(`\n📋 Create by state:`);
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

