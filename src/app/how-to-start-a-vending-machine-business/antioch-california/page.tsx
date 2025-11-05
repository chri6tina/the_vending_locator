import AntiochCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Antioch, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Antioch, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Antioch',
    'start vending business Antioch California',
    'Antioch vending permits',
    'vending machine locations Antioch',
    'Antioch vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/antioch-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Antioch, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Antioch, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/antioch-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Antioch, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Antioch, California',
    description: 'Complete guide with licensing, locations, and vending course for Antioch, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <AntiochCaliforniaHowToStartPage />
}
