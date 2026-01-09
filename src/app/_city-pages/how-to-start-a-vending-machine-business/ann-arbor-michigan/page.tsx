import AnnArborMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Ann Arbor, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Ann Arbor, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Ann Arbor',
    'start vending business Ann Arbor, Michigan',
    'Ann Arbor vending permits',
    'vending machine locations Ann Arbor',
    'Ann Arbor vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ann-arbor-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Ann Arbor, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Ann Arbor, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ann-arbor-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Ann Arbor, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Ann Arbor, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Ann Arbor, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AnnArborMichiganHowToStartPage />
}
