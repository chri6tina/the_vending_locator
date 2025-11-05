import SpringfieldMissouriHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Springfield, Missouri (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Springfield, Missouri. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Springfield',
    'start vending business Springfield Missouri',
    'Springfield vending permits',
    'vending machine locations Springfield',
    'Springfield vending course',
    'vending business guide Missouri'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/springfield-missouri'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Springfield, Missouri',
    description: 'Step-by-step guide with licensing, locations, and vending course for Springfield, Missouri',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/springfield-missouri',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Springfield, Missouri'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Springfield, Missouri',
    description: 'Complete guide with licensing, locations, and vending course for Springfield, Missouri'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SpringfieldMissouriHowToStartPage />
}
