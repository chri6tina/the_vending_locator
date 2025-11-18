const fs = require('fs');
const path = require('path');

// Common broken URL patterns from Google Search Console
const brokenUrls = [
  // Incomplete/corrupted slugs
  '/vending-leads/texa-',
  '/vending-leads/illinoi-',
  '/vending-leads/ala-ka',
  '/vending-leads/arkan-a-',
  '/vending-leads/penn-ylvania',
  '/vending-leads/york',
  '/vending-leads/mexico',
  '/vending-leads/dc',
  '/vending-leads/oklahoma',
  '/vending-leads/alaska',
  '/vending-leads/missouri',
  '/vending-leads/minnesota',
  '/vending-leads/oregon',
  
  // Wrong format (state abbreviation instead of full name)
  '/vending-leads/austin-tx',
  '/vending-leads/chicago-il',
  '/vending-leads/los-angeles-ca',
  '/vending-leads/houston-tx',
  '/vending-leads/san-jose-ca',
  '/vending-leads/san-antonio-tx',
  '/vending-leads/seattle-wa',
  '/vending-leads/san-diego-ca',
  '/vending-leads/phoenix-az',
  '/vending-leads/philadelphia-pa',
  '/vending-leads/jacksonville-fl',
  '/vending-leads/new-york-ny',
  '/vending-leads/san-francisco-ca',
  '/vending-leads/dallas-tx',
  '/vending-leads/miami-fl',
  
  // Spaces in slugs (should be hyphens)
  '/vending-leads/rochester hills-michigan',
  
  // Old location URLs
  '/location/new-york-ny',
  '/location/dallas-tx',
  '/location/chicago-il.html',
  '/location/miami-fl',
  '/location/jacksonville-fl',
  '/location/austin-tx.html',
  '/location/houston-tx',
  '/location/seattle-wa',
  '/location/los-angeles-ca',
  '/location/phoenix-az',
  '/location/san-diego-ca',
  '/location/san-antonio-tx',
  '/location/san-francisco-ca',
  '/location/san-jose-ca',
  '/location/philadelphia-pa',
  '/location/orlando-fl',
  '/location/gainesville-fl',
  '/location/fort-lauderdale-fl',
  '/location/fort-worth-tx',
  '/location/el-paso-tx',
  '/location/fresno-ca',
  '/location/tampa-fl',
  '/location/sacramento-ca',
  '/location/florida',
  '/location/washington',
  '/location/california',
  '/location/new-york',
  '/location/illinois',
  '/location/arizona',
  '/location/pennsylvania',
  '/location/texas',
  '/location/index.html',
  '/location/[CITY_LOWERCASE]-[STATE_LOWERCASE].html',
  
  // Vending machines for sale URLs (these should redirect to vending-leads)
  '/vending-machines-for-sale-in-new-york',
  '/vending-machines-for-sale-in-waco-texas',
  '/vending-machines-for-sale-in-south-aven-mississippi',
  '/vending-machines-for-sale-in-peoria-arizona',
  '/vending-machines-for-sale-in-garland-texas',
  '/vending-machines-for-sale-in-kodiak-alaska',
  '/vending-machines-for-sale-in-ketchikan-alaska',
  '/vending-machines-for-sale-in-vero-beach-florida',
  '/vending-machines-for-sale-in-north-charleston-south-carolina',
  '/vending-machines-for-sale-in-milford-delaware',
  '/vending-machines-for-sale-in-fort-myers-florida',
  '/vending-machines-for-sale-in-spartanburg-south-carolina',
  '/vending-machines-for-sale-in-rochester-new-york',
  '/vending-machines-for-sale-in-sarasota-florida',
  '/vending-machines-for-sale-in-poulsbo-washington',
  '/vending-machines-for-sale-in-st-cloud-minnesota',
  '/vending-machines-for-sale-in-richmond-kentucky',
  '/vending-machines-for-sale-in-san-jose-california',
  '/vending-machines-for-sale-in-wilmington-delaware',
  '/vending-machines-for-sale-in-west-palm-beach-florida',
  '/vending-machines-for-sale-in-new-castle-delaware',
  '/vending-machines-for-sale-in-south-bend-indiana',
  '/vending-machines-for-sale-in-great-falls-montana',
  '/vending-machines-for-sale-in-sacramento-california',
  '/vending-machines-for-sale-in-seattle-washington',
  '/vending-machines-for-sale-in-north-little-rock-arkansas',
  '/vending-machines-for-sale-in-santa-ana-california',
  '/vending-machines-for-sale-in-tuscaloosa-alabama',
  '/vending-machines-for-sale-in-palm-bay-florida',
  '/vending-machines-for-sale-in-zephyrhills-florida',
  '/vending-machines-for-sale-in-santa-fe-new-mexico',
  '/vending-machines-for-sale-in-montgomery-alabama',
  '/vending-machines-for-sale-in-hilo-hawaii',
  '/vending-machines-for-sale-in-south-carolina',
  '/vending-machines-for-sale-in-raleigh-north-carolina',
  '/vending-machines-for-sale-in-summerville-south-carolina',
  '/vending-machines-for-sale-in-oakland-california',
  '/vending-machines-for-sale-in-fairbanks-alaska',
  '/vending-machines-for-sale-in-honolulu-hawaii',
  '/vending-machines-for-sale-in-new-haven-connecticut',
  '/vending-machines-for-sale-in-evanston-illinois',
  '/vending-machines-for-sale-in-lewiston-maine',
  '/vending-machines-for-sale-in-reno-nevada',
  '/vending-machines-for-sale-in-yonkers-new-york',
  '/vending-machines-for-sale-in-woodbury-minnesota',
  '/vending-machines-for-sale-in-fort-smith-arkansas',
  '/vending-machines-for-sale-in-middletown-delaware',
  '/vending-machines-for-sale-in-tucson-arizona',
  '/vending-machines-for-sale-in-new-jersey',
  '/vending-machines-for-sale-in-pembroke-pines-florida',
  '/vending-machines-for-sale-in-eugene-oregon',
  '/vending-machines-for-sale-in-little-rock-arkansas',
  '/vending-machines-for-sale-in-sunnyvale-california',
  '/vending-machines-for-sale-in-georgetown-delaware',
  '/vending-machines-for-sale-in-kailua-hawaii',
  '/vending-machines-for-sale-in-san-diego-california',
  '/vending-machines-for-sale-in-tampa-florida',
  '/vending-machines-for-sale-in-new-orleans-louisiana',
  '/vending-machines-for-sale-in-redmond-washington',
  '/vending-machines-for-sale-in-santa-barbara-california',
  '/vending-machines-for-sale-in-fayetteville-arkansas',
  '/vending-machines-for-sale-in-shreveport-louisiana',
  '/vending-machines-for-sale-in-fort-lauderdale-florida',
  '/vending-machines-for-sale-in-port-st-lucie-florida',
  '/vending-machines-for-sale-in-providence-rhode-island',
  '/vending-machines-for-sale-in-saint-paul-minnesota',
  '/vending-machines-for-sale-in-miami-florida',
  '/vending-machines-for-sale-in-smyrna-delaware',
  '/vending-machines-for-sale-in-dover-delaware',
  '/vending-machines-for-sale-in-lake-charles-louisiana',
  '/vending-machines-for-sale-in-salem-new-hampshire',
  '/vending-machines-for-sale-in-san-bernardino-california',
  '/vending-machines-for-sale-in-yakima-washington',
  '/vending-machines-for-sale-in-moses-lake-washington',
  '/vending-machines-for-sale-in-san-francisco-california',
  '/vending-machines-for-sale-in-miramar-florida',
  '/vending-machines-for-sale-in-orlando-florida',
  '/vending-machines-for-sale-in-new-mexico',
  '/vending-machines-for-sale-in-new-arkansas-city-arkansas',
  '/vending-machines-for-sale-in-frisco-texas',
  '/vending-machines-for-sale-in-kenai-alaska',
];

