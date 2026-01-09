import WrightsvilleGeorgiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Wrightsville, Georgia (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Wrightsville, Georgia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Wrightsville',
    'start vending business Wrightsville, Georgia',
    'Wrightsville vending permits',
    'vending machine locations Wrightsville',
    'Wrightsville vending course',
    'vending business guide Georgia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wrightsville-georgia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Wrightsville, Georgia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Wrightsville, Georgia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wrightsville-georgia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Wrightsville, Georgia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Wrightsville, Georgia',
    description: 'Complete guide with licensing, locations, and vending course for Wrightsville, Georgia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WrightsvilleGeorgiaHowToStartPage />
}
