import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CityLandingPage from '@/components/CityLandingPage'
import { getCityInfo, getAllVendingServicesSlugs } from '@/data/vending-services-cities'
import { getPrioritySlugs } from '@/lib/seo-priority-pages'
import { getCityVariantCopy } from '@/lib/city-variations'

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
      title: 'Vending Machine Services - The Vending Locator',
      description: 'Vending machine services and providers'
    }
  }
  
  const cityInfo = getCityInfo(resolvedParams.slug)
  
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
      canonical: `https://www.thevendinglocator.com/vending-services/${resolvedParams.slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://www.thevendinglocator.com/vending-services/${resolvedParams.slug}`,
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

export default async function VendingServicesCityPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
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
  
  const { heroSuffix, benefit } = getCityVariantCopy({
    category: 'vending-services',
    slug: resolvedParams.slug,
    city,
    state
  })
  const benefits = [
    `Reliable operators and service support in ${city}`,
    `Local coverage options tailored to ${state}`,
    benefit
  ]

  // Always render JSON-LD and the city landing layout to ensure SEO content is present
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CityLandingPage
        categoryLabel="Vending Services"
        basePath="/vending-services"
        city={city}
        state={state}
        heroTitle={`Vending Machine Services in ${city}, ${state}`}
        heroDescription={`Connect with vending service providers in ${city}, ${state} for installation, maintenance, and stocking. Get dependable support for your location. ${heroSuffix}`}
        benefits={benefits}
        primaryCtaLabel="Request Service"
        primaryCtaHref="/contact"
      />
    </>
  )
}

