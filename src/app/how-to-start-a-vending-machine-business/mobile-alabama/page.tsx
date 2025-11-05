import MobileAlabamaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Mobile, Alabama (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Mobile, Alabama. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Mobile',
    'start vending business Mobile Alabama',
    'Mobile vending permits',
    'vending machine locations Mobile',
    'Mobile vending course',
    'vending business guide Alabama'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mobile-alabama'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Mobile, Alabama',
    description: 'Step-by-step guide with licensing, locations, and vending course for Mobile, Alabama',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mobile-alabama',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Mobile, Alabama'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Mobile, Alabama',
    description: 'Complete guide with licensing, locations, and vending course for Mobile, Alabama'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <MobileAlabamaHowToStartPage />
}
