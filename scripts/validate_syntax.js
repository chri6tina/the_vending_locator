const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
const content = fs.readFileSync(filePath, 'utf8');

// Find the cityInfo object
const objStart = content.indexOf('const cityInfo');
const objEquals = content.indexOf('= {', objStart);
const exportStart = content.indexOf('export async function generateMetadata');

if (objStart === -1 || objEquals === -1 || exportStart === -1) {
  console.error('Could not find boundaries');
  process.exit(1);
}

const objectContent = content.substring(objEquals + 3, exportStart).trim();
const lines = objectContent.split('\n');

// Count braces and brackets
let braceCount = 0;
let bracketCount = 0;
let issues = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const openBraces = (line.match(/\{/g) || []).length;
  const closeBraces = (line.match(/\}/g) || []).length;
  const openBrackets = (line.match(/\[/g) || []).length;
  const closeBrackets = (line.match(/\]/g) || []).length;
  
  braceCount += openBraces - closeBraces;
  bracketCount += openBrackets - closeBrackets;
  
  // Check for potential issues
  if (line.trim() === '}' && braceCount === 0 && i < lines.length - 1) {
    const nextLine = lines[i + 1]?.trim();
    if (nextLine === '}') {
      console.log(`Object closes at line ${i + 1} (relative)`);
    }
  }
}

console.log(`Final brace count: ${braceCount}`);
console.log(`Final bracket count: ${bracketCount}`);

// Check the last few lines
console.log('\nLast 10 lines of object:');
lines.slice(-10).forEach((l, i) => {
  console.log(`${lines.length - 10 + i + 1}: ${l}`);
});

if (braceCount !== 0 || bracketCount !== 0) {
  console.error(`\n❌ Unbalanced braces/brackets!`);
  process.exit(1);
} else {
  console.log(`\n✅ Braces and brackets are balanced`);
}

