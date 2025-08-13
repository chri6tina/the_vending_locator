'use client'

import { useState } from 'react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useZipCodeModalContext } from '@/contexts/ZipCodeModalContext'

const plans = [
  {
    name: 'Basic',
    price: '$19',
    period: '/month',
    description: 'Perfect for getting started with vending location research',
    location: '50+ Locations',
    popular: false,
    href: 'https://buy.stripe.com/aEU2929ZcfvQ10IdQT',
    type: 'subscription' as const,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'Advanced features for growing vending operations',
    location: '100+ Locations',
    popular: false,
    href: 'https://buy.stripe.com/4gwaFyfjw1F0gZG004',
    type: 'subscription' as const,
  },
  {
    name: 'Start',
    price: '$129',
    period: '/month',
    description: 'Comprehensive package for serious vending entrepreneurs',
    location: '200+ Locations',
    popular: true,
    href: 'https://buy.stripe.com/3cs8xq2wKdnI6l24gl',
    type: 'subscription' as const,
  },
  {
    name: 'Gold',
    price: '$899',
    period: '/month',
    description: 'Ultimate package with full business setup support',
    location: '200+ Locations',
    popular: false,
    href: 'https://buy.stripe.com/dR614Y4ESgzU6l25kq',
    type: 'subscription' as const,
  },
]

const features: Array<{
  name?: string;
  description?: string;
  values?: string[];
  section?: string;
}> = [
  {
    name: 'Number of locations',
    description: 'Compilation of potential vending machine placement locations within your zip code vicinity.',
    values: ['50+ Locations', '100+ Locations', '200+ Locations', '200+ Locations'],
  },
  {
    name: 'Basic Lead Details',
    description: 'Includes business name, phone number and address of each location',
    values: ['✓ Included', '✓ Included', '✓ Included', '✓ Included'],
  },
  {
    name: 'Lead email addresses',
    description: 'We find their email address if the email is listed on their website along with reviews and category data.',
    values: ['—', '✓ Included', '✓ Included', '✓ Included'],
  },
  {
    name: 'Lead Radius search',
    description: 'Once you share your zip code, we\'ll personalize the search to fit your area perfectly.',
    values: ['15 miles', '25 miles', '25 miles', '25 miles'],
  },
  {
    name: 'Delivery time',
    description: 'The order prioritization will be based on your chosen package.',
    values: ['5 Days', '3 Days', '3 Days', '3 Days'],
  },
  {
    name: 'Guaranteed Leads',
    description: 'We will guarantee these leads, but there is no time frame.',
    values: ['—', '—', '—', '2'],
  },
  {
    section: 'Resources for Sales and Expansion',
  },
  {
    name: 'Vending eCourse',
    description: 'Discover the keys to vending success in our all-encompassing eCourse, which delves into selecting lucrative products and maximizing vending machine efficiency.',
    values: ['—', '—', '✓ Included', '✓ Included'],
  },
  {
    name: 'Cold Call & Email Script',
    description: 'Gain an advantage in securing prime locations with our email and phone call scripts, designed to assist you in confidently closing the deal.',
    values: ['—', '—', '✓ Included', '✓ Included'],
  },
  {
    name: 'Supplier List',
    description: 'Access to our curated list of reliable vending machine suppliers and product vendors.',
    values: ['—', '—', '✓ Included', '✓ Included'],
  },
  {
    section: 'Machine Maintenance',
  },
  {
    name: 'Machine Guidance',
    description: 'We will help you find the latest and most affordable vending machines.',
    values: ['—', '—', '✓ Included', '✓ Included'],
  },
  {
    name: 'Technical Help',
    description: 'We have on hand technicians that are more than eager to help walk you through any technical issues.',
    values: ['—', '—', '✓ Included', '✓ Included'],
  },
  {
    section: 'Legal',
  },
  {
    name: 'Contract Template',
    description: 'Safeguard your vending business with a meticulously drafted legal contract template.',
    values: ['—', '—', '✓ Included', '✓ Included'],
  },
  {
    name: 'Legally Register LLC & EIN',
    description: 'To open a company bank account, you\'ll require an LLC and EIN Number. We\'ll handle the legal formation of your company and obtain both for you. This process typically takes 7-10 business days upon receiving your information.',
    values: ['—', '—', '—', '✓ Included'],
  },
  {
    name: 'LLC Operating Agreement Template',
    description: 'Complete template for your LLC operating agreement to ensure proper business structure.',
    values: ['—', '—', '—', '✓ Included'],
  },
  {
    section: 'Digital Presence',
  },
  {
    name: '3-Page Business Website',
    description: 'Professional website for your vending business including homepage, services page, and contact page with modern design and mobile optimization.',
    values: ['—', '—', '—', '✓ Included'],
  },
]

