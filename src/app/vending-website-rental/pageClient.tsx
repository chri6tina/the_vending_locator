'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { 
  ChevronDownIcon, 
  CheckCircleIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  SparklesIcon,
  DocumentTextIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/solid'

export default function VendingWebsiteRentalPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeUsers, setActiveUsers] = useState(0)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Active users counter effect
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 8
      const fluctuation = Math.floor(Math.random() * 6) + 1
      setActiveUsers(baseUsers + fluctuation)
    }

    const interval = setInterval(() => {
      updateActiveUsers()
    }, Math.random() * 4000 + 3000)

    updateActiveUsers()
    return () => clearInterval(interval)
  }, [])

  const faqs = [
    {
      question: "Do I own the website/domain?",
      answer: "You rent the website and hosting service from us monthly. The website is hosted under our system, and we handle all technical maintenance. If you cancel, the website is no longer accessible. We can discuss domain options if you have specific needs."
    },
    {
      question: "What happens if I cancel?",
      answer: "If you cancel your website rental, the website will be taken down and will no longer be accessible. You can export your content and contact information before canceling if needed. There are no long-term contracts—you can cancel anytime."
    },
    {
      question: "Can I use my own domain?",
      answer: "We can discuss custom domain options depending on your plan. Most websites are hosted under our system, but we may be able to configure a custom domain for your website rental. Contact us to discuss your specific needs."
    },
    {
      question: "Can you add multiple cities or service areas?",
      answer: "Yes, we can add multiple cities or service areas to your website. This helps you expand your online presence and reach customers in different markets. Additional service areas may be subject to plan limits or additional fees—contact us to discuss your expansion needs."
    },
    {
      question: "How do leads reach me?",
      answer: "Leads reach you through the contact information displayed on your website. When someone fills out the inquiry form, it's routed to your email address. You can also display your phone number prominently so customers can call directly. All inquiries go directly to you—we don't intercept or filter them."
    },
    {
      question: "Do you run ads?",
      answer: "No, we do not run paid advertising campaigns for individual website rentals. We provide the website and hosting infrastructure. The website is designed to be found through organic search, but we don't guarantee specific rankings or run paid ads on your behalf."
    },
    {
      question: "Is SEO included?",
      answer: "Yes, basic on-page SEO is included. This includes proper title tags, meta descriptions, and content optimized for search engines. However, we don't guarantee specific search rankings or positions. SEO performance can vary based on your market, competition, and other factors beyond our control."
    },
    {
      question: "Can I upgrade later?",
      answer: "Yes, you can upgrade your plan later if you need additional features, more service areas, or expanded capabilities. Contact us to discuss upgrade options that fit your growing business needs."
    },
    {
      question: "How long does it take to launch?",
      answer: "Typically, websites are launched within a few weeks after we receive your business details. The exact timeline depends on the information you provide, any customizations needed, and our current workload. We'll provide a more specific timeline when you sign up."
    }
  ]

  return (
    <main className="min-h-screen bg-warm-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-warm-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight"
            >
              Vending Website Rental
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-4 sm:mt-6"
            >
              <p className="text-xl sm:text-2xl lg:text-3xl font-playfair font-semibold text-coral italic px-2 sm:px-0">
                You found us. Now let them find you.
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0"
            >
              Get a professional vending business website—without building or managing it yourself. 
              We build and host your site, you rent it monthly for a professional online presence.
            </motion.p>

            {/* Active Users Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 sm:mt-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-chocolate">
                  <span className="font-bold text-coral">{activeUsers}</span> people are viewing website plans right now
                </span>
              </div>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto"
            >
              {[
                { icon: CheckBadgeIcon, text: 'Professional Design', color: 'text-green-600' },
                { icon: StarIcon, text: 'Easy Setup', color: 'text-yellow-500' },
                { icon: ShieldCheckIcon, text: 'Secure Hosting', color: 'text-blue-600' },
                { icon: ClockIcon, text: 'Fast Launch', color: 'text-purple-600' },
              ].map((signal, index) => {
                const Icon = signal.icon
                return (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Icon className={`h-5 w-5 ${signal.color}`} />
                      <span className="text-sm font-medium text-chocolate">{signal.text}</span>
                    </div>
                  </div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/pricing"
                className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Website Plans
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-transparent text-chocolate border-2 border-chocolate px-8 py-3 rounded-lg font-semibold hover:bg-chocolate hover:text-white transition-colors"
              >
                Talk to Us →
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6 sm:mt-8"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">M</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">S</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">D</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">L</span>
                  </div>
                </div>
                <span className="text-sm text-chocolate/70">Join 500+ vending operators</span>
              </div>
              <p className="text-sm text-chocolate/60">
                "Got my website live in 2 weeks!" - <span className="font-semibold">Sarah M., Florida</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Intro Paragraph */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-warm-white to-white rounded-xl p-8 border border-gray-200 shadow-sm"
            >
              <p className="text-lg text-stone leading-relaxed">
                We build and host your website—you rent it monthly. Your phone number, email, and contact form are front and center, making it easy for customers to reach you. It's a professional lead-capture site that helps you get more inquiries and grow your vending business.{' '}
                <span className="text-coral font-semibold">No cold calling.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What This Is */}
      <div className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold text-charcoal sm:text-4xl mb-4"
            >
              What This Is
            </motion.h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: GlobeAltIcon, text: "A done-for-you website we build and host" },
              { icon: PhoneIcon, text: "Your phone/email/contact form displayed" },
              { icon: MapPinIcon, text: "Service area + vending/micro-market offerings" },
              { icon: SparklesIcon, text: "Built to look credible and convert inquiries" },
              { icon: ShieldCheckIcon, text: "Ongoing hosting + maintenance included" }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-coral" />
                    </div>
                    <p className="text-stone leading-relaxed pt-1">{item.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* What This Is Not */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6 text-center">
                What This Is Not
              </h2>
              <div className="bg-warm-white rounded-xl p-8 border border-gray-200">
                <p className="text-stone mb-6 font-semibold text-lg">
                  It's important to understand what this service is not:
                </p>
                <ul className="space-y-4 mb-6">
                  {[
                    "Not a marketplace membership",
                    "Not a guarantee of rankings or leads",
                    "Not machine placement services",
                    "Not revenue-share or commissions (unless we explicitly add later)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-stone text-lg">• {item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white rounded-lg p-4 border-l-4 border-navy">
                  <p className="text-stone">
                    We provide the website and infrastructure; performance can vary by market and competition.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Who It's For */}
      <div className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold text-charcoal sm:text-4xl mb-4"
            >
              Who It's For
            </motion.h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: RocketLaunchIcon, text: "New operators who need credibility fast" },
              { icon: WrenchScrewdriverIcon, text: "Operators who don't want to manage websites/hosting" },
              { icon: MapPinIcon, text: "Operators expanding into new cities/services" },
              { icon: SparklesIcon, text: "Operators who want a clean, professional lead funnel" }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-navy" />
                    </div>
                    <p className="text-stone leading-relaxed pt-1">{item.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* What You Get */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold text-charcoal sm:text-4xl mb-4"
            >
              What You Get
            </motion.h2>
            <p className="text-stone font-semibold text-lg">Deliverables:</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: DocumentTextIcon, text: "A professionally written homepage (or single-page site) focused on conversions" },
              { icon: PhoneIcon, text: "Your contact info prominently displayed" },
              { icon: EnvelopeIcon, text: "Inquiry form routed to your email (and optionally your phone)" },
              { icon: DevicePhoneMobileIcon, text: "Mobile-friendly + fast loading" },
              { icon: MagnifyingGlassIcon, text: "Basic on-page SEO (titles, descriptions)" },
              { icon: WrenchScrewdriverIcon, text: "Ongoing hosting and minor updates (minor updates include small text changes, contact info updates, and basic content adjustments within plan limits)" }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-shrink-0 w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-coral" />
                    </div>
                    <p className="text-stone leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold text-charcoal sm:text-4xl mb-4"
            >
              How It Works
            </motion.h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: "Choose your plan", description: "Select the website rental plan that fits your needs and budget." },
                { step: 2, title: "Send business details", description: "Provide your service area, offerings, phone/email, and logo if available." },
                { step: 3, title: "We publish your website", description: "We build and publish your website under our hosting system." },
                { step: 4, title: "You start receiving inquiries", description: "Once live, customers can find you and contact you through your website." },
                { step: 5, title: "Request minor edits anytime", description: "Request small updates and changes within your plan limits." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-navy text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-charcoal mb-2 text-lg">{item.title}</h3>
                      <p className="text-stone">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold text-charcoal sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-stone">
              Everything you need to know about our website rental service.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-warm-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white transition-colors"
                >
                  <span className="font-semibold text-charcoal pr-4">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-coral flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-white">
                    <p className="text-stone leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-navy to-navy-light py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-playfair font-bold text-white sm:text-4xl mb-4">
              Ready to get your vending website live?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get started with a professional website that helps customers find and contact you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-warm-white transition-colors"
              >
                View Website Plans
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-coral text-white px-8 py-3 rounded-lg font-semibold hover:bg-coral/90 transition-colors"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-warm-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-stone/70 text-center">
              We provide website hosting and lead-capture infrastructure. We do not guarantee a specific number of leads, rankings, or revenue.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
