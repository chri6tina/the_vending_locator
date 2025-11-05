import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Lawrence, Kansas | Premium Lead Database',
  description: 'Access verified vending machine locations in Lawrence, Kansas. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Lawrence, vending leads Kansas, vending machine placement Lawrence, vending opportunities Lawrence',
  openGraph: {
    title: 'Vending Machine Locations in Lawrence, Kansas',
    description: 'Access verified vending machine locations in Lawrence, Kansas. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/lawrence-kansas',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/lawrence-kansas'
  }
}

export default function LawrenceKansasVendingLeadsPage() {
  return <PageClient />
}
