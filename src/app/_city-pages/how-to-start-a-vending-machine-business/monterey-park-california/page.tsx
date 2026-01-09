import MontereyParkCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Monterey Park, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Monterey Park, C. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Monterey Park',
    'start vending business Monterey Park California',
    'Monterey Park vending permits',
    'vending machine locations Monterey Park',
    'Monterey Park vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/monterey-park-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Monterey Park, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Monterey Park, C',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/monterey-park-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Monterey Park, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Monterey Park, California',
    description: 'Complete guide with licensing, locations, and vending course for Monterey Park, C'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MontereyParkCaliforniaHowToStartPage />
}



