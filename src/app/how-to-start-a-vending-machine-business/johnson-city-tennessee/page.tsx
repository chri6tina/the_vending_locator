import JohnsonCityTennesseeHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Johnson City, Tennessee (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Johnson City, Tennessee. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Johnson City',
    'start vending business Johnson City Tennessee',
    'Johnson City vending permits',
    'vending machine locations Johnson City',
    'Johnson City vending course',
    'vending business guide Tennessee'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/johnson-city-tennessee'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Johnson City, Tennessee',
    description: 'Step-by-step guide with licensing, locations, and vending course for Johnson City, Tennessee',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/johnson-city-tennessee',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Johnson City, Tennessee'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Johnson City, Tennessee',
    description: 'Complete guide with licensing, locations, and vending course for Johnson City, Tennessee'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <JohnsonCityTennesseeHowToStartPage />
}
