import AlbionMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Albion, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Albion, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Albion',
    'start vending business Albion, Michigan',
    'Albion vending permits',
    'vending machine locations Albion',
    'Albion vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/albion-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Albion, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Albion, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/albion-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Albion, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Albion, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Albion, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AlbionMichiganHowToStartPage />
}
