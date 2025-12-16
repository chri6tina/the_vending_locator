const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Fix all apostrophes in single-quoted strings
// Pattern: find strings that start with ' and contain an apostrophe before the closing '
// We need to escape apostrophes that are inside single-quoted strings

// Common patterns to fix:
// 1. seller's -> seller\'s
content = content.replace(/'California requires a seller's permit/g, "'California requires a seller\\'s permit");

// 2. vendor's -> vendor\'s  
content = content.replace(/'Ohio requires a vendor's license/g, "'Ohio requires a vendor\\'s license");

// 3. Any other apostrophes in permitNotes that are in single quotes
// Find permitNotes lines and fix apostrophes in them
content = content.replace(/(permitNotes:\s*')([^']*)'([^']*')/g, (match, p1, p2, p3) => {
  // If there's an apostrophe in the middle, escape it
  if (p2.includes("'") && !p2.includes("\\'")) {
    return p1 + p2.replace(/'/g, "\\'") + p3;
  }
  return match;
});

// More comprehensive: find any single-quoted string in permitNotes that has an unescaped apostrophe
// This is a more general fix
const lines = content.split('\n');
let inPermitNotes = false;
let fixedLines = [];

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  if (line.includes('permitNotes:')) {
    inPermitNotes = true;
  }
  
  if (inPermitNotes) {
    // Check if this line has a single-quoted string with an apostrophe
    // Pattern: '...'...'...'
    // We need to escape apostrophes that are inside the quotes
    if (line.match(/^[^']*'[^']*'[^']*'[^']*$/)) {
      // This line has a string with an apostrophe in it
      // Escape apostrophes that are inside single quotes
      line = line.replace(/(\s*')([^']*)'([^']*')/g, (match, p1, p2, p3) => {
        // Escape the apostrophe in the middle
        return p1 + p2 + "\\'" + p3.substring(1); // Remove the quote from p3 and add escaped quote
      });
    }
    
    // If line ends with a closing quote and comma, we're done with permitNotes
    if (line.trim().endsWith("',") || line.trim().endsWith("'")) {
      inPermitNotes = false;
    }
  }
  
  fixedLines.push(line);
}

content = fixedLines.join('\n');

// Actually, let's use a simpler approach - just fix the known patterns
content = fs.readFileSync(filePath, 'utf8');

// Fix seller's
content = content.replace(/'California requires a seller's permit/g, "'California requires a seller\\'s permit");

// Fix vendor's
content = content.replace(/'Ohio requires a vendor's license/g, "'Ohio requires a vendor\\'s license");

// Fix any other common patterns
// Look for patterns like: '...word's...'
// But be careful not to break already escaped ones
content = content.replace(/(permitNotes:\s*'[^']*)'([^']*')/g, (match, p1, p2) => {
  // Only fix if it's not already escaped
  if (!p1.endsWith("\\")) {
    return p1 + "\\'" + p2;
  }
  return match;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed all apostrophes in permitNotes strings');

