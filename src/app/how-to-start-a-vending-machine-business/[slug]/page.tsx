import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCityVariantCopy } from '@/lib/city-variations'
import HowToStartCityTemplate from '@/components/HowToStartCityTemplate'

type Params = { params: { slug: string } }

const parseCityState = (slug: string) => {
  const slugParts = slug.split('-')
  const multiWordStates: Record<string, string> = {
    'south-dakota': 'South Dakota',
    'north-dakota': 'North Dakota',
    'south-carolina': 'South Carolina',
    'north-carolina': 'North Carolina',
    'west-virginia': 'West Virginia',
    'new-hampshire': 'New Hampshire',
    'new-jersey': 'New Jersey',
    'new-mexico': 'New Mexico',
    'new-york': 'New York',
    'rhode-island': 'Rhode Island',
    'washington-dc': 'Washington DC',
    'district-of-columbia': 'District of Columbia'
  }
  const stateAbbrMap: Record<string, string> = {
    al: 'Alabama',
    ak: 'Alaska',
    az: 'Arizona',
    ar: 'Arkansas',
    ca: 'California',
    co: 'Colorado',
    ct: 'Connecticut',
    de: 'Delaware',
    fl: 'Florida',
    ga: 'Georgia',
    hi: 'Hawaii',
    id: 'Idaho',
    il: 'Illinois',
    in: 'Indiana',
    ia: 'Iowa',
    ks: 'Kansas',
    ky: 'Kentucky',
    la: 'Louisiana',
    me: 'Maine',
    md: 'Maryland',
    ma: 'Massachusetts',
    mi: 'Michigan',
    mn: 'Minnesota',
    ms: 'Mississippi',
    mo: 'Missouri',
    mt: 'Montana',
    ne: 'Nebraska',
    nv: 'Nevada',
    nh: 'New Hampshire',
    nj: 'New Jersey',
    nm: 'New Mexico',
    ny: 'New York',
    nc: 'North Carolina',
    nd: 'North Dakota',
    oh: 'Ohio',
    ok: 'Oklahoma',
    or: 'Oregon',
    pa: 'Pennsylvania',
    ri: 'Rhode Island',
    sc: 'South Carolina',
    sd: 'South Dakota',
    tn: 'Tennessee',
    tx: 'Texas',
    ut: 'Utah',
    vt: 'Vermont',
    va: 'Virginia',
    wa: 'Washington',
    wv: 'West Virginia',
    wi: 'Wisconsin',
    wy: 'Wyoming',
    dc: 'District of Columbia'
  }

  let stateSlug = slugParts[slugParts.length - 1]
  let cityNameParts = slugParts.slice(0, -1)

  if (slugParts.length >= 2) {
    const twoWordState = slugParts.slice(-2).join('-')
    if (multiWordStates[twoWordState]) {
      stateSlug = twoWordState
      cityNameParts = slugParts.slice(0, -2)
    } else if (slugParts.length >= 3) {
      const threeWordState = slugParts.slice(-3).join('-')
      if (multiWordStates[threeWordState]) {
        stateSlug = threeWordState
        cityNameParts = slugParts.slice(0, -3)
      }
    }
  }

  const stateName =
    stateAbbrMap[stateSlug] ||
    multiWordStates[stateSlug] ||
    stateSlug
      .split('-')
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ')
  const cityDisplayName = cityNameParts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

  return { stateSlug, stateName, cityDisplayName }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params

  if (!resolvedParams.slug) {
    return {
      title: 'How to Start a Vending Machine Business - The Vending Locator',
      description: 'Learn how to start a vending machine business: licensing, permits, startup costs, and locations.'
    }
  }

  const { cityDisplayName, stateName } = parseCityState(resolvedParams.slug)
  const { heroSuffix } = getCityVariantCopy({
    category: 'how-to-start',
    slug: resolvedParams.slug,
    city: cityDisplayName,
    state: stateName
  })
  const titleCity = cityDisplayName
  return {
    title: `How to Start a Vending Machine Business in ${titleCity} (2026 Guide)`,
    description: `Learn how to start a vending machine business in ${titleCity}: licensing, permits, startup costs, best locations, contracts, outreach scripts, and FAQs. ${heroSuffix}`,
    keywords: [
      `vending machine business ${titleCity}`,
      `how to start vending machines ${titleCity}`,
      `${titleCity} vending permits`,
      `${titleCity} vending locations`
    ],
    alternates: { canonical: `https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/${resolvedParams.slug}` },
    openGraph: {
      title: `How to Start a Vending Machine Business in ${titleCity}`,
      description: `Permits, costs, locations, and contracts to launch in ${titleCity}.`,
      url: `https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/${resolvedParams.slug}`,
      siteName: 'The Vending Locator',
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: `How to Start a Vending Machine Business in ${titleCity}`,
      description: `Step-by-step guide for ${titleCity}: legal, locations, costs, and contracts.`
    },
    robots: { index: true, follow: true }
  }
}

export const revalidate = 86400

export default async function GuideCityPage({ params }: Params) {
  const resolvedParams = params instanceof Promise ? await params : params
  const { slug } = resolvedParams

  if (!slug) return notFound()

  const { stateSlug, stateName, cityDisplayName } = parseCityState(slug)

  return (
    <HowToStartCityTemplate
      citySlug={slug}
      cityDisplayName={cityDisplayName}
      stateDisplayName={stateName}
      stateSlug={stateSlug}
    />
  )
}
