import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Slidell, Louisiana | Premium Lead Database',
  description: 'Access verified vending machine locations in Slidell, Louisiana. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Slidell, vending leads Louisiana, vending machine placement Slidell, vending opportunities Slidell',
  openGraph: {
    title: 'Vending Machine Locations in Slidell, Louisiana',
    description: 'Access verified vending machine locations in Slidell, Louisiana. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/slidell-louisiana',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/slidell-louisiana'
  }
}

export default function SlidellLouisianaVendingLeadsPage() {
  return <PageClient />
}
