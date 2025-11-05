import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Kokomo, Indiana | Premium Lead Database',
  description: 'Access verified vending machine locations in Kokomo, Indiana. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Kokomo, vending leads Indiana, vending machine placement Kokomo, vending opportunities Kokomo',
  openGraph: {
    title: 'Vending Machine Locations in Kokomo, Indiana',
    description: 'Access verified vending machine locations in Kokomo, Indiana. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/kokomo-indiana',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/kokomo-indiana'
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function KokomoIndianaVendingLeadsPage() {
  return <PageClient />
}
