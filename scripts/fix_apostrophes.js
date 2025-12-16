const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Fix apostrophes in single-quoted strings
// Replace 'seller's with 'seller\'s
content = content.replace(/'California requires a seller's permit/g, "'California requires a seller\\'s permit");

// Also check for any other common apostrophes that might be in single quotes
// Fix any other instances where we have apostrophes in single-quoted strings
content = content.replace(/(permitNotes:\s*'[^']*)'([^']*')/g, (match, p1, p2) => {
  // If we find an apostrophe in a single-quoted string, escape it
  return p1 + "\\'" + p2;
});

// Actually, let's be more careful - only fix the specific pattern we know is broken
// Revert the last change and do it more carefully
content = fs.readFileSync(filePath, 'utf8');
content = content.replace(/'California requires a seller's permit/g, "'California requires a seller\\'s permit");

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed apostrophes in permitNotes strings');

