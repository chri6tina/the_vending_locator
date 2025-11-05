import DenverColoradoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Denver, Colorado (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Denver, Colorado. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Denver',
    'start vending business Denver Colorado',
    'Denver vending permits',
    'vending machine locations Denver',
    'Denver vending course',
    'vending business guide Colorado'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/denver-colorado'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Denver, Colorado',
    description: 'Step-by-step guide with licensing, locations, and vending course for Denver, Colorado',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/denver-colorado',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Denver, Colorado'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Denver, Colorado',
    description: 'Complete guide with licensing, locations, and vending course for Denver, Colorado'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DenverColoradoHowToStartPage />
}
