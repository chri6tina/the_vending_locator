import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Caldwell, Idaho | Premium Lead Database',
  description: 'Access verified vending machine locations in Caldwell, Idaho. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Caldwell, vending leads Idaho, vending machine placement Caldwell, vending opportunities Caldwell',
  openGraph: {
    title: 'Vending Machine Locations in Caldwell, Idaho',
    description: 'Access verified vending machine locations in Caldwell, Idaho. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/caldwell-idaho',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/caldwell-idaho'
  }

// Generate on-demand to reduce build memory usage
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function CaldwellIdahoVendingLeadsPage() {
  return <PageClient />
}
