import RollingHillsEstatesCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Rolling Hills Estates, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Rolling Hills Estates, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Rolling Hills Estates',
    'start vending business Rolling Hills Estates, California',
    'Rolling Hills Estates vending permits',
    'vending machine locations Rolling Hills Estates',
    'Rolling Hills Estates vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rolling-hills-estates-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Rolling Hills Estates, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Rolling Hills Estates, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rolling-hills-estates-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Rolling Hills Estates, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Rolling Hills Estates, California',
    description: 'Complete guide with licensing, locations, and vending course for Rolling Hills Estates, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RollingHillsEstatesCaliforniaHowToStartPage />
}
