import LakeAlfredFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lake Alfred, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lake Alfred, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lake Alfred',
    'start vending business Lake Alfred, Florida',
    'Lake Alfred vending permits',
    'vending machine locations Lake Alfred',
    'Lake Alfred vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-alfred-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lake Alfred, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lake Alfred, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-alfred-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lake Alfred, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lake Alfred, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Lake Alfred, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LakeAlfredFloridaHowToStartPage />
}
