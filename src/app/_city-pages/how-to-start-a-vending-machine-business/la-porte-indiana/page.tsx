import LaPorteIndianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in La Porte, Indiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in La Porte, Indiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business La Porte',
    'start vending business La Porte, Indiana',
    'La Porte vending permits',
    'vending machine locations La Porte',
    'La Porte vending course',
    'vending business guide Indiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/la-porte-indiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in La Porte, Indiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for La Porte, Indiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/la-porte-indiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in La Porte, Indiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in La Porte, Indiana',
    description: 'Complete guide with licensing, locations, and vending course for La Porte, Indiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LaPorteIndianaHowToStartPage />
}
