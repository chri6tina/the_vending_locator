import OakRidgeTennesseeHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Oak Ridge, Tennessee (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Oak Ridge, Tennessee. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Oak Ridge',
    'start vending business Oak Ridge, Tennessee',
    'Oak Ridge vending permits',
    'vending machine locations Oak Ridge',
    'Oak Ridge vending course',
    'vending business guide Tennessee'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oak-ridge-tennessee'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Oak Ridge, Tennessee',
    description: 'Step-by-step guide with licensing, locations, and vending course for Oak Ridge, Tennessee',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oak-ridge-tennessee',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Oak Ridge, Tennessee'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Oak Ridge, Tennessee',
    description: 'Complete guide with licensing, locations, and vending course for Oak Ridge, Tennessee'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OakRidgeTennesseeHowToStartPage />
}
