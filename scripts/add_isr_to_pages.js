const fs = require('fs');
const path = require('path');

// Add ISR to all vending-leads page.tsx files
function addISRToPages(directory) {
  const basePath = path.join(process.cwd(), `src/app/${directory}`);
  
  let processed = 0;
  let skipped = 0;
  
  function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subdirPath = path.join(dir, entry.name);
        const pagePath = path.join(subdirPath, 'page.tsx');
        
        if (fs.existsSync(pagePath)) {
          try {
            let content = fs.readFileSync(pagePath, 'utf8');
            
            // Check if ISR is already added
            if (content.includes('export const revalidate')) {
              skipped++;
              continue;
            }
            
            // Add ISR after the imports and before export default
            // Find the line with "export default function"
            const lines = content.split('\n');
            let insertIndex = -1;
            
            for (let i = 0; i < lines.length; i++) {
              if (lines[i].includes('export default function')) {
                insertIndex = i;
                break;
              }
            }
            
            if (insertIndex > 0) {
              // Insert ISR export before the function
              lines.splice(insertIndex, 0, '// Enable ISR - regenerate page every hour');
              lines.splice(insertIndex + 1, 0, 'export const revalidate = 3600;');
              lines.splice(insertIndex + 2, 0, '');
              
              const newContent = lines.join('\n');
              fs.writeFileSync(pagePath, newContent, 'utf8');
              processed++;
              
              if (processed % 50 === 0) {
                console.log(`Processed ${processed} pages...`);
              }
            }
          } catch (error) {
            console.error(`Error processing ${pagePath}: ${error.message}`);
          }
        }
        
        // Recurse into subdirectories
        processDirectory(subdirPath);
      }
    }
  }
  
  processDirectory(basePath);
  return { processed, skipped };
}

console.log('Adding ISR to vending-leads pages...');
const vendingLeads = addISRToPages('vending-leads');
console.log(`✓ Vending Leads: ${vendingLeads.processed} processed, ${vendingLeads.skipped} skipped\n`);

console.log('Adding ISR to vending-services pages...');
const vendingServices = addISRToPages('vending-services');
console.log(`✓ Vending Services: ${vendingServices.processed} processed, ${vendingServices.skipped} skipped\n`);

console.log('Adding ISR to how-to-start pages...');
const howToStart = addISRToPages('how-to-start-a-vending-machine-business');
console.log(`✓ How To Start: ${howToStart.processed} processed, ${howToStart.skipped} skipped\n`);

const total = vendingLeads.processed + vendingServices.processed + howToStart.processed;
console.log(`\n${'='.repeat(60)}`);
console.log(`TOTAL: ${total} pages updated with ISR`);
console.log(`${'='.repeat(60)}`);

