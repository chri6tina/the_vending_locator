import BooneNorthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Boone, North Carolina (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Boone, North Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Boone',
    'start vending business Boone, North Carolina',
    'Boone vending permits',
    'vending machine locations Boone',
    'Boone vending course',
    'vending business guide North Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/boone-north-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Boone, North Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for Boone, North Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/boone-north-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Boone, North Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Boone, North Carolina',
    description: 'Complete guide with licensing, locations, and vending course for Boone, North Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BooneNorthCarolinaHowToStartPage />
}
