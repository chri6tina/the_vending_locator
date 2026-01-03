import HelenaMontanaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Helena, Montana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Helena, Montana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Helena',
    'start vending business Helena Montana',
    'Helena vending permits',
    'vending machine locations Helena',
    'Helena vending course',
    'vending business guide Montana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/helena-montana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Helena, Montana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Helena, Montana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/helena-montana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Helena, Montana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Helena, Montana',
    description: 'Complete guide with licensing, locations, and vending course for Helena, Montana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HelenaMontanaHowToStartPage />
}
