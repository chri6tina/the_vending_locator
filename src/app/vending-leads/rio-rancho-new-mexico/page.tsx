import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Rio Rancho, New Mexico | Premium Lead Database',
  description: 'Access verified vending machine locations in Rio Rancho, New Mexico. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Rio Rancho, vending leads New Mexico, vending machine placement Rio Rancho, vending opportunities Rio Rancho',
  openGraph: {
    title: 'Vending Machine Locations in Rio Rancho, New Mexico',
    description: 'Access verified vending machine locations in Rio Rancho, New Mexico. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/rio-rancho-new-mexico',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/rio-rancho-new-mexico'
  }
}

export default function RioRanchoNewMexicoVendingLeadsPage() {
  return <PageClient />
}
