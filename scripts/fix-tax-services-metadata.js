const fs = require('fs');
const path = require('path');

// Fix tax-services pages that have incomplete metadata conversion
const taxServicesDir = path.join(__dirname, '..', 'src', 'app', 'tax-services');

function fixMetadata(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Check if file has both generateMetadata and old metadata code
    const hasGenerateMetadata = content.includes('export async function generateMetadata');
    const hasOldMetadata = content.includes('export const metadata: Metadata = {') || 
                          (content.includes('openGraph:') && content.includes('title:') && !hasGenerateMetadata);
    
    if (!hasGenerateMetadata && !hasOldMetadata) {
      return { updated: false, reason: 'no_metadata' };
    }
    
    // If it has generateMetadata but also has old code after it, clean it up
    if (hasGenerateMetadata) {
      // Find the end of generateMetadata function
      const generateMetadataStart = content.indexOf('export async function generateMetadata');
      const generateMetadataEnd = content.indexOf('};', generateMetadataStart);
      
      if (generateMetadataEnd !== -1) {
        // Check if there's old metadata code after generateMetadata
        const afterGenerateMetadata = content.substring(generateMetadataEnd + 2);
        
        // Look for old metadata patterns
        if (afterGenerateMetadata.includes('openGraph:') && 
            afterGenerateMetadata.includes('title:') && 
            !afterGenerateMetadata.includes('export async function')) {
          
          // Remove everything between the closing of generateMetadata and the next export
          const nextExport = afterGenerateMetadata.search(/export (const|function|default)/);
          if (nextExport !== -1) {
            const cleanContent = content.substring(0, generateMetadataEnd + 2) + 
                               '\n\n' + 
                               afterGenerateMetadata.substring(nextExport);
            content = cleanContent;
          } else {
            // Remove everything after generateMetadata closing brace until export const dynamic
            const dynamicExport = afterGenerateMetadata.indexOf('export const dynamic');
            if (dynamicExport !== -1) {
              content = content.substring(0, generateMetadataEnd + 2) + 
                       '\n\n' + 
                       afterGenerateMetadata.substring(dynamicExport);
            }
          }
        }
      }
    }
    
    // Remove dynamicParams = false (not needed for static routes)
    content = content.replace(/export const dynamicParams = false;\s*/g, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return { updated: true };
    }
    
    return { updated: false, reason: 'no_changes' };
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
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
    
    if (entry.isDirectory() && !entry.name.startsWith('_')) {
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const result = fixMetadata(pagePath);
        if (result.updated) {
          results.updated++;
          if (results.updated % 50 === 0) {
            console.log(`✅ Fixed ${results.updated} pages...`);
          }
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
console.log('🔄 Fixing tax-services pages with incomplete metadata conversion...\n');

const results = processDirectory(taxServicesDir);

console.log('\n' + '='.repeat(60));
console.log('📊 FIX SUMMARY');
console.log('='.repeat(60));
console.log(`✅ Fixed: ${results.updated}`);
console.log(`⏭️  Skipped: ${results.skipped}`);
console.log(`❌ Errors: ${results.errors}`);
console.log(`📈 Total: ${results.updated + results.skipped + results.errors}`);
console.log('\n🎉 Fix complete!');

