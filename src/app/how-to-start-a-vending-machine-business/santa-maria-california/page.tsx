import SantaMariaCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Santa Maria, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Santa Maria, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Santa Maria',
    'start vending business Santa Maria California',
    'Santa Maria vending permits',
    'vending machine locations Santa Maria',
    'Santa Maria vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/santa-maria-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Santa Maria, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Santa Maria, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/santa-maria-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Santa Maria, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Santa Maria, California',
    description: 'Complete guide with licensing, locations, and vending course for Santa Maria, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <SantaMariaCaliforniaHowToStartPage />
}
