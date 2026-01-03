import BirminghamMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Birmingham, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Birmingham, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Birmingham',
    'start vending business Birmingham Michigan',
    'Birmingham vending permits',
    'vending machine locations Birmingham',
    'Birmingham vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/birmingham-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Birmingham, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Birmingham, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/birmingham-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Birmingham, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Birmingham, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Birmingham, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BirminghamMichiganHowToStartPage />
}
