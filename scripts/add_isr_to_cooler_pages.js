const fs = require('fs');
const path = require('path');

// Add ISR to all cooler city pages
function addISRToCoolerPages() {
  const coolersDir = path.join(__dirname, '..', 'src', 'app', 'haha-coolers');
  
  if (!fs.existsSync(coolersDir)) {
    console.log('Coolers directory not found');
    return;
  }

  const directories = fs.readdirSync(coolersDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(dir => {
      // Skip product directories
      const productDirs = ['mini', 'pro', 'ultra'];
      if (productDirs.includes(dir)) return false;
      // Only process city directories (contain a hyphen)
      return dir.includes('-');
    });

  let updated = 0;
  let skipped = 0;

  directories.forEach(dir => {
    const pagePath = path.join(coolersDir, dir, 'page.tsx');
    
    if (!fs.existsSync(pagePath)) {
      skipped++;
      return;
    }

    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Check if ISR is already present
    if (content.includes('export const revalidate')) {
      skipped++;
      return;
    }

    // Add ISR before the default export
    if (content.includes('export default')) {
      content = content.replace(
        /export default function/,
        `// Enable ISR - regenerate page every hour\nexport const revalidate = 3600;\n\nexport default function`
      );
      fs.writeFileSync(pagePath, content, 'utf8');
      updated++;
    }
  });

  console.log(`✅ Updated ${updated} cooler pages with ISR`);
  console.log(`⏭️  Skipped ${skipped} pages (already have ISR or no page.tsx)`);
}

addISRToCoolerPages();

