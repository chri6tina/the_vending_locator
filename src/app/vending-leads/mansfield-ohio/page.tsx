import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Mansfield, Ohio | Premium Lead Database',
  description: 'Access verified vending machine locations in Mansfield, Ohio. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Mansfield, vending leads Ohio, vending machine placement Mansfield, vending opportunities Mansfield',
  openGraph: {
    title: 'Vending Machine Locations in Mansfield, Ohio',
    description: 'Access verified vending machine locations in Mansfield, Ohio. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/mansfield-ohio',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/mansfield-ohio'
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MansfieldOhioVendingLeadsPage() {
  return <PageClient />
}
