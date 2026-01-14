'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPinIcon, BuildingOffice2Icon, CheckCircleIcon, UserIcon, PhoneIcon, EnvelopeIcon, UsersIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function CoconutCreekFloridaVendingServicesPage() {
  const cityDisplayName = 'Coconut Creek';
  const stateDisplayName = 'Florida'
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // City pages don't show sub-cities
  const subCities: { name: string; slug: string }[] = [
    // Cities will be added here once pages are created
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Add state information to form submission
    formData.append('state', stateDisplayName)

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
              <Link href="/vending-services" className="hover:text-navy transition-colors">
                Vending Services
              </Link>
              <span>/</span>
              <Link href="/vending-services/florida" className="hover:text-navy transition-colors">
                Florida
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{cityDisplayName}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Column - Content */}
                <div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6 leading-tight"
                  >
                    Vending Machine Services in{' '}
                    <span className="text-navy">{cityDisplayName}, Florida</span>
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-stone mb-8 leading-relaxed"
                  >
                    Connect with professional vending machine operators serving {cityDisplayName}'s manufacturing facilities and industrial parks. Get free installation, regular stocking, and full maintenance—at no cost to your business.
                  </motion.p>

                  {/* Trust Signals */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 gap-4 mb-8"
                  >
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-chocolate">No Upfront Costs</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-medium text-chocolate">Verified Operators</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <ClockIcon className="h-5 w-5 text-purple-600" />
                        <span className="text-sm font-medium text-chocolate">Quick Installation</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <MapPinIcon className="h-5 w-5 text-coral" />
                        <span className="text-sm font-medium text-chocolate">Local Providers</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Benefits List */}
                  <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="space-y-3"
                  >
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Free machine installation and setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Regular restocking and product management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Full maintenance and repair services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Professional service and support</span>
                    </li>
                  </motion.ul>
                </div>

                {/* Right Column - Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-cream p-8 rounded-2xl shadow-xl border border-stone/20"
                >
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-playfair font-bold text-navy mb-2">
                        Request Received!
                      </h3>
                      <p className="text-charcoal/80">
                        We'll connect you with local {cityDisplayName} vending providers within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-playfair font-bold text-navy mb-2 text-center">
                        Get Vending Services in {cityDisplayName}, FL
                      </h3>
                      <p className="text-charcoal/70 mb-6 text-center text-sm">
                        Fill out the form and we'll connect you with providers in your area.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
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
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all text-sm"
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
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all text-sm"
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
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all text-sm"
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
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all appearance-none bg-white text-sm"
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
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all text-sm"
                              placeholder="12345"
                            />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                        >
                          {isSubmitting ? 'Submitting...' : 'Get Free Services'}
                        </button>

                        <p className="text-xs text-charcoal/60 text-center mt-3">
                          By submitting, you agree to be contacted by vending service providers in {cityDisplayName}.
                        </p>
                      </form>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help Process Section */}
        <section className="py-16 bg-gradient-to-b from-white to-warm-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-playfair font-bold text-chocolate mb-4">
                  How We Help {stateDisplayName} Businesses Find the Best Vending Partners
                </h2>
                <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                  Our proven process connects you with qualified, professional vending operators in {cityDisplayName}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-3">Submit Your Info</h3>
                    <p className="text-charcoal/80 text-sm">
                      Tell us about your {stateDisplayName} business location, number of employees, and vending needs.
                    </p>
                  </div>
                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-coral/30 -translate-x-1/2" style={{ width: 'calc(100% - 4rem)' }}></div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-3">We Match You</h3>
                    <p className="text-charcoal/80 text-sm">
                      We connect you with 2-3 pre-screened vending operators who serve your area in {cityDisplayName}.
                    </p>
                  </div>
                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-coral/30 -translate-x-1/2" style={{ width: 'calc(100% - 4rem)' }}></div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-3">Compare Proposals</h3>
                    <p className="text-charcoal/80 text-sm">
                      Review proposals and product options from multiple providers at no obligation.
                    </p>
                  </div>
                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-coral/30 -translate-x-1/2" style={{ width: 'calc(100% - 4rem)' }}></div>
                </motion.div>

                {/* Step 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-3">Get Installed</h3>
                    <p className="text-charcoal/80 text-sm">
                      Choose your preferred provider and enjoy free installation, stocking, and ongoing service.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Process Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 bg-navy/5 rounded-2xl p-8 border border-navy/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-navy mb-2">100%</div>
                    <div className="text-charcoal/70 text-sm">Free Service</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-navy mb-2">24hrs</div>
                    <div className="text-charcoal/70 text-sm">Response Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-navy mb-2">2-3</div>
                    <div className="text-charcoal/70 text-sm">Provider Options</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cities Section - Only show if cities exist */}
        {subCities.length > 0 && (
          <section className="py-16 bg-warm-white border-t border-gray-200">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl font-playfair font-bold text-chocolate mb-4 text-center"
                >
                  Vending Services by City in {cityDisplayName}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg text-chocolate/70 mb-12 text-center max-w-3xl mx-auto"
                >
                  Browse professional vending service providers by city in {cityDisplayName}
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subCities.map((city, index) => (
                    <motion.div
                      key={city.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link
                        href={`/vending-services/${city.slug}`}
                        className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-stone/20 hover:border-coral/30 group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <MapPinIcon className="h-6 w-6 text-coral group-hover:scale-110 transition-transform" />
                          <h3 className="text-xl font-semibold text-navy group-hover:text-coral transition-colors">
                            {city.name}
                          </h3>
                        </div>
                        <p className="text-charcoal/70 text-sm">
                          Find vending service providers in {city.name}
                        </p>
                        <div className="mt-4 text-coral font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
                          View Services →
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* What to Expect Section */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-playfair font-bold text-chocolate mb-4">
                  What to Expect When Getting Vending Services in {cityDisplayName}
                </h2>
                <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                  Understanding the complete vending machine partnership process for {stateDisplayName} businesses
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Site Evaluation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-warm-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Free Site Evaluation</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        A vending professional will visit your {stateDisplayName} location to assess foot traffic, available space, and employee preferences. They'll recommend optimal machine types and placement locations to maximize usage and satisfaction.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Machine Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="bg-warm-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BuildingOffice2Icon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Customized Machine Selection</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Choose from modern vending machines offering snacks, beverages, healthy options, or combination machines. Operators provide state-of-the-art equipment with cashless payment systems and real-time inventory tracking.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Installation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-warm-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Professional Installation</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Operators handle delivery, installation, setup, and initial stocking at no charge. Machines are installed during non-business hours to minimize disruption. All electrical connections and placement are professionally managed.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Ongoing Service */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-warm-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Reliable Ongoing Service</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Regular restocking visits ensure machines stay full and products stay fresh. Maintenance, repairs, and product rotation are included. Most {cityDisplayName} operators provide 24/7 support for any issues.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Product Variety */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-warm-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShieldCheckIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Wide Product Selection</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Modern vending machines offer national brands, local favorites, healthy snacks, energy drinks, coffee, fresh food, and more. Operators work with you to customize product mix based on employee feedback and preferences.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Payment Options */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-warm-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UsersIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Modern Payment Systems</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Today's vending machines accept cash, credit/debit cards, mobile payments (Apple Pay, Google Pay), and contactless payments. Some operators also offer employee badge integration and account-based purchasing for added convenience.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-warm-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-chocolate mb-12 text-center"
              >
                Why Businesses in {cityDisplayName} Choose Our Vending Partners
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BuildingOffice2Icon className="h-8 w-8 text-coral" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Zero Risk</h3>
                  <p className="text-charcoal/80">
                    No equipment costs, no installation fees, no ongoing expenses. Providers handle everything at their own cost.
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
                    <UsersIcon className="h-8 w-8 text-coral" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Employee Satisfaction</h3>
                  <p className="text-charcoal/80">
                    Keep your team happy with convenient access to snacks, drinks, and essentials without leaving the building.
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
                    <ShieldCheckIcon className="h-8 w-8 text-coral" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Professional Service</h3>
                  <p className="text-charcoal/80">
                    Work with licensed, insured operators who provide reliable service and quality products.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-chocolate mb-8 text-center"
              >
                Vending Services in {cityDisplayName} - FAQ
              </motion.h2>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    How much does it cost to get vending machines in {cityDisplayName}?
                  </h3>
                  <p className="text-charcoal/80">
                    Nothing! Vending operators in {cityDisplayName} typically provide free installation, equipment, stocking, and maintenance. They earn revenue from machine sales, so there's no cost to your business.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    What types of businesses qualify for vending services in {cityDisplayName}?
                  </h3>
                  <p className="text-charcoal/80">
                    Most businesses with 25+ employees qualify, including offices, warehouses, manufacturing facilities, schools, hospitals, gyms, and apartment buildings in {cityDisplayName}.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    How quickly can vending machines be installed in {cityDisplayName}?
                  </h3>
                  <p className="text-charcoal/80">
                    Most {cityDisplayName} vending operators can complete installation within 1-2 weeks after an initial site evaluation. The process includes a free consultation, machine placement, installation, and initial stocking.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    What products can vending machines in {cityDisplayName} offer?
                  </h3>
                  <p className="text-charcoal/80">
                    {cityDisplayName} vending operators offer snacks, beverages (hot and cold), healthy options, fresh food, coffee, and specialty items. Product selection is customized based on your employee preferences and facility needs.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    Do I need a certain number of employees to qualify for vending services?
                  </h3>
                  <p className="text-charcoal/80">
                    Most vending operators in {cityDisplayName} prefer locations with at least 25-50 employees to ensure sufficient usage. However, high-traffic locations like gyms, hotels, or retail stores with visitor traffic may qualify with fewer employees.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    What happens if a vending machine breaks down or runs out of products?
                  </h3>
                  <p className="text-charcoal/80">
                    {cityDisplayName} vending operators provide regular service visits to restock products and perform preventive maintenance. If a machine malfunctions, most providers offer same-day or next-day repair service at no cost to your business. You'll have a direct contact number for any issues.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    Can employees request specific products or brands?
                  </h3>
                  <p className="text-charcoal/80">
                    Yes! Professional vending operators in {cityDisplayName} regularly survey employees and adjust product offerings based on preferences. You can request specific brands, healthy options, dietary-specific items, or local products to keep your team satisfied.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    How much space do vending machines require?
                  </h3>
                  <p className="text-charcoal/80">
                    Standard vending machines typically require 3-4 feet of width and 2-3 feet of depth, plus clearance for service access. Operators can recommend compact machines for smaller spaces or combination units to maximize product variety while minimizing footprint in your {stateDisplayName} facility.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    Are there any contracts or long-term commitments required?
                  </h3>
                  <p className="text-charcoal/80">
                    Contract terms vary by operator, but most {cityDisplayName} vending providers offer flexible agreements. Many use month-to-month or short-term contracts (6-12 months) with easy cancellation terms. The goal is a mutually beneficial partnership, not a binding obligation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    What types of vending machines are available in {cityDisplayName}?
                  </h3>
                  <p className="text-charcoal/80">
                    {stateDisplayName} businesses can choose from snack vending machines, cold beverage coolers, coffee and hot beverage machines, combination snack/drink machines, healthy vending options, fresh food machines, and micro-markets for larger facilities. All equipment is modern with digital displays and cashless payment capabilities.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    Will having vending machines increase our utility costs?
                  </h3>
                  <p className="text-charcoal/80">
                    Modern vending machines are energy-efficient and typically use LED lighting and energy-saving compressors. The electricity cost is minimal, usually $10-30 per month per machine. Some {stateDisplayName} operators even cover utility costs as part of their service agreement.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold text-white mb-6">
                Ready to Add Vending Services to Your {stateDisplayName} Business?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join hundreds of {stateDisplayName} businesses enjoying convenient, no-cost vending solutions.
              </p>
              <a
                href="#hero-form"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="inline-flex items-center px-8 py-4 bg-coral text-white font-semibold rounded-lg hover:bg-coral/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </div>

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
    </>
  )
}

