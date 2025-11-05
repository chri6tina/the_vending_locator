import FairbanksAlaskaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fairbanks, Alaska (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Fairbanks, Alaska. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fairbanks',
    'start vending business Fairbanks Alaska',
    'Fairbanks vending permits',
    'vending machine locations Fairbanks',
    'Fairbanks vending course',
    'vending business guide Alaska'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fairbanks-alaska'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fairbanks, Alaska',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fairbanks, Alaska',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fairbanks-alaska',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fairbanks, Alaska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fairbanks, Alaska',
    description: 'Complete guide with licensing, locations, and vending course for Fairbanks, Alaska'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FairbanksAlaskaHowToStartPage />
}
