import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CityLandingPage from '@/components/CityLandingPage'
import { getCityInfo, getAllTaxServicesSlugs } from '@/data/tax-services-cities'
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
      title: 'Tax Services - The Vending Locator',
      description: 'Tax and bookkeeping services for vending machine businesses'
    }
  }
  
  const cityInfo = getCityInfo(resolvedParams.slug)
  
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
      canonical: `https://www.thevendinglocator.com/tax-services/${resolvedParams.slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://www.thevendinglocator.com/tax-services/${resolvedParams.slug}`,
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

export default async function TaxServicesCityPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
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
  
  const { heroSuffix, benefit } = getCityVariantCopy({
    category: 'tax-services',
    slug: resolvedParams.slug,
    city,
    state
  })
  const benefits = [
    `Tax preparation tailored to vending businesses in ${city}`,
    `Bookkeeping support designed for ${state} requirements`,
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
        categoryLabel="Tax Services"
        basePath="/tax-services"
        city={city}
        state={state}
        heroTitle={`Tax & Bookkeeping Services in ${city}, ${state}`}
        heroDescription={`Get expert tax preparation and bookkeeping support for vending machine businesses in ${city}, ${state}. Stay compliant and keep your finances organized. ${heroSuffix}`}
        benefits={benefits}
        primaryCtaLabel="Talk to a Specialist"
        primaryCtaHref="/contact"
      />
    </>
  )
}

