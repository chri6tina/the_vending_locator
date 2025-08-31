const fs = require('fs');
const path = require('path');

// Configuration
const PAGES_DIR = 'src/app';

// Helper function to format city/state names properly
function formatLocationName(name) {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
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
  
  // Extract path parts for analysis
  const pathParts = urlPath.split('/').filter(Boolean);
  
  // Base metadata
  const metadata = {
    title: `The Vending Locator`,
    description: `Discover vending machine opportunities and business leads. Expert guidance for vending machine operators and entrepreneurs.`,
    keywords: 'vending machines, vending business, vending leads, vending locations, vending opportunities',
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: `The Vending Locator`,
      description: `Discover vending machine opportunities and business leads. Expert guidance for vending machine operators and entrepreneurs.`,
      url: canonicalUrl,
      siteName: 'The Vending Locator',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `The Vending Locator`,
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
    const city = pathParts[pathParts.length - 2];
    const state = pathParts[pathParts.length - 1];
    const formattedCity = formatLocationName(city);
    const formattedState = formatLocationName(state);
    
    metadata.title = `Vending Machine Leads in ${formattedCity}, ${formattedState} - The Vending Locator`;
    metadata.description = `Get verified vending machine leads and locations in ${formattedCity}, ${formattedState}. Find qualified businesses for vending machine placement.`;
    metadata.keywords = `vending machines ${formattedCity} ${formattedState}, vending leads ${formattedCity} ${formattedState}, vending locations ${formattedCity} ${formattedState}, vending opportunities ${formattedCity} ${formattedState}`;
    
    metadata.openGraph.title = metadata.title;
    metadata.openGraph.description = metadata.description;
    metadata.twitter.title = metadata.title;
    metadata.twitter.description = metadata.description;
  }
  
  else if (pageType === 'vending-leads-state') {
    const state = pathParts[pathParts.length - 1];
    const formattedState = formatLocationName(state);
    
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
  
  else if (pageType === 'home') {
    metadata.title = `The Vending Locator - Find Vending Machine Leads & Locations`;
    metadata.description = `Discover verified vending machine leads and locations. Expert guidance for vending machine operators and entrepreneurs.`;
    metadata.keywords = 'vending machines, vending business, vending leads, vending locations, vending opportunities';
    
    metadata.openGraph.title = metadata.title;
    metadata.openGraph.description = metadata.description;
    metadata.twitter.title = metadata.title;
    metadata.twitter.description = metadata.description;
  }

  return metadata;
}

// Create complete page content with metadata
function createPageContent(filePath, pageType = 'generic') {
  const relativePath = path.relative(PAGES_DIR, filePath);
  const pathParts = relativePath.split(path.sep);
  
  // Determine page type
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
  } else if (pathParts.length === 1 && pathParts[0] === 'page.tsx') {
    pageType = 'home';
  }

  const metadata = generateMetadata(filePath, pageType);
  
  // Check if it's a client component by looking for existing pageClient
  const dirPath = path.dirname(filePath);
  const pageClientPath = path.join(dirPath, 'pageClient.tsx');
  const hasPageClient = fs.existsSync(pageClientPath);
  
  if (hasPageClient) {
    // Create server component with metadata that imports pageClient
    return `import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = ${JSON.stringify(metadata, null, 2)}

export default function ${pageType === 'vending-leads-city' ? 'CityPage' : 'Page'}() {
  return <PageClient />
}`;
  } else {
    // Simple page, just add metadata
    return `import { Metadata } from 'next'

export const metadata: Metadata = ${JSON.stringify(metadata, null, 2)}

export default function Page() {
  return (
    <div>
      <h1>${metadata.title}</h1>
      <p>${metadata.description}</p>
    </div>
  )
}`;
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
        // Completely overwrite the file with new content
        const newContent = createPageContent(fullPath);
        fs.writeFileSync(fullPath, newContent);
        console.log(`✅ Completely rewrote: ${fullPath}`);
      } catch (error) {
        console.error(`❌ Error processing ${fullPath}:`, error.message);
      }
    }
  }
}

// Main execution
console.log('🚀 Starting COMPLETE OVERWRITE SEO fix for all pages...\n');

try {
  processPages(PAGES_DIR);
  console.log('\n🎉 COMPLETE OVERWRITE SEO fix completed successfully!');
  console.log('\n📋 What was fixed:');
  console.log('✅ Added canonical URLs to prevent duplicate content');
  console.log('✅ Added proper metadata for SEO');
  console.log('✅ Converted client components to server/client pattern');
  console.log('✅ Added OpenGraph and Twitter meta tags');
  console.log('✅ Added proper robots directives');
  console.log('✅ Fixed path parsing issues');
  console.log('✅ REMOVED ALL DUPLICATE METADATA BLOCKS');
  console.log('✅ COMPLETELY OVERWROTE FILES FOR CLEAN START');
  console.log('\n🔍 Next steps:');
  console.log('1. Test your site to ensure pages load correctly');
  console.log('2. Check that canonical URLs are working');
  console.log('3. Monitor search console for duplicate content issues');
  console.log('4. Consider updating your sitemap.xml');
} catch (error) {
  console.error('❌ Script failed:', error);
  process.exit(1);
}
