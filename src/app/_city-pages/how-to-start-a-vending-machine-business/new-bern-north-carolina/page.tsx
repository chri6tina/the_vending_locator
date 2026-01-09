import NewBernNorthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in New Bern, North Carolina (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in New Bern, North Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business New Bern',
    'start vending business New Bern, North Carolina',
    'New Bern vending permits',
    'vending machine locations New Bern',
    'New Bern vending course',
    'vending business guide North Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/new-bern-north-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in New Bern, North Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for New Bern, North Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/new-bern-north-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in New Bern, North Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in New Bern, North Carolina',
    description: 'Complete guide with licensing, locations, and vending course for New Bern, North Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <NewBernNorthCarolinaHowToStartPage />
}
