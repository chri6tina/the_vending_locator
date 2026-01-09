import BrownwoodTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Brownwood, Texas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Brownwood, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Brownwood',
    'start vending business Brownwood, Texas',
    'Brownwood vending permits',
    'vending machine locations Brownwood',
    'Brownwood vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/brownwood-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Brownwood, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Brownwood, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/brownwood-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Brownwood, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Brownwood, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Brownwood, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BrownwoodTexasHowToStartPage />
}
