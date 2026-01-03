import PearlCityHawaiiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pearl City, Hawaii (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Pearl City, Hawaii. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pearl City',
    'start vending business Pearl City Hawaii',
    'Pearl City vending permits',
    'vending machine locations Pearl City',
    'Pearl City vending course',
    'vending business guide Hawaii'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pearl-city-hawaii'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pearl City, Hawaii',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pearl City, Hawaii',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pearl-city-hawaii',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pearl City, Hawaii'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pearl City, Hawaii',
    description: 'Complete guide with licensing, locations, and vending course for Pearl City, Hawaii'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PearlCityHawaiiHowToStartPage />
}
