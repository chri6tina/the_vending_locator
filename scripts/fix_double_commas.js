const fs = require('fs');
const path = require('path');

const directories = [
  'src/app/vending-leads',
  'src/app/tax-services'
];

function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix double commas
    content = content.replace(/\],,/g, '],');
    
    // Fix duplicate comments
    content = content.replace(
      /\/\/ Generate on-demand to reduce build memory usage\s*\n\s*\/\/ Generate on-demand to reduce build memory usage/g,
      '// Generate on-demand to reduce build memory usage'
    );
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return { fixed: true };
    }
    
    return { fixed: false };
  } catch (error) {
    return { fixed: false, error: error.message };
  }
}

function processDirectory(dirPath) {
  const results = {
    total: 0,
    fixed: 0,
    errors: []
  };
  
  function walkDir(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.name === 'page.tsx') {
        results.total++;
        const result = fixPageFile(fullPath);
        
        if (result.fixed) {
          results.fixed++;
        } else if (result.error) {
          results.errors.push({ file: fullPath, error: result.error });
        }
      }
    }
  }
  
  const absoluteDirPath = path.join(process.cwd(), dirPath);
  if (fs.existsSync(absoluteDirPath)) {
    walkDir(absoluteDirPath);
  }
  
  return results;
}

console.log('Fixing double commas and duplicate comments...\n');

const allResults = {
  total: 0,
  fixed: 0,
  errors: []
};

for (const dir of directories) {
  const results = processDirectory(dir);
  allResults.total += results.total;
  allResults.fixed += results.fixed;
  allResults.errors.push(...results.errors);
}

console.log('='.repeat(50));
console.log('Summary:');
console.log(`Total pages checked: ${allResults.total}`);
console.log(`Pages fixed: ${allResults.fixed}`);
console.log(`Errors: ${allResults.errors.length}`);

if (allResults.errors.length > 0) {
  console.log('\nErrors:');
  allResults.errors.forEach(({ file, error }) => {
    console.log(`  ${file}: ${error}`);
  });
}

console.log('\nDone!');

