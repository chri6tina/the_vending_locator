import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Aberdeen, South Dakota | Premium Lead Database',
  description: 'Access verified vending machine locations in Aberdeen, South Dakota. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Aberdeen, vending leads South Dakota, vending machine placement Aberdeen, vending opportunities Aberdeen',
  openGraph: {
    title: 'Vending Machine Locations in Aberdeen, South Dakota',
    description: 'Access verified vending machine locations in Aberdeen, South Dakota. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/aberdeen-south-dakota',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/aberdeen-south-dakota'
  }

// Generate on-demand to reduce build memory usage
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function AberdeenSouthDakotaVendingLeadsPage() {
  return <PageClient />
}
