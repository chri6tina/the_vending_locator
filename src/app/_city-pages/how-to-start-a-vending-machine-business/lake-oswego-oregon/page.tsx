import LakeOswegoOregonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lake Oswego, Oregon (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lake Oswego, Oregon. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lake Oswego',
    'start vending business Lake Oswego, Oregon',
    'Lake Oswego vending permits',
    'vending machine locations Lake Oswego',
    'Lake Oswego vending course',
    'vending business guide Oregon'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-oswego-oregon'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lake Oswego, Oregon',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lake Oswego, Oregon',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-oswego-oregon',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lake Oswego, Oregon'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lake Oswego, Oregon',
    description: 'Complete guide with licensing, locations, and vending course for Lake Oswego, Oregon'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LakeOswegoOregonHowToStartPage />
}
