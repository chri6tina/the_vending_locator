import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Charlottesville, Virginia | Premium Lead Database',
  description: 'Access verified vending machine locations in Charlottesville, Virginia. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Charlottesville, vending leads Virginia, vending machine placement Charlottesville, vending opportunities Charlottesville',
  openGraph: {
    title: 'Vending Machine Locations in Charlottesville, Virginia',
    description: 'Access verified vending machine locations in Charlottesville, Virginia. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/charlottesville-virginia',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/charlottesville-virginia'
  }

// Generate on-demand to reduce build memory usage
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function CharlottesvilleVirginiaVendingLeadsPage() {
  return <PageClient />
}
