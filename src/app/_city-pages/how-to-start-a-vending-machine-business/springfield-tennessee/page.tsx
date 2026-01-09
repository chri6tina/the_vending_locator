import SpringfieldTennesseeHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Springfield, Tennessee (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Springfield, Tennessee. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Springfield',
    'start vending business Springfield, Tennessee',
    'Springfield vending permits',
    'vending machine locations Springfield',
    'Springfield vending course',
    'vending business guide Tennessee'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/springfield-tennessee'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Springfield, Tennessee',
    description: 'Step-by-step guide with licensing, locations, and vending course for Springfield, Tennessee',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/springfield-tennessee',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Springfield, Tennessee'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Springfield, Tennessee',
    description: 'Complete guide with licensing, locations, and vending course for Springfield, Tennessee'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SpringfieldTennesseeHowToStartPage />
}
