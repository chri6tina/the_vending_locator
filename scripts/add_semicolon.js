const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Find the closing brace of cityInfo and add semicolon
// Look for the pattern: closing brace, then blank lines, then export
const pattern = /(\}\n\n\n)(export async function generateMetadata)/;
if (pattern.test(content)) {
  content = content.replace(pattern, '};\n\n\n$2');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Added semicolon after cityInfo object');
} else {
  // Try alternative pattern - match just the closing brace before export
  const lines = content.split('\n');
  const line29282 = lines[29281]; // 0-indexed, so line 29282 is index 29281
  if (line29282 === '}') {
    // Replace line 29282 with '};'
    lines[29281] = '};';
    content = lines.join('\n');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Added semicolon after cityInfo object (line replacement)');
  } else {
    console.error('Could not find the pattern to replace');
    console.log('Line 29280:', lines[29279]);
    console.log('Line 29281:', lines[29280]);
    console.log('Line 29282:', lines[29281]);
    console.log('Line 29283:', lines[29282]);
    console.log('Line 29284:', lines[29283]);
    console.log('Line 29285:', lines[29284]);
    console.log('Line 29286:', lines[29285]);
    process.exit(1);
  }
}

