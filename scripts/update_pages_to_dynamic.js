const fs = require('fs');
const path = require('path');

// Directories to process
const directories = [
  'src/app/vending-leads',
  'src/app/tax-services'
];

// Configuration to add
const dynamicConfig = `
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
`;

function updatePageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove any existing revalidate exports (we'll add the correct one)
    content = content.replace(/export const revalidate = \d+;\s*\n?/g, '');
    
    // Remove any existing dynamic exports (we'll add the correct one)
    content = content.replace(/export const dynamic = ['"].*?['"];\s*\n?/g, '');
    
    // Clean up any duplicate newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    // Find where to insert the config (after metadata export closing brace, before default export)
    // Look for the closing brace and bracket of the metadata object: }\n}
    const metadataEndMatch = content.match(/}\s*\n\}/);
    
    if (metadataEndMatch) {
      const insertIndex = metadataEndMatch.index + metadataEndMatch[0].length;
      const beforeInsert = content.substring(0, insertIndex);
      const afterInsert = content.substring(insertIndex);
      
      // Insert the dynamic config with proper spacing
      content = beforeInsert + '\n' + dynamicConfig.trim() + '\n' + afterInsert;
      fs.writeFileSync(filePath, content, 'utf8');
      return { updated: true };
    } else {
      // Fallback: insert before export default
      const exportDefaultMatch = content.match(/export default/);
      if (exportDefaultMatch) {
        const insertIndex = exportDefaultMatch.index;
        const beforeInsert = content.substring(0, insertIndex).trim();
        const afterInsert = content.substring(insertIndex);
        content = beforeInsert + '\n\n' + dynamicConfig.trim() + '\n' + afterInsert;
        fs.writeFileSync(filePath, content, 'utf8');
        return { updated: true };
      }
    }
    
    return { updated: false, reason: 'could not find insertion point' };
  } catch (error) {
    return { updated: false, error: error.message };
  }
}

function processDirectory(dirPath) {
  const results = {
    total: 0,
    updated: 0,
    skipped: 0,
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
        const result = updatePageFile(fullPath);
        
        if (result.updated) {
          results.updated++;
          console.log(`✓ Updated: ${fullPath}`);
        } else if (result.error) {
          results.errors.push({ file: fullPath, error: result.error });
          console.log(`✗ Error in ${fullPath}: ${result.error}`);
        } else {
          results.skipped++;
        }
      }
    }
  }
  
  const absoluteDirPath = path.join(process.cwd(), dirPath);
  if (fs.existsSync(absoluteDirPath)) {
    walkDir(absoluteDirPath);
  } else {
    console.log(`Directory not found: ${absoluteDirPath}`);
  }
  
  return results;
}

// Main execution
console.log('Updating pages to use dynamic rendering...\n');

const allResults = {
  total: 0,
  updated: 0,
  skipped: 0,
  errors: []
};

for (const dir of directories) {
  console.log(`Processing ${dir}...`);
  const results = processDirectory(dir);
  allResults.total += results.total;
  allResults.updated += results.updated;
  allResults.skipped += results.skipped;
  allResults.errors.push(...results.errors);
  console.log('');
}

console.log('='.repeat(50));
console.log('Summary:');
console.log(`Total pages found: ${allResults.total}`);
console.log(`Pages updated: ${allResults.updated}`);
console.log(`Pages skipped (already configured): ${allResults.skipped}`);
console.log(`Errors: ${allResults.errors.length}`);

if (allResults.errors.length > 0) {
  console.log('\nErrors:');
  allResults.errors.forEach(({ file, error }) => {
    console.log(`  ${file}: ${error}`);
  });
}

console.log('\nDone!');

