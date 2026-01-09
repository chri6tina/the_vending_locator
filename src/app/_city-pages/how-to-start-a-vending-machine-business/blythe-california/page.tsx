import BlytheCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Blythe, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Blythe, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Blythe',
    'start vending business Blythe, California',
    'Blythe vending permits',
    'vending machine locations Blythe',
    'Blythe vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/blythe-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Blythe, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Blythe, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/blythe-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Blythe, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Blythe, California',
    description: 'Complete guide with licensing, locations, and vending course for Blythe, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BlytheCaliforniaHowToStartPage />
}
