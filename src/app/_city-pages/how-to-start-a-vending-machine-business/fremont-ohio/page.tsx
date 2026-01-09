import FremontOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fremont, Ohio (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Fremont, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fremont',
    'start vending business Fremont, Ohio',
    'Fremont vending permits',
    'vending machine locations Fremont',
    'Fremont vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fremont-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fremont, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fremont, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fremont-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fremont, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fremont, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Fremont, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FremontOhioHowToStartPage />
}
