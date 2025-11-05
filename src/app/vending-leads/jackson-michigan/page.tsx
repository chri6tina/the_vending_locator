import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Jackson, Michigan | Premium Lead Database',
  description: 'Access verified vending machine locations in Jackson, Michigan. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Jackson, vending leads Michigan, vending machine placement Jackson, vending opportunities Jackson',
  openGraph: {
    title: 'Vending Machine Locations in Jackson, Michigan',
    description: 'Access verified vending machine locations in Jackson, Michigan. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/jackson-michigan',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/jackson-michigan'
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function JacksonMichiganVendingLeadsPage() {
  return <PageClient />
}
