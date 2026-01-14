const fs = require('fs');
const path = require('path');

/**
 * Generate Vending Company Pages from JSON Data
 * 
 * Takes verified company data and generates page.tsx and pageClient.tsx files
 */

const COMPANIES_DIR = path.join(__dirname, '..', 'src', 'app', 'vending-companies');

/**
 * Generate slug from company name and location
 */
function generateSlug(companyName, city, stateAbbr) {
  const nameSlug = companyName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50);
  
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const stateSlug = stateAbbr.toLowerCase();
  
  return `${nameSlug}-${citySlug}-${stateSlug}`;
}

/**
 * Generate page.tsx metadata
 */
function generatePageMetadata(company) {
  const cityState = `${company.city}, ${company.stateAbbr}`;
  const title = `${company.name} - Vending Services in ${cityState} | The Vending Locator`;
  const description = `${company.name} provides ${company.services.slice(0, 3).join(', ')} in ${cityState}. ${company.description}`;
  
  return `import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "${title}",
  description: "${description.replace(/"/g, '\\"')}",
  keywords: "${company.name}, vending services ${company.city}, vending companies ${company.city} ${company.stateAbbr}, ${company.services.join(', ')}",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-companies/${generateSlug(company.name, company.city, company.stateAbbr)}"
  },
  openGraph: {
    title: "${title}",
    description: "${description.replace(/"/g, '\\"')}",
    url: "https://www.thevendinglocator.com/vending-companies/${generateSlug(company.name, company.city, company.stateAbbr)}",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description: "${description.replace(/"/g, '\\"')}"
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
}

export default function Page() {
  return <PageClient />
}
`;
}

/**
 * Generate pageClient.tsx content
 */
function generatePageClient(company) {
  const cityState = `${company.city}, ${company.stateAbbr}`;
  const functionName = company.name.replace(/[^a-zA-Z0-9]/g, '') + 'Page';
  
  // Format phone number
  const phoneDisplay = company.phone || 'Contact for phone number';
  
  // Format services list
  const servicesList = company.services.map(s => `"${s}"`).join(', ');
  const machineTypesList = company.machineTypes.map(m => `"${m}"`).join(', ');
  const serviceAreaList = company.serviceArea.map(a => `"${a}"`).join(', ');
  
  // Rating display
  const ratingDisplay = company.rating ? `${company.rating}/5` : 'Not rated';
  const reviewDisplay = company.reviewCount ? `${company.reviewCount} reviews` : '';
  
  return `'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  MapPinIcon, 
  PhoneIcon,
  GlobeAltIcon,
  StarIcon,
  CheckBadgeIcon,
  BuildingStorefrontIcon,
  ClockIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function ${functionName}() {
  const company = {
    name: "${company.name.replace(/"/g, '\\"')}",
    city: "${company.city}",
    state: "${company.state}",
    stateAbbr: "${company.stateAbbr}",
    address: "${company.address.replace(/"/g, '\\"')}",
    phone: "${company.phone.replace(/"/g, '\\"')}",
    website: "${company.website.replace(/"/g, '\\"')}",
    description: "${company.description.replace(/"/g, '\\"')}",
    services: [${servicesList}],
    serviceArea: [${serviceAreaList}],
    machineTypes: [${machineTypesList}],
    rating: ${company.rating || 'null'},
    reviewCount: ${company.reviewCount || 'null'},
    source: "${company.source}"
  }

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-navy/5 via-cream to-coral/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-semibold text-navy border border-navy/20">
                <BuildingStorefrontIcon className="h-4 w-4" />
                Verified Vending Company
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal mb-6"
            >
              {company.name}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-stone max-w-3xl mx-auto leading-relaxed"
            >
              {company.description}
            </motion.p>

            {/* Rating & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6"
            >
              {company.rating && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid
                        key={i}
                        className={\`h-5 w-5 \${i < Math.floor(company.rating) ? 'text-yellow-400' : 'text-gray-300'}\`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-charcoal">
                    {company.rating}/5{company.reviewCount ? \` (\${company.reviewCount} reviews)\` : ''}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2 text-stone">
                <MapPinIcon className="h-5 w-5" />
                <span className="font-medium">{company.city}, {company.stateAbbr}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Company Details */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-cream rounded-xl p-8 mb-8"
              >
                <h2 className="text-2xl font-playfair font-bold text-charcoal mb-6">About {company.name}</h2>
                <p className="text-stone leading-relaxed mb-6">{company.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-3">Services Offered</h3>
                    <ul className="space-y-2">
                      {company.services.map((service, index) => (
                        <li key={index} className="flex items-center gap-2 text-stone">
                          <CheckBadgeIcon className="h-5 w-5 text-navy flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-3">Machine Types</h3>
                    <ul className="space-y-2">
                      {company.machineTypes.map((type, index) => (
                        <li key={index} className="flex items-center gap-2 text-stone">
                          <SparklesIcon className="h-5 w-5 text-coral flex-shrink-0" />
                          <span>{type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Service Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl border border-gray-200 p-8"
              >
                <h3 className="text-xl font-playfair font-bold text-charcoal mb-4">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {company.serviceArea.map((area, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-navy/5 text-navy rounded-lg text-sm font-medium border border-navy/10"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Card */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-navy to-navy-light rounded-xl p-8 text-white sticky top-8"
              >
                <h3 className="text-2xl font-playfair font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {company.address && (
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm opacity-90">Address</div>
                        <div className="font-medium">{company.address}</div>
                      </div>
                    </div>
                  )}
                  
                  {company.phone && (
                    <div className="flex items-start gap-3">
                      <PhoneIcon className="h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm opacity-90">Phone</div>
                        <a href={\`tel:\${company.phone}\`} className="font-medium hover:underline">
                          {company.phone}
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {company.website && (
                    <div className="flex items-start gap-3">
                      <GlobeAltIcon className="h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm opacity-90">Website</div>
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:underline break-all"
                        >
                          {company.website.replace(/^https?:\/\//, '')}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  {company.website ? (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-white text-navy px-6 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
                    >
                      Visit Website →
                    </a>
                  ) : company.phone ? (
                    <a
                      href={\`tel:\${company.phone}\`}
                      className="block w-full text-center bg-white text-navy px-6 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
                    >
                      Call Now →
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="block w-full text-center bg-white text-navy px-6 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
                    >
                      Request Contact Info →
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Companies */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">
              More Vending Companies in {company.city}
            </h2>
            <p className="text-lg text-stone">
              Explore other vending companies serving {company.city}, {company.stateAbbr}
            </p>
          </motion.div>
          
          <div className="text-center">
            <Link
              href="/vending-companies/${company.city.toLowerCase().replace(/\s+/g, '-')}-${company.stateAbbr.toLowerCase()}"
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors"
            >
              View All Companies in {company.city} →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">
              Need Vending Machine Locations Instead?
            </h2>
            <p className="text-lg text-stone mb-8">
              Looking for businesses that need vending machines? We provide verified location leads.
            </p>
            <Link
              href="/vending-leads/${company.city.toLowerCase().replace(/\s+/g, '-')}-${company.stateAbbr.toLowerCase()}"
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors"
            >
              Find Vending Locations in {company.city} →
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
`;
}

