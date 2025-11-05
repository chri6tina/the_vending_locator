import WestCovinaCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in West Covina, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in West Covina, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business West Covina',
    'start vending business West Covina California',
    'West Covina vending permits',
    'vending machine locations West Covina',
    'West Covina vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-covina-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in West Covina, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for West Covina, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-covina-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in West Covina, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in West Covina, California',
    description: 'Complete guide with licensing, locations, and vending course for West Covina, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <WestCovinaCaliforniaHowToStartPage />
}
