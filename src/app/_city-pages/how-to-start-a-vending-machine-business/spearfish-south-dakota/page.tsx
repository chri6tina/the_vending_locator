import SpearfishSouthDakotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Spearfish, South Dakota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Spearfish, South Dakota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Spearfish',
    'start vending business Spearfish, South Dakota',
    'Spearfish vending permits',
    'vending machine locations Spearfish',
    'Spearfish vending course',
    'vending business guide South Dakota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/spearfish-south-dakota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Spearfish, South Dakota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Spearfish, South Dakota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/spearfish-south-dakota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Spearfish, South Dakota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Spearfish, South Dakota',
    description: 'Complete guide with licensing, locations, and vending course for Spearfish, South Dakota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SpearfishSouthDakotaHowToStartPage />
}
