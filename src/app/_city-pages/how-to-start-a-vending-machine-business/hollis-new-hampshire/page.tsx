import HollisNewHampshireHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hollis, New Hampshire (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Hollis, New Hampshire. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hollis',
    'start vending business Hollis, New Hampshire',
    'Hollis vending permits',
    'vending machine locations Hollis',
    'Hollis vending course',
    'vending business guide New Hampshire'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hollis-new-hampshire'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hollis, New Hampshire',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hollis, New Hampshire',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hollis-new-hampshire',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hollis, New Hampshire'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hollis, New Hampshire',
    description: 'Complete guide with licensing, locations, and vending course for Hollis, New Hampshire'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HollisNewHampshireHowToStartPage />
}
