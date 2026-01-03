import SanFranciscoCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in San Francisco, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in San Francisco, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business San Francisco',
    'start vending business San Francisco California',
    'San Francisco vending permits',
    'vending machine locations San Francisco',
    'San Francisco vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/san-francisco-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in San Francisco, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for San Francisco, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/san-francisco-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in San Francisco, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in San Francisco, California',
    description: 'Complete guide with licensing, locations, and vending course for San Francisco, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SanFranciscoCaliforniaHowToStartPage />
}
