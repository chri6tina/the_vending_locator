import CharlestonWestVirginiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Charleston, West Virginia (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Charleston, West Virginia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Charleston',
    'start vending business Charleston West Virginia',
    'Charleston vending permits',
    'vending machine locations Charleston',
    'Charleston vending course',
    'vending business guide West Virginia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/charleston-west-virginia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Charleston, West Virginia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Charleston, West Virginia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/charleston-west-virginia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Charleston, West Virginia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Charleston, West Virginia',
    description: 'Complete guide with licensing, locations, and vending course for Charleston, West Virginia'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <CharlestonWestVirginiaHowToStartPage />
}
