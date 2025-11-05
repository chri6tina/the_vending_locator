import CoralSpringsFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Coral Springs, Florida (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Coral Springs, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Coral Springs',
    'start vending business Coral Springs Florida',
    'Coral Springs vending permits',
    'vending machine locations Coral Springs',
    'Coral Springs vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/coral-springs-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Coral Springs, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Coral Springs, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/coral-springs-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Coral Springs, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Coral Springs, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Coral Springs, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <CoralSpringsFloridaHowToStartPage />
}
