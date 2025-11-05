import BeaumontTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Beaumont, Texas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Beaumont, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Beaumont',
    'start vending business Beaumont Texas',
    'Beaumont vending permits',
    'vending machine locations Beaumont',
    'Beaumont vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/beaumont-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Beaumont, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Beaumont, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/beaumont-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Beaumont, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Beaumont, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Beaumont, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <BeaumontTexasHowToStartPage />
}
