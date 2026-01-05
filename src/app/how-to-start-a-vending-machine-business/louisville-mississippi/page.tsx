import LouisvilleMississippiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Louisville, Mississippi (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Louisville, Mississippi. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Louisville',
    'start vending business Louisville, Mississippi',
    'Louisville vending permits',
    'vending machine locations Louisville',
    'Louisville vending course',
    'vending business guide Mississippi'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/louisville-mississippi'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Louisville, Mississippi',
    description: 'Step-by-step guide with licensing, locations, and vending course for Louisville, Mississippi',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/louisville-mississippi',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Louisville, Mississippi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Louisville, Mississippi',
    description: 'Complete guide with licensing, locations, and vending course for Louisville, Mississippi'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LouisvilleMississippiHowToStartPage />
}
