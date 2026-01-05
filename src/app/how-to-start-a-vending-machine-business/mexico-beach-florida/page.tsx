import MexicoBeachFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Mexico Beach, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Mexico Beach, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Mexico Beach',
    'start vending business Mexico Beach, Florida',
    'Mexico Beach vending permits',
    'vending machine locations Mexico Beach',
    'Mexico Beach vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mexico-beach-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Mexico Beach, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Mexico Beach, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mexico-beach-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Mexico Beach, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Mexico Beach, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Mexico Beach, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MexicoBeachFloridaHowToStartPage />
}
