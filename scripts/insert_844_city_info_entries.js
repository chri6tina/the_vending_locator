// Script to insert 844 generated cityInfo entries into page.tsx
const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
const generatedPath = path.join(__dirname, 'generated_844_city_info_entries.txt');

// Read the page file
let pageContent = fs.readFileSync(pagePath, 'utf8');
const lines = pageContent.split('\n');

// Find where cityInfo closes (before export statement)
let cityInfoCloseIndex = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === '}' && i > 950 && i < lines.length - 50) {
    // Check if next non-empty line is export
    for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
      if (lines[j].trim().startsWith('export async function generateMetadata')) {
        cityInfoCloseIndex = i;
        break;
      }
    }
    if (cityInfoCloseIndex !== -1) break;
  }
}

if (cityInfoCloseIndex === -1) {
  console.error('❌ Could not find cityInfo closing brace');
  process.exit(1);
}

console.log(`Found cityInfo closing brace at line ${cityInfoCloseIndex + 1}`);

// Read the generated entries
const generatedEntries = fs.readFileSync(generatedPath, 'utf8');

// Insert the entries with a comma before them
const newLines = [
  ...lines.slice(0, cityInfoCloseIndex),
  ',',
  ...generatedEntries.split('\n'),
  ...lines.slice(cityInfoCloseIndex)
];

// Write back
fs.writeFileSync(pagePath, newLines.join('\n'), 'utf8');

console.log(`✅ Successfully inserted 844 cityInfo entries into page.tsx`);
console.log(`   Total lines: ${newLines.length}`);
console.log(`   Entries inserted before line ${cityInfoCloseIndex + 1}`);

