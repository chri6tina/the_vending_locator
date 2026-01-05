import CanonCityColoradoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Canon City, Colorado (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Canon City, Colorado. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Canon City',
    'start vending business Canon City, Colorado',
    'Canon City vending permits',
    'vending machine locations Canon City',
    'Canon City vending course',
    'vending business guide Colorado'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/canon-city-colorado'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Canon City, Colorado',
    description: 'Step-by-step guide with licensing, locations, and vending course for Canon City, Colorado',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/canon-city-colorado',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Canon City, Colorado'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Canon City, Colorado',
    description: 'Complete guide with licensing, locations, and vending course for Canon City, Colorado'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CanonCityColoradoHowToStartPage />
}
