import AvondaleArizonaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Avondale, Arizona (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Avondale, AZ. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Avondale',
    'start vending business Avondale Arizona',
    'Avondale vending permits',
    'vending machine locations Avondale',
    'Avondale vending course',
    'vending business guide Arizona'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/avondale-arizona'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Avondale, Arizona',
    description: 'Step-by-step guide with licensing, locations, and vending course for Avondale, AZ',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/avondale-arizona',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Avondale, Arizona'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Avondale, Arizona',
    description: 'Complete guide with licensing, locations, and vending course for Avondale, AZ'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AvondaleArizonaHowToStartPage />
}



