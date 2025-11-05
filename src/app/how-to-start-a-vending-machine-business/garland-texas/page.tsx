import GarlandTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Garland, Texas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Garland, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Garland',
    'start vending business Garland Texas',
    'Garland vending permits',
    'vending machine locations Garland',
    'Garland vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/garland-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Garland, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Garland, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/garland-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Garland, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Garland, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Garland, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <GarlandTexasHowToStartPage />
}
