import CadillacMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Cadillac, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Cadillac, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Cadillac',
    'start vending business Cadillac, Michigan',
    'Cadillac vending permits',
    'vending machine locations Cadillac',
    'Cadillac vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cadillac-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Cadillac, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Cadillac, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cadillac-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Cadillac, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Cadillac, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Cadillac, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CadillacMichiganHowToStartPage />
}
