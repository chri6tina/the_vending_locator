import LaFolletteTennesseeHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in La Follette, Tennessee (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in La Follette, Tennessee. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business La Follette',
    'start vending business La Follette, Tennessee',
    'La Follette vending permits',
    'vending machine locations La Follette',
    'La Follette vending course',
    'vending business guide Tennessee'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/la-follette-tennessee'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in La Follette, Tennessee',
    description: 'Step-by-step guide with licensing, locations, and vending course for La Follette, Tennessee',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/la-follette-tennessee',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in La Follette, Tennessee'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in La Follette, Tennessee',
    description: 'Complete guide with licensing, locations, and vending course for La Follette, Tennessee'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LaFolletteTennesseeHowToStartPage />
}
