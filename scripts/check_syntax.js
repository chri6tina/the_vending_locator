const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
const content = fs.readFileSync(filePath, 'utf8');

// Find the cityInfo object
const objStart = content.indexOf('const cityInfo');
const objEquals = content.indexOf('= {', objStart);
const exportStart = content.indexOf('export async function generateMetadata');

if (objStart === -1 || objEquals === -1 || exportStart === -1) {
  console.error('Could not find cityInfo object boundaries');
  process.exit(1);
}

const beforeObj = content.substring(0, objEquals + 3);
const objContent = content.substring(objEquals + 3, exportStart);
const afterObj = content.substring(exportStart);

// Check brace balance in the object
let openBraces = 0;
let openBrackets = 0;
let inString = false;
let stringChar = '';
let escapeNext = false;

for (let i = 0; i < objContent.length; i++) {
  const ch = objContent[i];
  
  if (escapeNext) {
    escapeNext = false;
    continue;
  }
  
  if (ch === '\\') {
    escapeNext = true;
    continue;
  }
  
  if (!inString) {
    if (ch === '{') openBraces++;
    else if (ch === '}') openBraces--;
    else if (ch === '[') openBrackets++;
    else if (ch === ']') openBrackets--;
    else if (ch === '\'' || ch === '"') {
      inString = true;
      stringChar = ch;
    }
  } else {
    if (ch === stringChar) {
      inString = false;
      stringChar = '';
    }
  }
}

console.log('Open braces:', openBraces);
console.log('Open brackets:', openBrackets);
console.log('In string:', inString);

if (openBraces !== 0 || openBrackets !== 0 || inString) {
  console.error('Unbalanced braces/brackets or unterminated string!');
  process.exit(1);
}

// Check the last few characters before export
const trimmed = objContent.trim();
const lastChars = trimmed.substring(trimmed.length - 10);
console.log('Last 10 chars of object:', JSON.stringify(lastChars));

// Check if it ends with }
if (!trimmed.endsWith('}')) {
  console.error('Object does not end with }');
  console.log('Last 50 chars:', JSON.stringify(trimmed.substring(trimmed.length - 50)));
  process.exit(1);
}

console.log('Syntax check passed!');

