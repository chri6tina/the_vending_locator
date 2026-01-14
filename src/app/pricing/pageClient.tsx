'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import LeadCaptureForm from '@/components/LeadCaptureForm'
import StructuredData from '@/components/StructuredData'
import { generateFAQPageSchema, generateProductSchema } from '@/lib/structured-data'
import { ChevronDownIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { CheckBadgeIcon, StarIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

const faqs = [
  {
    question: "What's included in the Basic package?",
    answer: "The Basic package includes access to 50 qualified vending locations with basic lead details. Perfect for operators just getting started in the industry."
  },
  {
    question: "Can I purchase additional packages?",
    answer: "Yes, you can purchase additional packages at any time. Each package is a one-time purchase that gives you immediate access to the specified number of qualified locations."
  },
  {
    question: "How quickly do I receive my location leads?",
    answer: "You'll receive your vending leads within 3-5 business days after payment confirmation. We need time to research and qualify locations in your area."
  },
  {
    question: "Are the contact details verified?",
    answer: "Yes, all contact information is verified and updated regularly. We ensure you have the correct decision-maker contact details for each location."
  },
  {
    question: "What if a location is no longer available?",
    answer: "We provide replacement leads if a location becomes unavailable. Our database is constantly updated to ensure accuracy and relevance."
  },
  {
    question: "Do you offer refunds?",
    answer: "Due to the digital nature of our service and the time invested in research, we do not offer refunds. However, we're committed to providing quality leads and will work to ensure your satisfaction."
  },
  {
    question: "How long do I have access to my leads?",
    answer: "Your leads are yours forever! Once you purchase a package, you have permanent access to all the location information and contact details included in your package."
  },
  {
    question: "Do you provide support for new vending operators?",
    answer: "Yes! Our Start and Gold packages include comprehensive support including vending eCourses, cold call scripts, and business guidance to help you succeed."
  },
  {
    question: "What types of vending machines do your locations support?",
    answer: "Our locations support all types of vending machines including snack machines, beverage dispensers, coffee machines, and combination units. We research each location to ensure it's suitable for your specific equipment."
  },
  {
    question: "How do you qualify locations for vending machines?",
    answer: "We evaluate locations based on foot traffic, business hours, employee count, existing vending presence, and business type. Each location is personally researched to ensure vending machine potential."
  },
  {
    question: "Do you provide locations outside the United States?",
    answer: "Currently, we focus on locations within the United States. We cover all 50 states with particular emphasis on major metropolitan areas and business districts."
  },
  {
    question: "What information is included with each lead?",
    answer: "Each lead includes business name, address, phone number, decision-maker contact details, business hours, employee count, foot traffic estimates, and placement opportunity notes."
  },
  {
    question: "How often is your database updated?",
    answer: "Our database is updated weekly with new locations and refreshed contact information. We continuously verify existing leads to maintain accuracy and relevance."
  },
  {
    question: "Can I request specific types of locations?",
    answer: "Yes, you can specify your preferences for location types, industries, or geographic areas. We'll prioritize leads that match your criteria when available."
  },
  {
    question: "Do you help with the placement process?",
    answer: "While we provide the qualified leads, the actual placement negotiation is handled by you. However, our Gold package includes cold call scripts and business guidance to help with the process."
  },
  {
    question: "What makes your leads different from competitors?",
    answer: "Our leads are personally researched and verified, not scraped from public databases. We focus on quality over quantity, ensuring each location has genuine vending machine potential and accurate contact information."
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 px-4 sm:px-6 py-8 sm:py-10 lg:py-16 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-playfair font-bold leading-8 sm:leading-10 tracking-tight text-chocolate">
          Frequently asked questions
        </h2>
        <dl className="mt-8 sm:mt-10 space-y-4 sm:space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq, index) => (
            <div key={index} className="pt-4 sm:pt-6">
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-start justify-between text-left text-chocolate"
                >
                  <span className="text-sm sm:text-base font-semibold leading-6 sm:leading-7 pr-4">{faq.question}</span>
                  <span className="ml-4 sm:ml-6 flex h-6 sm:h-7 items-center flex-shrink-0">
                    <ChevronDownIcon
                      className={`h-5 w-5 sm:h-6 sm:w-6 transform transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </dt>
              <dd className={`mt-2 pr-4 sm:pr-12 transition-all duration-200 ${
                openIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <p className="text-sm sm:text-base leading-6 sm:leading-7 text-chocolate/70">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default function Pricing() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Texas',
    'Sarah in Florida', 
    'David from California',
    'Lisa in New York',
    'Tom from Illinois',
    'Jennifer in Ohio',
    'Robert from Georgia',
    'Amanda in Michigan',
    'Chris in Arizona',
    'Maria in Washington',
    'James in Pennsylvania',
    'Emily in Colorado',
    'Michael in Virginia',
    'Jessica in Tennessee',
    'Daniel in Missouri',
    'Ashley in Indiana',
    'Matthew in Wisconsin',
    'Nicole in Minnesota',
    'Andrew in Louisiana',
    'Stephanie in Kentucky',
    'Joshua in Alabama',
    'Rebecca in Mississippi',
    'Ryan in Arkansas',
    'Lauren in Oklahoma',
    'Kevin in Iowa',
    'Michelle in Kansas',
    'Brian in Nebraska',
    'Amber in South Dakota',
    'Steven in North Dakota',
    'Heather in Montana'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 12
      const fluctuation = Math.floor(Math.random() * 8) + 1
      setActiveUsers(baseUsers + fluctuation)
    }

    // Update every 2-4 seconds for natural fluctuation
    const interval = setInterval(() => {
      updateActiveUsers()
    }, Math.random() * 2000 + 2000)

    updateActiveUsers() // Initial update

    return () => clearInterval(interval)
  }, [])

  // Rotating user names
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => (prev + 1) % userNames.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [userNames.length])

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section - Original Design with Animations */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Active Users Counter Pill */}
            <div className="mb-6 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-chocolate">
                  <span className="font-bold text-coral">{activeUsers}</span> people are choosing plans right now
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate px-4 sm:px-0">
              Qualified Vending<br />Location Leads
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl leading-8 sm:leading-9 text-chocolate/70 px-4 sm:px-0 max-w-3xl mx-auto">
              Get pre-qualified vending machine locations delivered to your inbox. No monthly fees, just results that help you grow your vending business.
            </p>

            {/* Trust/Feature Badges */}
            <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4 max-w-md mx-auto">
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-chocolate">Verified Locations</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium text-chocolate">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="mt-6 sm:mt-8 px-4 sm:px-0">
              <p className="text-base sm:text-lg text-chocolate/70">
                Starting at <span className="text-coral font-bold text-lg sm:text-xl">less than $0.30 per lead</span>
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
              <Link
                href="#pricing"
                className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Pricing →
              </Link>
            </div>

            {/* Testimonial */}
            <div className="mt-6 sm:mt-8 px-4 sm:px-0">
              <p className="text-sm text-chocolate/60 italic">
                "Found my best location in 3 days!" - <span className="font-semibold not-italic">Mike R., Texas</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-cream pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate mb-6">
              Choose Your Plan
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
              Get access to qualified vending machine locations with flexible pricing options. 
              No long-term contracts, just results that help you grow your business.
            </p>
          </div>
          <PricingTable />
        </div>
      </div>

      {/* Hot Leads Section */}
      <HotLeads />

      {/* Vending Course Section */}
      <VendingCourse />

      {/* Blog Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-chocolate sm:text-4xl">
              Vending Business Resources
            </h2>
            <p className="mt-4 text-lg text-stone/70">
              Learn from our expert guides and industry insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              href="/blog/how-to-start-a-vending-machine-business"
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-navy/10 to-coral/10 flex items-center justify-center">
                <div className="text-4xl">🚀</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-chocolate group-hover:text-navy transition-colors mb-2">
                  How to Start a Vending Machine Business
                </h3>
                <p className="text-sm text-stone/70 mb-4">
                  Complete step-by-step guide to launching your vending machine business from scratch
                </p>
                <span className="text-navy text-sm font-medium group-hover:underline">
                  Read Article →
                </span>
              </div>
            </Link>
            
            <Link 
              href="/blog/vending-machine-maintenance-tips"
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-coral/10 to-navy/10 flex items-center justify-center">
                <div className="text-4xl">🔧</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-chocolate group-hover:text-navy transition-colors mb-2">
                  Vending Machine Maintenance Tips
                </h3>
                <p className="text-sm text-stone/70 mb-4">
                  Keep your vending machines running smoothly with these essential maintenance tips
                </p>
                <span className="text-navy text-sm font-medium group-hover:underline">
                  Read Article →
                </span>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors font-semibold"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
      
      {/* Structured Data */}
      <StructuredData data={[
        generateFAQPageSchema(faqs),
        generateProductSchema({
          name: 'Basic Vending Leads Package',
          description: 'Perfect for getting started with vending location research. Includes 50+ qualified locations with basic lead details.',
          price: '19',
          currency: 'USD',
          url: 'https://www.thevendinglocator.com/pricing'
        }),
        generateProductSchema({
          name: 'Pro Vending Leads Package',
          description: 'Advanced features for growing vending operations. Includes 100+ qualified locations with enhanced lead details.',
          price: '29',
          currency: 'USD',
          url: 'https://www.thevendinglocator.com/pricing'
        }),
        generateProductSchema({
          name: 'Start Vending Leads Package',
          description: 'Comprehensive package for serious vending entrepreneurs. Includes 200+ qualified locations with complete lead details and business resources.',
          price: '129',
          currency: 'USD',
          url: 'https://www.thevendinglocator.com/pricing'
        }),
        generateProductSchema({
          name: 'Gold Vending Leads Package',
          description: 'Ultimate package with full business setup support. Includes 300+ qualified locations with complete business resources and dedicated support.',
          price: '899',
          currency: 'USD',
          url: 'https://www.thevendinglocator.com/pricing'
        })
      ]} />

      {/* Lead Capture Form */}
      <section className="py-16 bg-warm-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <LeadCaptureForm
            title="Get Notified About New Leads"
            description="Enter your email and location to be notified when new vending machine locations become available in your area."
            source="pricing-page"
            showCityState={true}
          />
        </div>
      </section>

      <Footer />
      
      {/* Zip Code Modal */}
      <ZipCodeModalWrapper />
    </main>
  )
}
