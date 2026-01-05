import StJosephMontanaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in St. Joseph, Montana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in St. Joseph, Montana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business St. Joseph',
    'start vending business St. Joseph, Montana',
    'St. Joseph vending permits',
    'vending machine locations St. Joseph',
    'St. Joseph vending course',
    'vending business guide Montana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/st-joseph-missouri'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in St. Joseph, Montana',
    description: 'Step-by-step guide with licensing, locations, and vending course for St. Joseph, Montana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/st-joseph-missouri',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in St. Joseph, Montana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in St. Joseph, Montana',
    description: 'Complete guide with licensing, locations, and vending course for St. Joseph, Montana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <StJosephMontanaHowToStartPage />
}
