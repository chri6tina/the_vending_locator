import HamiltonMontanaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hamilton, Montana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Hamilton, Montana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hamilton',
    'start vending business Hamilton, Montana',
    'Hamilton vending permits',
    'vending machine locations Hamilton',
    'Hamilton vending course',
    'vending business guide Montana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hamilton-montana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hamilton, Montana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hamilton, Montana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hamilton-montana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hamilton, Montana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hamilton, Montana',
    description: 'Complete guide with licensing, locations, and vending course for Hamilton, Montana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HamiltonMontanaHowToStartPage />
}
