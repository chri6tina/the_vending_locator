import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Temple, Texas | Premium Lead Database',
  description: 'Access verified vending machine locations in Temple, Texas. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Temple, vending leads Texas, vending machine placement Temple, vending opportunities Temple',
  openGraph: {
    title: 'Vending Machine Locations in Temple, Texas',
    description: 'Access verified vending machine locations in Temple, Texas. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/temple-texas',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/temple-texas'
  }
}

export default function TempleTexasVendingLeadsPage() {
  return <PageClient />
}
