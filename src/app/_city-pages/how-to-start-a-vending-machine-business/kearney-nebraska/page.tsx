import KearneyNebraskaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Kearney, Nebraska (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Kearney, Nebraska. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Kearney',
    'start vending business Kearney, Nebraska',
    'Kearney vending permits',
    'vending machine locations Kearney',
    'Kearney vending course',
    'vending business guide Nebraska'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kearney-nebraska'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Kearney, Nebraska',
    description: 'Step-by-step guide with licensing, locations, and vending course for Kearney, Nebraska',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kearney-nebraska',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Kearney, Nebraska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Kearney, Nebraska',
    description: 'Complete guide with licensing, locations, and vending course for Kearney, Nebraska'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <KearneyNebraskaHowToStartPage />
}
