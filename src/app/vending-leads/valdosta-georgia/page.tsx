import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Valdosta, Georgia | Premium Lead Database',
  description: 'Access verified vending machine locations in Valdosta, Georgia. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Valdosta, vending leads Georgia, vending machine placement Valdosta, vending opportunities Valdosta',
  openGraph: {
    title: 'Vending Machine Locations in Valdosta, Georgia',
    description: 'Access verified vending machine locations in Valdosta, Georgia. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/valdosta-georgia',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/valdosta-georgia'
  }

// Generate on-demand to reduce build memory usage
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function ValdostaGeorgiaVendingLeadsPage() {
  return <PageClient />
}
