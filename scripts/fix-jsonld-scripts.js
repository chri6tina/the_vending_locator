const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Pattern: FAQ array ends with `]\n\n` then `<script` appears (outside return)
  // The script tags need to be moved inside the return statement, before `</>`
  
  // Find the pattern where script tags appear after FAQ array but before `</>`
  // Structure should be: `]\n\n<script.../>\n    </>\n  )\n}`
  // But script tags are not properly inside the return
  
  // Check if script tags appear right after FAQ array close and before `</>`
  const pattern = /(\]\n\n)(<script[\s\S]*?\/>\s*)(\n\s*<\/>\s*\n\s*\)\s*\n\s*\})/;
  
  if (pattern.test(content)) {
    // Scripts need to be moved inside return, before `</>`
    // The issue is they're appearing at the wrong indentation level
    content = content.replace(pattern, (match, p1, p2, p3) => {
      // p2 contains the script tags, p3 contains the closing tags
      // Insert scripts before `</>` with proper indentation
      const scriptsWithIndent = p2.split('\n').map((line, idx) => {
        if (idx === 0) return '      ' + line.trim(); // First line
        if (line.trim() === '') return '';
        return '      ' + line.trim();
      }).join('\n');
      
      const fixedClosing = p3.replace(/\n\s*<\/>/, '\n      ' + scriptsWithIndent.trim() + '\n      </>');
      return p1 + fixedClosing;
    });
  }
  
  // Also check for pattern where there are two script tags
  const twoScriptPattern = /(\]\n\n)(<script[\s\S]*?\/>\s*<script[\s\S]*?\/>\s*)(\n\s*<\/>\s*\n\s*\)\s*\n\s*\})/;
  
  if (twoScriptPattern.test(content)) {
    content = content.replace(twoScriptPattern, (match, p1, p2, p3) => {
      // Format script tags with proper indentation
      const scripts = p2.split('\n').filter(line => line.trim() !== '');
      const formattedScripts = scripts.map((line, idx) => {
        if (line.trim().startsWith('<script')) return '      ' + line.trim();
        if (line.trim() === '/>') return '      />';
        return '        ' + line.trim();
      }).join('\n');
      
      const fixedClosing = p3.replace(/\n\s*<\/>/, '\n      ' + formattedScripts + '\n      </>');
      return p1 + fixedClosing;
    });
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

console.log('Fixing JSON-LD script placement in tax-services pages...');
processDirectory(taxServicesDir);
console.log(`\nCompleted! Fixed ${fixedCount} files`);
if (errorCount > 0) {
  console.log(`Errors encountered: ${errorCount}`);
}
