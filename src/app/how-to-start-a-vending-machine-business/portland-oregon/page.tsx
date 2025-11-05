import PortlandOregonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Portland, Oregon (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Portland, Oregon. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Portland',
    'start vending business Portland Oregon',
    'Portland vending permits',
    'vending machine locations Portland',
    'Portland vending course',
    'vending business guide Oregon'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/portland-oregon'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Portland, Oregon',
    description: 'Step-by-step guide with licensing, locations, and vending course for Portland, Oregon',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/portland-oregon',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Portland, Oregon'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Portland, Oregon',
    description: 'Complete guide with licensing, locations, and vending course for Portland, Oregon'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PortlandOregonHowToStartPage />
}
