import WinstedConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Winsted, Connecticut (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Winsted, Connecticut. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Winsted',
    'start vending business Winsted, Connecticut',
    'Winsted vending permits',
    'vending machine locations Winsted',
    'Winsted vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/winsted-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Winsted, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for Winsted, Connecticut',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/winsted-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Winsted, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Winsted, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for Winsted, Connecticut'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WinstedConnecticutHowToStartPage />
}
