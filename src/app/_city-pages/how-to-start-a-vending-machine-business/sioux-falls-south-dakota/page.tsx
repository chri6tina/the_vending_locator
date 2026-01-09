import SiouxFallsSouthDakotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Sioux Falls, South Dakota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Sioux Falls, South Dakota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Sioux Falls',
    'start vending business Sioux Falls South Dakota',
    'Sioux Falls vending permits',
    'vending machine locations Sioux Falls',
    'Sioux Falls vending course',
    'vending business guide South Dakota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sioux-falls-south-dakota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Sioux Falls, South Dakota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Sioux Falls, South Dakota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sioux-falls-south-dakota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Sioux Falls, South Dakota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Sioux Falls, South Dakota',
    description: 'Complete guide with licensing, locations, and vending course for Sioux Falls, South Dakota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SiouxFallsSouthDakotaHowToStartPage />
}
