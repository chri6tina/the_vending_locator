import MaplewoodMinnesotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Maplewood, Minnesota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Maplewood, Minnesota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Maplewood',
    'start vending business Maplewood, Minnesota',
    'Maplewood vending permits',
    'vending machine locations Maplewood',
    'Maplewood vending course',
    'vending business guide Minnesota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/maplewood-minnesota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Maplewood, Minnesota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Maplewood, Minnesota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/maplewood-minnesota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Maplewood, Minnesota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Maplewood, Minnesota',
    description: 'Complete guide with licensing, locations, and vending course for Maplewood, Minnesota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MaplewoodMinnesotaHowToStartPage />
}
