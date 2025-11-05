import RexburgIdahoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Rexburg, Idaho (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Rexburg, Idaho. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Rexburg',
    'start vending business Rexburg Idaho',
    'Rexburg vending permits',
    'vending machine locations Rexburg',
    'Rexburg vending course',
    'vending business guide Idaho'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rexburg-idaho'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Rexburg, Idaho',
    description: 'Step-by-step guide with licensing, locations, and vending course for Rexburg, Idaho',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rexburg-idaho',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Rexburg, Idaho'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Rexburg, Idaho',
    description: 'Complete guide with licensing, locations, and vending course for Rexburg, Idaho'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RexburgIdahoHowToStartPage />
}
