const fs = require('fs');
const path = require('path');

// State abbreviations mapping
const STATE_ABBREVIATIONS = {
  'alabama': 'AL', 'alaska': 'AK', 'arizona': 'AZ', 'arkansas': 'AR',
  'california': 'CA', 'colorado': 'CO', 'connecticut': 'CT', 'delaware': 'DE',
  'florida': 'FL', 'georgia': 'GA', 'hawaii': 'HI', 'idaho': 'ID',
  'illinois': 'IL', 'indiana': 'IN', 'iowa': 'IA', 'kansas': 'KS',
  'kentucky': 'KY', 'louisiana': 'LA', 'maine': 'ME', 'maryland': 'MD',
  'massachusetts': 'MA', 'michigan': 'MI', 'minnesota': 'MN', 'mississippi': 'MS',
  'missouri': 'MO', 'montana': 'MT', 'nebraska': 'NE', 'nevada': 'NV',
  'new-hampshire': 'NH', 'new-jersey': 'NJ', 'new-mexico': 'NM', 'new-york': 'NY',
  'north-carolina': 'NC', 'north-dakota': 'ND', 'ohio': 'OH', 'oklahoma': 'OK',
  'oregon': 'OR', 'pennsylvania': 'PA', 'rhode-island': 'RI', 'south-carolina': 'SC',
  'south-dakota': 'SD', 'tennessee': 'TN', 'texas': 'TX', 'utah': 'UT',
  'vermont': 'VT', 'virginia': 'VA', 'washington': 'WA', 'west-virginia': 'WV',
  'wisconsin': 'WI', 'wyoming': 'WY', 'washington-dc': 'DC'
};

// Major city coordinates (we'll use defaults for others)
const CITY_COORDINATES = {
  'austin': { lat: 30.2672, lng: -97.7431 },
  'new-york': { lat: 40.7128, lng: -74.0060 },
  'los-angeles': { lat: 34.0522, lng: -118.2437 },
  'chicago': { lat: 41.8781, lng: -87.6298 },
  'houston': { lat: 29.7604, lng: -95.3698 },
  'phoenix': { lat: 33.4484, lng: -112.0740 },
  'philadelphia': { lat: 39.9526, lng: -75.1652 },
  'san-antonio': { lat: 29.4241, lng: -98.4936 },
  'san-diego': { lat: 32.7157, lng: -117.1611 },
  'dallas': { lat: 32.7767, lng: -96.7970 },
  'san-jose': { lat: 37.3382, lng: -121.8863 },
  'jacksonville': { lat: 30.3322, lng: -81.6557 },
  'fort-worth': { lat: 32.7555, lng: -97.3308 },
  'columbus': { lat: 39.9612, lng: -82.9988 },
  'charlotte': { lat: 35.2271, lng: -80.8431 },
  'san-francisco': { lat: 37.7749, lng: -122.4194 },
  'indianapolis': { lat: 39.7684, lng: -86.1581 },
  'seattle': { lat: 47.6062, lng: -122.3321 },
  'denver': { lat: 39.7392, lng: -104.9903 },
  'washington': { lat: 38.9072, lng: -77.0369 },
  'boston': { lat: 42.3601, lng: -71.0589 }
};

const CITY_PAGES_DIR = path.join(__dirname, '..', 'src', 'app', '_city-pages', 'vending-leads');

