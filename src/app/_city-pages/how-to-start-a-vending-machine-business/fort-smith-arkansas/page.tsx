import FortSmithArkansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fort Smith, Arkansas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Fort Smith, Arkansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fort Smith',
    'start vending business Fort Smith Arkansas',
    'Fort Smith vending permits',
    'vending machine locations Fort Smith',
    'Fort Smith vending course',
    'vending business guide Arkansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fort-smith-arkansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fort Smith, Arkansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fort Smith, Arkansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fort-smith-arkansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fort Smith, Arkansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fort Smith, Arkansas',
    description: 'Complete guide with licensing, locations, and vending course for Fort Smith, Arkansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FortSmithArkansasHowToStartPage />
}
