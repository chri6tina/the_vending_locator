import FerndaleMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Ferndale, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Ferndale, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Ferndale',
    'start vending business Ferndale, Michigan',
    'Ferndale vending permits',
    'vending machine locations Ferndale',
    'Ferndale vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ferndale-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Ferndale, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Ferndale, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ferndale-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Ferndale, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Ferndale, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Ferndale, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FerndaleMichiganHowToStartPage />
}
