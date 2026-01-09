import FishersIndianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fishers, Indiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Fishers, Indiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fishers',
    'start vending business Fishers, Indiana',
    'Fishers vending permits',
    'vending machine locations Fishers',
    'Fishers vending course',
    'vending business guide Indiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fishers-indiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fishers, Indiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fishers, Indiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fishers-indiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fishers, Indiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fishers, Indiana',
    description: 'Complete guide with licensing, locations, and vending course for Fishers, Indiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FishersIndianaHowToStartPage />
}
