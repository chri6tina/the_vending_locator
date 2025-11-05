import SantaClaritaCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Santa Clarita, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Santa Clarita, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Santa Clarita',
    'start vending business Santa Clarita California',
    'Santa Clarita vending permits',
    'vending machine locations Santa Clarita',
    'Santa Clarita vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/santa-clarita-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Santa Clarita, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Santa Clarita, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/santa-clarita-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Santa Clarita, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Santa Clarita, California',
    description: 'Complete guide with licensing, locations, and vending course for Santa Clarita, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SantaClaritaCaliforniaHowToStartPage />
}
