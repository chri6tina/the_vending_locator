const fs = require('fs');
const path = require('path');

// Get all city directories
const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', '_city-pages', 'vending-leads');
const cityDirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let fixed = 0;

cityDirs.forEach(citySlug => {
  const pageClientPath = path.join(vendingLeadsDir, citySlug, 'pageClient.tsx');
  
  if (!fs.existsSync(pageClientPath)) {
    return;
  }
  
  let content = fs.readFileSync(pageClientPath, 'utf8');
  let modified = false;
  
  // Find function names with periods
  const functionMatch = content.match(/export default function ([^(]+)\(\)/);
  
  if (functionMatch && functionMatch[1].includes('.')) {
    const oldFunctionName = functionMatch[1].trim();
    const newFunctionName = oldFunctionName.replace(/\./g, '');
    
    // Replace all occurrences
    content = content.replace(
      new RegExp(oldFunctionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
      newFunctionName
    );
    
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(pageClientPath, content, 'utf8');
    fixed++;
    
    if (fixed % 10 === 0) {
      console.log(`Fixed ${fixed} function names...`);
    }
  }
});

console.log(`\n✅ Fixed ${fixed} function names with periods`);
