'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, MagnifyingGlassIcon, EnvelopeIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function HowItWorksPage() {
  const [activeUsers, setActiveUsers] = useState(0)

  useEffect(() => {
    const update = () => {
      const base = 12
      const fluctuation = Math.floor(Math.random() * 8) + 1
      setActiveUsers(base + fluctuation)
    }
    const interval = setInterval(update, Math.random() * 2000 + 2000)
    update()
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-cream">
      <Header />

      {/* Hero with engaging, conversion-focused design */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
          <div className="grid lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="text-center lg:text-left mx-auto max-w-2xl">
              {/* Active Users Counter Pill */}
              <div className="mb-6 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-chocolate">
                    <span className="font-bold text-coral">{activeUsers}</span> people are choosing plans right now
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate px-4 sm:px-0">
                How The Vending Locator Works
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-chocolate/70 px-4 sm:px-0 max-w-xl mx-auto lg:mx-0">
                A simple, transparent process to find the best vending locations — researched, verified, and delivered to you.
              </p>

              {/* Trust/Feature Badges */}
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="rounded-xl p-4 border border-navy/20 bg-navy/5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-navy text-white flex items-center justify-center">
                      <CheckBadgeIcon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-chocolate">Verified Locations</span>
                  </div>
                </div>
                <div className="rounded-xl p-4 border border-navy/20 bg-navy/5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-navy text-white flex items-center justify-center">
                      <StarIcon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-chocolate">4.9/5 Rating</span>
                  </div>
                </div>
                <div className="rounded-xl p-4 border border-navy/20 bg-navy/5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-navy text-white flex items-center justify-center">
                      <ShieldCheckIcon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-chocolate">Secure & Reliable</span>
                  </div>
                </div>
                <div className="rounded-xl p-4 border border-navy/20 bg-navy/5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-navy text-white flex items-center justify-center">
                      <ClockIcon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-chocolate">Quality Research</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 px-4 sm:px-0">
                <Link
                  href="#process"
                  className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-xl font-semibold shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  View Process
                </Link>
                <Link
                  href="#pricing"
                  className="w-full sm:w-auto bg-transparent text-navy border-2 border-navy px-8 py-3 rounded-xl font-semibold hover:bg-navy/10 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  View Pricing →
                </Link>
              </div>
            </div>

            {/* Right-side workflow graphic (3-step horizontal flow) */}
            <div className="mt-10 lg:mt-0 lg:justify-self-end lg:self-center w-full">
              <div className="relative mx-auto w-full max-w-md lg:max-w-md xl:max-w-lg">
                <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] blur-2xl" style={{ background: 'radial-gradient(600px 120px at 80% 10%, #00C5F51a, transparent 60%)' }} />
                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 lg:p-7 xl:p-8">
                  {/* Heading */}
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-chocolate">Your 3-Step Path</span>
                    <span className="text-xs text-chocolate/60">Fast & simple</span>
                  </div>

                  {/* Horizontal stepper on large screens */}
                  <div className="hidden lg:block">
                    <div className="flex items-center justify-between">
                      <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="group flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center shadow-sm transition-transform group-hover:scale-105">
                          <MapPinIcon className="h-6 w-6" />
                        </div>
                        <div className="mt-2 text-[11px] uppercase tracking-wider text-chocolate/60">Step 1</div>
                        <div className="text-sm font-semibold text-chocolate">Submit ZIP Code</div>
                      </motion.div>
                      <div className="flex-1 mx-4 h-0.5 bg-[#00C5F5]/20"></div>
                      <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05, duration: 0.35 }} className="group flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-navy/10 text-navy flex items-center justify-center border border-navy/20 transition-transform group-hover:scale-105">
                          <MagnifyingGlassIcon className="h-6 w-6" />
                        </div>
                        <div className="mt-2 text-[11px] uppercase tracking-wider text-chocolate/60">Step 2</div>
                        <div className="text-sm font-semibold text-chocolate">We Research</div>
                      </motion.div>
                      <div className="flex-1 mx-4 h-0.5 bg-[#00C5F5]/20"></div>
                      <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.35 }} className="group flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-navy/10 text-navy flex items-center justify-center border border-navy/20 transition-transform group-hover:scale-105">
                          <EnvelopeIcon className="h-6 w-6" />
                        </div>
                        <div className="mt-2 text-[11px] uppercase tracking-wider text-chocolate/60">Step 3</div>
                        <div className="text-sm font-semibold text-chocolate">You Get Results</div>
                      </motion.div>
                    </div>

                    {/* Subtext under stepper */}
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <div className="text-[12px] text-chocolate/70">ZIP or city preferences</div>
                      <div className="text-[12px] text-chocolate/70">Manual outreach + verification</div>
                      <div className="text-[12px] text-chocolate/70">Delivery in 3–5 business days</div>
                    </div>
                  </div>
                  {/* Compact grid on small screens */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:hidden">
                    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center">
                        <MapPinIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-chocolate/60">Step 1</div>
                        <div className="text-sm font-semibold text-chocolate">Submit ZIP Code</div>
                      </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05, duration: 0.3 }} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center border border-navy/20">
                        <MagnifyingGlassIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-chocolate/60">Step 2</div>
                        <div className="text-sm font-semibold text-chocolate">We Research</div>
                      </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.3 }} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center border border-navy/20">
                        <EnvelopeIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-chocolate/60">Step 3</div>
                        <div className="text-sm font-semibold text-chocolate">You Get Results</div>
                      </div>
                    </motion.div>
                  </div>
                  {/* Divider and reassurance */}
                  <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                  <div className="flex items-start gap-3 rounded-xl bg-cream/60 p-3">
                    <CheckBadgeIcon className="h-5 w-5 text-[#00C5F5]" />
                    <p className="text-sm text-chocolate/80">We send verified leads to help your vending business grow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Rundown Section */}
      <div id="research" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-cream/40 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate">
              We research your ZIP code to find verified businesses for you to cold call
            </h2>
            <p className="mt-4 text-chocolate/75 leading-relaxed">
              Our team zeroes in on your target ZIP code and nearby areas, then compiles businesses that actually make sense for vending placement. We identify decision-makers, confirm hours and business type, and ensure contact details are usable. The result is a practical, cold‑call‑ready list you can act on immediately—no fluff, no dead ends.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-xl bg-white border border-gray-200 p-4">
                <CheckBadgeIcon className="h-5 w-5 text-navy mt-0.5" />
                <p className="text-sm text-chocolate/80">Verified business details: name, phone, address, and point of contact.</p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white border border-gray-200 p-4">
                <CheckBadgeIcon className="h-5 w-5 text-navy mt-0.5" />
                <p className="text-sm text-chocolate/80">Focused outreach list tailored to your machine type and goals.</p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white border border-gray-200 p-4">
                <CheckBadgeIcon className="h-5 w-5 text-navy mt-0.5" />
                <p className="text-sm text-chocolate/80">Cold‑call ready formatting so you can start contacting locations right away.</p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white border border-gray-200 p-4">
                <CheckBadgeIcon className="h-5 w-5 text-navy mt-0.5" />
                <p className="text-sm text-chocolate/80">Replacements for any bad or unavailable entries—no wasted effort.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div id="pricing" className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate mb-6">
              Choose Your Plan
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
              Get access to qualified vending machine locations with flexible pricing options.
            </p>
          </div>
          <PricingTable />
        </div>
      </div>

      

      {/* Process Section */}
      <div id="process" className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:gap-10">
            <div className="rounded-xl border border-gray-200 p-6 bg-cream/40">
              <h3 className="text-xl font-semibold text-chocolate">1) Choose a Plan</h3>
              <p className="mt-2 text-chocolate/70">Select the package that fits your goals and budget. No subscriptions — one-time purchase.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 bg-cream/40">
              <h3 className="text-xl font-semibold text-chocolate">2) Tell Us Your Area</h3>
              <p className="mt-2 text-chocolate/70">Share your preferred city, zip codes, or radius. We tailor research to your market.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 bg-cream/40">
              <h3 className="text-xl font-semibold text-chocolate">3) We Research & Verify</h3>
              <p className="mt-2 text-chocolate/70">Our team confirms decision-makers and foot traffic — only qualified locations make the list.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 bg-cream/40">
              <h3 className="text-xl font-semibold text-chocolate">4) Delivery in 3–5 Business Days</h3>
              <p className="mt-2 text-chocolate/70">Receive your leads via secure delivery. We replace any bad or unavailable entries.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </main>
  )
}


