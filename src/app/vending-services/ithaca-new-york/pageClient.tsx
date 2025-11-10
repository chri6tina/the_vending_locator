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

export default function IthacaNewYorkVendingServicesPage() {
  const cityDisplayName = 'Ithaca';
  const stateDisplayName = 'New York'
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
              <Link href="/vending-services/new-york" className="hover:text-navy transition-colors">
                New York
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
                    <span className="text-navy">{cityDisplayName}, NY</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-stone mb-8 leading-relaxed"
                  >
                    Keep Cornell research labs, Ithaca College residence halls, downtown coworking spaces, and Cayuga Lake wineries stocked without adding to your workload. Our vetted partners already service Cayuga Medical Center, Tompkins County offices, and Finger Lakes tourism venues—delivering telemetry-enabled machines, curated product plans, and responsive on-site support.
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
                        <span className="text-sm font-medium text-chocolate">Local, Vetted Operators</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <ClockIcon className="h-5 w-5 text-purple-600" />
                        <span className="text-sm font-medium text-chocolate">Quick Install & Service</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <MapPinIcon className="h-5 w-5 text-coral" />
                        <span className="text-sm font-medium text-chocolate">Tompkins County Routes</span>
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
                      <span className="text-charcoal/80">Menus balanced between STEM lab shifts, campus wellness programs, and hospitality events.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Plant-forward, allergy-aware selections popular with students, faculty, and visiting researchers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Telemetry alerts prevent outages during orientation weeks, graduation, and festival seasons.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Service extends through Lansing, Dryden, Trumansburg, and Cornell Cooperative Extension sites.</span>
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
                      <h3 className="text-2xl font-playfair font-bold text-navy mb-2">
                        Request Received!
                      </h3>
                      <p className="text-charcoal/80">
                        We&apos;ll connect you with {cityDisplayName} vending providers within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-playfair font-bold text-navy mb-2 text-center">
                        Get Vending Services in {cityDisplayName}, NY
                      </h3>
                      <p className="text-charcoal/70 mb-6 text-center text-sm">
                        Share a few details and we&apos;ll match you with operators already running Tompkins County routes.
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
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all text-sm"
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
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all text-sm"
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
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all text-sm"
                              placeholder="(607) 555-0123"
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
                              placeholder="14850"
                            />
                          </div>
                        </div>

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
                <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                  From lab facilities on East Hill to boutique hotels along the Commons, we match you with vendors who understand the cadence of Ithaca&apos;s academic, tourism, and tech ecosystems.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: '1',
                    title: 'Share Priorities',
                    copy: 'Outline headcount, visitor traffic, and any sustainability or dietary requirements you expect operators to meet.'
                  },
                  {
                    step: '2',
                    title: 'Meet Operators',
                    copy: 'We introduce background-checked vendors already servicing Cornell, Ithaca College, downtown offices, and Tompkins County buildings.'
                  },
                  {
                    step: '3',
                    title: 'Review Programs',
                    copy: 'Compare machine mixes, micro market layouts, telemetry tools, and restock cadence aligned with your facilities.'
                  },
                  {
                    step: '4',
                    title: 'Launch & Refine',
                    copy: 'Operators install, stock, and maintain equipment, then optimize menus using real-time sales data and feedback loops.'
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
                        className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-coral/30 -translate-x-1/2"
                        style={{ width: 'calc(100% - 4rem)' }}
                      ></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
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
                What {cityDisplayName} Employers Receive
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Campus Route Expertise',
                    copy:
                      'Technicians already maintain machines across Cornell colleges, Ithaca College housing, research centers, and Cooperative Extension offices.'
                  },
                  {
                    title: 'Telemetry-Driven Restocking',
                    copy:
                      'Operators monitor sell-through and dispatch replenishment before pre-exam rushes, visiting weekends, or severe weather spikes demand.'
                  },
                  {
                    title: 'Local & Sustainable Options',
                    copy:
                      'Highlight Finger Lakes coffee roasters, farm-to-vending produce, and compostable packaging that align with campus sustainability initiatives.'
                  },
                  {
                    title: 'Regulatory Confidence',
                    copy:
                      'Vendors handle NYS health rules, allergen labeling, union coordination, and access protocols for secure labs and healthcare facilities.'
                  },
                  {
                    title: 'Transparent Insights',
                    copy:
                      'Gain dashboards for sales trends, refund logs, and waste reduction metrics to support procurement and facilities reporting.'
                  },
                  {
                    title: 'Event & Conference Support',
                    copy:
                      'Scale service for campus conferences, Finger Lakes tourism bursts, and Cornell sports weekends with portable equipment.'
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
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-chocolate mb-12 text-center"
              >
                Tailored to {cityDisplayName}&apos;s Core Industries
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <BuildingOffice2Icon className="h-8 w-8 text-coral" />,
                    title: 'Higher Education & Research',
                    copy:
                      'Support Cornell, Ithaca College, and research startups with 24/7 access to healthy meals, cold brew, and study-time snacks.'
                  },
                  {
                    icon: <UsersIcon className="h-8 w-8 text-coral" />,
                    title: 'Healthcare & Life Sciences',
                    copy:
                      'Deliver compliant service to Cayuga Medical Center, BioTech incubators, and clinical labs requiring strict sanitation protocols.'
                  },
                  {
                    icon: <MapPinIcon className="h-8 w-8 text-coral" />,
                    title: 'Hospitality & Tourism',
                    copy:
                      'Equip boutique hotels, wineries, and event venues around Cayuga Lake with micro markets, beverage coolers, and grab-and-go fare.'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="text-center bg-white p-6 rounded-xl shadow-md border border-stone/20"
                  >
                    <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                    <p className="text-charcoal/80 text-sm">{item.copy}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
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
                Why Finger Lakes Organizations Choose Our Partners
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <BuildingOffice2Icon className="h-8 w-8 text-coral" />,
                    title: 'Zero Capital Expense',
                    copy:
                      'Operators cover equipment, installation, maintenance, and restocking—your team simply enjoys a dependable amenity.'
                  },
                  {
                    icon: <UsersIcon className="h-8 w-8 text-coral" />,
                    title: 'Happier Students & Staff',
                    copy:
                      'Reduce off-campus trips by offering nutritious, convenient food and beverage options steps from classrooms and offices.'
                  },
                  {
                    icon: <ShieldCheckIcon className="h-8 w-8 text-coral" />,
                    title: 'Trusted Local Service',
                    copy:
                      'Work with insured, background-checked providers who understand campus security, environmental goals, and rural logistics.'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="text-center bg-warm-white p-6 rounded-xl shadow-md border border-stone/20"
                  >
                    <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                    <p className="text-charcoal/80">{item.copy}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                Ithaca Vending Services – FAQ
              </motion.h2>

              {[
                {
                  question: 'How quickly can vending machines be installed in Ithaca?',
                  answer:
                    'Most operators complete site visits and installs within 10–14 days. High-priority sites such as residence halls, hospitals, or conference centers can receive temporary equipment within a few business days while permanent machines are prepared.'
                },
                {
                  question: 'Do you serve nearby communities like Lansing and Trumansburg?',
                  answer:
                    'Yes. Routes span Lansing, Dryden, Trumansburg, Cortland, and Waterloo. Vendors coordinate multi-site schedules across Finger Lakes campuses, wineries, and municipal buildings.'
                },
                {
                  question: 'What products are popular with Ithaca students and employees?',
                  answer:
                    'Top sellers include locally roasted coffee, kombucha, nutrient-dense snacks, gluten-free and vegan selections, and regional favorites from Finger Lakes artisans.'
                },
                {
                  question: 'Can machines handle academic calendar surges?',
                  answer:
                    'Absolutely. Operators boost restocking ahead of orientation, reunion, and graduation weekends, and adjust inventory to support summer conference traffic.'
                },
                {
                  question: 'Do the machines accept Cornell or Ithaca College IDs?',
                  answer:
                    'Several partners integrate campus card systems, mobile wallets, and traditional payments. We can match you with operators who support your preferred cashless options.'
                },
                {
                  question: 'Can we request healthier or sustainable product lines?',
                  answer:
                    'Yes. Vendors curate plant-forward, fair-trade, and low-waste product assortments that align with university sustainability pledges and wellness programs.'
                },
                {
                  question: 'Do you offer micro markets or office coffee service?',
                  answer:
                    'Many providers design micro markets, bean-to-cup coffee bars, and filtered water solutions—ideal for collaborative workspaces and conference facilities.'
                },
                {
                  question: 'How are refunds handled for campus housing or remote facilities?',
                  answer:
                    'Each machine features a service hotline and QR code. Refunds are processed on the next visit or digitally, with reporting to flag repeat issues quickly.'
                },
                {
                  question: 'What happens if a machine malfunctions after hours?',
                  answer:
                    'Technicians prioritize essential accounts and keep spare equipment to minimize downtime. Several operators offer extended-hour support for healthcare and residence halls.'
                },
                {
                  question: 'What staff size qualifies for vending service?',
                  answer:
                    'Full-line vending works best for 35+ daily users. Smaller departments can consider combo machines, countertop coolers, or shared service plans within the same building.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-stone/20 mb-6"
                >
                  <h3 className="text-lg font-semibold text-navy mb-2">{item.question}</h3>
                  <p className="text-charcoal/80">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold text-white mb-6">
                Ready to Add Vending Services to Your {stateDisplayName} Workplace?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join Ithaca-area campuses, healthcare teams, and hospitality venues that rely on vetted operators for dependable, no-cost vending programs.
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
                We&apos;ll reach out shortly with {cityDisplayName} vending partners that fit your goals.
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


