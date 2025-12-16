const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Fix incorrectly escaped closing quotes
// The pattern \', at the end of a permitNotes line should be ',
// The backslash is escaping the closing quote, making the string unterminated
content = content.replace(/\\',\s*$/gm, "',");

// Also fix any instances where we have \', followed by a newline and then demandDrivers or other properties
content = content.replace(/\\',\s*\n\s*(demandDrivers|seasonalNote|neighborhoods|extraFaqs)/g, "',\n    $1");

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed incorrectly escaped closing quotes');

