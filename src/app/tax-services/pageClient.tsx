'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { MapPinIcon, ChevronDownIcon, BuildingOffice2Icon, CheckCircleIcon, UserIcon, PhoneIcon, EnvelopeIcon, UsersIcon, CalculatorIcon, DocumentTextIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import states from '@/data/states'

export default function TaxServicesDirectory() {
  const [expandedStates, setExpandedStates] = useState<string[]>([])
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const toggleState = (stateSlug: string) => {
    setExpandedStates(prev => 
      prev.includes(stateSlug) 
        ? prev.filter(s => s !== stateSlug)
        : [...prev, stateSlug]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xjgkdgpo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setFormSubmitted(true)
        setShowSuccessModal(true)
        form.reset()
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setShowSuccessModal(false)
  }

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section with Form */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-xs sm:text-sm font-semibold tracking-wide text-navy uppercase"
              >
                The #1 marketplace for buying vending locations
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold tracking-tight text-chocolate sm:text-4xl lg:text-5xl"
              >
                Tax & Bookkeeping Services for Vending Machine Owners
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg sm:text-xl text-chocolate/70 leading-relaxed"
              >
                Expert tax preparation and bookkeeping services designed specifically for vending machine business owners. 
                Get professional help with your taxes, accounting, and financial management.
              </motion.p>

              {/* Benefits List */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 space-y-4"
              >
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Specialized knowledge of vending machine tax deductions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Monthly bookkeeping and financial tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Year-round tax planning and consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Business structure optimization</span>
                </li>
              </motion.ul>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-warm-white p-8 rounded-2xl shadow-xl border border-stone/20"
            >
              {formSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-playfair font-bold text-navy mb-2">
                    Request Received!
                  </h3>
                  <p className="text-charcoal/80">
                    We'll connect you with tax and bookkeeping professionals within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-playfair font-bold text-navy mb-2 text-center">
                    Get Tax & Bookkeeping Help
                  </h3>
                  <p className="text-charcoal/70 mb-6 text-center">
                    Fill out the form below and we'll connect you with professionals in your area.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    data-ga-event="lead_form_submit"
                    data-ga-category="form"
                    data-ga-label="tax-services"
                  >
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Zip Code Field */}
                    <div>
                      <label htmlFor="zipcode" className="block text-sm font-medium text-charcoal mb-1.5">
                        Zip Code *
                      </label>
                      <div className="relative">
                        <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                        <input
                          type="text"
                          id="zipcode"
                          name="zipcode"
                          required
                          pattern="[0-9]{5}"
                          maxLength={5}
                          className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all"
                          placeholder="12345"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-navy hover:bg-navy/90 text-white py-3.5 px-6 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get Professional Help'}
                    </button>

                    <p className="text-xs text-charcoal/60 text-center mt-3">
                      By submitting, you agree to be contacted by tax and bookkeeping professionals in your area.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <section className="bg-warm-white border-t border-gray-200 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate"
            >
              Why Vending Machine Owners Need Specialized Tax Help
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
            >
              <CalculatorIcon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Maximize Deductions</h3>
              <p className="text-charcoal/80">
                Expert knowledge of vending machine-specific tax deductions including equipment depreciation, 
                route expenses, product costs, and location fees.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
            >
              <DocumentTextIcon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Stay Compliant</h3>
              <p className="text-charcoal/80">
                Ensure your vending business meets all tax obligations and filing requirements, 
                avoiding costly penalties and audits.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
            >
              <CurrencyDollarIcon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Financial Tracking</h3>
              <p className="text-charcoal/80">
                Professional bookkeeping services help you track revenue, expenses, and profitability 
                across all your vending locations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* States Directory */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center"
            >
              Find Tax & Bookkeeping Services by Location
            </motion.h2>
            
            <div className="grid gap-4">
              {states.map((state, index) => {
                // Only show cities for FL, TX, CA tax services
                const statesWithTaxServices = ['florida', 'texas', 'california']
                const hasCities = statesWithTaxServices.includes(state.slug) && state.cities && state.cities.length > 0
                const isExpanded = expandedStates.includes(state.slug)
                
                return (
                  <motion.div
                    key={state.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-stone/20"
                  >
                    <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <MapPinIcon className="h-5 w-5 text-coral flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-navy">{state.name}</h3>
                          <p className="text-sm text-stone mt-0.5">
                            {hasCities ? `${state.cities.length} Cities Available` : 'Statewide Service Coverage'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {hasCities && (
                          <button
                            onClick={() => toggleState(state.slug)}
                            className="px-4 py-2 border border-navy text-navy rounded-lg hover:bg-navy/5 transition-colors text-sm font-medium"
                          >
                            {isExpanded ? 'Hide Cities' : 'Show Cities'}
                          </button>
                        )}
                        {hasCities && (
                          <Link
                            href={`/tax-services/${state.slug}`}
                            className="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors text-sm font-medium"
                          >
                            View State
                          </Link>
                        )}
                      </div>
                    </div>
                    
                    {/* Cities Dropdown */}
                    {hasCities && isExpanded && (
                      <div className="px-6 pb-4 border-t border-stone/20 bg-gray-50">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4">
                          {state.cities.map((city: { name: string; slug: string }) => (
                            <Link
                              key={city.slug}
                              href={`/tax-services/${city.slug}`}
                              className="px-3 py-2 text-sm text-navy hover:bg-white hover:shadow-sm rounded-lg transition-all border border-transparent hover:border-stone/20"
                            >
                              {city.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-12 bg-navy rounded-lg p-8 text-center"
            >
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                Ready to Get Your Taxes in Order?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Browse tax and bookkeeping professionals by location above or contact us to find the perfect financial partner for your vending business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate"
            >
              How It Works
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-coral">1</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Find Your Area</h3>
              <p className="text-charcoal/80">
                Browse tax and bookkeeping professionals by state and city to find experts in your location.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-coral">2</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Review Services</h3>
              <p className="text-charcoal/80">
                Compare verified tax and bookkeeping professionals, their services, and expertise with vending businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-coral">3</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Connect & Get Help</h3>
              <p className="text-charcoal/80">
                Contact professionals directly to discuss your tax and bookkeeping needs for your vending business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                Why do vending machine owners need specialized tax help?
              </h3>
              <p className="text-charcoal/80">
                Vending machine businesses have unique tax considerations including equipment depreciation, 
                route expenses, location fees, product inventory, and multi-state operations. Specialized 
                tax professionals understand these nuances and can help maximize deductions while ensuring compliance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                What bookkeeping services do vending businesses need?
              </h3>
              <p className="text-charcoal/80">
                Vending businesses benefit from monthly bookkeeping that tracks revenue by location, 
                product costs, route expenses, equipment maintenance, location fees, and profitability 
                analysis. This helps owners make informed business decisions and simplifies tax preparation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                What tax deductions are available for vending machine businesses?
              </h3>
              <p className="text-charcoal/80">
                Common deductions include equipment depreciation, vehicle expenses, product inventory costs, 
                location fees, maintenance and repairs, insurance, licenses, professional fees, and home 
                office expenses if applicable. A tax professional can help identify all eligible deductions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                How much does tax and bookkeeping services cost?
              </h3>
              <p className="text-charcoal/80">
                Costs vary based on the size of your business, number of locations, and services needed. 
                Most professionals offer free consultations to discuss your needs and provide a customized 
                quote. Monthly bookkeeping typically ranges from $200-$1,000+ depending on complexity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                When should I contact a tax professional?
              </h3>
              <p className="text-charcoal/80">
                It's best to connect with a tax professional year-round, not just during tax season. 
                Early engagement allows for tax planning, quarterly estimate optimization, business structure 
                review, and proactive financial management that can save money throughout the year.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                What should I bring to my first tax consultation?
              </h3>
              <p className="text-charcoal/80">
                Bring your previous tax returns, financial statements, bank statements, expense receipts, 
                equipment purchase records, location agreements, and any questions about your business structure 
                or operations. The more information you provide, the better the professional can assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ZipCodeModalWrapper />

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-stone hover:text-charcoal transition-colors"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <CheckCircleIcon className="h-10 w-10 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-playfair font-bold text-navy mb-3">
                Thank You!
              </h3>
              
              <p className="text-lg text-charcoal/80 mb-2">
                Your request has been received.
              </p>
              
              <p className="text-charcoal/70 mb-6">
                We'll be reaching out to you within 24 hours to connect you with tax and bookkeeping professionals in your area.
              </p>

              <button
                onClick={closeModal}
                className="w-full bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200"
              >
                Got It
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  )
}

