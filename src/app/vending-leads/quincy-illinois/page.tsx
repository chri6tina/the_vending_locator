import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Quincy, Illinois | Premium Lead Database',
  description: 'Access verified vending machine locations in Quincy, Illinois. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Quincy, vending leads Illinois, vending machine placement Quincy, vending opportunities Quincy',
  openGraph: {
    title: 'Vending Machine Locations in Quincy, Illinois',
    description: 'Access verified vending machine locations in Quincy, Illinois. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/quincy-illinois',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/quincy-illinois'
  }
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function QuincyIllinoisVendingLeadsPage() {
  return <PageClient />
}
