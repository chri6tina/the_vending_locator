import LakePlacidFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lake Placid, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lake Placid, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lake Placid',
    'start vending business Lake Placid, Florida',
    'Lake Placid vending permits',
    'vending machine locations Lake Placid',
    'Lake Placid vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-placid-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lake Placid, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lake Placid, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-placid-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lake Placid, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lake Placid, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Lake Placid, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LakePlacidFloridaHowToStartPage />
}
