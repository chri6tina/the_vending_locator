import NewHavenConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in New Haven, Connecticut (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in New Haven, Connecticut. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business New Haven',
    'start vending business New Haven Connecticut',
    'New Haven vending permits',
    'vending machine locations New Haven',
    'New Haven vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/new-haven-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in New Haven, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for New Haven, Connecticut',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/new-haven-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in New Haven, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in New Haven, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for New Haven, Connecticut'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <NewHavenConnecticutHowToStartPage />
}
