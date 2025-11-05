import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Lancaster, Pennsylvania | Premium Lead Database',
  description: 'Access verified vending machine locations in Lancaster, Pennsylvania. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Lancaster, vending leads Pennsylvania, vending machine placement Lancaster, vending opportunities Lancaster',
  openGraph: {
    title: 'Vending Machine Locations in Lancaster, Pennsylvania',
    description: 'Access verified vending machine locations in Lancaster, Pennsylvania. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/lancaster-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/lancaster-pennsylvania'
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LancasterPennsylvaniaVendingLeadsPage() {
  return <PageClient />
}
