import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Hagerstown, Maryland | Premium Lead Database',
  description: 'Access verified vending machine locations in Hagerstown, Maryland. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Hagerstown, vending leads Maryland, vending machine placement Hagerstown, vending opportunities Hagerstown',
  openGraph: {
    title: 'Vending Machine Locations in Hagerstown, Maryland',
    description: 'Access verified vending machine locations in Hagerstown, Maryland. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/hagerstown-maryland',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/hagerstown-maryland'
  }
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HagerstownMarylandVendingLeadsPage() {
  return <PageClient />
}
