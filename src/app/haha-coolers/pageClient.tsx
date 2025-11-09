'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import { 
  ChevronDownIcon, 
  CheckCircleIcon,
  BoltIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

const features = [
  {
    name: '99% Accurate Checkout',
    description: 'Advanced vision technology automatically detects what customers take with 99% accuracy. Just open the door, grab & go - checkout happens automatically!',
    icon: CpuChipIcon,
  },
  {
    name: 'APP Smart Management',
    description: 'Control your vending machines remotely. Monitor stock, track sales, auto-generate restock orders, and handle consumer complaints in real-time.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'No More Broken Products',
    description: 'Say goodbye to old-school gravity-drop machines! Our smart vending system prevents spills and broken sodas - fragile items stay 100% secure.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Cashless Payments',
    description: 'No coin jams or refund failures, no daily coin box maintenance. Accepts Credit Card, Apple Pay, Google Pay, Samsung Pay, and all NFC payments.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Higher Sales Potential',
    description: 'Offer a wider variety of fresh food, snacks, and drinks. Self-serve system lets customers select multiple items like supermarket shopping.',
    icon: ChartBarIcon,
  },
  {
    name: 'ETL Certified & Safe',
    description: 'Certified by ETL to ensure safe working temperatures and conditions. Operates on standard 110V, 60Hz power with reliable performance.',
    icon: BoltIcon,
  },
]

