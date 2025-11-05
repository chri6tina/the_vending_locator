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
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function NewBritainConnecticutVendingLeadsPage() {
  return <PageClient />
}
