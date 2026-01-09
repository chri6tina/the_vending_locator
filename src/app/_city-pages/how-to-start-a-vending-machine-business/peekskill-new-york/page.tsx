import PeekskillNewYorkHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Peekskill, New York (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Peekskill, New York. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Peekskill',
    'start vending business Peekskill, New York',
    'Peekskill vending permits',
    'vending machine locations Peekskill',
    'Peekskill vending course',
    'vending business guide New York'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/peekskill-new-york'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Peekskill, New York',
    description: 'Step-by-step guide with licensing, locations, and vending course for Peekskill, New York',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/peekskill-new-york',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Peekskill, New York'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Peekskill, New York',
    description: 'Complete guide with licensing, locations, and vending course for Peekskill, New York'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PeekskillNewYorkHowToStartPage />
}
