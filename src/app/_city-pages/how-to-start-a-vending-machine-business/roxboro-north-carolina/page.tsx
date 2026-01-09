import RoxboroNorthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Roxboro, North Carolina (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Roxboro, North Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Roxboro',
    'start vending business Roxboro, North Carolina',
    'Roxboro vending permits',
    'vending machine locations Roxboro',
    'Roxboro vending course',
    'vending business guide North Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/roxboro-north-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Roxboro, North Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for Roxboro, North Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/roxboro-north-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Roxboro, North Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Roxboro, North Carolina',
    description: 'Complete guide with licensing, locations, and vending course for Roxboro, North Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RoxboroNorthCarolinaHowToStartPage />
}