// Extract FAQs from page content
function extractFAQs(content) {
  const faqs = [];
  const seenQuestions = new Set();
  
  // Pattern to match FAQ items in motion.div (most common pattern in city pages)
  // Matches: <motion.div ...> ... <h3>question</h3> ... <p>answer</p> ... </motion.div>
  const motionDivPattern = /<motion\.div[^>]*>[\s\S]*?<h3[^>]*className[^>]*>([^<]+)<\/h3>[\s\S]*?<p[^>]*className[^>]*>([^<]+)<\/p>[\s\S]*?<\/motion\.div>/g;
  let motionMatch;
  
  while ((motionMatch = motionDivPattern.exec(content)) !== null) {
    const question = motionMatch[1].trim();
    const answer = motionMatch[2].trim();
    
    // Clean up question and answer (remove extra whitespace, newlines)
    const cleanQuestion = question.replace(/\s+/g, ' ').trim();
    const cleanAnswer = answer.replace(/\s+/g, ' ').trim();
    
    if (cleanQuestion && cleanAnswer && !seenQuestions.has(cleanQuestion)) {
      faqs.push({ question: cleanQuestion, answer: cleanAnswer });
      seenQuestions.add(cleanQuestion);
    }
  }
  
  // Also try simple h3/p pattern as fallback
  const simplePattern = /<h3[^>]*>([^<]+)<\/h3>[\s\S]{0,500}?<p[^>]*>([^<]+)<\/p>/g;
  let simpleMatch;
  
  while ((simpleMatch = simplePattern.exec(content)) !== null) {
    const question = simpleMatch[1].trim().replace(/\s+/g, ' ');
    const answer = simpleMatch[2].trim().replace(/\s+/g, ' ');
    
    if (question && answer && !seenQuestions.has(question)) {
      faqs.push({ question, answer });
      seenQuestions.add(question);
    }
  }
  
  return faqs;
}

// Extract city and state from content
function extractCityState(content) {
  const cityMatch = content.match(/const cityDisplayName = ['"]([^'"]+)['"]/);
  const stateMatch = content.match(/const stateDisplayName = ['"]([^'"]+)['"]/);
  
  if (!cityMatch || !stateMatch) {
    return null;
  }
  
  return {
    city: cityMatch[1],
    state: stateMatch[1]
  };
}

// Extract description from cityData or generate one
function extractDescription(content, city, state) {
  const descMatch = content.match(/description:\s*['"]([^'"]+)['"]/);
  if (descMatch) {
    return descMatch[1];
  }
  
  // Generate default description
  return `Get verified vending machine leads and locations in ${city}, ${state}. Find qualified businesses for vending machine placement.`;
}

// Get coordinates for city
function getCityCoordinates(citySlug, stateSlug) {
  const cityKey = citySlug.toLowerCase();
  const coords = CITY_COORDINATES[cityKey];
  
  if (coords) {
    return coords;
  }
  
  // Return null if not found (component will handle it)
  return null;
}

// Parse city slug to get city and state
function parseCitySlug(slug) {
  const parts = slug.split('-');
  const stateSlug = parts[parts.length - 1];
  const citySlug = parts.slice(0, -1).join('-');
  
  return { citySlug, stateSlug };
}

// Add SEO component to a city page
function addSEOToCityPage(filePath, citySlug) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if SEO component already exists
    if (content.includes('CityPageSEO')) {
      console.log(`   ⏭️  Already has SEO: ${citySlug}`);
      return { updated: false, reason: 'already_exists' };
    }
    
    // Extract city and state info
    const cityState = extractCityState(content);
    if (!cityState) {
      console.log(`   ⚠️  Could not extract city/state: ${citySlug}`);
      return { updated: false, reason: 'no_city_state' };
    }
    
    const { citySlug: cityKey, stateSlug } = parseCitySlug(citySlug);
    const stateAbbr = STATE_ABBREVIATIONS[stateSlug] || stateSlug.toUpperCase();
    
    // Extract FAQs
    const faqs = extractFAQs(content);
    
    // Get description
    const description = extractDescription(content, cityState.city, cityState.state);
    
    // Get coordinates
    const coords = getCityCoordinates(cityKey, stateSlug);
    
    // Check if import exists
    const hasImport = content.includes("import CityPageSEO");
    
    // Add import if not present
    if (!hasImport) {
      // Find the last import statement
      const importMatch = content.match(/(import[^;]+;[\s]*)+/);
      if (importMatch) {
        const lastImportIndex = content.lastIndexOf(importMatch[0]) + importMatch[0].length;
        const importStatement = "import CityPageSEO from '@/components/CityPageSEO'\n";
        content = content.slice(0, lastImportIndex) + importStatement + content.slice(lastImportIndex);
      }
    }
    
    // Generate FAQ props string
    let faqProps = '';
    if (faqs.length > 0) {
      // Escape quotes and newlines properly
      const escapedFAQs = faqs.map(faq => {
        const q = faq.question.replace(/"/g, '\\"').replace(/\n/g, ' ').trim();
        const a = faq.answer.replace(/"/g, '\\"').replace(/\n/g, ' ').trim();
        return `          {\n            question: "${q}",\n            answer: "${a}"\n          }`;
      });
      faqProps = `\n        faqs={[\n${escapedFAQs.join(',\n')}\n        ]}`;
    }
    
    // Generate coordinates props
    let coordProps = '';
    if (coords) {
      coordProps = `\n        latitude={${coords.lat}}\n        longitude={${coords.lng}}`;
    }
    
    // Find the closing tags before Footer
    const footerPattern = /(\s*)<Footer \/>/;
    const footerMatch = content.match(footerPattern);
    
    if (footerMatch) {
      const indent = footerMatch[1];
      const seoComponent = `${indent}{/* SEO Structured Data */}\n${indent}<CityPageSEO\n${indent}  city="${cityState.city}"\n${indent}  state="${cityState.state}"\n${indent}  stateAbbr="${stateAbbr}"\n${indent}  description="${description.replace(/"/g, '\\"')}"${faqProps}${coordProps}\n${indent}/>\n${indent}\n`;
      
      content = content.replace(footerPattern, seoComponent + footerMatch[0]);
      
      // Write updated content
      fs.writeFileSync(filePath, content, 'utf8');
      return { updated: true, faqsCount: faqs.length, hasCoords: !!coords };
    } else {
      console.log(`   ⚠️  Could not find Footer tag: ${citySlug}`);
      return { updated: false, reason: 'no_footer' };
    }
    
  } catch (error) {
    console.error(`   ❌ Error processing ${citySlug}:`, error.message);
    return { updated: false, reason: 'error', error: error.message };
  }
}

