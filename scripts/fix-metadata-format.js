const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function fixMetadata() {
  const files = await glob('src/app/tax-services/**/page.tsx');
  
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    if (content.includes('maxVideoPreview')) {
      content = content.replace(/maxVideoPreview: -1,/g, "'max-video-preview': -1,");
      content = content.replace(/maxImagePreview: 'large',/g, "'max-image-preview': 'large',");
      content = content.replace(/maxSnippet: -1/g, "'max-snippet': -1");
      
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
    }
  });
  
  console.log('Done fixing metadata format!');
}

fixMetadata().catch(console.error);

