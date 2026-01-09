import HomervilleGeorgiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Homerville, Georgia (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Homerville, Georgia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Homerville',
    'start vending business Homerville, Georgia',
    'Homerville vending permits',
    'vending machine locations Homerville',
    'Homerville vending course',
    'vending business guide Georgia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/homerville-georgia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Homerville, Georgia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Homerville, Georgia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/homerville-georgia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Homerville, Georgia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Homerville, Georgia',
    description: 'Complete guide with licensing, locations, and vending course for Homerville, Georgia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HomervilleGeorgiaHowToStartPage />
}
