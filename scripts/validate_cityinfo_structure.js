const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
const content = fs.readFileSync(filePath, 'utf8');

// Find the cityInfo object
const cityInfoStart = content.indexOf('const cityInfo: Record<string, {');
const cityInfoEnd = content.indexOf('export async function generateMetadata');

if (cityInfoStart === -1 || cityInfoEnd === -1) {
  console.error('Could not find cityInfo boundaries');
  process.exit(1);
}

const cityInfoSection = content.substring(cityInfoStart, cityInfoEnd);
const lines = cityInfoSection.split('\n');

// Count opening and closing braces
let braceCount = 0;
let lastBraceLine = 0;
let issues = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const openBraces = (line.match(/\{/g) || []).length;
  const closeBraces = (line.match(/\}/g) || []).length;
  braceCount += openBraces - closeBraces;
  
  if (closeBraces > 0) {
    lastBraceLine = i;
  }
  
  // Check for potential issues
  if (line.trim() === '}' && i < lines.length - 1) {
    const nextLine = lines[i + 1]?.trim();
    if (nextLine === '}' && braceCount === 0) {
      // This is the closing of the object
      console.log(`Object closes at line ${i + 1} (relative to cityInfo start)`);
    }
  }
}

console.log(`Final brace count: ${braceCount}`);
console.log(`Last brace found at line: ${lastBraceLine + 1}`);

// Extract just the object part (after the = {)
const objectStart = cityInfoSection.indexOf('= {');
if (objectStart !== -1) {
  const objectContent = cityInfoSection.substring(objectStart + 3);
  const objectLines = objectContent.split('\n');
  
  // Find the last city entry
  let lastCityLine = -1;
  for (let i = objectLines.length - 1; i >= 0; i--) {
    if (objectLines[i].includes("'suffolk-virginia'")) {
      lastCityLine = i;
      break;
    }
  }
  
  if (lastCityLine !== -1) {
    console.log(`\nLast city entry (suffolk-virginia) found at line ${lastCityLine + 1}`);
    console.log('Lines after last city:');
    for (let i = lastCityLine; i < Math.min(lastCityLine + 15, objectLines.length); i++) {
      console.log(`${i + 1}: ${objectLines[i]}`);
    }
  }
}

