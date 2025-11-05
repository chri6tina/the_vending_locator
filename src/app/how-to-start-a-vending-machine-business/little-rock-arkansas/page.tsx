import LittleRockArkansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Little Rock, Arkansas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Little Rock, Arkansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Little Rock',
    'start vending business Little Rock Arkansas',
    'Little Rock vending permits',
    'vending machine locations Little Rock',
    'Little Rock vending course',
    'vending business guide Arkansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/little-rock-arkansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Little Rock, Arkansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Little Rock, Arkansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/little-rock-arkansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Little Rock, Arkansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Little Rock, Arkansas',
    description: 'Complete guide with licensing, locations, and vending course for Little Rock, Arkansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <LittleRockArkansasHowToStartPage />
}
