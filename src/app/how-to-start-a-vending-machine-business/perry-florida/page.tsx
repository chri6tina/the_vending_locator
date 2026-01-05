import PerryFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Perry, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Perry, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Perry',
    'start vending business Perry, Florida',
    'Perry vending permits',
    'vending machine locations Perry',
    'Perry vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/perry-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Perry, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Perry, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/perry-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Perry, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Perry, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Perry, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PerryFloridaHowToStartPage />
}
