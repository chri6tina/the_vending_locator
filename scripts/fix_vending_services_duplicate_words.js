const fs = require('fs');
const path = require('path');

// Files with duplicate words in component names
const filesToFix = [
  'src/app/_city-pages/vending-services/miami-beach-florida/pageClient.tsx',
  'src/app/_city-pages/vending-services/miami-beach-florida/page.tsx',
  'src/app/_city-pages/vending-services/miami-gardens-florida/pageClient.tsx',
  'src/app/_city-pages/vending-services/miami-gardens-florida/page.tsx',
  'src/app/_city-pages/vending-services/miami-lakes-florida/pageClient.tsx',
  'src/app/_city-pages/vending-services/miami-lakes-florida/page.tsx',
  'src/app/_city-pages/vending-services/miami-shores-florida/pageClient.tsx',
  'src/app/_city-pages/vending-services/miami-shores-florida/page.tsx',
  'src/app/_city-pages/vending-services/miami-springs-florida/pageClient.tsx',
  'src/app/_city-pages/vending-services/miami-springs-florida/page.tsx',
  'src/app/_city-pages/vending-services/north-miami-beach-florida/pageClient.tsx',
  'src/app/_city-pages/vending-services/north-miami-beach-florida/page.tsx',
];

// Mapping of incorrect to correct component names and city display names
const fixes = {
  'miami-beach-florida': {
    componentName: 'MiamiBeachFloridaVendingServicesPage',
    servicesComponentName: 'MiamiBeachFloridaServicesPage',
    cityDisplayName: 'Miami Beach'
  },
  'miami-gardens-florida': {
    componentName: 'MiamiGardensFloridaVendingServicesPage',
    servicesComponentName: 'MiamiGardensFloridaServicesPage',
    cityDisplayName: 'Miami Gardens'
  },
  'miami-lakes-florida': {
    componentName: 'MiamiLakesFloridaVendingServicesPage',
    servicesComponentName: 'MiamiLakesFloridaServicesPage',
    cityDisplayName: 'Miami Lakes'
  },
  'miami-shores-florida': {
    componentName: 'MiamiShoresFloridaVendingServicesPage',
    servicesComponentName: 'MiamiShoresFloridaServicesPage',
    cityDisplayName: 'Miami Shores'
  },
  'miami-springs-florida': {
    componentName: 'MiamiSpringsFloridaVendingServicesPage',
    servicesComponentName: 'MiamiSpringsFloridaServicesPage',
    cityDisplayName: 'Miami Springs'
  },
  'north-miami-beach-florida': {
    componentName: 'NorthMiamiBeachFloridaVendingServicesPage',
    servicesComponentName: 'NorthMiamiBeachFloridaServicesPage',
    cityDisplayName: 'North Miami Beach'
  },
};

filesToFix.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Extract slug from file path
  const slug = filePath.match(/vending-services\/([^\/]+)\//)[1];
  const fix = fixes[slug];
  
  if (!fix) {
    console.log(`No fix data for ${slug}`);
    return;
  }

  // Fix component names (remove spaces and duplicate words)
  if (filePath.includes('pageClient.tsx')) {
    // Fix component name - remove spaces and duplicate words
    content = content.replace(
      /export default function [^()]+\(\)/g,
      `export default function ${fix.componentName}()`
    );
    
    // Fix city display name - remove duplicate words
    content = content.replace(
      /const cityDisplayName = '[^']+';/g,
      `const cityDisplayName = '${fix.cityDisplayName}';`
    );
  } else if (filePath.includes('page.tsx')) {
    // Fix component name for page.tsx
    content = content.replace(
      /export default function [^()]+\(\)/g,
      `export default function ${fix.servicesComponentName}()`
    );
  }
  
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Fixed: ${filePath}`);
});

console.log('Done fixing duplicate words!');
