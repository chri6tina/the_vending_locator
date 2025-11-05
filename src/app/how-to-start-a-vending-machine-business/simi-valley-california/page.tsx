import SimiValleyCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Simi Valley, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Simi Valley, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Simi Valley',
    'start vending business Simi Valley California',
    'Simi Valley vending permits',
    'vending machine locations Simi Valley',
    'Simi Valley vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/simi-valley-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Simi Valley, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Simi Valley, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/simi-valley-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Simi Valley, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Simi Valley, California',
    description: 'Complete guide with licensing, locations, and vending course for Simi Valley, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SimiValleyCaliforniaHowToStartPage />
}
