import BozemanMontanaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bozeman, Montana (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Bozeman, Montana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bozeman',
    'start vending business Bozeman Montana',
    'Bozeman vending permits',
    'vending machine locations Bozeman',
    'Bozeman vending course',
    'vending business guide Montana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bozeman-montana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bozeman, Montana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bozeman, Montana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bozeman-montana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bozeman, Montana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bozeman, Montana',
    description: 'Complete guide with licensing, locations, and vending course for Bozeman, Montana'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <BozemanMontanaHowToStartPage />
}
