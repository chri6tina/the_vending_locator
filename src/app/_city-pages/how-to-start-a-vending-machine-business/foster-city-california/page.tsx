import FosterCityCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Foster City, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Foster City, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Foster City',
    'start vending business Foster City, California',
    'Foster City vending permits',
    'vending machine locations Foster City',
    'Foster City vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/foster-city-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Foster City, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Foster City, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/foster-city-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Foster City, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Foster City, California',
    description: 'Complete guide with licensing, locations, and vending course for Foster City, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FosterCityCaliforniaHowToStartPage />
}
