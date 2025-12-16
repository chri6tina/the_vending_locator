const fs = require('fs');
const path = require('path');

// Files with apostrophes that need comprehensive fixing
const filesToFix = [
  { slug: 'lees-summit-missouri', cityName: "Lee's Summit", escapedName: "Lee\\'s Summit" },
  { slug: 'ofallon-missouri', cityName: "O'Fallon", escapedName: "O\\'Fallon" }
];

filesToFix.forEach(({ slug, cityName, escapedName }) => {
  const filePath = path.join(__dirname, '..', 'src', 'app', 'vending-leads', slug, 'pageClient.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Fix ALL instances of the city name in single-quoted strings
  // This will catch: cityDisplayName, userNames array, FAQ questions, FAQ answers, etc.
  // Pattern: '...Lee's Summit...' or '...O'Fallon...'
  // We need to escape the apostrophe in the city name
  
  // Create a regex that matches the city name inside single quotes
  // We need to be careful not to match already escaped versions
  const regex = new RegExp(`([^\\\\])'${cityName.replace(/'/g, "\\'")}([^\\\\'])`, 'g');
  
  // Replace unescaped instances
  content = content.replace(regex, `$1'${escapedName}$2`);
  
  // Also handle cases at the start of strings
  content = content.replace(new RegExp(`'${cityName.replace(/'/g, "\\'")}([^\\\\'])`, 'g'), `'${escapedName}$1`);
  
  // Also handle "city's" pattern - escape apostrophes in possessive forms
  content = content.replace(/([a-zA-Z])'s([^\\'])/g, "$1\\'s$2");
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${slug}`);
  } else {
    console.log(`ℹ️  No changes needed: ${slug}`);
  }
});

console.log('\n✅ Done!');

