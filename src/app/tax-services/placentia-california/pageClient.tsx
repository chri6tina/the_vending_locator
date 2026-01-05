'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPinIcon, BuildingOffice2Icon, CheckCircleIcon, UserIcon, PhoneIcon, EnvelopeIcon, UsersIcon, ClockIcon, ShieldCheckIcon, CalculatorIcon, DocumentTextIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function PlacentiaFloridaTaxServicesPage() {
  const cityDisplayName = 'Placentia';
  const stateDisplayName = 'Florida'
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // City pages don't show sub-cities
  const subCities: { name: string; slug: string }[] = []

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Add state information to form submission
    formData.append('state', stateDisplayName)
    formData.append('city', cityDisplayName)
    formData.append('service_type', 'tax_bookkeeping')

    try {
      const response = await fetch('https://formspree.io/f/xjgkdgpo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setFormSubmitted(true)
        setShowSuccessModal(true)
        form.reset()
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setShowSuccessModal(false)
  }

  // FAQ items for JSON-LD
    const faqItems = [
    {
      q: "Why do vending machine owners in Placentia need specialized tax help?",
      a: "Vending machine businesses in Placentia have unique tax considerations including equipment depreciation, route expenses, location fees across San Mateo County, product inventory, multi-location operations, and California-specific tax requirements. Specialized tax professionals understand these nuances and can help maximize deductions while ensuring compliance with state and federal regulations."
    },
    {
      q: "What tax deductions are available for vending machine businesses in Placentia?",
      a: "Placentia vending businesses can deduct equipment depreciation, vehicle expenses for route operations, product inventory costs, location fees throughout the Placentia area, maintenance and repairs, insurance, business licenses, professional fees, home office expenses if applicable, and mileage for servicing machines across Placentia's business districts and surrounding areas."
    },
    {
      q: "How much do tax and bookkeeping services cost for vending businesses in Placentia?",
      a: "Costs vary based on the size of your Placentia vending business, number of locations, machines operated, and services needed. Most professionals offer free consultations to discuss your needs. Monthly bookkeeping typically ranges from $200-$1,000+ depending on complexity, while tax preparation for vending businesses in Placentia generally costs $500-$3,000+ annually."
    },
    {
      q: "What bookkeeping services do Placentia vending businesses need?",
      a: "Placentia vending businesses benefit from monthly bookkeeping that tracks revenue by location throughout the city, product costs, route expenses across San Mateo County, equipment maintenance, location fees, profitability analysis by machine or location, and preparation of financial statements. This helps owners make informed business decisions and simplifies tax preparation."
    },
    {
      q: "When should Placentia vending business owners contact a tax professional?",
      a: "It's best to connect with a tax professional year-round, not just during tax season. Early engagement allows for tax planning, quarterly estimate optimization, business structure review for California requirements, and proactive financial management that can save money throughout the year. Placentia tax professionals can help plan for busy seasons and seasonal fluctuations in the Northern California market."
    },
    {
      q: "Do Placentia tax professionals understand vending machine business operations?",
      a: "Yes, qualified tax and bookkeeping professionals specializing in vending businesses understand route operations, cash handling, inventory management, equipment depreciation schedules, location agreements, seasonal revenue patterns, and the unique challenges of operating multiple machines across Placentia's diverse neighborhoods and business districts."
    },
    {
      q: "What business records should Placentia vending owners bring to tax consultations?",
      a: "Bring previous tax returns, financial statements, bank statements, expense receipts for route operations and equipment, equipment purchase records, location agreements throughout Placentia, vehicle mileage logs, inventory records, and any questions about your business structure or operations. The more information you provide, the better the professional can assist you."
    },
    {
      q: "Are there California-specific tax considerations for Placentia vending businesses?",
      a: "Yes, Placentia vending businesses must consider California sales tax on vending machine sales, state income tax, franchise tax board requirements, business licenses in San Mateo County, and potential property tax on equipment. A qualified tax professional can ensure compliance with all California and Placentia-specific tax requirements."
    },
    {
      q: "How can bookkeeping help Placentia vending businesses grow?",
      a: "Professional bookkeeping provides accurate financial insights that help Placentia vending owners identify most profitable locations, optimize route efficiency, manage cash flow during slow seasons, make informed equipment purchase decisions, negotiate better location agreements, and plan for expansion throughout the Northern California region."
    },
    {
      q: "What's the typical turnaround time for tax preparation for Placentia vending businesses?",
      a: "Turnaround time varies by complexity, but most tax professionals can complete returns for Placentia vending businesses within 2-4 weeks after receiving all necessary documents. Starting early in tax season and maintaining organized records throughout the year helps expedite the process and allows time for tax planning strategies specific to California requirements."
    }
  ]

<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map(i => ({
              '@type': 'Question',
              name: i.q,
              acceptedAnswer: { '@type': 'Answer', text: i.a }
            }))
          })
        }}
      />
    </>
  )
}

