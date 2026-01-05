import MelbourneBeachFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Melbourne Beach, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Melbourne Beach, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Melbourne Beach',
    'start vending business Melbourne Beach, Florida',
    'Melbourne Beach vending permits',
    'vending machine locations Melbourne Beach',
    'Melbourne Beach vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/melbourne-beach-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Melbourne Beach, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Melbourne Beach, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/melbourne-beach-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Melbourne Beach, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Melbourne Beach, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Melbourne Beach, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MelbourneBeachFloridaHowToStartPage />
}
