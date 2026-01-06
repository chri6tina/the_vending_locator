const fs = require('fs');
const path = require('path');

// Directory containing tax-services pages
const taxServicesDir = path.join(__dirname, '..', 'src', 'app', 'tax-services');

function convertMetadataToDynamic(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file already has generateMetadata
    if (content.includes('export async function generateMetadata')) {
      console.log(`⏭️  Skipping ${path.basename(path.dirname(filePath))} - already has generateMetadata`);
      return { updated: false, reason: 'already_converted' };
    }
    
    // Extract metadata object from static export
    const metadataMatch = content.match(/export const metadata: Metadata = \{([\s\S]*?)\}/);
    
    if (!metadataMatch) {
      console.log(`⚠️  Skipping ${path.basename(path.dirname(filePath))} - no metadata found`);
      return { updated: false, reason: 'no_metadata' };
    }
    
    // Extract city and state from the metadata (for fallback)
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const cityStateMatch = titleMatch ? titleMatch[1].match(/in\s+([^,]+),\s+([^-]+)/) : null;
    
    // Get the slug from the directory name
    const slug = path.basename(path.dirname(filePath));
    
    // Parse city and state from slug (e.g., "jacksonville-florida")
    const parts = slug.split('-');
    let city = 'City';
    let state = 'State';
    
    if (parts.length >= 2) {
      const statePart = parts[parts.length - 1];
      const cityParts = parts.slice(0, -1);
      city = cityParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
      state = statePart.charAt(0).toUpperCase() + statePart.slice(1);
    }
    
    // Create generateMetadata function
    const generateMetadataFunction = `// Dynamically generate metadata to prevent build-time processing
export async function generateMetadata(): Promise<Metadata> {
  const slug = '${slug}';
  const city = '${city}';
  const state = '${state}';
  
  const title = \`Tax & Bookkeeping Services for Vending Machine Owners in \${city}, \${state} - The Vending Locator\`;
  const description = \`Expert tax preparation and bookkeeping services for vending machine business owners in \${city}, \${state}. Get professional help with taxes, accounting, and financial management.\`;
  
  return {
    title,
    description,
    keywords: \`vending machine taxes \${city} \${state}, vending business bookkeeping \${city}, tax services vending machines \${city} \${state}, vending machine accounting \${city}, tax preparation vending business \${city}\`,
    alternates: {
      canonical: \`https://www.thevendinglocator.com/tax-services/\${slug}\`
    },
    openGraph: {
      title,
      description,
      url: \`https://www.thevendinglocator.com/tax-services/\${slug}\`,
      siteName: 'The Vending Locator',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
}`;
    
    // Remove the entire static metadata export block (including any trailing content)
    // Match from "export const metadata" to the closing brace, handling nested objects
    let braceCount = 0;
    let startIndex = content.indexOf('export const metadata: Metadata = {');
    if (startIndex === -1) {
      startIndex = content.indexOf('export const metadata = {');
    }
    
    if (startIndex !== -1) {
      let endIndex = startIndex;
      let inString = false;
      let stringChar = '';
      
      for (let i = startIndex; i < content.length; i++) {
        const char = content[i];
        const prevChar = i > 0 ? content[i - 1] : '';
        
        // Handle string literals
        if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
          if (!inString) {
            inString = true;
            stringChar = char;
          } else if (char === stringChar) {
            inString = false;
            stringChar = '';
          }
        }
        
        if (!inString) {
          if (char === '{') braceCount++;
          if (char === '}') {
            braceCount--;
            if (braceCount === 0) {
              endIndex = i + 1;
              break;
            }
          }
        }
      }
      
      // Remove the old metadata export
      content = content.slice(0, startIndex) + generateMetadataFunction + content.slice(endIndex);
    } else {
      // Fallback: try simple regex replacement
      content = content.replace(
        /export const metadata: Metadata = \{[\s\S]*?\n\}/,
        generateMetadataFunction
      );
    }
    
    // Ensure Metadata is imported
    if (!content.includes("import { Metadata }")) {
      content = content.replace(
        /import { Metadata } from 'next'/,
        "import { Metadata } from 'next'"
      );
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    return { updated: true };
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return { updated: false, reason: 'error', error: error.message };
  }
}

function processDirectory(dir) {
  const results = {
    updated: 0,
    skipped: 0,
    errors: 0
  };
  
  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`);
    return results;
  }
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip if it's a state directory (like 'texas') or backup directories
      if (entry.name.startsWith('_')) {
        continue;
      }
      
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const result = convertMetadataToDynamic(pagePath);
        if (result.updated) {
          results.updated++;
          if (results.updated % 50 === 0) {
            console.log(`✅ Updated ${results.updated} pages...`);
          }
        } else if (result.reason === 'already_converted') {
          results.skipped++;
        } else if (result.reason === 'error') {
          results.errors++;
        } else {
          results.skipped++;
        }
      }
    }
  }
  
  return results;
}

// Main execution
console.log('🔄 Converting tax-services pages to use dynamic metadata generation...\n');
console.log('This prevents Next.js from processing metadata during build, reducing memory usage.\n');

const results = processDirectory(taxServicesDir);

console.log('\n' + '='.repeat(60));
console.log('📊 CONVERSION SUMMARY');
console.log('='.repeat(60));
console.log(`✅ Updated: ${results.updated}`);
console.log(`⏭️  Skipped: ${results.skipped}`);
console.log(`❌ Errors: ${results.errors}`);
console.log(`📈 Total: ${results.updated + results.skipped + results.errors}`);
console.log('\n🎉 Conversion complete!');
console.log('\n📋 Next Steps:');
console.log('   1. Test a few pages locally to ensure metadata is generated correctly');
console.log('   2. Commit and push the changes');
console.log('   3. The build should now complete without memory errors');

