'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import Link from 'next/link'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { trackFormSubmission, trackContactRequest } from '@/lib/conversion-tracking'

// Extract city and state from slug (e.g., "dallas-texas" -> "Dallas, Texas")
function parseLocationSlug(slug: string): { city: string; state: string; cityDisplay: string; stateDisplay: string } {
  const parts = slug.split('-')
  if (parts.length < 2) {
    return { city: slug, state: '', cityDisplay: slug, stateDisplay: '' }
  }
  
  const statePart = parts[parts.length - 1]
  const cityParts = parts.slice(0, -1)
  
  // Convert state slug to display name
  const stateMap: { [key: string]: string } = {
    'alabama': 'Alabama', 'alaska': 'Alaska', 'arizona': 'Arizona', 'arkansas': 'Arkansas',
    'california': 'California', 'colorado': 'Colorado', 'connecticut': 'Connecticut', 'delaware': 'Delaware',
    'florida': 'Florida', 'georgia': 'Georgia', 'hawaii': 'Hawaii', 'idaho': 'Idaho',
    'illinois': 'Illinois', 'indiana': 'Indiana', 'iowa': 'Iowa', 'kansas': 'Kansas',
    'kentucky': 'Kentucky', 'louisiana': 'Louisiana', 'maine': 'Maine', 'maryland': 'Maryland',
    'massachusetts': 'Massachusetts', 'michigan': 'Michigan', 'minnesota': 'Minnesota', 'mississippi': 'Mississippi',
    'missouri': 'Missouri', 'montana': 'Montana', 'nebraska': 'Nebraska', 'nevada': 'Nevada',
    'new-hampshire': 'New Hampshire', 'new-jersey': 'New Jersey', 'new-mexico': 'New Mexico', 'new-york': 'New York',
    'north-carolina': 'North Carolina', 'north-dakota': 'North Dakota', 'ohio': 'Ohio', 'oklahoma': 'Oklahoma',
    'oregon': 'Oregon', 'pennsylvania': 'Pennsylvania', 'rhode-island': 'Rhode Island', 'south-carolina': 'South Carolina',
    'south-dakota': 'South Dakota', 'tennessee': 'Tennessee', 'texas': 'Texas', 'utah': 'Utah',
    'vermont': 'Vermont', 'virginia': 'Virginia', 'washington': 'Washington', 'west-virginia': 'West Virginia',
    'wisconsin': 'Wisconsin', 'wyoming': 'Wyoming', 'washington-dc': 'Washington DC'
  }
  
  const stateDisplay = stateMap[statePart] || statePart
  const cityDisplay = cityParts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
  
  return {
    city: cityParts.join('-'),
    state: statePart,
    cityDisplay,
    stateDisplay
  }
}

// Generate location-specific description
function generateLocationDescription(city: string, state: string): string {
  const cityLower = city.toLowerCase()
  const stateLower = state.toLowerCase()
  
  const isMajorCity = ['new york', 'los angeles', 'chicago', 'houston', 'phoenix', 'philadelphia', 'san antonio', 'san diego', 'dallas', 'san jose'].some(major => cityLower.includes(major))
  const isCoastal = ['miami', 'san diego', 'seattle', 'portland', 'boston', 'san francisco', 'tampa', 'jacksonville', 'virginia beach'].some(coastal => cityLower.includes(coastal))
  const isTechHub = ['san jose', 'seattle', 'austin', 'boston', 'denver', 'raleigh'].some(tech => cityLower.includes(tech))
  
  if (isMajorCity) {
    return `${city} is a major metropolitan area in ${state} with a thriving business ecosystem perfect for vending machine placement. The city's diverse economy, high foot traffic locations, and growing commercial sector create excellent opportunities for vending operators.`
  } else if (isCoastal) {
    return `${city}, ${state} offers unique vending opportunities with its coastal location attracting both residents and tourists. The city's vibrant business community and high-traffic areas provide ideal locations for vending machines.`
  } else if (isTechHub) {
    return `${city} is a growing tech hub in ${state} with expanding business districts and increasing commercial activity. The city's professional workforce and modern office spaces create strong demand for convenient vending solutions.`
  } else {
    return `${city}, ${state} presents excellent vending machine opportunities with its growing business community and strategic location. The city offers diverse placement options across retail, office, and commercial spaces.`
  }
}

const stats = [
  { id: 1, name: 'Locations Found', value: '500K', suffix: '+' },
  { id: 2, name: 'Deals Closed', value: '15K', suffix: '+' },
  { id: 3, name: 'Rating', value: '4.9', suffix: '★' },
]

