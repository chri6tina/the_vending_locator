'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import { motion } from 'framer-motion'
import { MapPinIcon, UsersIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid'

export default function NorthCarolinaVendingLeadsPage() {
  const cities = [
    {
      name: 'Charlotte',
      slug: 'charlotte-north-carolina',
      vendorCount: '160+',
      businessCount: '240+',
      description: 'Banking and finance excellence',
      highlights: ['Banking', 'Finance', 'Healthcare']
    },
    {
      name: 'Raleigh',
      slug: 'raleigh-north-carolina',
      vendorCount: '140+',
      businessCount: '200+',
      description: 'Technology and research hub',
      highlights: ['Technology', 'Research', 'Education']
    },
    {
      name: 'Greensboro',
      slug: 'greensboro-north-carolina',
      vendorCount: '120+',
      businessCount: '180+',
      description: 'Manufacturing and logistics excellence',
      highlights: ['Manufacturing', 'Logistics', 'Healthcare']
    }
  ]

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Hero Section */}
        <div className="bg-warm-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight"
              >
                Vending Machine Leads<br />in North Carolina
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Discover vending machine opportunities across North Carolina's major cities. From banking hubs to technology centers,
                find the perfect locations to grow your vending business in the Tar Heel State.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-chocolate mb-6">
                North Carolina Vending Machine Locations
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-4xl mx-auto leading-relaxed">
                Explore vending opportunities in North Carolina's major metropolitan areas, each offering unique business environments
                and growth potential for your vending machine business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-warm-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-playfair font-bold text-chocolate mb-4">
                      {city.name}
                    </h3>
                    <p className="text-chocolate/70 mb-6 leading-relaxed">
                      {city.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-bronze">{city.vendorCount}</div>
                        <div className="text-xs text-stone">Vendors</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-bronze">{city.businessCount}</div>
                        <div className="text-xs text-stone">Businesses</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap justify-center gap-2">
                        {city.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-coral/10 text-coral rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/vending-leads/${city.slug}`}
                      className="btn-primary w-full text-center"
                    >
                      Get {city.name} Leads
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-warm-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate mb-6">
                Get North Carolina Vending Machine Leads
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
                Access our comprehensive database of qualified North Carolina vending machine locations with flexible pricing options.
                No long-term contracts, just results that help you grow your North Carolina vending business.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}
