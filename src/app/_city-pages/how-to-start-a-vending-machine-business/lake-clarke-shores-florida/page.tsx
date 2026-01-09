import LakeClarkeShoresFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lake Clarke Shores, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lake Clarke Shores, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lake Clarke Shores',
    'start vending business Lake Clarke Shores, Florida',
    'Lake Clarke Shores vending permits',
    'vending machine locations Lake Clarke Shores',
    'Lake Clarke Shores vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-clarke-shores-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lake Clarke Shores, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lake Clarke Shores, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-clarke-shores-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lake Clarke Shores, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lake Clarke Shores, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Lake Clarke Shores, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LakeClarkeShoresFloridaHowToStartPage />
}
