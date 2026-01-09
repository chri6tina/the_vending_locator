import DesertHotSpringsCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Desert Hot Springs, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Desert Hot Springs, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Desert Hot Springs',
    'start vending business Desert Hot Springs, California',
    'Desert Hot Springs vending permits',
    'vending machine locations Desert Hot Springs',
    'Desert Hot Springs vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/desert-hot-springs-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Desert Hot Springs, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Desert Hot Springs, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/desert-hot-springs-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Desert Hot Springs, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Desert Hot Springs, California',
    description: 'Complete guide with licensing, locations, and vending course for Desert Hot Springs, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DesertHotSpringsCaliforniaHowToStartPage />
}
