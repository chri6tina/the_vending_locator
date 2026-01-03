import GrandIslandNebraskaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Grand Island, Nebraska (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Grand Island, Nebraska. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Grand Island',
    'start vending business Grand Island Nebraska',
    'Grand Island vending permits',
    'vending machine locations Grand Island',
    'Grand Island vending course',
    'vending business guide Nebraska'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/grand-island-nebraska'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Grand Island, Nebraska',
    description: 'Step-by-step guide with licensing, locations, and vending course for Grand Island, Nebraska',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/grand-island-nebraska',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Grand Island, Nebraska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Grand Island, Nebraska',
    description: 'Complete guide with licensing, locations, and vending course for Grand Island, Nebraska'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GrandIslandNebraskaHowToStartPage />
}
