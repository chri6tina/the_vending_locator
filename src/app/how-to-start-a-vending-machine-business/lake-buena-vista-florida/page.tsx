import LakeBuenaVistaFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lake Buena Vista, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lake Buena Vista, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lake Buena Vista',
    'start vending business Lake Buena Vista, Florida',
    'Lake Buena Vista vending permits',
    'vending machine locations Lake Buena Vista',
    'Lake Buena Vista vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-buena-vista-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lake Buena Vista, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lake Buena Vista, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-buena-vista-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lake Buena Vista, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lake Buena Vista, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Lake Buena Vista, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LakeBuenaVistaFloridaHowToStartPage />
}
