import MineralWellsTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Mineral Wells, Texas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Mineral Wells, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Mineral Wells',
    'start vending business Mineral Wells, Texas',
    'Mineral Wells vending permits',
    'vending machine locations Mineral Wells',
    'Mineral Wells vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mineral-wells-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Mineral Wells, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Mineral Wells, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mineral-wells-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Mineral Wells, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Mineral Wells, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Mineral Wells, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MineralWellsTexasHowToStartPage />
}
