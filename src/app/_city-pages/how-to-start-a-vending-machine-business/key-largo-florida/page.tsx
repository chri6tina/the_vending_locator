import KeyLargoFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Key Largo, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Key Largo, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Key Largo',
    'start vending business Key Largo, Florida',
    'Key Largo vending permits',
    'vending machine locations Key Largo',
    'Key Largo vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/key-largo-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Key Largo, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Key Largo, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/key-largo-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Key Largo, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Key Largo, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Key Largo, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <KeyLargoFloridaHowToStartPage />
}
