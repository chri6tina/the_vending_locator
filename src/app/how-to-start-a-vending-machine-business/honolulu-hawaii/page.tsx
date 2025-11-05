import HonoluluHawaiiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Honolulu, Hawaii (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Honolulu, Hawaii. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Honolulu',
    'start vending business Honolulu Hawaii',
    'Honolulu vending permits',
    'vending machine locations Honolulu',
    'Honolulu vending course',
    'vending business guide Hawaii'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/honolulu-hawaii'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Honolulu, Hawaii',
    description: 'Step-by-step guide with licensing, locations, and vending course for Honolulu, Hawaii',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/honolulu-hawaii',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Honolulu, Hawaii'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Honolulu, Hawaii',
    description: 'Complete guide with licensing, locations, and vending course for Honolulu, Hawaii'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <HonoluluHawaiiHowToStartPage />
}
