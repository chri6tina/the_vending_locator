import DaniaBeachFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Dania Beach, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Dania Beach, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Dania Beach',
    'start vending business Dania Beach, Florida',
    'Dania Beach vending permits',
    'vending machine locations Dania Beach',
    'Dania Beach vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dania-beach-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Dania Beach, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Dania Beach, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dania-beach-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Dania Beach, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Dania Beach, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Dania Beach, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DaniaBeachFloridaHowToStartPage />
}
