import SaratogaSpringsNewYorkHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Saratoga Springs, New York (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Saratoga Springs, New York. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Saratoga Springs',
    'start vending business Saratoga Springs, New York',
    'Saratoga Springs vending permits',
    'vending machine locations Saratoga Springs',
    'Saratoga Springs vending course',
    'vending business guide New York'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/saratoga-springs-new-york'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Saratoga Springs, New York',
    description: 'Step-by-step guide with licensing, locations, and vending course for Saratoga Springs, New York',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/saratoga-springs-new-york',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Saratoga Springs, New York'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Saratoga Springs, New York',
    description: 'Complete guide with licensing, locations, and vending course for Saratoga Springs, New York'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SaratogaSpringsNewYorkHowToStartPage />
}
