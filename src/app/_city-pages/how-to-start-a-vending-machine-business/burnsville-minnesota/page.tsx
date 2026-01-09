import BurnsvilleMinnesotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Burnsville, Minnesota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Burnsville, Minnesota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Burnsville',
    'start vending business Burnsville, Minnesota',
    'Burnsville vending permits',
    'vending machine locations Burnsville',
    'Burnsville vending course',
    'vending business guide Minnesota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/burnsville-minnesota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Burnsville, Minnesota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Burnsville, Minnesota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/burnsville-minnesota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Burnsville, Minnesota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Burnsville, Minnesota',
    description: 'Complete guide with licensing, locations, and vending course for Burnsville, Minnesota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BurnsvilleMinnesotaHowToStartPage />
}
