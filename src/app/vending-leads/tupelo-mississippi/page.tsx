import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Tupelo, Mississippi | Premium Lead Database',
  description: 'Access verified vending machine locations in Tupelo, Mississippi. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Tupelo, vending leads Mississippi, vending machine placement Tupelo, vending opportunities Tupelo',
  openGraph: {
    title: 'Vending Machine Locations in Tupelo, Mississippi',
    description: 'Access verified vending machine locations in Tupelo, Mississippi. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/tupelo-mississippi',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/tupelo-mississippi'
  }

// Generate on-demand to reduce build memory usage
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function TupeloMississippiVendingLeadsPage() {
  return <PageClient />
}
