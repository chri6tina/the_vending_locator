import FlintMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Flint, Michigan (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Flint, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Flint',
    'start vending business Flint Michigan',
    'Flint vending permits',
    'vending machine locations Flint',
    'Flint vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/flint-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Flint, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Flint, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/flint-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Flint, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Flint, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Flint, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <FlintMichiganHowToStartPage />
}
