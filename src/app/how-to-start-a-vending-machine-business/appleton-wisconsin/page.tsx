import AppletonWisconsinHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Appleton, Wisconsin (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Appleton, Wisconsin. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Appleton',
    'start vending business Appleton Wisconsin',
    'Appleton vending permits',
    'vending machine locations Appleton',
    'Appleton vending course',
    'vending business guide Wisconsin'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/appleton-wisconsin'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Appleton, Wisconsin',
    description: 'Step-by-step guide with licensing, locations, and vending course for Appleton, Wisconsin',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/appleton-wisconsin',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Appleton, Wisconsin'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Appleton, Wisconsin',
    description: 'Complete guide with licensing, locations, and vending course for Appleton, Wisconsin'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AppletonWisconsinHowToStartPage />
}
