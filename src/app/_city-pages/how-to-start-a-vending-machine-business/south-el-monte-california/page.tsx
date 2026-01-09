import SouthElMonteCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in South El Monte, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in South El Monte, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business South El Monte',
    'start vending business South El Monte, California',
    'South El Monte vending permits',
    'vending machine locations South El Monte',
    'South El Monte vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-el-monte-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in South El Monte, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for South El Monte, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-el-monte-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in South El Monte, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in South El Monte, California',
    description: 'Complete guide with licensing, locations, and vending course for South El Monte, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SouthElMonteCaliforniaHowToStartPage />
}
