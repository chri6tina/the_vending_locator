import LakeCityFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lake City, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lake City, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lake City',
    'start vending business Lake City, Florida',
    'Lake City vending permits',
    'vending machine locations Lake City',
    'Lake City vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-city-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lake City, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lake City, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-city-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lake City, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lake City, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Lake City, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LakeCityFloridaHowToStartPage />
}
