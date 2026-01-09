import BorgerTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Borger, Texas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Borger, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Borger',
    'start vending business Borger, Texas',
    'Borger vending permits',
    'vending machine locations Borger',
    'Borger vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/borger-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Borger, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Borger, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/borger-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Borger, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Borger, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Borger, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BorgerTexasHowToStartPage />
}
