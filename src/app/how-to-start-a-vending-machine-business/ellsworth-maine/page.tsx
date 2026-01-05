import EllsworthMaineHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Ellsworth, Maine (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Ellsworth, Maine. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Ellsworth',
    'start vending business Ellsworth, Maine',
    'Ellsworth vending permits',
    'vending machine locations Ellsworth',
    'Ellsworth vending course',
    'vending business guide Maine'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ellsworth-maine'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Ellsworth, Maine',
    description: 'Step-by-step guide with licensing, locations, and vending course for Ellsworth, Maine',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ellsworth-maine',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Ellsworth, Maine'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Ellsworth, Maine',
    description: 'Complete guide with licensing, locations, and vending course for Ellsworth, Maine'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <EllsworthMaineHowToStartPage />
}
