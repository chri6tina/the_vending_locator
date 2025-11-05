import OaklandCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Oakland, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Oakland, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Oakland',
    'start vending business Oakland California',
    'Oakland vending permits',
    'vending machine locations Oakland',
    'Oakland vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oakland-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Oakland, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Oakland, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oakland-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Oakland, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Oakland, California',
    description: 'Complete guide with licensing, locations, and vending course for Oakland, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <OaklandCaliforniaHowToStartPage />
}
