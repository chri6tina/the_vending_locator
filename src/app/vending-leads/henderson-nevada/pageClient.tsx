'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, AcademicCapIcon, TruckIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function HendersonNevadaVendingLeadsPage() {
  const cityDisplayName = 'Henderson'
  const stateDisplayName = 'Nevada'

  const cityData = {
    population: '330,000+',
    businesses: '10,000+',
    industries: '10+',
    verifiedLocations: '220-360'
  }

  const [activeUsers, setActiveUsers] = useState(24)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => Math.max(18, Math.min(36, prev + (Math.floor(Math.random() * 3) - 1))))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Header />
      <div className="min-h-screen bg-warm-white">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-stone">
              <Link href="/" className="hover:text-navy">Home</Link>
              <span>/</span>
              <Link href="/vending-leads" className="hover:text-navy">Vending Leads</Link>
              <span>/</span>
              <Link href={`/vending-leads/${stateDisplayName.toLowerCase()}`} className="hover:text-navy">{stateDisplayName}</Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{cityDisplayName}</span>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mt-6 sm:mt-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto mb-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-chocolate">
                    <span className="font-bold text-coral">{activeUsers}</span> people are choosing plans right now
                  </span>
                </div>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 leading-tight">
                Vending Machine Locations in <span className="text-navy">{cityDisplayName}, {stateDisplayName}</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-xl md:text-2xl text-stone mb-8 max-w-4xl mx-auto leading-relaxed">
                Get pre-qualified vending machine locations across Henderson’s offices, healthcare, logistics and retail sites.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }} className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">Get Started</button>
                <Link href="/hot-leads" className="w-full sm:w-auto bg-transparent text-chocolate border-2 border-chocolate px-8 py-3 rounded-lg font-semibold hover:bg-chocolate hover:text-white transition-colors">View Hot Leads →</Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center"><div className="text-2xl font-bold text-navy">{cityData.population}</div><div className="text-sm text-stone">Population</div></div>
                <div className="text-center"><div className="text-2xl font-bold text-navy">{cityData.businesses}</div><div className="text-sm text-stone">Businesses</div></div>
                <div className="text-center"><div className="text-2xl font-bold text-navy">{cityData.industries}</div><div className="text-sm text-stone">Industries</div></div>
                <div className="text-center"><div className="text-2xl font-bold text-navy">{cityData.verifiedLocations}</div><div className="text-sm text-stone">Verified Locations</div></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">Get Access to Qualified Vending Machine Locations in {cityDisplayName}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="text-lg text-stone max-w-3xl mx-auto">Choose the perfect plan for your vending machine business needs and start accessing qualified locations today.</motion.p>
            </div>
            <PricingTable />
          </div>
        </section>

        {/* Business Landscape */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">Business Landscape in {cityDisplayName}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="text-lg text-stone max-w-3xl mx-auto">Discover the diverse industries and business opportunities that make {cityDisplayName} an ideal market for vending machines.</motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-green-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md">
                <div className="text-green-600 mb-4"><ShieldCheckIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Healthcare & Clinics</h3>
                <p className="text-stone leading-relaxed">Regional healthcare systems and outpatient clinics with steady staff and visitor flow.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }} className="bg-orange-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md">
                <div className="text-orange-600 mb-4"><TruckIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Logistics & Industrial</h3>
                <p className="text-stone leading-relaxed">Proximity to Las Vegas logistics and distribution corridors drives shift-based demand.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="bg-indigo-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md">
                <div className="text-indigo-600 mb-4"><AcademicCapIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Education</h3>
                <p className="text-stone leading-relaxed">Campuses and schools with consistent student and staff populations.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="bg-purple-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md">
                <div className="text-purple-600 mb-4"><CurrencyDollarIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Offices & Professional</h3>
                <p className="text-stone leading-relaxed">Office clusters and civic buildings provide captive weekday audiences.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="bg-red-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md">
                <div className="text-red-600 mb-4"><SparklesIcon className="w-12 h-12" /></div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Retail & Hospitality</h3>
                <p className="text-stone leading-relaxed">Shopping, hotels, and entertainment venues support reliable vending volume.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hot Leads */}
        <HotLeads />

        {/* Course */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">Learn the Vending Machine Business</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="text-lg text-stone max-w-3xl mx-auto">Master the fundamentals of vending machine operations and maximize your success in {cityDisplayName}.</motion.p>
            </div>
            <VendingCourse />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">Frequently Asked Questions</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="text-lg text-chocolate/70 leading-relaxed">Everything you need to know about vending machine opportunities in {cityDisplayName}.</motion.p>
            </div>
            <div className="space-y-6">
              {[
                { q: 'Why Henderson?', a: 'Growing office clusters, logistics adjacency, and retail/hospitality demand create strong vending opportunities.' },
                { q: 'Delivery timeline?', a: 'We typically deliver within 3–5 business days with verified business details and contacts.' },
                { q: 'Great first placements?', a: 'Warehouses, clinics, hotels, and office parks are strong first targets.' }
              ].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: idx * 0.1 }} viewport={{ once: true }} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
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


