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

export default function GrandJunctionColoradoVendingLeadsPage() {
  // City and state display names
  const cityDisplayName = 'Grand Junction';const stateDisplayName = 'Colorado';
  
  // City-specific data
  const cityData = {
    'name': 'Grand Junction',
    'state': 'Colorado',
    'population': '~65,000',
    'businesses': '1.7K-2.2K',
    'industries': '7-9',
    'verifiedLocations': '75-150',
    'rating': '4.7/5',
    'description': 'Energy and tourism hub in Western Colorado'
  };
  
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(25)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set())

  // User names for active users counter
  const [userNames, setUserNames] = useState([
    'Mike from Grand', 'Sarah in Grand', 'David in Grand', 'Lisa in Grand',
    'Tom in Grand', 'Jennifer in Grand', 'Robert in Grand', 'Amanda in Grand',
    'Chris in Grand', 'Maria in Grand', 'James in Grand', 'Emily in Grand'
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
  const newHampshire = states.find(s => s.slug === 'colorado');
  const relatedCities = newHampshire ? newHampshire.cities.filter(c => c.slug !== 'manchester-colorado').slice(0, 8) : [];

  // FAQ items reused for JSON-LD
  const faqItems = [
    { q: "What types of vending machine locations are available in Grand Junction?", a: "Grand Junction offers vending opportunities in energy sector facilities (oil and gas), healthcare centers, tourism businesses, retail locations, wine industry facilities, and outdoor recreation companies." },
    { q: "How quickly can I get vending machine leads for Grand Junction?", a: "Our Grand Junction vending leads are delivered within 3-5 business days with comprehensive details about each location and Western Slope market insights." },
    { q: "What makes Grand Junction a good market for vending machines?", a: "Grand Junction's diverse economy combining energy, tourism, and wine production creates unique vending opportunities. The city's role as a regional hub and gateway to national parks ensures consistent business activity." },
    { q: "Do you provide ongoing support for Grand Junction locations?", a: "Yes, we offer complete support including location verification, energy and tourism sector insights, contact information, and placement strategies specific to Grand Junction's economy." },
    { q: "What industries in Grand Junction are best for vending machines?", a: "Energy facilities, healthcare centers, tourism businesses, wine production facilities, and retail locations show excellent potential due to seasonal and year-round traffic patterns." },
    { q: "How do you verify the quality of Grand Junction vending locations?", a: "We verify each location through business research, seasonal traffic analysis, employee validation, and facility assessment to ensure quality placements." },
    { q: "Can I get customized vending leads for specific areas of Grand Junction?", a: "Absolutely! We can target the downtown business district, North Avenue commercial corridor, or Clifton manufacturing area based on your preferences." },
    { q: "What's the typical ROI for vending machines in Grand Junction?", a: "Vending machines in Grand Junction typically achieve ROI within 12-16 months, with energy and tourism locations often seeing stronger returns during peak seasons and from shift workers." }
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
                Access targeted vending leads in Grand Junction, Colorado, covering industrial parks, shopping centers, and professional office complexes.</motion.p>

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
                <p className="text-stone leading-relaxed">Medical facilities throughout Grand Junction serve large patient populations and employ substantial staff, providing steady foot traffic and consistent demand for vending services in waiting areas and break rooms.</p>
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
                <p className="text-stone leading-relaxed">Educational facilities throughout Grand Junction serve large student populations and employ substantial staff, providing steady foot traffic and consistent demand for vending services.</p>
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
                <p className="text-stone leading-relaxed">Manufacturing facilities in Grand Junction provide excellent vending locations with large employee bases, multiple shifts, and break areas that generate consistent sales throughout the day.</p>
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
                <p className="text-stone leading-relaxed">Shopping centers and retail districts in Grand Junction offer prime vending locations, with high-traffic areas including food courts, entrances, and common spaces frequented by shoppers.</p>
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
                <p className="text-stone leading-relaxed">Office complexes in Grand Junction provide ideal vending locations with multiple tenants, high employee counts, and break areas that ensure steady machine usage during business hours.</p>
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
                <p className="text-stone leading-relaxed">Transit facilities throughout Grand Junction provide excellent vending opportunities in terminals, waiting areas, and high-traffic zones with consistent traveler foot traffic.</p>
              </motion.div>
            </div>
          </div>
        </section>        {/* Why Grand Junction? */}
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
                Why Choose Grand Junction for Vending Machines?
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
                Through Grand Junction's diverse business ecosystem, vending machines find placement in healthcare systems, educational facilities, and corporate offices. The city's economic activity supports consistent consumer demand.</p>
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

      
        city="Grand Junction"

      
        state="Colorado"

      
        stateAbbr="CO"

      
        description="Get verified vending machine leads and locations in Grand Junction, Colorado. Find qualified businesses for vending machine placement."
        faqs={[
          {
            question: "Healthcare",
            answer: "Medical facilities throughout Grand Junction serve large patient populations and employ substantial staff, providing steady foot traffic and consistent demand for vending services in waiting areas and break rooms."
          },
          {
            question: "Education",
            answer: "Educational facilities throughout Grand Junction serve large student populations and employ substantial staff, providing steady foot traffic and consistent demand for vending services."
          },
          {
            question: "Manufacturing",
            answer: "Manufacturing facilities in Grand Junction provide excellent vending locations with large employee bases, multiple shifts, and break areas that generate consistent sales throughout the day."
          },
          {
            question: "Retail",
            answer: "Shopping centers and retail districts in Grand Junction offer prime vending locations, with high-traffic areas including food courts, entrances, and common spaces frequented by shoppers."
          },
          {
            question: "Office Buildings",
            answer: "Office complexes in Grand Junction provide ideal vending locations with multiple tenants, high employee counts, and break areas that ensure steady machine usage during business hours."
          },
          {
            question: "Transportation",
            answer: "Transit facilities throughout Grand Junction provide excellent vending opportunities in terminals, waiting areas, and high-traffic zones with consistent traveler foot traffic."
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
              { '@type': 'ListItem', position: 3, name: 'New Hampshire', item: 'https://www.thevendinglocator.com/vending-leads/colorado' },
              { '@type': 'ListItem', position: 4, name: 'Manchester', item: 'https://www.thevendinglocator.com/vending-leads/manchester-colorado' }
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
