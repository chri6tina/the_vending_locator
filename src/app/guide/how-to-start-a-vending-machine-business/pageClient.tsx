'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function VendingBusinessGuidePage() {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-warm-white via-cream to-warm-white">
      {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-navy to-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                How to Start a<br />
                <span className="text-coral">Vending Machine Business</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
                Your complete guide to launching and growing a successful vending machine business
              </p>
            </motion.div>
              </div>
        </section>

        {/* Guide Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">
                  Getting Started with Your Vending Machine Business
                </h2>
                
                <p className="text-lg text-stone mb-6">
                  Starting a vending machine business can be a profitable and relatively low-maintenance venture. 
                  This guide will walk you through the essential steps to get started.
                </p>

                <h3 className="text-2xl font-semibold text-charcoal mb-4">Step 1: Research and Planning</h3>
                <p className="text-stone mb-4">
                  Before investing in vending machines, research your local market. Identify high-traffic locations 
                  such as office buildings, hospitals, schools, and shopping centers. Understand the competition 
                  and potential profit margins in your area.
                </p>

                <h3 className="text-2xl font-semibold text-charcoal mb-4">Step 2: Choose Your Vending Machine Type</h3>
                <p className="text-stone mb-4">
                  Decide what type of products you want to sell. Common options include:
                </p>
                <ul className="list-disc pl-6 text-stone mb-4">
                  <li>Snack machines</li>
                  <li>Beverage machines</li>
                  <li>Combination machines</li>
                  <li>Specialty machines (coffee, ice cream, etc.)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-charcoal mb-4">Step 3: Find Prime Locations</h3>
                <p className="text-stone mb-4">
                  Location is crucial for vending machine success. Look for places with:
                </p>
                <ul className="list-disc pl-6 text-stone mb-4">
                  <li>High foot traffic</li>
                  <li>Limited food options nearby</li>
                  <li>Long operating hours</li>
                  <li>Friendly business owners</li>
                </ul>

                <h3 className="text-2xl font-semibold text-charcoal mb-4">Step 4: Legal and Business Setup</h3>
                <p className="text-stone mb-4">
                  Register your business, obtain necessary permits, and secure insurance. Consider forming an LLC 
                  for liability protection. Research local regulations regarding vending machine placement.
                </p>

                <h3 className="text-2xl font-semibold text-charcoal mb-4">Step 5: Purchase Equipment</h3>
                <p className="text-stone mb-4">
                  You can buy new or used vending machines. New machines offer warranties but higher costs. 
                  Used machines can be more affordable but may require more maintenance. Consider leasing options 
                  if you want to test the business before making large investments.
                </p>

                <h3 className="text-2xl font-semibold text-charcoal mb-4">Step 6: Stock and Maintain</h3>
                <p className="text-stone mb-4">
                  Stock your machines with popular, high-margin items. Regular maintenance and restocking are 
                  essential for customer satisfaction and machine longevity. Monitor sales data to optimize your 
                  product selection.
                </p>

                <h3 className="text-2xl font-semibold text-charcoal mb-4">Step 7: Scale Your Business</h3>
                <p className="text-stone mb-4">
                  Once your first location is profitable, look for opportunities to expand. Consider adding more 
                  machines, diversifying your product offerings, or entering new markets.
                </p>

                <div className="bg-warm-white p-6 rounded-lg border border-gray-200 mt-8">
                  <h4 className="text-xl font-semibold text-charcoal mb-3">Ready to Get Started?</h4>
                  <p className="text-stone mb-4">
                    Access our comprehensive database of vending machine locations to find the perfect spots 
                    for your business.
                  </p>
            <Link
                    href="/vending-leads"
                    className="bg-coral hover:bg-coral/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
                    Browse Vending Locations
            </Link>
          </div>
              </motion.div>
        </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
