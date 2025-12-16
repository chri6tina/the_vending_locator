const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

let fixedLines = [];
let i = 0;
let removedCount = 0;

while (i < lines.length) {
  const line = lines[i];
  const nextLine = i + 1 < lines.length ? lines[i + 1] : '';
  const nextNextLine = i + 2 < lines.length ? lines[i + 2] : '';
  const nextNextNextLine = i + 3 < lines.length ? lines[i + 3] : '';
  const nextNextNextNextLine = i + 4 < lines.length ? lines[i + 4] : '';
  
  // Pattern: 
  //   }
  //      {
  //        q: '...',
  //        a: '...'
  //      }
  //    ]
  //  },
  if (line.trim() === '}' && 
      nextLine.trim() === '{' && 
      nextNextLine.trim().startsWith('q:') &&
      nextNextNextLine.trim().startsWith('a:') &&
      nextNextNextNextLine.trim() === '}' &&
      i + 5 < lines.length && lines[i + 5].trim() === ']' &&
      i + 6 < lines.length && lines[i + 6].trim() === '},') {
    // This is a stray object entry - skip it
    console.log(`Removing stray object at line ${i + 1}`);
    fixedLines.push(line); // Keep the closing brace
    i += 7; // Skip the stray object (6 lines) and the comma line
    removedCount++;
    continue;
  }
  
  fixedLines.push(line);
  i++;
}

const newContent = fixedLines.join('\n');
fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Fixed ${removedCount} stray object entries`);

