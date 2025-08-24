const fs = require('fs');
const path = require('path');

// Function to remove remaining unused variables
function removeUnusedVariables(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused variables from recent purchase system
    content = content.replace(/const \[currentPurchaseIndex, setCurrentPurchaseIndex\] = useState\(0\)\s*\n\s*const \[usedPurchases, setUsedPurchases\] = useState\(new Set\(\)\)/g, '');
    
    // Also remove any remaining references
    content = content.replace(/currentPurchaseIndex/g, '');
    content = content.replace(/setCurrentPurchaseIndex/g, '');
    content = content.replace(/usedPurchases/g, '');
    content = content.replace(/setUsedPurchases/g, '');

    // Clean up any extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Cleaned up unused variables: ${filePath}`);
      return true;
    } else {
      console.log(`⏭️  No unused variables to clean: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process all vending-leads pages
function cleanupAllFiles() {
  const vendingLeadsDir = path.join(__dirname, 'src', 'app', 'vending-leads');
  
  if (!fs.existsSync(vendingLeadsDir)) {
    console.error('❌ Vending leads directory not found');
    return;
  }

  let totalFiles = 0;
  let cleanedFiles = 0;

  function processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (item === 'page.tsx') {
        totalFiles++;
        if (removeUnusedVariables(fullPath)) {
          cleanedFiles++;
        }
      }
    }
  }

  processDirectory(vendingLeadsDir);
  
  console.log(`\n🎯 Summary:`);
  console.log(`📁 Total files processed: ${totalFiles}`);
  console.log(`✅ Files cleaned: ${cleanedFiles}`);
  console.log(`⏭️  Files unchanged: ${totalFiles - cleanedFiles}`);
}

// Run the script
console.log('🚀 Starting final cleanup of unused variables in all vending-leads pages...\n');
cleanupAllFiles();
console.log('\n✨ Done!');
