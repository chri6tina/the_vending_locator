import PrattvilleAlabamaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Prattville, Alabama (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Prattville, AL. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Prattville',
    'start vending business Prattville Alabama',
    'Prattville vending permits',
    'vending machine locations Prattville',
    'Prattville vending course',
    'vending business guide Alabama'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/prattville-alabama'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Prattville, Alabama',
    description: 'Step-by-step guide with licensing, locations, and vending course for Prattville, AL',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/prattville-alabama',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Prattville, Alabama'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Prattville, Alabama',
    description: 'Complete guide with licensing, locations, and vending course for Prattville, AL'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PrattvilleAlabamaHowToStartPage />
}



