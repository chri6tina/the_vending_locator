import LakewoodColoradoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lakewood, Colorado (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Lakewood, Colorado. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lakewood',
    'start vending business Lakewood Colorado',
    'Lakewood vending permits',
    'vending machine locations Lakewood',
    'Lakewood vending course',
    'vending business guide Colorado'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lakewood-colorado'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lakewood, Colorado',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lakewood, Colorado',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lakewood-colorado',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lakewood, Colorado'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lakewood, Colorado',
    description: 'Complete guide with licensing, locations, and vending course for Lakewood, Colorado'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <LakewoodColoradoHowToStartPage />
}
