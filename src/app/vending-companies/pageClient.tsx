'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  MapPinIcon, 
  BuildingStorefrontIcon, 
  CheckIcon, 
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

interface Location {
  city: string
  state: string
  slug: string
  companies: number
  description: string
}

const locations: Location[] = [
  {
    city: "Jacksonville",
    state: "Florida",
    slug: "jacksonville-florida",
    companies: 5,
    description: "Top vending companies serving Jacksonville and surrounding areas with smart technology and exceptional service."
  },
  {
    city: "Orlando",
    state: "Florida",
    slug: "orlando-florida",
    companies: 5,
    description: "Professional vending companies serving Orlando and Central Florida with comprehensive vending solutions."
  },
  {
    city: "Miami",
    state: "Florida",
    slug: "miami-florida",
    companies: 5,
    description: "Vending companies serving Miami and South Florida with modern vending solutions."
  },
  {
    city: "Houston",
    state: "Texas",
    slug: "houston-texas",
    companies: 5,
    description: "Professional vending services in Houston with free installation and reliable service."
  },
  {
    city: "Austin",
    state: "Texas",
    slug: "austin-texas",
    companies: 0,
    description: "Directory coming soon for Austin area vending companies."
  }
]

export default function VendingCompaniesDirectoryPage() {
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
                Verified Vending Companies
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal mb-6"
            >
              Find Vending Machine<br />
              <span className="text-navy">Companies Near You</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-stone max-w-3xl mx-auto leading-relaxed"
            >
              Connect with verified vending machine companies across the United States. 
              Browse our directory to find reliable vendors offering smart technology, 
              fresh food options, and professional service for your business location.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6"
            >
              <div className="flex items-center gap-2 text-sm text-stone">
                <ShieldCheckIcon className="h-5 w-5 text-navy" />
                <span className="font-semibold">Verified Companies</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-stone">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="font-semibold">4.5+ Average Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-stone">
                <MagnifyingGlassIcon className="h-5 w-5 text-navy" />
                <span className="font-semibold">Search by Location</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-lg text-stone max-w-3xl mx-auto">
              Our directory makes it easy to find and compare vending companies in your area.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                <MagnifyingGlassIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">
                1. Search by Location
              </h3>
              <p className="text-stone">
                Browse our directory by city and state to find vending companies serving your area.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-coral rounded-xl flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">
                2. Compare Companies
              </h3>
              <p className="text-stone">
                Review services, features, ratings, and contact information for each company.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-bronze rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">
                3. Connect & Get Started
              </h3>
              <p className="text-stone">
                Contact companies directly through their website or phone number to get started.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Locations Directory */}
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
              Browse by Location
            </h2>
            <p className="text-lg text-stone max-w-3xl mx-auto">
              Select a city to view available vending companies in that area.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/vending-companies/${location.slug}`}
                  className="block bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-navy to-navy-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPinIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-playfair font-bold text-charcoal group-hover:text-navy transition-colors">
                          {location.city}
                        </h3>
                        <p className="text-sm text-stone">{location.state}</p>
                      </div>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 text-stone group-hover:text-navy group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <p className="text-stone text-sm mb-4 line-clamp-2">
                    {location.description}
                  </p>
                  
                  {location.companies > 0 ? (
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-cream text-xs font-semibold text-navy border border-navy/10">
                        {location.companies} {location.companies === 1 ? 'Company' : 'Companies'}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-stone">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-white rounded-xl p-8 border border-navy/20 text-center"
          >
            <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">
              More Locations Coming Soon
            </h3>
            <p className="text-stone mb-6 max-w-2xl mx-auto">
              We're continuously adding new cities and vending companies to our directory. 
              Check back soon or contact us to request a specific location.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors"
            >
              Request a Location
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">
              Why Use Our Directory
            </h2>
            <p className="text-lg text-stone max-w-3xl mx-auto">
              We make it easy to find and compare vending companies in your area.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheckIcon,
                title: "Verified Companies",
                description: "All companies are verified for reliability and service quality"
              },
              {
                icon: StarIcon,
                title: "Ratings & Reviews",
                description: "See ratings and reviews to make informed decisions"
              },
              {
                icon: SparklesIcon,
                title: "Detailed Information",
                description: "Compare services, features, and contact information"
              },
              {
                icon: MapPinIcon,
                title: "Location-Based",
                description: "Find companies serving your specific area"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-cream rounded-xl p-6 border border-navy/10"
              >
                <benefit.icon className="h-8 w-8 text-navy mb-4" />
                <h3 className="text-lg font-playfair font-bold text-charcoal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-stone">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-navy to-navy-light py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-4">
              Are You a Vending Company?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get listed on our directory and reach more businesses in your area. 
              Contact us to learn about our listing packages and premium placement options.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-lg font-semibold hover:bg-cream transition-colors shadow-lg"
            >
              Get Listed Today
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
