const fs = require('fs');
const path = require('path');

function fixSmartQuotes(directory) {
  const basePath = path.join(process.cwd(), `src/app/${directory}`);
  let fixed = 0;
  
  function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subdirPath = path.join(dir, entry.name);
        const pageClientPath = path.join(subdirPath, 'pageClient.tsx');
        
        if (fs.existsSync(pageClientPath)) {
          try {
            let content = fs.readFileSync(pageClientPath, 'utf8');
            const original = content;
            
            // Replace smart quotes with regular quotes
            content = content
              .replace(/"/g, '"')  // Left double quote
              .replace(/"/g, '"')  // Right double quote
              .replace(/'/g, "'")  // Left single quote
              .replace(/'/g, "'")  // Right single quote
              .replace(/'/g, "'"); // Smart apostrophe
            
            if (content !== original) {
              fs.writeFileSync(pageClientPath, content, 'utf8');
              fixed++;
              console.log(`Fixed: ${entry.name}`);
            }
          } catch (error) {
            console.error(`Error processing ${pageClientPath}: ${error.message}`);
          }
        }
        
        processDirectory(subdirPath);
      }
    }
  }
  
  processDirectory(basePath);
  return fixed;
}

console.log('Fixing smart quotes in vending-leads...');
const vl = fixSmartQuotes('vending-leads');
console.log(`✓ Fixed ${vl} files\n`);

console.log('Fixing smart quotes in vending-services...');
const vs = fixSmartQuotes('vending-services');
console.log(`✓ Fixed ${vs} files\n`);

console.log('Fixing smart quotes in how-to-start...');
const hts = fixSmartQuotes('how-to-start-a-vending-machine-business');
console.log(`✓ Fixed ${hts} files\n`);

console.log(`\nTOTAL: ${vl + vs + hts} files fixed`);

