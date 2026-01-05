import CrownPointIndianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Crown Point, Indiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Crown Point, Indiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Crown Point',
    'start vending business Crown Point, Indiana',
    'Crown Point vending permits',
    'vending machine locations Crown Point',
    'Crown Point vending course',
    'vending business guide Indiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/crown-point-indiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Crown Point, Indiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Crown Point, Indiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/crown-point-indiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Crown Point, Indiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Crown Point, Indiana',
    description: 'Complete guide with licensing, locations, and vending course for Crown Point, Indiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CrownPointIndianaHowToStartPage />
}
