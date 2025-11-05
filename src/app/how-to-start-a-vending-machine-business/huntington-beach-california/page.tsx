import HuntingtonBeachCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Huntington Beach, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Huntington Beach, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Huntington Beach',
    'start vending business Huntington Beach California',
    'Huntington Beach vending permits',
    'vending machine locations Huntington Beach',
    'Huntington Beach vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/huntington-beach-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Huntington Beach, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Huntington Beach, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/huntington-beach-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Huntington Beach, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Huntington Beach, California',
    description: 'Complete guide with licensing, locations, and vending course for Huntington Beach, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <HuntingtonBeachCaliforniaHowToStartPage />
}
