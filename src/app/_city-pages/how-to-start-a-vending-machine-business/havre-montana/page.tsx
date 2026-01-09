import HavreMontanaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Havre, Montana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Havre, Montana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Havre',
    'start vending business Havre, Montana',
    'Havre vending permits',
    'vending machine locations Havre',
    'Havre vending course',
    'vending business guide Montana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/havre-montana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Havre, Montana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Havre, Montana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/havre-montana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Havre, Montana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Havre, Montana',
    description: 'Complete guide with licensing, locations, and vending course for Havre, Montana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HavreMontanaHowToStartPage />
}
