import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCityInfo, getAllVendingLeadsSlugs } from '@/data/vending-leads-cities'

// Use ISR (Incremental Static Regeneration) for SEO stability and performance
// Pages will be generated on-demand and cached, revalidating every 24 hours
export const revalidate = 86400 // 24 hours in seconds

// Dynamically generate metadata based on slug
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cityInfo = getCityInfo(params.slug)
  
  if (!cityInfo) {
    return {
      title: 'Vending Machine Leads - The Vending Locator',
      description: 'Vending machine leads and locations'
    }
  }
  
  const { city, state, slug } = cityInfo
  const title = `Vending Machine Leads in ${city}, ${state} - The Vending Locator`
  // Ensure description is 140-160 chars for optimal SEO
  const description = `Get verified vending machine leads and locations in ${city}, ${state}. Find qualified businesses and prime locations for vending machine placement opportunities.`
  
  return {
    title,
    description,
    keywords: `vending machines ${city} ${state}, vending leads ${city} ${state}, vending locations ${city} ${state}, vending opportunities ${city} ${state}`,
    alternates: {
      canonical: `https://www.thevendinglocator.com/vending-leads/${slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://www.thevendinglocator.com/vending-leads/${slug}`,
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

export default async function VendingLeadsCityPage({ params }: { params: { slug: string } }) {
  const cityInfo = getCityInfo(params.slug)
  
  if (!cityInfo) {
    notFound()
  }
  
  const { city, state, slug } = cityInfo
  const pageUrl = `https://www.thevendinglocator.com/vending-leads/${slug}`
  
  // JSON-LD structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Vending Machine Leads in ${city}, ${state}`,
    description: `Get verified vending machine leads and locations in ${city}, ${state}. Find qualified businesses for vending machine placement.`,
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
          name: 'Vending Leads',
          item: 'https://www.thevendinglocator.com/vending-leads'
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
      '@type': 'ItemList',
      name: `Vending Machine Leads in ${city}, ${state}`,
      description: `Verified business leads and locations for vending machine placement in ${city}, ${state}`,
      itemListElement: {
        '@type': 'ListItem',
        position: 1,
        name: `Business locations in ${city}, ${state}`
      }
    }
  }
  
  // Dynamically import from _city-pages - Next.js won't discover these during build
  try {
    const PageClient = (await import(`@/app/_city-pages/vending-leads/${params.slug}/pageClient`)).default
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

