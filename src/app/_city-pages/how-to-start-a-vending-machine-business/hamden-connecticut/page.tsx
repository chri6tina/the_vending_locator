import HamdenConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hamden, Connecticut (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Hamden, Connecticut. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hamden',
    'start vending business Hamden, Connecticut',
    'Hamden vending permits',
    'vending machine locations Hamden',
    'Hamden vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hamden-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hamden, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hamden, Connecticut',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hamden-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hamden, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hamden, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for Hamden, Connecticut'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HamdenConnecticutHowToStartPage />
}
