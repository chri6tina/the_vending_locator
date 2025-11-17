import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Paducah, Kentucky | Premium Lead Database',
  description: 'Access verified vending machine locations in Paducah, Kentucky. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Paducah, vending leads Kentucky, vending machine placement Paducah, vending opportunities Paducah',
  openGraph: {
    title: 'Vending Machine Locations in Paducah, Kentucky',
    description: 'Access verified vending machine locations in Paducah, Kentucky. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/paducah-kentucky',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/paducah-kentucky'
  }
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PaducahKentuckyVendingLeadsPage() {
  return <PageClient />
}
