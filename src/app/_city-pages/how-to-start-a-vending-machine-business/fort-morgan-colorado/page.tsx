import FortMorganColoradoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fort Morgan, Colorado (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Fort Morgan, Colorado. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fort Morgan',
    'start vending business Fort Morgan, Colorado',
    'Fort Morgan vending permits',
    'vending machine locations Fort Morgan',
    'Fort Morgan vending course',
    'vending business guide Colorado'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fort-morgan-colorado'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fort Morgan, Colorado',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fort Morgan, Colorado',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fort-morgan-colorado',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fort Morgan, Colorado'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fort Morgan, Colorado',
    description: 'Complete guide with licensing, locations, and vending course for Fort Morgan, Colorado'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FortMorganColoradoHowToStartPage />
}
