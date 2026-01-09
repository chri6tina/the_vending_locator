import LebanonIndianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lebanon, Indiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lebanon, Indiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lebanon',
    'start vending business Lebanon, Indiana',
    'Lebanon vending permits',
    'vending machine locations Lebanon',
    'Lebanon vending course',
    'vending business guide Indiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lebanon-indiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lebanon, Indiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lebanon, Indiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lebanon-indiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lebanon, Indiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lebanon, Indiana',
    description: 'Complete guide with licensing, locations, and vending course for Lebanon, Indiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LebanonIndianaHowToStartPage />
}
