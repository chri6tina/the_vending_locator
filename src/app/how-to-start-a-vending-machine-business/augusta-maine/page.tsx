import AugustaMaineHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Augusta, Maine (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Augusta, Maine. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Augusta',
    'start vending business Augusta Maine',
    'Augusta vending permits',
    'vending machine locations Augusta',
    'Augusta vending course',
    'vending business guide Maine'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/augusta-maine'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Augusta, Maine',
    description: 'Step-by-step guide with licensing, locations, and vending course for Augusta, Maine',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/augusta-maine',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Augusta, Maine'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Augusta, Maine',
    description: 'Complete guide with licensing, locations, and vending course for Augusta, Maine'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AugustaMaineHowToStartPage />
}
