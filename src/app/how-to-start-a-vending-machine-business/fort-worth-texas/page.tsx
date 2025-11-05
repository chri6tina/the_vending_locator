import FortWorthTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fort Worth, Texas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Fort Worth, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fort Worth',
    'start vending business Fort Worth Texas',
    'Fort Worth vending permits',
    'vending machine locations Fort Worth',
    'Fort Worth vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fort-worth-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fort Worth, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fort Worth, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fort-worth-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fort Worth, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fort Worth, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Fort Worth, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <FortWorthTexasHowToStartPage />
}
