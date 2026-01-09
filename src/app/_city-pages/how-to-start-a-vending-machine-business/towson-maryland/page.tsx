import TowsonMarylandHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Towson, Maryland (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Towson, Maryland. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Towson',
    'start vending business Towson, Maryland',
    'Towson vending permits',
    'vending machine locations Towson',
    'Towson vending course',
    'vending business guide Maryland'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/towson-maryland'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Towson, Maryland',
    description: 'Step-by-step guide with licensing, locations, and vending course for Towson, Maryland',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/towson-maryland',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Towson, Maryland'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Towson, Maryland',
    description: 'Complete guide with licensing, locations, and vending course for Towson, Maryland'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <TowsonMarylandHowToStartPage />
}