const trustSignals = [
  { icon: CheckBadgeIcon, text: 'Verified Locations', color: 'text-green-600' },
  { icon: StarIcon, text: '4.9/5 Rating', color: 'text-yellow-500' },
  { icon: ShieldCheckIcon, text: 'Secure & Reliable', color: 'text-blue-600' },
  { icon: ClockIcon, text: 'Quality Research', color: 'text-purple-600' },
]

export default function LocationPageClient({ citySlug }: { citySlug: string }) {
  const { city, state, cityDisplay, stateDisplay } = parseLocationSlug(citySlug)
  const locationDescription = generateLocationDescription(cityDisplay, stateDisplay)
  
  const [counts, setCounts] = useState([0, 0, 0])
  const [activeUsers, setActiveUsers] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    location: `${cityDisplay}, ${stateDisplay}`,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const targetCounts = [500, 15, 4.9]
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const timer = setInterval(() => {
      setCounts(prev => prev.map((count, index) => {
        const target = targetCounts[index]
        const increment = target / steps
        if (count < target) {
          return Math.min(count + increment, target)
        }
        return target
      }))
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 12
      const fluctuation = Math.floor(Math.random() * 8) + 1
      setActiveUsers(baseUsers + fluctuation)
    }

    const interval = setInterval(() => {
      updateActiveUsers()
    }, Math.random() * 4000 + 3000)

    updateActiveUsers()

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/xdkgqele', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'location_submission',
          page: `/location/${citySlug}`,
        }),
      })
      
      if (response.ok) {
        trackFormSubmission('location', `/location/${citySlug}`)
        trackContactRequest('form', `/location/${citySlug}`)
        
        try {
          await fetch('/api/forms', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              page: `/location/${citySlug}`,
              formType: 'location_submission',
              customerName: formData.name,
              customerEmail: formData.email,
              customerPhone: formData.phone,
              customerCompany: formData.company,
              notes: `Location: ${formData.location}\n\nMessage: ${formData.message}`
            }),
          })
        } catch (apiError) {
          console.log('Forms API submission failed (non-critical):', apiError)
        }
        
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          location: `${cityDisplay}, ${stateDisplay}`,
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-warm-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight"
            >
              Vending Locations in {cityDisplay}, {stateDisplay}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0"
            >
              {locationDescription}
            </motion.p>

            {/* Active Users Counter */}
            <div className="mt-6 sm:mt-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-chocolate">
                  <span className="font-bold text-coral">{activeUsers}</span> people are viewing leads right now
                </span>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
              {trustSignals.map((signal, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <signal.icon className={`h-5 w-5 ${signal.color}`} />
                    <span className="text-sm font-medium text-chocolate">{signal.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                href={`/vending-leads/${citySlug}`}
                className="w-full sm:w-auto bg-transparent text-chocolate border-2 border-chocolate px-8 py-3 rounded-lg font-semibold hover:bg-chocolate hover:text-white transition-colors"
              >
                View {cityDisplay} Leads →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id}>
                <div className="text-3xl sm:text-4xl font-bold text-bronze">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm sm:text-base text-chocolate/70 mt-2">
                  {stat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Description Section */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold text-chocolate sm:text-4xl"
            >
              Why {cityDisplay}, {stateDisplay}?
            </motion.h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-md"
            >
              <div className="flex items-start gap-4 mb-6">
                <MapPinIcon className="h-8 w-8 text-coral flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-chocolate mb-3">
                    Vending Opportunities in {cityDisplay}
                  </h3>
                  <p className="text-chocolate/70 leading-relaxed mb-4">
                    {locationDescription} Our comprehensive location research service helps vending operators identify the best placement opportunities in {cityDisplay}, connecting you with businesses that are actively seeking vending solutions.
                  </p>
                  <p className="text-chocolate/70 leading-relaxed">
                    Whether you're looking for office buildings, retail spaces, healthcare facilities, or educational institutions, we provide verified leads with detailed contact information and business insights to help you make informed placement decisions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-chocolate sm:text-4xl">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-stone/70">
              Choose the plan that works best for your vending business
            </p>
          </div>
          <PricingTable />
        </div>
      </div>

      {/* Submission Form Section */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold text-chocolate sm:text-4xl"
            >
              Request Location Information
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-lg text-stone/70"
            >
              Get detailed information about vending opportunities in {cityDisplay}, {stateDisplay}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-md"
          >
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">Thank you! Your request has been submitted successfully. We'll get back to you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">There was an error submitting your request. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-chocolate mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-chocolate mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-chocolate mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-chocolate mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-chocolate mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral bg-gray-50"
                  readOnly
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-chocolate mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                  placeholder="Tell us about your vending location needs in this area..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

