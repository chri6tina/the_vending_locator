import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Olympia, Washington | Premium Lead Database',
  description: 'Access verified vending machine locations in Olympia, Washington. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Olympia, vending leads Washington, vending machine placement Olympia, vending opportunities Olympia',
  openGraph: {
    title: 'Vending Machine Locations in Olympia, Washington',
    description: 'Access verified vending machine locations in Olympia, Washington. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/olympia-washington',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/olympia-washington'
  }
}

export default function OlympiaWashingtonVendingLeadsPage() {
  return <PageClient />
}
