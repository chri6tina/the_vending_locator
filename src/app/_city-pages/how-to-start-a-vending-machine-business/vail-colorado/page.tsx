import VailColoradoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Vail, Colorado (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Vail, Colorado. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Vail',
    'start vending business Vail, Colorado',
    'Vail vending permits',
    'vending machine locations Vail',
    'Vail vending course',
    'vending business guide Colorado'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/vail-colorado'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Vail, Colorado',
    description: 'Step-by-step guide with licensing, locations, and vending course for Vail, Colorado',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/vail-colorado',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Vail, Colorado'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Vail, Colorado',
    description: 'Complete guide with licensing, locations, and vending course for Vail, Colorado'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <VailColoradoHowToStartPage />
}
