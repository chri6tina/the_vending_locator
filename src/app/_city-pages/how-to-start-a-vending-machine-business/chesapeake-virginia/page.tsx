import ChesapeakeVirginiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Chesapeake, Virginia (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Chesapeake, Virginia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Chesapeake',
    'start vending business Chesapeake Virginia',
    'Chesapeake vending permits',
    'vending machine locations Chesapeake',
    'Chesapeake vending course',
    'vending business guide Virginia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/chesapeake-virginia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Chesapeake, Virginia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Chesapeake, Virginia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/chesapeake-virginia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Chesapeake, Virginia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Chesapeake, Virginia',
    description: 'Complete guide with licensing, locations, and vending course for Chesapeake, Virginia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ChesapeakeVirginiaHowToStartPage />
}
