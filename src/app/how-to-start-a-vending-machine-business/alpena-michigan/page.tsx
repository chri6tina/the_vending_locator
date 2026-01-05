import AlpenaMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Alpena, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Alpena, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Alpena',
    'start vending business Alpena, Michigan',
    'Alpena vending permits',
    'vending machine locations Alpena',
    'Alpena vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/alpena-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Alpena, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Alpena, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/alpena-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Alpena, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Alpena, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Alpena, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AlpenaMichiganHowToStartPage />
}
