import EastLosAngelesCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in East Los Angeles, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in East Los Angeles, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business East Los Angeles',
    'start vending business East Los Angeles, California',
    'East Los Angeles vending permits',
    'vending machine locations East Los Angeles',
    'East Los Angeles vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/east-los-angeles-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in East Los Angeles, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for East Los Angeles, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/east-los-angeles-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in East Los Angeles, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in East Los Angeles, California',
    description: 'Complete guide with licensing, locations, and vending course for East Los Angeles, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <EastLosAngelesCaliforniaHowToStartPage />
}
