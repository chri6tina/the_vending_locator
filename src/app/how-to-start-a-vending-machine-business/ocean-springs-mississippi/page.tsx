import OceanSpringsMississippiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Ocean Springs, Mississippi (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Ocean Springs, Mississippi. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Ocean Springs',
    'start vending business Ocean Springs, Mississippi',
    'Ocean Springs vending permits',
    'vending machine locations Ocean Springs',
    'Ocean Springs vending course',
    'vending business guide Mississippi'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ocean-springs-mississippi'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Ocean Springs, Mississippi',
    description: 'Step-by-step guide with licensing, locations, and vending course for Ocean Springs, Mississippi',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ocean-springs-mississippi',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Ocean Springs, Mississippi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Ocean Springs, Mississippi',
    description: 'Complete guide with licensing, locations, and vending course for Ocean Springs, Mississippi'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OceanSpringsMississippiHowToStartPage />
}
