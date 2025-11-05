import FortMyersFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fort Myers, Florida (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Fort Myers, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fort Myers',
    'start vending business Fort Myers Florida',
    'Fort Myers vending permits',
    'vending machine locations Fort Myers',
    'Fort Myers vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fort-myers-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fort Myers, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fort Myers, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fort-myers-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fort Myers, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fort Myers, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Fort Myers, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <FortMyersFloridaHowToStartPage />
}
