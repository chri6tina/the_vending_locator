import AlbanyNewYorkHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Albany, New York (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Albany, New York. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Albany',
    'start vending business Albany New York',
    'Albany vending permits',
    'vending machine locations Albany',
    'Albany vending course',
    'vending business guide New York'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/albany-new-york'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Albany, New York',
    description: 'Step-by-step guide with licensing, locations, and vending course for Albany, New York',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/albany-new-york',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Albany, New York'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Albany, New York',
    description: 'Complete guide with licensing, locations, and vending course for Albany, New York'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <AlbanyNewYorkHowToStartPage />
}
