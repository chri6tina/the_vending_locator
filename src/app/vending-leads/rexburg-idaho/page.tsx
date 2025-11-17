import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Rexburg, Idaho | Premium Lead Database',
  description: 'Access verified vending machine locations in Rexburg, Idaho. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Rexburg, vending leads Idaho, vending machine placement Rexburg, vending opportunities Rexburg',
  openGraph: {
    title: 'Vending Machine Locations in Rexburg, Idaho',
    description: 'Access verified vending machine locations in Rexburg, Idaho. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/rexburg-idaho',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/rexburg-idaho'
  }
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function RexburgIdahoVendingLeadsPage() {
  return <PageClient />
}
