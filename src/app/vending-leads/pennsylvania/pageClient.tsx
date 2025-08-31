'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, HeartIcon, ShoppingBagIcon, TruckIcon, BuildingLibraryIcon } from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function PennsylvaniaVendingLeadsPage() {
  // State display name
  const stateDisplayName = 'Pennsylvania';
  
  // State-specific data
  const stateData = {
    'name': 'Pennsylvania',
    'population': '12.8M+',
    'businesses': '1M+',
    'industries': '15+',
    'verifiedLocations': '2K-5K',
    'rating': '4.8/5',
    'description': 'Historic state with diverse business opportunities'
  };
  
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(32)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set())

  // User names for active users counter
  const [userNames, setUserNames] = useState([
    'Mike from Philadelphia', 'Sarah in Pittsburgh', 'David in York', 'Lisa in Pennsylvania',
    'Tom in Pennsylvania', 'Jennifer in Pennsylvania', 'Robert in Pennsylvania', 'Amanda in Pennsylvania',
    'Chris in Pennsylvania', 'Maria in Pennsylvania', 'James in Pennsylvania', 'Emily in Pennsylvania'
  ])

  // Active users counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        const newValue = prev + change
        return Math.max(28, Math.min(45, newValue))
      })
    }, 4000);
    return () => clearInterval(interval)
  }, [])

  // Smart rotation of user names
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => {
        if (usedNames.size > userNames.length * 0.8) {
          setUsedNames(new Set())
        }
        let attempts = 0
        let nextIndex = prev
        while (attempts < 50) {
          nextIndex = (nextIndex + 1) % userNames.length
          if (!usedNames.has(nextIndex)) {
            setUsedNames(prev => new Set([...prev, nextIndex]));
            return nextIndex
          }
          attempts++
        }
        const randomIndex = Math.floor(Math.random() * userNames.length)
        setUsedNames(prev => new Set([...prev, randomIndex]));
        return randomIndex
      })
    }, 5000);
    return () => clearInterval(interval)
  }, [userNames.length, usedNames])



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
              <Link href="/vending-leads" className="hover:text-navy transition-colors">
                Vending Leads
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{stateDisplayName}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              {/* Active Users Counter */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-6 sm:mt-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto mb-6"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-chocolate">
                    <span className="font-bold text-coral">{activeUsers}</span> people are choosing plans right now
                  </span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 leading-tight"
              >
                Vending Machine Locations in{' '}
                <span className="text-navy">{stateDisplayName}</span>
              </motion.h1>

              {/* State-Specific Value Proposition */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-stone mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Get pre-qualified vending machine locations across Pennsylvania's diverse business landscape. 
                From Philadelphia's urban centers to Pittsburgh's industrial heritage, access verified businesses 
                with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto mb-8"
              >
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-chocolate">Verified Locations</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <StarIcon className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-chocolate">4.8/5 Rating</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-chocolate">Secure & Reliable</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-chocolate">Quality Research</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              >
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </button>
                <Link 
                  href="/hot-leads"
                  className="w-full sm:w-auto bg-coral hover:bg-coral/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Hot Leads
                </Link>
              </motion.div>

              {/* Social Proof Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
              >
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm text-center">
                  <div className="text-2xl font-bold text-navy mb-1">3</div>
                  <div className="text-sm text-stone">Cities</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm text-center">
                  <div className="text-2xl font-bold text-navy mb-1">770+</div>
                  <div className="text-sm text-stone">Businesses</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-navy mb-1">4.8/5</div>
                  <div className="text-sm text-stone">Rating</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        {/* Business Landscape Section */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                {stateDisplayName}'s Business Landscape
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Discover the diverse business opportunities across {stateDisplayName}'s major cities and industries
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
              >
                <BuildingOfficeIcon className="h-12 w-12 text-navy mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-3">Major Cities</h3>
                <p className="text-stone mb-4">Philadelphia, Pittsburgh, York, and other urban centers with diverse business opportunities</p>
                <div className="text-sm text-navy font-medium">3+ Major Cities</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
              >
                <HeartIcon className="h-12 w-12 text-navy mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-3">Healthcare</h3>
                <p className="text-stone mb-4">Major medical centers, hospitals, and healthcare facilities across the state</p>
                <div className="text-sm text-navy font-medium">100+ Healthcare Locations</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
              >
                <ShoppingBagIcon className="h-12 w-12 text-navy mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-3">Retail & Hospitality</h3>
                <p className="text-stone mb-4">Shopping centers, hotels, restaurants, and entertainment venues</p>
                <div className="text-sm text-navy font-medium">200+ Retail Locations</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
              >
                <TruckIcon className="h-12 w-12 text-navy mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-3">Manufacturing</h3>
                <p className="text-stone mb-4">Industrial facilities, manufacturing plants, and distribution centers</p>
                <div className="text-sm text-navy font-medium">150+ Manufacturing Sites</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
              >
                <BuildingLibraryIcon className="h-12 w-12 text-navy mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-3">Education</h3>
                <p className="text-stone mb-4">Universities, colleges, schools, and educational institutions</p>
                <div className="text-sm text-navy font-medium">80+ Educational Locations</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
              >
                <AcademicCapIcon className="h-12 w-12 text-navy mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-3">Government</h3>
                <p className="text-stone mb-4">Government offices, courthouses, and administrative buildings</p>
                <div className="text-sm text-navy font-medium">50+ Government Locations</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Get Access to Qualified Vending Machine Locations in {stateDisplayName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Choose the perfect plan to access verified vending machine locations across {stateDisplayName}
              </motion.p>
            </div>
            <PricingTable />
          </div>
        </section>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course */}
        <VendingCourse />

        {/* FAQ Section */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-2xl mx-auto"
              >
                Everything you need to know about vending machine opportunities in {stateDisplayName}
              </motion.p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: `What types of businesses in ${stateDisplayName} are best for vending machines?`,
                  answer: `${stateDisplayName} offers diverse opportunities including healthcare facilities, manufacturing plants, educational institutions, government buildings, and retail centers. Philadelphia and Pittsburgh have particularly high concentrations of businesses suitable for vending machines.`
                },
                {
                  question: `How quickly can I get vending machine locations in ${stateDisplayName}?`,
                  answer: `Our delivery times range from 3-5 days depending on your package. We prioritize orders and provide verified locations with complete contact information to help you start placing machines quickly.`
                },
                {
                  question: `Are the vending machine locations in ${stateDisplayName} pre-qualified?`,
                  answer: `Yes, all locations are pre-qualified and verified. We research each business to ensure they meet our criteria for employee count, business type, and vending machine potential before including them in our database.`
                },
                {
                  question: `What industries in ${stateDisplayName} have the highest vending machine potential?`,
                  answer: `Healthcare facilities, manufacturing plants, educational institutions, and government buildings in ${stateDisplayName} typically have the highest vending machine potential due to consistent foot traffic and employee counts.`
                },
                {
                  question: `Can I get locations in specific cities within ${stateDisplayName}?`,
                  answer: `Absolutely! We offer locations across major cities like Philadelphia, Pittsburgh, and York, as well as smaller communities throughout the state. Our radius-based search ensures you get locations within your preferred area.`
                },
                {
                  question: `What information do I receive with each vending machine location?`,
                  answer: `Each location includes the business name, address, phone number, employee count, and business category. Higher-tier packages include additional details like contact person names and business descriptions.`
                },
                {
                  question: `How do I know if a business in ${stateDisplayName} is suitable for vending machines?`,
                  answer: `We evaluate each business based on employee count, business type, accessibility, and vending machine potential. Our research team ensures only suitable locations are included in our database.`
                },
                {
                  question: `What support do you provide for vending machine placement in ${stateDisplayName}?`,
                  answer: `We provide comprehensive support including cold call scripts, contract templates, and business guidance. Our higher-tier packages also include dedicated account management and priority support.`
                },
                {
                  question: `Are there seasonal considerations for vending machines in ${stateDisplayName}?`,
                  answer: `${stateDisplayName}'s diverse climate and business landscape means vending machines can be successful year-round. Indoor locations in healthcare, education, and manufacturing facilities provide consistent opportunities regardless of season.`
                },
                {
                  question: `How do I get started with vending machine locations in ${stateDisplayName}?`,
                  answer: `Simply choose a package that fits your needs, provide your zip code for location targeting, and we'll deliver verified vending machine locations within 3-5 days. Our comprehensive packages include everything you need to succeed.`
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-charcoal mb-3">{faq.question}</h3>
                  <p className="text-stone leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Zip Code Modal Wrapper */}
        <ZipCodeModalWrapper />
      </div>
      
      <Footer />
    </>
  )
}