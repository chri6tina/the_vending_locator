import BrentwoodCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Brentwood, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Brentwood, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Brentwood',
    'start vending business Brentwood, California',
    'Brentwood vending permits',
    'vending machine locations Brentwood',
    'Brentwood vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/brentwood-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Brentwood, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Brentwood, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/brentwood-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Brentwood, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Brentwood, California',
    description: 'Complete guide with licensing, locations, and vending course for Brentwood, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BrentwoodCaliforniaHowToStartPage />
}
