import GrandHavenMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Grand Haven, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Grand Haven, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Grand Haven',
    'start vending business Grand Haven, Michigan',
    'Grand Haven vending permits',
    'vending machine locations Grand Haven',
    'Grand Haven vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/grand-haven-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Grand Haven, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Grand Haven, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/grand-haven-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Grand Haven, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Grand Haven, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Grand Haven, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GrandHavenMichiganHowToStartPage />
}
