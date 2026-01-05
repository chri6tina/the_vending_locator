import SouthingtonConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Southington, Connecticut (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Southington, Connecticut. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Southington',
    'start vending business Southington, Connecticut',
    'Southington vending permits',
    'vending machine locations Southington',
    'Southington vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/southington-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Southington, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for Southington, Connecticut',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/southington-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Southington, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Southington, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for Southington, Connecticut'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SouthingtonConnecticutHowToStartPage />
}
