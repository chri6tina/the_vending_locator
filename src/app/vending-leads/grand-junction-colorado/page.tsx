import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Grand Junction, Colorado | Premium Lead Database',
  description: 'Access verified vending machine locations in Grand Junction, Colorado. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Grand Junction, vending leads Colorado, vending machine placement Grand Junction, vending opportunities Grand Junction',
  openGraph: {
    title: 'Vending Machine Locations in Grand Junction, Colorado',
    description: 'Access verified vending machine locations in Grand Junction, Colorado. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/grand-junction-colorado',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/grand-junction-colorado'
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GrandJunctionColoradoVendingLeadsPage() {
  return <PageClient />
}
