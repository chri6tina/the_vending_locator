import UnionCityTennesseeHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Union City, Tennessee (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Union City, Tennessee. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Union City',
    'start vending business Union City, Tennessee',
    'Union City vending permits',
    'vending machine locations Union City',
    'Union City vending course',
    'vending business guide Tennessee'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/union-city-tennessee'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Union City, Tennessee',
    description: 'Step-by-step guide with licensing, locations, and vending course for Union City, Tennessee',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/union-city-tennessee',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Union City, Tennessee'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Union City, Tennessee',
    description: 'Complete guide with licensing, locations, and vending course for Union City, Tennessee'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <UnionCityTennesseeHowToStartPage />
}
