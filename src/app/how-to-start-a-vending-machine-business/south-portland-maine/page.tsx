import SouthPortlandMaineHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in South Portland, Maine (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in South Portland, Maine. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business South Portland',
    'start vending business South Portland, Maine',
    'South Portland vending permits',
    'vending machine locations South Portland',
    'South Portland vending course',
    'vending business guide Maine'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-portland-maine'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in South Portland, Maine',
    description: 'Step-by-step guide with licensing, locations, and vending course for South Portland, Maine',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-portland-maine',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in South Portland, Maine'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in South Portland, Maine',
    description: 'Complete guide with licensing, locations, and vending course for South Portland, Maine'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SouthPortlandMaineHowToStartPage />
}
