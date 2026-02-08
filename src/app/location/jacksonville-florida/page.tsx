import { Metadata } from 'next'
import LocationPageClient from '../[citySlug]/pageClient'

const citySlug = 'jacksonville-florida'

export const metadata: Metadata = {
  title: 'Vending Locations in Jacksonville, Florida | The Vending Locator',
  description:
    'Find Jacksonville vending machine locations and business opportunities. Get verified leads with detailed contact information.',
  keywords:
    'jacksonville vending machines, vending locations jacksonville, vending leads jacksonville florida, vending opportunities',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/location/jacksonville-florida'
  },
  openGraph: {
    title: 'Vending Locations in Jacksonville, Florida | The Vending Locator',
    description:
      'Find Jacksonville vending machine locations and business opportunities. Get verified leads with detailed contact information.',
    url: 'https://www.thevendinglocator.com/location/jacksonville-florida',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Locations in Jacksonville, Florida | The Vending Locator',
    description:
      'Find Jacksonville vending machine locations and business opportunities. Get verified leads with detailed contact information.'
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

export default function Page() {
  return <LocationPageClient citySlug={citySlug} />
}