import ConwayArkansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Conway, Arkansas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Conway, Arkansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Conway',
    'start vending business Conway Arkansas',
    'Conway vending permits',
    'vending machine locations Conway',
    'Conway vending course',
    'vending business guide Arkansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/conway-arkansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Conway, Arkansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Conway, Arkansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/conway-arkansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Conway, Arkansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Conway, Arkansas',
    description: 'Complete guide with licensing, locations, and vending course for Conway, Arkansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <ConwayArkansasHowToStartPage />
}
