import BoulderCityNevadaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Boulder City, Nevada (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Boulder City, Nevada. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Boulder City',
    'start vending business Boulder City, Nevada',
    'Boulder City vending permits',
    'vending machine locations Boulder City',
    'Boulder City vending course',
    'vending business guide Nevada'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/boulder-city-nevada'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Boulder City, Nevada',
    description: 'Step-by-step guide with licensing, locations, and vending course for Boulder City, Nevada',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/boulder-city-nevada',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Boulder City, Nevada'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Boulder City, Nevada',
    description: 'Complete guide with licensing, locations, and vending course for Boulder City, Nevada'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BoulderCityNevadaHowToStartPage />
}
