import EvansvilleIndianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Evansville, Indiana (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Evansville, Indiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Evansville',
    'start vending business Evansville Indiana',
    'Evansville vending permits',
    'vending machine locations Evansville',
    'Evansville vending course',
    'vending business guide Indiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/evansville-indiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Evansville, Indiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Evansville, Indiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/evansville-indiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Evansville, Indiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Evansville, Indiana',
    description: 'Complete guide with licensing, locations, and vending course for Evansville, Indiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <EvansvilleIndianaHowToStartPage />
}
