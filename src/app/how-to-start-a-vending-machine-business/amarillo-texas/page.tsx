import AmarilloTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Amarillo, Texas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Amarillo, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Amarillo',
    'start vending business Amarillo Texas',
    'Amarillo vending permits',
    'vending machine locations Amarillo',
    'Amarillo vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/amarillo-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Amarillo, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Amarillo, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/amarillo-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Amarillo, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Amarillo, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Amarillo, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AmarilloTexasHowToStartPage />
}
