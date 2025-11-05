import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Albany, Oregon | Premium Lead Database',
  description: 'Access verified vending machine locations in Albany, Oregon. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Albany, vending leads Oregon, vending machine placement Albany, vending opportunities Albany',
  openGraph: {
    title: 'Vending Machine Locations in Albany, Oregon',
    description: 'Access verified vending machine locations in Albany, Oregon. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/albany-oregon',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/albany-oregon'
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AlbanyOregonVendingLeadsPage() {
  return <PageClient />
}
