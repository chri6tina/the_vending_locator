import WestSacramentoCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in West Sacramento, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in West Sacramento, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business West Sacramento',
    'start vending business West Sacramento, California',
    'West Sacramento vending permits',
    'vending machine locations West Sacramento',
    'West Sacramento vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-sacramento-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in West Sacramento, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for West Sacramento, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-sacramento-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in West Sacramento, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in West Sacramento, California',
    description: 'Complete guide with licensing, locations, and vending course for West Sacramento, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WestSacramentoCaliforniaHowToStartPage />
}
