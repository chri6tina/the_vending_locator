import KlamathFallsOregonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Klamath Falls, Oregon (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Klamath Falls, Oregon. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Klamath Falls',
    'start vending business Klamath Falls, Oregon',
    'Klamath Falls vending permits',
    'vending machine locations Klamath Falls',
    'Klamath Falls vending course',
    'vending business guide Oregon'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/klamath-falls-oregon'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Klamath Falls, Oregon',
    description: 'Step-by-step guide with licensing, locations, and vending course for Klamath Falls, Oregon',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/klamath-falls-oregon',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Klamath Falls, Oregon'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Klamath Falls, Oregon',
    description: 'Complete guide with licensing, locations, and vending course for Klamath Falls, Oregon'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <KlamathFallsOregonHowToStartPage />
}
