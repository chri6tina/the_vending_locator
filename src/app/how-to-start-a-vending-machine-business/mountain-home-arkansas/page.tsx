import MountainHomeArkansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Mountain Home, Arkansas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Mountain Home, Arkansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Mountain Home',
    'start vending business Mountain Home, Arkansas',
    'Mountain Home vending permits',
    'vending machine locations Mountain Home',
    'Mountain Home vending course',
    'vending business guide Arkansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mountain-home-arkansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Mountain Home, Arkansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Mountain Home, Arkansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mountain-home-arkansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Mountain Home, Arkansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Mountain Home, Arkansas',
    description: 'Complete guide with licensing, locations, and vending course for Mountain Home, Arkansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MountainHomeArkansasHowToStartPage />
}
