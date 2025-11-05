import CarsonCityNevadaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Carson City, Nevada (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Carson City, Nevada. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Carson City',
    'start vending business Carson City Nevada',
    'Carson City vending permits',
    'vending machine locations Carson City',
    'Carson City vending course',
    'vending business guide Nevada'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/carson-city-nevada'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Carson City, Nevada',
    description: 'Step-by-step guide with licensing, locations, and vending course for Carson City, Nevada',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/carson-city-nevada',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Carson City, Nevada'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Carson City, Nevada',
    description: 'Complete guide with licensing, locations, and vending course for Carson City, Nevada'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CarsonCityNevadaHowToStartPage />
}
