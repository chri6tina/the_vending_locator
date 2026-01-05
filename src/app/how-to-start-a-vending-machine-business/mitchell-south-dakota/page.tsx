import MitchellSouthDakotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Mitchell, South Dakota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Mitchell, South Dakota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Mitchell',
    'start vending business Mitchell, South Dakota',
    'Mitchell vending permits',
    'vending machine locations Mitchell',
    'Mitchell vending course',
    'vending business guide South Dakota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mitchell-south-dakota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Mitchell, South Dakota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Mitchell, South Dakota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mitchell-south-dakota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Mitchell, South Dakota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Mitchell, South Dakota',
    description: 'Complete guide with licensing, locations, and vending course for Mitchell, South Dakota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MitchellSouthDakotaHowToStartPage />
}
