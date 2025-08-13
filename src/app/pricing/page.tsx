'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, UsersIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

const faqs = [
  {
    question: "What's included in the Basic package?",
    answer: "The Basic package includes access to 50 qualified vending locations per month with basic lead details. Perfect for operators just getting started in the industry."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your subscription plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle."
  },
  {
    question: "How quickly do I receive my location leads?",
    answer: "Subscription packages provide immediate access to our database. For one-time location packages, delivery typically takes 2-4 weeks depending on the package level."
  },
  {
    question: "Are the contact details verified?",
    answer: "Yes, all contact information is verified and updated regularly. We ensure you have the correct decision-maker contact details for each location."
  },
  {
    question: "What if a location is no longer available?",
    answer: "We provide replacement leads if a location becomes unavailable. Our database is constantly updated to ensure accuracy and availability."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day satisfaction guarantee on all subscription plans. If you're not satisfied, we'll provide a full refund."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no cancellation fees. You'll continue to have access until the end of your current billing period."
  },
  {
    question: "Do you provide support for new vending operators?",
    answer: "Yes! Our Start and Gold packages include comprehensive support including vending eCourses, cold call scripts, and business guidance to help you succeed."
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 px-6 py-10 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-playfair font-bold leading-10 tracking-tight text-chocolate">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq, index) => (
            <div key={index} className="pt-6">
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-start justify-between text-left text-chocolate"
                >
                  <span className="text-base font-semibold leading-7">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <ChevronDownIcon
                      className={`h-6 w-6 transform transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </dt>
              <dd className={`mt-2 pr-12 transition-all duration-200 ${
                openIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <p className="text-base leading-7 text-chocolate/70">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default function Pricing() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Texas',
    'Sarah in Florida', 
    'David from California',
    'Lisa in New York',
    'Tom from Illinois',
    'Jennifer in Ohio',
    'Robert from Georgia',
    'Amanda in Michigan'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  const trustSignals = [
    { icon: CheckBadgeIcon, text: 'Verified Locations', color: 'text-green-600' },
    { icon: StarIcon, text: '4.9/5 Rating', color: 'text-yellow-500' },
    { icon: ShieldCheckIcon, text: '30-Day Guarantee', color: 'text-blue-600' },
    { icon: ClockIcon, text: 'Instant Access', color: 'text-purple-600' },
  ]

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 8
      const fluctuation = Math.floor(Math.random() * 6) + 1
      setActiveUsers(baseUsers + fluctuation)
    }

    // Update every 3-7 seconds for natural fluctuation
    const interval = setInterval(() => {
      updateActiveUsers()
    }, Math.random() * 4000 + 3000)

    updateActiveUsers() // Initial update

    return () => clearInterval(interval)
  }, [])

  // Rotating user names
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => (prev + 1) % userNames.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [userNames.length])

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Trust Signals Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {trustSignals.map((signal, index) => (
                <motion.div
                  key={signal.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200"
                >
                  <signal.icon className={`h-4 w-4 ${signal.color}`} />
                  <span className="text-sm font-medium text-chocolate">{signal.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Active Users Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-chocolate">
                  <span className="font-bold text-coral">{activeUsers}</span> people are choosing plans right now
                </span>
              </div>
              <motion.div
                key={currentUserIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-2 text-xs text-chocolate/70"
              >
                Including {userNames[currentUserIndex]}
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl font-playfair font-bold tracking-tight text-chocolate sm:text-4xl"
            >
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg leading-8 text-chocolate/70"
            >
              Choose the plan that fits your vending business needs. Start small and scale up as you grow.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <UsersIcon className="h-5 w-5 text-coral" />
                <span className="text-sm text-chocolate/70">Trusted by 2,847+ vending operators</span>
              </div>
              <p className="text-xs text-chocolate/60">
                &ldquo;Saved me 3 months of research!&rdquo; - <span className="font-semibold">Mike R., Texas</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <PricingTable />

      {/* Vending Course Promotion */}
      <div className="bg-gradient-to-r from-navy to-blue-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-6xl mb-6"
              >
                🎓
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl font-playfair font-bold tracking-tight text-white sm:text-4xl mb-6"
              >
                Looking for a Vending Course?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl leading-8 text-white/90 mb-8 max-w-3xl mx-auto"
              >
                Master the fundamentals of vending machine business with our comprehensive course. 
                Learn location research, contract negotiation, machine selection, and profit optimization.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="https://gumroad.com/l/vending-course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-coral hover:bg-coral/90 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  🚀 Get the Course Now
                </a>
                <div className="text-white/70 text-sm">
                  <span className="font-semibold text-coral">$97</span> • Instant Access • Lifetime Updates
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
              >
                <div className="text-white/80">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="font-semibold text-white">12 Modules</div>
                  <div className="text-sm">Comprehensive Coverage</div>
                </div>
                <div className="text-white/80">
                  <div className="text-2xl mb-2">⏱️</div>
                  <div className="font-semibold text-white">8+ Hours</div>
                  <div className="text-sm">Video Content</div>
                </div>
                <div className="text-white/80">
                  <div className="text-2xl mb-2">💎</div>
                  <div className="font-semibold text-white">Bonus</div>
                  <div className="text-sm">Templates & Scripts</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <div className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold tracking-tight text-chocolate sm:text-4xl"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-chocolate/70"
            >
              Join thousands of vending operators who trust us to find their next profitable location.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <a
                href="/hot-leads"
                className="btn-primary"
              >
                Get Hot Leads
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Contact Sales
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Zip Code Modal */}
      <ZipCodeModalWrapper />
    </main>
  )
}
