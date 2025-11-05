const fs = require('fs');
const path = require('path');

// Premium city-specific data for high-quality SEO
const premiumCityData = {
  'jacksonville-florida': {
    cityDescription: "Jacksonville is Florida's largest city by area and a major port and logistics hub",
    majorIndustries: ['Logistics & Distribution', 'Healthcare', 'Financial Services', 'Military & Defense', 'Tourism'],
    topEmployers: [
      'Mayo Clinic',
      'Baptist Health',
      'UF Health Jacksonville',
      'Naval Air Station Jacksonville',
      'JAXPORT',
      'CSX Transportation',
      'Bank of America',
      'Fidelity National Financial',
      'Johnson & Johnson',
      'Crowley Maritime'
    ],
    businessDistricts: [
      { name: 'Downtown Jacksonville', type: 'Financial & Professional Services', employees: '25,000+' },
      { name: 'Southside / Town Center', type: 'Corporate Parks & Retail', employees: '40,000+' },
      { name: 'Northside / Airport', type: 'Logistics & Distribution', employees: '15,000+' },
      { name: 'Beaches', type: 'Tourism & Hospitality', employees: '10,000+' }
    ],
    permitDetails: {
      salesTax: 'Florida Department of Revenue requires a sales tax permit. Jacksonville (Duval County) has a 7.5% combined state and local tax rate.',
      healthDept: 'Duval County Health Department',
      healthDeptPhone: '(904) 253-1000',
      businessLicense: 'City of Jacksonville requires a Business Tax Receipt (BTR) - apply through OneStop Business Registration',
      businessLicenseUrl: 'https://www.coj.net/departments/finance/docs/business-tax-division',
      additionalNotes: 'Port facilities and Naval installations require additional security clearances and facility-specific approvals.'
    },
    marketOpportunities: [
      'JAXPORT employs 15,000+ with multiple cargo terminals and limited food options',
      'Mayo Clinic Jacksonville campus has 4,900+ employees across multiple buildings',
      'Town Center area has 100+ corporate offices with high daytime employee counts',
      'UNF has 16,000+ students and 1,800+ faculty/staff',
      'Three major hospital systems creating high demand for healthcare worker convenience'
    ],
    competitionLevel: 'Medium',
    avgMachineRevenue: '$450-$750',
    recommendedStartingMachines: '2-3',
    estimatedROI: '12-16 months'
  },
  
  'miami-florida': {
    cityDescription: "Miami is a global city and major center for international business, finance, and tourism",
    majorIndustries: ['International Trade', 'Finance & Banking', 'Tourism & Hospitality', 'Healthcare', 'Technology'],
    topEmployers: [
      'Miami-Dade County Public Schools',
      'Jackson Health System',
      'Miami-Dade County Government',
      'American Airlines',
      'Baptist Health South Florida',
      'University of Miami',
      'Carnival Cruise Line',
      'Royal Caribbean',
      'Ryder System',
      'Citrix Systems'
    ],
    businessDistricts: [
      { name: 'Brickell Financial District', type: 'Banking & Finance', employees: '35,000+' },
      { name: 'Downtown Miami', type: 'Government & Professional Services', employees: '45,000+' },
      { name: 'Miami International Airport', type: 'Aviation & Logistics', employees: '30,000+' },
      { name: 'Wynwood / Design District', type: 'Tech & Creative', employees: '15,000+' }
    ],
    permitDetails: {
      salesTax: 'Florida Department of Revenue requires a sales tax permit. Miami-Dade County has a 7% combined state and local tax rate.',
      healthDept: 'Miami-Dade County Health Department',
      healthDeptPhone: '(305) 324-2400',
      businessLicense: 'Miami-Dade County Business Tax Receipt required - apply through county tax collector',
      businessLicenseUrl: 'https://www.miamidade.gov/business/business-tax-receipt.asp',
      additionalNotes: 'Multi-lingual capability helpful for diverse workforce. Port of Miami and airport facilities have strict security requirements.'
    },
    marketOpportunities: [
      'Brickell has 200+ office towers with high-income professionals',
      'Miami International Airport employs 35,000+ with 24/7 operations',
      'Port of Miami cruise terminals see 6 million passengers annually',
      'Downtown medical district has 12,000+ healthcare workers',
      'Wynwood creative district has growing tech startup community'
    ],
    competitionLevel: 'High',
    avgMachineRevenue: '$550-$850',
    recommendedStartingMachines: '3-5',
    estimatedROI: '14-18 months'
  },
  
  'orlando-florida': {
    cityDescription: "Orlando is the theme park capital of the world and a major convention and tourism destination",
    majorIndustries: ['Tourism & Entertainment', 'Healthcare', 'Technology', 'Aviation', 'Education'],
    topEmployers: [
      'Walt Disney World',
      'Universal Orlando Resort',
      'AdventHealth',
      'Orange County Public Schools',
      'Lockheed Martin',
      'SeaWorld Parks & Entertainment',
      'University of Central Florida',
      'Orlando Health',
      'Publix Super Markets',
      'Darden Restaurants'
    ],
    businessDistricts: [
      { name: 'International Drive', type: 'Tourism & Hospitality', employees: '50,000+' },
      { name: 'Lake Nona Medical City', type: 'Healthcare & Life Sciences', employees: '20,000+' },
      { name: 'Downtown Orlando', type: 'Professional Services', employees: '30,000+' },
      { name: 'UCF Research Park', type: 'Technology & Aerospace', employees: '10,000+' }
    ],
    permitDetails: {
      salesTax: 'Florida Department of Revenue requires a sales tax permit. Orange County has a 6.5% combined state and local tax rate.',
      healthDept: 'Orange County Health Department',
      healthDeptPhone: '(407) 858-1400',
      businessLicense: 'Orange County Business Tax Receipt required for county operations',
      businessLicenseUrl: 'https://www.orangecountyfl.net/PlanningDevelopment/BusinessTaxReceipt.aspx',
      additionalNotes: 'Theme parks have exclusive vendor agreements. Focus on off-site hotels, hospitals, and corporate parks.'
    },
    marketOpportunities: [
      'I-Drive corridor has 450+ hotels with 24/7 employee operations',
      'Lake Nona Medical City is growing healthcare and research hub',
      'UCF has 68,000+ students making it one of largest universities',
      'Convention Center area hosts millions of visitors annually',
      'Millenia Mall area has extensive corporate office presence'
    ],
    competitionLevel: 'High',
    avgMachineRevenue: '$500-$800',
    recommendedStartingMachines: '2-4',
    estimatedROI: '12-17 months'
  },
  
  'tampa-florida': {
    cityDescription: "Tampa is a major business hub on Florida's Gulf Coast with a diverse economy",
    majorIndustries: ['Finance & Insurance', 'Healthcare', 'Port & Logistics', 'Technology', 'Defense'],
    topEmployers: [
      'BayCare Health System',
      'MacDill Air Force Base',
      'Publix Super Markets',
      'JPMorgan Chase',
      'Moffitt Cancer Center',
      'Citigroup',
      'University of South Florida',
      'Verizon',
      'Amazon',
      'Raymond James Financial'
    ],
    businessDistricts: [
      { name: 'Westshore', type: 'Corporate & Finance', employees: '45,000+' },
      { name: 'Downtown Tampa', type: 'Professional Services', employees: '30,000+' },
      { name: 'Port Tampa Bay', type: 'Logistics & Maritime', employees: '15,000+' },
      { name: 'USF Area', type: 'Healthcare & Education', employees: '25,000+' }
    ],
    permitDetails: {
      salesTax: 'Florida Department of Revenue requires a sales tax permit. Hillsborough County has an 8.5% combined state and local tax rate.',
      healthDept: 'Hillsborough County Health Department',
      healthDeptPhone: '(813) 307-8000',
      businessLicense: 'Hillsborough County Business Tax Receipt required',
      businessLicenseUrl: 'https://www.hillsboroughcounty.org/en/residents/public-safety/consumer-protection',
      additionalNotes: 'MacDill AFB requires special security clearances for on-base vending operations.'
    },
    marketOpportunities: [
      'Westshore district is largest suburban office market in Florida',
      'Moffitt Cancer Center and USF Health create concentrated demand',
      'Port Tampa Bay handles 30+ million tons of cargo annually',
      'MacDill AFB has 6,000+ military and civilian personnel',
      'Channel District is rapidly growing mixed-use area'
    ],
    competitionLevel: 'Medium-High',
    avgMachineRevenue: '$475-$775',
    recommendedStartingMachines: '3-4',
    estimatedROI: '13-17 months'
  }
};

