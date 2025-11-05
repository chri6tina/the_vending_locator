import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Mankato, Minnesota | Premium Lead Database',
  description: 'Access verified vending machine locations in Mankato, Minnesota. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Mankato, vending leads Minnesota, vending machine placement Mankato, vending opportunities Mankato',
  openGraph: {
    title: 'Vending Machine Locations in Mankato, Minnesota',
    description: 'Access verified vending machine locations in Mankato, Minnesota. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/mankato-minnesota',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/mankato-minnesota'
  }
}

export default function MankatoMinnesotaVendingLeadsPage() {
  return <PageClient />
}
