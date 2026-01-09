import GermantownMarylandHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Germantown, Maryland (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Germantown, Maryland. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Germantown',
    'start vending business Germantown, Maryland',
    'Germantown vending permits',
    'vending machine locations Germantown',
    'Germantown vending course',
    'vending business guide Maryland'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/germantown-maryland'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Germantown, Maryland',
    description: 'Step-by-step guide with licensing, locations, and vending course for Germantown, Maryland',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/germantown-maryland',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Germantown, Maryland'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Germantown, Maryland',
    description: 'Complete guide with licensing, locations, and vending course for Germantown, Maryland'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GermantownMarylandHowToStartPage />
}
