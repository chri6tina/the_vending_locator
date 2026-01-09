import FallRiverMassachusettsHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fall River, Massachusetts (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Fall River, Massachusetts. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fall River',
    'start vending business Fall River Massachusetts',
    'Fall River vending permits',
    'vending machine locations Fall River',
    'Fall River vending course',
    'vending business guide Massachusetts'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fall-river-massachusetts'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fall River, Massachusetts',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fall River, Massachusetts',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fall-river-massachusetts',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fall River, Massachusetts'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fall River, Massachusetts',
    description: 'Complete guide with licensing, locations, and vending course for Fall River, Massachusetts'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FallRiverMassachusettsHowToStartPage />
}
