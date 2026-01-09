import PinellasParkFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pinellas Park, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Pinellas Park, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pinellas Park',
    'start vending business Pinellas Park, Florida',
    'Pinellas Park vending permits',
    'vending machine locations Pinellas Park',
    'Pinellas Park vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pinellas-park-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pinellas Park, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pinellas Park, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pinellas-park-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pinellas Park, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pinellas Park, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Pinellas Park, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PinellasParkFloridaHowToStartPage />
}
