import SanJoseCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in San Jose, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in San Jose, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business San Jose',
    'start vending business San Jose California',
    'San Jose vending permits',
    'vending machine locations San Jose',
    'San Jose vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/san-jose-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in San Jose, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for San Jose, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/san-jose-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in San Jose, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in San Jose, California',
    description: 'Complete guide with licensing, locations, and vending course for San Jose, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SanJoseCaliforniaHowToStartPage />
}
