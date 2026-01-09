import BeaverFallsPennsylvaniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Beaver Falls, Pennsylvania (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Beaver Falls, Pennsylvania. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Beaver Falls',
    'start vending business Beaver Falls, Pennsylvania',
    'Beaver Falls vending permits',
    'vending machine locations Beaver Falls',
    'Beaver Falls vending course',
    'vending business guide Pennsylvania'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/beaver-falls-pennsylvania'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Beaver Falls, Pennsylvania',
    description: 'Step-by-step guide with licensing, locations, and vending course for Beaver Falls, Pennsylvania',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/beaver-falls-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Beaver Falls, Pennsylvania'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Beaver Falls, Pennsylvania',
    description: 'Complete guide with licensing, locations, and vending course for Beaver Falls, Pennsylvania'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BeaverFallsPennsylvaniaHowToStartPage />
}
