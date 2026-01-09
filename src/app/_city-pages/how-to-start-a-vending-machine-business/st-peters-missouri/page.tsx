import StPetersMontanaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in St. Peters, Montana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in St. Peters, Montana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business St. Peters',
    'start vending business St. Peters, Montana',
    'St. Peters vending permits',
    'vending machine locations St. Peters',
    'St. Peters vending course',
    'vending business guide Montana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/st-peters-missouri'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in St. Peters, Montana',
    description: 'Step-by-step guide with licensing, locations, and vending course for St. Peters, Montana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/st-peters-missouri',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in St. Peters, Montana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in St. Peters, Montana',
    description: 'Complete guide with licensing, locations, and vending course for St. Peters, Montana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <StPetersMontanaHowToStartPage />
}
