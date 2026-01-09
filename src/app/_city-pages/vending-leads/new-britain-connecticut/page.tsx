import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in New Britain, Connecticut | Premium Lead Database',
  description: 'Access verified vending machine locations in New Britain, Connecticut. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations New Britain, vending leads Connecticut, vending machine placement New Britain, vending opportunities New Britain',
  openGraph: {
    title: 'Vending Machine Locations in New Britain, Connecticut',
    description: 'Access verified vending machine locations in New Britain, Connecticut. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/new-britain-connecticut',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/new-britain-connecticut'
  }

// Generate on-demand to reduce build memory usage
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function NewBritainConnecticutVendingLeadsPage() {
  return <PageClient />
}
