const fs = require('fs');
const path = require('path');

// Configuration
const VENDING_LEADS_DIR = 'src/app/vending-leads';
const OUTPUT_DIR = 'src/app/vending-leads';

// City data mapping for metadata
const cityMetadataMap = {
  'glendale-arizona': {
    name: 'Glendale',
    state: 'Arizona',
    population: '248,000+',
    description: 'Glendale, Arizona\'s seventh-largest city, offers diverse opportunities in sports, entertainment, healthcare, and retail sectors.',
    keywords: 'vending machines, Glendale Arizona, business opportunities, vending locations, Arizona vending, sports venues, healthcare',
    businessFocus: 'Sports & Entertainment, Healthcare, Retail, Education'
  },
  'chandler-arizona': {
    name: 'Chandler',
    state: 'Arizona',
    population: '275,000+',
    description: 'Chandler, Arizona\'s fourth-largest city, offers diverse opportunities in technology, healthcare, education, and manufacturing sectors.',
    keywords: 'vending machines, Chandler Arizona, technology hub, Intel, healthcare, manufacturing, business opportunities',
    businessFocus: 'Technology & Innovation, Healthcare, Education, Manufacturing'
  },
  'scottsdale-arizona': {
    name: 'Scottsdale',
    state: 'Arizona',
    population: '241,000+',
    description: 'Scottsdale, Arizona\'s fifth-largest city, offers diverse opportunities in tourism, healthcare, technology, and luxury retail sectors.',
    keywords: 'vending machines, Scottsdale Arizona, luxury tourism, resorts, healthcare, technology, business opportunities',
    businessFocus: 'Tourism & Hospitality, Healthcare, Technology, Luxury Retail'
  },
  'gilbert-arizona': {
    name: 'Gilbert',
    state: 'Arizona',
    population: '267,000+',
    description: 'Gilbert, Arizona\'s sixth-largest city, offers diverse opportunities in healthcare, education, technology, and family-oriented retail sectors.',
    keywords: 'vending machines, Gilbert Arizona, healthcare, education, technology, family retail, business opportunities',
    businessFocus: 'Healthcare & Medical, Education, Technology, Family Retail'
  },
  'mesa-arizona': {
    name: 'Mesa',
    state: 'Arizona',
    population: '504,000+',
    description: 'Mesa, Arizona\'s third-largest city, offers diverse opportunities in aerospace, healthcare, education, and tourism sectors.',
    keywords: 'vending machines, Mesa Arizona, aerospace, healthcare, education, tourism, business opportunities',
    businessFocus: 'Aerospace & Defense, Healthcare, Education, Tourism'
  }
};

// Template for the main page.tsx file
function generatePageTemplate(citySlug, cityData) {
  return `import { Metadata } from 'next';
import ${cityData.name.replace(/\s+/g, '')}${cityData.state.replace(/\s+/g, '')}Client from './${cityData.name.replace(/\s+/g, '')}${cityData.state.replace(/\s+/g, '')}Client';

export const metadata: Metadata = {
  title: 'Vending Machine Opportunities in ${cityData.name}, ${cityData.state} | The Vending Locator',
  description: '${cityData.description} Expert team handling outreach and guaranteed placement.',
  keywords: '${cityData.keywords}',
  openGraph: {
    title: 'Vending Machine Opportunities in ${cityData.name}, ${cityData.state}',
    description: '${cityData.description}',
    url: 'https://www.thevendinglocator.com/vending-leads/${citySlug}',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Opportunities in ${cityData.name}, ${cityData.state}',
    description: '${cityData.description}',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/${citySlug}',
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
  },
};

export default function ${cityData.name.replace(/\s+/g, '')}${cityData.state.replace(/\s+/g, '')}Page() {
  return <${cityData.name.replace(/\s+/g, '')}${cityData.state.replace(/\s+/g, '')}Client />;
}
`;
}

