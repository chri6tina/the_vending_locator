"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  MapPinIcon,
  BuildingStorefrontIcon,
  CheckIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

interface VendingCompany {
  name: string
  website?: string
  phone?: string
  description: string
  services: string[]
  features: string[]
  rating?: number
  verified?: boolean
  coverage?: string
}

interface VendingCompaniesCityTemplateProps {
  city: string
  state: string
  companies?: VendingCompany[]
}

const normalizeCityDisplayName = (value: string) => {
  const prefixes = [
    'North ',
    'South ',
    'East ',
    'West ',
    'Central ',
    'Downtown ',
    'Uptown ',
    'Greater '
  ]
  const suffixes = [' Metro', ' County']

  let normalized = value
  for (const prefix of prefixes) {
    if (normalized.startsWith(prefix)) {
      normalized = normalized.slice(prefix.length)
      break
    }
  }
  for (const suffix of suffixes) {
    if (normalized.endsWith(suffix)) {
      normalized = normalized.slice(0, -suffix.length)
      break
    }
  }
  return normalized.trim() || value
}

export default function VendingCompaniesCityTemplate({
  city,
  state,
  companies = []
}: VendingCompaniesCityTemplateProps) {
  const cityDisplayName = normalizeCityDisplayName(city)
  const stateDisplayName = state

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* Hero */}
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
                {cityDisplayName}, {stateDisplayName}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-charcoal mb-4"
            >
              {cityDisplayName} {stateDisplayName}'s Best
              <br />
              <span className="text-navy">Vending Machine Companies</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-stone max-w-2xl mx-auto"
            >
              Discover verified vending machine companies serving {cityDisplayName} and nearby areas.
              Compare services and connect with professional operators for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-4"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone">
                <ShieldCheckIcon className="h-4 w-4 text-navy" />
                <span className="font-semibold">Verified Listings</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone">
                <StarIcon className="h-4 w-4 text-yellow-400" />
                <span className="font-semibold">4.5+ Rating</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Companies Listing */}
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
              Vending Companies in {cityDisplayName}
            </h2>
            <p className="text-base sm:text-lg text-stone max-w-2xl mx-auto">
              Compare services, features, and find the perfect partner for your business.
            </p>
          </motion.div>

          {companies.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-4">
                <BuildingStorefrontIcon className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-charcoal mb-2">
                No verified listings yet
              </h3>
              <p className="text-stone mb-6">
                Be the first to claim a listing for {cityDisplayName}, {stateDisplayName}.
              </p>
              <Link
                href="/vending-companies-contact"
                className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors"
              >
                Claim this listing
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {companies.map((company, index) => (
                <div key={`${company.name}-${index}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
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
                              {company.rating && (
                                <div className="flex items-center gap-1 text-sm text-stone">
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
                                  <span className="ml-1 font-semibold">{company.rating}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <p className="text-stone mb-6 leading-relaxed">{company.description}</p>

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

                        <div className="lg:w-64 flex-shrink-0">
                          <div className="bg-cream rounded-xl p-6 border border-navy/10 space-y-3">
                            {company.website ? (
                              <a
                                href={company.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center rounded-lg bg-navy text-white px-4 py-2 text-sm font-semibold hover:bg-navy-light transition-colors"
                              >
                                Visit Website
                              </a>
                            ) : null}
                            {!company.verified && (
                              <Link
                                href="/vending-companies-contact"
                                className="inline-flex w-full items-center justify-center rounded-lg border border-navy/20 px-4 py-2 text-sm font-semibold text-navy hover:bg-navy/5 transition-colors"
                              >
                                Claim this listing
                              </Link>
                            )}
                            {company.coverage && (
                              <div className="flex items-start gap-2 text-sm text-stone">
                                <MapPinIcon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                <span>{company.coverage}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          )}

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
                  Own a vending company in {cityDisplayName}?
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

      <Footer />
    </div>
  )
}
