import LawndaleCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lawndale, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lawndale, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lawndale',
    'start vending business Lawndale, California',
    'Lawndale vending permits',
    'vending machine locations Lawndale',
    'Lawndale vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lawndale-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lawndale, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lawndale, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lawndale-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lawndale, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lawndale, California',
    description: 'Complete guide with licensing, locations, and vending course for Lawndale, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LawndaleCaliforniaHowToStartPage />
}
