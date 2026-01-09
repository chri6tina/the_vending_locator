import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Kalispell, Montana | Premium Lead Database',
  description: 'Access verified vending machine locations in Kalispell, Montana. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Kalispell, vending leads Montana, vending machine placement Kalispell, vending opportunities Kalispell',
  openGraph: {
    title: 'Vending Machine Locations in Kalispell, Montana',
    description: 'Access verified vending machine locations in Kalispell, Montana. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/kalispell-montana',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/kalispell-montana'
  }

// Generate on-demand to reduce build memory usage
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function KalispellMontanaVendingLeadsPage() {
  return <PageClient />
}
