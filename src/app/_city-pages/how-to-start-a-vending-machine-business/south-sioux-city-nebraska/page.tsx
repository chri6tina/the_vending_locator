import SouthSiouxCityNebraskaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in South Sioux City, Nebraska (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in South Sioux City, Nebraska. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business South Sioux City',
    'start vending business South Sioux City, Nebraska',
    'South Sioux City vending permits',
    'vending machine locations South Sioux City',
    'South Sioux City vending course',
    'vending business guide Nebraska'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-sioux-city-nebraska'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in South Sioux City, Nebraska',
    description: 'Step-by-step guide with licensing, locations, and vending course for South Sioux City, Nebraska',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-sioux-city-nebraska',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in South Sioux City, Nebraska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in South Sioux City, Nebraska',
    description: 'Complete guide with licensing, locations, and vending course for South Sioux City, Nebraska'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SouthSiouxCityNebraskaHowToStartPage />
}
