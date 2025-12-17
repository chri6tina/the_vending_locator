const fs = require('fs');
const path = require('path');

/**
 * Script to fix trailing comma syntax errors in TypeScript/JavaScript files
 * Specifically looks for object/array closing patterns that are missing trailing commas
 * before the final closing brace/semicolon
 */

function findFilesWithPattern(dir, pattern, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and .next
      if (!file.startsWith('.') && file !== 'node_modules' && file !== '.next') {
        findFilesWithPattern(filePath, pattern, fileList);
      }
    } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function checkAndFixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    let fixed = false;

    // Pattern 1: Object closing without comma before semicolon
    // Matches: "  }\n};" where it should be "  },\n};"
    // This is the specific pattern from the error
    const pattern1 = /(\s+)\}\s*\n\s*\};/g;
    const matches1 = content.match(pattern1);
    
    if (matches1) {
      // More specific: look for closing brace followed by newline and then };
      // But only if it's the last entry in an object (not followed by another entry)
      const lines = content.split('\n');
      for (let i = 0; i < lines.length - 1; i++) {
        // Check if line ends with "  }" and next line is "};"
        if (lines[i].match(/^\s+\}\s*$/) && lines[i + 1].trim() === '};') {
          // Check if previous non-empty line doesn't end with comma (meaning this is last entry)
          let prevNonEmpty = i - 1;
          while (prevNonEmpty >= 0 && lines[prevNonEmpty].trim() === '') {
            prevNonEmpty--;
          }
          
          if (prevNonEmpty >= 0) {
            const prevLine = lines[prevNonEmpty];
            // If previous line ends with }, then this should also have comma
            // Or if previous line is part of an array/object entry
            if (prevLine.match(/,\s*$/) || prevLine.match(/^\s*['"]/)) {
              // This entry should have a comma to match the pattern
              lines[i] = lines[i].replace(/\}\s*$/, '},');
              fixed = true;
            }
          }
        }
      }
      
      if (fixed) {
        content = lines.join('\n');
      }
    }

    // Pattern 2: More specific - look for the exact pattern from the error
    // Last entry in cityInfo object: "  }\n};" should be "  },\n};"
    // But only if it's the last entry before closing the main object
    const cityInfoPattern = /(\s+\})\s*\n\s*\};\s*$/m;
    if (cityInfoPattern.test(content)) {
      // Check if this is inside a const/let/var declaration with Record or object type
      const beforeMatch = content.substring(0, content.lastIndexOf('};'));
      const afterLastBrace = beforeMatch.lastIndexOf('}');
      const contextBefore = content.substring(Math.max(0, afterLastBrace - 200), afterLastBrace);
      
      // If we see cityInfo or similar object pattern, and the last } doesn't have comma
      if (contextBefore.includes('cityInfo') || contextBefore.includes('Record<') || contextBefore.match(/=\s*\{/)) {
        // Check if the line before the last } ends with a property (not a comma)
        const lines = content.split('\n');
        for (let i = lines.length - 2; i >= 0; i--) {
          if (lines[i].match(/^\s+\}\s*$/) && i + 1 < lines.length && lines[i + 1].trim() === '};') {
            // Check previous entry to see if it has comma
            let prevEntryEnd = i - 1;
            while (prevEntryEnd >= 0 && (lines[prevEntryEnd].trim() === '' || lines[prevEntryEnd].trim() === ']')) {
              prevEntryEnd--;
            }
            
            if (prevEntryEnd >= 0) {
              const prevLine = lines[prevEntryEnd];
              // If we see a pattern like "  }," in previous entries, this should match
              // Or if we see array closing like "    ]" followed by "  }"
              if (prevLine.match(/,\s*$/) || (prevLine.match(/^\s+\]\s*$/) && i > prevEntryEnd + 1)) {
                lines[i] = lines[i].replace(/\}\s*$/, '},');
                content = lines.join('\n');
                fixed = true;
                break;
              }
            }
          }
        }
      }
    }

    if (fixed && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return { fixed: true, file: filePath };
    }

    return { fixed: false, file: filePath };
  } catch (error) {
    return { fixed: false, file: filePath, error: error.message };
  }
}

function main() {
  console.log('🔍 Searching for files with trailing comma syntax issues...\n');

  const srcDir = path.join(__dirname, '..', 'src');
  const files = findFilesWithPattern(srcDir, /\.(ts|tsx|js|jsx)$/);

  console.log(`📁 Found ${files.length} files to check\n`);

  const results = [];
  let fixedCount = 0;

  files.forEach(file => {
    const result = checkAndFixFile(file);
    results.push(result);
    if (result.fixed) {
      fixedCount++;
      console.log(`✅ Fixed: ${path.relative(process.cwd(), file)}`);
    }
  });

  console.log(`\n📊 Summary:`);
  console.log(`   Total files checked: ${files.length}`);
  console.log(`   Files fixed: ${fixedCount}`);
  console.log(`   Files with errors: ${results.filter(r => r.error).length}`);

  if (fixedCount > 0) {
    console.log(`\n✨ Fixed ${fixedCount} file(s)!`);
    console.log(`\n⚠️  Please review the changes and test the build:`);
    console.log(`   npm run build`);
  } else {
    console.log(`\n✅ No files needed fixing.`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { checkAndFixFile, findFilesWithPattern };

