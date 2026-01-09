import TrumbullConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Trumbull, Connecticut (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Trumbull, Connecticut. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Trumbull',
    'start vending business Trumbull, Connecticut',
    'Trumbull vending permits',
    'vending machine locations Trumbull',
    'Trumbull vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/trumbull-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Trumbull, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for Trumbull, Connecticut',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/trumbull-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Trumbull, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Trumbull, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for Trumbull, Connecticut'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <TrumbullConnecticutHowToStartPage />
}
