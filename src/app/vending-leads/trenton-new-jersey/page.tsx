import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Trenton, New Jersey | Premium Lead Database',
  description: 'Access verified vending machine locations in Trenton, New Jersey. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Trenton, vending leads New Jersey, vending machine placement Trenton, vending opportunities Trenton',
  openGraph: {
    title: 'Vending Machine Locations in Trenton, New Jersey',
    description: 'Access verified vending machine locations in Trenton, New Jersey. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/trenton-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/trenton-new-jersey'
  }

// Generate on-demand to reduce build memory usage
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function TrentonNewJerseyVendingLeadsPage() {
  return <PageClient />
}
