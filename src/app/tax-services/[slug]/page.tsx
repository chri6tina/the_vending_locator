import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCityInfo, getAllTaxServicesSlugs } from '@/data/tax-services-cities'
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
      title: 'Tax Services - The Vending Locator',
      description: 'Tax and bookkeeping services for vending machine businesses'
    }
  }
  
  const { city, state, slug } = cityInfo
  const title = `Tax & Bookkeeping Services for Vending Machine Owners in ${city}, ${state} - The Vending Locator`
  // Ensure description is 140-160 chars for optimal SEO
  const description = `Expert tax preparation and bookkeeping services for vending machine business owners in ${city}, ${state}. Professional help with taxes, accounting, and financial management.`
  
  return {
    title,
    description,
    keywords: `vending machine taxes ${city} ${state}, vending business bookkeeping ${city}, tax services vending machines ${city} ${state}, vending machine accounting ${city}, tax preparation vending business ${city}`,
    alternates: {
      canonical: `https://www.thevendinglocator.com/tax-services/${slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://www.thevendinglocator.com/tax-services/${slug}`,
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
  const allSlugs = getAllTaxServicesSlugs()
  const prioritySlugs = getPrioritySlugs('tax-services')
  
  // Only pre-generate priority pages (top cities/states)
  // This balances SEO optimization with build time
  const staticParams = prioritySlugs
    .filter(slug => allSlugs.includes(slug))
    .map(slug => ({ slug }))
  
  return staticParams
}

export default async function TaxServicesCityPage({ params }: { params: { slug: string } }) {
  const cityInfo = getCityInfo(params.slug)
  
  if (!cityInfo) {
    notFound()
  }
  
  const { city, state, slug } = cityInfo
  const pageUrl = `https://www.thevendinglocator.com/tax-services/${slug}`
  
  // JSON-LD structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Tax & Bookkeeping Services for Vending Machine Owners in ${city}, ${state}`,
    description: `Expert tax preparation and bookkeeping services for vending machine business owners in ${city}, ${state}.`,
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
          name: 'Tax Services',
          item: 'https://www.thevendinglocator.com/tax-services'
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
      serviceType: 'Tax Preparation and Bookkeeping Services',
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
        businessFunction: 'Vending Machine Business Owners'
      }
    }
  }
  
  // Dynamically import the pageClient component from _city-pages (Next.js ignores this during route discovery)
  // Optimized import with better error handling and SEO fallback
  let PageClient
  try {
    // Try to import the specific pageClient
    const module = await import(`@/app/_city-pages/tax-services/${params.slug}/pageClient`)
    PageClient = module.default
    
    if (!PageClient) {
      throw new Error(`PageClient component not found for ${params.slug}`)
    }
  } catch (error) {
    // Enhanced error handling: Log but don't expose error details to users
    console.error(`[Tax Services] Failed to load pageClient for ${params.slug}:`, error)
    
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