// State abbreviation to full name mapping
const stateAbbrevMap = {
  'tx': 'texas',
  'il': 'illinois',
  'ca': 'california',
  'wa': 'washington',
  'az': 'arizona',
  'pa': 'pennsylvania',
  'fl': 'florida',
  'ny': 'new-york',
  'ak': 'alaska',
  'hi': 'hawaii',
  'ct': 'connecticut',
  'me': 'maine',
  'nv': 'nevada',
  'mn': 'minnesota',
  'ar': 'arkansas',
  'nj': 'new-jersey',
  'or': 'oregon',
  'la': 'louisiana',
  'ri': 'rhode-island',
  'nh': 'new-hampshire',
  'de': 'delaware',
  'ky': 'kentucky',
  'sc': 'south-carolina',
  'nc': 'north-carolina',
  'al': 'alabama',
  'nm': 'new-mexico',
  'mt': 'montana',
  'in': 'indiana',
  'ut': 'utah',
  'co': 'colorado',
  'ma': 'massachusetts',
  'md': 'maryland',
  'ms': 'mississippi',
  'mo': 'missouri',
  'ok': 'oklahoma',
  'wi': 'wisconsin',
  'mi': 'michigan',
  'ga': 'georgia',
  'tn': 'tennessee',
  'ia': 'iowa',
  'ks': 'kansas',
  'ne': 'nebraska',
  'nd': 'north-dakota',
  'sd': 'south-dakota',
  'wv': 'west-virginia',
  'id': 'idaho',
  'vt': 'vermont',
  'va': 'virginia',
  'wy': 'wyoming',
  'dc': 'washington-dc',
};