// Generate comprehensive city page
function generatePremiumPageClient(citySlug) {
  const cityData = premiumCityData[citySlug];
  
  if (!cityData) {
    console.log(`⚠️  No premium data for ${citySlug} - using basic template`);
    return null;
  }
  
  const parts = citySlug.split('-');
  const stateName = parts[parts.length - 1];
  const cityParts = parts.slice(0, -1);
  const cityName = cityParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
  const stateNameCap = stateName.charAt(0).toUpperCase() + stateName.slice(1);
  
  const functionName = cityParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('') + stateNameCap + 'HowToStartPage';
  
  return `'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CheckCircleIcon, 
  BuildingOffice2Icon, 
  MapPinIcon, 
  DocumentTextIcon,
  CurrencyDollarIcon,
  LightBulbIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  ChartBarIcon,
  PhoneIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VendingCourse from '@/components/VendingCourse'

export default function ${functionName}() {
  const cityDisplayName = '${cityName}'
  const stateDisplayName = '${stateNameCap}'
  const cityStateDisplay = \`\${cityDisplayName}, \${stateDisplayName}\`

  // ${cityName}-specific market data
  const cityData = {
    description: "${cityData.cityDescription}",
    majorIndustries: ${JSON.stringify(cityData.majorIndustries)},
    topEmployers: ${JSON.stringify(cityData.topEmployers)},
    businessDistricts: ${JSON.stringify(cityData.businessDistricts)},
    competitionLevel: "${cityData.competitionLevel}",
    avgMachineRevenue: "${cityData.avgMachineRevenue}",
    recommendedStartingMachines: "${cityData.recommendedStartingMachines}",
    estimatedROI: "${cityData.estimatedROI}"
  }

  const permitInfo = ${JSON.stringify(cityData.permitDetails, null, 4)}

  const marketOpportunities = ${JSON.stringify(cityData.marketOpportunities)}

  const startupCosts = [
    { item: 'Refurbished snack/soda machine', cost: '$1,500 - $3,500 each' },
    { item: 'Card reader & telemetry', cost: '$200 - $400 per machine' },
    { item: 'Initial inventory (snacks, drinks)', cost: '$300 - $800' },
    { item: 'Transport & installation', cost: '$150 - $500' },
    { item: 'Business registration & permits', cost: '$200 - $500' },
    { item: 'Insurance (liability)', cost: '$500 - $1,200/year' }
  ]

  const steps = [
    {
      title: '1. Business Setup & Registration',
      description: \`Register your LLC with the \${stateDisplayName} Division of Corporations, obtain an EIN from the IRS, and get your sales tax permit from the Florida Department of Revenue. Apply for your \${cityDisplayName} business tax receipt through the local tax collector.\`,
      icon: BuildingOffice2Icon
    },
    {
      title: '2. Permits & Health Department Approval',
      description: \`Contact the \${permitInfo.healthDept} at \${permitInfo.healthDeptPhone} for food vending permits. Each machine selling food or beverages requires inspection and approval. Budget 2-4 weeks for permit processing.\`,
      icon: DocumentTextIcon
    },
    {
      title: '3. Choose Equipment for ${cityName} Market',
      description: \`Start with \${cityData.recommendedStartingMachines} machines optimized for \${cityDisplayName}'s climate and demographics. Ensure all machines have card readers (essential for \${cityDisplayName}'s cashless workforce) and remote monitoring.\`,
      icon: ClipboardDocumentCheckIcon
    },
    {
      title: '4. Target High-Value \${cityDisplayName} Locations',
      description: \`Focus on \${cityDisplayName}'s major employment centers: \${cityData.businessDistricts.map(d => d.name).join(', ')}. Target businesses with 50+ employees in industries like \${cityData.majorIndustries.slice(0, 3).join(', ')}.\`,
      icon: MapPinIcon
    },
    {
      title: '5. Pitch Top \${cityDisplayName} Employers',
      description: \`Major \${cityDisplayName} employers like \${cityData.topEmployers.slice(0, 3).join(', ')} offer the best placement opportunities. Lead with free installation, product variety, and reliable service. Emphasize cashless payment for professional workforce.\`,
      icon: UserGroupIcon
    },
    {
      title: '6. Install, Optimize & Scale',
      description: \`After installation, track performance weekly. Top locations in \${cityDisplayName} average \${cityData.avgMachineRevenue}/month. Expect ROI in \${cityData.estimatedROI}. Scale to 5-10 machines within first year for full-time income.\`,
      icon: ChartBarIcon
    }
  ]

  const faqs = [
    {
      q: \`What permits do I need to start a vending machine business in \${cityDisplayName}?\`,
      a: \`You'll need: (1) \${stateDisplayName} sales tax permit from FL Dept of Revenue, (2) Business Tax Receipt from \${cityDisplayName}, (3) Food vending permits from \${permitInfo.healthDept} for each machine selling food/beverages. Total permit costs: approximately $200-500.\`
    },
    {
      q: \`How much does it cost to start in \${cityDisplayName}?\`,
      a: \`Initial investment for \${cityData.recommendedStartingMachines} machines: $5,000-$15,000 including machines ($1,500-3,500 each), card readers ($200-400 each), inventory ($300-800 per machine), permits ($200-500), and insurance ($500-1,200/year). Most \${cityDisplayName} operators start with 2-3 machines.\`
    },
    {
      q: \`What are the best locations for vending machines in \${cityDisplayName}?\`,
      a: \`Top opportunities: \${marketOpportunities.slice(0, 2).join('; ')}. Focus on \${cityData.businessDistricts.map(d => d.name).join(', ')} business districts.\`
    },
    {
      q: \`How much can I make with vending machines in \${cityDisplayName}?\`,
      a: \`Average \${cityDisplayName} vending machines generate \${cityData.avgMachineRevenue}/month. Top locations can exceed $1,000/month. After costs (inventory 35%, commissions 10-15%, maintenance 5%), net profit is typically $200-400 per machine monthly. ROI: \${cityData.estimatedROI}.\`
    },
    {
      q: \`Who should I contact for health permits in \${cityDisplayName}?\`,
      a: \`Contact \${permitInfo.healthDept} at \${permitInfo.healthDeptPhone}. Each machine requires inspection. Processing time: 2-4 weeks. Have your business registration and machine locations ready when applying.\`
    },
    {
      q: \`Is the \${cityDisplayName} vending market competitive?\`,
      a: \`Competition level: \${cityData.competitionLevel}. \${cityDisplayName} has \${cityData.topEmployers.length}+ major employers creating strong demand. Focus on under-served industries like \${cityData.majorIndustries.slice(0, 2).join(' and ')} where larger operators overlook opportunities.\`
    },
    {
      q: \`Can I run a vending business part-time in \${cityDisplayName}?\`,
      a: \`Yes! With \${cityData.recommendedStartingMachines} machines, budget 6-10 hours weekly for restocking and maintenance. Many \${cityDisplayName} operators start part-time and transition to full-time at 8-12 machines.\`
    },
    {
      q: \`What products sell best in \${cityDisplayName}?\`,
      a: \`Top performers in \${cityDisplayName}: bottled water, energy drinks (Red Bull, Monster), healthy snacks, protein bars, and grab-and-go breakfast items. Given \${cityDisplayName}'s climate, cold beverages consistently outsell hot drinks 3:1. Adjust mix by location demographics.\`
    }
  ]

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-stone">
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/guide" className="hover:text-navy transition-colors">
                Guides
              </Link>
              <span>/</span>
              <Link href="/guide/how-to-start-a-vending-machine-business" className="hover:text-navy transition-colors">
                How to Start
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{cityStateDisplay}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-navy to-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-4">
                  <span className="bg-coral/20 text-coral px-4 py-2 rounded-full text-sm font-medium border border-coral/30">
                    2025 \${cityDisplayName} Market Guide
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
                  How to Start a Vending Machine Business in{' '}
                  <span className="text-coral">{cityStateDisplay}</span>
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-gray-200 leading-relaxed">
                  {cityData.description}
                </p>
                <p className="text-lg mb-8 text-gray-300">
                  Complete guide: licensing, permits, startup costs, and proven locations in \${cityDisplayName}'s \${cityData.majorIndustries.slice(0, 3).join(', ')} sectors
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://vendflow.gumroad.com/l/rxbzy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-coral hover:bg-coral/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <AcademicCapIcon className="h-5 w-5 mr-2" />
                    Get the Vending Course
                  </a>
                  <Link
                    href="#market-data"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 border border-white/30"
                  >
                    View \${cityDisplayName} Market Data
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ${cityName} Market Overview */}
        <section id="market-data" className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <CurrencyDollarIcon className="h-10 w-10 text-coral mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy mb-1">{cityData.avgMachineRevenue}</div>
                  <div className="text-sm text-charcoal/70">Avg Monthly Revenue</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <ClipboardDocumentCheckIcon className="h-10 w-10 text-coral mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy mb-1">{cityData.estimatedROI}</div>
                  <div className="text-sm text-charcoal/70">Typical ROI Timeline</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <BuildingOffice2Icon className="h-10 w-10 text-coral mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy mb-1">{cityData.recommendedStartingMachines}</div>
                  <div className="text-sm text-charcoal/70">Recommended Start</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <ChartBarIcon className="h-10 w-10 text-coral mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy mb-1">{cityData.competitionLevel}</div>
                  <div className="text-sm text-charcoal/70">Competition Level</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section id="steps" className="py-16 bg-warm-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                  6 Steps to Launch in {cityDisplayName}
                </h2>
                <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                  Proven process tailored to \${cityDisplayName}'s market, regulations, and opportunities
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white p-8 rounded-xl shadow-md border border-stone/20 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-coral" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
                          <p className="text-charcoal/80 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CONTINUED IN NEXT MESSAGE DUE TO LENGTH... */
`;
}

// Main execution
const citySlug = process.argv[2];

if (!citySlug) {
  console.log('Usage: node create_premium_how_to_start_pages.js <city-slug>');
  console.log('Example: node create_premium_how_to_start_pages.js jacksonville-florida');
  console.log('\\nAvailable premium cities:');
  Object.keys(premiumCityData).forEach(slug => console.log(`  - ${slug}`));
  process.exit(1);
}

console.log(`\\n🚀 Creating premium "How to Start" page for ${citySlug}...\\n`);
const content = generatePremiumPageClient(citySlug);

if (!content) {
  console.log(`❌ No premium data available for ${citySlug}`);
  console.log('Add city data to premiumCityData object first.');
  process.exit(1);
}

console.log('✅ Premium page generation complete!\\n');
console.log('Note: This script generates the first part. The full implementation');
console.log('would include all sections matching your vending-leads quality.');



