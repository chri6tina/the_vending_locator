'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { MapPinIcon, CheckCircleIcon, DocumentTextIcon, ShieldCheckIcon, ClockIcon, BuildingOffice2Icon, CurrencyDollarIcon, ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { stateFilingFees, calculateTotalPrice, SERVICE_FEE } from '@/data/stateFilingFees'

// All 50 states + DC
const allStates = [
  { name: 'Alabama', slug: 'alabama' },
  { name: 'Alaska', slug: 'alaska' },
  { name: 'Arizona', slug: 'arizona' },
  { name: 'Arkansas', slug: 'arkansas' },
  { name: 'California', slug: 'california' },
  { name: 'Colorado', slug: 'colorado' },
  { name: 'Connecticut', slug: 'connecticut' },
  { name: 'Delaware', slug: 'delaware' },
  { name: 'Florida', slug: 'florida' },
  { name: 'Georgia', slug: 'georgia' },
  { name: 'Hawaii', slug: 'hawaii' },
  { name: 'Idaho', slug: 'idaho' },
  { name: 'Illinois', slug: 'illinois' },
  { name: 'Indiana', slug: 'indiana' },
  { name: 'Iowa', slug: 'iowa' },
  { name: 'Kansas', slug: 'kansas' },
  { name: 'Kentucky', slug: 'kentucky' },
  { name: 'Louisiana', slug: 'louisiana' },
  { name: 'Maine', slug: 'maine' },
  { name: 'Maryland', slug: 'maryland' },
  { name: 'Massachusetts', slug: 'massachusetts' },
  { name: 'Michigan', slug: 'michigan' },
  { name: 'Minnesota', slug: 'minnesota' },
  { name: 'Mississippi', slug: 'mississippi' },
  { name: 'Missouri', slug: 'missouri' },
  { name: 'Montana', slug: 'montana' },
  { name: 'Nebraska', slug: 'nebraska' },
  { name: 'Nevada', slug: 'nevada' },
  { name: 'New Hampshire', slug: 'new-hampshire' },
  { name: 'New Jersey', slug: 'new-jersey' },
  { name: 'New Mexico', slug: 'new-mexico' },
  { name: 'New York', slug: 'new-york' },
  { name: 'North Carolina', slug: 'north-carolina' },
  { name: 'North Dakota', slug: 'north-dakota' },
  { name: 'Ohio', slug: 'ohio' },
  { name: 'Oklahoma', slug: 'oklahoma' },
  { name: 'Oregon', slug: 'oregon' },
  { name: 'Pennsylvania', slug: 'pennsylvania' },
  { name: 'Rhode Island', slug: 'rhode-island' },
  { name: 'South Carolina', slug: 'south-carolina' },
  { name: 'South Dakota', slug: 'south-dakota' },
  { name: 'Tennessee', slug: 'tennessee' },
  { name: 'Texas', slug: 'texas' },
  { name: 'Utah', slug: 'utah' },
  { name: 'Vermont', slug: 'vermont' },
  { name: 'Virginia', slug: 'virginia' },
  { name: 'Washington', slug: 'washington' },
  { name: 'Washington DC', slug: 'washington-dc' },
  { name: 'West Virginia', slug: 'west-virginia' },
  { name: 'Wisconsin', slug: 'wisconsin' },
  { name: 'Wyoming', slug: 'wyoming' },
]

