import LakewoodOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lakewood, Ohio (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lakewood, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lakewood',
    'start vending business Lakewood, Ohio',
    'Lakewood vending permits',
    'vending machine locations Lakewood',
    'Lakewood vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lakewood-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lakewood, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lakewood, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lakewood-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lakewood, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lakewood, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Lakewood, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LakewoodOhioHowToStartPage />
}
