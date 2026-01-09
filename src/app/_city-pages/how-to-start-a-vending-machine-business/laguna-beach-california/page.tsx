import LagunaBeachCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Laguna Beach, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Laguna Beach, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Laguna Beach',
    'start vending business Laguna Beach, California',
    'Laguna Beach vending permits',
    'vending machine locations Laguna Beach',
    'Laguna Beach vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/laguna-beach-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Laguna Beach, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Laguna Beach, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/laguna-beach-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Laguna Beach, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Laguna Beach, California',
    description: 'Complete guide with licensing, locations, and vending course for Laguna Beach, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LagunaBeachCaliforniaHowToStartPage />
}