// Main function
function main() {
  console.log('🚀 Adding SEO component to all city pages...\n');
  
  if (!fs.existsSync(CITY_PAGES_DIR)) {
    console.error(`❌ Directory not found: ${CITY_PAGES_DIR}`);
    process.exit(1);
  }
  
  const cityDirs = fs.readdirSync(CITY_PAGES_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  console.log(`📁 Found ${cityDirs.length} city directories\n`);
  
  let updated = 0;
  let skipped = 0;
  let errors = 0;
  const stats = {
    withFAQs: 0,
    withCoords: 0,
    withoutFAQs: 0,
    withoutCoords: 0
  };
  
  // Process in batches to avoid memory issues
  const batchSize = 100;
  for (let i = 0; i < cityDirs.length; i += batchSize) {
    const batch = cityDirs.slice(i, i + batchSize);
    
    batch.forEach(citySlug => {
      const pageClientPath = path.join(CITY_PAGES_DIR, citySlug, 'pageClient.tsx');
      
      if (!fs.existsSync(pageClientPath)) {
        console.log(`   ⚠️  File not found: ${citySlug}/pageClient.tsx`);
        skipped++;
        return;
      }
      
      const result = addSEOToCityPage(pageClientPath, citySlug);
      
      if (result.updated) {
        updated++;
        if (result.faqsCount > 0) {
          stats.withFAQs++;
        } else {
          stats.withoutFAQs++;
        }
        if (result.hasCoords) {
          stats.withCoords++;
        } else {
          stats.withoutCoords++;
        }
        console.log(`   ✅ Updated: ${citySlug} (${result.faqsCount} FAQs${result.hasCoords ? ', coords' : ''})`);
      } else {
        if (result.reason === 'already_exists') {
          skipped++;
        } else {
          errors++;
        }
      }
    });
    
    // Progress update
    const processed = Math.min(i + batchSize, cityDirs.length);
    console.log(`\n📊 Progress: ${processed}/${cityDirs.length} cities processed\n`);
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 Summary:');
  console.log('='.repeat(60));
  console.log(`✅ Successfully updated: ${updated} cities`);
  console.log(`⏭️  Skipped (already have SEO): ${skipped} cities`);
  console.log(`❌ Errors: ${errors} cities`);
  console.log(`\n📈 Stats:`);
  console.log(`   Cities with FAQs: ${stats.withFAQs}`);
  console.log(`   Cities without FAQs: ${stats.withoutFAQs}`);
  console.log(`   Cities with coordinates: ${stats.withCoords}`);
  console.log(`   Cities without coordinates: ${stats.withoutCoords}`);
  console.log('\n🎉 SEO component addition completed!');
}

if (require.main === module) {
  main();
}

module.exports = { addSEOToCityPage, extractFAQs, extractCityState };
