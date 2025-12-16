'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, HeartIcon, AcademicCapIcon, CpuChipIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function GilbertArizonaVendingLeadsPage() {
  const cityDisplayName = 'Gilbert'
  const stateDisplayName = 'Arizona'

  const cityData = {
    name: 'Gilbert',
    state: 'Arizona',
    population: '267,000+',
    businesses: '15K-25K',
    industries: '8-12',
    verifiedLocations: '180-320',
    description: "Family-oriented city with strong healthcare, education, technology, and retail sectors."
  }

  const [activeUsers, setActiveUsers] = useState(34)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set<number>())
  const [userNames] = useState([
    'Mike from Gilbert', 'Sarah in Downtown', 'David in Gilbert', 'Lisa in Gilbert',
    'Tom in Gilbert', 'Jennifer in Gilbert', 'Robert in Gilbert', 'Amanda in Gilbert'
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => Math.max(28, Math.min(46, prev + (Math.floor(Math.random() * 3) - 1))))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => {
        if (usedNames.size > userNames.length * 0.8) setUsedNames(new Set())
        let tries = 0
        let next = prev
        while (tries < 50) {
          next = (next + 1) % userNames.length
          if (!usedNames.has(next)) {
            setUsedNames(prevSet => new Set([...prevSet, next]))
            return next
          }
          tries++
        }
        const rand = Math.floor(Math.random() * userNames.length)
        setUsedNames(prevSet => new Set([...prevSet, rand]))
        return rand
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [userNames.length, usedNames])

  return (
    <>
      <Header />

      <div className="min-h-screen bg-warm-white">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-stone">
              <Link href="/" className="hover:text-navy transition-colors">Home</Link>
              <span>/</span>
              <Link href="/vending-leads" className="hover:text-navy transition-colors">Vending Leads</Link>
              <span>/</span>
              <Link href={`/vending-leads/${stateDisplayName.toLowerCase()}`} className="hover:text-navy transition-colors">{stateDisplayName}</Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{cityDisplayName}</span>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
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
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 leading-tight"
              >
                Vending Machine Locations in <span className="text-navy">{cityDisplayName}, {stateDisplayName}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-stone mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Get pre-qualified vending machine locations across Gilbert's healthcare, education, technology and family retail sectors.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto mb-8"
              >
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm"><div className="flex items-center gap-3"><CheckBadgeIcon className="h-5 w-5 text-green-600" /><span className="text-sm font-medium text-chocolate">Verified Locations</span></div></div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm"><div className="flex items-center gap-3"><StarIcon className="h-5 w-5 text-yellow-500" /><span className="text-sm font-medium text-chocolate">4.8/5 Rating</span></div></div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm"><div className="flex items-center gap-3"><ShieldCheckIcon className="h-5 w-5 text-blue-600" /><span className="text-sm font-medium text-chocolate">Secure & Reliable</span></div></div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm"><div className="flex items-center gap-3"><ClockIcon className="h-5 w-5 text-purple-600" /><span className="text-sm font-medium text-chocolate">Quality Research</span></div></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              >
                <button
                  onClick={() => {
                    const el = document.getElementById('pricing')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
                >
                  Get Started
                </button>
                
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                <div className="text-center"><div className="text-2xl font-bold text-navy">{cityData.population}</div><div className="text-sm text-stone">Population</div></div>
                <div className="text-center"><div className="text-2xl font-bold text-navy">{cityData.businesses}</div><div className="text-sm text-stone">Businesses</div></div>
                <div className="text-center"><div className="text-2xl font-bold text-navy">{cityData.industries}</div><div className="text-sm text-stone">Industries</div></div>
                <div className="text-center"><div className="text-2xl font-bold text-navy">{cityData.verifiedLocations}</div><div className="text-sm text-stone">Verified Locations</div></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">Get Access to Qualified Vending Machine Locations in {cityDisplayName}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="text-lg text-stone max-w-3xl mx-auto">Choose the perfect plan for your vending machine business needs and start accessing qualified locations today.</motion.p>
            </div>
            <PricingTable />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">Business Landscape in {cityDisplayName}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="text-lg text-stone max-w-3xl mx-auto">Discover the diverse industries and business opportunities that make {cityDisplayName} an ideal market for vending machines.</motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }} viewport={{ once: true }} className="bg-blue-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4"><HeartIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Healthcare</h3>
                <p className="text-stone leading-relaxed">Medical centers and healthcare facilities throughout Gilbert offer excellent vending placement opportunities, with high-traffic areas including waiting rooms, cafeterias, and employee break areas.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }} className="bg-green-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-green-600 mb-4"><AcademicCapIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Education</h3>
                <p className="text-stone leading-relaxed">Gilbert's education sector features schools, universities, and training facilities with captive audiences during academic hours, creating reliable vending machine placement opportunities.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="bg-purple-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-purple-600 mb-4"><CpuChipIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Technology</h3>
                <p className="text-stone leading-relaxed">Tech offices offer extended hours and large employee bases suitable for vending.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="bg-orange-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-orange-600 mb-4"><ShoppingBagIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Family Retail</h3>
                <p className="text-stone leading-relaxed">Retail centers with family-oriented traffic provide consistent daily demand.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <HotLeads />

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">Learn the Vending Machine Business</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="text-lg text-stone max-w-3xl mx-auto">Master the fundamentals and maximize your success in {cityDisplayName}.</motion.p>
            </div>
            <VendingCourse />
          </div>
        </section>

        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">Frequently Asked Questions</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="text-lg text-chocolate/70 leading-relaxed">Everything you need to know about vending machine opportunities in {cityDisplayName}.</motion.p>
            </div>
            <div className="space-y-6">
              {[
                { q: 'What makes Gilbert good for vending machines?\', a: 'Healthcare, education, technology and family retail sectors create consistent traffic and stable operations.' },
                { q: 'How fast are Gilbert leads delivered?\', a: 'We typically deliver within 3-5 business days with business details and contact info.' },
                { q: 'Best Gilbert locations?\', a: 'Hospitals, schools, tech offices and retail centers are top targets.' },
                { q: 'Customized Gilbert leads?\', a: 'Yes, we can target specific neighborhoods, school districts or tech corridors.' }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.1 }} viewport={{ once: true }} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">{item.q}</h3>
                  <p className="text-stone leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}


