import CorsicanaTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Corsicana, Texas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Corsicana, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Corsicana',
    'start vending business Corsicana, Texas',
    'Corsicana vending permits',
    'vending machine locations Corsicana',
    'Corsicana vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/corsicana-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Corsicana, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Corsicana, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/corsicana-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Corsicana, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Corsicana, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Corsicana, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CorsicanaTexasHowToStartPage />
}
