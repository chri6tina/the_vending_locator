'use client'

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
  ChartBarIcon
} from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VendingCourse from '@/components/VendingCourse'

export default function SurfsideFloridaHowToStartPage() {
  const cityDisplayName = 'Surfside'
  const stateDisplayName = 'Florida'
  const cityStateDisplay = `${cityDisplayName}, ${stateDisplayName}`

  // City-specific data
  const permitInfo = {
  "salesTax": "Florida requires a sales tax permit through the state Department of Revenue. Register your business and collect/remit tax on vending sales where applicable.",
  "healthPermit": "Contact your local county health department for food and beverage vending permits if selling consumable products in Surfside.",
  "businessLicense": "Register your LLC with the Florida Secretary of State and obtain any required local business licenses in Surfside.",
  "additionalNotes": "Always verify specific requirements with local authorities, as regulations can vary by location and facility type."
}

  const demandDrivers = [
  "Office buildings and corporate parks in Surfside",
  "Healthcare facilities, hospitals, and medical clinics",
  "Manufacturing and distribution centers",
  "Schools, colleges, and universities",
  "Gyms, fitness centers, and recreational facilities",
  "Government and municipal buildings",
  "Hotels and hospitality venues",
  "Retail back-office and employee break rooms"
]

  const neighborhoods = [
  "Downtown Surfside",
  "Business districts",
  "Industrial parks",
  "Suburban office areas"
]

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
      description: `Register your LLC with the ${stateDisplayName} Secretary of State, obtain an EIN from the IRS, and get your sales tax permit. Register for local business licenses in ${cityDisplayName}.`,
      icon: BuildingOffice2Icon
    },
    {
      title: '2. Permits & Licensing',
      description: 'Apply for food vending permits through your local health department if selling food/beverages. Confirm all requirements for your specific locations.',
      icon: DocumentTextIcon
    },
    {
      title: '3. Choose Your Machines',
      description: 'Start with reliable combo machines or separate snack/beverage units. Ensure card readers, ADA compliance, and remote monitoring are included.',
      icon: ClipboardDocumentCheckIcon
    },
    {
      title: '4. Find High-Traffic Locations',
      description: `Target office buildings (50+ employees), healthcare facilities, logistics warehouses, gyms, and municipal facilities across ${cityStateDisplay}.`,
      icon: MapPinIcon
    },
    {
      title: '5. Negotiate Placement Agreements',
      description: 'Lead with value: free service, employee convenience, commission-sharing options. Use professional contracts to formalize terms.',
      icon: UserGroupIcon
    },
    {
      title: '6. Install, Stock & Optimize',
      description: 'Schedule installations, set up service routes, track sales data, and expand based on performance. Use telemetry to optimize product mix.',
      icon: ChartBarIcon
    }
  ]

  const faqs = [
    {
      q: `What permits do I need to start a vending machine business in ${cityDisplayName}?`,
      a: `You'll need a ${stateDisplayName} sales tax permit, local business license, and if selling food/beverages, health permits for each machine. Also register your LLC with the state.`
    },
    {
      q: 'How much does it cost to start a vending machine business?',
      a: 'Initial startup costs typically range from $3,000-$6,000 per machine, including the machine, card reader, inventory, permits, and installation. You can start with 1-2 machines and scale up.'
    },
    {
      q: `What are the best locations for vending machines in ${cityDisplayName}?`,
      a: `High-traffic areas like office buildings, healthcare campuses, manufacturing facilities, gyms, schools, and municipal buildings in ${cityDisplayName}.`
    },
    {
      q: 'How much profit can I make?',
      a: `Well-placed machines in ${cityDisplayName} can generate $250-$800+ per machine per month. After costs, profit margins typically range from 20-35%. ROI often happens within 10-18 months.`
    },
    {
      q: 'Do I need a special license to operate vending machines?',
      a: `You need a business license, a ${stateDisplayName} sales tax permit, and health permits if selling food. No special vending-specific license beyond standard business registration.`
    },
    {
      q: 'Can I run a vending machine business part-time?',
      a: 'Yes! Many operators start part-time with 2-5 machines. Plan for 4-8 hours per week for restocking, maintenance, and administrative tasks.'
    },
    {
      q: 'What products should I stock?',
      a: 'Popular items include cold beverages, salty snacks, candy bars, crackers, and healthy options. Adjust based on location demographics and telemetry data.'
    },
    {
      q: 'How do I find vending machine locations?',
      a: 'Use our platform to access pre-qualified leads, cold call offices and gyms, network at business events, or partner with commercial real estate agents.'
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
                    2026 Complete Guide
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
                  How to Start a Vending Machine Business in{' '}
                  <span className="text-coral">{cityStateDisplay}</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                  Step-by-step guide covering licensing, permits, startup costs, finding locations, and launching your vending business in {cityDisplayName}
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
                    href="#steps"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 border border-white/30"
                  >
                    View Step-by-Step Guide
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-12 bg-white border-b border-gray-200">
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
                  <div className="text-2xl font-bold text-navy mb-1">$3K-$6K</div>
                  <div className="text-sm text-charcoal/70">Startup Cost Per Machine</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <ChartBarIcon className="h-10 w-10 text-coral mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy mb-1">$250-$800+</div>
                  <div className="text-sm text-charcoal/70">Monthly Revenue Per Machine</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <ClipboardDocumentCheckIcon className="h-10 w-10 text-coral mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy mb-1">10-18 Months</div>
                  <div className="text-sm text-charcoal/70">Typical ROI Timeline</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <UserGroupIcon className="h-10 w-10 text-coral mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy mb-1">50+ Employees</div>
                  <div className="text-sm text-charcoal/70">Ideal Location Size</div>
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
                  6 Steps to Launch Your Vending Business in {cityDisplayName}
                </h2>
                <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                  Follow this proven process to start and scale your vending machine business in {stateDisplayName}
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

        {/* Permits & Compliance */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                  Permits & Compliance in {cityStateDisplay}
                </h2>
                <p className="text-lg text-charcoal/70">
                  Essential licensing and regulatory requirements for your vending business
                </p>
              </motion.div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-3 flex items-center">
                    <DocumentTextIcon className="h-5 w-5 mr-2 text-coral" />
                    Sales Tax Permit
                  </h3>
                  <p className="text-charcoal/80">{permitInfo.salesTax}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-3 flex items-center">
                    <DocumentTextIcon className="h-5 w-5 mr-2 text-coral" />
                    Health Permits
                  </h3>
                  <p className="text-charcoal/80">{permitInfo.healthPermit}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-3 flex items-center">
                    <DocumentTextIcon className="h-5 w-5 mr-2 text-coral" />
                    Business Registration
                  </h3>
                  <p className="text-charcoal/80">{permitInfo.businessLicense}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-navy/5 p-6 rounded-xl border border-navy/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-3 flex items-center">
                    <LightBulbIcon className="h-5 w-5 mr-2 text-coral" />
                    Additional Considerations
                  </h3>
                  <p className="text-charcoal/80">{permitInfo.additionalNotes}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Startup Costs */}
        <section className="py-16 bg-warm-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                  Startup Costs Breakdown
                </h2>
                <p className="text-lg text-charcoal/70">
                  Typical investment needed to launch your first vending machine
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg border border-stone/20 overflow-hidden"
              >
                <div className="divide-y divide-stone/20">
                  {startupCosts.map((cost, index) => (
                    <div key={index} className="p-5 flex items-center justify-between hover:bg-cream/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <CurrencyDollarIcon className="h-5 w-5 text-coral flex-shrink-0" />
                        <span className="text-charcoal font-medium">{cost.item}</span>
                      </div>
                      <span className="text-navy font-semibold">{cost.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-navy/10 p-5 border-t-2 border-navy">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-charcoal">Total Estimated Range</span>
                    <span className="text-2xl font-bold text-navy">$3,000 - $6,500</span>
                  </div>
                  <p className="text-sm text-charcoal/70 mt-2">Per machine. Start with 1-2 machines and scale based on performance.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Best Locations */}
        <section className="py-16 bg-white border-t border-gray-200">
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
                  Best Locations in {cityDisplayName}
                </h2>
                <p className="text-lg text-charcoal/70">
                  High-demand areas and target markets for your vending machines
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Demand Drivers */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-cream p-8 rounded-xl border border-stone/20"
                >
                  <h3 className="text-2xl font-semibold text-navy mb-6 flex items-center">
                    <BuildingOffice2Icon className="h-6 w-6 mr-3 text-coral" />
                    High-Demand Target Markets
                  </h3>
                  <ul className="space-y-3">
                    {demandDrivers.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Neighborhoods */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-cream p-8 rounded-xl border border-stone/20"
                >
                  <h3 className="text-2xl font-semibold text-navy mb-6 flex items-center">
                    <MapPinIcon className="h-6 w-6 mr-3 text-coral" />
                    Key Areas & Neighborhoods
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {neighborhoods.map((neighborhood, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white rounded-lg text-charcoal border border-stone/20 text-sm font-medium"
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-navy/5 rounded-lg border border-navy/10">
                    <p className="text-sm text-charcoal/80">
                      <strong className="text-navy">Pro Tip:</strong> Focus on areas with high daytime populations, limited nearby food options, and at least 50+ employees per location for best results.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Vending Course Section */}
        <section id="vending-course" className="py-16 bg-gradient-to-br from-warm-white to-cream border-t border-gray-200">
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
                  Master the Vending Machine Business
                </h2>
                <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                  Get our comprehensive course with scripts, templates, supplier contacts, and everything you need to succeed in {cityStateDisplay}
                </p>
              </motion.div>

              <VendingCourse />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-charcoal/70">
                  Common questions about starting a vending business in {cityStateDisplay}
                </p>
              </motion.div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="bg-cream p-6 rounded-xl border border-stone/20"
                  >
                    <h3 className="text-lg font-semibold text-navy mb-3">{faq.q}</h3>
                    <p className="text-charcoal/80 leading-relaxed">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-navy to-charcoal text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Ready to Start Your Vending Business in {cityDisplayName}?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get access to premium vending locations and our comprehensive business course
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
                  href={`/vending-leads/${cityDisplayName.toLowerCase().replace(/\s+/g, '-')}-${stateDisplayName.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 border border-white/30"
                >
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  Browse {cityDisplayName} Locations
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
