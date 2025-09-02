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

      {/* Hero with CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-charcoal">
              The Complete Vending Machine Guide
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="mt-6 text-lg sm:text-xl text-chocolate/80 leading-relaxed">
              Contracts, outreach scripts, negotiation frameworks, onboarding checklists, and real-world templates to win locations and scale with confidence.
            </motion.p>

            {/* Recent purchases indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 sm:mt-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-chocolate">
                  <span className="font-bold text-coral">{recentPurchases}</span> people purchased in the last 24 hours
                </span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://vendflow.gumroad.com/l/rxbzy" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                <CreditCardIcon className="w-5 h-5" /> Get the Guide for $79
              </a>
              <Link href="#inside" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-navy hover:text-navy-light font-semibold">
                See what’s inside
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.45 }} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-cream/60 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-charcoal font-semibold">Legal-Ready</div>
                <div className="text-sm text-stone">Contracts & agreements</div>
              </div>
              <div className="bg-cream/60 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-charcoal font-semibold">Proven Scripts</div>
                <div className="text-sm text-stone">Outreach & follow-ups</div>
              </div>
              <div className="bg-cream/60 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-charcoal font-semibold">Negotiation</div>
                <div className="text-sm text-stone">Step-by-step framework</div>
              </div>
              <div className="bg-cream/60 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-charcoal font-semibold">Placement</div>
                <div className="text-sm text-stone">Onboarding checklist</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What’s inside */}
      <section id="inside" className="relative py-16 sm:py-24 bg-cream overflow-hidden">
        {/* subtle background pattern + gradient accents */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(rgba(12, 27, 51, 0.06) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
            backgroundPosition: '0 0'
          }}
        />
        <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-tr from-navy/10 to-coral/10 blur-2xl -z-10" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-tr from-coral/10 to-navy/10 blur-2xl -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center mb-10 border-t border-gray-200 pt-10"
          >
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-charcoal">
              What’s inside the guide
            </h2>
            <p className="mt-3 text-chocolate/80">
              Everything you need to land locations fast: contract templates, outreach scripts, negotiation frameworks, and operational checklists.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shadow-sm">
                    <DocumentTextIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal font-sans">Contract Pack</h3>
                    <p className="text-stone mt-1 text-base leading-relaxed">Placement agreements, service terms, and addendums you can adapt.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="text-xs bg-cream/60 border border-gray-200 text-chocolate rounded-full px-3 py-1">Placement Agreement</span>
                      <span className="text-xs bg-cream/60 border border-gray-200 text-chocolate rounded-full px-3 py-1">Service Terms</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shadow-sm">
                    <ChatBubbleOvalLeftIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal font-sans">Scripts & Sequences</h3>
                    <p className="text-stone mt-1 text-base leading-relaxed">Cold call, email, and in-person outreach scripts plus follow-ups that convert.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shadow-sm">
                    <ShieldCheckIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal font-sans">Negotiation Frameworks</h3>
                    <p className="text-stone mt-1 text-base leading-relaxed">Win-win proposals, handling objections, and closing with professionalism.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shadow-sm">
                    <PlayCircleIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal font-sans">Operational Checklists</h3>
                    <p className="text-stone mt-1 text-base leading-relaxed">Site assessment, install day, service cadence, product mix, and compliance.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-2xl font-sans font-bold text-charcoal mb-3">Ready to start?</h3>
              <p className="text-stone mb-6 text-base leading-relaxed">Skip the guesswork. Use proven templates and processes to accelerate your first placements.</p>
              <a href="https://vendflow.gumroad.com/l/rxbzy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold">
                <CreditCardIcon className="w-5 h-5" /> Purchase the Guide ($79)
              </a>
              <p className="text-xs text-stone mt-3">Delivered instantly via Gumroad. Lifetime updates included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison grid */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-charcoal text-center mb-10">Choose your path</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-xl border border-gray-200 p-6 bg-cream/60">
              <h3 className="text-xl font-semibold text-charcoal mb-3 tracking-tight antialiased">Self‑build (DIY)</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-stone"><CheckBadgeIcon className="w-5 h-5 text-gray-400 mt-0.5" /> Build contracts and scripts from scratch</li>
                <li className="flex items-start gap-2 text-stone"><CheckBadgeIcon className="w-5 h-5 text-gray-400 mt-0.5" /> Trial‑and‑error pitching and installs</li>
                <li className="flex items-start gap-2 text-stone"><CheckBadgeIcon className="w-5 h-5 text-gray-400 mt-0.5" /> Slower time‑to‑placement</li>
              </ul>
            </div>
            <div className="relative rounded-xl border-2 border-navy p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-navy mb-3 tracking-tight antialiased">Use our Guide (Recommended)</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-stone"><CheckBadgeIcon className="w-5 h-5 text-coral mt-0.5" /> Legal‑ready contracts & proven scripts</li>
                <li className="flex items-start gap-2 text-stone"><CheckBadgeIcon className="w-5 h-5 text-coral mt-0.5" /> Negotiation frameworks & checklists</li>
                <li className="flex items-start gap-2 text-stone"><CheckBadgeIcon className="w-5 h-5 text-coral mt-0.5" /> Faster, more confident placements</li>
              </ul>
              <a href="https://vendflow.gumroad.com/l/rxbzy" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-5 py-3 rounded-lg font-semibold">Get the Guide ($79)</a>
            </div>
            <div className="relative rounded-xl border border-gray-200 p-6 bg-cream/60">
              <h3 className="text-xl font-semibold text-charcoal mb-3 tracking-tight antialiased">Hire an agency</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-stone"><CheckBadgeIcon className="w-5 h-5 text-gray-400 mt-0.5" /> High cost & limited control</li>
                <li className="flex items-start gap-2 text-stone"><CheckBadgeIcon className="w-5 h-5 text-gray-400 mt-0.5" /> Variable quality & availability</li>
                <li className="flex items-start gap-2 text-stone"><CheckBadgeIcon className="w-5 h-5 text-gray-400 mt-0.5" /> Less learning/ownership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-charcoal text-center mb-8">What operators say</h2>
          <Testimonials compact />
        </div>
      </section>

      {/* Course cross-promo */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <VendingCourse compact />
        </div>
      </section>

      {/* Directory at bottom */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center">
              Explore Markets We Serve
            </motion.h2>

            <div className="grid gap-4">
              {states.map((state, index) => (
                <motion.div key={state.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 * index }} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button onClick={() => toggleState(state.slug)} className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPinIcon className="h-5 w-5 text-navy mr-3" />
                      <span className="font-medium text-chocolate text-lg">{state.name}</span>
                      <span className="ml-3 text-sm text-gray-500">({state.cities.length} cities)</span>
                    </div>
                    <ChevronDownIcon className={`h-5 w-5 text-gray-400 transition-transform ${expandedStates.includes(state.slug) ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedStates.includes(state.slug) && (
                    <div className="border-t border-gray-200 bg-gray-50">
                      <div className="px-6 py-4">
                        {state.cities.length > 0 ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {state.cities.map(city => (
                              <Link key={city.slug} href={`/how-to-start-a-vending-machine-business/${city.slug}`} className="text-chocolate hover:text-navy transition-colors text-sm py-1 hover:underline">
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
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur border-t border-gray-200 p-3 sm:hidden">
        <a href="https://vendflow.gumroad.com/l/rxbzy" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-5 py-3 rounded-lg font-semibold">Get the Guide ($79)</a>
        <div className="mt-1 text-center text-xs text-stone">Secure checkout • Legal‑ready • Lifetime updates</div>
      </div>

      <Footer />
    </main>
  )
}


