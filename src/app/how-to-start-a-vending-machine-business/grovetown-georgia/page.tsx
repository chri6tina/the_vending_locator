import GrovetownGeorgiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Grovetown, Georgia (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Grovetown, Georgia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Grovetown',
    'start vending business Grovetown, Georgia',
    'Grovetown vending permits',
    'vending machine locations Grovetown',
    'Grovetown vending course',
    'vending business guide Georgia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/grovetown-georgia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Grovetown, Georgia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Grovetown, Georgia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/grovetown-georgia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Grovetown, Georgia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Grovetown, Georgia',
    description: 'Complete guide with licensing, locations, and vending course for Grovetown, Georgia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GrovetownGeorgiaHowToStartPage />
}
