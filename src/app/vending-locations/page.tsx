'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function VendingLocationsPage() {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-warm-white via-cream to-warm-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-navy to-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                Vending Machine<br />
                <span className="text-coral">Locations</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
                Find the perfect locations for your vending machines across the United States
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/vending-leads"
                  className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  Browse All Locations
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  Get Help
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                Find Your Perfect Vending Locations
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Access our comprehensive database of vending machine locations across the United States. 
                From office buildings to healthcare facilities, find the locations that match your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-charcoal mb-3">Office Buildings</h3>
                <p className="text-stone mb-4">Corporate headquarters, professional offices, and business centers with high employee density.</p>
                <Link href="/vending-leads" className="text-coral hover:text-coral/80 font-semibold">
                  Browse Office Locations →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-charcoal mb-3">Healthcare Facilities</h3>
                <p className="text-stone mb-4">Hospitals, medical centers, and healthcare offices with 24/7 operations.</p>
                <Link href="/vending-leads" className="text-coral hover:text-coral/80 font-semibold">
                  Browse Healthcare Locations →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-charcoal mb-3">Manufacturing & Industrial</h3>
                <p className="text-stone mb-4">Manufacturing plants, warehouses, and industrial facilities with shift workers.</p>
                <Link href="/vending-leads" className="text-coral hover:text-coral/80 font-semibold">
                  Browse Industrial Locations →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-charcoal mb-3">Educational Institutions</h3>
                <p className="text-stone mb-4">Universities, colleges, and schools with large student populations.</p>
                <Link href="/vending-leads" className="text-coral hover:text-coral/80 font-semibold">
                  Browse Educational Locations →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-charcoal mb-3">Retail & Shopping Centers</h3>
                <p className="text-stone mb-4">Malls, shopping centers, and retail establishments with high customer traffic.</p>
                <Link href="/vending-leads" className="text-coral hover:text-coral/80 font-semibold">
                  Browse Retail Locations →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-charcoal mb-3">Government & Municipal</h3>
                <p className="text-stone mb-4">City offices, courthouses, and government buildings with stable operations.</p>
                <Link href="/vending-leads" className="text-coral hover:text-coral/80 font-semibold">
                  Browse Government Locations →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-navy to-charcoal text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Ready to Find Your Perfect Locations?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
                Access our comprehensive database of vending machine locations and start growing your business today.
              </p>
              <Link
                href="/vending-leads"
                className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Start Browsing Locations
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
}
