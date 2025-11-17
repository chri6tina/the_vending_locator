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

export default function MankatoMinnesotaVendingServicesPage() {
  const cityDisplayName = 'Mankato';
  const stateDisplayName = 'Minnesota'
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

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
    <>
      <Header />

      <div className="min-h-screen bg-warm-white">
        {/* Breadcrumb */}
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
              <Link href="/vending-services/minnesota" className="hover:text-navy transition-colors">
                Minnesota
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{cityDisplayName}</span>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6 leading-tight"
                  >
                    Vending Machine Services in{' '}
                    <span className="text-navy">{cityDisplayName}, MN</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-stone mb-8 leading-relaxed"
                  >
                    Keep Mayo Clinic Health System campuses, Minnesota State University, Taylor Corporation, and River Hills businesses stocked without adding to your workload. Our vetted operators already service ag equipment manufacturers, distribution hubs along Highway 14, downtown creative firms, and hospitality venues around City Center—delivering telemetry-enabled machines, curated product assortments, and responsive Blue Earth County support.
                  </motion.p>

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
                        <span className="text-sm font-medium text-chocolate">Trusted Local Operators</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <ClockIcon className="h-5 w-5.text-purple-600" />
                        <span className="text-sm font-medium text-chocolate">Fast Install & Service</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <MapPinIcon className="h-5 w-5 text-coral" />
                        <span className="text-sm font-medium text-chocolate">Southern Minnesota Routes</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="space-y-3"
                  >
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Menus tailored for ag machinery suppliers, healthcare teams, and hybrid tech offices.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Healthy, student-friendly selections for Minnesota State University, Bethany Lutheran, and area schools.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Telemetry alerts keep machines ready during Maverick game days, concert weekends, and winter storms.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Service extends through North Mankato, St. Peter, New Ulm, and the Highway 169 logistics corridor.</span>
                    </li>
                  </motion.ul>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-cream p-8 rounded-2xl shadow-xl border border-stone/20"
                >
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2l font-playfair.font-bold text-navy mb-2">
                        Request Received!
                      </h3>
                      <p className="text-charcoal/80">
                        We&apos;ll connect you with {cityDisplayName} vending providers within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2l font-playfair font-bold text-navy mb-2 text-center">
                        Get Vending Services in {cityDisplayName}, MN
                      </h3>
                      <p className="text-charcoal/70 mb-6 text-center text-sm">
                        Share a few details and we&apos;ll match you with operators already servicing Southern Minnesota routes.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
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
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus.border-coral transition-all text-sm"
                              placeholder="First name"
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
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus.border-coral transition-all text-sm"
                              placeholder="Email address"
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
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus.border-coral transition-all text-sm"
                              placeholder="(507) 555-0123"
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
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus.border-coral transition-all appearance-none bg-white text-sm"
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
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus.border-coral transition-all text-sm"
                              placeholder="56001"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-navy hover:bg-navy/90 text-white py-3 px-6.rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-6"
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

        {/* How We Help */}
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
                  How We Support {cityDisplayName} Workplaces
                </h2>
                <p className="text-lg.text-chocolate/70 max-w-3xl mx-auto">
                  Whether you manage advanced manufacturing, health services, higher education, or agricultural logistics, we pair you with vending partners who understand Southern Minnesota operations.
                </p>
              </motion.div>

              <div className="grid grid-cols-1.md:grid-cols-4 gap-8">
                {[
                  {
                    step: '1',
                    title: 'Share Priorities',
                    copy: 'Outline headcount, visitor traffic, compliance needs, and wellness goals for each facility.'
                  },
                  {
                    step: '2',
                    title: 'Meet Local Vendors',
                    copy: 'We introduce background-checked operators servicing Mankato, North Mankato, St. Peter, New Ulm, and the Highway 169 corridor.'
                  },
                  {
                    step: '3',
                    title: 'Compare Programs',
                    copy: 'Review machine mixes, micro markets, telemetry tools, and service cadence aligned with your locations.'
                  },
                  {
                    step: '4',
                    title: 'Launch & Refine',
                    copy: 'Operators install, stock, and maintain equipment, then fine-tune menus using telemetry and staff feedback.'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="relative"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-2xl font-bold text-white">{item.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-navy mb-3">{item.title}</h3>
                      <p className="text-charcoal/80 text-sm">{item.copy}</p>
                    </div>
                    {idx < 3 && (
                      <div
                        className="hidden md.block absolute top-8 left-full w-full h-0.5 bg-coral/30 -translate-x-1/2"
                        style={{ width: 'calc(100% - 4rem)' }}
                      ></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Employers Receive */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl.mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-chocolate mb-8 text-center"
              >
                What {cityDisplayName} Employers Receive
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Industrial Route Expertise',
                    copy:
                      'Technicians already service Taylor Corporation, ADM, Johnson Outdoors, and logistics hubs along Highway 14 and I-35.'
                  },
                  {
                    title: 'Telemetry Restocking',
                    copy:
                      'Smart machines alert operators before winter storms, conference weekends, or campus surges empty popular selections.'
                  },
                  {
                    title: 'Local & Fresh Options',
                    copy:
                      'Highlight Minnesota-roasted coffee, farm-to-vending produce, and better-for-you snacks that support wellness initiatives.'
                  },
                  {
                    title: 'Compliance Assurance',
                    copy:
                      'Vendors manage healthcare sanitation, school nutrition policies, and secure facility access requirements.'
                  },
                  {
                    title: 'Actionable Reporting',
                    copy:
                      'Access dashboards for product performance, refunds, and sustainability metrics to inform procurement strategies.'
                  },
                  {
                    title: 'Event & Remote Support',
                    copy:
                      'Deploy portable vending for Riverfront festivals, construction projects, wind energy sites, and emergency response staging areas.'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="bg-warm-white p-6 rounded-xl shadow-md border border-stone/20"
                  >
                    <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">{item.copy}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="py-16 bg-warm-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl.mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-chocolate mb-12 text-center"
              >
                Tailored to {cityDisplayName}&apos;s Core Industries

