const fs = require('fs');
const path = require('path');

// Get all pageClient.tsx files
const vendingLeadsDir = path.join('src', 'app', 'vending-leads');
const cityDirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let updatedCount = 0;

cityDirs.forEach(city => {
  const pageClientPath = path.join(vendingLeadsDir, city, 'pageClient.tsx');
  
  if (fs.existsSync(pageClientPath)) {
    let content = fs.readFileSync(pageClientPath, 'utf8');
    let modified = false;
    
    // Pattern 1: View Hot Leads with inline span and arrow (multi-line)
    const pattern1 = /                <Link\s+href="\/hot-leads"\s+className="[^"]+"\s*>\s*View Hot Leads →\s*<\/Link>/gs;
    // Pattern 2: View Hot Leads with inline span and arrow (new format)
    const pattern2 = /                <Link\s+href="#hot-leads"\s+className="[^"]+"\s*>\s*View Hot Leads <span aria-hidden="true">→<\/span>\s*<\/Link>/gs;
    // Pattern 3: Any Link with href="/hot-leads" and "View Hot Leads" text
    const pattern3 = /<Link\s+href="\/hot-leads"\s+className="[^"]+"[^>]*>\s*View Hot Leads\s*(→|[-]|[→]|<span[^>]*>→<\/span>)\s*<\/Link>/gs;
    // Pattern 4: Any Link with href="#hot-leads" and "View Hot Leads" text
    const pattern4 = /<Link\s+href="#hot-leads"\s+className="[^"]+"[^>]*>\s*View Hot Leads\s*(→|[-]|[→]|<span[^>]*>→<\/span>)\s*<\/Link>/gs;
    // Pattern 5: Any Link with href="/hot-leads" or href="#hot-leads" and "View Hot Leads" text (no arrow)
    const pattern5 = /              <Link\s+href="[\/#]hot-leads"\s+className="[^"]+"[^>]*>\s*View Hot Leads\s*<\/Link>/gs;
    // Pattern 6: Any Link with "View Hot Leads" on separate line (more flexible)
    const pattern6 = /<Link\s+href="[\/#]hot-leads"\s+className="[^"]+"[^>]*>\s*View Hot Leads\s*<\/Link>/gs;
    
    // Try all patterns (order matters - most specific first)
    if (pattern6.test(content)) {
      content = content.replace(pattern6, '');
      modified = true;
    }
    if (pattern1.test(content)) {
      content = content.replace(pattern1, '');
      modified = true;
    }
    if (pattern2.test(content)) {
      content = content.replace(pattern2, '');
      modified = true;
    }
    if (pattern3.test(content)) {
      content = content.replace(pattern3, '');
      modified = true;
    }
    if (pattern4.test(content)) {
      content = content.replace(pattern4, '');
      modified = true;
    }
    if (pattern5.test(content)) {
      content = content.replace(pattern5, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(pageClientPath, content, 'utf8');
      updatedCount++;
      console.log(`✅ Updated: ${city}`);
    }
  }
});

console.log(`\n✅ Updated ${updatedCount} city pages`);
console.log('All "View Hot Leads" buttons have been removed from the hero sections!');
