'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useZipCodeModalContext } from '@/contexts/ZipCodeModalContext'

const packages = [
  {
    name: 'Quick Find Package',
    price: '$500',
    description: 'Pre-verified vending locations with basic research and support',
    location: '50+ employee locations',
    features: [
      '1 qualified location',
      'Basic research included',
      '90-day delivery',
      'Email support',
    ],
    href: 'https://buy.stripe.com/5kQ7sL3JXfie0LDg7J6Na07',
    popular: false,
    type: 'one-time' as const,
  },
  {
    name: 'Smart Spot Package',
    price: '$1,000',
    description: 'Pre-verified vending locations with premium research and priority support',
    location: '100+ employee locations',
    features: [
      '1 qualified location',
      'Premium research included',
      'Priority support',
      'Phone consultation',
    ],
    href: 'https://buy.stripe.com/dRmbJ194h0nk9i96x96Na08',
    popular: true,
    type: 'one-time' as const,
  },
  {
    name: 'Prime Location Package',
    price: '$1,500',
    description: 'Pre-verified vending locations with advanced research and account management',
    location: '150+ employee locations',
    features: [
      '1 qualified location',
      'Advanced research included',
      'Account manager',
      'Priority delivery',
    ],
    href: 'https://buy.stripe.com/00wcN51BP4DA51T3kX6Na09',
    popular: false,
    type: 'one-time' as const,
  },
  {
    name: 'Elite Placement Package',
    price: '$2,000',
    description: 'Pre-verified vending locations with comprehensive research and VIP support',
    location: '200+ employee locations',
    features: [
      '1 qualified location',
      'Comprehensive research included',
      'VIP support',
      'Dedicated account manager',
    ],
    href: 'https://buy.stripe.com/28E4gzeoB2vs3XPcVx6Na0a',
    popular: false,
    type: 'one-time' as const,
  },
]

export default function HotLeads() {
  const { openModal } = useZipCodeModalContext()

  const handlePackageClick = (packageData: typeof packages[0]) => {
    openModal({
      name: packageData.name,
      price: packageData.price,
      description: packageData.description,
      location: packageData.location,
      href: packageData.href,
      type: packageData.type,
    })
  }

  return (
    <div id="packages" className="bg-warm-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold tracking-tight text-charcoal px-4 sm:px-0"
          >
            Hot Location Leads
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-4 sm:px-0"
          >
            Get qualified vending machine locations delivered to your inbox. No monthly fees, just results.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-4"
        >
          {packages.map((packageData, index) => (
            <motion.div
              key={packageData.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-6 sm:p-8 flex flex-col h-full ${
                packageData.popular
                  ? 'border-navy scale-105'
                  : 'border-gray-200 hover:border-navy/50'
              }`}
            >
              {packageData.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-navy text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center flex-1">
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-charcoal mb-2 sm:mb-3 leading-tight">
                  {packageData.name}
                </h3>
                <div className="text-3xl sm:text-4xl font-playfair font-bold text-bronze mb-2 sm:mb-3">
                  {packageData.price}
                </div>
                <div className="text-base sm:text-lg font-semibold text-navy mb-3 sm:mb-4">
                  {packageData.location}
                </div>
                <p className="text-sm sm:text-base text-stone mb-4 sm:mb-6 leading-relaxed">{packageData.description}</p>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                  {packageData.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-bronze mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-stone leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => handlePackageClick(packageData)}
                  className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
                    packageData.popular
                      ? 'bg-navy text-white hover:bg-navy-light'
                      : 'bg-charcoal text-white hover:bg-opacity-90'
                  }`}
                >
                  Get This Package
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center px-4 sm:px-0"
        >
          <p className="text-sm sm:text-base text-stone">
            Need a custom package?{' '}
            <a href="/contact" className="font-semibold text-navy hover:text-navy-light">
              Contact us
            </a>{' '}
            for personalized solutions.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
