const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Check if script tags appear after FAQ array but before return statement
  // Pattern: FAQ array closes with `]\n\n` then `<script` appears (not inside return)
  
  // Check if there's a return statement
  if (!content.includes('return (')) {
    // Missing return statement - script tags are floating
    // Pattern: `]\n\n<script` followed by `</>` and `)`
    const missingReturnPattern = /(\]\n\n)(<script[\s\S]*?\/>\s*)(\n\s*<\/>\s*\n\s*\)\s*\n\s*\})/;
    
    if (missingReturnPattern.test(content)) {
      // Add return statement and wrap script tags properly
      content = content.replace(missingReturnPattern, (match, p1, p2, p3) => {
        // Format script tags with proper indentation for inside return
        const scripts = p2.trim();
        const formattedScripts = '  return (\n    <>\n      {/* JSON-LD: FAQ */}\n      ' + 
          scripts.replace(/\n/g, '\n      ') + 
          '\n    </>\n  )';
        return p1 + formattedScripts + p3.replace(/\n\s*<\/>/, '').replace(/\n\s*\)/, '');
      });
    }
  } else {
    // Return exists, but script tags might be in wrong place
    // Check if script tags appear after FAQ array but outside return
    const scriptAfterFaqPattern = /(\]\n\n)(<script[\s\S]*?\/>\s*)(\n\s*<\/>\s*\n\s*\)\s*\n\s*\})/;
    
    // Check if the script tags are NOT between "return (" and ")"
    const returnStart = content.indexOf('return (');
    const returnEnd = content.lastIndexOf(')');
    
    if (scriptAfterFaqPattern.test(content)) {
      const match = content.match(scriptAfterFaqPattern);
      if (match) {
        const scriptStart = match.index + match[1].length;
        // If scripts are after return ends, they need to be moved inside
        if (scriptStart > returnEnd && returnStart >= 0) {
          // Scripts are outside return - need to move inside
          // Find where `</>` closes the return
          const closingFragment = content.lastIndexOf('</>', returnEnd);
          if (closingFragment > 0) {
            // Remove scripts from current location
            const beforeScripts = content.substring(0, scriptStart);
            const afterScripts = content.substring(scriptStart + match[2].length);
            
            // Insert scripts before `</>`
            const beforeClosing = content.substring(0, closingFragment);
            const afterClosing = content.substring(closingFragment);
            
            // Format scripts with proper indentation
            const formattedScripts = '\n      {/* JSON-LD: FAQ */}\n      ' + 
              match[2].trim().replace(/\n/g, '\n      ');
            
            content = beforeClosing + formattedScripts + '\n      ' + afterClosing;
            // Remove scripts from original location
            content = beforeScripts + afterScripts.replace(match[3], '');
          }
        }
      }
    }
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

// Main execution
const taxServicesDir = path.join(process.cwd(), 'src', 'app', 'tax-services');
let fixedCount = 0;
let errorCount = 0;

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.name === 'pageClient.tsx') {
      try {
        if (fixFile(fullPath)) {
          fixedCount++;
          if (fixedCount % 50 === 0) {
            console.log(`Fixed ${fixedCount} files...`);
          }
        }
      } catch (error) {
        errorCount++;
        console.error(`Error fixing ${fullPath}:`, error.message);
      }
    }
  }
}

console.log('Fixing missing return statements and script placement...');
processDirectory(taxServicesDir);
console.log(`\nCompleted! Fixed ${fixedCount} files`);
if (errorCount > 0) {
  console.log(`Errors encountered: ${errorCount}`);
}

