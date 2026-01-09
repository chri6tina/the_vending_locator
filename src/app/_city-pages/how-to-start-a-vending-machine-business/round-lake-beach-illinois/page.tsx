import RoundLakeBeachIllinoisHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Round Lake Beach, Illinois (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Round Lake Beach, Illinois. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Round Lake Beach',
    'start vending business Round Lake Beach, Illinois',
    'Round Lake Beach vending permits',
    'vending machine locations Round Lake Beach',
    'Round Lake Beach vending course',
    'vending business guide Illinois'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/round-lake-beach-illinois'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Round Lake Beach, Illinois',
    description: 'Step-by-step guide with licensing, locations, and vending course for Round Lake Beach, Illinois',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/round-lake-beach-illinois',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Round Lake Beach, Illinois'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Round Lake Beach, Illinois',
    description: 'Complete guide with licensing, locations, and vending course for Round Lake Beach, Illinois'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RoundLakeBeachIllinoisHowToStartPage />
}
