const fs = require('fs');
const path = require('path');

/**
 * Script to extract the cityInfo object from the large page.tsx file
 * into a separate data file to avoid webpack parser issues
 */

const pageFile = path.join(__dirname, '..', 'src', 'app', 'how-to-start-a-vending-machine-business', '[slug]', 'page.tsx');
const dataFile = path.join(__dirname, '..', 'src', 'data', 'cityInfo.ts');

console.log('📖 Reading page file...');
const content = fs.readFileSync(pageFile, 'utf8');
const lines = content.split('\n');

// Find the start and end of cityInfo object
// We know it starts around line 12 and ends around line 29282
let cityInfoStart = -1;
let cityInfoEnd = -1;

// Find the start - look for "const cityInfo"
for (let i = 0; i < 20; i++) {
  if (lines[i] && lines[i].includes('const cityInfo')) {
    cityInfoStart = i;
    break;
  }
}

// Find the end - look for the closing }; after line 29275
// The cityInfo object ends with }; on a line by itself
for (let i = 29275; i < Math.min(29285, lines.length); i++) {
  if (lines[i] && lines[i].trim() === '};') {
    // Check if previous line is part of the object (ends with } or },)
    const prevLine = lines[i - 1] || '';
    if (prevLine.trim().match(/^\s+\}[,\s]*$/)) {
      cityInfoEnd = i;
      break;
    }
  }
}

if (cityInfoStart === -1) {
  console.error('❌ Could not find cityInfo start');
  process.exit(1);
}

if (cityInfoEnd === -1) {
  console.error('❌ Could not find cityInfo end. Trying to find it...');
  // Try finding it by looking for the pattern
  for (let i = 29270; i < lines.length; i++) {
    if (lines[i] && lines[i].trim() === '};') {
      cityInfoEnd = i;
      console.log(`   Found potential end at line ${i + 1}`);
      break;
    }
  }
  
  if (cityInfoEnd === -1) {
    console.error('❌ Still could not find cityInfo end');
    process.exit(1);
  }
}

console.log(`✅ Found cityInfo object: lines ${cityInfoStart + 1} to ${cityInfoEnd + 1}`);

// Extract the cityInfo object
const cityInfoLines = lines.slice(cityInfoStart, cityInfoEnd + 1);
const cityInfoContent = cityInfoLines.join('\n');

// Create the data file with proper exports
const dataFileContent = `// City-specific enrichment data for how-to-start guides
// This file is extracted from the page.tsx to avoid webpack parser issues with large files

export type CityInfo = {
  permitNotes?: string
  demandDrivers?: string[]
  neighborhoods?: string[]
  seasonalNote?: string
  extraFaqs?: { q: string; a: string }[]
}

export const cityInfo: Record<string, CityInfo> = ${cityInfoContent.replace(/^const cityInfo:.*?=/, '').trim()};

`;

console.log('💾 Writing data file...');
fs.writeFileSync(dataFile, dataFileContent, 'utf8');
console.log(`✅ Created ${dataFile}`);

// Now update the page.tsx to import from the data file
console.log('📝 Updating page.tsx...');

// Find the import section
let importEnd = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === '' && i > 5) {
    importEnd = i;
    break;
  }
}

// Create new content
const newLines = [
  ...lines.slice(0, importEnd),
  "import { cityInfo } from '@/data/cityInfo'",
  ...lines.slice(importEnd, cityInfoStart),
  ...lines.slice(cityInfoEnd + 1)
];

const newContent = newLines.join('\n');
fs.writeFileSync(pageFile, newContent, 'utf8');

console.log('✅ Updated page.tsx to import cityInfo from data file');
console.log(`\n📊 Summary:`);
console.log(`   - Extracted ${cityInfoEnd - cityInfoStart + 1} lines to ${dataFile}`);
console.log(`   - Updated page.tsx to import from data file`);
console.log(`\n✨ Done! The cityInfo object is now in a separate file.`);