/**
 * Generate pages for all companies in JSON file
 */
function generatePagesFromJSON(jsonPath) {
  if (!fs.existsSync(jsonPath)) {
    console.error(`❌ File not found: ${jsonPath}`);
    process.exit(1);
  }
  
  const companies = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  
  console.log(`🚀 Generating pages for ${companies.length} companies...\n`);
  
  let generated = 0;
  let skipped = 0;
  let errors = 0;
  
  companies.forEach((company, index) => {
    try {
      // Only generate for verified companies (or all if you want)
      // if (!company.verified) {
      //   skipped++;
      //   return;
      // }
      
      const slug = generateSlug(company.name, company.city, company.stateAbbr);
      const companyDir = path.join(COMPANIES_DIR, slug);
      
      // Create directory
      if (!fs.existsSync(companyDir)) {
        fs.mkdirSync(companyDir, { recursive: true });
      }
      
      // Generate page.tsx
      const pageContent = generatePageMetadata(company);
      const pagePath = path.join(companyDir, 'page.tsx');
      fs.writeFileSync(pagePath, pageContent, 'utf8');
      
      // Generate pageClient.tsx
      const clientContent = generatePageClient(company);
      const clientPath = path.join(companyDir, 'pageClient.tsx');
      fs.writeFileSync(clientPath, clientContent, 'utf8');
      
      generated++;
      console.log(`   ✅ [${index + 1}/${companies.length}] Generated: ${slug}`);
      
    } catch (error) {
      errors++;
      console.error(`   ❌ Error generating page for ${company.name}: ${error.message}`);
    }
  });
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 Generation Summary:');
  console.log('='.repeat(60));
  console.log(`✅ Successfully generated: ${generated} pages`);
  console.log(`⏭️  Skipped: ${skipped} companies`);
  console.log(`❌ Errors: ${errors} companies`);
  console.log('\n🎉 Page generation complete!');
}

// CLI
if (require.main === module) {
  const args = process.argv.slice(2);
  const jsonPath = args[0] || path.join(__dirname, '..', 'data', 'vending_companies_collected.json');
  
  console.log('📋 Vending Company Page Generator\n');
  console.log(`📁 Input file: ${jsonPath}\n`);
  
  generatePagesFromJSON(jsonPath);
}

module.exports = { generatePagesFromJSON, generatePageMetadata, generatePageClient, generateSlug };
