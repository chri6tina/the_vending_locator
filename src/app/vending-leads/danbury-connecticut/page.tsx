import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Danbury, Connecticut | Premium Lead Database',
  description: 'Access verified vending machine locations in Danbury, Connecticut. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Danbury, vending leads Connecticut, vending machine placement Danbury, vending opportunities Danbury',
  openGraph: {
    title: 'Vending Machine Locations in Danbury, Connecticut',
    description: 'Access verified vending machine locations in Danbury, Connecticut. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/danbury-connecticut',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/danbury-connecticut'
  }
}

export default function DanburyConnecticutVendingLeadsPage() {
  return <PageClient />
}
