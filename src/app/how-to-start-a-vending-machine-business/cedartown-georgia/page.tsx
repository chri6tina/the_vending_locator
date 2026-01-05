import CedartownGeorgiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Cedartown, Georgia (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Cedartown, Georgia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Cedartown',
    'start vending business Cedartown, Georgia',
    'Cedartown vending permits',
    'vending machine locations Cedartown',
    'Cedartown vending course',
    'vending business guide Georgia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cedartown-georgia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Cedartown, Georgia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Cedartown, Georgia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cedartown-georgia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Cedartown, Georgia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Cedartown, Georgia',
    description: 'Complete guide with licensing, locations, and vending course for Cedartown, Georgia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CedartownGeorgiaHowToStartPage />
}
