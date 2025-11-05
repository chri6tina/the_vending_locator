import RockSpringsWyomingHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Rock Springs, Wyoming (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Rock Springs, Wyoming. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Rock Springs',
    'start vending business Rock Springs Wyoming',
    'Rock Springs vending permits',
    'vending machine locations Rock Springs',
    'Rock Springs vending course',
    'vending business guide Wyoming'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rock-springs-wyoming'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Rock Springs, Wyoming',
    description: 'Step-by-step guide with licensing, locations, and vending course for Rock Springs, Wyoming',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rock-springs-wyoming',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Rock Springs, Wyoming'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Rock Springs, Wyoming',
    description: 'Complete guide with licensing, locations, and vending course for Rock Springs, Wyoming'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RockSpringsWyomingHowToStartPage />
}
