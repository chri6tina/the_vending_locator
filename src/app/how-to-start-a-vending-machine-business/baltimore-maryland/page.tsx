import BaltimoreMarylandHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Baltimore, Maryland (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Baltimore, Maryland. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Baltimore',
    'start vending business Baltimore Maryland',
    'Baltimore vending permits',
    'vending machine locations Baltimore',
    'Baltimore vending course',
    'vending business guide Maryland'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/baltimore-maryland'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Baltimore, Maryland',
    description: 'Step-by-step guide with licensing, locations, and vending course for Baltimore, Maryland',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/baltimore-maryland',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Baltimore, Maryland'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Baltimore, Maryland',
    description: 'Complete guide with licensing, locations, and vending course for Baltimore, Maryland'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BaltimoreMarylandHowToStartPage />
}
