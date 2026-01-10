'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { 
  UserIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  BuildingOffice2Icon, 
  MapPinIcon,
  CheckCircleIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  LinkIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export default function VendingCompaniesContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    serviceArea: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formDataObj = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mgoowkpg', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setShowSuccessModal(true)
        form.reset()
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          serviceArea: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const closeModal = () => {
    setShowSuccessModal(false)
  }

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section with Quick Form */}
      <div className="bg-gradient-to-br from-navy/5 via-cream to-coral/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl font-playfair font-bold tracking-tight text-charcoal mb-4"
              >
                Get Your Vending Company<br />
                <span className="text-navy">Featured on Our Directory</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-stone mb-6"
              >
                Increase your visibility, improve SEO rankings, and reach more businesses looking for vending services.
              </motion.p>
            </div>

            {/* Right Side - Quick Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-navy/10"
            >
              <h2 className="text-xl font-playfair font-bold text-charcoal mb-4 text-center">
                Quick Request Form
              </h2>
              
              {showSuccessModal && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-green-900 mb-1">Thank You!</p>
                      <p className="text-xs text-green-800">
                        We'll contact you soon about featuring your company.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="mt-2 text-green-700 hover:text-green-900 font-medium text-xs"
                  >
                    Close
                  </button>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy transition-all text-sm"
                    placeholder="Your Name *"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy transition-all text-sm"
                    placeholder="Email Address *"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy transition-all text-sm"
                    placeholder="Phone Number *"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy transition-all text-sm"
                    placeholder="Company Name *"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy hover:bg-navy-light text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Featured'}
                </button>

                <p className="text-xs text-stone text-center">
                  We'll contact you within 24 hours
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">
              Benefits of Listing with Us
            </h2>
            <p className="text-lg text-stone max-w-3xl mx-auto">
              Get your vending company in front of businesses actively searching for vending services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-cream rounded-xl p-6 border border-navy/10"
            >
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                <EyeIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">
                Increased Visibility
              </h3>
              <p className="text-stone">
                Get discovered by businesses actively searching for vending services in your area. Our directory is visited by thousands of potential customers monthly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-cream rounded-xl p-6 border border-navy/10"
            >
              <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center mb-4">
                <MagnifyingGlassIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">
                SEO & Google Rankings
              </h3>
              <p className="text-stone">
                Improve your search engine visibility. Our directory pages rank highly on Google, giving your company valuable backlinks and local SEO benefits that help you appear in search results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-cream rounded-xl p-6 border border-navy/10"
            >
              <div className="w-12 h-12 bg-bronze rounded-lg flex items-center justify-center mb-4">
                <ChartBarIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">
                Targeted Leads
              </h3>
              <p className="text-stone">
                Reach businesses specifically looking for vending services. Our visitors are qualified leads ready to make decisions about vending machine placement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-cream rounded-xl p-6 border border-navy/10"
            >
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                <LinkIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">
                Quality Backlinks
              </h3>
              <p className="text-stone">
                Get valuable backlinks from our high-authority directory. These links help improve your website's domain authority and search engine rankings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-cream rounded-xl p-6 border border-navy/10"
            >
              <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center mb-4">
                <StarIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">
                Credibility & Trust
              </h3>
              <p className="text-stone">
                Being featured on a reputable directory builds trust with potential customers. Showcase your services, ratings, and credentials in a professional format.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-cream rounded-xl p-6 border border-navy/10"
            >
              <div className="w-12 h-12 bg-bronze rounded-lg flex items-center justify-center mb-4">
                <BuildingOffice2Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">
                Local Market Presence
              </h3>
              <p className="text-stone">
                Establish your presence in local markets. Our city-specific pages help businesses in your area find you when searching for vending services.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 sm:p-10 border border-navy/10 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-6 text-center">
              Request to Be Featured
            </h2>

            {showSuccessModal && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-6 bg-green-50 border border-green-200 rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-1">
                      Thank You!
                    </h3>
                    <p className="text-green-800">
                      We've received your request. Our team will review your information and contact you soon about featuring your company on our directory.
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="mt-4 text-green-700 hover:text-green-900 font-medium text-sm"
                >
                  Close
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                  Your Name *
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-1.5">
                  Company Name *
                </label>
                <div className="relative">
                  <BuildingOffice2Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy transition-all"
                    placeholder="Your Vending Company"
                  />
                </div>
              </div>

              {/* Website */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-charcoal mb-1.5">
                  Website URL *
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                  <input
                    type="url"
                    id="website"
                    name="website"
                    required
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy transition-all"
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </div>

              {/* Service Area */}
              <div>
                <label htmlFor="serviceArea" className="block text-sm font-medium text-charcoal mb-1.5">
                  Service Area / Cities *
                </label>
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                  <input
                    type="text"
                    id="serviceArea"
                    name="serviceArea"
                    required
                    value={formData.serviceArea}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy transition-all"
                    placeholder="Jacksonville, Orlando, Miami, etc."
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy transition-all"
                  placeholder="Tell us about your company, services, or any specific information you'd like to include..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy hover:bg-navy-light text-white py-3.5 px-6 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Request to Be Featured'}
              </button>

              <p className="text-xs text-stone text-center mt-3">
                By submitting, you agree to be contacted about listing your company on our directory.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
