// Script to insert generated cityInfo entries into page.tsx
const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
const generatedPath = path.join(__dirname, 'generated_city_info_entries.txt');

// Read the page file
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Read the generated entries
const generatedEntries = fs.readFileSync(generatedPath, 'utf8');

// Find the position to insert (before the closing brace of cityInfo)
const insertPosition = pageContent.indexOf('}\n\nexport async function generateMetadata');

// Insert the entries with a comma before them
const newContent = 
  pageContent.slice(0, insertPosition) + 
  ',\n' + generatedEntries + '\n' +
  pageContent.slice(insertPosition);

// Write back
fs.writeFileSync(pagePath, newContent, 'utf8');

console.log('✅ Successfully inserted 100 cityInfo entries into page.tsx');

