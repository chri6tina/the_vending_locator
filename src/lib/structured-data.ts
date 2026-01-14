// Structured Data (JSON-LD) generators for SEO

export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  logo?: string
  description?: string
  contactPoint?: {
    '@type': string
    telephone?: string
    contactType: string
    email?: string
    areaServed?: string
    availableLanguage?: string[]
  }
  sameAs?: string[]
  aggregateRating?: {
    '@type': string
    ratingValue: string
    reviewCount: string
  }
}

export interface BreadcrumbListSchema {
  '@context': string
  '@type': string
  itemListElement: Array<{
    '@type': string
    position: number
    name: string
    item: string
  }>
}

export interface FAQPageSchema {
  '@context': string
  '@type': string
  mainEntity: Array<{
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }>
}

export interface ServiceSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  provider: {
    '@type': string
    name: string
    url: string
  }
  areaServed?: {
    '@type': string
    name?: string
    addressRegion?: string
    addressCountry?: string
  }
  serviceType?: string
  category?: string
  offers?: {
    '@type': string
    description?: string
    availability?: string
  }
  aggregateRating?: {
    '@type': string
    ratingValue: string
    reviewCount: string
  }
}

export interface ArticleSchema {
  '@context': string
  '@type': string
  headline: string
  description: string
  image?: string[]
  datePublished?: string
  dateModified?: string
  author: {
    '@type': string
    name: string
  }
  publisher: {
    '@type': string
    name: string
    logo: {
      '@type': string
      url: string
    }
  }
}

export interface ProductSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  brand: {
    '@type': string
    name: string
  }
  offers: {
    '@type': string
    priceCurrency: string
    price: string
    availability: string
    url: string
  }
}

export interface LocalBusinessSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  telephone?: string
  address?: {
    '@type': string
    addressCountry: string
  }
  geo?: {
    '@type': string
    latitude: number
    longitude: number
  }
  areaServed?: {
    '@type': string
    name: string
    addressRegion: string
    addressCountry: string
  }
}

/**
 * Generate Organization schema for The Vending Locator
 */
export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Vending Locator',
    url: 'https://www.thevendinglocator.com',
    logo: 'https://www.thevendinglocator.com/logo.png',
    description: 'The Vending Locator provides verified vending machine leads and locations across all 50 states. Expert guidance for vending machine operators and entrepreneurs.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@thevendinglocator.com',
      areaServed: 'US',
      availableLanguage: ['English']
    },
    sameAs: [
      'https://www.facebook.com/thevendinglocator',
      'https://www.linkedin.com/company/thevendinglocator'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150'
    }
  }
}

/**
 * Generate BreadcrumbList schema from breadcrumb items
 */
export function generateBreadcrumbListSchema(
  items: Array<{ name: string; url: string }>
): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

/**
 * Generate FAQPage schema from FAQ items
 */
export function generateFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

/**
 * Generate Service schema for city pages
 */
export function generateServiceSchema(params: {
  city: string
  state: string
  stateAbbr: string
  description: string
}): ServiceSchema {
  const cityState = `${params.city}, ${params.stateAbbr}`
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Vending Machine Leads in ${cityState}`,
    description: params.description,
    provider: {
      '@type': 'Organization',
      name: 'The Vending Locator',
      url: 'https://www.thevendinglocator.com'
    },
    areaServed: {
      '@type': 'City',
      name: params.city,
      addressRegion: params.stateAbbr,
      addressCountry: 'US'
    },
    serviceType: 'Vending Machine Location Leads',
    category: 'Business Services',
    offers: {
      '@type': 'Offer',
      description: `Access to qualified vending machine locations in ${cityState}`,
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150'
    }
  }
}

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema(params: {
  headline: string
  description: string
  image?: string
  datePublished?: string
  dateModified?: string
  authorName?: string
}): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.headline,
    description: params.description,
    image: params.image ? [params.image] : undefined,
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: {
      '@type': 'Person',
      name: params.authorName || 'The Vending Locator'
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Vending Locator',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.thevendinglocator.com/logo.png'
      }
    }
  }
}

/**
 * Generate Product schema for pricing plans
 */
export function generateProductSchema(params: {
  name: string
  description: string
  price: string
  currency?: string
  url: string
}): ProductSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: params.name,
    description: params.description,
    brand: {
      '@type': 'Brand',
      name: 'The Vending Locator'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: params.currency || 'USD',
      price: params.price,
      availability: 'https://schema.org/InStock',
      url: params.url
    }
  }
}

/**
 * Generate LocalBusiness schema for city-specific pages
 */
export function generateLocalBusinessSchema(params: {
  city: string
  state: string
  stateAbbr: string
  description: string
  latitude?: number
  longitude?: number
}): LocalBusinessSchema {
  const cityState = `${params.city}, ${params.stateAbbr}`
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `The Vending Locator - ${cityState}`,
    description: params.description,
    url: `https://www.thevendinglocator.com/vending-leads/${params.city.toLowerCase().replace(/\s+/g, '-')}-${params.state.toLowerCase().replace(/\s+/g, '-')}`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    geo: params.latitude && params.longitude ? {
      '@type': 'GeoCoordinates',
      latitude: params.latitude,
      longitude: params.longitude
    } : undefined,
    areaServed: {
      '@type': 'City',
      name: params.city,
      addressRegion: params.stateAbbr,
      addressCountry: 'US'
    }
  }
}
