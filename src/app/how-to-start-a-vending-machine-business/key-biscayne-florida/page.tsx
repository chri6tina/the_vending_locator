import KeyBiscayneFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Key Biscayne, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Key Biscayne, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Key Biscayne',
    'start vending business Key Biscayne, Florida',
    'Key Biscayne vending permits',
    'vending machine locations Key Biscayne',
    'Key Biscayne vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/key-biscayne-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Key Biscayne, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Key Biscayne, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/key-biscayne-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Key Biscayne, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Key Biscayne, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Key Biscayne, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <KeyBiscayneFloridaHowToStartPage />
}
