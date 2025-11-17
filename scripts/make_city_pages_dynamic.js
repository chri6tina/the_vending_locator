const fs = require('fs');
const path = require('path');

// Make all city pages dynamic to reduce build memory usage
function makeCityPagesDynamic() {
  const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', 'vending-leads');
  const coolersDir = path.join(__dirname, '..', 'src', 'app', 'haha-coolers');
  
  let updated = 0;
  let skipped = 0;

  // Process vending-leads pages
  if (fs.existsSync(vendingLeadsDir)) {
    const dirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name)
      .filter(dir => dir.includes('-')); // City pages have hyphens

    dirs.forEach(dir => {
      const pagePath = path.join(vendingLeadsDir, dir, 'page.tsx');
      if (!fs.existsSync(pagePath)) {
        skipped++;
        return;
      }

      let content = fs.readFileSync(pagePath, 'utf8');
      
      // Skip if already dynamic
      if (content.includes("export const dynamic = 'force-dynamic'")) {
        skipped++;
        return;
      }

      // Replace revalidate with dynamic
      if (content.includes('export const revalidate')) {
        content = content.replace(
          /export const revalidate = \d+;/g,
          "// Generate on-demand to reduce build memory usage\nexport const dynamic = 'force-dynamic';\nexport const revalidate = 0;"
        );
      } else if (content.includes('export default')) {
        // Add before default export
        content = content.replace(
          /export default function/,
          "// Generate on-demand to reduce build memory usage\nexport const dynamic = 'force-dynamic';\nexport const revalidate = 0;\n\nexport default function"
        );
      } else {
        skipped++;
        return;
      }

      fs.writeFileSync(pagePath, content, 'utf8');
      updated++;
    });
  }

  // Process cooler pages
  if (fs.existsSync(coolersDir)) {
    const dirs = fs.readdirSync(coolersDir, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name)
      .filter(dir => {
        if (!dir.includes('-')) return false;
        const productDirs = ['mini', 'pro', 'ultra'];
        return !productDirs.includes(dir);
      });

    dirs.forEach(dir => {
      const pagePath = path.join(coolersDir, dir, 'page.tsx');
      if (!fs.existsSync(pagePath)) {
        skipped++;
        return;
      }

      let content = fs.readFileSync(pagePath, 'utf8');
      
      // Skip if already dynamic
      if (content.includes("export const dynamic = 'force-dynamic'")) {
        skipped++;
        return;
      }

      // Replace revalidate with dynamic
      if (content.includes('export const revalidate')) {
        content = content.replace(
          /export const revalidate = \d+;/g,
          "// Generate on-demand to reduce build memory usage\nexport const dynamic = 'force-dynamic';\nexport const revalidate = 0;"
        );
      } else if (content.includes('export default')) {
        // Add before default export
        content = content.replace(
          /export default function/,
          "// Generate on-demand to reduce build memory usage\nexport const dynamic = 'force-dynamic';\nexport const revalidate = 0;\n\nexport default function"
        );
      } else {
        skipped++;
        return;
      }

      fs.writeFileSync(pagePath, content, 'utf8');
      updated++;
    });
  }

  console.log(`✅ Updated ${updated} pages to generate on-demand`);
  console.log(`⏭️  Skipped ${skipped} pages (already dynamic or no page.tsx)`);
}

makeCityPagesDynamic();

