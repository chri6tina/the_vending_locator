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
  ClockIcon,
  PhoneIcon,
  GlobeAltIcon,
  TruckIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

interface VendingCompany {
  name: string
  website: string
  phone: string
  description: string
  services: string[]
  features: string[]
  rating: number
  verified: boolean
  yearsInBusiness?: number
  coverage?: string
}

const companies: VendingCompany[] = [
  {
    name: "Jacksonville Vending Machines",
    website: "https://jacksonvillevendingmachines.com/",
    phone: "904-456-3851",
    description: "Jacksonville Vending Machines by VendSmart is a leading vending machine company serving Jacksonville, Florida and surrounding areas. We specialize in smart vending machines, micro-markets, fresh food options, snacks, energy drinks, and coffee services with cutting-edge technology and exceptional service.",
    services: [
      "Smart Vending Machines",
      "Micro-Markets",
      "Coffee Services",
      "Fresh Food Options",
      "Snacks & Beverages",
      "Customized Markets"
    ],
    features: [
      "Free Machine Placement",
      "24/7 Support",
      "Smart Technology",
      "Real-time Analytics",
      "Contactless Payment",
      "Energy-Efficient Operation"
    ],
    rating: 4.8,
    verified: true,
    yearsInBusiness: 10,
    coverage: "Jacksonville and surrounding areas"
  },
  {
    name: "Bold City Smart Vending",
    website: "#",
    phone: "Coming Soon",
    description: "Locally owned and operated vending machine service providing modern, smart vending solutions throughout Jacksonville. Specializing in real-time inventory tracking and contactless payment systems for businesses seeking cutting-edge vending technology.",
    services: [
      "Smart Vending Machines",
      "Contactless Payment Systems",
      "Real-Time Inventory Tracking",
      "Modern Vending Solutions"
    ],
    features: [
      "Locally Owned & Operated",
      "Smart Technology Integration",
      "Real-Time Analytics",
      "Contactless Payment Options"
    ],
    rating: 4.6,
    verified: false,
    coverage: "Jacksonville area"
  },
  {
    name: "Jenkins Vending LLC",
    website: "#",
    phone: "Coming Soon",
    description: "Family-owned and operated vending services company serving businesses, offices, hotels, and facilities throughout North Florida. Offering comprehensive vending solutions with free delivery, installation, and ongoing service support.",
    services: [
      "Business Vending",
      "Office Vending Solutions",
      "Hotel Vending Services",
      "Facility Vending"
    ],
    features: [
      "Family-Owned Business",
      "Free Delivery & Installation",
      "North Florida Coverage",
      "Comprehensive Service Support"
    ],
    rating: 4.5,
    verified: false,
    coverage: "North Florida area"
  },
  {
    name: "Suncoast Vending",
    website: "#",
    phone: "Coming Soon",
    description: "Family-owned vending partner combining modern technology with personal service. Offering both smart and traditional vending options with fully managed service for businesses throughout the Jacksonville area.",
    services: [
      "Smart Vending Machines",
      "Traditional Vending",
      "Fully Managed Service",
      "Modern Technology Solutions"
    ],
    features: [
      "Family-Owned Business",
      "Personal Service Approach",
      "Modern & Traditional Options",
      "Fully Managed Operations"
    ],
    rating: 4.7,
    verified: false,
    coverage: "Jacksonville and surrounding areas"
  },
  {
    name: "Break Time Vending Services LLC",
    website: "#",
    phone: "Coming Soon",
    description: "Family-owned and operated vending services company providing a large selection of name brand snacks, cold foods, and beverages. Serving the Orange Park and Jacksonville areas with top quality service and integrity.",
    services: [
      "Name Brand Snacks",
      "Cold Food Options",
      "Beverage Machines",
      "Office & Business Vending"
    ],
    features: [
      "Family-Owned Business",
      "Name Brand Products",
      "Quality Service",
      "Orange Park Area Coverage"
    ],
    rating: 4.4,
    verified: false,
    coverage: "Orange Park and Jacksonville areas"
  }
]

export default function JacksonvilleFloridaVendingCompaniesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section - Compact */}
      <div className="bg-gradient-to-br from-navy/5 via-cream to-coral/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-semibold text-navy border border-navy/20">
                <MapPinIcon className="h-4 w-4" />
                Jacksonville, Florida
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-charcoal mb-4"
            >
              Top Vending Machines in<br />
              <span className="text-navy">Jacksonville, Florida</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-stone max-w-2xl mx-auto"
            >
              Explore top vending machines and connect with trusted providers serving Jacksonville and surrounding areas.
            </motion.p>

            {/* Trust Badges - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-4"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone">
                <ShieldCheckIcon className="h-4 w-4 text-navy" />
                <span className="font-semibold">Verified</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone">
                <StarIcon className="h-4 w-4 text-yellow-400" />
                <span className="font-semibold">4.5+ Rating</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone">
                <ClockIcon className="h-4 w-4 text-navy" />
                <span className="font-semibold">24/7 Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Companies Listing - Prominent */}
      <div className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-charcoal mb-3">
              Top Vending Machines
            </h2>
            <p className="text-base sm:text-lg text-stone max-w-2xl mx-auto">
              Compare services, features, and find the perfect partner for your business.
            </p>
          </motion.div>

          <div className="space-y-8">
            {companies.map((company, index) => (
              <div key={company.name} className={index === 0 ? "mb-12" : ""}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Company Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-navy to-navy-light rounded-xl flex items-center justify-center flex-shrink-0">
                          <BuildingStorefrontIcon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-playfair font-bold text-charcoal">
                              {company.name}
                            </h3>
                            {company.verified && (
                              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-50 text-green-700 text-xs font-semibold border border-green-200">
                                <ShieldCheckIcon className="h-3 w-3" />
                                Verified
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4 flex-wrap">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(company.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                              <span className="ml-1 text-sm font-semibold text-stone">
                                {company.rating}
                              </span>
                            </div>
                            {company.yearsInBusiness && (
                              <span className="text-sm text-stone">
                                {company.yearsInBusiness}+ Years in Business
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-stone mb-6 leading-relaxed">
                        {company.description}
                      </p>

                      {/* Services */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-charcoal mb-3 flex items-center gap-2">
                          <SparklesIcon className="h-4 w-4 text-navy" />
                          Services Offered
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {company.services.map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 rounded-full bg-cream text-sm text-stone border border-navy/10"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-semibold text-charcoal mb-3 flex items-center gap-2">
                          <CheckIcon className="h-4 w-4 text-navy" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {company.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <CheckIcon className="h-4 w-4 text-bronze flex-shrink-0" />
                              <span className="text-sm text-stone">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:w-64 flex-shrink-0">
                      <div className="bg-cream rounded-xl p-6 border border-navy/10">
                        <h4 className="text-sm font-semibold text-charcoal mb-4">
                          Contact Information
                        </h4>
                        <div className="space-y-3">
                          {company.phone !== "Coming Soon" ? (
                            <a
                              href={`tel:${company.phone.replace(/\D/g, '')}`}
                              className="flex items-center gap-2 text-navy hover:text-navy-light font-semibold transition-colors"
                            >
                              <PhoneIcon className="h-5 w-5" />
                              <span>{company.phone}</span>
                            </a>
                          ) : (
                            <div className="flex items-center gap-2 text-stone">
                              <PhoneIcon className="h-5 w-5" />
                              <span className="text-sm">Coming Soon</span>
                            </div>
                          )}
                          
                          {company.website !== "#" ? (
                            <a
                              href={company.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-navy hover:text-navy-light font-semibold transition-colors"
                            >
                              <GlobeAltIcon className="h-5 w-5" />
                              <span className="text-sm">Visit Website</span>
                            </a>
                          ) : (
                            <div className="flex items-center gap-2 text-stone">
                              <GlobeAltIcon className="h-5 w-5" />
                              <span className="text-sm">Website Coming Soon</span>
                            </div>
                          )}

                          {company.coverage && (
                            <div className="flex items-start gap-2 text-sm text-stone">
                              <MapPinIcon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                              <span>{company.coverage}</span>
                            </div>
                          )}
                        {!company.verified && (
                          <Link
                            href="/vending-companies-contact"
                            className="inline-flex items-center justify-center rounded-lg border border-navy/20 px-3 py-2 text-xs font-semibold text-navy hover:bg-navy/5 transition-colors"
                          >
                            Claim this listing
                          </Link>
                        )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* CTA Card after first company */}
              {index === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-navy/5 to-coral/5 rounded-lg p-5 border border-navy/10 mt-8"
                >
                  <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
                    <div className="text-center sm:text-left flex-1">
                      <p className="text-base sm:text-lg font-playfair font-semibold text-charcoal mb-1">
                        Want a vending machine for your business?
                      </p>
                      <p className="text-sm text-stone">
                        Contact us for free placement and professional service.
                      </p>
                    </div>
                    <Link
                      href="/vending-services-contact"
                      className="inline-flex items-center justify-center gap-2 bg-navy text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-navy-light transition-colors whitespace-nowrap text-sm"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              )}
              </div>
            ))}
          </div>

          {/* CTA for Companies to Get Listed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-gradient-to-br from-navy/5 to-coral/5 rounded-xl p-6 border border-navy/10"
          >
            <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
              <div className="text-center sm:text-left flex-1">
                <p className="text-base sm:text-lg font-playfair font-semibold text-charcoal mb-1">
                  Own a vending company in Jacksonville?
                </p>
                <p className="text-sm text-stone">
                  Claim your listing or request placement to reach more local businesses.
                </p>
              </div>
              <Link
                href="/vending-companies-contact"
                className="inline-flex items-center justify-center gap-2 bg-navy text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-navy-light transition-colors whitespace-nowrap text-sm"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Section - Moved After Companies */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-3">
              About Our Directory
            </h2>
            <p className="text-base text-stone max-w-2xl mx-auto">
              We've curated Jacksonville's top vending machine companies to help businesses find the perfect 
              vending partner. Each company offers professional service, reliable equipment, and commitment to customer satisfaction.
            </p>
          </motion.div>

          {/* Stats Grid - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <div className="bg-cream rounded-xl p-4 text-center border border-navy/10">
              <div className="text-2xl font-bold text-navy mb-1">5+</div>
              <div className="text-xs text-stone">Companies</div>
            </div>
            <div className="bg-cream rounded-xl p-4 text-center border border-navy/10">
              <div className="text-2xl font-bold text-navy mb-1">500+</div>
              <div className="text-xs text-stone">Machines</div>
            </div>
            <div className="bg-cream rounded-xl p-4 text-center border border-navy/10">
              <div className="text-2xl font-bold text-navy mb-1">50+</div>
              <div className="text-xs text-stone">Businesses</div>
            </div>
            <div className="bg-cream rounded-xl p-4 text-center border border-navy/10">
              <div className="text-2xl font-bold text-navy mb-1">24/7</div>
              <div className="text-xs text-stone">Support</div>
            </div>
          </motion.div>
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
              Get listed on our directory and reach more businesses in Jacksonville. 
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
