// Fix the cityInfo entries insertion - move them inside the cityInfo object
const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');
const lines = content.split('\n');

// Find where cityInfo closes (line 961, index 960)
const cityInfoCloseIndex = 960; // Line 961 is index 960

// Find where the new entries start (line 1386, index 1385)
const entriesStartIndex = 1385; // Line 1386 is index 1385

// Find where the entries end (last line before export or end of file)
let entriesEndIndex = lines.length - 1;
for (let i = entriesStartIndex; i < lines.length; i++) {
  if (lines[i].trim().startsWith('export ') || lines[i].trim().startsWith('// Enable ISR')) {
    entriesEndIndex = i - 1;
    break;
  }
}

// Extract the entries (including the comma on line 1385)
const entries = lines.slice(entriesStartIndex, entriesEndIndex + 1).join('\n');

// Remove the entries from their current location
const beforeEntries = lines.slice(0, entriesStartIndex);
const afterEntries = lines.slice(entriesEndIndex + 1);

// Insert entries before the closing brace of cityInfo
const newLines = [
  ...beforeEntries.slice(0, cityInfoCloseIndex),
  ',',
  ...entries.split('\n'),
  ...beforeEntries.slice(cityInfoCloseIndex + 1, entriesStartIndex),
  ...afterEntries
];

// Write back
fs.writeFileSync(pagePath, newLines.join('\n'), 'utf8');

console.log(`✅ Fixed insertion: Moved entries from line ${entriesStartIndex + 1} to before line ${cityInfoCloseIndex + 1}`);
console.log(`   Total lines: ${newLines.length}`);

