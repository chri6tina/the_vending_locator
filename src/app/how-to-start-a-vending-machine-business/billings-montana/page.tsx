import BillingsMontanaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Billings, Montana (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Billings, Montana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Billings',
    'start vending business Billings Montana',
    'Billings vending permits',
    'vending machine locations Billings',
    'Billings vending course',
    'vending business guide Montana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/billings-montana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Billings, Montana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Billings, Montana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/billings-montana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Billings, Montana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Billings, Montana',
    description: 'Complete guide with licensing, locations, and vending course for Billings, Montana'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <BillingsMontanaHowToStartPage />
}
