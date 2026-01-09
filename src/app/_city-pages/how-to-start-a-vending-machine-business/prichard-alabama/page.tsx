import PrichardAlabamaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Prichard, Alabama (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Prichard, AL. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Prichard',
    'start vending business Prichard Alabama',
    'Prichard vending permits',
    'vending machine locations Prichard',
    'Prichard vending course',
    'vending business guide Alabama'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/prichard-alabama'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Prichard, Alabama',
    description: 'Step-by-step guide with licensing, locations, and vending course for Prichard, AL',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/prichard-alabama',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Prichard, Alabama'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Prichard, Alabama',
    description: 'Complete guide with licensing, locations, and vending course for Prichard, AL'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PrichardAlabamaHowToStartPage />
}



