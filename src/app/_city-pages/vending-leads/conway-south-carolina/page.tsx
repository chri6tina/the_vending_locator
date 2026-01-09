import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Conway, South Carolina | Premium Lead Database',
  description: 'Access verified vending machine locations in Conway, South Carolina. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Conway, vending leads South Carolina, vending machine placement Conway, vending opportunities Conway',
  openGraph: {
    title: 'Vending Machine Locations in Conway, South Carolina',
    description: 'Access verified vending machine locations in Conway, South Carolina. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/conway-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/conway-south-carolina'
  }

// Generate on-demand to reduce build memory usage
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function ConwaySouthCarolinaVendingLeadsPage() {
  return <PageClient />
}
