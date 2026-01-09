import NorthHavenConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in North Haven, Connecticut (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in North Haven, Connecticut. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business North Haven',
    'start vending business North Haven, Connecticut',
    'North Haven vending permits',
    'vending machine locations North Haven',
    'North Haven vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/north-haven-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in North Haven, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for North Haven, Connecticut',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/north-haven-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in North Haven, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in North Haven, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for North Haven, Connecticut'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <NorthHavenConnecticutHowToStartPage />
}
