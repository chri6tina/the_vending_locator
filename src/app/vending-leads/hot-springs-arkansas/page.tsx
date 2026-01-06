import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Hot Springs, Arkansas | Premium Lead Database',
  description: 'Access verified vending machine locations in Hot Springs, Arkansas. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Hot Springs, vending leads Arkansas, vending machine placement Hot Springs, vending opportunities Hot Springs',
  openGraph: {
    title: 'Vending Machine Locations in Hot Springs, Arkansas',
    description: 'Access verified vending machine locations in Hot Springs, Arkansas. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/hot-springs-arkansas',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/hot-springs-arkansas'
  }

// Generate on-demand to reduce build memory usage
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function HotSpringsArkansasVendingLeadsPage() {
  return <PageClient />
}
