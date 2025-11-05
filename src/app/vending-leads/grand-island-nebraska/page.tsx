import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Grand Island, Nebraska | Premium Lead Database',
  description: 'Access verified vending machine locations in Grand Island, Nebraska. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Grand Island, vending leads Nebraska, vending machine placement Grand Island, vending opportunities Grand Island',
  openGraph: {
    title: 'Vending Machine Locations in Grand Island, Nebraska',
    description: 'Access verified vending machine locations in Grand Island, Nebraska. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/grand-island-nebraska',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/grand-island-nebraska'
  }
}

export default function GrandIslandNebraskaVendingLeadsPage() {
  return <PageClient />
}
