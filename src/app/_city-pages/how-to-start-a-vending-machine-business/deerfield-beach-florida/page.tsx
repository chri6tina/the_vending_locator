import DeerfieldBeachFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Deerfield Beach, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Deerfield Beach, F. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Deerfield Beach',
    'start vending business Deerfield Beach Florida',
    'Deerfield Beach vending permits',
    'vending machine locations Deerfield Beach',
    'Deerfield Beach vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/deerfield-beach-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Deerfield Beach, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Deerfield Beach, F',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/deerfield-beach-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Deerfield Beach, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Deerfield Beach, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Deerfield Beach, F'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DeerfieldBeachFloridaHowToStartPage />
}



