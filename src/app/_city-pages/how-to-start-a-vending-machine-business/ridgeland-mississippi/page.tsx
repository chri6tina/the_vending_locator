import RidgelandMississippiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Ridgeland, Mississippi (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Ridgeland, Mississippi. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Ridgeland',
    'start vending business Ridgeland, Mississippi',
    'Ridgeland vending permits',
    'vending machine locations Ridgeland',
    'Ridgeland vending course',
    'vending business guide Mississippi'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ridgeland-mississippi'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Ridgeland, Mississippi',
    description: 'Step-by-step guide with licensing, locations, and vending course for Ridgeland, Mississippi',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ridgeland-mississippi',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Ridgeland, Mississippi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Ridgeland, Mississippi',
    description: 'Complete guide with licensing, locations, and vending course for Ridgeland, Mississippi'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RidgelandMississippiHowToStartPage />
}
