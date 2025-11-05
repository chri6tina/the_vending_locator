import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Greeley, Colorado | Premium Lead Database',
  description: 'Access verified vending machine locations in Greeley, Colorado. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Greeley, vending leads Colorado, vending machine placement Greeley, vending opportunities Greeley',
  openGraph: {
    title: 'Vending Machine Locations in Greeley, Colorado',
    description: 'Access verified vending machine locations in Greeley, Colorado. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/greeley-colorado',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/greeley-colorado'
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GreeleyColoradoVendingLeadsPage() {
  return <PageClient />
}
