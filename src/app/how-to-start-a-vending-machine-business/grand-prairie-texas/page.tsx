import GrandPrairieTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Grand Prairie, Texas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Grand Prairie, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Grand Prairie',
    'start vending business Grand Prairie Texas',
    'Grand Prairie vending permits',
    'vending machine locations Grand Prairie',
    'Grand Prairie vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/grand-prairie-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Grand Prairie, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Grand Prairie, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/grand-prairie-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Grand Prairie, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Grand Prairie, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Grand Prairie, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GrandPrairieTexasHowToStartPage />
}
