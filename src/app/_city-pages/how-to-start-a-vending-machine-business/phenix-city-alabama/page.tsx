import PhenixCityAlabamaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Phenix City, Alabama (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Phenix City, Alabama. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Phenix City',
    'start vending business Phenix City, Alabama',
    'Phenix City vending permits',
    'vending machine locations Phenix City',
    'Phenix City vending course',
    'vending business guide Alabama'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/phenix-city-alabama'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Phenix City, Alabama',
    description: 'Step-by-step guide with licensing, locations, and vending course for Phenix City, Alabama',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/phenix-city-alabama',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Phenix City, Alabama'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Phenix City, Alabama',
    description: 'Complete guide with licensing, locations, and vending course for Phenix City, Alabama'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PhenixCityAlabamaHowToStartPage />
}
