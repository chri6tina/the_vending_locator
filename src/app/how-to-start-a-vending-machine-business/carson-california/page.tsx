import CarsonCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Carson, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Carson, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Carson',
    'start vending business Carson California',
    'Carson vending permits',
    'vending machine locations Carson',
    'Carson vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/carson-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Carson, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Carson, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/carson-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Carson, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Carson, California',
    description: 'Complete guide with licensing, locations, and vending course for Carson, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CarsonCaliforniaHowToStartPage />
}
