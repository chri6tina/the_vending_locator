const fs = require('fs');
const path = require('path');

// Find all pageClient.tsx files with 2025 in the how-to-start-a-vending-machine-business directory
const directory = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business');
let updatedCount = 0;

function updateFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('2025')) {
      const updated = content.replace(/2025/g, '2026');
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

// Find all pageClient.tsx files in the directory
function findFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      // Check if it's a city directory (not [slug])
      if (item.name !== '[slug]') {
        const pageClientFile = path.join(fullPath, 'pageClient.tsx');
        if (fs.existsSync(pageClientFile)) {
          files.push(pageClientFile);
        }
      }
    }
  }
  
  return files;
}

const files = findFiles(directory);
console.log(`Found ${files.length} pageClient files to check...`);

for (const file of files) {
  if (updateFile(file)) {
    console.log(`Updated: ${path.relative(process.cwd(), file)}`);
  }
}

console.log(`\nTotal pageClient files updated: ${updatedCount}`);

