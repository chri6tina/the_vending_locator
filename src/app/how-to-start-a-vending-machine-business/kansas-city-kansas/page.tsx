import KansasCityKansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Kansas City, Kansas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Kansas City, Kansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Kansas City',
    'start vending business Kansas City Kansas',
    'Kansas City vending permits',
    'vending machine locations Kansas City',
    'Kansas City vending course',
    'vending business guide Kansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kansas-city-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Kansas City, Kansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Kansas City, Kansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kansas-city-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Kansas City, Kansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Kansas City, Kansas',
    description: 'Complete guide with licensing, locations, and vending course for Kansas City, Kansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <KansasCityKansasHowToStartPage />
}
