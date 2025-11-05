import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Southaven, Mississippi | Premium Lead Database',
  description: 'Access verified vending machine locations in Southaven, Mississippi. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Southaven, vending leads Mississippi, vending machine placement Southaven, vending opportunities Southaven',
  openGraph: {
    title: 'Vending Machine Locations in Southaven, Mississippi',
    description: 'Access verified vending machine locations in Southaven, Mississippi. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/southaven-mississippi',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/southaven-mississippi'
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SouthavenMississippiVendingLeadsPage() {
  return <PageClient />
}
