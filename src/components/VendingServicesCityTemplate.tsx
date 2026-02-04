"use client"

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MapPinIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  UsersIcon
} from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import states from '@/data/states'

interface VendingServicesCityTemplateProps {
  city: string
  state: string
  slug: string
}

const normalizeCityName = (value: string) =>
  value
    .split('-')
    .filter(Boolean)
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(' ')

const getBaseCityNameFromSlug = (slug: string, stateDisplayName: string) => {
  const stateSlug = stateDisplayName.toLowerCase().replace(/\s+/g, '-')
  if (!slug.endsWith(`-${stateSlug}`)) return null
  const citySlug = slug.slice(0, -(stateSlug.length + 1))
  if (!citySlug) return null
  const removeTokens = new Set([
    'north',
    'south',
    'east',
    'west',
    'central',
    'downtown',
    'uptown',
    'metro',
    'greater',
    'county'
  ])
  const filteredParts = citySlug
    .split('-')
    .filter((part) => part && !removeTokens.has(part))
  if (!filteredParts.length) return null
  return normalizeCityName(filteredParts.join('-'))
}

export default function VendingServicesCityTemplate({ city, state, slug }: VendingServicesCityTemplateProps) {
  const cityDisplayName = getBaseCityNameFromSlug(slug, state) ?? city
  const stateDisplayName = state
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const relatedCities = useMemo(() => {
    const normalizedStateSlug = stateDisplayName.toLowerCase().replace(/\s+/g, '-')
    const stateRecord =
      states.find((entry) => entry.name === stateDisplayName) ||
      states.find((entry) => entry.slug === normalizedStateSlug)
    if (!stateRecord?.cities) return []
    return stateRecord.cities.filter((cityItem) => cityItem.slug !== slug).slice(0, 12)
  }, [stateDisplayName, slug])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('city', cityDisplayName)
    formData.append('state', stateDisplayName)

    try {
      const response = await fetch('https://formspree.io/f/xjkpkrak', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
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
    <main className="min-h-screen bg-gradient-to-b from-white via-cream/60 to-warm-white">
      <Header />

      {/* Hero Section with Form */}
      <div className="bg-gradient-to-br from-white via-cream/40 to-coral/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-xs sm:text-sm font-semibold tracking-wide text-coral uppercase"
              >
                Vending services for {cityDisplayName}, {stateDisplayName}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl"
              >
                Get Vending Machines in {cityDisplayName}, {stateDisplayName}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg sm:text-xl text-charcoal/80 leading-relaxed"
              >
                We connect {cityDisplayName} businesses with professional vending service providers for free
                installation, stocking, and maintenance. No upfront costs.
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
                  <span className="text-charcoal/80">No equipment fees or upfront costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Local, verified operators in {cityDisplayName}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Installations typically in 1-2 weeks</span>
                </li>
              </motion.ul>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/90 p-8 rounded-2xl shadow-2xl border border-coral/20 ring-1 ring-coral/10"
            >
              {formSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-playfair font-bold text-navy mb-2">
                    Request Received!
                  </h3>
                  <p className="text-charcoal/80">
                    We'll connect you with {cityDisplayName} vending providers within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-playfair font-bold text-navy mb-2 text-center">
                    Get Free Vending Services
                  </h3>
                  <p className="text-charcoal/70 mb-6 text-center">
                    Tell us about your {cityDisplayName} location and we'll match you with providers.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    data-ga-event="lead_form_submit"
                    data-ga-category="form"
                    data-ga-label={`vending-services ${cityDisplayName.toLowerCase()}`}
                  >
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
                          className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all bg-white"
                          placeholder="John Smith"
                        />
                      </div>
                    </div>

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
                          className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all bg-white"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

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
                          className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all bg-white"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

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
                          className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all bg-white"
                          placeholder="12345"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-navy to-navy-light text-white py-3.5 px-6 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:from-navy-light hover:to-navy disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* Value Proposition Section */}
      <section className="bg-gradient-to-b from-warm-white via-white to-cream/60 border-t border-gray-200 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate"
            >
              Why {cityDisplayName} Businesses Choose Vending Services
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-coral/10"
            >
              <BuildingOffice2Icon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">No Upfront Costs</h3>
              <p className="text-charcoal/80">
                Operators install, stock, and maintain machines at no cost to your business. They handle everything.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-coral/10"
            >
              <CheckCircleIcon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Employee Convenience</h3>
              <p className="text-charcoal/80">
                Keep your team happy with 24/7 access to snacks, drinks, and healthy options.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-coral/10"
            >
              <MapPinIcon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Local Providers</h3>
              <p className="text-charcoal/80">
                We match you with vetted vending operators who serve {cityDisplayName} and respond quickly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-b from-white via-warm-white to-white py-16 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate"
            >
              How It Works in {cityDisplayName}
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
              <h3 className="text-xl font-semibold text-navy mb-3">Request Service</h3>
              <p className="text-charcoal/80">
                Tell us about your {cityDisplayName} location and your team size.
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
              <h3 className="text-xl font-semibold text-navy mb-3">Get Matched</h3>
              <p className="text-charcoal/80">
                We connect you with local vending operators that cover {cityDisplayName}.
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
              <h3 className="text-xl font-semibold text-navy mb-3">Install & Support</h3>
              <p className="text-charcoal/80">
                Choose a provider and get free installation, stocking, and maintenance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Fit Section */}
      <section className="bg-gradient-to-b from-warm-white via-white to-cream/60 py-16 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate"
            >
              Businesses That Benefit in {cityDisplayName}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-lg text-charcoal/80"
            >
              Vending services are a strong fit for locations with steady foot traffic or consistent
              staff presence. If your team or visitors spend time on-site, vending adds convenience
              without extra overhead.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Offices & Corporate',
                body: 'Support employees with snacks and drinks during breaks and meetings.'
              },
              {
                title: 'Warehouses & Manufacturing',
                body: 'Shift-based teams rely on quick access to refreshments on-site.'
              },
              {
                title: 'Healthcare & Clinics',
                body: 'Patients and staff appreciate 24/7 availability in waiting areas.'
              },
              {
                title: 'Schools & Campuses',
                body: 'Students and staff benefit from convenient options between classes.'
              },
              {
                title: 'Gyms & Recreation',
                body: 'Members want hydration and healthy snacks before or after workouts.'
              },
              {
                title: 'Retail & Hospitality',
                body: 'Guests and customers value quick purchase options while on-site.'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-lg border border-coral/10">
                <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-charcoal/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities Section */}
      {relatedCities.length > 0 && (
        <section className="bg-gradient-to-b from-cream/60 via-white to-cream/40 py-16 border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center"
            >
              More Vending Services in {stateDisplayName}
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {relatedCities.map((cityItem) => (
                <Link
                  key={cityItem.slug}
                  href={`/vending-services/${cityItem.slug}`}
                  className="px-4 py-3 rounded-lg bg-white shadow-sm border border-coral/10 text-navy hover:text-coral hover:shadow-md transition-all"
                >
                  {cityItem.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-cream/60 via-white to-cream/40 py-16 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center"
          >
            Vending Services in {cityDisplayName} - FAQ
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                q: `What does it cost to get vending machines in ${cityDisplayName}?`,
                a: `Typically nothing. Vending operators install, stock, and maintain machines at no cost to your ${cityDisplayName} business.`
              },
              {
                q: `How quickly can vending machines be installed in ${cityDisplayName}?`,
                a: `Most providers can install within 1-2 weeks after an initial site evaluation.`
              },
              {
                q: `Do I need a certain number of employees to qualify?`,
                a: `Most operators prefer 25-50 employees, but high-traffic locations in ${cityDisplayName} may qualify with fewer.`
              },
              {
                q: `What products can I request?`,
                a: `Operators offer snacks, beverages, healthy options, and can customize selections for your team.`
              }
            ].map((item) => (
              <div key={item.q} className="bg-white p-6 rounded-lg shadow-lg border border-coral/10">
                <h3 className="text-lg font-semibold text-navy mb-2">{item.q}</h3>
                <p className="text-charcoal/80">{item.a}</p>
              </div>
            ))}
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

              <h3 className="text-2xl font-playfair font-bold text-navy mb-3">Thank You!</h3>

              <p className="text-lg text-charcoal/80 mb-2">Your request has been received.</p>

              <p className="text-charcoal/70 mb-6">
                We'll connect you with the best vending service providers in {cityDisplayName} within 24 hours.
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
