import AransasPassTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Aransas Pass, Texas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Aransas Pass, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Aransas Pass',
    'start vending business Aransas Pass, Texas',
    'Aransas Pass vending permits',
    'vending machine locations Aransas Pass',
    'Aransas Pass vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/aransas-pass-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Aransas Pass, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Aransas Pass, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/aransas-pass-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Aransas Pass, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Aransas Pass, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Aransas Pass, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AransasPassTexasHowToStartPage />
}
