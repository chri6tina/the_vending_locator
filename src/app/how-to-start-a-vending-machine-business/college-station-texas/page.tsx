import CollegeStationTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in College Station, Texas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in College Station, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business College Station',
    'start vending business College Station Texas',
    'College Station vending permits',
    'vending machine locations College Station',
    'College Station vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/college-station-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in College Station, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for College Station, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/college-station-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in College Station, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in College Station, Texas',
    description: 'Complete guide with licensing, locations, and vending course for College Station, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CollegeStationTexasHowToStartPage />
}
