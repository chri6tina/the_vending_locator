const fs = require('fs');
const path = require('path');

// Read existing pages
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

// Comprehensive list of 500+ cities
// I'll create this systematically by including cities from all states
const allPossibleCities = [];

// Common city name patterns that appear across multiple states
const commonCityNames = [
  'Albany', 'Alexandria', 'Anderson', 'Arlington', 'Athens', 'Auburn', 'Aurora',
  'Birmingham', 'Bloomington', 'Bowling Green', 'Buffalo', 'Burlington',
  'Canton', 'Cedar Rapids', 'Champaign', 'Charleston', 'Charlotte', 'Chattanooga',
  'Cleveland', 'Columbia', 'Columbus', 'Concord', 'Corpus Christi', 'Covington',
  'Dallas', 'Dayton', 'Decatur', 'Denver', 'Des Moines', 'Dover', 'Durham',
  'El Paso', 'Eugene', 'Evansville', 'Fairfield', 'Fargo', 'Fayetteville',
  'Florence', 'Fort Wayne', 'Fort Worth', 'Frankfort', 'Fresno', 'Gainesville',
  'Gary', 'Gastonia', 'Glendale', 'Grand Rapids', 'Greensboro', 'Greenville',
  'Harrisburg', 'Hartford', 'Henderson', 'Huntington', 'Indianapolis', 'Jackson',
  'Jacksonville', 'Jefferson City', 'Jersey City', 'Kansas City', 'Knoxville',
  'Lafayette', 'Lancaster', 'Lansing', 'Lexington', 'Lincoln', 'Little Rock',
  'Louisville', 'Madison', 'Manchester', 'Memphis', 'Miami', 'Milwaukee',
  'Minneapolis', 'Mobile', 'Montgomery', 'Nashville', 'Newark', 'Newport',
  'Norfolk', 'Oakland', 'Oklahoma City', 'Omaha', 'Orlando', 'Pasadena',
  'Peoria', 'Philadelphia', 'Phoenix', 'Pittsburgh', 'Portland', 'Providence',
  'Raleigh', 'Reading', 'Richmond', 'Riverside', 'Rochester', 'Rockford',
  'Sacramento', 'Salem', 'Salt Lake City', 'San Antonio', 'San Diego',
  'San Francisco', 'San Jose', 'Santa Ana', 'Savannah', 'Scranton', 'Seattle',
  'Shreveport', 'Sioux Falls', 'South Bend', 'Spokane', 'Springfield', 'St. Louis',
  'St. Paul', 'St. Petersburg', 'Stockton', 'Syracuse', 'Tacoma', 'Tallahassee',
  'Tampa', 'Toledo', 'Topeka', 'Trenton', 'Tucson', 'Tulsa', 'Tyler', 'Utica',
  'Vallejo', 'Vancouver', 'Virginia Beach', 'Waco', 'Warren', 'Washington',
  'Waterbury', 'Wichita', 'Wilmington', 'Winston-Salem', 'Worcester', 'Yonkers',
  'Youngstown'
];

// States list
const allStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming', 'District of Columbia'
];

// Generate city combinations
// But we need more specific cities. Let me create a comprehensive list from real data
// I'll create cities systematically from all states

// For efficiency, let me create a large JSON file with 500+ cities
// and then filter out existing ones

// Let me create a comprehensive list by reading from a source or generating systematically
// I'll create cities from all 50 states with various city names

