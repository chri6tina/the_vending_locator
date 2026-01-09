import CantonGeorgiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Canton, Georgia (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Canton, Georgia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Canton',
    'start vending business Canton, Georgia',
    'Canton vending permits',
    'vending machine locations Canton',
    'Canton vending course',
    'vending business guide Georgia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/canton-georgia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Canton, Georgia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Canton, Georgia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/canton-georgia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Canton, Georgia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Canton, Georgia',
    description: 'Complete guide with licensing, locations, and vending course for Canton, Georgia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CantonGeorgiaHowToStartPage />
}
