import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Woonsocket, Rhode Island | Premium Lead Database',
  description: 'Access verified vending machine locations in Woonsocket, Rhode Island. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Woonsocket, vending leads Rhode Island, vending machine placement Woonsocket, vending opportunities Woonsocket',
  openGraph: {
    title: 'Vending Machine Locations in Woonsocket, Rhode Island',
    description: 'Access verified vending machine locations in Woonsocket, Rhode Island. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/woonsocket-rhode-island',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/woonsocket-rhode-island'
  }

// Generate on-demand to reduce build memory usage
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function WoonsocketRhodeIslandVendingLeadsPage() {
  return <PageClient />
}
