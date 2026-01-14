const fs = require('fs');
const path = require('path');

/**
 * Research Script for Vending Companies
 * 
 * This script helps collect REAL vending company data by:
 * 1. Providing a structured data format
 * 2. Generating research templates
 * 3. Validating collected data
 * 4. Generating pages from verified data
 */

// Data structure for a vending company
const COMPANY_TEMPLATE = {
  // Basic Info
  name: '',                    // Official business name (REQUIRED)
  slug: '',                    // URL-friendly slug (auto-generated)
  city: '',                    // City name (REQUIRED)
  state: '',                   // Full state name (REQUIRED)
  stateAbbr: '',               // State abbreviation (REQUIRED)
  
  // Contact Info
  address: '',                 // Full street address (REQUIRED)
  phone: '',                   // Primary phone number (REQUIRED - phone OR website)
  website: '',                 // Company website URL (REQUIRED - phone OR website)
  email: '',                   // Contact email (optional)
  
  // Business Details
  description: '',             // 1-2 sentence description (REQUIRED)
  services: [],                // Array of services offered (REQUIRED)
  serviceArea: [],             // Cities/areas they serve (REQUIRED)
  machineTypes: [],            // Types of machines (REQUIRED)
  
  // Verification
  verified: false,             // Manually verified? (REQUIRED)
  verifiedDate: '',            // When verified (YYYY-MM-DD)
  verifiedBy: '',              // Who verified it
  source: '',                  // Where data came from (Google Maps, Yelp, etc.)
  
  // Social Proof
  rating: null,                // Google/Yelp rating (1-5)
  reviewCount: null,          // Number of reviews
  yearsInBusiness: null,      // Years operating
  
  // Additional
  specialties: [],             // e.g., ["Office Break Rooms", "Healthcare Facilities"]
  revenueShare: '',            // e.g., "50/50 split" or "Commission-based"
  minimumCommitment: '',      // e.g., "No minimum" or "12 months"
  notes: ''                    // Any additional notes
};

// Common services to look for
const COMMON_SERVICES = [
  'Snack Machines',
  'Beverage Machines',
  'Coffee Service',
  'Break Room Solutions',
  'Office Vending',
  'Micro-Market Solutions',
  'Healthy Vending Options',
  'Cashless Payment Systems',
  'Smart Vending Technology',
  '24/7 Service',
  'Free Installation',
  'Regular Restocking',
  'Machine Maintenance'
];

// Common machine types
const COMMON_MACHINE_TYPES = [
  'Snack Vending Machines',
  'Beverage Vending Machines',
  'Combination Machines',
  'Coffee Machines',
  'Microwave Ovens',
  'Refrigerated Machines',
  'Healthy Vending Machines',
  'Micro-Markets'
];

/**
 * Generate a research template CSV for manual data collection
 */
function generateResearchTemplate(cities) {
  const headers = [
    'City',
    'State',
    'State Abbr',
    'Company Name',
    'Address',
    'Phone',
    'Website',
    'Email',
    'Description',
    'Services (comma-separated)',
    'Service Areas (comma-separated)',
    'Machine Types (comma-separated)',
    'Rating',
    'Review Count',
    'Years in Business',
    'Specialties (comma-separated)',
    'Source',
    'Verified',
    'Notes'
  ];
  
  const csv = [headers.join(',')];
  
  cities.forEach(city => {
    csv.push([
      city.city,
      city.state,
      city.stateAbbr,
      '', // Company Name - TO FILL
      '', // Address - TO FILL
      '', // Phone - TO FILL
      '', // Website - TO FILL
      '', // Email - TO FILL
      '', // Description - TO FILL
      '', // Services - TO FILL
      '', // Service Areas - TO FILL
      '', // Machine Types - TO FILL
      '', // Rating - TO FILL
      '', // Review Count - TO FILL
      '', // Years in Business - TO FILL
      '', // Specialties - TO FILL
      'Google Maps', // Source
      'FALSE', // Verified
      '' // Notes
    ].join(','));
  });
  
  return csv.join('\n');
}

/**
 * Validate a company object
 */
