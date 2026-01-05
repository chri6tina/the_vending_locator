import MichiganCityIndianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Michigan City, Indiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Michigan City, Indiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Michigan City',
    'start vending business Michigan City, Indiana',
    'Michigan City vending permits',
    'vending machine locations Michigan City',
    'Michigan City vending course',
    'vending business guide Indiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/michigan-city-indiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Michigan City, Indiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Michigan City, Indiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/michigan-city-indiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Michigan City, Indiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Michigan City, Indiana',
    description: 'Complete guide with licensing, locations, and vending course for Michigan City, Indiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MichiganCityIndianaHowToStartPage />
}