// Template for the client component file
function generateClientTemplate(citySlug, cityData) {
  return `'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';
import HotLeads from '@/components/HotLeads';
import VendingCourse from '@/components/VendingCourse';
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper';

export default function ${cityData.name.replace(/\s+/g, '')}${cityData.state.replace(/\s+/g, '')}Client() {
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    // Simulate active users
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cityData = {
    name: '${cityData.name}',
    state: '${cityData.state}',
    population: '${cityData.population}',
    description: '${cityData.description}',
    heroTitle: 'Vending Machine Opportunities in ${cityData.name}, ${cityData.state}',
    heroSubtitle: 'Connect with local businesses and secure prime vending locations in ${cityData.name}\'s thriving economy',
    businessLandscape: [
      {
        title: '${cityData.businessFocus.split(', ')[0]}',
        description: 'Major businesses and opportunities in this sector',
        icon: '🏢'
      },
      {
        title: '${cityData.businessFocus.split(', ')[1] || 'Healthcare & Medical'}',
        description: 'Medical centers, hospitals, and healthcare facilities',
        icon: '🏥'
      },
      {
        title: '${cityData.businessFocus.split(', ')[2] || 'Education & Research'}',
        description: 'Educational institutions and research facilities',
        icon: '🎓'
      },
      {
        title: '${cityData.businessFocus.split(', ')[3] || 'Retail & Shopping'}',
        description: 'Shopping centers and retail districts',
        icon: '🛍️'
      },
      {
        title: 'Professional Services',
        description: 'Business services, finance, and consulting sectors',
        icon: '💼'
      },
      {
        title: 'Manufacturing',
        description: 'Advanced manufacturing and industrial facilities',
        icon: '🏭'
      }
    ],
    faq: [
      {
        question: 'What types of businesses in ${cityData.name} are good for vending machines?',
        answer: '${cityData.businessFocus.split(', ').slice(0, 3).join(', ')} facilities, educational institutions, office buildings, retail centers, and entertainment venues in ${cityData.name} are excellent locations for vending machines due to high foot traffic and captive audiences.'
      },
      {
        question: 'How do I approach businesses in ${cityData.name} for vending machine placement?',
        answer: 'Start with ${cityData.businessFocus.split(', ').slice(0, 3).join(', ')} facilities, educational institutions, and retail centers. Present the benefits of increased revenue, customer convenience, and our guaranteed placement service.'
      },
      {
        question: 'What are the best areas in ${cityData.name} for vending machine placement?',
        answer: 'Focus on areas around ${cityData.businessFocus.split(', ').slice(0, 2).join(', ')} districts, educational campuses, shopping centers, and business districts where there\'s consistent foot traffic and employee populations.'
      },
      {
        question: 'How long does it take to get vending machines placed in ${cityData.name}?',
        answer: 'With our expert team handling outreach and negotiations, most placements in ${cityData.name} are completed within 1-6 months, depending on the specific location and business type.'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {cityData.heroTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto"
          >
            {cityData.heroSubtitle}
          </motion.p>
          
          {/* Trust Signals */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">{cityData.population}</div>
              <div className="text-sm opacity-90">Population</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">500+</div>
              <div className="text-sm opacity-90">Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">95%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </motion.div>

          {/* Active Users Counter */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block"
          >
            <div className="text-sm opacity-90 mb-1">Active users exploring opportunities</div>
            <div className="text-2xl font-bold text-yellow-300">{activeUsers.toLocaleString()}</div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vending Machine Pricing & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your vending machine business in {cityData.name}, {cityData.state}
            </p>
          </motion.div>
          <PricingTable />
        </div>
      </section>

      {/* Business Landscape */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {cityData.name} Business Landscape
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the diverse business opportunities in {cityData.name}, {cityData.state}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cityData.businessLandscape.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Leads Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <HotLeads />
        </div>
      </section>

      {/* Vending Course Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <VendingCourse />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers about vending machine opportunities in {cityData.name}, {cityData.state}
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {cityData.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ZipCodeModalWrapper />
    </div>
  );
}
`;
}

// Main function to process all city pages
function processCityPages() {
  console.log('🚀 Starting SEO fix for all city pages...\n');

  let processedCount = 0;
  let errorCount = 0;

  for (const [citySlug, cityData] of Object.entries(cityMetadataMap)) {
    try {
      const cityDir = path.join(OUTPUT_DIR, citySlug);
      
      // Check if directory exists
      if (!fs.existsSync(cityDir)) {
        console.log(`⚠️  Directory not found: ${citySlug}`);
        continue;
      }

      console.log(`📝 Processing: ${citySlug}`);

      // Generate the new page.tsx file
      const pageContent = generatePageTemplate(citySlug, cityData);
      const pagePath = path.join(cityDir, 'page.tsx');
      
      // Backup original file
      const backupPath = path.join(cityDir, 'page.tsx.backup');
      if (fs.existsSync(pagePath)) {
        fs.copyFileSync(pagePath, backupPath);
        console.log(`   💾 Backup created: page.tsx.backup`);
      }

      // Write new page.tsx
      fs.writeFileSync(pagePath, pageContent);
      console.log(`   ✅ Updated: page.tsx`);

      // Generate the client component file
      const clientContent = generateClientTemplate(citySlug, cityData);
      const clientPath = path.join(cityDir, `${cityData.name.replace(/\s+/g, '')}${cityData.state.replace(/\s+/g, '')}Client.tsx`);
      
      fs.writeFileSync(clientPath, clientContent);
      console.log(`   ✅ Created: ${cityData.name.replace(/\s+/g, '')}${cityData.state.replace(/\s+/g, '')}Client.tsx`);

      processedCount++;
      console.log(`   🎯 Completed: ${citySlug}\n`);

    } catch (error) {
      console.error(`❌ Error processing ${citySlug}:`, error.message);
      errorCount++;
    }
  }

  console.log('📊 Summary:');
  console.log(`   ✅ Successfully processed: ${processedCount} cities`);
  console.log(`   ❌ Errors: ${errorCount} cities`);
  console.log('\n🎉 SEO fix completed! All city pages now have:');
  console.log('   • Proper metadata API implementation');
  console.log('   • Canonical URLs to prevent duplicates');
  console.log('   • Separated server/client components');
  console.log('   • Enhanced SEO with Open Graph and Twitter cards');
  console.log('\n💡 Next steps:');
  console.log('   1. Test a few pages to ensure they work correctly');
  console.log('   2. Commit and push the changes');
  console.log('   3. Monitor search console for duplicate content issues');
}

// Run the script
if (require.main === module) {
  processCityPages();
}

module.exports = { processCityPages, generatePageTemplate, generateClientTemplate };
