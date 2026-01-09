import SouthBayFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in South Bay, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in South Bay, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business South Bay',
    'start vending business South Bay, Florida',
    'South Bay vending permits',
    'vending machine locations South Bay',
    'South Bay vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-bay-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in South Bay, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for South Bay, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-bay-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in South Bay, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in South Bay, Florida',
    description: 'Complete guide with licensing, locations, and vending course for South Bay, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SouthBayFloridaHowToStartPage />
}
