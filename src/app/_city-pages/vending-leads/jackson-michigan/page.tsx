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

// Generate on-demand to reduce build memory usage
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function JacksonMichiganVendingLeadsPage() {
  return <PageClient />
}
