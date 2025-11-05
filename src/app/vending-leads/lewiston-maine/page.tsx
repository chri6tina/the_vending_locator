import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Lewiston, Maine | Premium Lead Database',
  description: 'Access verified vending machine locations in Lewiston, Maine. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Lewiston, vending leads Maine, vending machine placement Lewiston, vending opportunities Lewiston',
  openGraph: {
    title: 'Vending Machine Locations in Lewiston, Maine',
    description: 'Access verified vending machine locations in Lewiston, Maine. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/lewiston-maine',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/lewiston-maine'
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LewistonMaineVendingLeadsPage() {
  return <PageClient />
}