export default function PricingTable() {
  const { openModal } = useZipCodeModalContext()

  const handlePlanClick = (plan: typeof plans[0]) => {
    openModal({
      name: plan.name,
      price: plan.price,
      description: plan.description,
      location: plan.location,
      href: plan.href,
      type: plan.type,
    })
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-playfair font-bold tracking-tight text-charcoal sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone">
            Start with our Basic package and upgrade as you grow. All plans include access to qualified vending location leads.
          </p>
        </div>
        
        {/* Pricing Table */}
        <div className="mt-16 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-stone/20">
              {/* Header Row */}
              <thead className="bg-warm-white border-b border-stone/30">
                <tr>
                  <th className="px-6 py-6 text-left text-base font-playfair font-bold text-charcoal">
                    Feature Category
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="px-6 py-6 text-center">
                      <button
                        onClick={() => handlePlanClick(plan)}
                        className="block w-full h-full cursor-pointer hover:bg-warm-white/80 transition-colors duration-150 rounded-lg p-2 -m-2"
                        title={`Click to get ${plan.name} plan`}
                      >
                        <div className="flex flex-col items-center">
                          <h3 className="text-xl font-playfair font-bold text-charcoal mb-2">
                            {plan.name}
                          </h3>
                          <p className="text-4xl font-playfair font-bold text-charcoal mb-1">
                            {plan.price}
                          </p>
                          <p className="text-sm font-medium text-navy">
                            {plan.location}
                          </p>
                        </div>
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              
              {/* Feature Rows */}
              <tbody className="divide-y divide-stone/20 bg-white">
                {features.map((feature, featureIdx) => {
                  if (feature.section) {
                    // Section header row
                    return (
                      <tr key={feature.section} className="bg-stone/10 border-b border-stone/30">
                        <td colSpan={5} className="px-6 py-5 text-center">
                          <h4 className="text-xl font-playfair font-bold text-charcoal">
                            {feature.section}
                          </h4>
                        </td>
                      </tr>
                    )
                  }
                  
                  // Feature row
                  return (
                    <tr key={feature.name} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div className="max-w-md">
                          <h5 className="text-base font-bold text-charcoal mb-2">
                            {feature.name}
                          </h5>
                          <p className="text-sm text-stone leading-relaxed font-medium">
                            {feature.description}
                          </p>
                        </div>
                      </td>
                      {feature.values?.map((value, planIdx) => (
                        <td key={planIdx} className="px-6 py-4 text-center">
                          <button
                            onClick={() => handlePlanClick(plans[planIdx])}
                            className="block w-full h-full cursor-pointer hover:bg-gray-100 transition-colors duration-150 rounded-md p-2 -m-2"
                            title={`Click to get ${plans[planIdx].name} plan`}
                          >
                            <span className={`text-base font-semibold ${
                              value === '✓ Included' ? 'text-bronze' : 
                              value === '—' ? 'text-gray-500' : 
                              'text-charcoal'
                            }`}>
                              {value}
                            </span>
                          </button>
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
              
              {/* CTA Row */}
              <tfoot className="bg-stone/10 border-t-2 border-stone/30">
                <tr>
                  <td className="px-6 py-6"></td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-6 py-6 text-center">
                      <button
                        onClick={() => handlePlanClick(plan)}
                        className={`inline-block w-full max-w-[120px] rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                          plan.popular
                            ? 'bg-navy text-white hover:bg-navy-light focus-visible:outline-navy'
                            : 'bg-charcoal text-white hover:bg-opacity-90 focus-visible:outline-charcoal'
                        }`}
                      >
                        Get Started
                      </button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-stone">
            Need a custom plan?{' '}
            <Link href="/contact" className="font-semibold text-navy hover:text-opacity-80">
              Contact us
            </Link>{' '}
            for enterprise solutions.
          </p>
        </div>
      </div>
    </div>
  )
}