const pricingPlans = [
  {
    name: 'Single Unit',
    price: '$2,999',
    description: 'Perfect for testing the smart vending revolution',
    features: [
      '1 Haha US360 Smart Cooler (Mini)',
      'Vision Technology (99% Accuracy)',
      'APP Smart Management',
      'Cashless Payment System',
      'Credit Card, Apple/Google Pay',
      '1-Year Parts Warranty',
      'ETL Certified',
      'Black or Yellow Color Options'
    ],
    cta: 'Order Now',
    highlighted: false,
  },
  {
    name: '3-Unit Bundle',
    price: '$8,499',
    description: 'Best value - save $500 per location!',
    features: [
      '3 Haha US360 Smart Coolers',
      'Vision Technology (99% Accuracy)',
      'APP Smart Management Dashboard',
      'Multi-Location Monitoring',
      'Cashless Payment System',
      '1-Year Parts Warranty',
      'Priority Support',
      'Free Shipping'
    ],
    cta: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Enterprise Fleet',
    price: 'Custom',
    description: 'For large-scale vending operations',
    features: [
      '10+ Haha Smart Coolers',
      'Dedicated Account Manager',
      'Custom Integration Support',
      'Extended Warranty Options',
      'Volume Pricing Discounts',
      'White-Glove Setup & Training',
      'Priority Technical Support',
      'Custom Payment Solutions',
      'Multi-Location Analytics'
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

const testimonials = [
  {
    name: 'Mike Rodriguez',
    location: 'Miami, FL',
    rating: 5,
    text: 'The grab & go technology is incredible! Customers love being able to pick up multiple items at once. No more broken bottles from the drop mechanism - I can finally sell glass beverages!',
  },
  {
    name: 'Sarah Chen',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'The cashless system is so much easier than dealing with coins. The APP management lets me see exactly what needs restocking in real-time. My route planning is now super efficient.',
  },
  {
    name: 'David Thompson',
    location: 'Austin, TX',
    rating: 5,
    text: 'Best investment for my vending business. The 99% accuracy means almost zero losses, and customers actually prefer the shopping experience. Sales are up 40% at every location!',
  },
]

const faqs = [
  {
    question: "What makes Haha coolers different from traditional vending machines?",
    answer: "Haha coolers use revolutionary vision technology for grab & go shopping - no buttons, no selections needed. Just open the door, take what you want, and walk away. The system automatically detects items with 99% accuracy and processes payment. No more gravity-drop mechanisms means zero broken products!"
  },
  {
    question: "How does the grab & go technology work?",
    answer: "Our vision technology uses advanced cameras and sensors to track exactly what items customers take from the cooler. When they close the door, the system automatically detects all items removed and charges their payment method. It's like Amazon Go, but for your vending business!"
  },
  {
    question: "What kind of payment methods are supported?",
    answer: "Haha coolers are 100% cashless and accept all major credit cards, debit cards, Apple Pay, Google Pay, Samsung Pay, and all NFC contactless payments. No coin jams, no refund issues, no daily coin box maintenance."
  },
  {
    question: "How accurate is the checkout system?",
    answer: "The vision technology is 99% accurate in detecting items. Our advanced sensors and algorithms ensure customers are charged correctly for what they take, minimizing losses while providing a seamless shopping experience."
  },
  {
    question: "What's included with my purchase?",
    answer: "Each Haha US360 cooler comes with vision technology, APP smart management system, cashless payment terminal, 1-year parts warranty, and ETL certification. The unit operates on standard 110V, 60Hz power. Available in Black or Yellow."
  },
  {
    question: "What kind of warranty and support do you offer?",
    answer: "All Haha coolers include a 1-year parts warranty. We offer technical support to help you get the most out of your smart vending system. Extended warranty options are available for enterprise customers."
  },
  {
    question: "Can I manage multiple coolers from one dashboard?",
    answer: "Absolutely! The APP smart management system allows you to monitor stock, track sales, auto-generate restock orders, and handle consumer complaints in real-time across all your locations from one mobile app."
  },
  {
    question: "Do you offer support after purchase?",
    answer: "Yes! We provide ongoing support through our Telegram community @thevendinglocator. Get tips, troubleshooting help, and connect with other vending operators. For multi-unit orders, additional support options are available."
  },
  {
    question: "Why is grab & go better than traditional vending machines?",
    answer: "Traditional machines use gravity-drop mechanisms that break fragile items and limit what you can sell. Grab & go means zero product damage, customers can buy multiple items at once like a store, and you can sell premium products like glass bottles, salads, and delicate items."
  },
  {
    question: "What products can I sell in Haha coolers?",
    answer: "Haha coolers work great for beverages, fresh food, snacks, and more! Sell sodas, energy drinks, bottled water (even glass bottles!), juices, yogurt, sandwiches, salads, meal prep items, and other refrigerated grab-and-go products. The no-drop design protects fragile items."
  }
]

export default function HahaCoolersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showStickyBar, setShowStickyBar] = useState(false)
  const [selectedColor, setSelectedColor] = useState<'black' | 'yellow'>('black')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send to your backend
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Show sticky bar when scrolled past hero
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyBar(true)
      } else {
        setShowStickyBar(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-warm-white">
      <Header />
      
      {/* Hero Section with Product Image */}
      <div className="relative bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Product Info */}
            <div className="order-2 lg:order-1">
              <div className="mb-6 inline-flex items-center rounded-full bg-navy/10 px-4 py-2 text-sm font-medium text-navy">
                <BoltIcon className="h-4 w-4 mr-2" />
                Next Generation Smart Vending
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal mb-6">
                Haha US360 Mini<br/>
                <span className="text-navy">Grab & Go</span> Smart Cooler
              </h1>
              
              <p className="mt-6 text-xl leading-8 text-stone">
                Revolutionary vision technology with 99% accurate checkout. Open the door, grab what you want, walk away - automatic payment. No buttons, no selections, just grab & go!
              </p>

              {/* Price */}
              <div className="mt-8 flex items-baseline gap-4">
                <span className="text-5xl font-bold text-charcoal">$2,999</span>
                <div className="text-stone">
                  <div className="text-sm">One-time purchase</div>
                  <div className="text-xs">Premium smart vending</div>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-lg text-sm font-medium text-blue-800">
                <span>💬 24/7 Support:</span>
                <a
                  href="https://t.me/thevendinglocator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy hover:underline"
                >
                  Telegram @thevendinglocator
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="https://amzn.to/43aTe10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg text-center"
                >
                  Buy Now on Amazon →
                </a>
                <a
                  href="/haha-coolers/mini"
                  className="w-full sm:w-auto bg-white text-navy border-2 border-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy hover:text-white transition-colors text-center"
                >
                  Learn More
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-stone">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span>1-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span>ETL Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span>99% Accuracy</span>
                </div>
              </div>

              {/* Color Options */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-charcoal mb-3">Choose Your Color</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedColor('black')}
                    className={`flex items-center gap-2 bg-white border-2 rounded-lg px-4 py-2 transition-colors ${
                      selectedColor === 'black' ? 'border-navy ring-2 ring-navy/20' : 'border-gray-300 hover:border-navy'
                    }`}
                  >
                    <div className="w-6 h-6 bg-black rounded-full border border-gray-300"></div>
                    <span className="text-sm font-medium text-charcoal">Black</span>
                  </button>
                  <button
                    onClick={() => setSelectedColor('yellow')}
                    className={`flex items-center gap-2 bg-white border-2 rounded-lg px-4 py-2 transition-colors ${
                      selectedColor === 'yellow' ? 'border-navy ring-2 ring-navy/20' : 'border-gray-300 hover:border-navy'
                    }`}
                  >
                    <div className="w-6 h-6 bg-yellow-400 rounded-full border border-gray-300"></div>
                    <span className="text-sm font-medium text-charcoal">Yellow</span>
                  </button>
                </div>
              </div>

              {/* Support Info */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <DevicePhoneMobileIcon className="h-5 w-5 text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm mb-1">Ongoing Support</h4>
                    <p className="text-xs text-stone mb-2">Join our community for tips, troubleshooting, and support</p>
                    <a 
                      href="https://t.me/thevendinglocator" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-navy hover:underline"
                    >
                      📱 Telegram: @thevendinglocator
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Product Image */}
            <div className="order-1 lg:order-2">
              <div className="relative bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8">
                <img
                  src={`/haha-coolers/haha-us360-mini-${selectedColor}.png`}
                  alt={`Haha US360 Mini Smart Vending Machine - ${selectedColor}`}
                  className="w-full h-auto transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Haha Pro Hero Section */}
      <div className="relative bg-neutral-50 overflow-hidden border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Product Info */}
            <div className="order-2 lg:order-1">
              <div className="mb-6 inline-flex items-center rounded-full bg-navy/10 px-4 py-2 text-sm font-medium text-navy">
                Pro-Level Smart Vending
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal mb-6">
                Haha Pro<br/>
                <span className="text-navy">AI Smart</span> Vending Machine
              </h2>

              <p className="mt-6 text-xl leading-8 text-stone">
                A full-size, AI-powered vending experience that lets customers shop like a micro-market. Seven shelves, camera-verified checkout,
                and double-glazed glass deliver premium merchandising without an attendant.
              </p>

              {/* Price */}
              <div className="mt-8 flex items-baseline gap-4">
                <span className="text-5xl font-bold text-charcoal">$4,999</span>
                <div className="text-stone">
                  <div className="text-sm">One-time purchase</div>
                  <div className="text-xs">Professional AI smart vending</div>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-lg text-sm font-medium text-blue-800">
                <span>💬 24/7 Support:</span>
                <a
                  href="https://t.me/thevendinglocator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy hover:underline"
                >
                  Telegram @thevendinglocator
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="https://amzn.to/3LtSLRq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg text-center"
                >
                  Buy Now on Amazon →
                </a>
                <a
                  href="/haha-coolers/pro"
                  className="w-full sm:w-auto bg-white text-navy border-2 border-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy hover:text-white transition-colors text-center"
                >
                  Learn More
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-stone">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span>378 Bottle Capacity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span>Camera-Verified Checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span>Pro App Management</span>
                </div>
              </div>
            </div>

            {/* Right Column - Product Image */}
            <div className="order-1 lg:order-2">
              <div className="relative bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8">
                <img
                  src="/haha-coolers/haha-pro-black.png"
                  alt="Haha Pro AI Smart Vending Machine"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Haha Ultra Hero Section */}
      <div className="relative bg-neutral-50 overflow-hidden border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Product Info */}
            <div className="order-2 lg:order-1">
              <div className="mb-6 inline-flex items-center rounded-full bg-navy/10 px-4 py-2 text-sm font-medium text-navy">
                Enterprise Smart Vending
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal mb-6">
                Haha Ultra<br/>
                <span className="text-navy">AI Smart</span> Vending Machine
              </h2>

              <p className="mt-6 text-xl leading-8 text-stone">
                The flagship smart vending platform for high-volume locations. Ultra-fast AI checkout, massive capacity, and business-grade remote
                management so you can run unattended retail at scale.
              </p>

              {/* Price */}
              <div className="mt-8 flex items-baseline gap-4">
                <span className="text-5xl font-bold text-charcoal">$7,299</span>
                <div className="text-stone">
                  <div className="text-sm">Single unit pricing</div>
                  <div className="text-xs">Enterprise support available</div>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-lg text-sm font-medium text-blue-800">
                <span>💬 24/7 Support:</span>
                <a
                  href="https://t.me/thevendinglocator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy hover:underline"
                >
                  Telegram @thevendinglocator
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="https://amzn.to/3LwEbIO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg text-center"
                >
                  Buy Now on Amazon →
                </a>
                <a
                  href="/haha-coolers/ultra"
                  className="w-full sm:w-auto bg-white text-navy border-2 border-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy hover:text-white transition-colors text-center"
                >
                  Learn More
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-stone">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span>High-volume combo merchandising</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span>Visual AI + Electromagnetic Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span>App Control with 4G / Wi-Fi</span>
                </div>
              </div>
            </div>

            {/* Right Column - Product Image */}
            <div className="order-1 lg:order-2">
              <div className="relative bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8">
                <img
                  src="/haha-coolers/haha-ultra-black.png"
                  alt="Haha Ultra AI Smart Vending Machine"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-neutral-50 py-16 sm:py-24 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold tracking-tight text-charcoal mb-4">
              How Grab & Go Works
            </h2>
            <p className="text-lg text-stone">
              The future of vending is here - no buttons, no broken products, just grab & go
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-navy">1</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Open Door & Browse</h3>
              <p className="text-stone">
                Tap your card or phone to unlock. Browse the cooler just like a store refrigerator. Take your time choosing what you want.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-navy">2</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Grab Multiple Items</h3>
              <p className="text-stone">
                Pick up as many items as you want - drinks, snacks, meals. Shop like a supermarket. Vision cameras track what you take.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-navy">3</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Close & Go</h3>
              <p className="text-stone">
                Close the door and walk away. Automatic checkout charges your card for exactly what you took. Receipt sent instantly!
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-6 py-3 rounded-lg">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-semibold">99% Accurate Checkout - No Mistakes!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-warm-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold tracking-tight text-charcoal mb-4">
              Powerful Features That Drive Results
            </h2>
            <p className="text-lg text-stone">
              Everything you need to run a modern, profitable vending business
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative bg-warm-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10">
                    <feature.icon className="h-6 w-6 text-navy" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">{feature.name}</h3>
                </div>
                <p className="text-stone leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Specifications Section */}
      <div className="bg-white py-16 sm:py-24 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8">
                <img
                  src="/haha-coolers/haha-us360-mini-black.png"
                  alt="Haha US360 Mini Specifications"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold tracking-tight text-charcoal mb-6">
                Technical Specifications
              </h2>
              <p className="text-lg text-stone mb-8">
                Engineered for reliability and performance. The Haha US360 Mini sets a new standard for smart vending.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-warm-white rounded-lg p-4">
                  <div className="bg-navy/10 p-2 rounded">
                    <CpuChipIcon className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Vision Technology</h3>
                    <p className="text-sm text-stone">99% accuracy checkout system with advanced cameras and sensors</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-warm-white rounded-lg p-4">
                  <div className="bg-navy/10 p-2 rounded">
                    <BoltIcon className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Power Requirements</h3>
                    <p className="text-sm text-stone">110V, 60Hz - Standard US electrical outlet</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-warm-white rounded-lg p-4">
                  <div className="bg-navy/10 p-2 rounded">
                    <ShieldCheckIcon className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Safety Certification</h3>
                    <p className="text-sm text-stone">ETL Certified for safe working temperatures and conditions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-warm-white rounded-lg p-4">
                  <div className="bg-navy/10 p-2 rounded">
                    <DevicePhoneMobileIcon className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Payment Systems</h3>
                    <p className="text-sm text-stone">Credit/Debit cards, Apple Pay, Google Pay, Samsung Pay, all NFC payments</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-warm-white rounded-lg p-4">
                  <div className="bg-navy/10 p-2 rounded">
                    <CloudIcon className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Smart Management</h3>
                    <p className="text-sm text-stone">Remote monitoring, inventory tracking, auto-restock alerts via mobile app</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-warm-white rounded-lg p-4">
                  <div className="bg-navy/10 p-2 rounded">
                    <CheckCircleIcon className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Warranty</h3>
                    <p className="text-sm text-stone">1-Year Parts Warranty included with purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold tracking-tight text-charcoal mb-4">
              Why Operators Choose Haha
            </h2>
            <p className="text-lg text-stone">
              Join hundreds of successful vending operators maximizing their ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-semibold text-charcoal mb-3">Supermarket Shopping Experience</h3>
              <p className="text-stone leading-relaxed">
                Customers can select multiple items at once, just like shopping at a store. Open the door, grab what you want, and go. The vision technology automatically detects and charges for everything taken.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-4xl mb-4">🍾</div>
              <h3 className="text-2xl font-semibold text-charcoal mb-3">Zero Product Damage</h3>
              <p className="text-stone leading-relaxed">
                Say goodbye to broken sodas and crushed snacks! No gravity-drop mechanism means fragile items stay 100% secure. Sell glass bottles, delicate food items, and premium products with confidence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-semibold text-charcoal mb-3">100% Cashless Operation</h3>
              <p className="text-stone leading-relaxed">
                No coin jams, no refund failures, no daily coin box maintenance. Accept all major credit cards, Apple Pay, Google Pay, Samsung Pay, and NFC payments. More convenient for customers, easier for you.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-semibold text-charcoal mb-3">Remote Fleet Management</h3>
              <p className="text-stone leading-relaxed">
                Monitor stock levels, track sales, auto-generate restock orders, and handle customer complaints in real-time from your phone. Manage your entire vending operation from anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold tracking-tight text-charcoal mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-stone mb-6">
              Choose the perfect package for your business. All plans include 1-year parts warranty and ETL certification.
            </p>
            
            {/* Color Options */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className="text-sm font-medium text-charcoal">Available Colors:</span>
              <div className="flex gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-black rounded-full border-2 border-gray-300"></div>
                  <span className="text-sm text-stone">Black</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-gray-300"></div>
                  <span className="text-sm text-stone">Yellow</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl overflow-hidden ${
                  plan.highlighted
                    ? 'shadow-2xl scale-105 border-4 border-navy'
                    : 'shadow-lg border-2 border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="inline-flex items-center rounded-full bg-coral px-4 py-1 text-sm font-semibold text-white shadow-lg">
                      ⭐ BEST VALUE
                    </span>
                  </div>
                )}

                {/* Product Image Section */}
                {plan.name === 'Single Unit' && (
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6">
                    <img
                      src="/haha-coolers/haha-us360-mini-black.png"
                      alt="Haha US360 Mini"
                      className="w-full h-48 object-contain"
                    />
                  </div>
                )}
                
                <div className={`p-8 ${plan.highlighted ? 'bg-gradient-to-br from-navy to-navy-light text-white' : 'bg-white'}`}>
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-charcoal'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm mb-4 ${plan.highlighted ? 'text-blue-100' : 'text-stone'}`}>
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-charcoal'}`}>
                        {plan.price}
                      </span>
                      {plan.price !== 'Custom' && (
                        <span className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-stone'}`}>
                          one-time
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircleIcon 
                          className={`h-5 w-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-blue-200' : 'text-green-600'}`}
                        />
                        <span className={`text-sm leading-tight ${plan.highlighted ? 'text-blue-50' : 'text-stone'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.name === 'Single Unit' ? (
                    <a
                      href="https://amzn.to/43aTe10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-6 py-4 rounded-lg font-semibold transition-colors bg-navy text-white hover:bg-navy-light shadow-lg"
                    >
                      🛒 Buy Now on Amazon
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className={`block w-full text-center px-6 py-4 rounded-lg font-semibold transition-colors shadow-lg ${
                        plan.highlighted
                          ? 'bg-white text-navy hover:bg-blue-50'
                          : 'bg-navy text-white hover:bg-navy-light'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-stone mb-4">
              ✅ Available now | Multi-unit discounts available | Ongoing support via Telegram
            </p>
            <a href="#contact" className="text-navy font-semibold hover:underline">
              Contact us for bulk pricing →
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold tracking-tight text-charcoal mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-stone">
              Real results from real vending operators
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
                  ))}
                </div>
                <p className="text-stone leading-relaxed mb-6">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-sm text-stone">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold tracking-tight text-charcoal mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-stone">
              Fill out the form below and our team will contact you within 24 hours to discuss your needs.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
              <CheckCircleIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-2">Thank You!</h3>
              <p className="text-stone">
                Your message has been received. We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-warm-white rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-charcoal mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                    placeholder="Your Vending Co."
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent transition-colors"
                  placeholder="Tell us about your vending business and how many coolers you're interested in..."
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </div>

              <p className="mt-4 text-sm text-stone text-center">
                By submitting this form, you agree to be contacted by our sales team.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold tracking-tight text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-stone">
              Everything you need to know about Haha smart coolers
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
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
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-6">
            Transform Your Vending Business Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of operators who have modernized their operations with Haha smart coolers. Start making data-driven decisions and maximize your ROI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto bg-white text-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              View Pricing
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Zip Code Modal */}
      <ZipCodeModalWrapper />

      {/* Sticky Buy Now Bar */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-white border-t-4 border-navy shadow-2xl transition-transform duration-300 z-50 ${
          showStickyBar ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/haha-coolers/haha-us360-mini-black.png"
                alt="Haha US360 Mini"
                className="w-16 h-16 object-contain hidden sm:block"
              />
              <div>
                <h3 className="font-bold text-charcoal text-lg">Haha US360 Mini Smart Cooler</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-navy">$2,999</span>
                  <span className="text-sm text-stone">Available Now</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <a
                href="https://amzn.to/43aTe10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg text-center"
              >
                🛒 Buy Now
              </a>
              <a
                href="#contact"
                className="flex-1 sm:flex-none bg-white text-navy border-2 border-navy px-8 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

