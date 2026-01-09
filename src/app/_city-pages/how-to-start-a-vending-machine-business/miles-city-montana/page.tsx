import MilesCityMontanaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Miles City, Montana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Miles City, Montana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Miles City',
    'start vending business Miles City, Montana',
    'Miles City vending permits',
    'vending machine locations Miles City',
    'Miles City vending course',
    'vending business guide Montana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/miles-city-montana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Miles City, Montana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Miles City, Montana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/miles-city-montana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Miles City, Montana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Miles City, Montana',
    description: 'Complete guide with licensing, locations, and vending course for Miles City, Montana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MilesCityMontanaHowToStartPage />
}
