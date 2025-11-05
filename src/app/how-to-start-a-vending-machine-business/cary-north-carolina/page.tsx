import CaryNorthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Cary, North Carolina (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Cary, North Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Cary',
    'start vending business Cary North Carolina',
    'Cary vending permits',
    'vending machine locations Cary',
    'Cary vending course',
    'vending business guide North Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cary-north-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Cary, North Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for Cary, North Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cary-north-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Cary, North Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Cary, North Carolina',
    description: 'Complete guide with licensing, locations, and vending course for Cary, North Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <CaryNorthCarolinaHowToStartPage />
}
