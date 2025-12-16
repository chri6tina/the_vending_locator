const fs = require('fs');
const path = require('path');

// Files with apostrophes in user names that need fixing
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
  
  if (citySlug === 'lees-summit-missouri') {
    // Fix all instances of Lee's Summit in user names array
    content = content.replace(/'Lee's Summit'/g, "'Lee\\'s Summit'");
  } else if (citySlug === 'ofallon-missouri') {
    // Fix all instances of O'Fallon in user names array
    content = content.replace(/'O'Fallon'/g, "'O\\'Fallon'");
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${citySlug}`);
  } else {
    console.log(`ℹ️  No changes needed: ${citySlug}`);
  }
});

console.log('\n✅ Done!');

