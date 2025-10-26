'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { MapPinIcon, ChevronDownIcon, BuildingOffice2Icon, CheckCircleIcon, UserIcon, PhoneIcon, EnvelopeIcon, UsersIcon } from '@heroicons/react/24/outline'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import states from '@/data/states'

export default function VendingServicesDirectory() {
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
      const response = await fetch('https://formspree.io/f/xjkpkrak', {
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
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold tracking-tight text-chocolate sm:text-4xl lg:text-5xl"
              >
                Get Vending Machines for Your Business
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg sm:text-xl text-chocolate/70 leading-relaxed"
              >
                Looking to add vending machines to your break room, office, or facility? 
                Connect with professional vending service providers in your area—at no cost to you.
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
                  <span className="text-charcoal/80">Free installation, stocking, and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">No upfront costs or equipment fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Local, professional operators</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Quick installation (1-2 weeks)</span>
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
                    We'll connect you with local vending providers within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-playfair font-bold text-navy mb-2 text-center">
                    Get Free Vending Services
                  </h3>
                  <p className="text-charcoal/70 mb-6 text-center">
                    Fill out the form below and we'll connect you with providers in your area.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
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

                    {/* Number of Employees Field */}
                    <div>
                      <label htmlFor="employees" className="block text-sm font-medium text-charcoal mb-1.5">
                        Number of Employees *
                      </label>
                      <div className="relative">
                        <UsersIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                        <select
                          id="employees"
                          name="employees"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all appearance-none bg-white"
                        >
                          <option value="">Select range...</option>
                          <option value="1-25">1-25 employees</option>
                          <option value="26-50">26-50 employees</option>
                          <option value="51-100">51-100 employees</option>
                          <option value="101-250">101-250 employees</option>
                          <option value="251-500">251-500 employees</option>
                          <option value="500+">500+ employees</option>
                        </select>
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
                      {isSubmitting ? 'Submitting...' : 'Get Free Services'}
                    </button>

                    <p className="text-xs text-charcoal/60 text-center mt-3">
                      By submitting, you agree to be contacted by vending service providers in your area.
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
              Benefits of Having Vending Machines
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
              <BuildingOffice2Icon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">No Upfront Costs</h3>
              <p className="text-charcoal/80">
                Vending operators typically install, stock, and maintain machines at no cost to your business. They handle everything.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
            >
              <CheckCircleIcon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Employee Convenience</h3>
              <p className="text-charcoal/80">
                Keep your staff happy with 24/7 access to snacks, drinks, and healthy options right in your building.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
            >
              <MapPinIcon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Local Providers</h3>
              <p className="text-charcoal/80">
                Connect with vetted, local vending operators who know your area and can provide responsive service.
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
              Find Vending Services in Your Area
            </motion.h2>
            
            <div className="grid gap-4">
              {states.map((state, index) => (
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
                        <p className="text-sm text-stone mt-0.5">Statewide Service Coverage</p>
                      </div>
                    </div>
                    <Link
                      href={`/vending-services/${state.slug}`}
                      className="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors text-sm font-medium"
                    >
                      View State
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action for Service Providers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-12 bg-navy rounded-lg p-8 text-center"
            >
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                Ready to Add Vending to Your Business?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Browse local vending service providers above or contact us to find the perfect vending partner for your location.
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
                Browse service providers by state and city to find operators in your location.
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
              <h3 className="text-xl font-semibold text-navy mb-3">Review Providers</h3>
              <p className="text-charcoal/80">
                Compare verified vending service providers, their offerings, and customer reviews.
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
              <h3 className="text-xl font-semibold text-navy mb-3">Connect & Grow</h3>
              <p className="text-charcoal/80">
                Contact service providers directly to discuss vending solutions for your business.
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
                What does it cost to get vending machines at my business?
              </h3>
              <p className="text-charcoal/80">
                Typically nothing! Most vending operators install, stock, and maintain machines at no cost to you. They earn revenue from sales and often offer commission sharing. There are no upfront fees or equipment costs for your business.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                How do I get vending machines installed at my location?
              </h3>
              <p className="text-charcoal/80">
                Simply browse service providers in your state and city, then contact them directly. Most providers offer free site evaluations to assess your location's traffic and recommend the best vending solutions for your needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                Is there a cost to use this directory?
              </h3>
              <p className="text-charcoal/80">
                Absolutely not! Browsing and contacting vending service providers is completely free for business owners and property managers. This is a free resource to help you find the right vending partner.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                How are service providers verified?
              </h3>
              <p className="text-charcoal/80">
                We verify business credentials, licensing, insurance coverage, and operating history for all listed service providers. Only qualified, professional operators are included in our directory.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                What types of businesses can get vending machines?
              </h3>
              <p className="text-charcoal/80">
                Almost any business! Offices, schools, hospitals, gyms, manufacturing facilities, warehouses, apartment buildings, hotels, and retail locations all benefit from vending services. If you have employees or regular visitors, you likely qualify.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                How quickly can vending machines be installed?
              </h3>
              <p className="text-charcoal/80">
                Most vending operators can install machines within 1-2 weeks after an initial site evaluation. The process is quick: site visit, machine selection, installation, and stocking—all handled by the operator.
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
                We'll be reaching out to you within 24 hours to connect you with the best vending service providers in your area.
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

