import WethersfieldConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Wethersfield, Connecticut (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Wethersfield, Connecticut. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Wethersfield',
    'start vending business Wethersfield, Connecticut',
    'Wethersfield vending permits',
    'vending machine locations Wethersfield',
    'Wethersfield vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wethersfield-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Wethersfield, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for Wethersfield, Connecticut',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wethersfield-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Wethersfield, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Wethersfield, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for Wethersfield, Connecticut'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WethersfieldConnecticutHowToStartPage />
}
