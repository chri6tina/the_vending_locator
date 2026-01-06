import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Pahrump, Nevada | Premium Lead Database',
  description: 'Access verified vending machine locations in Pahrump, Nevada. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Pahrump, vending leads Nevada, vending machine placement Pahrump, vending opportunities Pahrump',
  openGraph: {
    title: 'Vending Machine Locations in Pahrump, Nevada',
    description: 'Access verified vending machine locations in Pahrump, Nevada. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/pahrump-nevada',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/pahrump-nevada'
  }

// Generate on-demand to reduce build memory usage
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function PahrumpNevadaVendingLeadsPage() {
  return <PageClient />
}
