const fs = require('fs');
const path = require('path');

// Value proposition to add
const valueProposition = `              {/* Value Proposition */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mb-6"
              >
                <p className="text-base sm:text-lg text-stone">
                  Starting at <span className="text-coral font-bold text-lg sm:text-xl">less than $0.30 per lead</span>
                </p>
              </motion.div>

`;

// Value proposition will be inserted after trust signals and before CTA buttons

function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if value proposition already exists
    if (content.includes('less than $0.30 per lead')) {
      console.log(`⏭️  Skipping ${filePath} - already has value proposition`);
      return false;
    }
    
    // Try to find and replace the pattern
    const beforeLength = content.length;
    
    // Pattern 1: Change mb-8 to mb-6 in trust signals div
    content = content.replace(
      /(className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto )mb-8/g,
      '$1mb-6'
    );
    
    // Pattern 2: After trust signals closing div, before CTA buttons comment
    // Look for closing motion.div followed by CTA Buttons comment
    const pattern = /(\s*<\/motion\.div>\s*)(\s*\{\/\* CTA Buttons \*\/\})/;
    if (pattern.test(content)) {
      content = content.replace(
        pattern,
        (match, p1, p2) => {
          return p1 + '\n' + valueProposition.trim() + '\n' + p2;
        }
      );
    } else {
      // Try alternative pattern without motion.div
      const altPattern = /(\s*<\/div>\s*)(\s*\{\/\* CTA Buttons \*\/\})/;
      if (altPattern.test(content)) {
        content = content.replace(
          altPattern,
          (match, p1, p2) => {
            return p1 + '\n' + valueProposition.trim() + '\n' + p2;
          }
        );
      }
    }
    
    if (content.length !== beforeLength) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated ${filePath}`);
      return true;
    } else {
      console.log(`⚠️  No pattern found in ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  let updatedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  
  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file === 'pageClient.tsx' && filePath.includes('vending-leads')) {
        const result = updateFile(filePath);
        if (result === true) {
          updatedCount++;
        } else if (result === false && fs.readFileSync(filePath, 'utf8').includes('less than $0.30 per lead')) {
          skippedCount++;
        } else {
          errorCount++;
        }
      }
    }
  }
  
  // Process state pages
  const statePagesDir = path.join(__dirname, '../src/app/vending-leads');
  if (fs.existsSync(statePagesDir)) {
    walkDir(statePagesDir);
  }
  
  // Process city pages
  const cityPagesDir = path.join(__dirname, '../src/app/_city-pages/vending-leads');
  if (fs.existsSync(cityPagesDir)) {
    walkDir(cityPagesDir);
  }
  
  console.log('\n📊 Summary:');
  console.log(`✅ Updated: ${updatedCount} files`);
  console.log(`⏭️  Skipped: ${skippedCount} files (already have value proposition)`);
  console.log(`⚠️  Errors: ${errorCount} files`);
}

// Run the script
console.log('🚀 Starting to add value proposition to all vending-leads pages...\n');
processDirectory(__dirname);
console.log('\n✨ Done!');
