const fs = require('fs');
const path = require('path');

// Find all pageClient.tsx files
const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', 'vending-leads');
const files = [];

function findPageClientFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findPageClientFiles(fullPath);
    } else if (entry.name === 'pageClient.tsx') {
      files.push(fullPath);
    }
  }
}

findPageClientFiles(vendingLeadsDir);

console.log(`Found ${files.length} pageClient.tsx files`);

let fixedCount = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Fix trailing escaped apostrophes in FAQ answer strings
  // Pattern: ...machines.\' } should be ...machines.' }
  // Look for: a: '...text.\' } or a: '...text.\' },
  content = content.replace(/a: '([^']*?)\\'(\s*[},])/g, (match, text, suffix) => {
    return `a: '${text}'${suffix}`;
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
    console.log(`✅ Fixed: ${path.relative(vendingLeadsDir, filePath)}`);
  }
});

console.log(`\n✅ Fixed ${fixedCount} files`);

