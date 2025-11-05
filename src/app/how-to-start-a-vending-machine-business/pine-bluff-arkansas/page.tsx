import PineBluffArkansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pine Bluff, Arkansas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Pine Bluff, Arkansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pine Bluff',
    'start vending business Pine Bluff Arkansas',
    'Pine Bluff vending permits',
    'vending machine locations Pine Bluff',
    'Pine Bluff vending course',
    'vending business guide Arkansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pine-bluff-arkansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pine Bluff, Arkansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pine Bluff, Arkansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pine-bluff-arkansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pine Bluff, Arkansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pine Bluff, Arkansas',
    description: 'Complete guide with licensing, locations, and vending course for Pine Bluff, Arkansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <PineBluffArkansasHowToStartPage />
}
