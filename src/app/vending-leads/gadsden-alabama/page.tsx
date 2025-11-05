import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Gadsden, Alabama | Premium Lead Database',
  description: 'Access verified vending machine locations in Gadsden, Alabama. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Gadsden, vending leads Alabama, vending machine placement Gadsden, vending opportunities Gadsden',
  openGraph: {
    title: 'Vending Machine Locations in Gadsden, Alabama',
    description: 'Access verified vending machine locations in Gadsden, Alabama. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/gadsden-alabama',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/gadsden-alabama'
  }
}

export default function GadsdenAlabamaVendingLeadsPage() {
  return <PageClient />
}
