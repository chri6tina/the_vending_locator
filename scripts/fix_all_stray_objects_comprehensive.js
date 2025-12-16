const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Pattern to find and remove:
//   }
//      {
//        q: 'Do I need special permits?',
//        a: '...'
//      }
//    ]
//  },
// This appears after a city object closes but before the next city starts

// Use regex to find and remove this pattern
const pattern = /(\s+\})\s+\{\s+q: 'Do I need special permits\?',\s+a: '[^']+'\s+\}\s+\]\s+\},/g;

let newContent = content;
let matchCount = 0;

// Find all matches
let match;
while ((match = pattern.exec(content)) !== null) {
  matchCount++;
}

// Replace all occurrences
newContent = content.replace(pattern, '$1');

// Also check for the pattern without the comma at the end
const pattern2 = /(\s+\})\s+\{\s+q: 'Do I need special permits\?',\s+a: '[^']+'\s+\}\s+\]\s+\}/g;
newContent = newContent.replace(pattern2, '$1');

// More comprehensive: find any pattern where we have:
//   }
//      {
//        q: ...
//        a: ...
//      }
//    ]
//  },
// This is a stray FAQ entry outside of any city object
const pattern3 = /(\s+\})\s+(\s+)\{\s+(\s+)q: '[^']+',\s+(\s+)a: '[^']+'\s+(\s+)\}\s+(\s+)\]\s+(\s+)\},/gm;
newContent = newContent.replace(pattern3, '$1');

fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Fixed stray object entries`);

