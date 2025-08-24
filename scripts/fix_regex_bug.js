const fs = require('fs');
const path = require('path');

// Fix the regex bug in all generated pages
function fixRegexBug() {
  console.log('🐛 Fixing regex bug in all generated pages...\n');
  
  const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', 'vending-leads');
  let totalFixed = 0;
  
  // Read all subdirectories
  const entries = fs.readdirSync(vendingLeadsDir, { withFileTypes: true });
  
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const pageFile = path.join(vendingLeadsDir, entry.name, 'page.tsx');
      
      if (fs.existsSync(pageFile)) {
        try {
          let content = fs.readFileSync(pageFile, 'utf8');
          
          // Fix the regex pattern from /s+/g to /\s+/g
          const fixedContent = content.replace(/\.replace\(\/s\+\/g,/g, '.replace(/\\s+/g,');
          
          if (fixedContent !== content) {
            fs.writeFileSync(pageFile, fixedContent, 'utf8');
            totalFixed++;
            console.log(`✅ Fixed regex in: ${entry.name}`);
          }
        } catch (error) {
          console.error(`❌ Error fixing ${entry.name}:`, error.message);
        }
      }
    }
  }
  
  console.log(`\n🎉 Fixed regex pattern in ${totalFixed} pages!`);
  console.log('✨ All pages should now have working breadcrumb navigation.');
}

if (require.main === module) {
  fixRegexBug();
}

module.exports = { fixRegexBug };
