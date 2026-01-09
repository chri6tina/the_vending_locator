import LighthousePointFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lighthouse Point, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lighthouse Point, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lighthouse Point',
    'start vending business Lighthouse Point, Florida',
    'Lighthouse Point vending permits',
    'vending machine locations Lighthouse Point',
    'Lighthouse Point vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lighthouse-point-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lighthouse Point, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lighthouse Point, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lighthouse-point-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lighthouse Point, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lighthouse Point, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Lighthouse Point, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LighthousePointFloridaHowToStartPage />
}
