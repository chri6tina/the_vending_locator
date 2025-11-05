import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Lawton, Oklahoma | Premium Lead Database',
  description: 'Access verified vending machine locations in Lawton, Oklahoma. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Lawton, vending leads Oklahoma, vending machine placement Lawton, vending opportunities Lawton',
  openGraph: {
    title: 'Vending Machine Locations in Lawton, Oklahoma',
    description: 'Access verified vending machine locations in Lawton, Oklahoma. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/lawton-oklahoma',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/lawton-oklahoma'
  }
}

export default function LawtonOklahomaVendingLeadsPage() {
  return <PageClient />
}
