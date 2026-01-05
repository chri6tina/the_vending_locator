import ForrestCityArkansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Forrest City, Arkansas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Forrest City, Arkansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Forrest City',
    'start vending business Forrest City, Arkansas',
    'Forrest City vending permits',
    'vending machine locations Forrest City',
    'Forrest City vending course',
    'vending business guide Arkansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/forrest-city-arkansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Forrest City, Arkansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Forrest City, Arkansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/forrest-city-arkansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Forrest City, Arkansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Forrest City, Arkansas',
    description: 'Complete guide with licensing, locations, and vending course for Forrest City, Arkansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ForrestCityArkansasHowToStartPage />
}
