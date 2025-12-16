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
  
  // Fix apostrophes in FAQ array strings
  // Pattern: a: '...text with apostrophe's...'
  // We need to escape apostrophes that are inside single-quoted strings
  content = content.replace(/([qa]:\s*')([^']*?'[^']*?)(')/g, (match, prefix, text, suffix) => {
    // Only escape if there's an unescaped apostrophe in the text
    if (text.includes("'") && !text.includes("\\'")) {
      const escapedText = text.replace(/'/g, "\\'");
      return prefix + escapedText + suffix;
    }
    return match;
  });
  
  // Also handle cases where apostrophes appear in the middle of longer strings
  // Look for patterns like: a: '...city's...' or a: '...Alexandria's...'
  content = content.replace(/([qa]:\s*')([^']*?)([a-zA-Z]+)'s([^']*?)(')/g, (match, prefix, before, word, after, suffix) => {
    // Escape the apostrophe
    return prefix + before + word + "\\'s" + after + suffix;
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
    console.log(`✅ Fixed: ${path.relative(vendingLeadsDir, filePath)}`);
  }
});

console.log(`\n✅ Fixed ${fixedCount} files`);

