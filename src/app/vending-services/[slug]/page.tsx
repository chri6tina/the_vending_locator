import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCityInfo, getAllVendingServicesSlugs } from '@/data/vending-services-cities'

// Use ISR (Incremental Static Regeneration) for SEO stability and performance
// Pages will be generated on-demand and cached, revalidating every 24 hours
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

// Generate static params - return empty array to prevent build-time generation
export async function generateStaticParams() {
  return []
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
  
  // Dynamically import from _city-pages - Next.js won't discover these during build
  try {
    const PageClient = (await import(`@/app/_city-pages/vending-services/${params.slug}/pageClient`)).default
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

