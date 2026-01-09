import BrooklynCenterMinnesotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Brooklyn Center, Minnesota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Brooklyn Center, Minnesota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Brooklyn Center',
    'start vending business Brooklyn Center, Minnesota',
    'Brooklyn Center vending permits',
    'vending machine locations Brooklyn Center',
    'Brooklyn Center vending course',
    'vending business guide Minnesota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/brooklyn-center-minnesota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Brooklyn Center, Minnesota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Brooklyn Center, Minnesota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/brooklyn-center-minnesota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Brooklyn Center, Minnesota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Brooklyn Center, Minnesota',
    description: 'Complete guide with licensing, locations, and vending course for Brooklyn Center, Minnesota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BrooklynCenterMinnesotaHowToStartPage />
}
