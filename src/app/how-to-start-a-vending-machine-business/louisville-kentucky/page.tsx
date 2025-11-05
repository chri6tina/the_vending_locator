import LouisvilleKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Louisville, Kentucky (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Louisville, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Louisville',
    'start vending business Louisville Kentucky',
    'Louisville vending permits',
    'vending machine locations Louisville',
    'Louisville vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/louisville-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Louisville, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Louisville, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/louisville-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Louisville, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Louisville, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Louisville, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LouisvilleKentuckyHowToStartPage />
}
