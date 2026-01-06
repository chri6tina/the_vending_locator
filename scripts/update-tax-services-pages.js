const fs = require('fs');
const path = require('path');

// Directory containing tax-services pages
const taxServicesDir = path.join(__dirname, '..', 'src', 'app', 'tax-services');

function updatePageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file already has the skipBuild configuration
    if (content.includes('export const dynamicParams')) {
      console.log(`⏭️  Skipping ${path.basename(path.dirname(filePath))} - already configured`);
      return { updated: false, reason: 'already_configured' };
    }
    
    // Find the line with export const dynamic
    const dynamicLine = content.match(/export const dynamic = ['"]force-dynamic['"];?/);
    
    if (!dynamicLine) {
      console.log(`⚠️  Skipping ${path.basename(path.dirname(filePath))} - no dynamic export found`);
      return { updated: false, reason: 'no_dynamic_export' };
    }
    
    // Add the configuration after the dynamic export
    const newConfig = `export const dynamic = 'force-dynamic';
export const revalidate = 0;
// Skip page data collection during build to prevent memory issues
export const dynamicParams = false;
export const fetchCache = 'force-no-store';`;
    
    // Replace the existing dynamic/revalidate exports with the new configuration
    content = content.replace(
      /export const dynamic = ['"]force-dynamic['"];?\s*export const revalidate = \d+;?/g,
      newConfig
    );
    
    // If the replacement didn't work, try a different approach
    if (!content.includes('export const dynamicParams')) {
      content = content.replace(
        /export const dynamic = ['"]force-dynamic['"];?/,
        `export const dynamic = 'force-dynamic';
export const revalidate = 0;
// Skip page data collection during build to prevent memory issues
export const dynamicParams = false;
export const fetchCache = 'force-no-store';`
      );
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    return { updated: true };
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return { updated: false, reason: 'error', error: error.message };
  }
}

function processDirectory(dir) {
  const results = {
    updated: 0,
    skipped: 0,
    errors: 0
  };
  
  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`);
    return results;
  }
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip if it's a state directory (like 'texas')
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const result = updatePageFile(pagePath);
        if (result.updated) {
          results.updated++;
          console.log(`✅ Updated ${entry.name}`);
        } else if (result.reason === 'already_configured') {
          results.skipped++;
        } else if (result.reason === 'error') {
          results.errors++;
        } else {
          results.skipped++;
        }
      }
    }
  }
  
  return results;
}

// Main execution
console.log('🔄 Updating tax-services pages to skip build-time data collection...\n');
const results = processDirectory(taxServicesDir);

console.log('\n' + '='.repeat(60));
console.log('📊 UPDATE SUMMARY');
console.log('='.repeat(60));
console.log(`✅ Updated: ${results.updated}`);
console.log(`⏭️  Skipped: ${results.skipped}`);
console.log(`❌ Errors: ${results.errors}`);
console.log(`📈 Total: ${results.updated + results.skipped + results.errors}`);
console.log('\n🎉 Update complete!');

