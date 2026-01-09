import EnglewoodFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Englewood, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Englewood, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Englewood',
    'start vending business Englewood, Florida',
    'Englewood vending permits',
    'vending machine locations Englewood',
    'Englewood vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/englewood-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Englewood, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Englewood, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/englewood-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Englewood, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Englewood, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Englewood, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <EnglewoodFloridaHowToStartPage />
}
