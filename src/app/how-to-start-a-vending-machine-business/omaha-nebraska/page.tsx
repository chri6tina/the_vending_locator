import OmahaNebraskaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Omaha, Nebraska (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Omaha, Nebraska. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Omaha',
    'start vending business Omaha Nebraska',
    'Omaha vending permits',
    'vending machine locations Omaha',
    'Omaha vending course',
    'vending business guide Nebraska'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/omaha-nebraska'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Omaha, Nebraska',
    description: 'Step-by-step guide with licensing, locations, and vending course for Omaha, Nebraska',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/omaha-nebraska',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Omaha, Nebraska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Omaha, Nebraska',
    description: 'Complete guide with licensing, locations, and vending course for Omaha, Nebraska'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <OmahaNebraskaHowToStartPage />
}
