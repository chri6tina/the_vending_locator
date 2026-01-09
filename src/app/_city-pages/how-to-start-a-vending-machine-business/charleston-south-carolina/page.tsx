import CharlestonSouthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Charleston, South Carolina (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Charleston, South Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Charleston',
    'start vending business Charleston South Carolina',
    'Charleston vending permits',
    'vending machine locations Charleston',
    'Charleston vending course',
    'vending business guide South Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/charleston-south-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Charleston, South Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for Charleston, South Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/charleston-south-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Charleston, South Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Charleston, South Carolina',
    description: 'Complete guide with licensing, locations, and vending course for Charleston, South Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CharlestonSouthCarolinaHowToStartPage />
}
