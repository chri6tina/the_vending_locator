import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Manhattan, Kansas | Premium Lead Database',
  description: 'Access verified vending machine locations in Manhattan, Kansas. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Manhattan, vending leads Kansas, vending machine placement Manhattan, vending opportunities Manhattan',
  openGraph: {
    title: 'Vending Machine Locations in Manhattan, Kansas',
    description: 'Access verified vending machine locations in Manhattan, Kansas. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/manhattan-kansas',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/manhattan-kansas'
  }
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ManhattanKansasVendingLeadsPage() {
  return <PageClient />
}
