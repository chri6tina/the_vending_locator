'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { 
  ChevronDownIcon, 
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  SparklesIcon,
  DocumentTextIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, CheckCircleIcon as CheckCircleIconSolid, XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function VendingWebsiteRentalPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const openCheckoutModal = (packageType: string) => {
    setSelectedPackage(packageType)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedPackage(null)
    setFormData({ name: '', email: '' })
    setIsSubmitting(false)
  }

  const getPackageInfo = (packageType: string) => {
    const packages: Record<string, { name: string; price: number; description: string }> = {
      starter: {
        name: 'Starter Plan',
        price: 49,
        description: 'Multi-page website (3-4 pages) with basic features'
      },
      professional: {
        name: 'Professional Plan',
        price: 99,
        description: 'Multi-page website (5-7 pages) with enhanced features'
      },
      premium: {
        name: 'Premium Plan',
        price: 149,
        description: 'Multi-page website (8-10 pages) with advanced features'
      }
    }
    return packages[packageType] || { name: packageType, price: 0, description: '' }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPackage) return

    setIsSubmitting(true)
    const packageInfo = getPackageInfo(selectedPackage)

    try {
      // First, submit to Formspree with package-specific details
      const formspreeResponse = await fetch('https://formspree.io/f/mjggbwdw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          package: selectedPackage,
          packageName: packageInfo.name,
          packagePrice: `$${packageInfo.price}/month`,
          packageDescription: packageInfo.description,
          _subject: `Website Rental Checkout - ${packageInfo.name} ($${packageInfo.price}/month)`,
          _replyto: formData.email,
        }),
      })

      if (!formspreeResponse.ok) {
        throw new Error('Formspree submission failed')
      }

      // Then, create Stripe checkout session
      const stripeResponse = await fetch('/api/website-rental-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          packageType: selectedPackage,
          email: formData.email,
        }),
      })

      const data = await stripeResponse.json()

      if (data.success && data.url) {
        window.location.href = data.url
      } else {
        alert('Error creating checkout session. Please try again.')
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Error processing your request. Please try again.')
      setIsSubmitting(false)
    }
  }

  const faqs = [
    {
      question: "Do I own the website/domain?",
      answer: "You rent the website and hosting service from us monthly. The website is hosted under our system, and we handle all technical maintenance. If you cancel, the website is no longer accessible. We can discuss domain options if you have specific needs."
    },
    {
      question: "What happens if I cancel?",
      answer: "If you cancel your website rental, the website will be taken down and will no longer be accessible. You can export your content and contact information before canceling if needed. There are no long-term contracts—you can cancel anytime."
    },
    {
      question: "Can I use my own domain?",
      answer: "We can discuss custom domain options depending on your plan. Most websites are hosted under our system, but we may be able to configure a custom domain for your website rental. Contact us to discuss your specific needs."
    },
    {
      question: "Can you add multiple cities or service areas?",
      answer: "Yes, we can add multiple cities or service areas to your website. This helps you expand your online presence and reach customers in different markets. Additional service areas may be subject to plan limits or additional fees—contact us to discuss your expansion needs."
    },
    {
      question: "How do leads reach me?",
      answer: "Leads reach you through the contact information displayed on your website. When someone fills out the inquiry form, it's routed to your email address. You can also display your phone number prominently so customers can call directly. All inquiries go directly to you—we don't intercept or filter them."
    },
    {
      question: "Do you run ads?",
      answer: "No, we do not run paid advertising campaigns for individual website rentals. We provide the website and hosting infrastructure. The website is designed to be found through organic search, but we don't guarantee specific rankings or run paid ads on your behalf."
    },
    {
      question: "Is SEO included?",
      answer: "Yes, basic on-page SEO is included. This includes proper title tags, meta descriptions, and content optimized for search engines. However, we don't guarantee specific search rankings or positions. SEO performance can vary based on your market, competition, and other factors beyond our control."
    },
    {
      question: "Can I upgrade later?",
      answer: "Yes, you can upgrade your plan later if you need additional features, more service areas, or expanded capabilities. Contact us to discuss upgrade options that fit your growing business needs."
    },
    {
      question: "How long does it take to launch?",
      answer: "Typically, websites are launched within a few weeks after we receive your business details. The exact timeline depends on the information you provide, any customizations needed, and our current workload. We'll provide a more specific timeline when you sign up."
    }
  ]

  return (
    <main className="min-h-screen bg-warm-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-warm-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight"
            >
              Vending Website Rental
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-4 sm:mt-5"
            >
              <p className="text-xl sm:text-2xl lg:text-3xl font-playfair font-semibold text-coral italic px-2 sm:px-0">
                You found us. Now let them find you.
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 sm:mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0"
            >
              Get a professional vending business website—without building or managing it yourself. 
              We build and host your site, you rent it monthly for a professional online presence.
            </motion.p>

            {/* Trust Signals - Simplified to 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 max-w-md mx-auto px-4"
            >
              <div className="flex items-center gap-2">
                <CheckBadgeIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium text-chocolate whitespace-nowrap">Professional Design</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span className="text-sm font-medium text-chocolate whitespace-nowrap">Fast Launch</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() => {
                  const pricingSection = document.getElementById('pricing')
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                View Website Plans
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-transparent text-chocolate border-2 border-chocolate px-8 py-3 rounded-lg font-semibold hover:bg-chocolate hover:text-white transition-colors"
              >
                Talk to Us →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Portfolio Showcase Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-3"
            >
              Our Portfolio
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-stone"
            >
              See examples of professional vending websites we've built
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Portfolio Item - Jacksonville */}
            <motion.a
              href="https://www.jacksonvillevendingmachines.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <div className="relative aspect-video bg-gray-100 overflow-hidden">
                <Image
                  src="/Jacksonville Vending Machine Website.png"
                  alt="Jacksonville Vending Machines Website"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-playfair font-semibold text-chocolate mb-2 group-hover:text-coral transition-colors">
                  Jacksonville Vending Machines
                </h3>
                <p className="text-sm text-stone mb-3">
                  Professional vending website serving Jacksonville, FL
                </p>
                <div className="flex items-center text-coral text-sm font-medium">
                  <span>Visit Website</span>
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>

            {/* Portfolio Item - New York City */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 opacity-90"
            >
              <div className="relative aspect-video bg-gray-100 overflow-hidden">
                <Image
                  src="/New York City Vending .png"
                  alt="New York City Vending Machines Website"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-playfair font-semibold text-chocolate mb-2">
                  New York City Vending Machines
                </h3>
                <p className="text-sm text-stone mb-3">
                  Professional vending website serving New York City, NY
                </p>
                <div className="flex items-center text-stone/60 text-sm font-medium">
                  <span>Website Coming Soon</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Intro Paragraph */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-warm-white to-white rounded-xl p-8 border border-gray-200 shadow-sm"
            >
              <p className="text-lg text-stone leading-relaxed">
                We build and host your website—you rent it monthly. Your phone number, email, and contact form are front and center, making it easy for customers to reach you. It's a professional lead-capture site that helps you get more inquiries and grow your vending business.{' '}
                <span className="text-coral font-semibold">No cold calling.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Packages Section */}
      <div id="pricing" className="bg-warm-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold text-charcoal sm:text-4xl mb-3"
            >
              Choose Your Website Plan
            </motion.h2>
            <p className="text-lg text-stone">
              Affordable monthly plans that fit your business needs
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card hover:shadow-lg transition-shadow"
            >
              <div className="text-center">
                <h3 className="text-2xl font-playfair font-bold text-charcoal mb-2">Starter</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-navy">$49</span>
                  <span className="text-stone">/month</span>
                </div>
                <p className="text-stone mb-5 text-sm">Perfect for new operators getting started</p>
                <ul className="space-y-2.5 mb-6 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Multi-page website (3-4 pages)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Contact form & phone display</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Mobile-friendly design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Basic SEO included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Hosting & security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">2 minor updates/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Email support</span>
                  </li>
                </ul>
                <button
                  onClick={() => openCheckoutModal('starter')}
                  className="block w-full text-center bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </button>
              </div>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-lg transition-shadow border-2 border-coral relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-coral text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-playfair font-bold text-charcoal mb-2">Professional</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-navy">$99</span>
                  <span className="text-stone">/month</span>
                </div>
                <p className="text-stone mb-5 text-sm">Best for growing vending businesses</p>
                <ul className="space-y-2.5 mb-6 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Multi-page website (5-7 pages)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Contact form & phone display</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Mobile-friendly & fast loading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Enhanced SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Multiple service areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Hosting & security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">5 minor updates/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Priority email support</span>
                  </li>
                </ul>
                <button
                  onClick={() => openCheckoutModal('professional')}
                  className="block w-full text-center bg-coral hover:bg-coral/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </button>
              </div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card hover:shadow-lg transition-shadow"
            >
              <div className="text-center">
                <h3 className="text-2xl font-playfair font-bold text-charcoal mb-2">Premium</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-navy">$149</span>
                  <span className="text-stone">/month</span>
                </div>
                <p className="text-stone mb-5 text-sm">For established operators with custom needs</p>
                <ul className="space-y-2.5 mb-6 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Multi-page website (8-10 pages)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Contact form & phone display</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Mobile-friendly & fast loading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Advanced SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Custom domain option</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Unlimited service areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Hosting & security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">10 minor updates/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIconSolid className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone text-sm">Priority phone & email support</span>
                  </li>
                </ul>
                <button
                  onClick={() => openCheckoutModal('premium')}
                  className="block w-full text-center bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What This Is */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold text-charcoal sm:text-4xl mb-4"
            >
              What This Is
            </motion.h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: GlobeAltIcon, text: "A done-for-you website we build and host" },
              { icon: PhoneIcon, text: "Your phone/email/contact form displayed" },
              { icon: MapPinIcon, text: "Service area + vending/micro-market offerings" },
              { icon: SparklesIcon, text: "Built to look credible and convert inquiries" },
              { icon: ShieldCheckIcon, text: "Ongoing hosting + maintenance included" }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-coral" />
                    </div>
                    <p className="text-stone leading-relaxed pt-1">{item.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* What This Is Not */}
      <div className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6 text-center">
                What This Is Not
              </h2>
              <div className="bg-warm-white rounded-xl p-8 border border-gray-200">
                <p className="text-stone mb-6 font-semibold text-lg">
                  It's important to understand what this service is not:
                </p>
                <ul className="space-y-4 mb-6">
                  {[
                    "Not a marketplace membership",
                    "Not a guarantee of rankings or leads",
                    "Not machine placement services",
                    "Not revenue-share or commissions (unless we explicitly add later)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-stone text-lg">• {item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white rounded-lg p-4 border-l-4 border-navy">
                  <p className="text-stone">
                    We provide the website and infrastructure; performance can vary by market and competition.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Who It's For */}
      <div className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold text-charcoal sm:text-4xl mb-4"
            >
              Who It's For
            </motion.h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: RocketLaunchIcon, text: "New operators who need credibility fast" },
              { icon: WrenchScrewdriverIcon, text: "Operators who don't want to manage websites/hosting" },
              { icon: MapPinIcon, text: "Operators expanding into new cities/services" },
              { icon: SparklesIcon, text: "Operators who want a clean, professional lead funnel" }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-navy" />
                    </div>
                    <p className="text-stone leading-relaxed pt-1">{item.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* What You Get */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold text-charcoal sm:text-4xl mb-4"
            >
              What You Get
            </motion.h2>
            <p className="text-stone font-semibold text-lg">Deliverables:</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: DocumentTextIcon, text: "A professionally written homepage (or single-page site) focused on conversions" },
              { icon: PhoneIcon, text: "Your contact info prominently displayed" },
              { icon: EnvelopeIcon, text: "Inquiry form routed to your email (and optionally your phone)" },
              { icon: DevicePhoneMobileIcon, text: "Mobile-friendly + fast loading" },
              { icon: MagnifyingGlassIcon, text: "Basic on-page SEO (titles, descriptions)" },
              { icon: WrenchScrewdriverIcon, text: "Ongoing hosting and minor updates (minor updates include small text changes, contact info updates, and basic content adjustments within plan limits)" }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-shrink-0 w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-coral" />
                    </div>
                    <p className="text-stone leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold text-charcoal sm:text-4xl mb-4"
            >
              How It Works
            </motion.h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: "Choose your plan", description: "Select the website rental plan that fits your needs and budget." },
                { step: 2, title: "Send business details", description: "Provide your service area, offerings, phone/email, and logo if available." },
                { step: 3, title: "We publish your website", description: "We build and publish your website under our hosting system." },
                { step: 4, title: "You start receiving inquiries", description: "Once live, customers can find you and contact you through your website." },
                { step: 5, title: "Request minor edits anytime", description: "Request small updates and changes within your plan limits." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-navy text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-charcoal mb-2 text-lg">{item.title}</h3>
                      <p className="text-stone">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold text-charcoal sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-stone">
              Everything you need to know about our website rental service.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-warm-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white transition-colors"
                >
                  <span className="font-semibold text-charcoal pr-4">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-coral flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-white">
                    <p className="text-stone leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-navy to-navy-light py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-playfair font-bold text-white sm:text-4xl mb-4">
              Ready to get your vending website live?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get started with a professional website that helps customers find and contact you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-warm-white transition-colors"
              >
                View Website Plans
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-coral text-white px-8 py-3 rounded-lg font-semibold hover:bg-coral/90 transition-colors"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-warm-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-stone/70 text-center">
              We provide website hosting and lead-capture infrastructure. We do not guarantee a specific number of leads, rankings, or revenue.
            </p>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 transition-opacity"
              onClick={closeModal}
            />
            
            {/* Modal */}
            <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-4 sm:p-6 mx-4">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 z-10"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              {selectedPackage && (
                <>
                  <div className="mb-4 pb-4 border-b border-gray-200 pr-8">
                    <h2 className="text-xl sm:text-2xl font-playfair font-bold text-chocolate mb-1">
                      {getPackageInfo(selectedPackage).name}
                    </h2>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-bold text-navy">
                        ${getPackageInfo(selectedPackage).price}
                      </span>
                      <span className="text-stone text-sm sm:text-base">/month</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone mt-2">
                      {getPackageInfo(selectedPackage).description}
                    </p>
                  </div>
                  <p className="text-sm sm:text-base text-stone mb-6">
                    Please provide your name and email to continue to checkout.
                  </p>
                </>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-medium text-chocolate mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-sm font-medium text-chocolate mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-full sm:flex-1 px-4 py-2.5 border-2 border-gray-300 text-chocolate rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 px-4 py-2.5 bg-navy hover:bg-navy-light text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmitting ? 'Processing...' : 'Continue to Checkout'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
