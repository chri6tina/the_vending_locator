import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Dubuque, Iowa | Premium Lead Database',
  description: 'Access verified vending machine locations in Dubuque, Iowa. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Dubuque, vending leads Iowa, vending machine placement Dubuque, vending opportunities Dubuque',
  openGraph: {
    title: 'Vending Machine Locations in Dubuque, Iowa',
    description: 'Access verified vending machine locations in Dubuque, Iowa. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/dubuque-iowa',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/dubuque-iowa'
  }

// Generate on-demand to reduce build memory usage
}

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function DubuqueIowaVendingLeadsPage() {
  return <PageClient />
}
