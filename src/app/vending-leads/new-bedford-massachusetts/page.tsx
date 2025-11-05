import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in New Bedford, Massachusetts | Premium Lead Database',
  description: 'Access verified vending machine locations in New Bedford, Massachusetts. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations New Bedford, vending leads Massachusetts, vending machine placement New Bedford, vending opportunities New Bedford',
  openGraph: {
    title: 'Vending Machine Locations in New Bedford, Massachusetts',
    description: 'Access verified vending machine locations in New Bedford, Massachusetts. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/new-bedford-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/new-bedford-massachusetts'
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function NewBedfordMassachusettsVendingLeadsPage() {
  return <PageClient />
}
