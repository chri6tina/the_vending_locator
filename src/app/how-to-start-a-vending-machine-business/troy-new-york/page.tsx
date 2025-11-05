import TroyNewYorkHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Troy, New York (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Troy, New York. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Troy',
    'start vending business Troy New York',
    'Troy vending permits',
    'vending machine locations Troy',
    'Troy vending course',
    'vending business guide New York'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/troy-new-york'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Troy, New York',
    description: 'Step-by-step guide with licensing, locations, and vending course for Troy, New York',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/troy-new-york',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Troy, New York'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Troy, New York',
    description: 'Complete guide with licensing, locations, and vending course for Troy, New York'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <TroyNewYorkHowToStartPage />
}
