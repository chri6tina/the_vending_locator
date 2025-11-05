import BurlingtonVermontHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Burlington, Vermont (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Burlington, Vermont. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Burlington',
    'start vending business Burlington Vermont',
    'Burlington vending permits',
    'vending machine locations Burlington',
    'Burlington vending course',
    'vending business guide Vermont'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/burlington-vermont'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Burlington, Vermont',
    description: 'Step-by-step guide with licensing, locations, and vending course for Burlington, Vermont',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/burlington-vermont',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Burlington, Vermont'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Burlington, Vermont',
    description: 'Complete guide with licensing, locations, and vending course for Burlington, Vermont'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BurlingtonVermontHowToStartPage />
}
