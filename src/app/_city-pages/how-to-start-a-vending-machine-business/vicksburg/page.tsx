import VicksburgMississippiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Vicksburg, Mississippi (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Vicksburg, Mississippi. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Vicksburg',
    'start vending business Vicksburg, Mississippi',
    'Vicksburg vending permits',
    'vending machine locations Vicksburg',
    'Vicksburg vending course',
    'vending business guide Mississippi'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/vicksburg'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Vicksburg, Mississippi',
    description: 'Step-by-step guide with licensing, locations, and vending course for Vicksburg, Mississippi',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/vicksburg',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Vicksburg, Mississippi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Vicksburg, Mississippi',
    description: 'Complete guide with licensing, locations, and vending course for Vicksburg, Mississippi'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <VicksburgMississippiHowToStartPage />
}
