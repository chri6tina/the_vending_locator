'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function VendingMachineServicesPage() {

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
                Find the Best<br />
                <span className="text-coral">Vending Machine Services</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
                We connect businesses with top-rated vending machine companies. 
                <strong>100% FREE service</strong> - we get paid by vendors, not you.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">500+</div>
                  <div className="text-sm">Vetted Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">50+</div>
                  <div className="text-sm">Major Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">24hrs</div>
                  <div className="text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">100%</div>
                  <div className="text-sm">Free Service</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/vending-leads"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  Browse Vending Leads
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
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
                How Our Free Service Works
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Getting started is simple and completely free. We handle the hard work of finding and vetting vendors.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: '1',
                  title: 'Tell Us About Your Business',
                  description: 'Share your business type, location, and vending needs. Takes just 2 minutes.',
                  icon: '📝'
                },
                {
                  step: '2',
                  title: 'We Match You with Top Vendors',
                  description: 'Our experts analyze your needs and connect you with the best 3-5 companies in your area.',
                  icon: '🔍'
                },
                {
                  step: '3',
                  title: 'Get Free Quotes & Choose',
                  description: 'Receive detailed proposals from qualified vendors. No obligation, no pressure.',
                  icon: '💬'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-coral text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{item.title}</h3>
                  <p className="text-stone leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
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
                Ready to Find Your Perfect Vending Partner?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
                Get matched with top vending companies in your area. 
                <strong>100% FREE</strong> - no cost, no obligation, no pressure.
              </p>
              <Link
                href="/contact"
                className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Get Started Now
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
