import HernandoMississippiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hernando, Mississippi (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Hernando, Mississippi. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hernando',
    'start vending business Hernando, Mississippi',
    'Hernando vending permits',
    'vending machine locations Hernando',
    'Hernando vending course',
    'vending business guide Mississippi'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hernando-mississippi'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hernando, Mississippi',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hernando, Mississippi',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hernando-mississippi',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hernando, Mississippi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hernando, Mississippi',
    description: 'Complete guide with licensing, locations, and vending course for Hernando, Mississippi'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HernandoMississippiHowToStartPage />
}
