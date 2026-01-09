import OrangeConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Orange, Connecticut (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Orange, Connecticut. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Orange',
    'start vending business Orange, Connecticut',
    'Orange vending permits',
    'vending machine locations Orange',
    'Orange vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/orange-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Orange, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for Orange, Connecticut',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/orange-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Orange, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Orange, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for Orange, Connecticut'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OrangeConnecticutHowToStartPage />
}
