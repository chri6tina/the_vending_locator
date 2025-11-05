import ArlingtonVirginiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Arlington, Virginia (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Arlington, Virginia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Arlington',
    'start vending business Arlington Virginia',
    'Arlington vending permits',
    'vending machine locations Arlington',
    'Arlington vending course',
    'vending business guide Virginia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/arlington-virginia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Arlington, Virginia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Arlington, Virginia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/arlington-virginia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Arlington, Virginia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Arlington, Virginia',
    description: 'Complete guide with licensing, locations, and vending course for Arlington, Virginia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ArlingtonVirginiaHowToStartPage />
}
