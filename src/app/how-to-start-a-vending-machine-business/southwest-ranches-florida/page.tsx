import SouthwestRanchesFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Southwest Ranches, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Southwest Ranches, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Southwest Ranches',
    'start vending business Southwest Ranches, Florida',
    'Southwest Ranches vending permits',
    'vending machine locations Southwest Ranches',
    'Southwest Ranches vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/southwest-ranches-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Southwest Ranches, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Southwest Ranches, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/southwest-ranches-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Southwest Ranches, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Southwest Ranches, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Southwest Ranches, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SouthwestRanchesFloridaHowToStartPage />
}
