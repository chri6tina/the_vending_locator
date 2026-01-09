import VeniceFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Venice, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Venice, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Venice',
    'start vending business Venice, Florida',
    'Venice vending permits',
    'vending machine locations Venice',
    'Venice vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/venice-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Venice, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Venice, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/venice-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Venice, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Venice, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Venice, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <VeniceFloridaHowToStartPage />
}
