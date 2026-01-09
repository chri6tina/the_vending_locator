import YorkNebraskaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in York, Nebraska (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in York, Nebraska. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business York',
    'start vending business York, Nebraska',
    'York vending permits',
    'vending machine locations York',
    'York vending course',
    'vending business guide Nebraska'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/york-nebraska'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in York, Nebraska',
    description: 'Step-by-step guide with licensing, locations, and vending course for York, Nebraska',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/york-nebraska',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in York, Nebraska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in York, Nebraska',
    description: 'Complete guide with licensing, locations, and vending course for York, Nebraska'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <YorkNebraskaHowToStartPage />
}
