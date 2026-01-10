'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface LeadCaptureFormProps {
  title?: string
  description?: string
  source?: string
  onSuccess?: () => void
  showCityState?: boolean
  className?: string
}

export default function LeadCaptureForm({
  title = "Get Notified About New Leads",
  description = "Enter your email and location to be notified when new vending machine locations become available in your area.",
  source = 'unknown',
  onSuccess,
  showCityState = true,
  className = ''
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('idle')
    setErrorMessage('')
    
    if (!email) {
      setErrorMessage('Email is required')
      setSubmitStatus('error')
      return
    }

    if (showCityState && (!city || !state)) {
      setErrorMessage('City and state are required')
      setSubmitStatus('error')
      return
    }

    if (!consent) {
      setErrorMessage('Please agree to receive notifications')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/visitors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          city: city.trim() || null,
          state: state.trim() || null,
          source: source,
          consent: consent
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setEmail('')
        setCity('')
        setState('')
        setConsent(false)
        
        if (onSuccess) {
          setTimeout(() => {
            onSuccess()
          }, 2000)
        }
      } else {
        setErrorMessage(data.error || 'Failed to submit. Please try again.')
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Lead capture error:', error)
      setErrorMessage('Network error. Please try again.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-playfair font-bold text-charcoal mb-2">
          {title}
        </h3>
        <p className="text-stone text-sm sm:text-base">
          {description}
        </p>
      </div>

      {submitStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircleIcon className="h-8 w-8 text-green-600" />
          </div>
          <h4 className="text-lg font-semibold text-charcoal mb-2">Success!</h4>
          <p className="text-stone">
            We'll notify you when new leads become available in your area.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="lead-email" className="block text-sm font-medium text-charcoal mb-2">
              Email Address *
            </label>
            <div className="relative">
              <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone" />
              <input
                type="email"
                id="lead-email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* City and State */}
          {showCityState && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="lead-city" className="block text-sm font-medium text-charcoal mb-2">
                  City *
                </label>
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone" />
                  <input
                    type="text"
                    id="lead-city"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                    placeholder="Your city"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lead-state" className="block text-sm font-medium text-charcoal mb-2">
                  State *
                </label>
                <select
                  id="lead-state"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                >
                  <option value="">Select State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
            </div>
          )}

          {/* Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 text-coral focus:ring-coral border-gray-300 rounded"
              />
              <span className="text-sm text-stone">
                I agree to receive notifications about new vending machine location leads in my area. 
                You can unsubscribe at any time.
              </span>
            </label>
          </div>

          {/* Error Message */}
          {submitStatus === 'error' && errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{errorMessage}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-coral hover:bg-coral/90 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Get Notified'}
          </button>
        </form>
      )}
    </div>
  )
}
