'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

const industries = [
  {
    name: 'Warehouses',
    description: 'Large distribution centers and storage facilities with high employee counts',
    metrics: '500+ locations found',
    icon: '🏭',
  },
  {
    name: 'Office Buildings',
    description: 'Corporate offices, business parks, and professional complexes',
    metrics: '1,200+ locations found',
    icon: '🏢',
  },
  {
    name: 'Schools & Universities',
    description: 'Educational institutions with consistent student and staff populations',
    metrics: '800+ locations found',
    icon: '🎓',
  },
  {
    name: 'Hospitals & Medical',
    description: 'Healthcare facilities with 24/7 operations and high foot traffic',
    metrics: '400+ locations found',
    icon: '🏥',
  },
  {
    name: 'Gyms & Fitness',
    description: 'Fitness centers and health clubs with active memberships',
    metrics: '600+ locations found',
    icon: '💪',
  },
  {
    name: 'Car Dealerships',
    description: 'Automotive sales and service centers with customer waiting areas',
    metrics: '300+ locations found',
    icon: '🚗',
  },
]

const services = [
  {
    title: 'Location Research',
    description: 'Comprehensive research to identify qualified vending machine locations in your target area.',
    features: [
      'Demographic analysis',
      'Foot traffic assessment',
      'Competition research',
      'Contact information verification',
    ],
  },
  {
    title: 'Lead Qualification',
    description: 'Pre-screened leads with verified contact information and decision-maker details.',
    features: [
      'Decision-maker identification',
      'Contact information verification',
      'Business hours confirmation',
      'Vending machine policies',
    ],
  },
  {
    title: 'Market Analysis',
    description: 'Detailed market research to understand local vending opportunities and challenges.',
    features: [
      'Local market trends',
      'Competition analysis',
      'Pricing insights',
      'Growth opportunities',
    ],
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-playfair font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Vending Location Research Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-stone"
            >
              Professional research services to help you find the best vending machine locations. 
              Get qualified leads and market insights to grow your vending business.
            </motion.p>
            
                         {/* Internal Links Section */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="mt-8 flex flex-wrap justify-center gap-4"
             >
               <Link
                 href="/vending-leads"
                 className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
               >
                 View All States
               </Link>
               <Link
                 href="/blog"
                 className="inline-flex items-center gap-2 bg-coral hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
               >
                 Read Our Blog
               </Link>
               <Link
                 href="/pricing"
                 className="inline-flex items-center gap-2 bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
               >
                 View Pricing
               </Link>
             </motion.div>
             
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="mt-6 text-lg leading-8 text-stone"
             >
               We specialize in finding qualified vending machine locations across all industries. 
               Our research-driven approach ensures you get the best opportunities for your vending business.
             </motion.p>
          </div>
        </div>
      </div>

      {/* Industry Breakdown */}
      <div className="bg-warm-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-stone"
            >
              From warehouses to hospitals, we've found qualified locations across diverse industries.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {industries.map((industry) => (
              <div key={industry.name} className="card">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-playfair font-semibold leading-8 text-charcoal">
                  {industry.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-stone">
                  {industry.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-bronze">
                  {industry.metrics}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-stone"
            >
              Comprehensive vending location research and lead generation services.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {services.map((service) => (
              <div key={service.title} className="card">
                <h3 className="text-lg font-playfair font-semibold leading-8 text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-stone">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-stone">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <div className="h-2 w-2 rounded-full bg-bronze mt-2 flex-none" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-warm-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Ready to Find Your Next Vending Location?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-stone"
            >
              Get started with our location research services today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <a
                href="/hot-leads"
                className="btn-primary"
              >
                Get Hot Leads
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </main>
  )
}
