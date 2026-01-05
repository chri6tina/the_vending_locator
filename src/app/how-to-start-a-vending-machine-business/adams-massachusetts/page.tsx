import AdamsMassachusettsHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Adams, Massachusetts (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Adams, Massachusetts. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Adams',
    'start vending business Adams, Massachusetts',
    'Adams vending permits',
    'vending machine locations Adams',
    'Adams vending course',
    'vending business guide Massachusetts'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/adams-massachusetts'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Adams, Massachusetts',
    description: 'Step-by-step guide with licensing, locations, and vending course for Adams, Massachusetts',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/adams-massachusetts',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Adams, Massachusetts'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Adams, Massachusetts',
    description: 'Complete guide with licensing, locations, and vending course for Adams, Massachusetts'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AdamsMassachusettsHowToStartPage />
}
