const fs = require('fs');
const path = require('path');

// Fix tax-services pages that are missing the closing brace for generateMetadata function
const taxServicesDir = path.join(__dirname, '..', 'src', 'app', 'tax-services');

function fixClosingBrace(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Check if generateMetadata function exists but is missing closing brace
    // Pattern: }; followed by blank line and export const dynamic (without closing function brace)
    const hasGenerateMetadata = content.includes('export async function generateMetadata');
    
    if (hasGenerateMetadata) {
      // Look for the pattern where return statement closes but function doesn't
      // Should be: }; then blank line then export const dynamic (no closing } for function)
      const pattern = /    \}\s*;\s*\n\s*\n\s*export const dynamic/;
      
      if (pattern.test(content)) {
        // Missing closing brace for function - add it before export const dynamic
        content = content.replace(
          /    \}\s*;\s*\n\s*\n\s*export const dynamic/,
          `    }\n  };\n}\n\n// Generate on-demand to reduce build memory usage\nexport const dynamic`
        );
      }
      
      // Also check for pattern with no blank line
      const pattern2 = /    \}\s*;\s*\n\s*export const dynamic/;
      if (pattern2.test(content) && !content.includes('export async function generateMetadata(): Promise<Metadata> {')) {
        // Check if we already have the closing brace
        const lines = content.split('\n');
        const returnCloseIndex = content.indexOf('  };');
        const exportDynamicIndex = content.indexOf('export const dynamic');
        
        if (returnCloseIndex !== -1 && exportDynamicIndex !== -1) {
          const betweenContent = content.substring(returnCloseIndex + 4, exportDynamicIndex);
          // If there's no closing brace for the function between return close and export
          if (!betweenContent.trim().startsWith('}')) {
            content = content.replace(
              /  \}\s*;\s*\n\s*export const dynamic/,
              `  };\n}\n\n// Generate on-demand to reduce build memory usage\nexport const dynamic`
            );
          }
        }
      }
      
      // More specific pattern:  }; followed directly by export const dynamic (no closing })
      const specificPattern = /  \}\s*;\s*\n\s*export const dynamic/;
      if (specificPattern.test(content)) {
        const beforeExport = content.substring(0, content.indexOf('export const dynamic'));
        // Count opening and closing braces for the function
        const functionStart = content.indexOf('export async function generateMetadata');
        const functionContent = content.substring(functionStart, content.indexOf('export const dynamic'));
        
        // Count braces in function content
        let openBraces = 0;
        let closeBraces = 0;
        for (let i = 0; i < functionContent.length; i++) {
          if (functionContent[i] === '{') openBraces++;
          if (functionContent[i] === '}') closeBraces++;
        }
        
        // If we have more opening braces than closing (excluding the return object), we need a closing brace
        // The return statement has its own { and }, so we need functionStart brace + return brace
        // Total opens should be 2 (function start + return), closes should be 2 (return close + function close)
        // If closes < opens, we're missing the function closing brace
        if (closeBraces < openBraces) {
          content = content.replace(
            /  \}\s*;\s*\n\s*export const dynamic/,
            `  };\n}\n\n// Generate on-demand to reduce build memory usage\nexport const dynamic`
          );
        }
      }
    }
    
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
        const result = fixClosingBrace(pagePath);
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
console.log('🔄 Fixing missing closing braces in tax-services pages...\n');

const results = processDirectory(taxServicesDir);

console.log('\n' + '='.repeat(60));
console.log('📊 FIX SUMMARY');
console.log('='.repeat(60));
console.log(`✅ Fixed: ${results.updated}`);
console.log(`⏭️  Skipped: ${results.skipped}`);
console.log(`❌ Errors: ${results.errors}`);
console.log(`📈 Total: ${results.updated + results.skipped + results.errors}`);
console.log('\n🎉 Fix complete!');
