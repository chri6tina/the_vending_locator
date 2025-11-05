import LeagueCityTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in League City, Texas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in League City, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business League City',
    'start vending business League City Texas',
    'League City vending permits',
    'vending machine locations League City',
    'League City vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/league-city-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in League City, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for League City, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/league-city-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in League City, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in League City, Texas',
    description: 'Complete guide with licensing, locations, and vending course for League City, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <LeagueCityTexasHowToStartPage />
}
