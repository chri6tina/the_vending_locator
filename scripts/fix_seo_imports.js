const fs = require('fs');
const path = require('path');

const CITY_PAGES_DIR = path.join(__dirname, '..', 'src', 'app', '_city-pages', 'vending-leads');

function fixImportPlacement(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if import is misplaced (inside function)
    if (content.includes('import CityPageSEO') && content.match(/const (cityDisplayName|stateDisplayName)[\s\S]*?import CityPageSEO/)) {
      // Remove misplaced import
      content = content.replace(/\s*import CityPageSEO from '@\/components\/CityPageSEO'\s*/g, '');
      
      // Find the correct location (after ZipCodeModalWrapper import)
      const zipCodeImport = content.match(/import ZipCodeModalWrapper from[^\n]+\n/);
      if (zipCodeImport) {
        const insertIndex = content.indexOf(zipCodeImport[0]) + zipCodeImport[0].length;
        const importStatement = "import CityPageSEO from '@/components/CityPageSEO'\n";
        content = content.slice(0, insertIndex) + importStatement + content.slice(insertIndex);
        
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔧 Fixing misplaced SEO imports...\n');
  
  const cityDirs = fs.readdirSync(CITY_PAGES_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  let fixed = 0;
  
  cityDirs.forEach(citySlug => {
    const pageClientPath = path.join(CITY_PAGES_DIR, citySlug, 'pageClient.tsx');
    
    if (fs.existsSync(pageClientPath)) {
      if (fixImportPlacement(pageClientPath)) {
        fixed++;
        console.log(`✅ Fixed: ${citySlug}`);
      }
    }
  });
  
  console.log(`\n🎉 Fixed ${fixed} files with misplaced imports`);
}

if (require.main === module) {
  main();
}

module.exports = { fixImportPlacement };
