'use client'

import { useState } from 'react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useZipCodeModalContext } from '@/contexts/ZipCodeModalContext'
import { trackPricingView, trackLeadGeneration } from '@/lib/conversion-tracking'

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
    location: '300+ Locations',
    popular: false,
    href: 'https://buy.stripe.com/dR614Y4ESgzU6l25kq',
    type: 'subscription' as const,
    deliveryTime: '3 Days',
    radius: '25 miles',
    features: [
      '300+ qualified locations per month',
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

export default function PricingTable() {
  let openModal: (packageData: any) => void = () => {}
  
  try {
    const context = useZipCodeModalContext()
    openModal = context?.openModal || (() => {})
  } catch (error) {
    // Fallback if context is not available
    openModal = () => {}
  }
  
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handlePlanClick = (plan: typeof plans[0]) => {
    setSelectedPlan(plan.name)
    
    // Track pricing view and lead generation conversion
    trackPricingView(plan.name, '/pricing')
    trackLeadGeneration('pricing_click', '/pricing', parseFloat(plan.price.replace('$', '')))
    
    openModal({
      name: plan.name,
      price: plan.price,
      description: plan.description,
      location: plan.location,
      href: plan.href,
      type: plan.type,
    })
  }

  const handleRowClick = (planName: string) => {
    setSelectedPlan(planName)
    const plan = plans.find(p => p.name === planName)
    if (plan) {
      handlePlanClick(plan)
    }
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
              
              {/* Get Started Button - Now triggers modal */}
              <button
                onClick={() => handlePlanClick(plan)}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 text-center block ${
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
          {/* Beautiful bordered table container */}
          <div className="border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden bg-white">
            <table className="w-full border-collapse">
              {/* Header Row */}
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-8 py-6 text-left">
                    <span className="text-base font-medium text-gray-700">Feature Category</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="px-8 py-6 text-center">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-charcoal mb-3">
                          {plan.name}
                        </h3>
                        <div className="mb-2">
                          {/* Get Started Button - Now triggers modal */}
                          <button
                            onClick={() => handlePlanClick(plan)}
                            className={`bg-charcoal hover:bg-charcoal/90 text-white px-6 py-2 rounded-lg text-base font-medium inline-block cursor-pointer transition-all duration-200`}
                          >
                            {plan.price}{plan.period}
                          </button>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              
              {/* Feature Rows */}
              <tbody className="divide-y divide-stone/20 bg-white">
                {/* Number of Locations */}
                <tr className="hover:bg-gray-50 transition-colors duration-150 group">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2 flex items-center gap-2">
                        Number of locations
                        <span className="text-xs text-stone/60 font-normal">(Click any plan to select)</span>
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        Compilation of potential vending machine placement locations within your zip code vicinity.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className="text-base font-semibold text-charcoal">
                        {plan.location}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Basic Lead Details */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Basic Lead Details
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        Includes business name, phone number and address of each location
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className="text-base font-semibold text-bronze">
                        ✓ Included
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Lead Email Addresses */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Lead email addresses
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        We find their email address if the email is listed on their website along with reviews and category data.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className={`text-base font-semibold ${
                        plan.name === 'Basic' ? 'text-gray-500' : 'text-bronze'
                      }`}>
                        {plan.name === 'Basic' ? '—' : '✓ Included'}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Lead Radius Search */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Lead Radius search
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        Once you share your zip code, we'll personalize the search to fit your area perfectly.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className="text-base font-semibold text-charcoal">
                        {plan.radius}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Delivery Time */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Delivery time
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        The order prioritization will be based on your chosen package.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className="text-base font-semibold text-charcoal">
                        {plan.deliveryTime}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Guaranteed Leads */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Guaranteed Leads
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        We will guarantee these leads, but there is no time frame.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className={`text-base font-semibold ${
                        plan.name === 'Gold' ? 'text-charcoal' : 'text-gray-500'
                      }`}>
                        {plan.name === 'Gold' ? '2' : '—'}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Section Header */}
                <tr className="bg-stone/10 border-b-2 border-stone/30">
                  <td colSpan={5} className="px-8 py-6 text-center">
                    <h4 className="text-xl font-bold text-charcoal">
                      Resources for Sales and Expansion
                    </h4>
                  </td>
                </tr>

                {/* Vending eCourse */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Vending eCourse
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        Discover the keys to vending success in our all-encompassing eCourse, which delves into selecting lucrative products and maximizing vending machine efficiency.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className={`text-base font-semibold ${
                        ['Start', 'Gold'].includes(plan.name) ? 'text-bronze' : 'text-gray-500'
                      }`}>
                        {['Start', 'Gold'].includes(plan.name) ? '✓ Included' : '—'}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Cold Call & Email Script */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Cold Call & Email Script
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        Gain an advantage in securing prime locations with our email and phone call scripts, designed to assist you in confidently closing the deal.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className={`text-base font-semibold ${
                        ['Start', 'Gold'].includes(plan.name) ? 'text-bronze' : 'text-gray-500'
                      }`}>
                        {['Start', 'Gold'].includes(plan.name) ? '✓ Included' : '—'}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Contract Templates */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Contract Templates
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        Professional contract templates to secure your vending machine placements with confidence.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className={`text-base font-semibold ${
                        ['Start', 'Gold'].includes(plan.name) ? 'text-bronze' : 'text-gray-500'
                      }`}>
                        {['Start', 'Gold'].includes(plan.name) ? '✓ Included' : '—'}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Business Plan Template */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Business Plan Template
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        A comprehensive business plan template to guide your vending business growth and secure funding.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className={`text-base font-semibold ${
                        plan.name === 'Gold' ? 'text-bronze' : 'text-gray-500'
                      }`}>
                        {plan.name === 'Gold' ? '✓ Included' : '—'}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Priority Support */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Priority Support
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        Get faster response times and dedicated support for your business needs.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className={`text-base font-semibold ${
                        ['Pro', 'Start', 'Gold'].includes(plan.name) ? 'text-bronze' : 'text-gray-500'
                      }`}>
                        {['Pro', 'Start', 'Gold'].includes(plan.name) ? '✓ Included' : '—'}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Section Header */}
                <tr className="bg-stone/10 border-b-2 border-stone/30">
                  <td colSpan={5} className="px-8 py-6 text-center">
                    <h4 className="text-xl font-bold text-charcoal">
                      Machine Maintenance
                    </h4>
                  </td>
                </tr>

                {/* Supplier List */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Supplier List
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        Access to our curated list of reliable vending machine suppliers and product vendors.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className={`text-base font-semibold ${
                        ['Start', 'Gold'].includes(plan.name) ? 'text-bronze' : 'text-gray-500'
                      }`}>
                        {['Start', 'Gold'].includes(plan.name) ? '✓ Included' : '—'}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Machine Guidance */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Machine Guidance
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        We will help you find the latest and most affordable vending machines.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className={`text-base font-semibold ${
                        ['Start', 'Gold'].includes(plan.name) ? 'text-bronze' : 'text-gray-500'
                      }`}>
                        {['Start', 'Gold'].includes(plan.name) ? '✓ Included' : '—'}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Technical Help */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Technical Help
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        We have on hand technicians that are more than eager to help walk you through any technical issues.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className={`text-base font-semibold ${
                        ['Start', 'Gold'].includes(plan.name) ? 'text-bronze' : 'text-gray-500'
                      }`}>
                        {['Start', 'Gold'].includes(plan.name) ? '✓ Included' : '—'}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Section Header */}
                <tr className="bg-stone/10 border-b-2 border-stone/30">
                  <td colSpan={5} className="px-8 py-6 text-center">
                    <h4 className="text-xl font-bold text-charcoal">
                      Legal
                    </h4>
                  </td>
                </tr>

                {/* Contract Template */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Contract Template
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        Safeguard your vending business with a meticulously drafted legal contract template.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className={`text-base font-semibold ${
                        ['Start', 'Gold'].includes(plan.name) ? 'text-bronze' : 'text-gray-500'
                      }`}>
                        {['Start', 'Gold'].includes(plan.name) ? '✓ Included' : '—'}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Legally Register LLC & EIN */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        Legally Register LLC & EIN
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        To open a company bank account, you'll require an LLC and an EIN Number. We'll handle the legal formation of your company and obtain both for you. This process typically takes 7-10 business days upon receiving your information.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className={`text-base font-semibold ${
                        plan.name === 'Gold' ? 'text-bronze' : 'text-gray-500'
                      }`}>
                        {plan.name === 'Gold' ? '✓ Included' : '—'}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* LLC Operating Agreement Template */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        LLC Operating Agreement Template
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        Complete template for your LLC operating agreement to ensure proper business structure.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className={`text-base font-semibold ${
                        plan.name === 'Gold' ? 'text-bronze' : 'text-gray-500'
                      }`}>
                        {plan.name === 'Gold' ? '✓ Included' : '—'}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Section Header */}
                <tr className="bg-stone/10 border-b-2 border-stone/30">
                  <td colSpan={5} className="px-8 py-6 text-center">
                    <h4 className="text-xl font-bold text-charcoal">
                      Digital Presence
                    </h4>
                  </td>
                </tr>

                {/* 3-Page Business Website */}
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <h5 className="text-base font-bold text-charcoal mb-2">
                        3-Page Business Website
                      </h5>
                      <p className="text-sm text-stone leading-relaxed font-medium">
                        Professional website for your vending business including homepage, services page, and contact page with modern design and mobile optimization.
                      </p>
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className="px-8 py-6 text-center cursor-pointer transition-all duration-200"
                      onClick={() => handleRowClick(plan.name)}
                    >
                      <span className={`text-base font-semibold ${
                        plan.name === 'Gold' ? 'text-bronze' : 'text-gray-500'
                      }`}>
                        {plan.name === 'Gold' ? '✓ Included' : '—'}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
              
              {/* CTA Row */}
              <tfoot className="bg-stone/10 border-t-2 border-stone/30">
                <tr>
                  <td className="px-8 py-6"></td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-8 py-6 text-center">
                      <div className="flex flex-col items-center">
                        {/* Get Started Button - Now triggers modal */}
                        <button
                          onClick={() => handlePlanClick(plan)}
                          className={`w-32 py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-center block ${
                            plan.popular
                              ? 'bg-navy hover:bg-navy-light shadow-lg focus-visible:outline-navy'
                              : 'bg-charcoal hover:bg-opacity-90 focus-visible:outline-charcoal'
                          }`}
                        >
                          Get Started
                        </button>
                      </div>
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
