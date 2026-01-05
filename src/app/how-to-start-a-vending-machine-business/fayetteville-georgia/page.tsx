import FayettevilleGeorgiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fayetteville, Georgia (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Fayetteville, Georgia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fayetteville',
    'start vending business Fayetteville, Georgia',
    'Fayetteville vending permits',
    'vending machine locations Fayetteville',
    'Fayetteville vending course',
    'vending business guide Georgia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fayetteville-georgia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fayetteville, Georgia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fayetteville, Georgia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fayetteville-georgia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fayetteville, Georgia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fayetteville, Georgia',
    description: 'Complete guide with licensing, locations, and vending course for Fayetteville, Georgia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FayettevilleGeorgiaHowToStartPage />
}
