const fs = require('fs');
const path = require('path');

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

// Generate redirects for state abbreviations
function generateStateAbbrevRedirects() {
  const redirects = [];
  
  Object.entries(stateAbbrevMap).forEach(([abbrev, fullName]) => {
    redirects.push({
      source: `/vending-leads/:city-${abbrev}`,
      destination: `/vending-leads/:city-${fullName}`,
      permanent: true,
    });
    
    redirects.push({
      source: `/location/:city-${abbrev}`,
      destination: `/vending-leads/:city-${fullName}`,
      permanent: true,
    });
    
    redirects.push({
      source: `/location/:city-${abbrev}.html`,
      destination: `/vending-leads/:city-${fullName}`,
      permanent: true,
    });
  });
  
  return redirects;
}

// Specific redirects from the broken URLs list
const specificRedirects = [
  { source: '/vending-leads/penn-ylvania', destination: '/vending-leads/pennsylvania', permanent: true },
  { source: '/vending-leads/york', destination: '/vending-leads/new-york', permanent: true },
  { source: '/vending-leads/dc', destination: '/vending-leads/washington-dc', permanent: true },
  { source: '/vending-leads/rochester hills-michigan', destination: '/vending-leads/rochester-hills-michigan', permanent: true },
  { source: '/vending-leads/new-york-ny', destination: '/vending-leads/new-york', permanent: true },
  { source: '/vending-leads/philadelphia-pa', destination: '/vending-leads/philadelphia-pennsylvania', permanent: true },
  { source: '/location/index.html', destination: '/vending-leads', permanent: true },
  { source: '/location/[CITY_LOWERCASE]-[STATE_LOWERCASE].html', destination: '/vending-leads', permanent: true },
];

// Pattern-based redirects
const patternRedirects = [
  { source: '/location/:path*', destination: '/vending-leads/:path*', permanent: true },
  { source: '/vending-machines-for-sale-in-:path*', destination: '/vending-leads/:path*', permanent: true },
  { source: '/location/:path*.html', destination: '/vending-leads/:path*', permanent: true },
];

// Combine all redirects
const allRedirects = [
  ...specificRedirects,
  ...generateStateAbbrevRedirects(),
  ...patternRedirects,
];

// Generate the redirects code for next.config.js
function generateConfigCode() {
  let code = '    return [\n';
  
  // Add existing redirects
  code += `      {
        source: '/howitworks',
        destination: '/how-it-works',
        permanent: true,
      },
      {
        source: '/how-itworks',
        destination: '/how-it-works',
        permanent: true,
      },
      {
        source: '/how-it-work',
        destination: '/how-it-works',
        permanent: true,
      },
      {
        source: '/guide/:slug',
        destination: '/how-to-start-a-vending-machine-business/:slug',
        permanent: true,
      },\n`;
  
  // Add specific redirects
  allRedirects.forEach((redirect, index) => {
    code += `      {
        source: '${redirect.source}',
        destination: '${redirect.destination}',
        permanent: ${redirect.permanent},
      }`;
    if (index < allRedirects.length - 1) {
      code += ',\n';
    } else {
      code += '\n';
    }
  });
  
  code += '    ];\n';
  return code;
}

// Main
const configCode = generateConfigCode();
console.log('Generated redirects config:');
console.log(configCode);

// Write to file for review
fs.writeFileSync(
  path.join(__dirname, 'redirects_config.txt'),
  configCode
);

console.log('\n✅ Redirects config saved to redirects_config.txt');

