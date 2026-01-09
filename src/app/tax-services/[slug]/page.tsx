import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCityInfo, getAllTaxServicesSlugs } from '@/data/tax-services-cities'

// Use ISR (Incremental Static Regeneration) for SEO stability and performance
// Pages will be generated on-demand and cached, revalidating every 24 hours
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

// Generate static params - return empty array to prevent build-time generation
// Pages will be generated on-demand at request time
export async function generateStaticParams() {
  // Return empty array to prevent Next.js from generating all pages during build
  // Pages will be rendered dynamically on-demand
  return []
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
  // This preserves all existing pageClient components and their content
  // All 540+ tax-services city pages are preserved, just moved to _city-pages/tax-services/
  try {
    // Dynamic import from _city-pages - Next.js won't discover these during build
    const PageClient = (await import(`@/app/_city-pages/tax-services/${params.slug}/pageClient`)).default
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <PageClient />
      </>
    )
  } catch (error) {
    console.error(`Failed to load pageClient for ${params.slug}:`, error)
    notFound()
  }
}

