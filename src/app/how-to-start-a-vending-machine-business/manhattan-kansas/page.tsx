import ManhattanKansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Manhattan, Kansas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Manhattan, Kansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Manhattan',
    'start vending business Manhattan Kansas',
    'Manhattan vending permits',
    'vending machine locations Manhattan',
    'Manhattan vending course',
    'vending business guide Kansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/manhattan-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Manhattan, Kansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Manhattan, Kansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/manhattan-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Manhattan, Kansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Manhattan, Kansas',
    description: 'Complete guide with licensing, locations, and vending course for Manhattan, Kansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ManhattanKansasHowToStartPage />
}
