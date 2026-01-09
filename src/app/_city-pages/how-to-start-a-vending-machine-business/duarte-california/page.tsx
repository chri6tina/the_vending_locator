import DuarteCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Duarte, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Duarte, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Duarte',
    'start vending business Duarte, California',
    'Duarte vending permits',
    'vending machine locations Duarte',
    'Duarte vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/duarte-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Duarte, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Duarte, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/duarte-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Duarte, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Duarte, California',
    description: 'Complete guide with licensing, locations, and vending course for Duarte, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DuarteCaliforniaHowToStartPage />
}
