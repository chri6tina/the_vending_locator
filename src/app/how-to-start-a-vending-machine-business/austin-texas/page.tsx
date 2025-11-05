import AustinTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Austin, Texas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Austin, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Austin',
    'start vending business Austin Texas',
    'Austin vending permits',
    'vending machine locations Austin',
    'Austin vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/austin-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Austin, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Austin, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/austin-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Austin, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Austin, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Austin, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <AustinTexasHowToStartPage />
}
