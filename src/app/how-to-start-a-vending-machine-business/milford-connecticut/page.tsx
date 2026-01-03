import MilfordConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Milford, Connecticut (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Milford, C. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Milford',
    'start vending business Milford Connecticut',
    'Milford vending permits',
    'vending machine locations Milford',
    'Milford vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/milford-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Milford, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for Milford, C',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/milford-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Milford, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Milford, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for Milford, C'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MilfordConnecticutHowToStartPage />
}



