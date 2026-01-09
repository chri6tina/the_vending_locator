'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MapPinIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  UsersIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function AberdeenSouthDakotaVendingServicesPage() {
  const cityDisplayName = 'Aberdeen';
  const stateDisplayName = 'South Dakota'
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // City pages don't show sub-cities
  const subCities: { name: string; slug: string }[] = []

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
              <Link href="/vending-services/south-dakota" className="hover:text-navy transition-colors">
                South Dakota
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
                    <span className="text-navy">{cityDisplayName}, SD</span>
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-stone mb-8 leading-relaxed"
                  >
                    Equip your Aberdeen workplaces—from the 3M plant and the industrial corridor on Highway 12 to Sanford Aberdeen Medical Center and Northern State University—with reliable vending services. Our local partners handle every detail so your teams stay energized during long manufacturing shifts, hospital rotations, and campus events.
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
                        <span className="text-sm font-medium text-chocolate">Local, Vetted Operators</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <ClockIcon className="h-5 w-5 text-purple-600" />
                        <span className="text-sm font-medium text-chocolate">Fast Installation</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <MapPinIcon className="h-5 w-5 text-coral" />
                        <span className="text-sm font-medium text-chocolate">Brown County Coverage</span>
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
                      <span className="text-charcoal/80">Breakroom menus designed for Aberdeen's manufacturing and ag businesses.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Healthy, campus-friendly options for Northern State University and Presentation College students.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Telemetry-enabled machines that alert operators before popular items sell out.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Flexible service routes that extend to Groton, Frederick, and other Brown County communities.</span>
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
                        Get Vending Services in {cityDisplayName}, SD
                      </h3>
                      <p className="text-charcoal/70 mb-6 text-center text-sm">
                        Tell us about your location and our team will pair you with vending operators who already run routes in Aberdeen.
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
                              placeholder="First name"
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
                              placeholder="Email address"
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
                              placeholder="(605) 555-0123"
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
                              placeholder="57401"
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
                  How We Serve {cityDisplayName}'s Businesses
                </h2>
                <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                  Our team pairs your Aberdeen location with trusted operators who already maintain routes across Brown County, ensuring quick installs, reliable service, and stocked machines.
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
                    <h3 className="text-lg font-semibold text-navy mb-3">Share Your Needs</h3>
                    <p className="text-charcoal/80 text-sm">
                      Tell us about your breakroom, shift schedule, and the type of vending setup you need for your Aberdeen facility.
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
                    <h3 className="text-lg font-semibold text-navy mb-3">We Curate Providers</h3>
                    <p className="text-charcoal/80 text-sm">
                      We introduce you to two or three vetted operators who serve Aberdeen, Columbia, and the surrounding region.
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
                    <h3 className="text-lg font-semibold text-navy mb-3">Review Proposals</h3>
                    <p className="text-charcoal/80 text-sm">
                      Compare machine types, product plans, and service schedules tailored to your employee count and hours of operation.
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
                    <h3 className="text-lg font-semibold text-navy mb-3">Launch & Support</h3>
                    <p className="text-charcoal/80 text-sm">
                      Your chosen operator installs, stocks, and maintains the machines—often within two weeks—while keeping you updated with service reports.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-chocolate mb-8 text-center"
              >
                What Aberdeen Employers Can Expect
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-warm-white p-6 rounded-xl shadow-md border border-stone/20"
                >
                  <h3 className="text-xl font-semibold text-navy mb-3">Local Route Expertise</h3>
                  <p className="text-charcoal/80 text-sm leading-relaxed">
                    Work with operators who already manage machines at Aberdeen Regional Airport, downtown offices, and logistics hubs near BNSF Railway.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="bg-warm-white p-6 rounded-xl shadow-md border border-stone/20"
                >
                  <h3 className="text-xl font-semibold text-navy mb-3">Reliable Restocking</h3>
                  <p className="text-charcoal/80 text-sm leading-relaxed">
                    Expect proactive restocks timed around manufacturing shifts and hospital rounds, with telemetry alerts for top sellers like energy drinks and grab-and-go meals.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-warm-white p-6 rounded-xl shadow-md border border-stone/20"
                >
                  <h3 className="text-xl font-semibold text-navy mb-3">Healthy & Regional Options</h3>
                  <p className="text-charcoal/80 text-sm leading-relaxed">
                    Operators source balanced snacks, regional favorites, and locally roasted coffee to please different departments and visiting clients.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-warm-white p-6 rounded-xl shadow-md border border-stone/20"
                >
                  <h3 className="text-xl font-semibold text-navy mb-3">Weather-Proof Service</h3>
                  <p className="text-charcoal/80 text-sm leading-relaxed">
                    Winter storms are built into the route plan. Providers stage inventory nearby so your machines stay stocked even during blizzards.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-warm-white p-6 rounded-xl shadow-md border border-stone/20"
                >
                  <h3 className="text-xl font-semibold text-navy mb-3">Detailed Service Reporting</h3>
                  <p className="text-charcoal/80 text-sm leading-relaxed">
                    Receive machine performance summaries, refund logs, and route schedules so procurement teams stay informed.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-warm-white p-6 rounded-xl shadow-md border border-stone/20"
                >
                  <h3 className="text-xl font-semibold text-navy mb-3">Community-Focused Support</h3>
                  <p className="text-charcoal/80 text-sm leading-relaxed">
                    Many partners sponsor the Brown County Fair, high school athletics, and local nonprofits—keeping your vending dollars in the community.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Support Section */}
        <section className="py-16 bg-warm-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-chocolate mb-12 text-center"
              >
                Built for Aberdeen's Key Industries
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center bg-white p-6 rounded-xl shadow-md border border-stone/20"
                >
                  <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BuildingOffice2Icon className="h-8 w-8 text-coral" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Manufacturing & Distribution</h3>
                  <p className="text-charcoal/80 text-sm">
                    Support round-the-clock crews at 3M, Molded Fiber Glass, AGP, and logistics centers near US-281 with dependable snack, drink, and cold food service.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-center bg-white p-6 rounded-xl shadow-md border border-stone/20"
                >
                  <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UsersIcon className="h-8 w-8 text-coral" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Healthcare Campuses</h3>
                  <p className="text-charcoal/80 text-sm">
                    Keep Sanford Health, Avera St. Luke's, and regional clinics stocked with grab-and-go meals that meet overnight staffing needs.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center bg-white p-6 rounded-xl shadow-md border border-stone/20"
                >
                  <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPinIcon className="h-8 w-8 text-coral" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Education & Public Venues</h3>
                  <p className="text-charcoal/80 text-sm">
                    Serve Northern State University, downtown offices, and event centers like the Aberdeen Civic Arena with modern vending and micromarket solutions.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-chocolate mb-12 text-center"
              >
                Why {cityDisplayName} Businesses Choose Our Vending Partners
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
                  <h3 className="text-xl font-semibold text-navy mb-3">No-Cost Programs</h3>
                  <p className="text-charcoal/80">
                    Equipment, installation, repairs, and restocking are covered by the operator. Your team simply enjoys the service.
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
                    Offer snacks, meals, and beverages that keep shifts fueled and minimize offsite breaks.
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
                    Partner with insured operators who deliver modern equipment, cashless payments, and dependable maintenance.
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
                Aberdeen Vending Services - FAQ
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
                    How soon can vending machines be installed in Aberdeen?
                  </h3>
                  <p className="text-charcoal/80">
                    Most operators can complete site visits and installations within 10-14 days. Busy healthcare or production facilities may receive interim coolers or snack racks to bridge the gap until the machines arrive.
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
                    Do local providers support facilities outside city limits?
                  </h3>
                  <p className="text-charcoal/80">
                    Yes. Routes regularly cover Brown County communities like Columbia, Bath, and Warner. If you have multiple rural locations, operators coordinate drop schedules so every site stays stocked.
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
                    What payment methods do the machines accept?
                  </h3>
                  <p className="text-charcoal/80">
                    Modern machines support cash, credit and debit cards, mobile wallets, and touchless payments. Many providers also enable campus cards or employee badges for Northern State University and hospital staff.
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
                    Can we request healthier or locally sourced products?
                  </h3>
                  <p className="text-charcoal/80">
                    Absolutely. Operators track sales and will rotate in locally roasted coffee, gluten-free snacks, low-sugar beverages, and regional favorites based on employee feedback.
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
                    What happens if a machine goes down during a snowstorm?
                  </h3>
                  <p className="text-charcoal/80">
                    Vendors maintain spare parts and extra product inventory in town. Service techs prioritize medical and 24/7 facilities first, often reaching other locations within the next business day once roads are safe.
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
                    Do Aberdeen providers offer micro markets or office coffee service?
                  </h3>
                  <p className="text-charcoal/80">
                    Several partners install micro markets, bean-to-cup coffee systems, and water filtration units for larger workplaces. Let us know your interest and we will connect you with the right team.
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
                    What employee count is needed to qualify?
                  </h3>
                  <p className="text-charcoal/80">
                    Locations with 35+ daily users typically qualify for full-line vending. Operators can propose micromarkets, combo machines, or seasonal service plans for smaller offices or retail spaces.
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
                    Can vending support events like the Brown County Fair?
                  </h3>
                  <p className="text-charcoal/80">
                    Yes, operators often stage portable machines, coolers, or staffed concession support for seasonal events. Request event service when we arrange your introduction call.
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
                    How do refunds and service requests work?
                  </h3>
                  <p className="text-charcoal/80">
                    Your staff receives a direct service line and QR code on every machine. Refunds can be issued on the next route visit or digitally, and issues are logged in the operator's service portal.
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
                    Do providers carry liability insurance?
                  </h3>
                  <p className="text-charcoal/80">
                    All recommended operators maintain liability coverage, health inspections, and background-checked technicians to meet corporate vendor standards.
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
                    How do we get started?
                  </h3>
                  <p className="text-charcoal/80">
                    Complete the form above or call our team. We will schedule a brief discovery call, confirm site details, and introduce you to operators suited to your goals.
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
                Join Aberdeen companies that rely on our vetted operators for dependable, no-cost vending programs.
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
                We'll contact you within 24 hours with Aberdeen vending partners who fit your needs.
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


