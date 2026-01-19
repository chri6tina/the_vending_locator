import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CityLandingPage from '@/components/CityLandingPage'
import { getCityInfo, getAllVendingLeadsSlugs } from '@/data/vending-leads-cities'
import { getPrioritySlugs } from '@/lib/seo-priority-pages'
import { getCityVariantCopy } from '@/lib/city-variations'

export const revalidate = 86400

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> | { slug: string } }): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params
  if (!resolvedParams.slug) {
    return {
      title: 'Bookkeeping & KPI Reporting - The Vending Locator',
      description: 'Monthly financials, route profitability reporting, and tax prep readiness.'
    }
  }

  const cityInfo = getCityInfo(resolvedParams.slug)
  if (!cityInfo) {
    return {
      title: 'Bookkeeping & KPI Reporting - The Vending Locator',
      description: 'Monthly financials, route profitability reporting, and tax prep readiness.'
    }
  }

  const { city, state, slug } = cityInfo
  const title = `Bookkeeping & KPI Reporting in ${city}, ${state} - The Vending Locator`
  const description = `Monthly financials, route profitability reporting, and tax prep readiness for vending businesses in ${city}, ${state}.`

  return {
    title,
    description,
    keywords: `vending bookkeeping ${city} ${state}, route profitability ${city}, vending KPIs ${city} ${state}, monthly financials ${city}`,
    alternates: {
      canonical: `https://www.thevendinglocator.com/bookkeeping-kpis/${slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://www.thevendinglocator.com/bookkeeping-kpis/${slug}`,
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

export async function generateStaticParams() {
  const allSlugs = getAllVendingLeadsSlugs()
  const prioritySlugs = getPrioritySlugs('bookkeeping-kpis')
  return prioritySlugs
    .filter(slug => allSlugs.includes(slug))
    .map(slug => ({ slug }))
}

export default async function BookkeepingKpisCityPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = params instanceof Promise ? await params : params
  if (!resolvedParams.slug) {
    notFound()
  }

  const cityInfo = getCityInfo(resolvedParams.slug)
  if (!cityInfo) {
    notFound()
  }

  const { city, state } = cityInfo
  const { heroSuffix, benefit } = getCityVariantCopy({
    category: 'bookkeeping-kpis',
    slug: resolvedParams.slug,
    city,
    state
  })
  const benefits = [
    `Monthly financials tailored to ${city} vending operators`,
    `Route profitability reporting for ${state} locations`,
    benefit
  ]

  return (
    <CityLandingPage
      categoryLabel="Bookkeeping + KPIs"
      basePath="/bookkeeping-kpis"
      city={city}
      state={state}
      heroTitle={`Bookkeeping & KPI Reporting in ${city}, ${state}`}
      heroDescription={`Get monthly financials, route profitability reporting, and tax prep readiness tailored to vending businesses in ${city}, ${state}. ${heroSuffix}`}
      benefits={benefits}
      primaryCtaLabel="Schedule a Consultation"
      primaryCtaHref="/contact"
      secondaryCtaLabel="Tax Services"
      secondaryCtaHref="/tax-services"
    />
  )
}
