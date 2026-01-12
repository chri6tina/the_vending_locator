const fs = require('fs');
const path = require('path');

// Get all city directories
const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', '_city-pages', 'vending-leads');
const cityDirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let fixed = 0;
let errors = 0;

cityDirs.forEach(citySlug => {
  const pageClientPath = path.join(vendingLeadsDir, citySlug, 'pageClient.tsx');
  
  if (!fs.existsSync(pageClientPath)) {
    return;
  }
  
  let content = fs.readFileSync(pageClientPath, 'utf8');
  
  // Find the function name in the file
  const functionMatch = content.match(/export default function (\w+)\(\)/);
  
  if (!functionMatch) {
    return;
  }
  
  const currentFunctionName = functionMatch[1];
  
  // Check if function name contains invalid characters (periods, hyphens, etc.)
  if (currentFunctionName.includes('.') || currentFunctionName.includes('-')) {
    // Extract city and state from slug
    const parts = citySlug.split('-');
    
    // Find state slug (longest match from end)
    const statesPath = path.join(__dirname, '..', 'src', 'data', 'states.ts');
    const statesContent = fs.readFileSync(statesPath, 'utf8');
    const stateRegex = /slug:\s*'([^']+)'/g;
    const stateSlugs = [];
    let match;
    while ((match = stateRegex.exec(statesContent)) !== null) {
      stateSlugs.push(match[1]);
    }
    
    // Sort by length descending to match longest first
    stateSlugs.sort((a, b) => b.length - a.length);
    
    let stateSlug = '';
    for (const slug of stateSlugs) {
      if (citySlug.endsWith(`-${slug}`)) {
        stateSlug = slug;
        break;
      }
    }
    
    if (!stateSlug) {
      console.log(`⚠️  Could not find state for ${citySlug}`);
      errors++;
      return;
    }
    
    // Generate valid function name
    const cityPart = citySlug.replace(`-${stateSlug}`, '').split('-').map(part => {
      // Remove periods and other invalid chars, capitalize
      return part.replace(/[^a-zA-Z0-9]/g, '').split('').map((char, idx) => 
        idx === 0 ? char.toUpperCase() : char.toLowerCase()
      ).join('');
    }).join('');
    
    const statePart = stateSlug.split('-').map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join('');
    
    const validFunctionName = `${cityPart}${statePart}VendingLeadsPage`;
    
    // Replace the function name
    content = content.replace(
      new RegExp(`export default function ${currentFunctionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\(\\)`, 'g'),
      `export default function ${validFunctionName}()`
    );
    
    fs.writeFileSync(pageClientPath, content, 'utf8');
    fixed++;
    
    if (fixed % 50 === 0) {
      console.log(`Fixed ${fixed} function names...`);
    }
  }
});

console.log(`\n✅ Fixed ${fixed} invalid function names`);
console.log(`⚠️  ${errors} errors (could not determine state)`);
