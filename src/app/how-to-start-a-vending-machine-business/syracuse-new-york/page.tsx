import SyracuseNewYorkHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Syracuse, New York (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Syracuse, New York. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Syracuse',
    'start vending business Syracuse New York',
    'Syracuse vending permits',
    'vending machine locations Syracuse',
    'Syracuse vending course',
    'vending business guide New York'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/syracuse-new-york'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Syracuse, New York',
    description: 'Step-by-step guide with licensing, locations, and vending course for Syracuse, New York',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/syracuse-new-york',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Syracuse, New York'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Syracuse, New York',
    description: 'Complete guide with licensing, locations, and vending course for Syracuse, New York'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <SyracuseNewYorkHowToStartPage />
}
