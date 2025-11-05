import LincolnNebraskaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lincoln, Nebraska (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Lincoln, Nebraska. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lincoln',
    'start vending business Lincoln Nebraska',
    'Lincoln vending permits',
    'vending machine locations Lincoln',
    'Lincoln vending course',
    'vending business guide Nebraska'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lincoln-nebraska'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lincoln, Nebraska',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lincoln, Nebraska',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lincoln-nebraska',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lincoln, Nebraska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lincoln, Nebraska',
    description: 'Complete guide with licensing, locations, and vending course for Lincoln, Nebraska'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <LincolnNebraskaHowToStartPage />
}
