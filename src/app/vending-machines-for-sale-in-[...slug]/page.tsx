import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CityLandingPage from '@/components/CityLandingPage'

// Use ISR (Incremental Static Regeneration) for SEO stability and performance
// Pages will be generated on-demand and cached, revalidating every 24 hours
export const revalidate = 86400 // 24 hours in seconds

// Dynamically generate metadata based on slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> | { slug: string[] } }): Promise<Metadata> {
  // Handle Next.js 15 params as Promise or Next.js 14 params as object
  const resolvedParams = params instanceof Promise ? await params : params
  
  // For catch-all routes, slug is an array: ['phoenix-arizona'] for URL /vending-machines-for-sale-in-phoenix-arizona
  // Handle case where slug might be undefined during static generation
  if (!resolvedParams.slug || !Array.isArray(resolvedParams.slug) || resolvedParams.slug.length === 0) {
    return {
      title: 'Vending Machines for Sale - The Vending Locator',
      description: 'Smart vending machines and modern coolers'
    }
  }
  
  const citySlug = resolvedParams.slug.join('-') // Join segments if multiple
  const cityParts = citySlug.split('-')
  
  if (cityParts.length < 2) {
    return {
      title: 'Vending Machines for Sale - The Vending Locator',
      description: 'Smart vending machines and modern coolers'
    }
  }
  
  // Extract city and state
  const statePart = cityParts[cityParts.length - 1]
  const cityPartsOnly = cityParts.slice(0, -1)
  
  // Handle multi-word states
  let state = statePart.charAt(0).toUpperCase() + statePart.slice(1)
  let cityPartsFinal = cityPartsOnly
  
  const multiWordStates: { [key: string]: string } = {
    'south-dakota': 'South Dakota',
    'north-dakota': 'North Dakota',
    'south-carolina': 'South Carolina',
    'north-carolina': 'North Carolina',
    'west-virginia': 'West Virginia',
    'new-hampshire': 'New Hampshire',
    'new-jersey': 'New Jersey',
    'new-mexico': 'New Mexico',
    'new-york': 'New York',
    'rhode-island': 'Rhode Island',
    'washington-dc': 'Washington DC'
  }
  
  // Check if last 2 parts form a multi-word state
  if (cityParts.length >= 2) {
    const twoWordState = cityParts.slice(-2).join('-')
    if (multiWordStates[twoWordState]) {
      state = multiWordStates[twoWordState]
      cityPartsFinal = cityParts.slice(0, -2)
    } else if (cityParts.length >= 3) {
      const threeWordState = cityParts.slice(-3).join('-')
      if (multiWordStates[threeWordState]) {
        state = multiWordStates[threeWordState]
        cityPartsFinal = cityParts.slice(0, -3)
      }
    }
  }
  
  const city = cityPartsFinal.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
  const fullSlug = `vending-machines-for-sale-in-${citySlug}`
  
  const title = `Vending Machines for Sale in ${city}, ${state} | Smart Coolers with 24/7 Support`
  const description = `Shop smart vending machines and modern coolers in ${city}, ${state}. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.`
  
  return {
    title,
    description,
    keywords: `${city} vending machines for sale, smart vending ${city} ${state}, haha smart coolers ${city}, vending machine business ${city}`,
    alternates: {
      canonical: `https://www.thevendinglocator.com/${fullSlug}`
    },
    openGraph: {
      title,
      description,
      url: `https://www.thevendinglocator.com/${fullSlug}`,
      siteName: 'The Vending Locator',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  }
}

// Generate static params - return empty array to prevent build-time generation
// Catch-all routes will use ISR on-demand
export async function generateStaticParams() {
  return []
}

export const dynamicParams = true // Allow dynamic generation for non-pre-generated routes

export default async function VendingMachinesForSalePage({ params }: { params: Promise<{ slug: string[] }> | { slug: string[] } }) {
  // Handle Next.js 15 params as Promise or Next.js 14 params as object
  const resolvedParams = params instanceof Promise ? await params : params
  
  // For catch-all routes, slug is an array of path segments
  // URL: /vending-machines-for-sale-in-phoenix-arizona
  // Route: vending-machines-for-sale-in-[...slug]
  // params.slug will be ['phoenix-arizona'] (single element, no slashes in URL)
  
  // Handle case where slug might be undefined or empty
  if (!resolvedParams.slug || !Array.isArray(resolvedParams.slug) || resolvedParams.slug.length === 0) {
    notFound()
  }
  
  const citySlug = resolvedParams.slug.join('-') // Join in case there are multiple segments
  
  // Extract city and state for structured data
  const cityParts = citySlug.split('-')
  const statePart = cityParts[cityParts.length - 1]
  const cityPartsOnly = cityParts.slice(0, -1)
  
  let state = statePart.charAt(0).toUpperCase() + statePart.slice(1)
  let cityPartsFinal = cityPartsOnly
  
  const multiWordStates: { [key: string]: string } = {
    'south-dakota': 'South Dakota',
    'north-dakota': 'North Dakota',
    'south-carolina': 'South Carolina',
    'north-carolina': 'North Carolina',
    'west-virginia': 'West Virginia',
    'new-hampshire': 'New Hampshire',
    'new-jersey': 'New Jersey',
    'new-mexico': 'New Mexico',
    'new-york': 'New York',
    'rhode-island': 'Rhode Island',
    'washington-dc': 'Washington DC'
  }
  
  if (cityParts.length >= 2) {
    const twoWordState = cityParts.slice(-2).join('-')
    if (multiWordStates[twoWordState]) {
      state = multiWordStates[twoWordState]
      cityPartsFinal = cityParts.slice(0, -2)
    } else if (cityParts.length >= 3) {
      const threeWordState = cityParts.slice(-3).join('-')
      if (multiWordStates[threeWordState]) {
        state = multiWordStates[threeWordState]
        cityPartsFinal = cityParts.slice(0, -3)
      }
    }
  }
  
  const city = cityPartsFinal.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
  const pageUrl = `https://www.thevendinglocator.com/vending-machines-for-sale-in-${citySlug}`
  
  // JSON-LD structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Vending Machines for Sale in ${city}, ${state}`,
    description: `Shop smart vending machines and modern coolers in ${city}, ${state}. Get expert guidance and ready-to-ship Haha vending machines.`,
    url: pageUrl,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.thevendinglocator.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Vending Machines for Sale',
          item: 'https://www.thevendinglocator.com/haha-coolers'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `${city}, ${state}`,
          item: pageUrl
        }
      ]
    },
    mainEntity: {
      '@type': 'Product',
      name: `Vending Machines for Sale in ${city}, ${state}`,
      description: `Smart vending machines and AI-powered coolers available in ${city}, ${state}`,
      category: 'Vending Machines',
      areaServed: {
        '@type': 'City',
        name: city,
        containedIn: {
          '@type': 'State',
          name: state
        }
      }
    }
  }
  
  const benefits = [
    `New and refurbished vending machines available in ${city}`,
    `Delivery and setup guidance for ${state} operators`,
    'Support for choosing the right equipment mix'
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CityLandingPage
        categoryLabel="Vending Machines for Sale"
        basePath="/vending-machine-products"
        city={city}
        state={state}
        heroTitle={`Vending Machines for Sale in ${city}, ${state}`}
        heroDescription={`Shop smart vending machines and modern coolers in ${city}, ${state}. Get guidance on selecting equipment and plan your rollout with confidence.`}
        benefits={benefits}
        primaryCtaLabel="Browse Products"
        primaryCtaHref="/vending-machine-products"
      />
    </>
  )
}

