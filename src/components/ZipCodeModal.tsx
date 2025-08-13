'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, MapPinIcon, EnvelopeIcon, CreditCardIcon } from '@heroicons/react/24/outline'

interface Package {
  name: string
  price: string
  description: string
  location: string
  href: string
  type: 'subscription' | 'one-time'
}

interface ZipCodeModalProps {
  isOpen: boolean
  onClose: () => void
  package: Package | null
}

export default function ZipCodeModal({ isOpen, onClose, package: selectedPackage }: ZipCodeModalProps) {
  const [zipCode, setZipCode] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ zipCode?: string; email?: string }>({})

  const validateForm = () => {
    const newErrors: { zipCode?: string; email?: string } = {}
    
    if (!zipCode.trim()) {
      newErrors.zipCode = 'Zip code is required'
    } else if (!/^\d{5}(-\d{4})?$/.test(zipCode.trim())) {
      newErrors.zipCode = 'Please enter a valid zip code'
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm() || !selectedPackage) return
    
    setIsSubmitting(true)
    
    try {
      // Submit to Formspree with package details
      const response = await fetch('https://formspree.io/f/xdkgqele', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          zipCode: zipCode.trim(),
          email: email.trim(),
          packageName: selectedPackage.name,
          packagePrice: selectedPackage.price,
          packageType: selectedPackage.type,
          packageDescription: selectedPackage.description,
          packageLocation: selectedPackage.location,
          source: 'Package Purchase Modal',
          timestamp: new Date().toISOString(),
        }),
      })
      
      if (response.ok) {
        // Reset form
        setZipCode('')
        setEmail('')
        setErrors({})
        
        // Redirect to Stripe checkout
        window.location.href = selectedPackage.href
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ email: 'Failed to submit. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      onClose()
    }
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!selectedPackage) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-navy px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-playfair font-bold text-white">
                    Complete Your Purchase
                  </h2>
                  <button
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="text-white/80 hover:text-white transition-colors disabled:opacity-50"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-white/90 text-sm mt-1">
                  Enter your details to get started with {selectedPackage.name}
                </p>
              </div>

              {/* Package Summary */}
              <div className="bg-warm-white px-6 py-4 border-b border-stone/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-charcoal">{selectedPackage.name}</h3>
                    <p className="text-sm text-stone">{selectedPackage.description}</p>
                    <p className="text-sm font-medium text-navy mt-1">{selectedPackage.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-bronze">{selectedPackage.price}</div>
                    <div className="text-xs text-stone/70">
                      {selectedPackage.type === 'subscription' ? '/month' : 'one-time'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Zip Code Input */}
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-charcoal mb-2">
                    Your Zip Code *
                  </label>
                  <div className="relative">
                    <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone" />
                    <input
                      type="text"
                      id="zipCode"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="Enter zip code"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy transition-colors ${
                        errors.zipCode ? 'border-red-300' : 'border-stone/30'
                      }`}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.zipCode && (
                    <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy transition-colors ${
                        errors.email ? 'border-red-300' : 'border-stone/30'
                      }`}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Benefits */}
                <div className="bg-warm-white rounded-lg p-4">
                  <h3 className="font-semibold text-charcoal mb-2">What happens next:</h3>
                  <ul className="text-sm text-stone space-y-1">
                    <li>• We'll collect your information securely</li>
                    <li>• Redirect you to secure Stripe checkout</li>
                    <li>• Process your payment for {selectedPackage.name}</li>
                    <li>• Send confirmation and next steps to your email</li>
                  </ul>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy text-white py-3 px-6 rounded-lg font-semibold hover:bg-navy-light transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCardIcon className="h-5 w-5" />
                      Continue to Checkout
                    </>
                  )}
                </button>

                {/* Privacy Notice */}
                <p className="text-xs text-stone/70 text-center">
                  By continuing, you agree to our terms and will be redirected to secure Stripe checkout. 
                  Your information is protected and will only be used for order processing.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
