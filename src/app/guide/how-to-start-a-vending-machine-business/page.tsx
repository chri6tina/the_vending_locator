'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckIcon, StarIcon, ArrowRightIcon, PlayIcon, DocumentTextIcon, ChartBarIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export default function GuidePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', name: 'Course Overview', icon: DocumentTextIcon },
    { id: 'curriculum', name: 'Curriculum', icon: ChartBarIcon },
    { id: 'bonuses', name: 'Bonus Content', icon: StarIcon },
    { id: 'testimonials', name: 'Success Stories', icon: UserGroupIcon },
  ]

  const curriculumSections = [
    {
      title: "Phase 1: Foundation & Research",
      modules: [
        "Understanding the vending industry landscape",
        "Market research and location analysis",
        "Legal requirements and permits",
        "Business structure and registration",
        "Financial planning and startup costs"
      ]
    },
    {
      title: "Phase 2: Location Acquisition",
      modules: [
        "Identifying high-traffic locations",
        "Building relationships with property managers",
        "Negotiating contracts and terms",
        "Location evaluation criteria",
        "Competitive analysis strategies"
      ]
    },
    {
      title: "Phase 3: Machine Selection & Setup",
      modules: [
        "Types of vending machines and their ROI",
        "New vs. used machine considerations",
        "Machine placement and installation",
        "Product selection and inventory management",
        "Payment systems and technology"
      ]
    },
    {
      title: "Phase 4: Operations & Growth",
      modules: [
        "Daily operations and maintenance",
        "Customer service and feedback",
        "Marketing and promotional strategies",
        "Scaling your vending business",
        "Exit strategies and business valuation"
      ]
    }
  ]

  const bonusContent = [
    {
      title: "Cold Call & Email Scripts",
      description: "Ready-to-use templates for contacting property managers and business owners",
      icon: DocumentTextIcon,
      value: "$197 value"
    },
    {
      title: "Contract Templates",
      description: "Legally-sound contract templates for location agreements",
      icon: DocumentTextIcon,
      value: "$150 value"
    },
    {
      title: "Business Plan Template",
      description: "Comprehensive business plan template for investors and lenders",
      icon: DocumentTextIcon,
      value: "$99 value"
    },
    {
      title: "Location Database Access",
      description: "Access to our curated database of vending locations",
      icon: ChartBarIcon,
      value: "$299 value"
    },
    {
      title: "Priority Support",
      description: "Direct access to vending business experts",
      icon: UserGroupIcon,
      value: "$199 value"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Austin, TX",
      story: "Started with 3 machines, now have 47 across 3 cities. This course gave me the blueprint I needed.",
      results: "Revenue: $12,000/month",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      location: "Miami, FL",
      story: "The location research strategies alone paid for the course 10x over. Highly recommend!",
      results: "ROI: 340% in first year",
      rating: 5
    },
    {
      name: "Jennifer Park",
      location: "Seattle, WA",
      story: "From corporate job to full-time vending entrepreneur. The business templates saved me months of work.",
      results: "Profit: $8,500/month",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "How long does it take to complete the course?",
      answer: "The course is self-paced and typically takes 4-6 weeks to complete. You'll have lifetime access to all materials and updates."
    },
    {
      question: "Do I need prior business experience?",
      answer: "No prior experience is required. The course is designed for complete beginners and covers everything from basic concepts to advanced strategies."
    },
    {
      question: "What if I'm not satisfied with the course?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your purchase, no questions asked."
    },
    {
      question: "Can I access the course on mobile devices?",
      answer: "Yes! The course is fully responsive and works perfectly on all devices including smartphones, tablets, and computers."
    },
    {
      question: "How often is the course updated?",
      answer: "We update the course quarterly with new strategies, market insights, and industry changes. All updates are included at no additional cost."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-navy via-navy/95 to-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="text-center">
            {/* Course Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <StarIcon className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm font-medium">Complete Vending Business Course</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
              Master the Art of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Vending Machine Business
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform from complete beginner to successful vending entrepreneur with our comprehensive course. 
              Learn location research, contract negotiation, machine selection, and profit optimization strategies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://vendflow.gumroad.com/l/rxbzy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-navy font-bold rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
              >
                <PlayIcon className="w-6 h-6 mr-2" />
                Start Learning Today
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
              <button className="inline-flex items-center px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <DocumentTextIcon className="w-5 h-5 mr-2" />
                Download Course Outline
              </button>
            </div>

            {/* Course Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">4</div>
                <div className="text-blue-100 text-sm">Phases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">20+</div>
                <div className="text-blue-100 text-sm">Modules</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">$1,000+</div>
                <div className="text-blue-100 text-sm">Bonus Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">Lifetime</div>
                <div className="text-blue-100 text-sm">Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview Section */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-chocolate mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-stone/80 max-w-3xl mx-auto">
              Our comprehensive course covers every aspect of starting and scaling a profitable vending machine business. 
              No stone left unturned.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-navy text-white shadow-lg'
                      : 'bg-gray-100 text-stone hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.name}
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-chocolate mb-6">
                    Your Complete Vending Business Blueprint
                  </h3>
                  <p className="text-lg text-stone/80 mb-6 leading-relaxed">
                    This isn't just another course - it's your complete roadmap to building a profitable vending machine business. 
                    We've distilled years of industry experience into actionable, step-by-step guidance.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-chocolate">Proven Strategies</h4>
                        <p className="text-stone/70 text-sm">Tested methods that have generated millions in revenue</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-chocolate">Actionable Templates</h4>
                        <p className="text-stone/70 text-sm">Ready-to-use contracts, scripts, and business plans</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-chocolate">Ongoing Support</h4>
                        <p className="text-stone/70 text-sm">Access to our community and expert guidance</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-navy/5 to-blue-50 p-8 rounded-2xl border border-navy/20">
                  <h4 className="text-xl font-bold text-navy mb-4">What You'll Achieve</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-navy rounded-full mr-3"></div>
                      <span>Launch your first vending machine within 30 days</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-navy rounded-full mr-3"></div>
                      <span>Generate $500-2000 monthly profit per machine</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-navy rounded-full mr-3"></div>
                      <span>Scale to 10+ machines within 12 months</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-navy rounded-full mr-3"></div>
                      <span>Build a passive income stream</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="space-y-8">
                {curriculumSections.map((section, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-chocolate">{section.title}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex} className="flex items-start">
                          <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-stone/80">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'bonuses' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bonusContent.map((bonus, index) => {
                  const Icon = bonus.icon
                  return (
                    <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-navy/30 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <Icon className="w-8 h-8 text-navy" />
                        <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          {bonus.value}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-chocolate mb-2">{bonus.title}</h4>
                      <p className="text-stone/70 text-sm">{bonus.description}</p>
                    </div>
                  )
                })}
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="space-y-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-chocolate">{testimonial.name}</h4>
                        <p className="text-stone/60">{testimonial.location}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-stone/80 mb-4 italic">"{testimonial.story}"</p>
                    <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-lg font-semibold">
                      {testimonial.results}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Investment Section */}
      <div className="py-20 bg-gradient-to-br from-navy/5 to-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-chocolate mb-6">
            Your Investment in Success
          </h2>
          <p className="text-xl text-stone/80 mb-8">
            This course represents a fraction of what you'd pay for business consulting or the cost of learning through expensive mistakes.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-navy/20">
            <div className="mb-6">
              <span className="text-4xl font-bold text-navy">$79</span>
              <span className="text-xl text-stone/60 ml-2">one-time payment</span>
            </div>
            <div className="text-2xl font-bold text-green-600 mb-4">
              Total Value: $1,000+
            </div>
            <p className="text-stone/70 mb-8">
              Includes lifetime access to all course materials, bonus content, templates, and future updates.
            </p>
            <a
              href="https://vendflow.gumroad.com/l/rxbzy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-navy to-blue-700 text-white font-bold rounded-xl hover:from-navy/90 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              <CurrencyDollarIcon className="w-6 h-6 mr-2" />
              Invest in Your Future
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-chocolate mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-stone/80">
              Everything you need to know about our comprehensive vending business course.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-chocolate mb-3">{faq.question}</h3>
                <p className="text-stone/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold mb-6">
            Ready to Start Your Vending Business Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful vending entrepreneurs who have transformed their lives with our proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://vendflow.gumroad.com/l/rxbzy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-navy font-bold rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
            >
              <PlayIcon className="w-6 h-6 mr-2" />
              Get Started Today
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              View All Services
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            30-day money-back guarantee • Lifetime access • Free updates
          </p>
        </div>
      </div>
    </div>
  )
}
