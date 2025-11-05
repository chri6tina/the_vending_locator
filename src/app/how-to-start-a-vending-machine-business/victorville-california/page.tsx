import VictorvilleCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Victorville, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Victorville, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Victorville',
    'start vending business Victorville California',
    'Victorville vending permits',
    'vending machine locations Victorville',
    'Victorville vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/victorville-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Victorville, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Victorville, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/victorville-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Victorville, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Victorville, California',
    description: 'Complete guide with licensing, locations, and vending course for Victorville, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <VictorvilleCaliforniaHowToStartPage />
}
