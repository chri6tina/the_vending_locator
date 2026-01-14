'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, HeartIcon, ShoppingBagIcon, TruckIcon, BuildingLibraryIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/solid'
import states from '@/data/states'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import CityPageSEO from '@/components/CityPageSEO'

export default function StGeorgeUtahVendingLeadsPage() {
  // City and state display names
  const cityDisplayName = 'St. George';const stateDisplayName = 'Utah';
  
  // City-specific data
  const cityData = {
    'name': 'St. George',
    'state': 'Utah',
    'population': '~95,000',
    'businesses': '2.2K-2.8K',
    'industries': '7-9',
    'verifiedLocations': '90-180',
    'rating': '4.7/5',
    'description': 'Fast-growing retirement and tourism destination'
  };
  
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(25)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set())

  // User names for active users counter
  const [userNames, setUserNames] = useState([
    'Mike from St.', 'Sarah in St.', 'David in St.', 'Lisa in St.',
    'Tom in St.', 'Jennifer in St.', 'Robert in St.', 'Amanda in St.',
    'Chris in St.', 'Maria in St.', 'James in St.', 'Emily in St.'
  ])

  // Active users counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        const newValue = prev + change
        return Math.max(20, Math.min(35, newValue))
      })
    }, 4000);
    return () => clearInterval(interval)
  }, [])

  // Smart rotation of user names
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => {
        if (usedNames.size > userNames.length * 0.8) {
          setUsedNames(new Set())
        }
        let attempts = 0
        let nextIndex = prev
        while (attempts < 50) {
          nextIndex = (nextIndex + 1) % userNames.length
          if (!usedNames.has(nextIndex)) {
            setUsedNames(prev => new Set([...prev, nextIndex]));
            return nextIndex
          }
          attempts++
        }
        const randomIndex = Math.floor(Math.random() * userNames.length)
        setUsedNames(prev => new Set([...prev, randomIndex]));
        return randomIndex
      })
    }, 5000);
    return () => clearInterval(interval)
  }, [userNames.length, usedNames])

  // Build related New Hampshire cities (for internal linking)
  const newHampshire = states.find(s => s.slug === 'utah');
  const relatedCities = newHampshire ? newHampshire.cities.filter(c => c.slug !== 'manchester-utah').slice(0, 8) : [];

  // FAQ items reused for JSON-LD
  const faqItems = [
    { q: "What types of vending machine locations are available in St. George?", a: "St. George offers vending opportunities in retirement communities, healthcare facilities (Intermountain St. George Regional Hospital), resort properties, retail centers, outdoor recreation businesses, and professional offices." },
    { q: "How quickly can I get vending machine leads for St. George?", a: "Our St. George vending leads are delivered within 3-5 business days with comprehensive details about each location and southwest Utah market insights." },
    { q: "What makes St. George a good market for vending machines?", a: "St. George's rapid growth as a retirement destination and proximity to Zion National Park create diverse vending opportunities. The city's healthcare expansion and year-round tourism ensure consistent demand." },
    { q: "Do you provide ongoing support for St. George locations?", a: "Yes, we provide comprehensive support including location research, healthcare and tourism sector insights, contact information, and placement strategies tailored to St. George's growing market." },
    { q: "What industries in St. George are best for vending machines?", a: "Healthcare facilities, retirement communities, resort properties, and retail centers show excellent potential due to senior populations, tourist traffic, and consistent business growth." },
    { q: "How do you verify the quality of St. George vending locations?", a: "We conduct thorough verification including business validation, demographic analysis, seasonal traffic assessment, and facility research for each St. George location." },
    { q: "Can I get customized vending leads for specific areas of St. George?", a: "Absolutely! We can target the Red Cliffs area, downtown historic district, or Sunset Boulevard corridor based on your preferences." },
    { q: "What's the typical ROI for vending machines in St. George?", a: "Machines in St. George typically see ROI within 10-14 months, with healthcare and tourism locations often achieving faster returns due to high traffic and premium pricing acceptance from retirees and tourists." }
  ];

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-stone">
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/vending-leads" className="hover:text-navy transition-colors">
                Vending Leads
              </Link>
              <span>/</span>
              <Link href={`/vending-leads/${stateDisplayName.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-navy transition-colors">
                {stateDisplayName}
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{cityDisplayName}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              {/* Active Users Counter */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-6 sm:mt-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto mb-6"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-chocolate">
                    <span className="font-bold text-coral">{activeUsers}</span> people are choosing plans right now
                  </span>
                </div></motion.div>

              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 leading-tight"
              >
                Vending Machine Locations in{' '}
                <span className="text-navy">{cityDisplayName}, {stateDisplayName}</span>
              </motion.h1>

              {/* City-Specific Value Proposition */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-stone mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Access premium vending machine leads in St. George, Utah, featuring verified locations across healthcare facilities, educational institutions, and commercial centers.</motion.p>

              {/* Trust Signals */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto mb-8"
              >
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-chocolate">Verified Locations</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <StarIcon className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-chocolate">4.7/5 Rating</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-chocolate">Secure & Reliable</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-chocolate">Quality Research</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              >
                <button 
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing')
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
                >
                    Get Started
                  </button>

              </motion.div>

{/* Social Proof Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{cityData.population}</div>
                  <div className="text-sm text-stone">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{cityData.businesses}</div>
                  <div className="text-sm text-stone">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{cityData.industries}</div>
                  <div className="text-sm text-stone">Industries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{cityData.verifiedLocations}</div>
                  <div className="text-sm text-stone">Verified Locations</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Get Access to Qualified Vending Machine Locations in {cityDisplayName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Choose the perfect plan for your vending machine business needs and start accessing qualified locations today.
              </motion.p>
            </div>
            <PricingTable />
          </div>
        </section>

        {/* Business Landscape */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Business Landscape in {cityDisplayName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Discover the diverse industries and business opportunities that make {cityDisplayName} an ideal market for vending machines.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <motion.div
                key="Healthcare"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  <HeartIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Healthcare</h3>
                <p className="text-stone leading-relaxed">Medical facilities throughout St. George serve large patient populations and employ substantial staff, providing steady foot traffic and consistent demand for vending services in waiting areas and break rooms.</p>
              </motion.div>
              <motion.div
                key="Education"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-green-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-green-600 mb-4">
                  <AcademicCapIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Education</h3>
                <p className="text-stone leading-relaxed">Educational facilities throughout St. George serve large student populations and employ substantial staff, providing steady foot traffic and consistent demand for vending services.</p>
              </motion.div>
              <motion.div
                key="Manufacturing"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-purple-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-purple-600 mb-4">
                  <CpuChipIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Manufacturing</h3>
                <p className="text-stone leading-relaxed">Manufacturing facilities in St. George provide excellent vending locations with large employee bases, multiple shifts, and break areas that generate consistent sales throughout the day.</p>
              </motion.div>
              <motion.div
                key="Retail"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.30000000000000004 }}
                viewport={{ once: true }}
                className="bg-orange-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-orange-600 mb-4">
                  <ShoppingBagIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Retail</h3>
                <p className="text-stone leading-relaxed">Shopping centers and retail districts in St. George offer prime vending locations, with high-traffic areas including food courts, entrances, and common spaces frequented by shoppers.</p>
              </motion.div>
              <motion.div
                key="Office Buildings"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-indigo-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-indigo-600 mb-4">
                  <BuildingOfficeIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Office Buildings</h3>
                <p className="text-stone leading-relaxed">Office complexes in St. George provide ideal vending locations with multiple tenants, high employee counts, and break areas that ensure steady machine usage during business hours.</p>
              </motion.div>
              <motion.div
                key="Transportation"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-red-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-red-600 mb-4">
                  <TruckIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Transportation</h3>
                <p className="text-stone leading-relaxed">Transit facilities throughout St. George provide excellent vending opportunities in terminals, waiting areas, and high-traffic zones with consistent traveler foot traffic.</p>
              </motion.div>
            </div>
          </div>
        </section>        {/* Why St. George? */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6"
              >
                Why Choose St. George for Vending Machines?
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
            >
              <p className="text-lg text-stone leading-relaxed">
                St. George presents strong vending potential with its mix of established businesses, growing commercial sectors, and steady employment base. The city's diverse economy supports consistent consumer spending, while strategic location placement maximizes machine visibility and usage.</p>
            </motion.div>
          </div>
        </section>



        {/* Hot Leads Section */}
        <section id="hot-leads" className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                One-Time Location Packages for {cityDisplayName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Get immediate access to qualified vending machine locations without monthly commitments.
              </motion.p>
            </div>
            <HotLeads />
          </div>
        </section>

        {/* Vending Course Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Learn the Vending Machine Business
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Master the fundamentals of vending machine operations and maximize your success in {cityDisplayName}.
              </motion.p>
            </div>
            <VendingCourse />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-warm-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-chocolate/70 leading-relaxed"
              >
                Everything you need to know about vending machine opportunities in {cityDisplayName}.
              </motion.p>
            </div>
            
            <div className="space-y-6">
              {faqItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-charcoal mb-3">{item.q}</h3>
                  <p className="text-stone leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* More cities in New Hampshire */}
        {relatedCities.length > 0 && (
          <section className="py-12 bg-white border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="text-xl font-playfair font-bold text-charcoal mb-4">More cities in New Hampshire</h2>
              <div className="flex flex-wrap gap-3">
                {relatedCities.map(city => (
                  <Link key={city.slug} href={`/vending-leads/${city.slug}`} className="px-3 py-2 rounded-lg border border-gray-200 bg-cream/60 text-chocolate hover:text-navy">
                    Vending Leads in {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
      
      {/* SEO Structured Data */}

      
      <CityPageSEO

      
        city="St. George"

      
        state="Utah"

      
        stateAbbr="UT"

      
        description="Get verified vending machine leads and locations in St. George, Utah. Find qualified businesses for vending machine placement."
        faqs={[
          {
            question: "Healthcare",
            answer: "Medical facilities throughout St. George serve large patient populations and employ substantial staff, providing steady foot traffic and consistent demand for vending services in waiting areas and break rooms."
          },
          {
            question: "Education",
            answer: "Educational facilities throughout St. George serve large student populations and employ substantial staff, providing steady foot traffic and consistent demand for vending services."
          },
          {
            question: "Manufacturing",
            answer: "Manufacturing facilities in St. George provide excellent vending locations with large employee bases, multiple shifts, and break areas that generate consistent sales throughout the day."
          },
          {
            question: "Retail",
            answer: "Shopping centers and retail districts in St. George offer prime vending locations, with high-traffic areas including food courts, entrances, and common spaces frequented by shoppers."
          },
          {
            question: "Office Buildings",
            answer: "Office complexes in St. George provide ideal vending locations with multiple tenants, high employee counts, and break areas that ensure steady machine usage during business hours."
          },
          {
            question: "Transportation",
            answer: "Transit facilities throughout St. George provide excellent vending opportunities in terminals, waiting areas, and high-traffic zones with consistent traveler foot traffic."
          },
          {
            question: "{item.q}",
            answer: "{item.a}"
          }
        ]}

      
      />

      
      

      
      <Footer />
      <ZipCodeModalWrapper />
      {/* JSON-LD: Breadcrumbs and FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thevendinglocator.com/' },
              { '@type': 'ListItem', position: 2, name: 'Vending Leads', item: 'https://www.thevendinglocator.com/vending-leads' },
              { '@type': 'ListItem', position: 3, name: 'New Hampshire', item: 'https://www.thevendinglocator.com/vending-leads/utah' },
              { '@type': 'ListItem', position: 4, name: 'Manchester', item: 'https://www.thevendinglocator.com/vending-leads/manchester-utah' }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map(i => ({
              '@type': 'Question',
              name: i.q,
              acceptedAnswer: { '@type': 'Answer', text: i.a }
            }))
          })
        }}
      />
    </>
  )
}
