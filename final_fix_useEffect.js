const fs = require('fs');
const path = require('path');

// Function to fix the useEffect structure
function fixUseEffectStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the double return issue and incomplete useEffect
    // Look for the pattern: "}, 6000)\n    return () => clearInterval(interval)\n    return ("
    const doubleReturnRegex = /}, 6000\)\s*\n\s*return \(\) => clearInterval\(interval\)\s*\n\s*return \(/g;
    if (doubleReturnRegex.test(content)) {
      // Replace with proper useEffect closure and single return
      content = content.replace(doubleReturnRegex, '}, 6000)\n    return () => clearInterval(interval)\n  }, [])\n\n  return (');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed useEffect structure: ${filePath}`);
      return true;
    } else {
      console.log(`⏭️  No useEffect structure issues: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process all vending-leads pages
function fixAllUseEffectStructures() {
  const vendingLeadsDir = path.join(__dirname, 'src', 'app', 'vending-leads');
  
  if (!fs.existsSync(vendingLeadsDir)) {
    console.error('❌ Vending leads directory not found');
    return;
  }

  let totalFiles = 0;
  let fixedFiles = 0;

  function processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (item === 'page.tsx') {
        totalFiles++;
        if (fixUseEffectStructure(fullPath)) {
          fixedFiles++;
        }
      }
    }
  }

  processDirectory(vendingLeadsDir);
  
  console.log(`\n🎯 Summary:`);
  console.log(`📁 Total files processed: ${totalFiles}`);
  console.log(`✅ Files fixed: ${fixedFiles}`);
  console.log(`⏭️  Files unchanged: ${totalFiles - fixedFiles}`);
}

// Run the script
console.log('🚀 Starting final fix of useEffect structures in all vending-leads pages...\n');
fixAllUseEffectStructures();
console.log('\n✨ Done!');
