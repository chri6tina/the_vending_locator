import TracyCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Tracy, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Tracy, C. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Tracy',
    'start vending business Tracy California',
    'Tracy vending permits',
    'vending machine locations Tracy',
    'Tracy vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tracy-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Tracy, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Tracy, C',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tracy-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Tracy, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Tracy, California',
    description: 'Complete guide with licensing, locations, and vending course for Tracy, C'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <TracyCaliforniaHowToStartPage />
}



