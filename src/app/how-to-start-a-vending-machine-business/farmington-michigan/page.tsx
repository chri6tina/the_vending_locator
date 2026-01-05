import FarmingtonMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Farmington, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Farmington, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Farmington',
    'start vending business Farmington, Michigan',
    'Farmington vending permits',
    'vending machine locations Farmington',
    'Farmington vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/farmington-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Farmington, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Farmington, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/farmington-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Farmington, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Farmington, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Farmington, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FarmingtonMichiganHowToStartPage />
}
