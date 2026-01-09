import ManchesterConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Manchester, Connecticut (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Manchester, Connecticut. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Manchester',
    'start vending business Manchester, Connecticut',
    'Manchester vending permits',
    'vending machine locations Manchester',
    'Manchester vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/manchester-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Manchester, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for Manchester, Connecticut',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/manchester-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Manchester, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Manchester, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for Manchester, Connecticut'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ManchesterConnecticutHowToStartPage />
}
