import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCityInfo, getAllVendingServicesSlugs } from '@/data/vending-services-cities'
import { getPrioritySlugs } from '@/lib/seo-priority-pages'

// Use ISR (Incremental Static Regeneration) for SEO stability and performance
// Priority pages are pre-generated at build time for instant SEO
// Other pages are generated on-demand and cached, revalidating every 24 hours
export const revalidate = 86400 // 24 hours in seconds

// Dynamically generate metadata based on slug
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cityInfo = getCityInfo(params.slug)
  
  if (!cityInfo) {
    return {
      title: 'Vending Machine Services - The Vending Locator',
      description: 'Vending machine services and providers'
    }
  }
  
  const { city, state, slug } = cityInfo
  const title = `Vending Machine Services in ${city}, ${state} - The Vending Locator`
  // Ensure description is 140-160 chars for optimal SEO
  const description = `Professional vending machine services in ${city}, ${state}. Connect with qualified vending operators for installation, maintenance, and stocking at your business location.`
  
  return {
    title,
    description,
    keywords: `vending machine services ${city} ${state}, vending operators ${city}, vending service providers ${city} ${state}`,
    alternates: {
      canonical: `https://www.thevendinglocator.com/vending-services/${slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://www.thevendinglocator.com/vending-services/${slug}`,
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

// Pre-generate priority pages at build time for optimal SEO
// Other pages will use ISR on-demand generation
export async function generateStaticParams() {
  const allSlugs = getAllVendingServicesSlugs()
  const prioritySlugs = getPrioritySlugs('vending-services')
  
  // Only pre-generate priority pages (top cities/states)
  // This balances SEO optimization with build time
  const staticParams = prioritySlugs
    .filter(slug => allSlugs.includes(slug))
    .map(slug => ({ slug }))
  
  return staticParams
}

export default async function VendingServicesCityPage({ params }: { params: { slug: string } }) {
  const cityInfo = getCityInfo(params.slug)
  
  if (!cityInfo) {
    notFound()
  }
  
  const { city, state, slug } = cityInfo
  const pageUrl = `https://www.thevendinglocator.com/vending-services/${slug}`
  
  // JSON-LD structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Vending Machine Services in ${city}, ${state}`,
    description: `Professional vending machine services in ${city}, ${state}. Connect with qualified vending operators for your business location.`,
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
          name: 'Vending Services',
          item: 'https://www.thevendinglocator.com/vending-services'
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
      '@type': 'Service',
      serviceType: 'Vending Machine Services',
      areaServed: {
        '@type': 'City',
        name: city,
        containedIn: {
          '@type': 'State',
          name: state
        }
      },
      audience: {
        '@type': 'BusinessAudience',
        businessFunction: 'Business Location Owners'
      }
    }
  }
  
  // Optimized dynamic import with better error handling and SEO fallback
  let PageClient
  try {
    // Try to import the specific pageClient
    const module = await import(`@/app/_city-pages/vending-services/${params.slug}/pageClient`)
    PageClient = module.default
    
    if (!PageClient) {
      throw new Error(`PageClient component not found for ${params.slug}`)
    }
  } catch (error) {
    // Enhanced error handling: Log but don't expose error details to users
    console.error(`[Vending Services] Failed to load pageClient for ${params.slug}:`, error)
    
    // For SEO: Return 404 instead of broken page
    // This ensures search engines don't index broken content
    notFound()
  }

  // Always render JSON-LD and PageClient to ensure SEO content is present
  // The dynamic import is awaited server-side, so content is in initial HTML
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageClient />
    </>
  )
}

