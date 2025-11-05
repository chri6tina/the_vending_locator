import LakeCharlesLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lake Charles, Louisiana (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Lake Charles, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lake Charles',
    'start vending business Lake Charles Louisiana',
    'Lake Charles vending permits',
    'vending machine locations Lake Charles',
    'Lake Charles vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-charles-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lake Charles, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lake Charles, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-charles-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lake Charles, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lake Charles, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Lake Charles, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LakeCharlesLouisianaHowToStartPage />
}
