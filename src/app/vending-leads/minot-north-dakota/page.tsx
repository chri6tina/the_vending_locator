import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Minot, North Dakota | Premium Lead Database',
  description: 'Access verified vending machine locations in Minot, North Dakota. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Minot, vending leads North Dakota, vending machine placement Minot, vending opportunities Minot',
  openGraph: {
    title: 'Vending Machine Locations in Minot, North Dakota',
    description: 'Access verified vending machine locations in Minot, North Dakota. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/minot-north-dakota',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/minot-north-dakota'
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MinotNorthDakotaVendingLeadsPage() {
  return <PageClient />
}
