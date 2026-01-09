import FortScottMaineHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fort Scott, Maine (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Fort Scott, Maine. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fort Scott',
    'start vending business Fort Scott, Maine',
    'Fort Scott vending permits',
    'vending machine locations Fort Scott',
    'Fort Scott vending course',
    'vending business guide Maine'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fort-scott-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fort Scott, Maine',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fort Scott, Maine',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fort-scott-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fort Scott, Maine'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fort Scott, Maine',
    description: 'Complete guide with licensing, locations, and vending course for Fort Scott, Maine'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FortScottMaineHowToStartPage />
}
