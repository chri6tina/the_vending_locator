import JupiterInletColonyFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Jupiter Inlet Colony, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Jupiter Inlet Colony, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Jupiter Inlet Colony',
    'start vending business Jupiter Inlet Colony, Florida',
    'Jupiter Inlet Colony vending permits',
    'vending machine locations Jupiter Inlet Colony',
    'Jupiter Inlet Colony vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/jupiter-inlet-colony-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Jupiter Inlet Colony, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Jupiter Inlet Colony, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/jupiter-inlet-colony-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Jupiter Inlet Colony, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Jupiter Inlet Colony, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Jupiter Inlet Colony, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <JupiterInletColonyFloridaHowToStartPage />
}
