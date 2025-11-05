import YonkersNewYorkHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Yonkers, New York (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Yonkers, New York. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Yonkers',
    'start vending business Yonkers New York',
    'Yonkers vending permits',
    'vending machine locations Yonkers',
    'Yonkers vending course',
    'vending business guide New York'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/yonkers-new-york'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Yonkers, New York',
    description: 'Step-by-step guide with licensing, locations, and vending course for Yonkers, New York',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/yonkers-new-york',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Yonkers, New York'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Yonkers, New York',
    description: 'Complete guide with licensing, locations, and vending course for Yonkers, New York'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <YonkersNewYorkHowToStartPage />
}
