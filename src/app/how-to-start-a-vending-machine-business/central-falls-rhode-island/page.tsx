import CentralFallsRhodeIslandHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Central Falls, Rhode Island (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Central Falls, Rhode Island. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Central Falls',
    'start vending business Central Falls, Rhode Island',
    'Central Falls vending permits',
    'vending machine locations Central Falls',
    'Central Falls vending course',
    'vending business guide Rhode Island'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/central-falls-rhode-island'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Central Falls, Rhode Island',
    description: 'Step-by-step guide with licensing, locations, and vending course for Central Falls, Rhode Island',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/central-falls-rhode-island',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Central Falls, Rhode Island'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Central Falls, Rhode Island',
    description: 'Complete guide with licensing, locations, and vending course for Central Falls, Rhode Island'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CentralFallsRhodeIslandHowToStartPage />
}
