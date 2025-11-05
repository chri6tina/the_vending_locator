import NewBritainConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in New Britain, Connecticut (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in New Britain, Connecticut. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business New Britain',
    'start vending business New Britain Connecticut',
    'New Britain vending permits',
    'vending machine locations New Britain',
    'New Britain vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/new-britain-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in New Britain, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for New Britain, Connecticut',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/new-britain-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in New Britain, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in New Britain, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for New Britain, Connecticut'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <NewBritainConnecticutHowToStartPage />
}
