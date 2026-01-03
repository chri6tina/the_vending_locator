import HuntingtonParkCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Huntington Park, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Huntington Park, C. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Huntington Park',
    'start vending business Huntington Park California',
    'Huntington Park vending permits',
    'vending machine locations Huntington Park',
    'Huntington Park vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/huntington-park-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Huntington Park, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Huntington Park, C',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/huntington-park-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Huntington Park, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Huntington Park, California',
    description: 'Complete guide with licensing, locations, and vending course for Huntington Park, C'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HuntingtonParkCaliforniaHowToStartPage />
}



