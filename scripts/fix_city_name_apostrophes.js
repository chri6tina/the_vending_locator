const fs = require('fs');
const path = require('path');

// Files with apostrophes in city names that need fixing
const filesToFix = [
  'lees-summit-missouri',
  'ofallon-missouri',
  'st-paul-minnesota'
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
    // Fix Lee's Summit - escape apostrophes in single-quoted strings
    content = content.replace(/const cityDisplayName = 'Lee's Summit';/g, "const cityDisplayName = 'Lee\\'s Summit';");
    content = content.replace(/'Lee's Summit'/g, "'Lee\\'s Summit'");
  } else if (citySlug === 'ofallon-missouri') {
    // Fix O'Fallon - escape apostrophes in single-quoted strings
    content = content.replace(/const cityDisplayName = 'O'Fallon';/g, "const cityDisplayName = 'O\\'Fallon';");
    content = content.replace(/'O'Fallon'/g, "'O\\'Fallon'");
  } else if (citySlug === 'st-paul-minnesota') {
    // Fix St. Paul - function name can't have a period, replace with underscore or remove
    content = content.replace(/export default function St\.PaulMinnesotaVendingLeadsPage\(\)/g, 'export default function StPaulMinnesotaVendingLeadsPage()');
    // Also fix city display name if needed
    content = content.replace(/const cityDisplayName = 'St\. Paul';/g, "const cityDisplayName = 'St. Paul';");
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${citySlug}`);
  } else {
    console.log(`ℹ️  No changes needed: ${citySlug}`);
  }
});

console.log('\n✅ Done!');

