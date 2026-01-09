import SiouxCityIowaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Sioux City, Iowa (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Sioux City, Iowa. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Sioux City',
    'start vending business Sioux City Iowa',
    'Sioux City vending permits',
    'vending machine locations Sioux City',
    'Sioux City vending course',
    'vending business guide Iowa'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sioux-city-iowa'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Sioux City, Iowa',
    description: 'Step-by-step guide with licensing, locations, and vending course for Sioux City, Iowa',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sioux-city-iowa',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Sioux City, Iowa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Sioux City, Iowa',
    description: 'Complete guide with licensing, locations, and vending course for Sioux City, Iowa'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SiouxCityIowaHowToStartPage />
}
