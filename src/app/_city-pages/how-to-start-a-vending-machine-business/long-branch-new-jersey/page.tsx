import LongBranchNewJerseyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Long Branch, New Jersey (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Long Branch, New Jersey. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Long Branch',
    'start vending business Long Branch, New Jersey',
    'Long Branch vending permits',
    'vending machine locations Long Branch',
    'Long Branch vending course',
    'vending business guide New Jersey'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/long-branch-new-jersey'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Long Branch, New Jersey',
    description: 'Step-by-step guide with licensing, locations, and vending course for Long Branch, New Jersey',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/long-branch-new-jersey',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Long Branch, New Jersey'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Long Branch, New Jersey',
    description: 'Complete guide with licensing, locations, and vending course for Long Branch, New Jersey'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LongBranchNewJerseyHowToStartPage />
}
