import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in St. George, Utah | Premium Lead Database',
  description: 'Access verified vending machine locations in St. George, Utah. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations St. George, vending leads Utah, vending machine placement St. George, vending opportunities St. George',
  openGraph: {
    title: 'Vending Machine Locations in St. George, Utah',
    description: 'Access verified vending machine locations in St. George, Utah. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/st-george-utah',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/st-george-utah'
  }
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function StGeorgeUtahVendingLeadsPage() {
  return <PageClient />
}
