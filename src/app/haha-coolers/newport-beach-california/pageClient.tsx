'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CloudIcon,
  BoltIcon,
  ChevronDownIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function NewportBeachCaliforniaCoolerPage() {
  const cityDisplayName = 'Newport Beach';
  const stateDisplayName = 'California';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "Why should I choose Haha smart coolers for my Newport Beach vending business?",
      answer: "Newport Beach businesses benefit from Haha smart coolers' advanced technology, which includes 99% accurate checkout, contactless payments, and real-time inventory management. Perfect for Newport Beach's mix of office buildings, retail spaces, and healthcare facilities, Haha coolers eliminate traditional vending machine problems while maximizing sales potential.'s diverse business landscape including offices, retail locations, and healthcare facilities."
    },
    {
      question: "How does the grab & go technology work in Newport Beach?",
      answer: "Customers in Newport Beach simply tap their card or phone to unlock the cooler door, select items naturally, and close the door. The vision system automatically detects what was taken and charges their payment method - no buttons or selections needed. This grab & go experience works perfectly in Newport Beach's fast-paced business environment."
    },
    {
      question: "What payment methods do Haha coolers accept in Newport Beach?",
      answer: "Haha coolers in Newport Beach accept all major credit cards, debit cards, Apple Pay, Google Pay, Samsung Pay, and all NFC contactless payments. 100% cashless operation eliminates coin jams and maintenance issues, making them perfect for Newport Beach's modern business environment."
    },
    {
      question: "Can I manage multiple Haha coolers across Newport Beach remotely?",
      answer: "Yes! The Haha management app lets you monitor stock levels, track sales, auto-generate restock orders, and handle customer feedback in real-time for all your Newport Beach locations from one mobile dashboard. Perfect for operators managing multiple Newport Beach placements."
    },
    {
      question: "What products work best in Haha coolers for Newport Beach locations?",
      answer: "For Newport Beach locations, Haha coolers work great with sodas, energy drinks, bottled water, juices, yogurt, sandwiches, salads, and meal prep items. The no-drop mechanism means operators can sell premium products like glass bottles and delicate food items that traditional machines can't handle.'s diverse customer base."
    },
    {
      question: "How accurate is the checkout system in Newport Beach?",
      answer: "The vision technology in Haha coolers achieves 99% accuracy in detecting items removed. This advanced system ensures Newport Beach customers are charged correctly while minimizing losses for operators - critical for Newport Beach's competitive vending market."
    },
    {
      question: "What's included when I purchase a Haha cooler for Newport Beach?",
      answer: "Each Haha US360 cooler includes vision technology, APP smart management system, cashless payment terminal, 1-year parts warranty, and ETL certification. The unit operates on standard 110V, 60Hz power - perfect for Newport Beach locations without special electrical requirements."
    },
    {
      question: "Do you offer support for Haha cooler operators in Newport Beach?",
      answer: "Support for Newport Beach Haha cooler operators is available through our Telegram community @thevendinglocator, where you can get help, share tips, and connect with other operators. Multi-unit Newport Beach customers receive priority support and additional resources."
    }
  ];

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-stone">
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/haha-coolers" className="hover:text-navy transition-colors">
                Haha Coolers
              </Link>
              <span>/</span>
              <Link href={`/haha-coolers/${stateDisplayName.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-navy transition-colors">
                {stateDisplayName}
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{cityDisplayName}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 leading-tight"
              >
                Haha Smart Coolers in{' '}
                <span className="text-navy">{cityDisplayName}, {stateDisplayName}</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-stone mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Ideal for Newport Beach's thriving California market, Haha smart coolers provide advanced technology for local businesses, healthcare systems, and educational facilities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                <div className="flex items-center gap-2 bg-cream px-4 py-2 rounded-lg">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-charcoal">99% Accurate Checkout</span>
                </div>
                <div className="flex items-center gap-2 bg-cream px-4 py-2 rounded-lg">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-charcoal">Cashless Payments</span>
                </div>
                <div className="flex items-center gap-2 bg-cream px-4 py-2 rounded-lg">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-charcoal">Remote Management</span>
                </div>
                <div className="flex items-center gap-2 bg-cream px-4 py-2 rounded-lg">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-charcoal">1-Year Warranty</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="https://amzn.to/43aTe10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                >
                  Buy Haha US360 Mini on Amazon →
                </a>
                <a
                  href="#pricing"
                  className="bg-white text-navy border-2 border-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy hover:text-white transition-colors"
                >
                  View All Models
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Lineup Section */}
        <section id="pricing" className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4 text-center">
                Choose Your Haha Smart Cooler
              </h2>
              <p className="text-lg text-stone mb-12 text-center max-w-2xl mx-auto">
                Perfect for Newport Beach locations - from compact offices to high-traffic retail spaces
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Mini */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6">
                    <img
                      src="/haha-coolers/haha-us360-mini-black.png"
                      alt="Haha US360 Mini"
                      className="w-full h-48 object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-charcoal mb-2">Haha US360 Mini</h3>
                    <p className="text-stone mb-4">Perfect for Newport Beach offices and breakrooms</p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold text-charcoal">$2,999</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-stone">Vision Technology (99% Accuracy)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-stone">APP Smart Management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-stone">Cashless Payment System</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-stone">1-Year Parts Warranty</span>
                      </li>
                    </ul>
                    <a
                      href="https://amzn.to/43aTe10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors"
                    >
                      Buy on Amazon
                    </a>
                  </div>
                </div>

                {/* Pro */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-navy">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="inline-flex items-center rounded-full bg-coral px-4 py-1 text-sm font-semibold text-white shadow-lg">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6">
                    <img
                      src="/haha-coolers/haha-pro-black.png"
                      alt="Haha Pro"
                      className="w-full h-48 object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-charcoal mb-2">Haha Pro</h3>
                    <p className="text-stone mb-4">Ideal for Newport Beach retail and high-traffic locations</p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold text-charcoal">$4,999</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-stone">378 Bottle Capacity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-stone">Camera-Verified Checkout</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-stone">Pro App Management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-stone">Double-Glazed Glass</span>
                      </li>
                    </ul>
                    <a
                      href="https://amzn.to/3LtSLRq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors"
                    >
                      Buy on Amazon
                    </a>
                  </div>
                </div>

                {/* Ultra */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6">
                    <img
                      src="/haha-coolers/haha-ultra-black.png"
                      alt="Haha Ultra"
                      className="w-full h-48 object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-charcoal mb-2">Haha Ultra</h3>
                    <p className="text-stone mb-4">Enterprise solution for Newport Beach high-volume locations</p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold text-charcoal">$7,299</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-stone">High-Volume Capacity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-stone">Visual AI + Security</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-stone">4G / Wi-Fi Connectivity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-stone">Enterprise Support</span>
                      </li>
                    </ul>
                    <a
                      href="https://amzn.to/3LwEbIO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors"
                    >
                      Buy on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4 text-center">
                Why Choose Haha for Newport Beach?
              </h2>
              <p className="text-lg text-stone mb-12 text-center max-w-2xl mx-auto">
                Modern vending technology designed for Newport Beach's business landscape
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-cream rounded-xl p-6">
                  <CpuChipIcon className="h-12 w-12 text-navy mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-2">99% Accurate Checkout</h3>
                  <p className="text-stone">Advanced vision technology automatically detects what customers take with 99% accuracy. Perfect for Newport Beach locations where accuracy matters.</p>
                </div>
                <div className="bg-cream rounded-xl p-6">
                  <DevicePhoneMobileIcon className="h-12 w-12 text-navy mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-2">APP Smart Management</h3>
                  <p className="text-stone">Control your Newport Beach coolers remotely. Monitor stock, track sales, and auto-generate restock orders from your mobile device.</p>
                </div>
                <div className="bg-cream rounded-xl p-6">
                  <ShieldCheckIcon className="h-12 w-12 text-navy mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-2">No Broken Products</h3>
                  <p className="text-stone">Say goodbye to old-school gravity-drop machines! Our smart system prevents spills and broken items - perfect for Newport Beach operators.</p>
                </div>
                <div className="bg-cream rounded-xl p-6">
                  <DevicePhoneMobileIcon className="h-12 w-12 text-navy mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Cashless Payments</h3>
                  <p className="text-stone">No coin jams or refund failures. Accepts Credit Card, Apple Pay, Google Pay, and all NFC payments - ideal for Newport Beach's modern consumers.</p>
                </div>
                <div className="bg-cream rounded-xl p-6">
                  <ChartBarIcon className="h-12 w-12 text-navy mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Higher Sales Potential</h3>
                  <p className="text-stone">Offer a wider variety of fresh food, snacks, and drinks. Self-serve system lets Newport Beach customers select multiple items like supermarket shopping.</p>
                </div>
                <div className="bg-cream rounded-xl p-6">
                  <BoltIcon className="h-12 w-12 text-navy mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-2">ETL Certified & Safe</h3>
                  <p className="text-stone">Certified by ETL to ensure safe working temperatures. Operates on standard 110V, 60Hz power - perfect for Newport Beach locations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-stone mb-12 text-center">
                Everything you need to know about Haha smart coolers in Newport Beach
              </p>

              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="text-lg font-semibold text-charcoal pr-8">{faq.question}</span>
                      <ChevronDownIcon 
                        className={`h-5 w-5 text-charcoal transition-transform flex-shrink-0 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-stone leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-stone mb-6">
                  Still have questions? Our team is here to help!
                </p>
                <a
                  href="https://t.me/thevendinglocator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Contact Us on Telegram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-6">
                Ready to Transform Your Newport Beach Vending Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join operators across Newport Beach who have modernized their operations with Haha smart coolers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://amzn.to/43aTe10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                >
                  Shop on Amazon
                </a>
                <a
                  href="/haha-coolers"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </>
  );
}