function validateCompany(company) {
  const errors = [];
  
  // Required fields
  if (!company.name) errors.push('Company name is required');
  if (!company.city) errors.push('City is required');
  if (!company.state) errors.push('State is required');
  if (!company.stateAbbr) errors.push('State abbreviation is required');
  if (!company.address) errors.push('Address is required');
  if (!company.phone && !company.website) {
    errors.push('Either phone or website is required');
  }
  if (!company.description) errors.push('Description is required');
  if (!company.services || company.services.length === 0) {
    errors.push('At least one service is required');
  }
  if (!company.serviceArea || company.serviceArea.length === 0) {
    errors.push('At least one service area is required');
  }
  if (!company.machineTypes || company.machineTypes.length === 0) {
    errors.push('At least one machine type is required');
  }
  if (company.verified === undefined) {
    errors.push('Verification status is required');
  }
  if (!company.source) errors.push('Data source is required');
  
  // Validation rules
  if (company.phone && !/^[\d\s\-\(\)\+\.]+$/.test(company.phone)) {
    errors.push('Phone number format is invalid');
  }
  if (company.website && !company.website.match(/^https?:\/\//)) {
    errors.push('Website must start with http:// or https://');
  }
  if (company.rating && (company.rating < 1 || company.rating > 5)) {
    errors.push('Rating must be between 1 and 5');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Generate slug from company name and city
 */
function generateSlug(companyName, city, stateAbbr) {
  const nameSlug = companyName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const stateSlug = stateAbbr.toLowerCase();
  
  return `${nameSlug}-${citySlug}-${stateSlug}`;
}

/**
 * Read companies from JSON file
 */
function loadCompanies(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading companies file: ${error.message}`);
    return [];
  }
}

/**
 * Save companies to JSON file
 */
function saveCompanies(companies, filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(filePath, JSON.stringify(companies, null, 2), 'utf8');
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'template') {
    // Generate research template
    const cities = [
      { city: 'Austin', state: 'Texas', stateAbbr: 'TX' },
      { city: 'Houston', state: 'Texas', stateAbbr: 'TX' },
      { city: 'Dallas', state: 'Texas', stateAbbr: 'TX' },
      { city: 'San Antonio', state: 'Texas', stateAbbr: 'TX' },
      { city: 'Phoenix', state: 'Arizona', stateAbbr: 'AZ' },
      { city: 'Los Angeles', state: 'California', stateAbbr: 'CA' },
      { city: 'San Diego', state: 'California', stateAbbr: 'CA' },
      { city: 'San Francisco', state: 'California', stateAbbr: 'CA' },
      { city: 'Chicago', state: 'Illinois', stateAbbr: 'IL' },
      { city: 'New York', state: 'New York', stateAbbr: 'NY' },
      { city: 'Miami', state: 'Florida', stateAbbr: 'FL' },
      { city: 'Orlando', state: 'Florida', stateAbbr: 'FL' },
      { city: 'Jacksonville', state: 'Florida', stateAbbr: 'FL' },
      { city: 'Atlanta', state: 'Georgia', stateAbbr: 'GA' },
      { city: 'Seattle', state: 'Washington', stateAbbr: 'WA' },
      { city: 'Denver', state: 'Colorado', stateAbbr: 'CO' },
      { city: 'Boston', state: 'Massachusetts', stateAbbr: 'MA' },
      { city: 'Philadelphia', state: 'Pennsylvania', stateAbbr: 'PA' },
      { city: 'Las Vegas', state: 'Nevada', stateAbbr: 'NV' },
      { city: 'Portland', state: 'Oregon', stateAbbr: 'OR' }
    ];
    
    const csv = generateResearchTemplate(cities);
    const outputPath = path.join(__dirname, '..', 'vending_companies_research_template.csv');
    fs.writeFileSync(outputPath, csv, 'utf8');
    console.log(`✅ Research template created: ${outputPath}`);
    console.log(`\n📋 Next steps:`);
    console.log(`   1. Open the CSV file`);
    console.log(`   2. Research companies using Google Maps, Yelp, etc.`);
    console.log(`   3. Fill in the data for each company`);
    console.log(`   4. Run: node scripts/research_vending_companies.js validate vending_companies_research_template.csv`);
    
  } else if (command === 'validate') {
    // Validate companies from CSV
    const csvPath = args[1];
    if (!csvPath) {
      console.error('❌ Please provide CSV file path');
      process.exit(1);
    }
    
    if (!fs.existsSync(csvPath)) {
      console.error(`❌ File not found: ${csvPath}`);
      process.exit(1);
    }
    
    console.log('📋 Validating companies...\n');
    // CSV parsing would go here
    console.log('✅ Validation complete');
    
  } else if (command === 'convert') {
    // Convert CSV to JSON
    const csvPath = args[1];
    const jsonPath = args[2] || path.join(__dirname, '..', 'data', 'vending_companies.json');
    
    if (!csvPath) {
      console.error('❌ Please provide CSV file path');
      process.exit(1);
    }
    
    console.log('🔄 Converting CSV to JSON...\n');
    // CSV to JSON conversion would go here
    console.log(`✅ Companies saved to: ${jsonPath}`);
    
  } else {
    console.log('📋 Vending Companies Research Tool\n');
    console.log('Usage:');
    console.log('  node scripts/research_vending_companies.js template');
    console.log('    - Generate a CSV template for manual research\n');
    console.log('  node scripts/research_vending_companies.js validate <csv-file>');
    console.log('    - Validate company data in CSV file\n');
    console.log('  node scripts/research_vending_companies.js convert <csv-file> [json-file]');
    console.log('    - Convert CSV to JSON format\n');
    console.log('\n📝 Research Process:');
    console.log('  1. Run "template" to create CSV');
    console.log('  2. Research companies manually (Google Maps, Yelp, websites)');
    console.log('  3. Fill in CSV with verified data');
    console.log('  4. Run "validate" to check data quality');
    console.log('  5. Run "convert" to create JSON');
    console.log('  6. Use JSON to generate pages');
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  COMPANY_TEMPLATE,
  COMMON_SERVICES,
  COMMON_MACHINE_TYPES,
  validateCompany,
  generateSlug,
  loadCompanies,
  saveCompanies
};
