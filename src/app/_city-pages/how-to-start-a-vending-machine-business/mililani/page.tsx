import MililaniHawaiiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Mililani, Hawaii (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Mililani, Hawaii. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Mililani',
    'start vending business Mililani, Hawaii',
    'Mililani vending permits',
    'vending machine locations Mililani',
    'Mililani vending course',
    'vending business guide Hawaii'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mililani'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Mililani, Hawaii',
    description: 'Step-by-step guide with licensing, locations, and vending course for Mililani, Hawaii',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mililani',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Mililani, Hawaii'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Mililani, Hawaii',
    description: 'Complete guide with licensing, locations, and vending course for Mililani, Hawaii'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MililaniHawaiiHowToStartPage />
}
