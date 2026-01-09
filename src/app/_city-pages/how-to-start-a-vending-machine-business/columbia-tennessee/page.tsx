import ColumbiaTennesseeHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Columbia, Tennessee (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Columbia, Tennessee. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Columbia',
    'start vending business Columbia, Tennessee',
    'Columbia vending permits',
    'vending machine locations Columbia',
    'Columbia vending course',
    'vending business guide Tennessee'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/columbia-tennessee'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Columbia, Tennessee',
    description: 'Step-by-step guide with licensing, locations, and vending course for Columbia, Tennessee',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/columbia-tennessee',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Columbia, Tennessee'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Columbia, Tennessee',
    description: 'Complete guide with licensing, locations, and vending course for Columbia, Tennessee'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ColumbiaTennesseeHowToStartPage />
}
