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
    
    // Fix: Add missing closing brace for metadata object
    // Pattern: robots object closes with } but metadata object is missing its closing brace
    // Look for: } followed by blank line then comment then export const dynamic
    // Should be: } } followed by blank line then comment then export const dynamic
    
    // Fix pattern 1: robots closes, then immediately metadata should close
    // Match: } followed by newline(s) then comment then export const dynamic
    // But NOT if there's already } before the comment
    content = content.replace(
      /(\s+"googleBot":\s*\{[^}]*\}\s*)\}\s*\n\s*\/\/ Generate on-demand to reduce build memory usage/g,
      '$1  }\n}\n\n// Generate on-demand to reduce build memory usage'
    );
    
    // Fix pattern 2: Same but without quotes
    content = content.replace(
      /(\s+googleBot:\s*\{[^}]*\}\s*)\}\s*\n\s*\/\/ Generate on-demand to reduce build memory usage/g,
      '$1  }\n}\n\n// Generate on-demand to reduce build memory usage'
    );
    
    // Fix pattern 3: Handle cases where there's already one } but missing the second
    // Look for } followed by newline and comment, but the metadata object isn't closed
    // This is trickier - we need to check if export const metadata is followed by proper closing
    
    // More specific: robots closes with }, then we need } for metadata
    content = content.replace(
      /(\s+['"]max-snippet['"]:\s*-1\s*)\s*\}\s*\n\s*\}\s*\n\s*\/\/ Generate on-demand/g,
      '$1\n    }\n  }\n}\n\n// Generate on-demand'
    );
    
    // Fix broken images array in openGraph
    content = content.replace(
      /\}\s*\n\s*\/\/ Generate on-demand to reduce build memory usage\s*\n\s*\]/g,
      '}\n    ],'
    );
    
    // Remove duplicate comments
    content = content.replace(
      /\/\/ Generate on-demand to reduce build memory usage\s*\n\s*\/\/ Generate on-demand to reduce build memory usage/g,
      '// Generate on-demand to reduce build memory usage'
    );
    
    // Remove duplicate "Enable ISR" comments
    content = content.replace(
      /\n\s*\/\/ Enable ISR[^\n]*\n\s*\/\/ Generate on-demand/g,
      '\n\n// Generate on-demand'
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
          console.log(`✓ Fixed: ${fullPath}`);
        } else if (result.error) {
          results.errors.push({ file: fullPath, error: result.error });
          console.log(`✗ Error in ${fullPath}: ${result.error}`);
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

console.log('Fixing metadata closing braces...\n');

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

