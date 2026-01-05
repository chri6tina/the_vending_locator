import RushvilleIndianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Rushville, Indiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Rushville, Indiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Rushville',
    'start vending business Rushville, Indiana',
    'Rushville vending permits',
    'vending machine locations Rushville',
    'Rushville vending course',
    'vending business guide Indiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rushville-indiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Rushville, Indiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Rushville, Indiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rushville-indiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Rushville, Indiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Rushville, Indiana',
    description: 'Complete guide with licensing, locations, and vending course for Rushville, Indiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RushvilleIndianaHowToStartPage />
}
