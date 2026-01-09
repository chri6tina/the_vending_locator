import HornLakeMississippiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Horn Lake, Mississippi (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Horn Lake, Mississippi. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Horn Lake',
    'start vending business Horn Lake, Mississippi',
    'Horn Lake vending permits',
    'vending machine locations Horn Lake',
    'Horn Lake vending course',
    'vending business guide Mississippi'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/horn-lake-mississippi'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Horn Lake, Mississippi',
    description: 'Step-by-step guide with licensing, locations, and vending course for Horn Lake, Mississippi',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/horn-lake-mississippi',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Horn Lake, Mississippi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Horn Lake, Mississippi',
    description: 'Complete guide with licensing, locations, and vending course for Horn Lake, Mississippi'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HornLakeMississippiHowToStartPage />
}
