import IndianHarbourBeachFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Indian Harbour Beach, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Indian Harbour Beach, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Indian Harbour Beach',
    'start vending business Indian Harbour Beach, Florida',
    'Indian Harbour Beach vending permits',
    'vending machine locations Indian Harbour Beach',
    'Indian Harbour Beach vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/indian-harbour-beach-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Indian Harbour Beach, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Indian Harbour Beach, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/indian-harbour-beach-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Indian Harbour Beach, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Indian Harbour Beach, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Indian Harbour Beach, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <IndianHarbourBeachFloridaHowToStartPage />
}
