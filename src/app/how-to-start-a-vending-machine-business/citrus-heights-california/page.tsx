import CitrusHeightsCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Citrus Heights, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Citrus Heights, C. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Citrus Heights',
    'start vending business Citrus Heights California',
    'Citrus Heights vending permits',
    'vending machine locations Citrus Heights',
    'Citrus Heights vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/citrus-heights-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Citrus Heights, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Citrus Heights, C',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/citrus-heights-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Citrus Heights, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Citrus Heights, California',
    description: 'Complete guide with licensing, locations, and vending course for Citrus Heights, C'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CitrusHeightsCaliforniaHowToStartPage />
}



