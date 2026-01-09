import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Hickory, North Carolina | Premium Lead Database',
  description: 'Access verified vending machine locations in Hickory, North Carolina. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Hickory, vending leads North Carolina, vending machine placement Hickory, vending opportunities Hickory',
  openGraph: {
    title: 'Vending Machine Locations in Hickory, North Carolina',
    description: 'Access verified vending machine locations in Hickory, North Carolina. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/hickory-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/hickory-north-carolina'
  }

// Generate on-demand to reduce build memory usage
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function HickoryNorthCarolinaVendingLeadsPage() {
  return <PageClient />
}
