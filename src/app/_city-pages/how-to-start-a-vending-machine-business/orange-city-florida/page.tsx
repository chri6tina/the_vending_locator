import OrangeCityFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Orange City, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Orange City, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Orange City',
    'start vending business Orange City, Florida',
    'Orange City vending permits',
    'vending machine locations Orange City',
    'Orange City vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/orange-city-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Orange City, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Orange City, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/orange-city-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Orange City, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Orange City, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Orange City, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OrangeCityFloridaHowToStartPage />
}
