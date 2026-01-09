import TwinFallsIdahoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Twin Falls, Idaho (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Twin Falls, Idaho. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Twin Falls',
    'start vending business Twin Falls, Idaho',
    'Twin Falls vending permits',
    'vending machine locations Twin Falls',
    'Twin Falls vending course',
    'vending business guide Idaho'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/twin-falls'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Twin Falls, Idaho',
    description: 'Step-by-step guide with licensing, locations, and vending course for Twin Falls, Idaho',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/twin-falls',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Twin Falls, Idaho'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Twin Falls, Idaho',
    description: 'Complete guide with licensing, locations, and vending course for Twin Falls, Idaho'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <TwinFallsIdahoHowToStartPage />
}
