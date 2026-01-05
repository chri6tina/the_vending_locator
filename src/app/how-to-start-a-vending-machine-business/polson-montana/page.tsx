import PolsonMontanaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Polson, Montana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Polson, Montana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Polson',
    'start vending business Polson, Montana',
    'Polson vending permits',
    'vending machine locations Polson',
    'Polson vending course',
    'vending business guide Montana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/polson-montana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Polson, Montana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Polson, Montana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/polson-montana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Polson, Montana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Polson, Montana',
    description: 'Complete guide with licensing, locations, and vending course for Polson, Montana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PolsonMontanaHowToStartPage />
}
