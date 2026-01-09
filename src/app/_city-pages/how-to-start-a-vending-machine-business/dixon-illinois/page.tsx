import DixonIllinoisHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Dixon, Illinois (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Dixon, Illinois. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Dixon',
    'start vending business Dixon, Illinois',
    'Dixon vending permits',
    'vending machine locations Dixon',
    'Dixon vending course',
    'vending business guide Illinois'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dixon-illinois'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Dixon, Illinois',
    description: 'Step-by-step guide with licensing, locations, and vending course for Dixon, Illinois',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dixon-illinois',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Dixon, Illinois'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Dixon, Illinois',
    description: 'Complete guide with licensing, locations, and vending course for Dixon, Illinois'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DixonIllinoisHowToStartPage />
}
