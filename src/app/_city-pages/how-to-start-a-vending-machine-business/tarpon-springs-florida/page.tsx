import TarponSpringsFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Tarpon Springs, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Tarpon Springs, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Tarpon Springs',
    'start vending business Tarpon Springs, Florida',
    'Tarpon Springs vending permits',
    'vending machine locations Tarpon Springs',
    'Tarpon Springs vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tarpon-springs-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Tarpon Springs, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Tarpon Springs, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tarpon-springs-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Tarpon Springs, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Tarpon Springs, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Tarpon Springs, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <TarponSpringsFloridaHowToStartPage />
}
