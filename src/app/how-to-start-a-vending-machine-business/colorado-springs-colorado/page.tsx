import ColoradoSpringsColoradoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Colorado Springs, Colorado (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Colorado Springs, Colorado. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Colorado Springs',
    'start vending business Colorado Springs Colorado',
    'Colorado Springs vending permits',
    'vending machine locations Colorado Springs',
    'Colorado Springs vending course',
    'vending business guide Colorado'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/colorado-springs-colorado'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Colorado Springs, Colorado',
    description: 'Step-by-step guide with licensing, locations, and vending course for Colorado Springs, Colorado',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/colorado-springs-colorado',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Colorado Springs, Colorado'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Colorado Springs, Colorado',
    description: 'Complete guide with licensing, locations, and vending course for Colorado Springs, Colorado'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ColoradoSpringsColoradoHowToStartPage />
}
