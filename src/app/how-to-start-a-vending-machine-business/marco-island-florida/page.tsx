import MarcoIslandFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Marco Island, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Marco Island, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Marco Island',
    'start vending business Marco Island, Florida',
    'Marco Island vending permits',
    'vending machine locations Marco Island',
    'Marco Island vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/marco-island-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Marco Island, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Marco Island, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/marco-island-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Marco Island, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Marco Island, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Marco Island, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MarcoIslandFloridaHowToStartPage />
}
