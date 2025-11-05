import FresnoCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fresno, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Fresno, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fresno',
    'start vending business Fresno California',
    'Fresno vending permits',
    'vending machine locations Fresno',
    'Fresno vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fresno-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fresno, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fresno, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fresno-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fresno, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fresno, California',
    description: 'Complete guide with licensing, locations, and vending course for Fresno, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FresnoCaliforniaHowToStartPage />
}
