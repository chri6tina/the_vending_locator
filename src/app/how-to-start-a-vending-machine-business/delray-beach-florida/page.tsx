import DelrayBeachFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Delray Beach, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Delray Beach, F. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Delray Beach',
    'start vending business Delray Beach Florida',
    'Delray Beach vending permits',
    'vending machine locations Delray Beach',
    'Delray Beach vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/delray-beach-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Delray Beach, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Delray Beach, F',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/delray-beach-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Delray Beach, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Delray Beach, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Delray Beach, F'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DelrayBeachFloridaHowToStartPage />
}



