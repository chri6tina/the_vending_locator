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
  UsersIcon, 
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function VendingServicesContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    zipcode: '',
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
      const response = await fetch('https://formspree.io/f/xjkpkrak', {
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
          employees: '',
          zipcode: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-navy/5 via-cream to-coral/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-playfair font-bold tracking-tight text-charcoal mb-4"
            >
              Get Vending Machines for<br />
              <span className="text-navy">Your Business</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-stone max-w-2xl mx-auto"
            >
              Connect with professional vending operators who will install, stock, and maintain machines at no cost to your business.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-cream rounded-2xl p-8 sm:p-10 border border-navy/10 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-6 text-center">
              Request Free Vending Machine Placement
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
                      We've received your request. A vending operator will contact you soon to discuss free machine placement for your business.
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
                    placeholder="Your Company Name"
                  />
                </div>
              </div>

              {/* Employees */}
              <div>
                <label htmlFor="employees" className="block text-sm font-medium text-charcoal mb-1.5">
                  Number of Employees *
                </label>
                <div className="relative">
                  <UsersIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                  <select
                    id="employees"
                    name="employees"
                    required
                    value={formData.employees}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy transition-all appearance-none bg-white"
                  >
                    <option value="">Select range...</option>
                    <option value="1-25">1-25 employees</option>
                    <option value="26-50">26-50 employees</option>
                    <option value="51-100">51-100 employees</option>
                    <option value="101-250">101-250 employees</option>
                    <option value="251-500">251-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
              </div>

              {/* Zip Code */}
              <div>
                <label htmlFor="zipcode" className="block text-sm font-medium text-charcoal mb-1.5">
                  Zip Code *
                </label>
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    required
                    pattern="[0-9]{5}"
                    maxLength={5}
                    value={formData.zipcode}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-stone/30 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy transition-all"
                    placeholder="12345"
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
                  placeholder="Tell us about your business or any specific vending needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy hover:bg-navy-light text-white py-3.5 px-6 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Vending Machines'}
              </button>

              <p className="text-xs text-stone text-center mt-3">
                By submitting, you agree to be contacted by vending service providers in your area.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">
              Why Get Vending Machines?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              <BuildingOffice2Icon className="h-10 w-10 text-navy mb-4" />
              <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">No Upfront Costs</h3>
              <p className="text-stone">
                Vending operators install, stock, and maintain machines at no cost to your business. They handle everything.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              <CheckCircleIcon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">Employee Convenience</h3>
              <p className="text-stone">
                Keep your staff happy with 24/7 access to snacks, drinks, and healthy options right in your building.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              <MapPinIcon className="h-10 w-10 text-bronze mb-4" />
              <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">Local Providers</h3>
              <p className="text-stone">
                Connect with vetted, local vending operators who know your area and can provide responsive service.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
