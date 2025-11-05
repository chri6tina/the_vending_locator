import TylerTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Tyler, Texas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Tyler, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Tyler',
    'start vending business Tyler Texas',
    'Tyler vending permits',
    'vending machine locations Tyler',
    'Tyler vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tyler-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Tyler, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Tyler, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tyler-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Tyler, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Tyler, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Tyler, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <TylerTexasHowToStartPage />
}
