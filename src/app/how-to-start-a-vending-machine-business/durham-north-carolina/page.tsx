import DurhamNorthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Durham, North Carolina (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Durham, North Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Durham',
    'start vending business Durham North Carolina',
    'Durham vending permits',
    'vending machine locations Durham',
    'Durham vending course',
    'vending business guide North Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/durham-north-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Durham, North Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for Durham, North Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/durham-north-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Durham, North Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Durham, North Carolina',
    description: 'Complete guide with licensing, locations, and vending course for Durham, North Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <DurhamNorthCarolinaHowToStartPage />
}
