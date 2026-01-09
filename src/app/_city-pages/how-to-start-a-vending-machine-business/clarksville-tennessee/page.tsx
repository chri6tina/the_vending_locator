import ClarksvilleTennesseeHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Clarksville, Tennessee (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Clarksville, Tennessee. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Clarksville',
    'start vending business Clarksville Tennessee',
    'Clarksville vending permits',
    'vending machine locations Clarksville',
    'Clarksville vending course',
    'vending business guide Tennessee'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/clarksville-tennessee'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Clarksville, Tennessee',
    description: 'Step-by-step guide with licensing, locations, and vending course for Clarksville, Tennessee',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/clarksville-tennessee',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Clarksville, Tennessee'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Clarksville, Tennessee',
    description: 'Complete guide with licensing, locations, and vending course for Clarksville, Tennessee'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ClarksvilleTennesseeHowToStartPage />
}
