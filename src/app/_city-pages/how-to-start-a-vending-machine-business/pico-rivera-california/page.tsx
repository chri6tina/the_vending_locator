import PicoRiveraCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pico Rivera, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Pico Rivera, C. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pico Rivera',
    'start vending business Pico Rivera California',
    'Pico Rivera vending permits',
    'vending machine locations Pico Rivera',
    'Pico Rivera vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pico-rivera-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pico Rivera, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pico Rivera, C',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pico-rivera-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pico Rivera, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pico Rivera, California',
    description: 'Complete guide with licensing, locations, and vending course for Pico Rivera, C'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PicoRiveraCaliforniaHowToStartPage />
}



