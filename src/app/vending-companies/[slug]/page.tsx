import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import VendingCompaniesCityTemplate from '@/components/VendingCompaniesCityTemplate'
import { getCityInfo, getAllVendingCompaniesSlugs } from '@/data/vending-companies-cities'
import { getPrioritySlugs } from '@/lib/seo-priority-pages'

export const revalidate = 86400

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }> | { slug: string }
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params

  if (!resolvedParams.slug) {
    return {
      title: 'Vending Machine Companies - The Vending Locator',
      description: 'Find vending machine companies and operators.'
    }
  }

  const cityInfo = getCityInfo(resolvedParams.slug)
  if (!cityInfo) {
    return {
      title: 'Vending Machine Companies - The Vending Locator',
      description: 'Find vending machine companies and operators.'
    }
  }

  const { city, state, slug } = cityInfo
  const title = `${city}, ${state} Vending Machine Companies - The Vending Locator`
  const description = `Discover vending machine companies serving ${city}, ${state}. Compare services and connect with professional operators for your business.`

  return {
    title,
    description,
    keywords: `vending machine companies ${city} ${state}, vending operators ${city}, vending services ${city} ${state}`,
    alternates: {
      canonical: `https://www.thevendinglocator.com/vending-companies/${slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://www.thevendinglocator.com/vending-companies/${slug}`,
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
  const allSlugs = getAllVendingCompaniesSlugs()
  const prioritySlugs = getPrioritySlugs('vending-services')
  return prioritySlugs.filter((slug) => allSlugs.includes(slug)).map((slug) => ({ slug }))
}

export default async function VendingCompaniesCityPage({
  params
}: {
  params: Promise<{ slug: string }> | { slug: string }
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  if (!resolvedParams.slug) notFound()

  const cityInfo = getCityInfo(resolvedParams.slug)
  if (!cityInfo) notFound()

  const { city, state, slug } = cityInfo
  return <VendingCompaniesCityTemplate city={city} state={state} companies={[]} />
}
