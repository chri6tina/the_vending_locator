import HighPointNorthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in High Point, North Carolina (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in High Point, North Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business High Point',
    'start vending business High Point North Carolina',
    'High Point vending permits',
    'vending machine locations High Point',
    'High Point vending course',
    'vending business guide North Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/high-point-north-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in High Point, North Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for High Point, North Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/high-point-north-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in High Point, North Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in High Point, North Carolina',
    description: 'Complete guide with licensing, locations, and vending course for High Point, North Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HighPointNorthCarolinaHowToStartPage />
}
