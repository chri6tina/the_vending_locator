'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import VendingCourse from '@/components/VendingCourse'
import { CheckBadgeIcon, DocumentTextIcon, ChatBubbleOvalLeftIcon, CreditCardIcon, ShieldCheckIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, MapPinIcon } from '@heroicons/react/24/outline'
import states from '@/data/states'

export default function GuideClient() {
  const [expandedStates, setExpandedStates] = useState<string[]>([])
  const [recentPurchases, setRecentPurchases] = useState(17)
  const toggleState = (slug: string) => setExpandedStates(prev => prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug])

  useEffect(() => {
    const interval = setInterval(() => {
      setRecentPurchases(prev => {
        const delta = Math.floor(Math.random() * 3) - 1 // -1, 0, +1
        const next = prev + delta
        return Math.max(5, Math.min(25, next))
      })
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-cream">
      <Header />

      {/* Hero with CTA - Enhanced */}
      <section className="bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-navy rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-charcoal leading-tight"
            >
              The Complete Vending Machine Guide
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.15 }} 
              className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-chocolate/80 leading-relaxed max-w-3xl mx-auto px-4"
            >
              Contracts, outreach scripts, negotiation frameworks, onboarding checklists, and real-world templates to win locations and scale with confidence.
            </motion.p>

            {/* Recent purchases indicator - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 sm:mt-8 p-3 sm:p-4 bg-cream/70 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto"
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-chocolate">
                  <span className="font-bold text-coral">{recentPurchases}</span> people purchased in the last 24 hours
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }} 
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4"
            >
              <a 
                href="https://vendflow.gumroad.com/l/rxbzy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-navy hover:bg-navy-light text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors shadow-sm hover:shadow-md"
              >
                <CreditCardIcon className="w-5 h-5 flex-shrink-0" /> 
                <span>Get the Guide for $79</span>
              </a>
              <Link 
                href="#inside" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-navy hover:text-navy-light font-semibold py-3 sm:py-4 transition-colors"
              >
                See what's inside
                <ChevronDownIcon className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust badges - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.45 }} 
              className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 px-4"
            >
              <div className="bg-cream/80 border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover:shadow-sm transition-shadow">
                <div className="text-sm sm:text-base font-semibold text-charcoal">Legal-Ready</div>
                <div className="text-xs sm:text-sm text-stone mt-1">Contracts & agreements</div>
              </div>
              <div className="bg-cream/80 border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover:shadow-sm transition-shadow">
                <div className="text-sm sm:text-base font-semibold text-charcoal">Proven Scripts</div>
                <div className="text-xs sm:text-sm text-stone mt-1">Outreach & follow-ups</div>
              </div>
              <div className="bg-cream/80 border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover:shadow-sm transition-shadow">
                <div className="text-sm sm:text-base font-semibold text-charcoal">Negotiation</div>
                <div className="text-xs sm:text-sm text-stone mt-1">Step-by-step framework</div>
              </div>
              <div className="bg-cream/80 border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover:shadow-sm transition-shadow">
                <div className="text-sm sm:text-base font-semibold text-charcoal">Placement</div>
                <div className="text-xs sm:text-sm text-stone mt-1">Onboarding checklist</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's inside - Enhanced */}
      <section id="inside" className="relative py-12 sm:py-16 lg:py-24 bg-cream overflow-hidden">
        {/* Subtle background pattern + gradient accents */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-20 sm:opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(rgba(12, 27, 51, 0.06) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
            backgroundPosition: '0 0'
          }}
        />
        <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-tr from-navy/10 to-coral/10 blur-2xl -z-10 hidden sm:block" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-tr from-coral/10 to-navy/10 blur-2xl -z-10 hidden sm:block" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center mb-8 sm:mb-10 border-t border-gray-200 pt-8 sm:pt-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-charcoal">
              What's inside the guide
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-chocolate/80 px-4">
              Everything you need to land locations fast: contract templates, outreach scripts, negotiation frameworks, and operational checklists.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-navy text-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <DocumentTextIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-charcoal font-playfair">Contract Pack</h3>
                    <p className="text-stone mt-1.5 sm:mt-2 text-sm sm:text-base leading-relaxed">Placement agreements, service terms, and addendums you can adapt.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="text-xs bg-cream/80 border border-gray-200 text-chocolate rounded-full px-2.5 sm:px-3 py-1">Placement Agreement</span>
                      <span className="text-xs bg-cream/80 border border-gray-200 text-chocolate rounded-full px-2.5 sm:px-3 py-1">Service Terms</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-navy text-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <ChatBubbleOvalLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-charcoal font-playfair">Scripts & Sequences</h3>
                    <p className="text-stone mt-1.5 sm:mt-2 text-sm sm:text-base leading-relaxed">Cold call, email, and in-person outreach scripts plus follow-ups that convert.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-navy text-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-charcoal font-playfair">Negotiation Frameworks</h3>
                    <p className="text-stone mt-1.5 sm:mt-2 text-sm sm:text-base leading-relaxed">Win-win proposals, handling objections, and closing with professionalism.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-navy text-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <PlayCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-charcoal font-playfair">Operational Checklists</h3>
                    <p className="text-stone mt-1.5 sm:mt-2 text-sm sm:text-base leading-relaxed">Site assessment, install day, service cadence, product mix, and compliance.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* CTA Card - Enhanced */}
            <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-5 sm:p-6 lg:p-8 shadow-sm h-fit lg:sticky lg:top-24">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold text-charcoal mb-3 sm:mb-4">Ready to start?</h3>
              <p className="text-stone mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">Skip the guesswork. Use proven templates and processes to accelerate your first placements.</p>
              <a 
                href="https://vendflow.gumroad.com/l/rxbzy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-navy hover:bg-navy-light text-white px-5 sm:px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm hover:shadow-md"
              >
                <CreditCardIcon className="w-5 h-5 flex-shrink-0" /> 
                <span>Purchase the Guide ($79)</span>
              </a>
              <p className="text-xs sm:text-sm text-stone mt-3 sm:mt-4">Delivered instantly via Gumroad. Lifetime updates included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison grid - Enhanced */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-charcoal text-center mb-8 sm:mb-10">Choose your path</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative rounded-lg sm:rounded-xl border border-gray-200 p-5 sm:p-6 bg-cream/80 hover:shadow-sm transition-shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-charcoal mb-3 sm:mb-4 font-playfair">Self‑build (DIY)</h3>
              <ul className="space-y-2 sm:space-y-2.5">
                <li className="flex items-start gap-2 sm:gap-3 text-stone text-sm sm:text-base">
                  <CheckBadgeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 flex-shrink-0" /> 
                  <span>Build contracts and scripts from scratch</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-stone text-sm sm:text-base">
                  <CheckBadgeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 flex-shrink-0" /> 
                  <span>Trial‑and‑error pitching and installs</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-stone text-sm sm:text-base">
                  <CheckBadgeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 flex-shrink-0" /> 
                  <span>Slower time‑to‑placement</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg sm:rounded-xl border-2 border-navy p-5 sm:p-6 bg-white shadow-md sm:shadow-lg order-first sm:order-none lg:scale-105 lg:z-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy text-white text-xs font-semibold px-3 py-1 rounded-full">Recommended</div>
              <h3 className="text-lg sm:text-xl font-semibold text-navy mb-3 sm:mb-4 font-playfair mt-2">Use our Guide</h3>
              <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
                <li className="flex items-start gap-2 sm:gap-3 text-stone text-sm sm:text-base">
                  <CheckBadgeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-coral mt-0.5 flex-shrink-0" /> 
                  <span>Legal‑ready contracts & proven scripts</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-stone text-sm sm:text-base">
                  <CheckBadgeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-coral mt-0.5 flex-shrink-0" /> 
                  <span>Negotiation frameworks & checklists</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-stone text-sm sm:text-base">
                  <CheckBadgeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-coral mt-0.5 flex-shrink-0" /> 
                  <span>Faster, more confident placements</span>
                </li>
              </ul>
              <a 
                href="https://vendflow.gumroad.com/l/rxbzy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-5 py-3 rounded-lg font-semibold transition-colors shadow-sm hover:shadow-md"
              >
                Get the Guide ($79)
              </a>
            </div>
            <div className="relative rounded-lg sm:rounded-xl border border-gray-200 p-5 sm:p-6 bg-cream/80 hover:shadow-sm transition-shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-charcoal mb-3 sm:mb-4 font-playfair">Hire an agency</h3>
              <ul className="space-y-2 sm:space-y-2.5">
                <li className="flex items-start gap-2 sm:gap-3 text-stone text-sm sm:text-base">
                  <CheckBadgeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 flex-shrink-0" /> 
                  <span>High cost & limited control</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-stone text-sm sm:text-base">
                  <CheckBadgeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 flex-shrink-0" /> 
                  <span>Variable quality & availability</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-stone text-sm sm:text-base">
                  <CheckBadgeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 flex-shrink-0" /> 
                  <span>Less learning/ownership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof - Enhanced */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-charcoal text-center mb-6 sm:mb-8">What operators say</h2>
          <Testimonials compact />
        </div>
      </section>

      {/* Course cross-promo - Enhanced */}
      <section className="py-8 sm:py-12 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <VendingCourse compact />
        </div>
      </section>

      {/* Directory at bottom - Enhanced */}
      <section className="bg-cream py-12 sm:py-16 lg:py-24 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6 sm:mb-8 text-center px-4"
            >
              Explore Markets We Serve
            </motion.h2>

            <div className="grid gap-3 sm:gap-4">
              {states.map((state, index) => (
                <motion.div 
                  key={state.slug} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: Math.min(0.02 * index, 0.5) }} 
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <details>
                    <summary className="w-full px-4 sm:px-6 py-3 sm:py-4 cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-between list-none">
                      <div className="flex items-center flex-1 min-w-0">
                        <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-navy mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="font-medium text-chocolate text-base sm:text-lg truncate">{state.name}</span>
                        <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-500 flex-shrink-0">({state.cities.length} cities)</span>
                      </div>
                      <ChevronDownIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0 ml-2" />
                    </summary>
                    <div className="border-t border-gray-200 bg-gray-50">
                      <div className="px-4 sm:px-6 py-3 sm:py-4">
                        {state.cities.length > 0 ? (
                          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                            {state.cities.map(city => (
                              <Link 
                                key={city.slug} 
                                href={`/guide/${city.slug}`}
                                prefetch={true}
                                className="block text-chocolate hover:text-navy transition-colors text-xs sm:text-sm py-1.5 sm:py-2 hover:underline truncate cursor-pointer relative z-10"
                                onClick={(e) => {
                                  // Ensure navigation happens
                                  e.stopPropagation()
                                }}
                              >
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-4">
                            <p className="text-gray-500 text-sm">No city pages available yet for {state.name}.</p>
                            <p className="text-gray-400 text-xs mt-1">Check back soon for updates!</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA - Enhanced */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3 shadow-lg sm:hidden">
        <a 
          href="https://vendflow.gumroad.com/l/rxbzy" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-5 py-3 rounded-lg font-semibold transition-colors shadow-sm"
        >
          <CreditCardIcon className="w-5 h-5 flex-shrink-0" />
          Get the Guide ($79)
        </a>
        <div className="mt-1.5 text-center text-xs text-stone">Secure checkout • Legal‑ready • Lifetime updates</div>
      </div>

      <Footer />
    </main>
  )
}


