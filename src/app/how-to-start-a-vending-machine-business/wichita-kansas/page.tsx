import WichitaKansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Wichita, Kansas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Wichita, Kansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Wichita',
    'start vending business Wichita Kansas',
    'Wichita vending permits',
    'vending machine locations Wichita',
    'Wichita vending course',
    'vending business guide Kansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wichita-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Wichita, Kansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Wichita, Kansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wichita-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Wichita, Kansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Wichita, Kansas',
    description: 'Complete guide with licensing, locations, and vending course for Wichita, Kansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WichitaKansasHowToStartPage />
}
