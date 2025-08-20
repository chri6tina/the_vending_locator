'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function JacksonvilleVendingServicesPage() {
  const vendingCompanies = [
    {
      name: 'Jacksonville Vending Solutions',
      rating: '4.8/5',
      specialties: ['Office Buildings', 'Healthcare Facilities', 'Manufacturing'],
      contact: 'contact@jaxvending.com',
      phone: '(904) 555-0123',
      description: 'Local Jacksonville vending company serving businesses for over 15 years with reliable service and competitive pricing.'
    },
    {
      name: 'First Coast Vending Co.',
      rating: '4.9/5',
      specialties: ['Retail Centers', 'Schools', 'Government Buildings'],
      contact: 'info@firstcoastvending.com',
      phone: '(904) 555-0456',
      description: 'Family-owned business providing personalized vending solutions throughout the Jacksonville metro area.'
    },
    {
      name: 'Northeast Florida Vending',
      rating: '4.7/5',
      specialties: ['Corporate Offices', 'Hotels', 'Apartment Complexes'],
      contact: 'sales@neflvending.com',
      phone: '(904) 555-0789',
      description: 'Comprehensive vending services with 24/7 support and modern payment systems.'
    },
    {
      name: 'Jacksonville Business Vending',
      rating: '4.6/5',
      specialties: ['Small Businesses', 'Medical Offices', 'Auto Dealerships'],
      contact: 'hello@jaxbusinessvending.com',
      phone: '(904) 555-0321',
      description: 'Specializing in small to medium business vending solutions with flexible contracts.'
    },
    {
      name: 'Coastal Vending Services',
      rating: '4.8/5',
      specialties: ['Beach Areas', 'Tourism', 'Entertainment Venues'],
      contact: 'info@coastalvendingjax.com',
      phone: '(904) 555-0654',
      description: 'Premium vending services for high-traffic tourist and entertainment locations.'
    }
  ]

  const businessTypes = [
    {
      type: 'Office Buildings',
      description: 'Corporate headquarters, professional offices, and business centers throughout Jacksonville.',
      icon: '🏢',
      benefits: ['Employee convenience', 'Increased productivity', 'Professional appearance']
    },
    {
      type: 'Healthcare Facilities',
      description: 'Hospitals, medical centers, and healthcare offices across the city.',
      icon: '🏥',
      benefits: ['24/7 availability', 'Staff and patient convenience', 'Revenue generation']
    },
    {
      type: 'Manufacturing & Industrial',
      description: 'Manufacturing plants, warehouses, and industrial facilities in Jacksonville.',
      icon: '🏭',
      benefits: ['Shift worker support', 'Safety compliance', 'Employee satisfaction']
    },
    {
      type: 'Retail & Shopping Centers',
      description: 'Malls, shopping centers, and retail establishments throughout the area.',
      icon: '🛍️',
      benefits: ['Customer convenience', 'Extended shopping time', 'Additional revenue']
    },
    {
      type: 'Educational Institutions',
      description: 'Universities, colleges, and schools in the Jacksonville area.',
      icon: '🎓',
      benefits: ['Student convenience', 'Campus revenue', 'Modern facilities']
    },
    {
      type: 'Government & Municipal',
      description: 'City offices, courthouses, and government buildings.',
      icon: '🏛️',
      benefits: ['Public service', 'Revenue generation', 'Modern amenities']
    }
  ]

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
                <span className="text-coral">Vending Machine Services</span><br />
                <span className="text-2xl md:text-3xl">in Jacksonville, Florida</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
                We connect Jacksonville businesses with top-rated vending machine companies. 
                <strong>100% FREE service</strong> - we get paid by vendors, not you.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">5</div>
                  <div className="text-sm">Top Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">949K+</div>
                  <div className="text-sm">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">24hrs</div>
                  <div className="text-sm">Response Time</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#get-started"
                  className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  Get Free Quotes
                </Link>
                <Link
                  href="#companies"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  View Companies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Jacksonville Business Landscape */}
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
                Jacksonville Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Jacksonville is Florida's largest city by population and a major business hub. 
                With diverse industries and growing economy, vending services are in high demand.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {businessTypes.map((business, index) => (
                <motion.div
                  key={business.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-warm-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="text-4xl mb-4">{business.icon}</div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{business.type}</h3>
                  <p className="text-stone leading-relaxed mb-4">{business.description}</p>
                  <ul className="space-y-2">
                    {business.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-stone flex items-center">
                        <span className="text-coral mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Vending Companies */}
        <section id="companies" className="py-16 bg-warm-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                Top Vending Companies in Jacksonville
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                We've pre-screened and vetted these companies for quality, reliability, and customer satisfaction. 
                All are ready to serve Jacksonville businesses.
              </p>
            </motion.div>

            <div className="space-y-6 max-w-5xl mx-auto">
              {vendingCompanies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-xl font-semibold text-charcoal">{company.name}</h3>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {company.rating}
                        </span>
                      </div>
                      <p className="text-stone mb-3">{company.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {company.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-stone">
                        <div>
                          <strong>Email:</strong> {company.contact}
                        </div>
                        <div>
                          <strong>Phone:</strong> {company.phone}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Link
                        href="/contact"
                        className="inline-block bg-coral hover:bg-coral/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                  description: 'Our experts analyze your needs and connect you with the best 3-5 companies in Jacksonville.',
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

        {/* Get Started Form */}
        <section id="get-started" className="py-16 bg-gradient-to-r from-navy to-charcoal text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Ready to Find Your Perfect Vending Partner?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
                Get matched with top vending companies in Jacksonville. 
                <strong>100% FREE</strong> - no cost, no obligation, no pressure.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20"
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Business Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-coral"
                        placeholder="Your Business Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Contact Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-coral"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-coral"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-coral"
                        placeholder="(904) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Business Type *</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-coral"
                    >
                      <option value="">Select Business Type</option>
                      <option value="office">Office Building</option>
                      <option value="healthcare">Healthcare Facility</option>
                      <option value="manufacturing">Manufacturing/Industrial</option>
                      <option value="retail">Retail/Shopping Center</option>
                      <option value="education">Educational Institution</option>
                      <option value="government">Government Building</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Vending Needs *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-coral"
                      placeholder="Describe your vending needs, number of machines, preferred products, etc."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                    >
                      Get Free Quotes from Top Vendors
                    </button>
                    <p className="text-sm text-white/70 mt-3">
                      We'll respond within 24 hours with your personalized vendor matches.
                    </p>
                  </div>
                </form>
              </motion.div>
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
                  question: "Is this service really free?",
                  answer: "Yes, 100% free! We get paid by the vending companies when they secure new clients, not by you. There are no hidden fees, charges, or obligations."
                },
                {
                  question: "How quickly will I get matched with vendors?",
                  answer: "We typically respond within 24 hours with your personalized vendor matches. The entire process from initial contact to receiving quotes usually takes 2-3 business days."
                },
                {
                  question: "Are these vending companies pre-screened?",
                  answer: "Absolutely. Every company in our network has been vetted for quality, reliability, customer satisfaction, and financial stability. We only work with companies we trust."
                },
                {
                  question: "What if I'm not satisfied with the vendors?",
                  answer: "No problem! You're under no obligation to work with any vendor we recommend. We can also provide additional options or help you refine your requirements."
                },
                {
                  question: "Do you cover all of Jacksonville?",
                  answer: "Yes, we cover the entire Jacksonville metro area including Jacksonville Beach, Atlantic Beach, Neptune Beach, and surrounding communities like Orange Park and Fleming Island."
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
    </>
  )
}
