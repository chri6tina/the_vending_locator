import GrotonConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Groton, Connecticut (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Groton, Connecticut. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Groton',
    'start vending business Groton, Connecticut',
    'Groton vending permits',
    'vending machine locations Groton',
    'Groton vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/groton-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Groton, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for Groton, Connecticut',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/groton-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Groton, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Groton, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for Groton, Connecticut'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GrotonConnecticutHowToStartPage />
}
