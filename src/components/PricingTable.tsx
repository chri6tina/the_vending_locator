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
    deliveryTime: '5 Days',
    radius: '15 miles',
    features: [
      '50+ qualified locations per month',
      'Basic lead details (name, phone, address)',
      '15-mile radius search',
      '5-day delivery',
      'Email support',
      'Monthly database access'
    ]
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
    deliveryTime: '3 Days',
    radius: '25 miles',
    features: [
      '100+ qualified locations per month',
      'Enhanced lead details with email addresses',
      '25-mile radius search',
      '3-day delivery',
      'Priority support',
      'Monthly database access'
    ]
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
    deliveryTime: '3 Days',
    radius: '25 miles',
    features: [
      '200+ qualified locations per month',
      'Complete lead details with email addresses',
      '25-mile radius search',
      '3-day delivery',
      'Vending eCourse included',
      'Cold call & email scripts',
      'Contract templates',
      'Priority support',
      'Monthly database access'
    ]
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
    deliveryTime: '3 Days',
    radius: '25 miles',
    features: [
      '200+ qualified locations per month',
      'Complete lead details with email addresses',
      '25-mile radius search',
      '3-day delivery',
      'Vending eCourse included',
      'Cold call & email scripts',
      'Contract templates',
      'Business plan template',
      'Priority support',
      'Dedicated account manager',
      'Monthly database access'
    ]
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
    name: 'Contract Templates',
    description: 'Professional contract templates to secure your vending machine placements with confidence.',
    values: ['—', '—', '✓ Included', '✓ Included'],
  },
  {
    name: 'Business Plan Template',
    description: 'A comprehensive business plan template to guide your vending business growth and secure funding.',
    values: ['—', '—', '—', '✓ Included'],
  },
  {
    name: 'Priority Support',
    description: 'Get faster response times and dedicated support for your business needs.',
    values: ['—', '—', '—', '✓ Included'],
  },
]

export default function PricingTable() {
  const { openModal } = useZipCodeModalContext()

  const handlePlanClick = (plan: typeof plans[0]) => {
    // Open modal with plan details for subscription plans
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
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile Price Cards - Hidden on lg+ screens */}
        <div className="lg:hidden space-y-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-6 ${
                plan.popular 
                  ? 'border-navy bg-gradient-to-br from-navy/5 to-blue-50' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-navy text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-charcoal mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-navy">{plan.price}</span>
                  <span className="text-lg text-stone">{plan.period}</span>
                </div>
                <p className="text-stone text-sm mb-4">{plan.description}</p>
                <div className="text-navy font-semibold text-lg mb-3">{plan.location}</div>
                
                {/* Key stats */}
                <div className="flex justify-center gap-4 text-sm">
                  <div className="text-stone">
                    <span className="font-semibold text-navy">{plan.deliveryTime}</span> delivery
                  </div>
                  <div className="text-stone">
                    <span className="font-semibold text-navy">{plan.radius}</span> radius
                  </div>
                </div>
              </div>

              {/* Features for this plan */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckIcon className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-charcoal">{feature}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handlePlanClick(plan)}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                  plan.popular
                    ? 'bg-navy hover:bg-navy-light shadow-lg'
                    : 'bg-charcoal hover:bg-opacity-90'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Table - Hidden on mobile, visible on lg+ screens */}
        <div className="hidden lg:block">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left">
                    <span className="sr-only">Features</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="px-6 py-4 text-center">
                      <button
                        onClick={() => handlePlanClick(plan)}
                        className="block w-full cursor-pointer hover:bg-gray-50 transition-colors duration-150 rounded-lg p-4 -m-4"
                        title={`Click to get ${plan.name} plan`}
                      >
                        {plan.popular && (
                          <div className="mb-3">
                            <span className="bg-navy text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Most Popular
                            </span>
                          </div>
                        )}
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-charcoal mb-2">
                            {plan.name}
                          </h3>
                          <div className="mb-3">
                            <span className="text-4xl font-bold text-navy">
                              {plan.price}
                            </span>
                            <span className="text-lg text-stone">
                              {plan.period}
                            </span>
                          </div>
                          <p className="text-stone text-sm mb-3 max-w-[200px] mx-auto">
                            {plan.description}
                          </p>
                          <p className="text-sm font-medium text-navy mb-2">
                            {plan.location}
                          </p>
                          <div className="text-xs text-stone space-y-1">
                            <div>📦 {plan.deliveryTime} delivery</div>
                            <div>📍 {plan.radius} radius</div>
                          </div>
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