export default function EinLLCDirectory() {
  const [expandedStates, setExpandedStates] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const toggleState = (stateSlug: string) => {
    setExpandedStates(prev => 
      prev.includes(stateSlug) 
        ? prev.filter(s => s !== stateSlug)
        : [...prev, stateSlug]
    )
  }

  // Filter states based on search query
  const filteredStates = allStates.filter(state =>
    state.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-playfair font-bold tracking-tight text-chocolate sm:text-4xl lg:text-5xl"
            >
              File Your EIN & Form Your LLC
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-chocolate/70 leading-relaxed"
            >
              Complete business formation service for all 50 states. File your EIN and form your LLC quickly and securely. 
              State filing fee + $50 service fee. Fast, professional, and hassle-free.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="flex flex-col items-center">
                <ClockIcon className="h-12 w-12 text-coral mb-3" />
                <h3 className="font-semibold text-navy mb-2">Fast Processing</h3>
                <p className="text-sm text-charcoal/70">LLC formation in 1-2 business days</p>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheckIcon className="h-12 w-12 text-coral mb-3" />
                <h3 className="font-semibold text-navy mb-2">Secure & Safe</h3>
                <p className="text-sm text-charcoal/70">All information encrypted and protected</p>
              </div>
              <div className="flex flex-col items-center">
                <DocumentTextIcon className="h-12 w-12 text-coral mb-3" />
                <h3 className="font-semibold text-navy mb-2">Complete Service</h3>
                <p className="text-sm text-charcoal/70">EIN filing + LLC formation included</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <section className="bg-warm-white border-t border-gray-200 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate"
            >
              Why Use Our EIN & LLC Filing Service?
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
            >
              <BuildingOffice2Icon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">All 50 States</h3>
              <p className="text-charcoal/80">
                File your LLC in any state across the United States. We handle all state-specific requirements 
                and filing procedures to ensure your business is properly formed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
            >
              <CurrencyDollarIcon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Transparent Pricing</h3>
              <p className="text-charcoal/80">
                State filing fee + $50 service fee. No hidden costs, no surprises. You pay exactly what's 
                required by your state plus our flat service fee.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
            >
              <CheckCircleIcon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Complete Service</h3>
              <p className="text-charcoal/80">
                We handle both your EIN (Employer Identification Number) application and LLC formation. 
                Everything you need to start your business in one simple process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* States Directory */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center"
            >
              File Your LLC by State
            </motion.h2>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone/60" />
                <input
                  type="text"
                  placeholder="Search for your state..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent text-chocolate placeholder-stone/50 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone/60 hover:text-stone transition-colors"
                  >
                    <span className="text-xl">×</span>
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="mt-2 text-sm text-stone/70">
                  {filteredStates.length} {filteredStates.length === 1 ? 'state' : 'states'} found
                </p>
              )}
            </motion.div>
            
            <div className="grid gap-4">
              {filteredStates.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md border border-stone/20 p-8 text-center">
                  <p className="text-stone/70">No states found matching "{searchQuery}"</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-4 text-coral hover:text-coral/80 font-medium"
                  >
                    Clear search
                  </button>
                </div>
              ) : (
                filteredStates.map((state, index) => {
                const stateFee = stateFilingFees[state.slug] || 0
                const totalPrice = calculateTotalPrice(state.slug)
                const isExpanded = expandedStates.includes(state.slug)
                
                return (
                  <motion.div
                    key={state.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.02 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-stone/20"
                  >
                    <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3 flex-1">
                        <MapPinIcon className="h-5 w-5 text-coral flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-navy">{state.name}</h3>
                          <p className="text-sm text-stone mt-0.5">
                            State Fee: ${stateFee.toFixed(2)} + Service Fee: ${SERVICE_FEE.toFixed(2)} = Total: ${totalPrice.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/ein-llc/${state.slug}`}
                        className="ml-4 px-5 py-2.5 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors text-sm font-medium flex items-center gap-2 whitespace-nowrap min-w-[160px] justify-center"
                      >
                        File LLC
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )
              }))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-12 bg-navy rounded-lg p-8 text-center"
            >
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                Ready to Form Your LLC?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Select your state above to get started. Our complete service includes EIN filing and LLC formation 
                for a flat $50 service fee plus your state's filing fee.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate"
            >
              How It Works
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
              <h3 className="text-xl font-semibold text-navy mb-3">Choose Your State</h3>
              <p className="text-charcoal/80">
                Select the state where you want to form your LLC from our directory above.
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
              <h3 className="text-xl font-semibold text-navy mb-3">Complete Checkout</h3>
              <p className="text-charcoal/80">
                Pay the state filing fee plus our $50 service fee through our secure checkout.
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
              <h3 className="text-xl font-semibold text-navy mb-3">We Handle Everything</h3>
              <p className="text-charcoal/80">
                We file your LLC with the state and apply for your EIN with the IRS.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-coral">4</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Receive Documents</h3>
              <p className="text-charcoal/80">
                Get your LLC formation documents and EIN confirmation within 1-2 business days.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                What is included in your EIN & LLC filing service?
              </h3>
              <p className="text-charcoal/80">
                Our service includes filing your LLC formation documents with your state's Secretary of State 
                (or equivalent agency) and applying for your EIN (Employer Identification Number) with the IRS. 
                You'll receive all confirmation documents and certificates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                How much does it cost?
              </h3>
              <p className="text-charcoal/80">
                The total cost is your state's LLC filing fee plus our $50 service fee. State filing fees vary 
                by state (ranging from $40 to $500+), so the total cost depends on which state you choose. 
                You can see the exact pricing for each state in our directory above.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                How long does it take?
              </h3>
              <p className="text-charcoal/80">
                Most LLC formations are processed within 1-2 business days by the state. EIN assignment from the 
                IRS typically happens within minutes to a few hours after application. You'll receive all 
                documents via email once processing is complete.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                Do I need to provide any information upfront?
              </h3>
              <p className="text-charcoal/80">
                Yes, you'll need to provide basic information including your desired LLC name, business address, 
                registered agent information, and member/manager details. After checkout, we'll send you a 
                simple form to collect this information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                Can I form an LLC in a state where I don't live?
              </h3>
              <p className="text-charcoal/80">
                Yes, you can form an LLC in any state regardless of where you live. Many businesses choose to 
                form in states like Delaware, Wyoming, or Nevada for business-friendly laws. However, if you 
                operate in a different state, you may need to register as a foreign LLC in that state.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                What is an EIN and do I need one?
              </h3>
              <p className="text-charcoal/80">
                An EIN (Employer Identification Number) is a federal tax ID number issued by the IRS. While 
                single-member LLCs can use the owner's Social Security Number, we recommend getting an EIN to 
                protect your personal SSN, open business bank accounts, hire employees, and build business credit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


