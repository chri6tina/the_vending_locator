import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Pearl City, Hawaii | Premium Lead Database',
  description: 'Access verified vending machine locations in Pearl City, Hawaii. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Pearl City, vending leads Hawaii, vending machine placement Pearl City, vending opportunities Pearl City',
  openGraph: {
    title: 'Vending Machine Locations in Pearl City, Hawaii',
    description: 'Access verified vending machine locations in Pearl City, Hawaii. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/pearl-city-hawaii',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/pearl-city-hawaii'
  }

// Generate on-demand to reduce build memory usage
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function PearlCityHawaiiVendingLeadsPage() {
  return <PageClient />
}
