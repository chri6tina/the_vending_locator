import StCharlesMontanaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in St. Charles, Montana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in St. Charles, Montana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business St. Charles',
    'start vending business St. Charles, Montana',
    'St. Charles vending permits',
    'vending machine locations St. Charles',
    'St. Charles vending course',
    'vending business guide Montana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/st-charles-missouri'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in St. Charles, Montana',
    description: 'Step-by-step guide with licensing, locations, and vending course for St. Charles, Montana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/st-charles-missouri',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in St. Charles, Montana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in St. Charles, Montana',
    description: 'Complete guide with licensing, locations, and vending course for St. Charles, Montana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <StCharlesMontanaHowToStartPage />
}
