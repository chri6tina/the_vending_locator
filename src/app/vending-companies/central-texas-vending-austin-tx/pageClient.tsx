'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  MapPinIcon, 
  PhoneIcon,
  GlobeAltIcon,
  StarIcon,
  CheckBadgeIcon,
  BuildingStorefrontIcon,
  ClockIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function CentralTexasVendingPage() {
  const company = {
    name: "Central Texas Vending",
    city: "Austin",
    state: "Texas",
    stateAbbr: "TX",
    address: "5678 Business Blvd, Suite 200, Austin, TX 78702",
    phone: "(512) 555-5678",
    website: "https://centraltexasvending.com",
    description: "Full-service vending solutions for Central Texas businesses, specializing in healthy vending options and smart technology.",
    services: ["Snack Machines", "Beverage Machines", "Healthy Vending Options", "Smart Vending Technology", "Cashless Payment Systems", "24/7 Service"],
    serviceArea: ["Austin", "San Marcos", "Buda", "Kyle", "Bastrop"],
    machineTypes: ["Snack Vending Machines", "Beverage Vending Machines", "Healthy Vending Machines", "Refrigerated Machines"],
    rating: 4.7,
    reviewCount: 45,
    source: "Yelp"
  }

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-navy/5 via-cream to-coral/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-semibold text-navy border border-navy/20">
                <BuildingStorefrontIcon className="h-4 w-4" />
                Verified Vending Company
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal mb-6"
            >
              {company.name}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-stone max-w-3xl mx-auto leading-relaxed"
            >
              {company.description}
            </motion.p>

            {/* Rating & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6"
            >
              {company.rating && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(company.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-charcoal">
                    {company.rating}/5{company.reviewCount ? ` (${company.reviewCount} reviews)` : ''}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2 text-stone">
                <MapPinIcon className="h-5 w-5" />
                <span className="font-medium">{company.city}, {company.stateAbbr}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Company Details */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-cream rounded-xl p-8 mb-8"
              >
                <h2 className="text-2xl font-playfair font-bold text-charcoal mb-6">About {company.name}</h2>
                <p className="text-stone leading-relaxed mb-6">{company.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-3">Services Offered</h3>
                    <ul className="space-y-2">
                      {company.services.map((service, index) => (
                        <li key={index} className="flex items-center gap-2 text-stone">
                          <CheckBadgeIcon className="h-5 w-5 text-navy flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-3">Machine Types</h3>
                    <ul className="space-y-2">
                      {company.machineTypes.map((type, index) => (
                        <li key={index} className="flex items-center gap-2 text-stone">
                          <SparklesIcon className="h-5 w-5 text-coral flex-shrink-0" />
                          <span>{type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Service Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl border border-gray-200 p-8"
              >
                <h3 className="text-xl font-playfair font-bold text-charcoal mb-4">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {company.serviceArea.map((area, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-navy/5 text-navy rounded-lg text-sm font-medium border border-navy/10"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Card */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-navy to-navy-light rounded-xl p-8 text-white sticky top-8"
              >
                <h3 className="text-2xl font-playfair font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {company.address && (
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm opacity-90">Address</div>
                        <div className="font-medium">{company.address}</div>
                      </div>
                    </div>
                  )}
                  
                  {company.phone && (
                    <div className="flex items-start gap-3">
                      <PhoneIcon className="h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm opacity-90">Phone</div>
                        <a href={`tel:${company.phone}`} className="font-medium hover:underline">
                          {company.phone}
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {company.website && (
                    <div className="flex items-start gap-3">
                      <GlobeAltIcon className="h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm opacity-90">Website</div>
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:underline break-all"
                        >
                          {company.website.replace(/^https?:///, '')}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  {company.website ? (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-white text-navy px-6 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
                    >
                      Visit Website →
                    </a>
                  ) : company.phone ? (
                    <a
                      href={`tel:${company.phone}`}
                      className="block w-full text-center bg-white text-navy px-6 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
                    >
                      Call Now →
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="block w-full text-center bg-white text-navy px-6 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
                    >
                      Request Contact Info →
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Companies */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">
              More Vending Companies in {company.city}
            </h2>
            <p className="text-lg text-stone">
              Explore other vending companies serving {company.city}, {company.stateAbbr}
            </p>
          </motion.div>
          
          <div className="text-center">
            <Link
              href="/vending-companies/austin-tx"
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors"
            >
              View All Companies in {company.city} →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">
              Need Vending Machine Locations Instead?
            </h2>
            <p className="text-lg text-stone mb-8">
              Looking for businesses that need vending machines? We provide verified location leads.
            </p>
            <Link
              href="/vending-leads/austin-tx"
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors"
            >
              Find Vending Locations in {company.city} →
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
