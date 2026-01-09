import LakeWorthFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lake Worth, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lake Worth, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lake Worth',
    'start vending business Lake Worth, Florida',
    'Lake Worth vending permits',
    'vending machine locations Lake Worth',
    'Lake Worth vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-worth-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lake Worth, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lake Worth, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-worth-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lake Worth, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lake Worth, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Lake Worth, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LakeWorthFloridaHowToStartPage />
}
