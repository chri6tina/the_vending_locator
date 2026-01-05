import BartowFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bartow, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Bartow, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bartow',
    'start vending business Bartow, Florida',
    'Bartow vending permits',
    'vending machine locations Bartow',
    'Bartow vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bartow-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bartow, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bartow, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bartow-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bartow, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bartow, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Bartow, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BartowFloridaHowToStartPage />
}
