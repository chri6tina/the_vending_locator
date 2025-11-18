import { Metadata } from 'next'
import PageClient from './pageClient'

// Extract city and state from slug for metadata
function parseLocationSlug(slug: string): { city: string; state: string } {
  const parts = slug.split('-')
  if (parts.length < 2) {
    return { city: slug, state: '' }
  }
  
  const statePart = parts[parts.length - 1]
  const cityParts = parts.slice(0, -1)
  
  const stateMap: { [key: string]: string } = {
    'alabama': 'Alabama', 'alaska': 'Alaska', 'arizona': 'Arizona', 'arkansas': 'Arkansas',
    'california': 'California', 'colorado': 'Colorado', 'connecticut': 'Connecticut', 'delaware': 'Delaware',
    'florida': 'Florida', 'georgia': 'Georgia', 'hawaii': 'Hawaii', 'idaho': 'Idaho',
    'illinois': 'Illinois', 'indiana': 'Indiana', 'iowa': 'Iowa', 'kansas': 'Kansas',
    'kentucky': 'Kentucky', 'louisiana': 'Louisiana', 'maine': 'Maine', 'maryland': 'Maryland',
    'massachusetts': 'Massachusetts', 'michigan': 'Michigan', 'minnesota': 'Minnesota', 'mississippi': 'Mississippi',
    'missouri': 'Missouri', 'montana': 'Montana', 'nebraska': 'Nebraska', 'nevada': 'Nevada',
    'new-hampshire': 'New Hampshire', 'new-jersey': 'New Jersey', 'new-mexico': 'New Mexico', 'new-york': 'New York',
    'north-carolina': 'North Carolina', 'north-dakota': 'North Dakota', 'ohio': 'Ohio', 'oklahoma': 'Oklahoma',
    'oregon': 'Oregon', 'pennsylvania': 'Pennsylvania', 'rhode-island': 'Rhode Island', 'south-carolina': 'South Carolina',
    'south-dakota': 'South Dakota', 'tennessee': 'Tennessee', 'texas': 'Texas', 'utah': 'Utah',
    'vermont': 'Vermont', 'virginia': 'Virginia', 'washington': 'Washington', 'west-virginia': 'West Virginia',
    'wisconsin': 'Wisconsin', 'wyoming': 'Wyoming', 'washington-dc': 'Washington DC'
  }
  
  const state = stateMap[statePart] || statePart
  const city = cityParts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
  
  return { city, state }
}

export async function generateMetadata({ params }: { params: { citySlug: string } }): Promise<Metadata> {
  const { city, state } = parseLocationSlug(params.citySlug)
  const title = `Vending Locations in ${city}, ${state} | The Vending Locator`
  const description = `Find vending machine locations and business opportunities in ${city}, ${state}. Get verified leads with detailed contact information.`
  
  return {
    title,
    description,
    keywords: `vending machines, vending locations, ${city}, ${state}, vending leads, vending opportunities`,
    alternates: {
      canonical: `https://www.thevendinglocator.com/location/${params.citySlug}`
    },
    openGraph: {
      title,
      description,
      url: `https://www.thevendinglocator.com/location/${params.citySlug}`,
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
        maxVideoPreview: -1,
        maxImagePreview: 'large',
        maxSnippet: -1
      }
    }
  }
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function LocationPage({ params }: { params: { citySlug: string } }) {
  return <PageClient citySlug={params.citySlug} />
}

