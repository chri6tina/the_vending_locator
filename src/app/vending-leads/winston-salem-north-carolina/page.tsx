'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import { motion } from 'framer-motion'

export default function WinstonSalemVendingLeadsPage() {
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
                Vending Machine Locations<br />
                <span className="text-coral">in Winston-Salem, North Carolina</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
                Get pre-qualified vending machine locations in Winston-Salem's diverse and growing business economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">200+</div>
                  <div className="text-sm">Verified Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">4.9/5</div>
                  <div className="text-sm">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">35,000+</div>
                  <div className="text-sm">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">5</div>
                  <div className="text-sm">Major Industries</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/pricing"
                  className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  View Pricing Plans
                </Link>
                <Link 
                  href="/hot-leads"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  Get Hot Leads
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Table Section */}
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
                Choose Your Plan
              </h2>
              <p className="text-lg text-stone max-w-2xl mx-auto">
                Get access to qualified vending machine locations in Winston-Salem with flexible pricing options. 
                No long-term contracts, just results that help you grow your business.
              </p>
            </motion.div>
            
            <PricingTable />
          </div>
        </section>

        {/* Business Landscape Section */}
        <section className="py-16 bg-warm-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                Winston-Salem Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Winston-Salem is a diverse and growing business hub in North Carolina, offering vending opportunities 
                across multiple thriving industries.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Healthcare',
                  description: 'Hospitals, medical centers, and healthcare facilities with 24/7 operations.',
                  icon: '🏥'
                },
                {
                  title: 'Technology',
                  description: 'Tech companies, startups, and innovation hubs with high employee density.',
                  icon: '💻'
                },
                {
                  title: 'Education',
                  description: 'Universities, colleges, and educational institutions with large student populations.',
                  icon: '🎓'
                },
                {
                  title: 'Retail & Shopping',
                  description: 'Shopping centers, malls, and retail establishments with high foot traffic.',
                  icon: '🛍️'
                },
                {
                  title: 'Manufacturing',
                  description: 'Industrial facilities and manufacturing plants with shift workers.',
                  icon: '🏭'
                },
                {
                  title: 'Government',
                  description: 'Federal and state government offices with stable operations.',
                  icon: '🏛️'
                }
              ].map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{industry.title}</h3>
                  <p className="text-stone leading-relaxed">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
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
                Winston-Salem by the Numbers
              </h2>
              <p className="text-lg text-stone max-w-2xl mx-auto">
                Key statistics that make Winston-Salem an excellent market for vending machine placement.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: '250,000', label: 'Population' },
                { number: '35,000+', label: 'Businesses' },
                { number: '5', label: 'Major Industries' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-coral mb-2">{stat.number}</div>
                  <div className="text-lg text-stone">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "What types of businesses are best for vending machines in Winston-Salem?",
                  answer: "Winston-Salem offers diverse opportunities including healthcare facilities, corporate offices, retail centers, and educational institutions. The diverse business environment and growing population provide excellent placement opportunities."
                },
                {
                  question: "How competitive is the vending machine market in Winston-Salem?",
                  answer: "Winston-Salem has a growing vending presence, but there's still significant opportunity for expansion, especially in new business developments and healthcare facilities."
                },
                {
                  question: "What are the peak business hours for vending in Winston-Salem?",
                  answer: "Winston-Salem businesses typically operate from 8 AM to 6 PM, with peak vending activity during lunch hours (12 PM - 2 PM) and afternoon breaks (3 PM - 4 PM)."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-charcoal mb-3">{faq.question}</h3>
                  <p className="text-stone leading-relaxed">{faq.answer}</p>
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