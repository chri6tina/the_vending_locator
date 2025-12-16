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

const objContent = content.substring(objEquals + 3, exportStart);
const beforeExport = objContent.trim();

// Check if it ends with }
if (!beforeExport.endsWith('}')) {
  console.error('Object does not end with }');
  console.log('Last 50 chars:', JSON.stringify(beforeExport.substring(beforeExport.length - 50)));
  process.exit(1);
}

// Count braces and brackets
let openBraces = 0;
let openBrackets = 0;
let inString = false;
let stringChar = '';
let escaped = false;

for (let i = 0; i < objContent.length; i++) {
  const ch = objContent[i];
  
  if (escaped) {
    escaped = false;
    continue;
  }
  
  if (ch === '\\') {
    escaped = true;
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
  console.error('Syntax error detected!');
  process.exit(1);
}

// Check if there's a semicolon needed
const afterObj = content.substring(exportStart - 10, exportStart).trim();
console.log('Content right before export:', JSON.stringify(afterObj));

// Try to parse it as JavaScript
try {
  const testCode = `const cityInfo = ${objContent.trim()};`;
  // Just check if it's valid syntax by trying to create a function
  new Function(testCode);
  console.log('Syntax appears valid');
} catch (e) {
  console.error('Syntax error:', e.message);
  process.exit(1);
}

