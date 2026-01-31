import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import VendingLeadsCityTemplate from '@/components/VendingLeadsCityTemplate'
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

  return <VendingLeadsCityTemplate city={city} state={state} slug={slug} />
}

