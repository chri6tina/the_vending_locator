const fs = require('fs');
const path = require('path');

// Read the states data
const statesData = {
  states: [
    { name: 'Alabama', slug: 'alabama', cities: [
      { name: 'Auburn', slug: 'auburn-alabama' },
      { name: 'Birmingham', slug: 'birmingham-alabama' },
      { name: 'Dothan', slug: 'dothan-alabama' },
      { name: 'Huntsville', slug: 'huntsville-alabama' },
      { name: 'Mobile', slug: 'mobile-alabama' },
      { name: 'Montgomery', slug: 'montgomery-alabama' },
      { name: 'Tuscaloosa', slug: 'tuscaloosa-alabama' }
    ]},
    { name: 'Georgia', slug: 'georgia', cities: [
      { name: 'Atlanta', slug: 'atlanta-georgia' },
      { name: 'Augusta', slug: 'augusta-georgia' },
      { name: 'Columbus', slug: 'columbus-georgia' },
      { name: 'Macon', slug: 'macon-georgia' },
      { name: 'Marietta', slug: 'marietta-georgia' },
      { name: 'Roswell', slug: 'roswell-georgia' },
      { name: 'Sandy Springs', slug: 'sandy-springs-georgia' },
      { name: 'Savannah', slug: 'savannah-georgia' },
      { name: 'Warner Robins', slug: 'warner-robins-georgia' }
    ]},
    { name: 'Texas', slug: 'texas', cities: [
      { name: 'Austin', slug: 'austin-texas' },
      { name: 'Dallas', slug: 'dallas-texas' },
      { name: 'Houston', slug: 'houston-texas' },
      { name: 'San Antonio', slug: 'san-antonio-texas' },
      { name: 'Fort Worth', slug: 'fort-worth-texas' },
      { name: 'El Paso', slug: 'el-paso-texas' },
      { name: 'Arlington', slug: 'arlington-texas' },
      { name: 'Corpus Christi', slug: 'corpus-christi-texas' },
      { name: 'Plano', slug: 'plano-texas' }
    ]},
    { name: 'California', slug: 'california', cities: [
      { name: 'Los Angeles', slug: 'los-angeles-california' },
      { name: 'San Diego', slug: 'san-diego-california' },
      { name: 'San Jose', slug: 'san-jose-california' },
      { name: 'San Francisco', slug: 'san-francisco-california' },
      { name: 'Fresno', slug: 'fresno-california' },
      { name: 'Sacramento', slug: 'sacramento-california' },
      { name: 'Long Beach', slug: 'long-beach-california' },
      { name: 'Oakland', slug: 'oakland-california' }
    ]},
    { name: 'Florida', slug: 'florida', cities: [
      { name: 'Miami', slug: 'miami-florida' },
      { name: 'Tampa', slug: 'tampa-florida' },
      { name: 'Orlando', slug: 'orlando-florida' },
      { name: 'Jacksonville', slug: 'jacksonville-florida' },
      { name: 'St. Petersburg', slug: 'st-petersburg-florida' },
      { name: 'Hialeah', slug: 'hialeah-florida' },
      { name: 'Tallahassee', slug: 'tallahassee-florida' },
      { name: 'Fort Lauderdale', slug: 'fort-lauderdale-florida' }
    ]}
  ]
};

// Function to add related cities section to a city page
function addRelatedCitiesSection(filePath, citySlug, stateSlug) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the state data
    const state = statesData.states.find(s => s.slug === stateSlug);
    if (!state) {
      console.log(`State not found: ${stateSlug}`);
      return false;
    }
    
    // Get other cities in the same state (excluding current city)
    const otherCities = state.cities.filter(city => city.slug !== citySlug).slice(0, 8);
    
    if (otherCities.length === 0) {
      console.log(`No other cities found for state: ${stateSlug}`);
      return false;
    }
    
    // Check if related cities section already exists
    if (content.includes('Explore Other') && content.includes('Cities')) {
      console.log(`Related cities section already exists in ${filePath}`);
      return false;
    }
    
    // Find the position to insert the related cities section (before FAQ section)
    const faqSectionIndex = content.indexOf('{/* FAQ Section */}');
    if (faqSectionIndex === -1) {
      console.log(`FAQ section not found in ${filePath}`);
      return false;
    }
    
    // Create the related cities section
    const relatedCitiesSection = `
          {/* Related Cities Section */}
          <section className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-8 text-gray-800"
            >
              Explore Other ${state.name} Cities
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              ${otherCities.map(city => `
              <Link 
                href="/vending-leads/${city.slug}" 
                className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="font-semibold text-gray-800">${city.name}</div>
                <div className="text-sm text-gray-600">${state.name}</div>
              </Link>`).join('')}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-8"
            >
              <Link 
                href="/vending-leads/${stateSlug}" 
                className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors font-semibold"
              >
                View All ${state.name} Cities
              </Link>
            </motion.div>
          </section>

`;
    
    // Insert the section before FAQ
    const newContent = content.slice(0, faqSectionIndex) + relatedCitiesSection + content.slice(faqSectionIndex);
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Added related cities section to ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to check if Link import exists
function addLinkImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes("import Link from 'next/link'")) {
      return false; // Already has Link import
    }
    
    // Find the import section and add Link import
    const importMatch = content.match(/import.*from 'react'[\s\S]*?import.*from '@\/components\/Header'/);
    if (importMatch) {
      const newImport = content.replace(
        /import.*from 'react'[\s\S]*?import.*from '@\/components\/Header'/,
        (match) => {
          if (match.includes("import Link from 'next/link'")) {
            return match;
          }
          return match.replace(
            /import.*from 'react'/,
            "import { useState, useEffect } from 'react'\nimport Link from 'next/link'"
          );
        }
      );
      
      fs.writeFileSync(filePath, newImport, 'utf8');
      console.log(`Added Link import to ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error adding Link import to ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process all city pages
function processCityPages() {
  const vendingLeadsDir = path.join(__dirname, '../src/app/vending-leads');
  let processedCount = 0;
  let errorCount = 0;
  
  // Process each state
  statesData.states.forEach(state => {
    console.log(`\nProcessing state: ${state.name}`);
    
    state.cities.forEach(city => {
      const cityDir = path.join(vendingLeadsDir, city.slug);
      const pageClientPath = path.join(cityDir, 'pageClient.tsx');
      
      if (fs.existsSync(pageClientPath)) {
        console.log(`Processing city: ${city.name}`);
        
        // Add Link import if needed
        addLinkImport(pageClientPath);
        
        // Add related cities section
        if (addRelatedCitiesSection(pageClientPath, city.slug, state.slug)) {
          processedCount++;
        }
      } else {
        console.log(`City page not found: ${city.slug}`);
        errorCount++;
      }
    });
  });
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`Processed: ${processedCount} city pages`);
  console.log(`Errors: ${errorCount} city pages`);
}

// Run the script
processCityPages();
