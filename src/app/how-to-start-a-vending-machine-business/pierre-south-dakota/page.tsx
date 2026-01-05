import PierreSouthDakotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pierre, South Dakota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Pierre, South Dakota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pierre',
    'start vending business Pierre, South Dakota',
    'Pierre vending permits',
    'vending machine locations Pierre',
    'Pierre vending course',
    'vending business guide South Dakota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pierre-south-dakota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pierre, South Dakota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pierre, South Dakota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pierre-south-dakota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pierre, South Dakota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pierre, South Dakota',
    description: 'Complete guide with licensing, locations, and vending course for Pierre, South Dakota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PierreSouthDakotaHowToStartPage />
}
