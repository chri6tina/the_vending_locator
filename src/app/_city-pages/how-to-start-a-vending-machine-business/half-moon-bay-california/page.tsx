import HalfMoonBayCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Half Moon Bay, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Half Moon Bay, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Half Moon Bay',
    'start vending business Half Moon Bay, California',
    'Half Moon Bay vending permits',
    'vending machine locations Half Moon Bay',
    'Half Moon Bay vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/half-moon-bay-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Half Moon Bay, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Half Moon Bay, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/half-moon-bay-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Half Moon Bay, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Half Moon Bay, California',
    description: 'Complete guide with licensing, locations, and vending course for Half Moon Bay, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HalfMoonBayCaliforniaHowToStartPage />
}
