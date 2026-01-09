import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Grand Forks, North Dakota | Premium Lead Database',
  description: 'Access verified vending machine locations in Grand Forks, North Dakota. Find profitable placement opportunities with detailed business insights and contact information.',
  keywords: 'vending machine locations Grand Forks, vending leads North Dakota, vending machine placement Grand Forks, vending opportunities Grand Forks',
  openGraph: {
    title: 'Vending Machine Locations in Grand Forks, North Dakota',
    description: 'Access verified vending machine locations in Grand Forks, North Dakota. Find profitable placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/grand-forks-north-dakota',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/grand-forks-north-dakota'
  }

// Generate on-demand to reduce build memory usage
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function GrandForksNorthDakotaVendingLeadsPage() {
  return <PageClient />
}
