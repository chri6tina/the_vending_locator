import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Essex Junction, Vermont | Premium Lead Database',
  description: 'Access verified vending machine locations in Essex Junction, Vermont. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Essex Junction, vending leads Vermont, vending machine placement Essex Junction, vending opportunities Essex Junction',
  openGraph: {
    title: 'Vending Machine Locations in Essex Junction, Vermont',
    description: 'Access verified vending machine locations in Essex Junction, Vermont. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/essex-junction-vermont',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/essex-junction-vermont'
  }

// Generate on-demand to reduce build memory usage
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function EssexJunctionVermontVendingLeadsPage() {
  return <PageClient />
}
