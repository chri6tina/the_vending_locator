import LongBeachMississippiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Long Beach, Mississippi (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Long Beach, Mississippi. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Long Beach',
    'start vending business Long Beach, Mississippi',
    'Long Beach vending permits',
    'vending machine locations Long Beach',
    'Long Beach vending course',
    'vending business guide Mississippi'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/long-beach-mississippi'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Long Beach, Mississippi',
    description: 'Step-by-step guide with licensing, locations, and vending course for Long Beach, Mississippi',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/long-beach-mississippi',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Long Beach, Mississippi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Long Beach, Mississippi',
    description: 'Complete guide with licensing, locations, and vending course for Long Beach, Mississippi'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LongBeachMississippiHowToStartPage />
}
