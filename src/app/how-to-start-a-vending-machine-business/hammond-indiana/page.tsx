import HammondIndianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hammond, Indiana (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Hammond, Indiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hammond',
    'start vending business Hammond Indiana',
    'Hammond vending permits',
    'vending machine locations Hammond',
    'Hammond vending course',
    'vending business guide Indiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hammond-indiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hammond, Indiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hammond, Indiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hammond-indiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hammond, Indiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hammond, Indiana',
    description: 'Complete guide with licensing, locations, and vending course for Hammond, Indiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HammondIndianaHowToStartPage />
}
