import DanburyConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Danbury, Connecticut (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Danbury, Connecticut. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Danbury',
    'start vending business Danbury Connecticut',
    'Danbury vending permits',
    'vending machine locations Danbury',
    'Danbury vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/danbury-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Danbury, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for Danbury, Connecticut',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/danbury-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Danbury, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Danbury, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for Danbury, Connecticut'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <DanburyConnecticutHowToStartPage />
}
