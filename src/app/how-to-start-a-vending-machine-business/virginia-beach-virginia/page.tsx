import VirginiaBeachVirginiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Virginia Beach, Virginia (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Virginia Beach, Virginia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Virginia Beach',
    'start vending business Virginia Beach Virginia',
    'Virginia Beach vending permits',
    'vending machine locations Virginia Beach',
    'Virginia Beach vending course',
    'vending business guide Virginia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/virginia-beach-virginia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Virginia Beach, Virginia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Virginia Beach, Virginia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/virginia-beach-virginia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Virginia Beach, Virginia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Virginia Beach, Virginia',
    description: 'Complete guide with licensing, locations, and vending course for Virginia Beach, Virginia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <VirginiaBeachVirginiaHowToStartPage />
}
