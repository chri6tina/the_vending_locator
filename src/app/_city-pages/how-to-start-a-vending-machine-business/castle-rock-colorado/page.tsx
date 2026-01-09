import CastleRockColoradoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Castle Rock, Colorado (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Castle Rock, Colorado. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Castle Rock',
    'start vending business Castle Rock, Colorado',
    'Castle Rock vending permits',
    'vending machine locations Castle Rock',
    'Castle Rock vending course',
    'vending business guide Colorado'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/castle-rock-colorado'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Castle Rock, Colorado',
    description: 'Step-by-step guide with licensing, locations, and vending course for Castle Rock, Colorado',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/castle-rock-colorado',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Castle Rock, Colorado'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Castle Rock, Colorado',
    description: 'Complete guide with licensing, locations, and vending course for Castle Rock, Colorado'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CastleRockColoradoHowToStartPage />
}
