import LakeHavasuCityArizonaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lake Havasu City, Arizona (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lake Havasu City, Arizona. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lake Havasu City',
    'start vending business Lake Havasu City, Arizona',
    'Lake Havasu City vending permits',
    'vending machine locations Lake Havasu City',
    'Lake Havasu City vending course',
    'vending business guide Arizona'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-havasu-city-arizona'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lake Havasu City, Arizona',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lake Havasu City, Arizona',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lake-havasu-city-arizona',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lake Havasu City, Arizona'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lake Havasu City, Arizona',
    description: 'Complete guide with licensing, locations, and vending course for Lake Havasu City, Arizona'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LakeHavasuCityArizonaHowToStartPage />
}
