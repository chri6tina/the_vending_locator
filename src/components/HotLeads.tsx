'use client'

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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold tracking-tight text-charcoal px-4 sm:px-0">
            Hot Location Leads
          </h2>
          <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto mt-4">
            Get immediate access to pre-verified vending machine locations. 
            These are ready-to-place locations that have been personally researched and verified.
          </p>
        </div>

        {/* Package Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {packages.map((packageData, index) => (
            <div
              key={packageData.name}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-6 sm:p-8 cursor-pointer transition-all duration-200 hover:shadow-xl hover:scale-105 ${
                packageData.popular 
                  ? 'border-navy bg-gradient-to-br from-navy/5 to-blue-50' 
                  : 'border-gray-200 hover:border-navy/30'
              }`}
              onClick={() => handlePackageClick(packageData)}
            >
              {packageData.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-navy text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">{packageData.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-navy">{packageData.price}</span>
                  <span className="text-lg text-stone"> one-time</span>
                </div>
                <p className="text-stone text-sm mb-4">{packageData.description}</p>
                <div className="text-navy font-semibold text-lg mb-3">{packageData.location}</div>
              </div>

              {/* Features for this package */}
              <div className="space-y-3 mb-6">
                {packageData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckIcon className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-charcoal">{feature}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Get Started Button */}
              <button
                onClick={() => handlePackageClick(packageData)}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 text-center block ${
                  packageData.popular
                    ? 'bg-navy hover:bg-navy-light shadow-lg'
                    : 'bg-charcoal hover:bg-opacity-90'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-chocolate/70 mb-6">
            Need a custom package or have specific requirements?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-navy text-white rounded-lg font-semibold hover:bg-navy-light transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
