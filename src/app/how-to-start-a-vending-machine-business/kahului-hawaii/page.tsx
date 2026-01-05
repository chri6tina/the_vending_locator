import KahuluiHawaiiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Kahului, Hawaii (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Kahului, Hawaii. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Kahului',
    'start vending business Kahului, Hawaii',
    'Kahului vending permits',
    'vending machine locations Kahului',
    'Kahului vending course',
    'vending business guide Hawaii'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kahului-hawaii'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Kahului, Hawaii',
    description: 'Step-by-step guide with licensing, locations, and vending course for Kahului, Hawaii',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kahului-hawaii',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Kahului, Hawaii'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Kahului, Hawaii',
    description: 'Complete guide with licensing, locations, and vending course for Kahului, Hawaii'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <KahuluiHawaiiHowToStartPage />
}
