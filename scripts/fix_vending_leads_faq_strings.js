const fs = require('fs');
const path = require('path');

// List of files with broken FAQ strings
const filesToFix = [
  'src/app/_city-pages/vending-leads/akron-ohio/pageClient.tsx',
  'src/app/_city-pages/vending-leads/charleston-south-carolina/pageClient.tsx',
  'src/app/_city-pages/vending-leads/cincinnati-ohio/pageClient.tsx',
  'src/app/_city-pages/vending-leads/columbia-south-carolina/pageClient.tsx',
  'src/app/_city-pages/vending-leads/dayton-ohio/pageClient.tsx',
  'src/app/_city-pages/vending-leads/edison-new-jersey/pageClient.tsx',
  'src/app/_city-pages/vending-leads/evansville-indiana/pageClient.tsx',
  'src/app/_city-pages/vending-leads/kent-washington/pageClient.tsx',
  'src/app/_city-pages/vending-leads/mount-pleasant-south-carolina/pageClient.tsx',
  'src/app/_city-pages/vending-leads/north-charleston-south-carolina/pageClient.tsx',
  'src/app/_city-pages/vending-leads/south-bend-indiana/pageClient.tsx',
  'src/app/_city-pages/vending-leads/springfield-missouri/pageClient.tsx',
  'src/app/_city-pages/vending-leads/st-louis-missouri/pageClient.tsx',
  'src/app/_city-pages/vending-leads/woodbridge-new-jersey/pageClient.tsx',
  'src/app/_city-pages/vending-leads/youngstown-ohio/pageClient.tsx',
];

// Revenue ranges for each city (extracted from the broken strings)
const revenueRanges = {
  'akron-ohio': '$50-600+',
  'charleston-south-carolina': '$80-720+',
  'cincinnati-ohio': '$80-650+',
  'columbia-south-carolina': '$50-600+',
  'dayton-ohio': '$40-550+',
  'edison-new-jersey': '$50-600+',
  'evansville-indiana': '$50-600+',
  'kent-washington': '$60-640+',
  'mount-pleasant-south-carolina': '$100-400+',
  'north-charleston-south-carolina': '$20-480+',
  'south-bend-indiana': '$20-480+',
  'springfield-missouri': '$50-600+',
  'st-louis-missouri': '$80-700+',
  'woodbridge-new-jersey': '$20-500+',
  'youngstown-ohio': '$20-500+',
};

// Descriptions for each city (extracted from the broken strings)
const descriptions = {
  'akron-ohio': 'Manufacturing facilities and universities tend to perform best due to consistent foot traffic.',
  'charleston-south-carolina': 'Port facilities and tourism venues tend to perform best due to consistent foot traffic.',
  'cincinnati-ohio': 'Corporate offices and healthcare facilities tend to perform best due to consistent foot traffic.',
  'columbia-south-carolina': 'Government buildings and educational institutions tend to perform best due to consistent foot traffic.',
  'dayton-ohio': 'Aerospace facilities and universities tend to perform best due to consistent foot traffic.',
  'edison-new-jersey': 'Technology companies and corporate offices tend to perform best due to high employee traffic.',
  'evansville-indiana': 'Manufacturing facilities and corporate offices tend to perform best due to consistent foot traffic.',
  'kent-washington': 'Distribution centers and corporate offices tend to perform best due to consistent foot traffic.',
  'mount-pleasant-south-carolina': 'Retail centers and corporate offices tend to perform best due to consistent foot traffic.',
  'north-charleston-south-carolina': 'Industrial facilities and corporate offices tend to perform best due to consistent foot traffic.',
  'south-bend-indiana': 'Educational institutions and corporate offices tend to perform best due to consistent foot traffic.',
  'springfield-missouri': 'Healthcare facilities and universities tend to perform best due to consistent foot traffic.',
  'st-louis-missouri': 'Corporate offices and universities tend to perform best due to consistent foot traffic.',
  'woodbridge-new-jersey': 'Shopping centers and corporate offices tend to perform best due to consistent foot traffic.',
  'youngstown-ohio': 'Manufacturing facilities and universities tend to perform best due to consistent foot traffic.',
};

filesToFix.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Extract slug from file path
  const slug = filePath.match(/vending-leads\/([^\/]+)\//)[1];
  const revenueRange = revenueRanges[slug];
  const description = descriptions[slug];
  
  if (!revenueRange || !description) {
    console.log(`Missing data for ${slug}`);
    return;
  }

  // Fix the broken FAQ answer string
  // Pattern: answer: "Vending machine revenue... typically generate \n\n      [revenue] per month..."
  const brokenPattern = /answer: "Vending machine revenue in \{cityDisplayName\} varies by location type, but our verified locations typically generate \s+\n\s+\n\s+([^\$]+)\+ per month per machine\. ([^"]+)"/g;
  
  const fixedAnswer = `answer: "Vending machine revenue in {cityDisplayName} varies by location type, but our verified locations typically generate ${revenueRange} per month per machine. ${description}"`;
  
  // Replace the broken pattern
  content = content.replace(
    /answer: "Vending machine revenue in \{cityDisplayName\} varies by location type, but our verified locations typically generate \s+\n\s+\n\s+[^\$]+\+ per month per machine\. [^"]+"/g,
    fixedAnswer
  );
  
  // Also fix the missing space in cityDisplayName declaration
  content = content.replace(
    /const cityDisplayName = '([^']+)';const stateDisplayName = '([^']+)';/g,
    "const cityDisplayName = '$1'; const stateDisplayName = '$2';"
  );
  
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Fixed: ${filePath}`);
});

console.log('Done fixing FAQ strings!');
