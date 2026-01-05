import ParagouldArkansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Paragould, Arkansas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Paragould, Arkansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Paragould',
    'start vending business Paragould, Arkansas',
    'Paragould vending permits',
    'vending machine locations Paragould',
    'Paragould vending course',
    'vending business guide Arkansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/paragould-arkansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Paragould, Arkansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Paragould, Arkansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/paragould-arkansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Paragould, Arkansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Paragould, Arkansas',
    description: 'Complete guide with licensing, locations, and vending course for Paragould, Arkansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ParagouldArkansasHowToStartPage />
}
