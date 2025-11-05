import ComptonCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Compton, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Compton, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Compton',
    'start vending business Compton California',
    'Compton vending permits',
    'vending machine locations Compton',
    'Compton vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/compton-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Compton, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Compton, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/compton-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Compton, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Compton, California',
    description: 'Complete guide with licensing, locations, and vending course for Compton, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ComptonCaliforniaHowToStartPage />
}
