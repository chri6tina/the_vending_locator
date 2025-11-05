import RapidCitySouthDakotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Rapid City, South Dakota (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Rapid City, South Dakota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Rapid City',
    'start vending business Rapid City South Dakota',
    'Rapid City vending permits',
    'vending machine locations Rapid City',
    'Rapid City vending course',
    'vending business guide South Dakota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rapid-city-south-dakota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Rapid City, South Dakota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Rapid City, South Dakota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rapid-city-south-dakota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Rapid City, South Dakota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Rapid City, South Dakota',
    description: 'Complete guide with licensing, locations, and vending course for Rapid City, South Dakota'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <RapidCitySouthDakotaHowToStartPage />
}
