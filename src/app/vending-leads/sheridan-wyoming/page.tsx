import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Sheridan, Wyoming | Premium Lead Database',
  description: 'Access verified vending machine locations in Sheridan, Wyoming. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Sheridan, vending leads Wyoming, vending machine placement Sheridan, vending opportunities Sheridan',
  openGraph: {
    title: 'Vending Machine Locations in Sheridan, Wyoming',
    description: 'Access verified vending machine locations in Sheridan, Wyoming. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/sheridan-wyoming',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/sheridan-wyoming'
  }
}

export default function SheridanWyomingVendingLeadsPage() {
  return <PageClient />
}
