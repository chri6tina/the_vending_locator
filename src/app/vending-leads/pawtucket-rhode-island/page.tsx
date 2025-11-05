import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Pawtucket, Rhode Island | Premium Lead Database',
  description: 'Access verified vending machine locations in Pawtucket, Rhode Island. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Pawtucket, vending leads Rhode Island, vending machine placement Pawtucket, vending opportunities Pawtucket',
  openGraph: {
    title: 'Vending Machine Locations in Pawtucket, Rhode Island',
    description: 'Access verified vending machine locations in Pawtucket, Rhode Island. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/pawtucket-rhode-island',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/pawtucket-rhode-island'
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PawtucketRhodeIslandVendingLeadsPage() {
  return <PageClient />
}
