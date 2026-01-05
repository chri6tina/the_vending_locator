import WinterGardenFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Winter Garden, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Winter Garden, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Winter Garden',
    'start vending business Winter Garden, Florida',
    'Winter Garden vending permits',
    'vending machine locations Winter Garden',
    'Winter Garden vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/winter-garden-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Winter Garden, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Winter Garden, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/winter-garden-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Winter Garden, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Winter Garden, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Winter Garden, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WinterGardenFloridaHowToStartPage />
}
