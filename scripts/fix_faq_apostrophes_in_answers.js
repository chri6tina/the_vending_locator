const fs = require('fs');
const path = require('path');

// Files with apostrophes in FAQ answers that need fixing
const filesToFix = [
  'lees-summit-missouri',
  'ofallon-missouri'
];

filesToFix.forEach(citySlug => {
  const filePath = path.join(__dirname, '..', 'src', 'app', 'vending-leads', citySlug, 'pageClient.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Fix apostrophes in FAQ answer strings - look for patterns like "city's" in single-quoted strings
  // Pattern: a: '...text with city's...'
  // We need to escape apostrophes that are inside the answer strings
  content = content.replace(/(a: ')([^']*?)([a-zA-Z]+)'s([^']*?)(')/g, (match, prefix, before, word, after, suffix) => {
    // Only escape if not already escaped
    if (!before.endsWith('\\') && !after.startsWith('\\')) {
      return prefix + before + word + "\\'s" + after + suffix;
    }
    return match;
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${citySlug}`);
  } else {
    console.log(`ℹ️  No changes needed: ${citySlug}`);
  }
});

console.log('\n✅ Done!');

