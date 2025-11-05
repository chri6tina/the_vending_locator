import SanMateoCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in San Mateo, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in San Mateo, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business San Mateo',
    'start vending business San Mateo California',
    'San Mateo vending permits',
    'vending machine locations San Mateo',
    'San Mateo vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/san-mateo-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in San Mateo, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for San Mateo, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/san-mateo-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in San Mateo, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in San Mateo, California',
    description: 'Complete guide with licensing, locations, and vending course for San Mateo, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SanMateoCaliforniaHowToStartPage />
}
