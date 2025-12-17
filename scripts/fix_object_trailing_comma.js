const fs = require('fs');
const path = require('path');

/**
 * Script to fix the specific syntax error: "Expected ',', got ';'"
 * Looks for object entries that end with "  }" followed by "};" 
 * and adds the missing trailing comma to match the pattern used by other entries
 */

function fixObjectTrailingComma(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    const lines = content.split('\n');
    let fixed = false;
    let changes = [];

    // Pattern 1: Fix last FAQ object in extraFaqs array - needs trailing comma
    // Look for: "      }" followed by "    ]" (last item in array)
    for (let i = 0; i < lines.length - 2; i++) {
      if (lines[i].match(/^\s+\}\s*$/) && 
          lines[i + 1].trim() === ']' && 
          !lines[i].includes(',')) {
        // Check if this is inside an extraFaqs array
        let j = i - 1;
        let foundExtraFaqs = false;
        while (j >= Math.max(0, i - 20)) {
          if (lines[j].includes('extraFaqs:') || lines[j].includes('extraFaqs')) {
            foundExtraFaqs = true;
            break;
          }
          j--;
        }
        
        if (foundExtraFaqs) {
          const indent = lines[i].match(/^(\s*)/)[1];
          lines[i] = `${indent}},`;
          fixed = true;
          changes.push(`Line ${i + 1}: Added trailing comma to last FAQ object`);
        }
      }
    }

    // Pattern 2: Fix last entry in cityInfo object - needs trailing comma before };
    // Look for the pattern: line ending with "  }" followed by line with "};"
    for (let i = 0; i < lines.length - 1; i++) {
      const currentLine = lines[i];
      const nextLine = lines[i + 1];

      // Check if current line ends with "  }" (2 spaces + closing brace, possibly with trailing whitespace)
      // and next line is exactly "};"
      if (currentLine.match(/^\s+\}\s*$/) && nextLine.trim() === '};') {
        // Check if this looks like an object entry (not just any closing brace)
        // Look backwards to see if we're in an object context
        
        // Check if previous non-empty lines suggest this is an object entry
        let contextFound = false;
        let j = i - 1;
        let nonEmptyCount = 0;
        
        while (j >= 0 && nonEmptyCount < 5) {
          const prevLine = lines[j].trim();
          if (prevLine) {
            nonEmptyCount++;
            // Look for patterns that indicate object entries:
            // - Array closing: "    ]"
            // - Property assignments: "    propertyName:"
            // - String values: "      'value',"
            // - Object opening: "  'key': {"
            if (prevLine.match(/^\s+\]\s*$/) || 
                prevLine.match(/:\s*$/) || 
                prevLine.match(/,\s*$/) ||
                prevLine.match(/^\s+['"][^'"]+['"]:\s*\{/)) {
            contextFound = true;
            break;
          }
          }
          j--;
        }

        // Also check if we're in a const/let/var object assignment context
        // Look for patterns like "const cityInfo" or "Record<" or "= {"
        let k = Math.max(0, i - 50);
        while (k < i) {
          if (lines[k].includes('cityInfo') || 
              lines[k].includes('Record<') || 
              lines[k].match(/=\s*\{/)) {
            contextFound = true;
            break;
          }
          k++;
        }

        // If we found object context and the line doesn't already have a comma
        if (contextFound && !currentLine.includes(',')) {
          // Check if previous entry has a comma (to match the pattern)
          let prevEntryLine = i - 1;
          while (prevEntryLine >= 0 && lines[prevEntryLine].trim() === '') {
            prevEntryLine--;
          }
          
          if (prevEntryLine >= 0) {
            const prevLine = lines[prevEntryLine];
            // If previous entry ends with comma, this should too for consistency
            // Or if we see the pattern of entries with commas
            if (prevLine.includes(',') || prevLine.match(/^\s+\}\s*,\s*$/)) {
              // Add trailing comma
              const indent = currentLine.match(/^(\s*)/)[1];
              lines[i] = `${indent}},`;
              fixed = true;
              changes.push(`Line ${i + 1}: Added trailing comma to match pattern`);
            }
          }
        }
      }
    }

    if (fixed) {
      content = lines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
      return { 
        fixed: true, 
        file: filePath, 
        changes: changes 
      };
    }

    return { fixed: false, file: filePath };
  } catch (error) {
    return { 
      fixed: false, 
      file: filePath, 
      error: error.message 
    };
  }
}

function findTypeScriptFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    
    try {
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip hidden dirs, node_modules, .next
        if (!file.startsWith('.') && file !== 'node_modules' && file !== '.next') {
          findTypeScriptFiles(filePath, fileList);
        }
      } else if (file.match(/\.(ts|tsx)$/)) {
        fileList.push(filePath);
      }
    } catch (err) {
      // Skip files we can't access
    }
  });

  return fileList;
}

function main() {
  console.log('🔍 Fixing object trailing comma syntax errors...\n');

  const srcDir = path.join(__dirname, '..', 'src');
  const files = findTypeScriptFiles(srcDir);

  console.log(`📁 Found ${files.length} TypeScript files to check\n`);

  const results = [];
  let fixedCount = 0;

  files.forEach(file => {
    const result = fixObjectTrailingComma(file);
    results.push(result);
    
    if (result.fixed) {
      fixedCount++;
      console.log(`✅ Fixed: ${path.relative(process.cwd(), file)}`);
      if (result.changes) {
        result.changes.forEach(change => console.log(`   ${change}`));
      }
    } else if (result.error) {
      console.log(`❌ Error checking ${path.relative(process.cwd(), file)}: ${result.error}`);
    }
  });

  console.log(`\n📊 Summary:`);
  console.log(`   Total files checked: ${files.length}`);
  console.log(`   Files fixed: ${fixedCount}`);
  console.log(`   Files with errors: ${results.filter(r => r.error).length}`);

  if (fixedCount > 0) {
    console.log(`\n✨ Fixed ${fixedCount} file(s)!`);
    console.log(`\n⚠️  Next steps:`);
    console.log(`   1. Review the changes`);
    console.log(`   2. Test the build: npm run build`);
    console.log(`   3. Commit and push the fixes`);
  } else {
    console.log(`\n✅ No files needed fixing.`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixObjectTrailingComma, findTypeScriptFiles };

