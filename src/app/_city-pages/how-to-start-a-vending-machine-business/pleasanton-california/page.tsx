import PleasantonCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pleasanton, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Pleasanton, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pleasanton',
    'start vending business Pleasanton, California',
    'Pleasanton vending permits',
    'vending machine locations Pleasanton',
    'Pleasanton vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pleasanton-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pleasanton, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pleasanton, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pleasanton-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pleasanton, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pleasanton, California',
    description: 'Complete guide with licensing, locations, and vending course for Pleasanton, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PleasantonCaliforniaHowToStartPage />
}
