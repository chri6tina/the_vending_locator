import LongBeachNewYorkHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Long Beach, New York (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Long Beach, New York. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Long Beach',
    'start vending business Long Beach, New York',
    'Long Beach vending permits',
    'vending machine locations Long Beach',
    'Long Beach vending course',
    'vending business guide New York'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/long-beach-new-york'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Long Beach, New York',
    description: 'Step-by-step guide with licensing, locations, and vending course for Long Beach, New York',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/long-beach-new-york',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Long Beach, New York'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Long Beach, New York',
    description: 'Complete guide with licensing, locations, and vending course for Long Beach, New York'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LongBeachNewYorkHowToStartPage />
}