// Function to convert state abbreviation to full name
function convertStateAbbrev(slug) {
  const parts = slug.split('-');
  if (parts.length >= 2) {
    const lastPart = parts[parts.length - 1];
    if (stateAbbrevMap[lastPart.toLowerCase()]) {
      parts[parts.length - 1] = stateAbbrevMap[lastPart.toLowerCase()];
      return parts.join('-');
    }
  }
  return slug;
}

// Function to fix common URL issues
function fixUrl(url) {
  // Remove .html extension
  url = url.replace(/\.html$/, '');
  
  // Fix spaces
  url = url.replace(/\s+/g, '-');
  
  // Fix incomplete slugs
  if (url.includes('texa-')) return null; // Can't fix
  if (url.includes('illinoi-')) return null;
  if (url.includes('ala-ka')) return null;
  if (url.includes('arkan-a-')) return null;
  if (url.includes('penn-ylvania')) {
    url = url.replace('penn-ylvania', 'pennsylvania');
  }
  
  // Convert /location/* to /vending-leads/*
  if (url.startsWith('/location/')) {
    url = url.replace('/location/', '/vending-leads/');
  }
  
  // Convert /vending-machines-for-sale-in-* to /vending-leads/*
  if (url.startsWith('/vending-machines-for-sale-in-')) {
    url = url.replace('/vending-machines-for-sale-in-', '/vending-leads/');
  }
  
  // Fix state abbreviations
  url = convertStateAbbrev(url);
  
  // Fix special cases
  if (url === '/vending-leads/dc') {
    url = '/vending-leads/washington-dc';
  }
  if (url === '/vending-leads/york') {
    url = '/vending-leads/new-york';
  }
  if (url === '/vending-leads/mexico') {
    return null; // Invalid
  }
  
  // Fix state-only URLs
  const stateOnlyPattern = /^\/vending-leads\/([a-z-]+)$/;
  const match = url.match(stateOnlyPattern);
  if (match) {
    const stateSlug = match[1];
    // Check if it's a valid state slug (not a city-state combo)
    const validStates = Object.values(stateAbbrevMap);
    if (validStates.includes(stateSlug) && !url.includes('-')) {
      // This is a state-only URL, redirect to state page
      return url; // Keep as is, will need special handling
    }
  }
  
  return url;
}

// Generate redirects
function generateRedirects() {
  const redirects = [];
  
  // Process broken URLs
  brokenUrls.forEach(url => {
    const fixed = fixUrl(url);
    if (fixed && fixed !== url) {
      redirects.push({
        source: url,
        destination: fixed,
        permanent: true,
      });
    }
  });
  
  // Add pattern-based redirects
  redirects.push(
    // Location URLs
    {
      source: '/location/:path*',
      destination: '/vending-leads/:path*',
      permanent: true,
    },
    // Vending machines for sale URLs
    {
      source: '/vending-machines-for-sale-in-:path*',
      destination: '/vending-leads/:path*',
      permanent: true,
    },
    // Fix state abbreviations in vending-leads
    {
      source: '/vending-leads/:city-:abbrev',
      destination: '/vending-leads/:city-:abbrev',
      permanent: false, // Will be handled by pattern matching
    }
  );
  
  return redirects;
}

// Main function
function main() {
  console.log('🔍 Analyzing broken URLs...\n');
  
  const redirects = generateRedirects();
  
  console.log(`✅ Generated ${redirects.length} redirects\n`);
  console.log('Sample redirects:');
  redirects.slice(0, 10).forEach(r => {
    console.log(`  ${r.source} → ${r.destination}`);
  });
  
  // Write redirects to a file for review
  fs.writeFileSync(
    path.join(__dirname, 'redirects.json'),
    JSON.stringify(redirects, null, 2)
  );
  
  console.log('\n📝 Redirects saved to redirects.json');
  console.log('\n⚠️  Note: Pattern-based redirects need to be added to next.config.js manually');
}

main();

