import NampaIdahoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Nampa, Idaho (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Nampa, Idaho. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Nampa',
    'start vending business Nampa Idaho',
    'Nampa vending permits',
    'vending machine locations Nampa',
    'Nampa vending course',
    'vending business guide Idaho'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/nampa-idaho'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Nampa, Idaho',
    description: 'Step-by-step guide with licensing, locations, and vending course for Nampa, Idaho',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/nampa-idaho',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Nampa, Idaho'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Nampa, Idaho',
    description: 'Complete guide with licensing, locations, and vending course for Nampa, Idaho'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <NampaIdahoHowToStartPage />
}
