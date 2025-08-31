const fs = require('fs');
const path = require('path');

// Configuration
const PAGES_DIR = 'src/app';

// Helper function to escape apostrophes and quotes in strings
function escapeString(str) {
  if (!str) return str;
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

// Generate metadata for different page types
function generateMetadata(filePath, pageType = 'generic') {
  // Convert file path to URL path
  const relativePath = path.relative(PAGES_DIR, filePath);
  const urlPath = relativePath
    .replace(/\\/g, '/')
    .replace(/\/page\.tsx$/, '') // Remove page.tsx
    .replace(/\/layout\.tsx$/, ''); // Remove layout.tsx
  
  const canonicalUrl = `https://www.thevendinglocator.com/${urlPath}`;
  
  // Extract page name for title
  const pathParts = urlPath.split('/').filter(Boolean);
  const pageName = pathParts[pathParts.length - 1] || 'Home';
  const formattedPageName = pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Base metadata
  const metadata = {
    title: `${formattedPageName} - The Vending Locator`,
    description: `Discover vending machine opportunities and business leads. Expert guidance for vending machine operators and entrepreneurs.`,
    keywords: 'vending machines, vending business, vending leads, vending locations, vending opportunities',
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: `${formattedPageName} - The Vending Locator`,
      description: `Discover vending machine opportunities and business leads. Expert guidance for vending machine operators and entrepreneurs.`,
      url: canonicalUrl,
      siteName: 'The Vending Locator',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${formattedPageName} - The Vending Locator`,
      description: `Discover vending machine opportunities and business leads. Expert guidance for vending machine operators and entrepreneurs.`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };

  // Customize metadata based on page type
  if (pageType === 'vending-leads-city') {
    const cityState = pathParts.slice(-2).join(', ');
    const formattedCityState = cityState
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    metadata.title = `Vending Machine Leads in ${formattedCityState} - The Vending Locator`;
    metadata.description = `Get verified vending machine leads and locations in ${formattedCityState}. Find qualified businesses for vending machine placement.`;
    metadata.keywords = `vending machines ${formattedCityState}, vending leads ${formattedCityState}, vending locations ${formattedCityState}, vending opportunities ${formattedCityState}`;
    
    metadata.openGraph.title = metadata.title;
    metadata.openGraph.description = metadata.description;
    metadata.twitter.title = metadata.title;
    metadata.twitter.description = metadata.description;
  }
  
  else if (pageType === 'vending-leads-state') {
    const state = pathParts[pathParts.length - 1];
    const formattedState = state
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    metadata.title = `Vending Machine Leads in ${formattedState} - The Vending Locator`;
    metadata.description = `Get verified vending machine leads and locations throughout ${formattedState}. Find qualified businesses for vending machine placement.`;
    metadata.keywords = `vending machines ${formattedState}, vending leads ${formattedState}, vending locations ${formattedState}, vending opportunities ${formattedState}`;
    
    metadata.openGraph.title = metadata.title;
    metadata.openGraph.description = metadata.description;
    metadata.twitter.title = metadata.title;
    metadata.twitter.description = metadata.description;
  }
  
  else if (pageType === 'blog') {
    metadata.title = `Vending Machine Business Blog - The Vending Locator`;
    metadata.description = `Expert insights, tips, and strategies for vending machine business success. Learn from industry professionals.`;
    metadata.keywords = 'vending machine blog, vending business tips, vending industry insights, vending machine strategies';
    
    metadata.openGraph.title = metadata.title;
    metadata.openGraph.description = metadata.description;
    metadata.twitter.title = metadata.title;
    metadata.twitter.description = metadata.description;
  }
  
  else if (pageType === 'pricing') {
    metadata.title = `Vending Machine Leads Pricing - The Vending Locator`;
    metadata.description = `Affordable vending machine leads and location packages. Choose the plan that fits your business needs.`;
    metadata.keywords = 'vending leads pricing, vending location packages, vending business costs, vending machine investment';
    
    metadata.openGraph.title = metadata.title;
    metadata.openGraph.description = metadata.description;
    metadata.twitter.title = metadata.title;
    metadata.twitter.description = metadata.description;
  }
  
  else if (pageType === 'contact') {
    metadata.title = `Contact The Vending Locator - Get Vending Machine Support`;
    metadata.description = `Contact our expert team for vending machine business support, questions, and guidance.`;
    metadata.keywords = 'contact vending locator, vending machine support, vending business help, vending consultation';
    
    metadata.openGraph.title = metadata.title;
    metadata.openGraph.description = metadata.description;
    metadata.twitter.title = metadata.title;
    metadata.twitter.description = metadata.description;
  }

  return metadata;
}

// Convert page to server component with metadata
function convertToServerComponent(filePath, content) {
  const relativePath = path.relative(PAGES_DIR, filePath);
  const pathParts = relativePath.split(path.sep);
  
  // Determine page type
  let pageType = 'generic';
  if (pathParts.includes('vending-leads')) {
    if (pathParts.length > 2) {
      pageType = 'vending-leads-city';
    } else {
      pageType = 'vending-leads-state';
    }
  } else if (pathParts.includes('blog')) {
    pageType = 'blog';
  } else if (pathParts.includes('pricing')) {
    pageType = 'pricing';
  } else if (pathParts.includes('contact')) {
    pageType = 'contact';
  }

  const metadata = generateMetadata(filePath, pageType);
  
  // Check if it's already a server component
  if (content.includes('export const metadata')) {
    console.log(`✅ ${relativePath} already has metadata`);
    return content;
  }

  // Check if it's a client component
  const isClientComponent = content.includes("'use client'");
  
  if (isClientComponent) {
    // Convert to server component pattern
    const componentName = path.basename(filePath, '.tsx').replace(/[^a-zA-Z0-9]/g, '');
    const clientComponentName = `${componentName}Client`;
    
    // Create client component file
    const clientComponentPath = path.join(path.dirname(filePath), `${clientComponentName}.tsx`);
    const clientComponentContent = content.replace("'use client'", "'use client'");
    
    // Create server component with metadata
    const serverComponentContent = `import { Metadata } from 'next'
import ${clientComponentName} from './${clientComponentName}'

export const metadata: Metadata = ${JSON.stringify(metadata, null, 2)}

export default function ${componentName}Page() {
  return <${clientComponentName} />
}
`;

    // Write client component
    fs.writeFileSync(clientComponentPath, clientComponentContent);
    console.log(`📝 Created client component: ${clientComponentPath}`);
    
    // Return server component content
    return serverComponentContent;
  } else {
    // Simple page, just add metadata
    const metadataExport = `\nexport const metadata: Metadata = ${JSON.stringify(metadata, null, 2)}\n`;
    
    // Add import if not present
    if (!content.includes('import { Metadata }')) {
      const importStatement = "import { Metadata } from 'next'\n";
      content = importStatement + content;
    }
    
    // Add metadata export
    content = content.replace(/export default function/, metadataExport + 'export default function');
    
    return content;
  }
}

// Process all pages recursively
function processPages(directory) {
  const items = fs.readdirSync(directory);
  
  for (const item of items) {
    const fullPath = path.join(directory, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-page directories
      if (!['node_modules', '.next', 'out', 'dist'].includes(item)) {
        processPages(fullPath);
      }
    } else if (item === 'page.tsx' || item === 'layout.tsx') {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const updatedContent = convertToServerComponent(fullPath, content);
        
        // Write updated content back
        fs.writeFileSync(fullPath, updatedContent);
        console.log(`✅ Updated: ${fullPath}`);
      } catch (error) {
        console.error(`❌ Error processing ${fullPath}:`, error.message);
      }
    }
  }
}

// Main execution
console.log('🚀 Starting comprehensive SEO fix for all pages...\n');

try {
  processPages(PAGES_DIR);
  console.log('\n🎉 SEO fix completed successfully!');
  console.log('\n📋 What was fixed:');
  console.log('✅ Added canonical URLs to prevent duplicate content');
  console.log('✅ Added proper metadata for SEO');
  console.log('✅ Converted client components to server/client pattern');
  console.log('✅ Added OpenGraph and Twitter meta tags');
  console.log('✅ Added proper robots directives');
  console.log('\n🔍 Next steps:');
  console.log('1. Test your site to ensure pages load correctly');
  console.log('2. Check that canonical URLs are working');
  console.log('3. Monitor search console for duplicate content issues');
  console.log('4. Consider updating your sitemap.xml');
} catch (error) {
  console.error('❌ Script failed:', error);
  process.exit(1);
}
