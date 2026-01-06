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
    
    // Fix: Remove dynamic config from inside robots object
    content = content.replace(/("googleBot":\s*\{[^}]*\})\s*\/\/ Generate on-demand[^}]*\}/g, '$1\n    }\n  }');
    content = content.replace(/(googleBot:\s*\{[^}]*\})\s*\/\/ Generate on-demand[^}]*\}/g, '$1\n    }\n  }');
    
    // Fix: Remove duplicate closing braces before dynamic config
    content = content.replace(/\}\s*\}\s*\/\/ Generate on-demand/g, '}\n\n// Generate on-demand');
    
    // Fix: Remove duplicate "Generate on-demand" comments
    content = content.replace(/\/\/ Generate on-demand to reduce build memory usage\s*\/\/ Generate on-demand to reduce build memory usage/g, '// Generate on-demand to reduce build memory usage');
    
    // Fix: Ensure dynamic config is after metadata closing brace
    // Pattern: } followed by } then dynamic config should be: }\n}\n\n// Generate...
    content = content.replace(/\}\s*\}\s*\/\/ Generate on-demand to reduce build memory usage\s*export const dynamic/g, '}\n}\n\n// Generate on-demand to reduce build memory usage\nexport const dynamic');
    
    // Fix: Remove trailing duplicate comments at end of file
    content = content.replace(/\n+\/\/ Generate on-demand to reduce build memory usage\s*$/g, '');
    
    // Fix: Remove extra blank lines (more than 2 consecutive)
    content = content.replace(/\n{4,}/g, '\n\n\n');
    
    // Fix: Ensure proper spacing before export default
    content = content.replace(/export const revalidate = 0;\s*\n{3,}export default/g, 'export const revalidate = 0;\n\nexport default');
    
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

console.log('Fixing page formatting issues...\n');

const allResults = {
  total: 0,
  fixed: 0,
  errors: []
};

for (const dir of directories) {
  console.log(`Processing ${dir}...`);
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

