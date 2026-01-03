import HendersonNevadaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Henderson, Nevada (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Henderson, Nevada. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Henderson',
    'start vending business Henderson Nevada',
    'Henderson vending permits',
    'vending machine locations Henderson',
    'Henderson vending course',
    'vending business guide Nevada'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/henderson-nevada'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Henderson, Nevada',
    description: 'Step-by-step guide with licensing, locations, and vending course for Henderson, Nevada',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/henderson-nevada',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Henderson, Nevada'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Henderson, Nevada',
    description: 'Complete guide with licensing, locations, and vending course for Henderson, Nevada'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HendersonNevadaHowToStartPage />
}
