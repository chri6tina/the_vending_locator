import BridgeportConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bridgeport, Connecticut (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Bridgeport, Connecticut. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bridgeport',
    'start vending business Bridgeport Connecticut',
    'Bridgeport vending permits',
    'vending machine locations Bridgeport',
    'Bridgeport vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bridgeport-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bridgeport, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bridgeport, Connecticut',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bridgeport-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bridgeport, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bridgeport, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for Bridgeport, Connecticut'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <BridgeportConnecticutHowToStartPage />
}
