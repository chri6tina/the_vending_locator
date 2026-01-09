import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Ithaca, New York | Premium Lead Database',
  description: 'Access verified vending machine locations in Ithaca, New York. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Ithaca, vending leads New York, vending machine placement Ithaca, vending opportunities Ithaca',
  openGraph: {
    title: 'Vending Machine Locations in Ithaca, New York',
    description: 'Access verified vending machine locations in Ithaca, New York. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/ithaca-new-york',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/ithaca-new-york'
  }

// Generate on-demand to reduce build memory usage
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function IthacaNewYorkVendingLeadsPage() {
  return <PageClient />
}
