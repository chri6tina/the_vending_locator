import MontpelierVermontHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Montpelier, Vermont (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Montpelier, Vermont. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Montpelier',
    'start vending business Montpelier, Vermont',
    'Montpelier vending permits',
    'vending machine locations Montpelier',
    'Montpelier vending course',
    'vending business guide Vermont'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/montpelier-vermont'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Montpelier, Vermont',
    description: 'Step-by-step guide with licensing, locations, and vending course for Montpelier, Vermont',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/montpelier-vermont',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Montpelier, Vermont'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Montpelier, Vermont',
    description: 'Complete guide with licensing, locations, and vending course for Montpelier, Vermont'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MontpelierVermontHowToStartPage />
}
