'use client'

import StructuredData from './StructuredData'
import { generateServiceSchema, generateFAQPageSchema, generateBreadcrumbListSchema, generateLocalBusinessSchema } from '@/lib/structured-data'
import { generateCityBreadcrumbs } from '@/lib/statePageUtils'

interface CityPageSEOProps {
  city: string
  state: string
  stateAbbr: string
  description: string
  faqs?: Array<{ question: string; answer: string }>
  latitude?: number
  longitude?: number
}

/**
 * Comprehensive SEO component for city pages
 * Adds structured data without changing UI
 */
export default function CityPageSEO({
  city,
  state,
  stateAbbr,
  description,
  faqs = [],
  latitude,
  longitude
}: CityPageSEOProps) {
  const cityState = `${city}, ${stateAbbr}`
  
  // Generate breadcrumb schema
  const breadcrumbs = generateCityBreadcrumbs(city, state)
  const currentPageUrl = `https://www.thevendinglocator.com/vending-leads/${city.toLowerCase().replace(/\s+/g, '-')}-${state.toLowerCase().replace(/\s+/g, '-')}`
  const breadcrumbItems = breadcrumbs.map((b, index) => ({
    name: b.name,
    url: b.current ? currentPageUrl : `https://www.thevendinglocator.com${b.href}`
  }))

  // Generate all schemas
  const schemas = [
    generateServiceSchema({
      city,
      state,
      stateAbbr,
      description
    }),
    generateLocalBusinessSchema({
      city,
      state,
      stateAbbr,
      description,
      latitude,
      longitude
    }),
    generateBreadcrumbListSchema(breadcrumbItems)
  ]

  // Add FAQ schema if FAQs exist
  if (faqs.length > 0) {
    schemas.push(generateFAQPageSchema(faqs))
  }

  return <StructuredData data={schemas} />
}
