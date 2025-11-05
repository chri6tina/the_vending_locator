import McallenTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in McAllen, Texas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in McAllen, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business McAllen',
    'start vending business McAllen Texas',
    'McAllen vending permits',
    'vending machine locations McAllen',
    'McAllen vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mcallen-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in McAllen, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for McAllen, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mcallen-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in McAllen, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in McAllen, Texas',
    description: 'Complete guide with licensing, locations, and vending course for McAllen, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <McallenTexasHowToStartPage />
}
