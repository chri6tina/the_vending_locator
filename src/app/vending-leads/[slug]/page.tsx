import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCityInfo, getAllVendingLeadsSlugs } from '@/data/vending-leads-cities'
import { getPrioritySlugs } from '@/lib/seo-priority-pages'

// Use ISR (Incremental Static Regeneration) for SEO stability and performance
// Priority pages are pre-generated at build time for instant SEO
// Other pages are generated on-demand and cached, revalidating every 24 hours
export const revalidate = 86400 // 24 hours in seconds

// Dynamically generate metadata based on slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> | { slug: string } }): Promise<Metadata> {
  // Handle Next.js 15 params as Promise or Next.js 14 params as object
  const resolvedParams = params instanceof Promise ? await params : params
  
  if (!resolvedParams.slug) {
    return {
      title: 'Vending Machine Leads - The Vending Locator',
      description: 'Vending machine leads and locations'
    }
  }
  
  const cityInfo = getCityInfo(resolvedParams.slug)
  
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
      canonical: `https://www.thevendinglocator.com/vending-leads/${resolvedParams.slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://www.thevendinglocator.com/vending-leads/${resolvedParams.slug}`,
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
  const allSlugs = getAllVendingLeadsSlugs()
  const prioritySlugs = getPrioritySlugs('vending-leads')
  
  // Only pre-generate priority pages (top cities/states)
  // This balances SEO optimization with build time
  const staticParams = prioritySlugs
    .filter(slug => allSlugs.includes(slug))
    .map(slug => ({ slug }))
  
  return staticParams
}

export default async function VendingLeadsCityPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  // Handle Next.js 15 params as Promise or Next.js 14 params as object
  const resolvedParams = params instanceof Promise ? await params : params
  
  if (!resolvedParams.slug) {
    notFound()
  }
  
  const cityInfo = getCityInfo(resolvedParams.slug)
  
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
  
  // Dynamically import the pageClient component from _city-pages (Next.js ignores this during route discovery)
  // Optimized import with better error handling and SEO fallback
  let PageClient
  try {
    // Try to import the specific pageClient
    const module = await import(`@/app/_city-pages/vending-leads/${resolvedParams.slug}/pageClient`)
    PageClient = module.default
    
    if (!PageClient) {
      throw new Error(`PageClient component not found for ${resolvedParams.slug}`)
    }
  } catch (error) {
    // Enhanced error handling: Log but don't expose error details to users
    console.error(`[Vending Leads] Failed to load pageClient for ${resolvedParams.slug}:`, error)
    
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

