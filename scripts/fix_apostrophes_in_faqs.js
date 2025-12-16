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
  let modified = false;

  // Fix apostrophes in FAQ array - look for patterns like "city's" or "Alexandria's" in the FAQ array
  // We need to escape apostrophes in single-quoted strings within the FAQ array
  const faqArrayRegex = /const faqItems = \[([\s\S]*?)\];/;
  const match = content.match(faqArrayRegex);
  
  if (match) {
    let faqContent = match[1];
    let originalFaqContent = faqContent;
    
    // Find all single-quoted strings in the FAQ array and escape apostrophes
    // Pattern: a: '...' or q: '...'
    faqContent = faqContent.replace(/([qa]:\s*')([^']*?)(')/g, (match, prefix, text, suffix) => {
      // Escape apostrophes in the text
      const escapedText = text.replace(/'/g, "\\'");
      if (escapedText !== text) {
        modified = true;
      }
      return prefix + escapedText + suffix;
    });
    
    if (modified) {
      content = content.replace(faqArrayRegex, `const faqItems = [${faqContent}];`);
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
      console.log(`✅ Fixed: ${path.relative(vendingLeadsDir, filePath)}`);
    }
  }
});

console.log(`\n✅ Fixed ${fixedCount} files`);

