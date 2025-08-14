'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function VendingCourse() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-4">
              Looking for a How-to-Start Guide?
            </h2>
            <p className="text-base sm:text-lg text-stone mb-8 leading-relaxed">
              Get our comprehensive guide: "How to Start a Vending Machine Company in 2025" with scripts, legal templates, and supplier discounts.
            </p>
            <a 
              href="https://vendflow.gumroad.com/l/rxbzy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
            >
              Get the Guide
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Success Graph Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 mx-auto max-w-4xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-4">
              Our Success Story
            </h3>
            <p className="text-lg text-chocolate/70">
              See how we've helped vendors find locations over the years
            </p>
          </div>

          {/* Graph Container */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-end justify-between h-64 mb-6 px-4">
              {/* Graph Bars */}
              <div className="flex items-end justify-between w-full gap-2">
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '40px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2015</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '60px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2016</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '80px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2017</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '100px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2018</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '120px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2019</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '140px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2020</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '160px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2021</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '180px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2022</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '200px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2023</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '220px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2024</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-gradient-to-t from-coral to-orange-500 rounded-t-lg" style={{ height: '240px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2025</span>
                </div>
              </div>
            </div>

            {/* Graph Legend */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-cream/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-navy">2,847+</div>
                <div className="text-sm text-chocolate/70">Vendors Helped</div>
              </div>
              <div className="bg-cream/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-navy">500K+</div>
                <div className="text-sm text-chocolate/70">Locations Found</div>
              </div>
              <div className="bg-cream/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-navy">15K+</div>
                <div className="text-sm text-chocolate/70">Deals Closed</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SEO Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 mx-auto max-w-6xl"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-6">
                  Find Vending Machine Locations Near You
                </h3>
                <div className="space-y-4 text-chocolate/80">
                  <p>
                    Discover the best vending machine locations in your area with our comprehensive database of qualified businesses. 
                    Whether you're looking for office buildings, retail stores, hospitals, or schools, we provide detailed information 
                    about each location including foot traffic, business hours, and decision-maker contact details.
                  </p>
                  <p>
                    Our vending machine location leads are pre-qualified and verified, saving you hours of research time. 
                    Each lead includes essential business information, contact details, and placement opportunities that can 
                    help you expand your vending machine business quickly and efficiently.
                  </p>
                  <p>
                    From snack vending machines to beverage dispensers, we help vending operators find the perfect locations 
                    for their equipment. Our database covers major cities across the United States, including Texas, California, 
                    Florida, New York, and many more states.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h4 className="text-xl sm:text-2xl font-playfair font-bold text-chocolate mb-6">
                  Why Choose Our Vending Location Leads?
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Pre-Qualified Locations</h5>
                      <p className="text-sm text-chocolate/70">Every location is researched and verified for vending machine potential</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Detailed Business Information</h5>
                      <p className="text-sm text-chocolate/70">Complete business profiles with contact details and placement opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">No Monthly Fees</h5>
                      <p className="text-sm text-chocolate/70">Pay once and get access to our entire database of vending locations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Nationwide Coverage</h5>
                      <p className="text-sm text-chocolate/70">Locations available across all major cities and states in the US</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-xl sm:text-2xl font-playfair font-bold text-chocolate mb-6 text-center">
                Popular Vending Machine Location Types
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-cream/30 rounded-lg">
                  <h5 className="font-semibold text-chocolate mb-2">Office Buildings</h5>
                  <p className="text-sm text-chocolate/70">High-traffic corporate environments</p>
                </div>
                <div className="text-center p-4 bg-cream/30 rounded-lg">
                  <h5 className="font-semibold text-chocolate mb-2">Retail Stores</h5>
                  <p className="text-sm text-chocolate/70">Shopping centers and malls</p>
                </div>
                <div className="text-center p-4 bg-cream/30 rounded-lg">
                  <h5 className="font-semibold text-chocolate mb-2">Hospitals</h5>
                  <p className="text-sm text-chocolate/70">Medical facilities and clinics</p>
                </div>
                <div className="text-center p-4 bg-cream/30 rounded-lg">
                  <h5 className="font-semibold text-chocolate mb-2">Schools & Universities</h5>
                  <p className="text-sm text-chocolate/70">Educational institutions</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
