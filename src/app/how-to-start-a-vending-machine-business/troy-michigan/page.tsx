import TroyMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Troy, Michigan (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Troy, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Troy',
    'start vending business Troy Michigan',
    'Troy vending permits',
    'vending machine locations Troy',
    'Troy vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/troy-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Troy, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Troy, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/troy-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Troy, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Troy, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Troy, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <TroyMichiganHowToStartPage />
}
