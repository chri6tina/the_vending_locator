import EaglePassTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Eagle Pass, Texas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Eagle Pass, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Eagle Pass',
    'start vending business Eagle Pass, Texas',
    'Eagle Pass vending permits',
    'vending machine locations Eagle Pass',
    'Eagle Pass vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/eagle-pass-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Eagle Pass, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Eagle Pass, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/eagle-pass-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Eagle Pass, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Eagle Pass, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Eagle Pass, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <EaglePassTexasHowToStartPage />
}
