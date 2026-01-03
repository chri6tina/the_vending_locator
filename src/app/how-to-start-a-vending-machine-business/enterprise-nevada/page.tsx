import EnterpriseNevadaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Enterprise, Nevada (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Enterprise, Nevada. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Enterprise',
    'start vending business Enterprise Nevada',
    'Enterprise vending permits',
    'vending machine locations Enterprise',
    'Enterprise vending course',
    'vending business guide Nevada'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/enterprise-nevada'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Enterprise, Nevada',
    description: 'Step-by-step guide with licensing, locations, and vending course for Enterprise, Nevada',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/enterprise-nevada',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Enterprise, Nevada'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Enterprise, Nevada',
    description: 'Complete guide with licensing, locations, and vending course for Enterprise, Nevada'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <EnterpriseNevadaHowToStartPage />
}
