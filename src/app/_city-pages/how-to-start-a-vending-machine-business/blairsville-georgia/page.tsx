import BlairsvilleGeorgiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Blairsville, Georgia (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Blairsville, Georgia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Blairsville',
    'start vending business Blairsville, Georgia',
    'Blairsville vending permits',
    'vending machine locations Blairsville',
    'Blairsville vending course',
    'vending business guide Georgia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/blairsville-georgia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Blairsville, Georgia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Blairsville, Georgia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/blairsville-georgia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Blairsville, Georgia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Blairsville, Georgia',
    description: 'Complete guide with licensing, locations, and vending course for Blairsville, Georgia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BlairsvilleGeorgiaHowToStartPage />
}
