import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Farmington, New Mexico | Premium Lead Database',
  description: 'Access verified vending machine locations in Farmington, New Mexico. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Farmington, vending leads New Mexico, vending machine placement Farmington, vending opportunities Farmington',
  openGraph: {
    title: 'Vending Machine Locations in Farmington, New Mexico',
    description: 'Access verified vending machine locations in Farmington, New Mexico. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/farmington-new-mexico',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/farmington-new-mexico'
  }

// Generate on-demand to reduce build memory usage
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function FarmingtonNewMexicoVendingLeadsPage() {
  return <PageClient />
}
