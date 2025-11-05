import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Kingsport, Tennessee | Premium Lead Database',
  description: 'Access verified vending machine locations in Kingsport, Tennessee. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Kingsport, vending leads Tennessee, vending machine placement Kingsport, vending opportunities Kingsport',
  openGraph: {
    title: 'Vending Machine Locations in Kingsport, Tennessee',
    description: 'Access verified vending machine locations in Kingsport, Tennessee. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/kingsport-tennessee',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/kingsport-tennessee'
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function KingsportTennesseeVendingLeadsPage() {
  return <PageClient />
}
