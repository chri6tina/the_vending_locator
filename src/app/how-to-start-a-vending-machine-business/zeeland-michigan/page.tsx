import ZeelandMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Zeeland, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Zeeland, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Zeeland',
    'start vending business Zeeland, Michigan',
    'Zeeland vending permits',
    'vending machine locations Zeeland',
    'Zeeland vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/zeeland-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Zeeland, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Zeeland, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/zeeland-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Zeeland, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Zeeland, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Zeeland, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ZeelandMichiganHowToStartPage />
}
