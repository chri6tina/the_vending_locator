const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all files with (2025 Guide) in the how-to-start-a-vending-machine-business directory
const directory = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business');
let updatedCount = 0;

function updateFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('(2025 Guide)')) {
      const updated = content.replace(/\(2025 Guide\)/g, '(2026 Guide)');
      fs.writeFileSync(filePath, updated, 'utf8');
      updatedCount++;
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
    return false;
  }
}

// Find all page.tsx files in the directory
function findFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      // Check if it's a city directory (not [slug])
      if (item.name !== '[slug]') {
        const pageFile = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          files.push(pageFile);
        }
      }
    }
  }
  
  return files;
}

const files = findFiles(directory);
console.log(`Found ${files.length} city page files to check...`);

for (const file of files) {
  if (updateFile(file)) {
    console.log(`Updated: ${path.relative(process.cwd(), file)}`);
  }
}

console.log(`\nTotal files updated: ${updatedCount}`);

