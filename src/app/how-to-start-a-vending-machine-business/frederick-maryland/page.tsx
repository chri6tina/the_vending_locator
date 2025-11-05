import FrederickMarylandHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Frederick, Maryland (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Frederick, Maryland. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Frederick',
    'start vending business Frederick Maryland',
    'Frederick vending permits',
    'vending machine locations Frederick',
    'Frederick vending course',
    'vending business guide Maryland'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/frederick-maryland'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Frederick, Maryland',
    description: 'Step-by-step guide with licensing, locations, and vending course for Frederick, Maryland',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/frederick-maryland',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Frederick, Maryland'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Frederick, Maryland',
    description: 'Complete guide with licensing, locations, and vending course for Frederick, Maryland'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <FrederickMarylandHowToStartPage />
}
