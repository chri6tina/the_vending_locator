import RanchoCordovaCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Rancho Cordova, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Rancho Cordova, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Rancho Cordova',
    'start vending business Rancho Cordova, California',
    'Rancho Cordova vending permits',
    'vending machine locations Rancho Cordova',
    'Rancho Cordova vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rancho-cordova-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Rancho Cordova, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Rancho Cordova, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rancho-cordova-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Rancho Cordova, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Rancho Cordova, California',
    description: 'Complete guide with licensing, locations, and vending course for Rancho Cordova, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RanchoCordovaCaliforniaHowToStartPage />
}
